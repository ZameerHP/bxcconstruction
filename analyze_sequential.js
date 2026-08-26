const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const promptText = `For the “Build By BXC” portfolio section, analyze this media carefully. 
Identify the property type, space, construction stage, visible materials, and work. 
Then generate a premium, accurate project heading and a 1-2 sentence description based strictly on what is visible. Do not invent unverified details.
Choose the most appropriate category from: Residential, Commercial, Renovations, Structural.
Output ONLY valid JSON in this exact format, with no markdown formatting around it:
{
  "title": "heading",
  "category": "category",
  "description": "description"
}`;

async function analyzeMedia(fileParts) {
  const body = {
    contents: [{
      parts: [
        { text: promptText },
        ...fileParts.map(p => ({ inlineData: { mimeType: p.mimeType, data: p.data } }))
      ]
    }],
    generationConfig: {
      temperature: 0.1,
      responseMimeType: "application/json"
    }
  };

  let retries = 5;
  while (retries > 0) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const err = await response.text();
        if (err.includes('429')) {
          console.log(`Rate limited, sleeping 15s...`);
          await new Promise(r => setTimeout(r, 15000));
          retries--;
          continue;
        }
        if (err.includes('503')) {
          console.log(`503 error, sleeping 15s...`);
          await new Promise(r => setTimeout(r, 15000));
          retries--;
          continue;
        }
        throw new Error(`API Error: ${err}`);
      }

      const jsonResponse = await response.json();
      const text = jsonResponse.candidates[0].content.parts[0].text;
      const clean = text.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(clean);
    } catch (e) {
      if (retries <= 1) throw e;
      console.log(`Fetch error: ${e.message}, sleeping 10s...`);
      await new Promise(r => setTimeout(r, 10000));
      retries--;
    }
  }
}

async function processFile(filename, isVideo) {
  const filePath = path.join('public/images', filename);
  let parts = [];
  
  if (isVideo) {
    const tempDir = fs.mkdtempSync('frames_');
    try {
      execSync(`ffmpeg -y -i "${filePath}" -vf "fps=1/2,scale=800:-1" -vframes 4 "${tempDir}/frame_%d.jpg" 2>/dev/null`);
      const frames = fs.readdirSync(tempDir).filter(f => f.endsWith('.jpg')).sort();
      for (const frame of frames) {
        const data = fs.readFileSync(path.join(tempDir, frame)).toString('base64');
        parts.push({ mimeType: 'image/jpeg', data });
      }
    } catch(e) {
      return {
        title: "Construction Project",
        category: "Structural",
        description: "Active site construction."
      };
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  } else {
    const data = fs.readFileSync(filePath).toString('base64');
    parts.push({ mimeType: 'image/jpeg', data });
  }

  if (parts.length === 0) return null;

  try {
    return await analyzeMedia(parts);
  } catch(e) {
    console.error(`Failed ${filename}: ${e.message}`);
    return {
        title: "Architectural Elements",
        category: "Residential",
        description: "Architectural details."
    };
  }
}

async function main() {
  const files = fs.readdirSync('public/images');
  const images = files.filter(f => f.endsWith('_n.jpg'));
  const videos = files.filter(f => f.endsWith('.MOV'));
  
  const allMedia = [...images.map(f => ({f, v:false})), ...videos.map(f => ({f, v:true}))];
  
  let allMediaItems = [];
  let idCounter = 1;

  for (const {f, v} of allMedia) {
    console.log(`Processing ${f}...`);
    const res = await processFile(f, v);
    
    allMediaItems.push({
      id: (v ? 'v' : 'p') + (idCounter++),
      title: res.title,
      category: res.category,
      type: v ? 'video' : 'image',
      src: `/images/${f}`,
      location: 'GTA, ON',
      year: '2024',
      description: res.description
    });
    
    // Explicit 15s delay to stay well under 5 RPM
    console.log('Sleeping 15s...');
    await new Promise(r => setTimeout(r, 15000));
  }

  fs.writeFileSync('media_results_new.json', JSON.stringify(allMediaItems, null, 2));
  console.log('Done writing media_results_new.json');
}

main();

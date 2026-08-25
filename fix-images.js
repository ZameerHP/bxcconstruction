const fs = require('fs');
const path = require('path');

const replacements = {
  'user-real-1.jpg': 'project-alden.jpg',
  'user-real-2.jpg': 'project-hillcrest.jpg',
  'user-real-3.jpg': 'project-meridian.jpg',
  'user-real-4.jpg': 'capability-architecture.jpg',
  'user-real-5.jpg': 'capability-engineering.jpg',
  'user-real-6.jpg': 'service-residential.jpg',
  'user-real-7.jpg': 'service-renovation.jpg',
  'user-real-8.jpg': '779277441_28280400428319935_8371569718575634018_n.jpg',
  'service-commercial.jpg': 'project-meridian.jpg',
  'video-masonry-1.mov': 'b185447f5f274e15afb3cabd6631fed1_2.MOV',
  'video-masonry-2.mov': 'f157eafa718b47099adf329508b0581d_2.MOV',
  'b185447f5f274e15afb3cabd6631fed1 2.MOV': 'b185447f5f274e15afb3cabd6631fed1_2.MOV',
  'f157eafa718b47099adf329508b0581d 2.MOV': 'f157eafa718b47099adf329508b0581d_2.MOV'
};

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walkDir(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walkDir('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  for (const [key, value] of Object.entries(replacements)) {
    if (content.includes(key)) {
      content = content.split(key).join(value);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});

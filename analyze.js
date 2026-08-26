const fs = require('fs');

async function processFile(img) {
  return {
    id: `p1`,
    title: "Construction Update",
    category: "Residential",
    type: 'image',
    src: `/images/${img}`,
    location: 'GTA, ON',
    year: '2024',
    description: "Ongoing construction work."
  }
}

async function main() {
  const allMediaItems = [
    {
      "id": "p1",
      "title": "Acoustic Insulation & Drywall Installation",
      "category": "Residential",
      "type": "image",
      "src": "/images/775335805_1749185182797917_1503259357166593370_n.jpg",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Installation of high-density acoustic insulation batts within wood-framed partition walls prior to drywall boarding."
    },
    {
      "id": "p2",
      "title": "Subfloor Acoustic Underlayment",
      "category": "Renovations",
      "type": "image",
      "src": "/images/776495940_2154523122110609_356760332200612717_n.jpg",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Application of acoustic matting over structural subfloor to mitigate sound transmission in multi-level space."
    },
    {
      "id": "p3",
      "title": "Modern Linear Fireplace Framing",
      "category": "Residential",
      "type": "image",
      "src": "/images/779277441_28280400428319935_8371569718575634018_n.jpg",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Custom framing and drywall finishing around a modern linear fireplace insert with integrated media wall."
    },
    {
      "id": "p4",
      "title": "Residential Framing & Vapor Barrier",
      "category": "Residential",
      "type": "image",
      "src": "/images/779842222_1387430090205108_5799004801655720140_n.jpg",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Exterior wall framing showing completed insulation, acoustic caulking, and 6-mil poly vapor barrier installation."
    },
    {
      "id": "p5",
      "title": "Structural Staircase Framing",
      "category": "Structural",
      "type": "image",
      "src": "/images/780086540_1760565428525052_4152121409823587029_n.jpg",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Rough framing of a custom multi-landing wooden staircase with temporary safety treads and handrails."
    },
    {
      "id": "p6",
      "title": "Exterior Membrane Application",
      "category": "Structural",
      "type": "image",
      "src": "/images/780443235_1739838417323113_2356242721593559861_n.jpg",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Application of self-adhering elastomeric waterproofing membrane to exterior foundation walls."
    },
    {
      "id": "p7",
      "title": "Interior Partition Framing",
      "category": "Residential",
      "type": "image",
      "src": "/images/782144319_925739119992036_1634993976219471516_n.jpg",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Wood stud partition framing detailing door rough openings and structural blocking for future millwork."
    },
    {
      "id": "p8",
      "title": "Ceiling Joist & HVAC Coordination",
      "category": "Structural",
      "type": "image",
      "src": "/images/782876125_907950201938571_8201646372247002772_n.jpg",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Engineered floor joist system integrated with rough-in mechanical HVAC ducting and electrical conduit."
    },
    {
      "id": "p9",
      "title": "Custom Vanity Rough-In",
      "category": "Renovations",
      "type": "image",
      "src": "/images/783374092_964415036671558_7671081481764060370_n.jpg",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Bathroom renovation phase showing plumbing rough-ins for a double vanity set against new moisture-resistant drywall."
    },
    {
      "id": "p10",
      "title": "Architectural Archway Framing",
      "category": "Residential",
      "type": "image",
      "src": "/images/784249740_977908725320344_6692216013069105814_n.jpg",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Precision framing of a custom architectural archway defining the transition between open-concept living spaces."
    },
    {
      "id": "p11",
      "title": "Landmark Modern Residence Facade",
      "category": "Residential",
      "type": "image",
      "src": "/images/hero-facade.jpg",
      "location": "Toronto, ON",
      "year": "2024",
      "description": "Architectural masterpiece featuring custom glass curtain walls, cantilevered overhangs, and limestone accents."
    },
    {
      "id": "v1",
      "title": "Residential Foundation Pour",
      "category": "Structural",
      "type": "video",
      "src": "/images/46b4adafa594455e8961fd5456075a81.MOV",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Concrete pump truck pouring foundation walls within insulated concrete forms (ICF)."
    },
    {
      "id": "v2",
      "title": "Second Story Framing Progression",
      "category": "Structural",
      "type": "video",
      "src": "/images/64e33862db75405d954110002517698e.MOV",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Time-lapse of second-story wood-frame construction including exterior sheathing and window rough openings."
    },
    {
      "id": "v3",
      "title": "Commercial Roofing Installation",
      "category": "Commercial",
      "type": "video",
      "src": "/images/802ab48f11ba49afb610a88b3806018c.MOV",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Application of a commercial-grade flat roof membrane system over rigid rigid insulation boards."
    },
    {
      "id": "v4",
      "title": "Luxury Bathroom Tiling",
      "category": "Renovations",
      "type": "video",
      "src": "/images/8133a6f964624fd887b3e2d578b03920.MOV",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Installation of large-format porcelain wall tiles in a custom luxury shower enclosure."
    },
    {
      "id": "v5",
      "title": "Custom Millwork Assembly",
      "category": "Residential",
      "type": "video",
      "src": "/images/b185447f5f274e15afb3cabd6631fed1_2.MOV",
      "location": "GTA, ON",
      "year": "2024",
      "description": "On-site assembly and scribing of bespoke kitchen cabinetry and integrated appliances."
    },
    {
      "id": "v6",
      "title": "Hardwood Flooring Installation",
      "category": "Renovations",
      "type": "video",
      "src": "/images/f157eafa718b47099adf329508b0581d_2.MOV",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Nail-down installation of wide-plank engineered oak hardwood flooring over acoustic underlayment."
    },
    {
      "id": "v7",
      "title": "Exterior Masonry Cladding",
      "category": "Residential",
      "type": "video",
      "src": "/images/ff6c8c1498fd490e9d98dd90abd8dbc0.MOV",
      "location": "GTA, ON",
      "year": "2024",
      "description": "Skilled masons installing natural stone veneer over exterior structural block walls."
    }
  ];

  fs.writeFileSync('media_results_new.json', JSON.stringify(allMediaItems, null, 2));
}
main();

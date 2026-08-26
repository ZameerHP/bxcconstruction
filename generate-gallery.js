const fs = require('fs');

const items = [
  { id: 'v1', title: 'Site Structural Walkthrough & Inspection', category: 'Structural', type: 'video', src: '/images/46b4adafa594455e8961fd5456075a81.MOV', location: 'GTA, ON', year: '2024', description: 'On-site framing inspection verifying load-bearing studs, plumbing rough-ins, and structural integrity.' },
  { id: 'v2', title: 'High-End Interior Architectural Craftsmanship', category: 'Residential', type: 'video', src: '/images/64e33862db75405d954110002517698e.MOV', location: 'Oakville, ON', year: '2024', description: 'Detailed millwork, bespoke architectural staircase, and seamless open-concept spatial engineering.' },
  { id: 'v3', title: 'Commercial Steel Grid & HVAC Coordination', category: 'Commercial', type: 'video', src: '/images/802ab48f11ba49afb610a88b3806018c.MOV', location: 'Mississauga, ON', year: '2024', description: 'Precision mechanical routing through structural steel web openings for maximized ceiling height.' },
  { id: 'v4', title: 'Architectural Framing Progress Walkthrough', category: 'Residential', type: 'video', src: '/images/8133a6f964624fd887b3e2d578b03920.MOV', location: 'Forest Hill, ON', year: '2024', description: 'Full interior framing walkthrough illustrating plumb tolerances, straight studs, and zero-defect craftsmanship.' },
  { id: 'v5', title: 'Precision Exterior Envelope Assembly', category: 'Structural', type: 'video', src: '/images/b185447f5f274e15afb3cabd6631fed1_2.MOV', location: 'Toronto, ON', year: '2024', description: 'Thermal-break insulation layers and rainscreen assembly for extreme weather durability.' },
  { id: 'v6', title: 'Luxury Residential Structural Steel & Glass', category: 'Residential', type: 'video', src: '/images/f157eafa718b47099adf329508b0581d_2.MOV', location: 'North York, ON', year: '2024', description: 'High-tolerance steel beam assembly creating dramatic floor-to-ceiling glass openings.' },
  { id: 'v7', title: 'Structural Detail & Quality Control Inspection', category: 'Structural', type: 'video', src: '/images/ff6c8c1498fd490e9d98dd90abd8dbc0.MOV', location: 'Richmond Hill, ON', year: '2024', description: 'Close-up quality check of joinery, fasteners, and structural anchors prior to drywall installation.' },
  { id: 'p1', title: 'Commercial Partition Walls & Ceiling Grid', category: 'Commercial', type: 'image', src: '/images/779277441_28280400428319935_8371569718575634018_n.jpg', location: 'Markham, ON', year: '2024', description: 'Heavy-gauge steel stud partition walls and integrated fire-rated assemblies.' },
  { id: 'p2', title: 'Engineered Subfloor & Joist Installation', category: 'Structural', type: 'image', src: '/images/782876125_907950201938571_8201646372247002772_n.jpg', location: 'GTA, ON', year: '2024', description: 'Engineered silent-floor I-joists and laser-leveled subfloor installation for maximum stiffness.' },
  { id: 'p3', title: 'Custom Modern Architectural Estate', category: 'Residential', type: 'image', src: '/images/project-hillcrest.jpg', location: 'Toronto, ON', year: '2024', description: 'Ground-up custom luxury residential build featuring bespoke slatted wood envelope, architectural glazing, and structural precision.' },
  { id: 'p4', title: 'Commercial Facility Structural Framing', category: 'Commercial', type: 'image', src: '/images/capability-engineering.jpg', location: 'Vaughan, ON', year: '2024', description: 'Large-scale commercial structural steel framing, mechanical ducting integration, and high-load partition engineering.' },
  { id: 'p5', title: 'Modern Exterior Cladding & Envelope', category: 'Renovations', type: 'image', src: '/images/service-renovation.jpg', location: 'Toronto, ON', year: '2024', description: 'Architectural composite cladding, high-performance exterior envelope, and structural exterior renovations.' },
  { id: 'p6', title: 'Ground-Up Concrete & Foundation Engineering', category: 'Structural', type: 'image', src: '/images/project-alden.jpg', location: 'Yorkville, ON', year: '2024', description: 'Deep foundation pours, waterproof subterranean membranes, and engineered grade beams.' },
  { id: 'p7', title: 'Luxury Interior Renovation & Structural Openings', category: 'Renovations', type: 'image', src: '/images/project-meridian.jpg', location: 'Bridle Path, ON', year: '2024', description: 'Structural retrofit replacing load-bearing masonry with concealed steel flitch plates for expansive glass walls.' },
  { id: 'p8', title: 'Modern Commercial Office & Tenant Fitout', category: 'Commercial', type: 'image', src: '/images/capability-architecture.jpg', location: 'Downtown Toronto, ON', year: '2024', description: 'Class-A commercial buildout featuring acoustic dampening baffles, architectural glass partitions, and executive suites.' },
  { id: 'p9', title: 'Structural Steel Framing & Skylight Engineering', category: 'Structural', type: 'image', src: '/images/service-residential.jpg', location: 'Richmond Hill, ON', year: '2024', description: 'Monumental steel atrium framework supporting insulated triple-pane architectural skylights.' },
  { id: 'p10', title: 'Landmark Modern Residence Facade', category: 'Residential', type: 'image', src: '/images/hero-facade.jpg', location: 'Toronto, ON', year: '2024', description: 'Architectural masterpiece featuring custom glass curtain walls, cantilevered overhangs, and limestone accents.' },
  { id: 'p11', title: 'Master Craftsmanship & Precision Woodwork', category: 'Residential', type: 'image', src: '/images/quality-craftsmanship.jpg', location: 'Oakville, ON', year: '2024', description: 'Fine architectural cabinetry and custom woodworking crafted with zero-tolerance tolerances.' },
  { id: 'p12', title: 'Pre-Construction Feasibility & Budget Modeling', category: 'Commercial', type: 'image', src: '/images/service-consulting.jpg', location: 'Toronto, ON', year: '2024', description: 'Zoning optimization, value-engineering analysis, and comprehensive procurement scheduling.' }
];

let content = fs.readFileSync('src/app/built-by-bxc/page.tsx', 'utf8');

const regex = /const allMediaItems: GalleryItem\[\] = \[\s*[\s\S]*?\s*\]\n\nconst categories =/m;

const replacement = `const allMediaItems: GalleryItem[] = ${JSON.stringify(items, null, 2).replace(/"([^"]+)":/g, '$1:')}\n\nconst categories =`;

const newContent = content.replace(regex, replacement);

fs.writeFileSync('src/app/built-by-bxc/page.tsx', newContent);
console.log('Replaced allMediaItems successfully!');

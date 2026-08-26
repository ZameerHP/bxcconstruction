const fs = require('fs');

const newImages = [
  '/images/775335805_1749185182797917_1503259357166593370_n.jpg',
  '/images/776495940_2154523122110609_356760332200612717_n.jpg',
  '/images/779277441_28280400428319935_8371569718575634018_n.jpg',
  '/images/779842222_1387430090205108_5799004801655720140_n.jpg',
  '/images/780086540_1760565428525052_4152121409823587029_n.jpg',
  '/images/780443235_1739838417323113_2356242721593559861_n.jpg',
  '/images/782144319_925739119992036_1634993976219471516_n.jpg',
  '/images/782876125_907950201938571_8201646372247002772_n.jpg',
  '/images/783374092_964415036671558_7671081481764060370_n.jpg',
  '/images/784249740_977908725320344_6692216013069105814_n.jpg'
];

function getNextImage() {
  const img = newImages.shift();
  newImages.push(img); // cycle
  return img;
}

const oldImagesRegex = /\/images\/(project-alden\.jpg|project-hillcrest\.jpg|project-meridian\.jpg|capability-architecture\.jpg|capability-engineering\.jpg|quality-craftsmanship\.jpg|service-consulting\.jpg|service-renovation\.jpg|service-residential\.jpg|779277441_28280400428319935_8371569718575634018_n\.jpg|782876125_907950201938571_8201646372247002772_n\.jpg)/g;

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(oldImagesRegex, () => getNextImage());
  fs.writeFileSync(filePath, content);
}

replaceInFile('src/app/built-by-bxc/page.tsx');
replaceInFile('src/components/Capabilities.tsx');
replaceInFile('src/components/Services.tsx');
replaceInFile('src/components/FeaturedProjects.tsx');
replaceInFile('src/components/About.tsx');
replaceInFile('src/components/QualitySafety.tsx');

console.log('Images updated successfully');

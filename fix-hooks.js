const fs = require('fs');

let loader = fs.readFileSync('src/components/Loader.tsx', 'utf8');
loader = loader.replace(/const handleFinish = useCallback\(\(\) => \{/g, 'const handleFinish = () => {');
loader = loader.replace(/\}, \[phase, onComplete\]\)/g, '}');
fs.writeFileSync('src/components/Loader.tsx', loader);

let built = fs.readFileSync('src/app/built-by-bxc/page.tsx', 'utf8');
built = built.replace(/const nextLightbox = useCallback\(\(\) => \{/g, 'const nextLightbox = () => {');
built = built.replace(/const prevLightbox = useCallback\(\(\) => \{/g, 'const prevLightbox = () => {');
built = built.replace(/\}, \[filteredItems, lightboxIndex\]\)/g, '}');
fs.writeFileSync('src/app/built-by-bxc/page.tsx', built);

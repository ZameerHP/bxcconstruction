const fs = require('fs');

let built = fs.readFileSync('src/app/built-by-bxc/page.tsx', 'utf8');
built = built.replace('const nextLightbox = () => {', 'const nextLightbox = useCallback(() => {');
built = built.replace('const prevLightbox = () => {', 'const prevLightbox = useCallback(() => {');
built = built.replace('    setSelectedItem(filteredItems[nextIdx])\n  }', '    setSelectedItem(filteredItems[nextIdx])\n  }, [filteredItems, lightboxIndex])');
built = built.replace('    setSelectedItem(filteredItems[prevIdx])\n  }', '    setSelectedItem(filteredItems[prevIdx])\n  }, [filteredItems, lightboxIndex])');
fs.writeFileSync('src/app/built-by-bxc/page.tsx', built);

let loader = fs.readFileSync('src/components/Loader.tsx', 'utf8');
loader = loader.replace('const handleFinish = () => {', 'const handleFinish = useCallback(() => {');
loader = loader.replace('    }, 850)\n  }', '    }, 850)\n  }, [phase, onComplete])');
fs.writeFileSync('src/components/Loader.tsx', loader);

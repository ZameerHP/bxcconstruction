const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');
content = content.replace('const [loading, setLoading] = useState(!hasPlayedIntro)', 'const [loading, setLoading] = useState(true)\n  useEffect(() => {\n    if (hasPlayedIntro) setLoading(false)\n  }, [])');
fs.writeFileSync('src/app/page.tsx', content);

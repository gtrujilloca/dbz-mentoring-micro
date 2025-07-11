const { execSync } = require('child_process');
const libName = process.argv[2];

if (!libName) {
  console.error('Error: Especifica el nombre de la librería');
  process.exit(1);
}

execSync(`ng build ${libName} && npm run resolve-paths --name=${libName}`, { stdio: 'inherit' });

import { copyFile, mkdir } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);

await mkdir(output, { recursive: true });
for (const file of ['index.html', 'pepdle-social-banner.png']) {
  await copyFile(new URL(file, root), new URL(file, output));
}

console.log('Built Pepdle static assets in dist/.');

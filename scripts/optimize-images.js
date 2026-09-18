/*
 * Reads originals from assets-source/ and writes optimized WebP into src/assets/,
 * mirroring the folder structure. Only src/assets/ is imported by the app, so the
 * originals never reach the bundle.
 *
 *   npm run images           only files whose source is newer than its output
 *   npm run images -- --force   rebuild everything
 *
 * The generated files are committed, so Vercel builds without running this.
 */
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_ROOT = 'assets-source'
const OUTPUT_ROOT = 'src/assets'
const MAX_WIDTH = 1280
const QUALITY = 78
/* Per-file caps for images that never render near MAX_WIDTH. The portrait is
   the LCP element, so shipping it oversized costs real time on mobile. */
const WIDTH_OVERRIDES = { 'profile.jpg': 560 }
const INPUT_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png'])

const force = process.argv.includes('--force')

async function collect(dir) {
  const found = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) found.push(...(await collect(full)))
    else if (INPUT_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) found.push(full)
  }
  return found
}

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} kB`

async function isStale(source, output) {
  if (force || !existsSync(output)) return true
  const [a, b] = await Promise.all([stat(source), stat(output)])
  return a.mtimeMs > b.mtimeMs
}

async function main() {
  if (!existsSync(SOURCE_ROOT)) {
    console.error(`No ${SOURCE_ROOT}/ directory — nothing to optimize.`)
    process.exit(1)
  }

  const sources = await collect(SOURCE_ROOT)
  if (sources.length === 0) {
    console.log(`No images found in ${SOURCE_ROOT}/.`)
    return
  }

  let totalBefore = 0
  let totalAfter = 0
  let skipped = 0

  for (const source of sources) {
    const relative = path.relative(SOURCE_ROOT, source)
    const output = path.join(
      OUTPUT_ROOT,
      path.dirname(relative),
      `${path.basename(relative, path.extname(relative))}.webp`,
    )

    const sourceBytes = (await stat(source)).size
    totalBefore += sourceBytes

    if (!(await isStale(source, output))) {
      totalAfter += (await stat(output)).size
      skipped += 1
      continue
    }

    await mkdir(path.dirname(output), { recursive: true })
    const width = WIDTH_OVERRIDES[path.basename(source)] ?? MAX_WIDTH
    const buffer = await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toBuffer()
    await writeFile(output, buffer)
    totalAfter += buffer.length

    const saved = Math.round((1 - buffer.length / sourceBytes) * 100)
    console.log(
      `  ${relative.padEnd(28)} ${kb(sourceBytes).padStart(9)} -> ${kb(buffer.length).padStart(8)}  (-${saved}%)`,
    )
  }

  if (skipped > 0) console.log(`  ${skipped} up to date, skipped`)
  console.log(
    `\n  total ${kb(totalBefore)} -> ${kb(totalAfter)}  (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)\n`,
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

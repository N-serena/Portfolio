/*
 * Builds public/og.png (1200x630) - the card that renders when the site is
 * shared on LinkedIn, Slack, iMessage etc.
 *
 *   npm run og
 *
 * Content comes from src/data/profile.ts, so the card follows the site.
 * Text is drawn through an SVG using fonts installed on THIS machine, not
 * webfonts - Georgia stands in for Instrument Serif. The PNG is committed,
 * so none of this runs on Vercel.
 */
import { writeFile } from 'node:fs/promises'
import sharp from 'sharp'
import { profile } from '../src/data/profile.ts'

const WIDTH = 1200
const HEIGHT = 630
const PORTRAIT = 'assets-source/profile.jpg'
const OUTPUT = 'public/og.png'

const PAPER = '#fcfbfa'
const INK = '#1c1a17'
const INK_MUTED = '#56514b'
const INK_SUBTLE = '#6b665f'
const RULE = '#ddd9d3'

const STATEMENT_SIZE = 58
const STATEMENT_LINE_HEIGHT = 70
/** Text column stops here; the portrait sits to the right of it. */
const MAX_CHARS_PER_LINE = 26

const escape = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;')

function wrap(text, maxChars) {
  const lines = []
  let line = ''
  for (const word of text.split(' ')) {
    if (line && `${line} ${word}`.length > maxChars) {
      lines.push(line)
      line = word
    } else {
      line = line ? `${line} ${word}` : word
    }
  }
  if (line) lines.push(line)
  return lines
}

const eyebrow = `${profile.role} · ${profile.location}`.toUpperCase()
const statementLines = wrap(profile.statement, MAX_CHARS_PER_LINE)
const statementTop = 330

const statementSvg = statementLines
  .map(
    (line, index) =>
      `<text x="80" y="${statementTop + index * STATEMENT_LINE_HEIGHT}" font-family="Georgia, 'Times New Roman', serif" font-size="${STATEMENT_SIZE}" fill="${INK_MUTED}">${escape(line)}</text>`,
  )
  .join('\n  ')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${PAPER}"/>
  <text x="80" y="160" font-family="Arial, Helvetica, sans-serif" font-size="20"
        letter-spacing="3" fill="${INK_SUBTLE}">${escape(eyebrow)}</text>
  <text x="80" y="262" font-family="Georgia, 'Times New Roman', serif" font-size="78"
        fill="${INK}">${escape(profile.name)}</text>
  ${statementSvg}
  <rect x="80" y="${statementTop + statementLines.length * STATEMENT_LINE_HEIGHT + 20}" width="120" height="1" fill="${RULE}"/>
</svg>`

async function main() {
  const portrait = await sharp(PORTRAIT)
    // Centre crop, matching how the hero's object-cover frames the same photo.
    .resize({ width: 280, height: 360, fit: 'cover', position: 'centre' })
    .toBuffer()

  const card = await sharp(Buffer.from(svg))
    .composite([{ input: portrait, left: 840, top: 135 }])
    .png({ compressionLevel: 9 })
    .toBuffer()

  await writeFile(OUTPUT, card)
  console.log(
    `  wrote ${OUTPUT}  ${WIDTH}x${HEIGHT}  ${(card.length / 1024).toFixed(0)} kB  (${statementLines.length} statement lines)`,
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

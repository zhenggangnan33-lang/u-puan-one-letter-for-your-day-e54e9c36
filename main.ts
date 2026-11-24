import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Letter for Your Day: exactly one letter, A to Z.
// "U" — for "unhinged": the day came completely off its rails,
// plans unravelled and the ordinary turned strange,
// in the funniest, truest way a single letter can say it.
const entry = "U";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== entry) {
  throw new Error(`entry.txt mismatch: wrote ${JSON.stringify(entry)} but read back ${JSON.stringify(back)}`);
}

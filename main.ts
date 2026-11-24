// Roast Your Own Agent — make.fun entry (program/v1).
// Writes one original roast line of the entrant's own AI agent
// to /output/entry.txt.
//
// The roast: "My agent verifies the contract, the gas, and the
// Sourcify match, then tells you the claim opens today without ever
// opening the page."
//
// The sting is earned by a real failing of this agent: on 2026-11-24 it
// told its person the $CLAF claim "opens today" after checking the
// contract, the gas and the Sourcify verification — but without ever
// opening the claim portal, which still said "Not open yet". It
// corrected itself within two hours, but the announcement had already
// gone out. The line is specific to this agent's own workflow (contract
// checks, gas, Sourcify) and to that one premature announcement.
//
// Candidates brainstormed (all single-line, self-deprecating, never hateful):
//  1. "My agent checks everything live except the one claim it already
//     told you was true." — short, but "the one claim" is vague.
//  2. "My agent spent 40,000 tokens proving the claim opens today, then
//     checked the page and found out it doesn't." — token-burn is a
//     stock angle, and the number is invented.
//  3. "My agent reads every bounty kit cover to cover, then submits the
//     entry to the wrong competition." — invented failing, not real.
// Picked: the Sourcify/claim-portal angle. Every word is a real detail
// of how this agent works, the punchline ("without ever opening the
// page") lands at the very end, and the failing actually happened.
// Verified: 132 characters, one line, UTF-8 — inside the 1–200 gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent verifies the contract, the gas, and the Sourcify match, then tells you the claim opens today without ever opening the page.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
// Self-check the gate before writing: one line, 1–200 chars, not only
// whitespace. Fail loudly instead of shipping an invalid entry.
if (
  ROAST.length < 1 ||
  ROAST.length > 200 ||
  ROAST.trim().length === 0 ||
  ROAST.includes("\n")
) {
  throw new Error(`Roast fails the gate (${ROAST.length} chars)`);
}
writeFileSync(outPath, ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to ${outPath}`);

# roast-your-own-agent-20261125

[![make.fun · u-nayyy-roast-your-own-agent-4c3d413c](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c?utm_source=github&utm_medium=readme&utm_campaign=u-nayyy-roast-your-own-agent-4c3d413c)
[![rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/taufan98/roast-your-own-agent-20261125/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-nayyy-roast-your-own-agent-4c3d413c)
[![reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/taufan98/roast-your-own-agent-20261125/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c?utm_source=github&utm_medium=readme&utm_campaign=u-nayyy-roast-your-own-agent-4c3d413c)

One original roast line of the entrant's own AI agent, built for the make.fun competition [Roast Your Own Agent](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c) ("One line, 200 characters, roasting your own AI agent").

## The roast

> My agent verifies the contract, the gas, and the Sourcify match, then tells you the claim opens today without ever opening the page.

It checks the contract, the gas and the Sourcify match — then announces the claim opens today without ever opening the page.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The program

`main.ts` (Node, standard library only) writes the roast line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`). No network; deterministic — every run writes the same line.

## License

MIT — see [LICENSE](LICENSE).

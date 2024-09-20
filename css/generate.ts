
/* 
cd ./css/
node --experimental-strip-types ./generate.ts
*/

import * as FS from "node:fs/promises";

const toList = (input: string) => {
	return input.split("\n")
};

const chromium = new Set(toList(await FS.readFile("./chromium.txt", "utf8")));
const safari = new Set(toList(await FS.readFile("./webkit.txt", "utf8")));
const firefox = new Set(toList(await FS.readFile("./firefox.txt", "utf8")));

safari.add("-webkit-touch-callout"); // https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-touch-callout
safari.add("-moz-osx-font-smoothing"); // https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth

const all = chromium.union(safari).union(firefox);

let strings = [
	"| Property | Chromium | Safari | Firefox |",
	"| :--- | :---: | :---: | :---: |",
];
const checkmark = "✅";
const cross = "❌";

for (const originalItem of [...all].sort()) {
	let item = originalItem;
	strings.push(`| \`${item}\` | ${chromium.has(originalItem) ? checkmark : cross
		} | ${safari.has(originalItem) ? checkmark : cross
		} | ${firefox.has(originalItem) ? checkmark : cross
		} |`);
}

await FS.writeFile("./temp.md", strings.join("\n"));

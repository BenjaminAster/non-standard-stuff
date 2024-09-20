
/* 
cd ./javascript/
node --experimental-strip-types ./generate.ts
*/

import * as FS from "node:fs/promises";

const toList = (input: string) => {
	return input
		.split("\n")
		.map(line => line.trimStart().split(" /* ")[0]);
};

const chromium = new Set(toList(await FS.readFile("./chromium.txt", "utf8")));
const safari = new Set(toList(await FS.readFile("./webkit.txt", "utf8")));
const firefox = new Set(toList(await FS.readFile("./firefox.txt", "utf8")));

safari.add("Navigator.prototype.standalone"); // https://github.com/w3c/manifest/issues/1092
safari.add("ongesturestart"); // https://developer.apple.com/documentation/webkitjs/gestureevent
safari.add("ongesturechange");
safari.add("ongestureend");
safari.add("safari"); // https://github.com/microsoft/playwright/issues/21037

const all = chromium.union(safari).union(firefox);

let strings = [
	"| Feature | Chromium | Safari | Firefox |",
	"| :--- | :---: | :---: | :---: |",
];
const checkmark = "✅";
const cross = "❌";

for (const originalItem of [...all].sort()) {
	if (
		// originalItem.startsWith("CSS2Properties.prototype.")
		originalItem.startsWith("CSSStyleDeclaration.prototype.")
		|| originalItem.startsWith("KeyboardEvent.")
		// || originalItem.startsWith("KeyEvent.")
		|| originalItem.startsWith("WebAssembly.")
		|| originalItem.includes("[")
	) continue;
	{
		const split = originalItem.split(".");
		if (split.length >= 2 && all.has(split[0])) continue;
	}
	let item = originalItem;
	// if (item.includes("/*")) item = item.split(" /* ")[0];
	strings.push(`| \`${item}\` | ${chromium.has(originalItem) ? checkmark : cross
		} | ${safari.has(originalItem) ? checkmark : cross
		} | ${firefox.has(originalItem) ? checkmark : cross
		} |`);
}

await FS.writeFile("./temp.md", strings.join("\n"));

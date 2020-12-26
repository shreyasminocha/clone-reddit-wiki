import { ensureFile } from 'https://deno.land/std@0.82.0/fs/mod.ts';

const REDDIT_API = 'https://api.reddit.com';

const subreddit = Deno.args[0];
const dumpDirectory = Deno.args[1];

let res = await fetch(`${REDDIT_API}/r/${subreddit}/wiki/pages`);
const wikiPages = (await res.json()).data;

for (const wikiPage of wikiPages) {
	res = await fetch(`${REDDIT_API}/r/${subreddit}/wiki/${wikiPage}`);
	const pageData = (await res.json()).data;

	const markdownWithMeta = `
		---
		revision_id: ${pageData.revision_id}
		revision_date: ${pageData.revision_date}
		---

		${pageData.content_md}
	`;

	const writePath = `${dumpDirectory}/${wikiPage}.md`;
	await ensureFile(writePath);
	await Deno.writeTextFile(
		writePath,
		markdownWithMeta.trim().replace(/^\t+/gm, '')
	);
}

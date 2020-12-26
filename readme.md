# reddit-download-wiki

Download the content of a subreddit's wiki, presumably for archival.

Each page’s file looks like:

```md
---
revision_id: 00000000-0000-0000-0000-000000000000
revision_date: 1600000000
---

[Page markdown content]
```

## Usage

Requires [deno](https://deno.land/#installation).

### Installation

```sh
deno install --unstable --allow-net=api.reddit.com --allow-read --allow-write -n rdw index.ts
```

Download `r/subreddit`’s wiki to `~/archive/subreddit-wiki`:

```sh
rdw subreddit ~/archive/subreddit-wiki
```

### Without installation

```sh
deno run --unstable --allow-net=api.reddit.com --allow-read --allow-write index.ts subreddit ~/archive/subreddit-wiki
```

## License

[MIT License](https://l.shreyasminocha.me/2020-)

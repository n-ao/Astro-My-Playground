# 2023-02-20
- RSSについて

```sh
npm install @astrojs/rss
```

1. `astro.config`をチェックし、`site:`が設定されていることを確認する。
1. `src/pages`に`rss.xml.js`を作る

1. `src/pages`にある.mdファイルであれば以下で生成

    ```js
    import rss from '@astrojs/rss';

    export const get = () => rss({
        title: "n-ao's blog",
        description: "ブログです",
        site: import.meta.env.SITE,
        items: import.meta.glob('./**/*md'),
    });
    ```

1. `pages`ディレクトリ外なら以下のようにルーティングを生成

    ```js
    import rss from '@astrojs/rss';

    const postImportResult = import.meta.glob('../posts/**/*.md', { eager: true });
    const posts = Object.values(postImportResult);

    export const get = () => rss({
        title: "n-ao's blog",
        description: "ブログです",
        site: import.meta.env.SITE,
        items: posts.map((post) => ({
            link: post.url,
            title: post.frontmatter.title,
            pubDate: post.frontmatter.pubDate,
        }))
        customData: `<language>ja</language>`,
    });
    ```

1. CSSを設定する
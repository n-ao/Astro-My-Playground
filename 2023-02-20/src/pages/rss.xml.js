import rss from '@astrojs/rss';

export const get = () => rss({
        title: "n-ao's blog",
        description: "ブログです",
        site: import.meta.env.SITE,
        items: import.meta.glob('./**/*md'),
    });
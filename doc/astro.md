# Astro


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [用語系](#-用語系)
- [メソッド・プロパティ](#-メソッドプロパティ)
- [その他](#-その他)
- [参考ページ・ドキュメント](#-参考ページドキュメント)

<!-- /code_chunk_output -->

---

## 用語系

|項目   |説明|備考
|---|---|---|
[Astro Components](https://docs.astro.build/en/core-concepts/astro-components/)||
[Pages](https://docs.astro.build/en/core-concepts/astro-pages/)||`src/pages/`
[Layouts](https://docs.astro.build/en/core-concepts/layouts/)||`src/layouts`
[Markdown Layout Props](https://docs.astro.build/en/core-concepts/layouts/)||
Slot||
Astro Islands||Islands architecture
Integration|Astro的なIntegration。`React`, `Svelte`, `Vue.js`, `Tailwind`など|
Fragment||
Partial Hydration||`client:load`, `client:visible`, `client:media`など
Content Collections API||`src.content/`, Astro2.0〜
Slug|||
Hybrid Rendering|Page単位でSSR / SG(Static Generation)を変えることができる|Prerender API


## メソッド・プロパティ

|項目   |説明|備考
|---|---|---|
Astro.glob()|URL取得|fromtmatterの取得も可能
Astro.props||
getStaticPaths()|動的ルーティング|
defineCollection({scheme; xxSchema})|ContentCollectionsのSchema定義|
getCollection()|ContentCollectionsの全エントリー取得|
getEntryBySlug(Collection name, Slug)|ContentCollectionsの単一エントリー取得|


## その他
|項目   |説明|備考
|---|---|---|
Nano Stores|ページ間・コンポーネント間の状態共有|`npm install nanostores`
Zod|Content Collections APIに関係|
Remark|AstroのMarkdown扱う部分に関係|


## 参考ページ・ドキュメント
- Project Structure
    - https://docs.astro.build/en/core-concepts/project-structure/

---

- Getting started
    - https://docs.astro.build/en/getting-started/
- Tutorial
    - https://docs.astro.build/en/tutorial/0-introduction/

---

- Guides
    - https://docs.astro.build/en/guides/integrations-guide/
- Refenece
    - API Reference
        - https://docs.astro.build/en/reference/api-reference/
    - CLI
        - https://docs.astro.build/en/reference/cli-reference/
    - Astro Integration API
        - https://docs.astro.build/en/reference/integrations-reference/
    - Template Directives
        - https://docs.astro.build/en/reference/directives-reference/

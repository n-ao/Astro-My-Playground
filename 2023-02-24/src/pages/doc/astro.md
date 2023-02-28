---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'About Astro'
pubDate: 2023-02-28
author: 'n-ao'
tags: ["astro"]
---

# Astro


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [用語系](#-用語系)
- [メソッド・プロパティ](#-メソッドプロパティ)
- [その他](#-その他)
- [参考ページ・ドキュメント(Official)](#-参考ページドキュメントofficial)
- [公式ドキュメント一覧](#-公式ドキュメント一覧)
  - [1. Start Here](#-1-start-here)
  - [2. Tutorial](#-2-tutorial)
  - [3. Core Concepts](#-3-core-concepts)
  - [4. Basics](#-4-basics)
  - [5. Guides](#-5-guides-)
  - [6. Configuration](#-6-configuration-)
  - [7. Reference](#-7-reference-)

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

---

## メソッド・プロパティ

|項目   |説明|備考
|---|---|---|
Astro.glob()|URL取得|fromtmatterの取得も可能
Astro.props||
getStaticPaths()|動的ルーティング|
defineCollection({scheme; xxSchema})|ContentCollectionsのSchema定義|
getCollection()|ContentCollectionsの全エントリー取得|
getEntryBySlug(Collection name, Slug)|ContentCollectionsの単一エントリー取得|

---

## その他
|項目   |説明|備考
|---|---|---|
Nano Stores|ページ間・コンポーネント間の状態共有|`npm install nanostores`
`Zod`|Content Collections APIに関係|
`Remark`|AstroのMarkdown扱う部分に関係|
`Prism`|Syntax highlighter|
`Shiki`|Syntax highlighter|

---

## 参考ページ・ドキュメント(Official)
- Project Structure
    - https://docs.astro.build/en/core-concepts/project-structure/
- Getting started
    - https://docs.astro.build/en/getting-started/
- Tutorial
    - Build your first Astro Blog
        - https://docs.astro.build/en/tutorial/0-introduction/
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

---

## 公式ドキュメント一覧
全理解するために一覧を用意し、進捗を反映していく

|No.|項目   |説明|備考
|--|--|--|--|
1|Start Here|
2|Tutorial|
3|Core Concepts|
4|Basics|
5|Guides|
6|Configuration|
7|Reference|

---

### 1. Start Here
1. Getting Started
1. Installation
1. Editor Setup
1. Upgrade to V2
1. Migrate to Astro

### 2. Tutorial
1. Build a Blog ✅

### 3. Core Concepts
1. Why Astro
1. MPA vs. SPA
1. Astro Islands

### 4. Basics
1. Project Structure
1. Astro Components
1. Pages
1. Layouts
1. Markdown & MDX
1. Routing
1. Imports
1. Endpoints
1. Data Fetching
1. Deploy
1. Troubleshooting

### 5. Guides 
TODO

### 6. Configuration 
TODO

### 7. Reference 
TODO


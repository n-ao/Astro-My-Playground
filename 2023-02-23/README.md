# 2023-02-23


## 1. `src/pages/index.astro`
トップページ
a
### import
- Layout
- Card

### Variables
なし

## 2. `src/layouts/Layout.astro`
全体レイアウトを定義する

### Variables
- export interface `Props`
    - `title`


- body
    - `<slot />`

## 3. `src/components/Card.astro`
トップページに表示するカードコンポーネント「

### Variables
- export interface `Props`
    - `title`
    - `body`
    - `href`

- const
    - `href`
    - `title`
    - `body`

### html
- `li` / `a` / `h2`
- <span>&arr;</span>

### style
- display: flex;
- transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
- transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
- background-image: var(--accent-gradient);
- color: rgb(var(--accent))

## 4. `src/env.ts`
記述なし

---



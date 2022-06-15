
## 作業メモ
#### 環境
node v14.16.0

#### セットアップ
npx nuxi init nuxt-app
cd dirname
npm run dev -- -o

* app.vue を編集。NuxtPage を参照させる
* pages/index.vue を作成
→　画面表示が index.vue の内容に切り替わる。

* storybookを導入
  * [参考](https://zenn.dev/shunk_py/articles/a52625f98fc8e7)
    * これだけだとエラーになった
    * [これ](https://github.com/storybookjs/builder-vite/issues/391)みながら対応して解決
      * ```
        npm i --save-dev @mdx-js/react@1 --force
        ```
* atomic design
* test

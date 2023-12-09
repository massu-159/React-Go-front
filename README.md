# react-go-front

GoのAPIを学習するため、Todoアプリを作成。

### ・ frontend

CSRFトークンを使ったセキュリティ対策

JWT認証

CSSはtailwindCSSを使用。

状態管理はzustand。

キャッシュにはtanstackQuery。

API通信にはaxiosを利用

urlはこちら
https://github.com/massu-159/React-Go-front

***backendはこちら***
https://github.com/massu-159/go-rest-api

## 目次
1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install
# または
yarn
# または
pnpm install
# または
bun install
```

### 1-2. アプリケーション実行

```
npm start
# または
yarn start
# または
pnpm start
# または
bun start
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- 認証
  - サインアップ
  - ログイン
  - ログアウト
- Todo
  - Todo一覧表示
  - Todo新規登録
  - Todo更新処理
  - Todo削除処理

### 2-2. 構成技術
- @heroicons/react: ^2.0.16,
- @tanstack/react-query: ^4.28.0,
- axios: ^1.3.4,
- react: ^18.2.0,
- react-dom: ^18.2.0,
- react-router-dom: ^6.10.0,
- typescript: ^4.9.5,
- zustand: ^4.3.6
---
title: 個人ブログを作ってみた
date: 2020-09-23
categories: 技術
tags: [firebase, Nuxt, Github Actions]
---

webの勉強を兼ねつつ、個人ブログを作った。

リポジトリ：[https://github.com/hukurouo/hukurouo-blog](https://github.com/hukurouo/hukurouo-blog)

使用した技術は以下のような構成です。

- mdファイルでページを生成できる`Nuxt/Content`でコンテンツ生成
  - [https://content.nuxtjs.org/ja/](https://content.nuxtjs.org/ja/)
  - 機能がシンプルで好き。カスタマイズも簡単なので良い
- hosting は firebase hosting を使用。
- Github Actions で自動でデプロイを走らせるようにした。
  - なんだかんだCIに初めて手を出したけど、やはり便利ですね



長文のリハビリがてら色々と書いていこうと思います。

明日はテネットを見に行きます。楽しみだ～
---
title: iineum の改良をした 2
date: 2021-01-08
categories: 技術
tags: []
toc_flg: true
description: 
thumbnail: 
---

zenn に iineum の制作過程を書こうと考えている。それもハンズオン的な形式で本として投稿してみようかなと･･･。

ちゃんとした感じで書きたいのでコードも綺麗にしておく。

## warning を潰す

ずっとコンソールに`Warning: Using UNSAFE_componentWillMount in strict mode is not recommended`が表示されていたので気にはなっていた。

調べてみたらどうも`react-helmet`が原因らしい。

<div class="bcard-wrapper">
<a href="https://github.com/nfl/react-helmet/issues/548" rel="nofollow" target="_blank">
<span class="bcard-main withogimg">
<div class="bcard-title">
Issue #548 / Stop using `UNSAFE_componentWillMount`  nfl/react-helmet
</div>
<div class="bcard-description">
Do you want to request a feature or report a bug? Bug What is the current behavior? get this warning in console when using Helmet: Warning: Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your c...
</div>
<div class="bcard-img" style="background-image: url(https://github.com/fluidicon.png)">
</div></span></a></div>

`react-helmet-async` に変えるのが良さそうだったので、書き換え。

~~~ts{}[src\App.tsx]
...
import { Helmet, HelmetProvider } from 'react-helmet-async';

class App extends React.Component {
  render () {
  return (
    <HelmetProvider>
      <Helmet>
        <title>iineum</title>
      </Helmet>
      <div className="container mx-auto">
        <header className="App-header">
          iineum
        </header>
        <ImageTable/>
      </div>
    </HelmetProvider>
  );
  }
}
~~~

## warning を潰す2

~~~css{}[src\index.css]
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~

この三行に`at-rule-no-unknown`の warn がついている。これはVSCodeの設定を変えれば解決した。

設定 -> `css.validate`で検索 -> `すべての検証を有効または無効にします`のチェックを外す

## 型を書く

`any`型で逃げていたところをちゃんと書いた。

## エラーハンドリング

~~~ts{}[]
function twitterAPI(screen_name: string, max_id: string){
  let endpoint = 'https://hr4ck7ers2.execute-api.ap-northeast-1.amazonaws.com/production/fav/' + screen_name
  if (max_id){
    endpoint += '/' + max_id
  }
  return new Promise((resolve, reject) => {
    axios.get(endpoint).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}
~~~

APIの成否でPromiseを返すようにして、エラーハンドリングを実装した。

~~~ts{}[]
  getiine = () => {
    twitterAPI(this.state.screen_name, this.state.max_id).then((res) => {
      this.setIineImages(res)
    }).catch(()=>{
      this.setState({ loading: "取得に失敗しました。データが空か、スクリーンネームが間違っているかもしれません。" });
    })
  };
~~~

Promise少しずつわかってきた･･･。

頑張って本書くぞ～
export default {
  data() {
    return {
      meta: {
        title: "",
        type: "",
        url: "",
      },
      // ベースとなるurl。自分の環境に合わせてください。
      base: "https://hukurouo.web.app"
    };
  },
  head() {
    // 相対パスを取得。例えば'/item/1'とか
    const path = this.$route.path;

    // ここでmetaの中身を更新
    this.meta.title = this.articles.title;
    this.meta.type = "article";
    this.meta.url = this.base + path;

    // ここから先でmetaタグを書いていく
    return {
      title: this.meta.title,
      meta: [
        { hid: "og:title", property: "og:title", content: this.meta.title },
        { hid: "og:type", property: "og:type", content: this.meta.type },
        { hid: "og:url", property: "og:url", content: this.meta.url },
        { name: "twitter:title", content: this.meta.title },
        { name: "twitter:text:title", content: this.meta.title }
      ]
    };
  }
};
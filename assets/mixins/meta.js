export default {
  data() {
    return {
      meta: {
        title: "",
        type: "",
        url: "",
        image: "",
        card: "",
      },
      // ベースとなるurl。自分の環境に合わせてください。
      base: "https://hukurouo.com"
    };
  },
  head() {
    // 相対パスを取得。例えば'/item/1'とか
    const path = this.$route.path;

    // ここでmetaの中身を更新
    this.meta.title = this.articles.title;
    this.meta.type = "article";
    this.meta.url = this.base + path;
    if (this.articles.thumbnail){
      this.meta.image = this.articles.thumbnail
      this.meta.card = "summary_large_image"
    } else {
      this.meta.image = 'https://firebasestorage.googleapis.com/v0/b/hukurouo.appspot.com/o/image%2Fwh.png?alt=media&token=5adfeea7-d45b-463e-b2f4-edceae1ab06e'
      this.meta.card = "summary"
    }

    // ここから先でmetaタグを書いていく
    return {
      title: this.meta.title,
      meta: [
        { hid: "og:title", property: "og:title", content: this.meta.title },
        { hid: "og:type", property: "og:type", content: this.meta.type },
        { hid: "og:url", property: "og:url", content: this.meta.url },
        { name: "twitter:title", content: this.meta.title },
        { name: "twitter:text:title", content: this.meta.title },
        { hid: 'og:image', property: 'og:image', content: this.meta.image},
        { name: "twitter:image", content: this.meta.image},
        { name: 'twitter:card', content: this.meta.card },
      ]
    };
  }
};
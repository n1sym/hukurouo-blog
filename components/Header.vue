<template>
  <div>
    <NuxtLink :to="'/articles'"> <a id="font_black"> すべて</a>  </NuxtLink>
    ｜
    <NuxtLink :to="'/articles/category/感想文'"> <a id="font_black"> 感想文</a>  </NuxtLink>
    ｜
    <NuxtLink :to="'/articles/category/技術'"> <a id="font_black"> プログラミング</a>  </NuxtLink>
    ｜
    <NuxtLink :to="'/articles/category/日記'"> <a id="font_black"> 日記</a>  </NuxtLink>
  </div>
</template>
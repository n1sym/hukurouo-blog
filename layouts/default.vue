<template>
  <div>
    <div class="container">
      <div class ="inlinecont">
        <nuxt-link to="/"> <b>hukurouo.web 🦉</b> </nuxt-link>
        <div id="blank"> </div>
        <nuxt-link to="/articles"> 記事一覧 </nuxt-link>  
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  padding: 20px;
}
@media screen and (min-width: 768px) {
.container {
  padding: 20px;
  width: 900px;
  
}
}

.inlinecont {
  display: flex;
  font-size: 18px;

}

#blank{
  padding-left: 20px;
}
#blank_10{
  padding-left: 10px;
}

.nav_title{
  font-size: 24px;
}
a {
 
color:rgb(70, 70, 68);
 
}

a:hover {
 
color:#999;
text-decoration:underline;
 
}

.display_flex{
  display: flex;
}

</style>

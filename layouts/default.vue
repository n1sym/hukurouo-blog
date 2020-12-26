<template>
  <div>
    <div class="container">
        <div class="title_header"> 
          <nuxt-link to="/"> <b id="font_black">hukurouo.com 🦉</b></nuxt-link>
        </div>
        <div class="nav_header">
          <div id="blankx">
            <nuxt-link to="/articles/category/技術"> <span id="font_black_under">技術</span></nuxt-link>  
          </div>
          <div id="blankx">
            <nuxt-link to="/articles/category/感想文"> <span id="font_black_under">感想文</span></nuxt-link>  
          </div>
          <div id="blankx">
            <nuxt-link to="/articles/category/日記"> <span id="font_black_under">日記</span></nuxt-link>  
          </div>
        </div>
      <br>
    </div>
    <Nuxt />
  </div>
</template>

<style>
.nav_header{
   display: flex;
   justify-content: center;
   text-align: center;
   margin-top:10px;
   font-size: 20px;
}

.title_header{
  text-align: center;
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 20px;
}

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
  font-size: 18px;
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

blockquote {
    margin: 0 0 1rem;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: block;
  margin: auto
}
@media screen and (min-width: 768px) {
.container {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 700px;
  display: block;
    margin-left: auto;
    margin-right: auto
}
}

html {
       overflow-y:scroll;
}

.inlinecont {
  display: flex;
  font-size: 18px;
}

#blank{
  padding-left: 20px;
}
#blankx{
  padding-left: 10px;
  padding-right: 10px;
}
#blank_10{
  padding-left: 10px;
}
#blank_5{
  padding-left: 5px;
}
#padding_bottom_10{
  padding-bottom: 25px;
}

#padding_top_5{
  padding-top: 5px;
}

#font_black{
  color:rgb(75, 82, 88);
}

.tagsize{
  color:rgb(92, 85, 85);
  margin-top:4px;
  font-size: 0.7rem;
  border-radius: .25rem;
  padding:1px 5px;
  margin-left: 5px;
  background-color: rgb(238, 238, 238);
}

a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}
p {
    line-height: 1.6;
    margin: 20px 0px;
}

hr {
  text-align: center;
  border-width: 0px;
  border-style: none;
  margin: 30px 0;
}
hr:after {
  content: '§';
  top: 1px;
  padding: 0 10px;
  color: rgb(190, 190, 190);
  font-size: 20px;
}

*, :after, :before {
    box-sizing: border-box;
    margin: 0;
}
user agent stylesheet
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.7;
    color: #212529;
    text-align: left;
    background-color: #fff;
}

code, kbd, pre, samp {
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
}

html {
    font-family: Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

.nav_title{
  font-size: 24px;
}

a:hover {
 
color:#999;
text-decoration:underline;
 
}

#font_black_under{
  color:rgb(75, 82, 88);
  font-size: 19px;
  line-height: 1.9;
  text-decoration:underline;
}

.display_flex{
  display: flex;
}
.linkedit{
   color:rgb(60, 98, 168);
  font-size:1.2rem;

  /*
    font-weight: 600; 
    color:rgb(53, 56, 61);

*/
}

</style>

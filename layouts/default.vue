<template>
  <div>
    <div class="container">
        <div class="title_header"> 
          <nuxt-link to="/"> <b id="font_black">hukurouo.com 🦉</b></nuxt-link>
        </div>
        <div class="nav_header">
          <div id="blankx">
           <a href="https://twitter.com/hukurouo" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(75, 82, 88)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
          </div>
          <div id="blankx">
            <a href="https://github.com/hukurouo" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(75, 82, 88)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a> 
          </div>
          <div id="blankx">
            <a href="https://hukurouo.tumblr.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(75, 82, 88)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></a>
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
  width: 660px;
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
  padding:0.5px 5px;
  margin-left: 5px;
  background-color: rgb(247, 243, 243);
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
  margin: 50px 0;
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
  font-size:1.1rem;
  font-weight: 600; 

  /*
    font-weight: 600; 
    color:rgb(53, 56, 61);

*/
}

</style>

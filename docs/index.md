---
title: Home
comments: false
statistics: True
hide:
  #- navigation # 显示右
  #- toc #显示左
  - footer
  - feedback
---
# 欢迎！

<div class="admonition note">
<p><center><a href="/home/about"><img class="site-author-image" src="https://s2.loli.net/2024/10/07/7ljRnwdJtyz98EQ.jpg"/></a>
</p>
</div>
<div class="admonition info inline" style="height: 320px;  font-size: 14.5px; ">
    <p style="text-align: left;">
        🤗关于网站：<strong>记录自己的所学、所见、所感和所想~</strong><br/>
        📚 最近在读的论文：<i><a href="https://arxiv.org/abs/2309.17179">TS-LLM</a></i> 和 <a href="https://arxiv.org/abs/2403.09629"> Quiet-STaR </a><br>
        🗂️ 最近在看的网课：<a href="https://www.bilibili.com/video/BV12u4y177vG/">实用技能拾遗</a> 和  <a href="https://www.bilibili.com/video/BV1sd4y167NS/">强化学习</a> <br>
        📺 最近在追的番and漫画：追10月新番，漫画一般不看<br>
        🎮 最近在玩的游戏：英雄联盟手游(其实端游也会在寒暑假和朋友一起玩的 hhh)<br>
        🎐 最近的要事：英语、论文、数学、算法以及准备保研材料
    </p>
</div>


<div class="admonition quote" style="font-size: 14px;">
    <p style="text-align: left;">
        ☁️ Life is not about waiting for the storm to pass, it's about learning to dance in the rain..<br/>
        ❄️ 城南久梦，一枕槐安<br/>
        ✡️ ある時（とき）、人（ひと）が泣（な）くのは弱（よわ）いのではなく、もうずっと強（つよ）すぎていたからだ。
    </p>
</div>



<style>
  .big-div {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 两列 */
    gap: 10px; /* 设置小div之间的间距 */
    max-width: 700px; /* 设置最大宽度 */
    margin: 0 auto; /* 居中显示 */
  }
  .small-div {
    background-color: transparent; /* 设置背景透明 */
    border: 1px solid #cee7ed; 
    border-radius: 10px;
    border-color: #cee7ed; /* 设置边框颜色 */
    padding: 10px; /* 设置内边距 */
    /* box-shadow: 0 1px 2px rgba(0,0,0,.1); 设置阴影 */
  }
  .small-div p {
    margin: 0; /* 清除段落的默认外边距 */
  }
  .small-div a {
    /* text-decoration: none; 去除链接的下划线 */
    color: #5fa5e7; /* 设置链接文字颜色 */
  }
</style>

<div class="big-div">
  <div class="small-div">
    <p><strong>📄代码记录</strong></p>
    期待更新...
  </div>

  <div class="small-div">
    <p><strong>📖课程笔记</strong></p>
    敬请期待....
  </div>
  <div class="small-div">
    <p><strong>👨‍💻科研积累</strong></p>
    有待更新....
  </div>
  <div class="small-div">
    <p><strong>🔖一些碎碎念</strong></p>
    后续会不定时加入....
  </div>
</div>




<div class="admonition info" style="text-align: center; padding: 20px; font-size: 18px;">
    本站目前共代码{{codes}}行，文章{{pages}}页，累计{{words}}字！
</div>



<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-29HZMNR0KG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-29HZMNR0KG');
</script>


<!-- Start of Howxm client code snippet -->
<script>
function _howxm(){_howxmQueue.push(arguments)}
window._howxmQueue=window._howxmQueue||[];
_howxm('setAppID','14429fca-cac1-4551-a472-b046a96ebb75');
(function(){var scriptId='howxm_script';
if(!document.getElementById(scriptId)){
var e=document.createElement('script'),
t=document.getElementsByTagName('script')[0];
e.setAttribute('id',scriptId);
e.type='text/javascript';e.async=!0;
e.src='https://static.howxm.com/sdk.js';
t.parentNode.insertBefore(e,t)}})();
</script>
<!-- End of Howxm client code snippet -->


<!-- :material-information-outline:{ title="本站访问量" }本站访问量：<script async src="//finicounter.eu.org/finicounter.js"></script>
<span id="finicount_views"></span> -->

<head>
<script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
<script>LA.init({id:"3HOcxvgwJJmkuGUi",ck:"3HOcxvgwJJmkuGUi"})</script>
</head>


<div class="admonition note" style="text-align: center; padding: 15px; font-size: 18px;">
   <body>
        <font color="#B9B9B9">
        <p style="text-align: center; ">
                <span>本站已经运行</span>
                <span id='box1'></span>
    </p>
      <div id="box1"></div>
      <script>
        function timingTime(){
          let start = '2024-10-07 16:00:00'
          let startTime = new Date(start).getTime()
          let currentTime = new Date().getTime()
          let difference = currentTime - startTime
          let m =  Math.floor(difference / (1000))
          let mm = m % 60  // 秒
          let f = Math.floor(m / 60)
          let ff = f % 60 // 分钟
          let s = Math.floor(f/ 60) // 小时
          let ss = s % 24
          let day = Math.floor(s  / 24 ) // 天数
          return day + "天" + ss + "时" + ff + "分" + mm +'秒'
        }
        setInterval(()=>{
          document.getElementById('box1').innerHTML = timingTime()
        },1000)
      </script>
      </font>
    </body>
</div>

<head>
<script defer src="https://analytics.us.umami.is/script.js" data-website-id="dae37494-1db6-408a-afdd-1868e1a7d41a"></script>
</head>

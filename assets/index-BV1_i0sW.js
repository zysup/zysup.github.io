var r=Object.defineProperty;var a=(i,e,t)=>e in i?r(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var s=(i,e,t)=>a(i,typeof e!="symbol"?e+"":e,t);import{d as h,g as c,o as l,c as f,a as v,h as b,_ as m}from"./index-BTogpGLb.js";import{N as p}from"./index-CHdstXqr.js";class y{constructor(){s(this,"head");s(this,"bodies");s(this,"element");this.element=document.getElementById("snake"),this.head=document.querySelector("#snake > div"),this.bodies=this.element.getElementsByTagName("div")}get X(){return this.head.offsetLeft}get Y(){return this.head.offsetTop}set X(e){if(this.X!=e){if(e<0||e>292)throw new Error("蛇撞墙了！");this.bodies[1]&&this.bodies[1].offsetLeft===e&&(e>this.X?e=this.X-10:e=this.X+10),this.moveBody(),this.head.style.left=e+"px",this.checkHeadBody()}}set Y(e){if(this.Y!=e){if(e<0||e>292)throw new Error("蛇撞墙了！");this.bodies[1]&&this.bodies[1].offsetTop===e&&(e>this.Y?e=this.Y-10:e=this.Y+10),this.moveBody(),this.head.style.top=e+"px",this.checkHeadBody()}}addBody(){this.element.insertAdjacentHTML("beforeend","<div></div>")}moveBody(){for(let e=this.bodies.length-1;e>0;e--){const t=this.bodies[e-1].offsetLeft,o=this.bodies[e-1].offsetTop;this.bodies[e].style.left=t+"px",this.bodies[e].style.top=o+"px"}}checkHeadBody(){for(let e=1;e<this.bodies.length;e++){const t=this.bodies[e];if(this.X===t.offsetLeft&&this.Y===t.offsetTop)throw new Error("撞到自己了！")}}}class w{constructor(){s(this,"element");this.element=document.getElementById("food")}get x(){return this.element.offsetLeft}get y(){return this.element.offsetTop}change(){const e=Math.round(Math.random()*29)*10,t=Math.round(Math.random()*29)*10;this.element.style.left=e+"px",this.element.style.top=t+"px"}}class k{constructor(e=10,t=2){s(this,"score",0);s(this,"level",1);s(this,"scoreEle");s(this,"levelEle");s(this,"maxLevel");s(this,"upScore");this.maxLevel=e,this.upScore=t,this.scoreEle=document.getElementById("score"),this.levelEle=document.getElementById("level")}addScore(){this.scoreEle.innerHTML=++this.score+"",this.score%this.upScore==0&&this.levelUp()}levelUp(){this.level<this.maxLevel&&(this.levelEle.innerHTML=++this.level+"")}}class g{constructor(){s(this,"snake");s(this,"food");s(this,"scorePanel");s(this,"direction","ArrowRight");s(this,"isLive",!0);this.snake=new y,this.food=new w,this.scorePanel=new k,this.init()}init(){this.isLive&&document.addEventListener("keydown",this.keydownhandler.bind(this)),this.run()}keydownhandler(e){const t=["ArrowRight","ArrowLeft"].includes(this.direction),o=["ArrowRight","ArrowLeft"].includes(e.key),d=["ArrowDown","ArrowUp"].includes(this.direction),n=["ArrowDown","ArrowUp"].includes(e.key);(t&&n||d&&o)&&(this.direction=e.key)}run(){let e=this.snake.X,t=this.snake.Y;switch(this.direction){case"ArrowRight":e+=10;break;case"ArrowDown":t+=10;break;case"ArrowLeft":e-=10;break;case"ArrowUp":t-=10;break}this.checkEat(e,t);try{this.snake.X=e,this.snake.Y=t}catch(o){alert(o.message+"GAME OVER"),this.isLive=!1;return}this.isLive&&setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)}checkEat(e,t){e==this.food.x&&t==this.food.y&&(this.food.change(),this.scorePanel.addScore(),this.snake.addBody())}}const u={class:"page-greedy-snake"},E=b('<div id="game-wrapper" data-v-b44eb79a><div id="stage" data-v-b44eb79a><div id="snake" data-v-b44eb79a><div data-v-b44eb79a></div></div><div id="food" data-v-b44eb79a><div data-v-b44eb79a></div><div data-v-b44eb79a></div><div data-v-b44eb79a></div><div data-v-b44eb79a></div></div></div><div id="score-panel" data-v-b44eb79a><div data-v-b44eb79a>SCORE: <span id="score" data-v-b44eb79a>0</span></div><div data-v-b44eb79a>level: <span id="level" data-v-b44eb79a>1</span></div></div></div>',1),_=h({__name:"index",setup(i){const e=()=>history.back();return c(()=>{new g}),(t,o)=>{const d=p;return l(),f("div",u,[v(d,{title:"Privacy policy","left-arrow":"",onClickLeft:e}),E])}}}),A=m(_,[["__scopeId","data-v-b44eb79a"]]);export{A as default};

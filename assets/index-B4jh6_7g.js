import{l as D,d as m,r as I,m as R,q as A,s,a as l,H as d,B as C,I as w,v as P,x as L}from"./index-C0UuEbc0.js";const[N,t]=D("nav-bar"),S={title:String,fixed:Boolean,zIndex:A,border:s,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:s};var y=m({name:N,props:S,emits:["clickLeft","clickRight"],setup(e,{emit:n,slots:a}){const r=I(),f=R(r,t),o=i=>{e.leftDisabled||n("clickLeft",i)},h=i=>{e.rightDisabled||n("clickRight",i)},g=()=>a.left?a.left():[e.leftArrow&&l(w,{class:t("arrow"),name:"arrow-left"},null),e.leftText&&l("span",{class:t("text")},[e.leftText])],b=()=>a.right?a.right():l("span",{class:t("text")},[e.rightText]),c=()=>{const{title:i,fixed:x,border:u,zIndex:v}=e,B=P(v),T=e.leftArrow||e.leftText||a.left,k=e.rightText||a.right;return l("div",{ref:r,style:B,class:[t({fixed:x}),{[C]:u,"van-safe-area-top":e.safeAreaInsetTop}]},[l("div",{class:t("content")},[T&&l("div",{class:[t("left",{disabled:e.leftDisabled}),e.clickable&&!e.leftDisabled?d:""],onClick:o},[g()]),l("div",{class:[t("title"),"van-ellipsis"]},[a.title?a.title():i]),k&&l("div",{class:[t("right",{disabled:e.rightDisabled}),e.clickable&&!e.rightDisabled?d:""],onClick:h},[b()])])])};return()=>e.fixed&&e.placeholder?f(c):c()}});const O=L(y);export{O as N};

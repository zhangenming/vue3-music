import{c as _,e,m as o,R as i,a7 as x,t as h,o as f,P as r,n as t,J as m,a5 as y,K as C,v as u}from"./vendor.3a968c7d.js";import{_ as k}from"./CoverPlay.07b42d22.js";import{u as p}from"./music.1fcffce2.js";import{u as B}from"./index.020b4e0a.js";import{B as z}from"./Banner.1db58eda.js";import"./base.d0d60045.js";import"./el-image-viewer.dc9f7f0e.js";import"./index.248c2196.js";import"./close.906d75c0.js";import"./scroll.b663a008.js";import"./number.397026a5.js";import"./PlayOne.3a6f4a81.js";import"./Play.b799d7b3.js";import"./plugin-vue_export-helper.21dcd24c.js";const S={class:"text-xl text-gray-800 py-3 mt-2"},g=_({props:{title:null},setup(c){return(a,n)=>(e(),o("div",S,i(c.title),1))}}),b={class:"grid grid-flow-row grid-cols-3 lg:grid-cols-5 gap-5 2xl:grid-cols-10"},E=["onClick"],N={class:"mt-2 text-xs text-gray-700 truncate"},P=_({setup(c){const a=x(),{personalized:n}=h(p()),{getPersonalized:d}=p();return f(async()=>{d()}),(v,$)=>(e(),o("div",null,[r(g,{title:"\u4F60\u7684\u4E13\u5C5E\u6B4C\u5355"}),t("div",b,[(e(!0),o(m,null,y(u(n).sampleSize(10),(s,l)=>(e(),o("div",{key:l,class:C({"item-1":l===0}),onClick:w=>u(a).push({name:"playlist",query:{id:s.id}})},[r(k,{name:s.name,"pic-url":s.picUrl,"play-count":s.playCount,"show-play-count":""},null,8,["name","pic-url","play-count"]),t("div",N,i(s.name),1)],10,E))),128))])]))}}),F={class:"grid grid-flow-row grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-y-2.5 gap-x-5 cursor-pointer"},R=["onClick"],A=["src"],M={class:"ml-2 text-xs flex-auto"},U={class:"text-xs"},V={class:"overflow-ellipsis text-gray-600"},j={class:"mt-1.5"},q={class:"text-gray-400"},D=_({setup(c){const{play:a}=B();x();const{personalizedNewSong:n}=h(p()),{getPersonalizedNewSong:d}=p();return f(async()=>{await d()}),(v,$)=>(e(),o(m,null,[r(g,{title:"\u63A8\u8350\u65B0\u97F3\u4E50"}),t("div",F,[(e(!0),o(m,null,y(u(n),(s,l)=>(e(),o("div",{key:l,class:"hover:bg-gray-100 transition-all flex items-center",onClick:w=>u(a)(s.id)},[t("img",{src:s.picUrl,alt:"",class:"w-12 h-12 object-cover rounded"},null,8,A),t("div",M,[t("div",U,[t("span",V,i(s.name),1)]),t("div",j,[t("small",q,i(s.song.artists[0].name),1)])])],8,R))),128))])],64))}}),J={class:"px-5"},es=_({setup(c){return(a,n)=>(e(),o("div",J,[r(g,{class:"text-3xl font-bold mb-2",title:"\u63A8\u8350"}),r(z,{"per-page":3}),r(P),r(D)]))}});export{es as default};

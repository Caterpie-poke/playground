(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{309:function(e,t,n){e.exports=n(434)},314:function(e,t,n){},315:function(e,t,n){},319:function(e,t,n){},347:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){},419:function(e,t,n){},434:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),c=n(97),o=n.n(c),i=(n(314),n(83)),s=(n(315),n(445)),l=n(443),u=n(444),m=n(447),f=n(449),p=n(448),d=n(106),g=n(114),h=n(301),E=(n(319),function(e){return r.a.createElement("div",{className:"Header",id:"puppy-header"},r.a.createElement(m.a,{bg:"white",variant:"light",expand:"lg"},r.a.createElement(m.a.Brand,{onClick:function(){return e.setIsShowVersion(!0)}},r.a.createElement("img",{src:"./image/logo.png",width:"25",height:"25",className:"d-inline-block align-top"})," Puppy"),r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(p.a,{title:"Courseware",id:"nav-dropdown-courses"},Object.keys(e.courses).map(function(t){var n=e.courses[t];return r.a.createElement(p.a,{title:n.title,id:"nav-dropdown-pages-".concat(n.title),drop:"right",key:n.title},n.list.map(function(e,n){return r.a.createElement(p.a.Item,{href:"?course=".concat(t,"#").concat(n),key:n},e.title)}))}))),r.a.createElement(h.a,{onClick:e.isSettingOpened?e.closeSetting:e.openSetting},r.a.createElement(g.a,{icon:d.e}))))}),b=n(446),y=n(302),S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{show:e.show,onHide:function(){return e.setShow(!1)}},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement(b.a.Title,null,"Puppy")),r.a.createElement(b.a.Body,{style:{whiteSpace:"pre-line"}},r.a.createElement("p",null,"Version: ".concat(Object(y.puppy_version)())),r.a.createElement("p",null,"Browser: Google Chrome (OS X), Firefox"),r.a.createElement("p",null,"If you find some bugs or suggestions, please send issues in"," ",r.a.createElement("a",{href:"https://github.com/playpuppy/LIVE2019",target:"blank"},"GitHub"),"."))))},v=(n(347),function(e){return r.a.createElement("div",{id:"puppy-footer"},r.a.createElement(h.a,{onClick:function(){return e.play()}},r.a.createElement(g.a,{icon:d.h})," Play"),r.a.createElement(h.a,{onClick:function(){return e.fullscreen()}},r.a.createElement(g.a,{icon:d.f})),r.a.createElement(h.a,{onClick:function(){return e.setIsCourseVisible(!e.isCourseVisible)}},r.a.createElement(g.a,{icon:e.isCourseVisible?d.b:d.a})),r.a.createElement(h.a,{style:{paddingRight:"1em",paddingLeft:"0.4em"}},r.a.createElement(g.a,{size:"xs",icon:d.j,style:{verticalAlign:"top"}})))}),O=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)(function(){addEventListener("resize",function(){c&&(clearTimeout(c),o(null)),o(setTimeout(function(){var t=document.getElementById("puppy-screen").clientWidth,n=document.getElementById("puppy-screen").clientHeight;e.setSize(t,n)},300))})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"puppy-screen",onClick:function(){return e.setIsCourseVisible(!1)}}),r.a.createElement(v,{isCourseVisible:e.isCourseVisible,setIsCourseVisible:e.setIsCourseVisible,play:e.play,fullscreen:e.fullscreen}))},j=n(304),w=n.n(j),C=(n(417),function(e){return r.a.createElement("div",{id:"editor-footer"},r.a.createElement(h.a,null,"Monitor"),r.a.createElement(h.a,{onClick:e.fontPlus},r.a.createElement(g.a,{icon:d.i})),r.a.createElement(h.a,{onClick:e.fontMinus},r.a.createElement(g.a,{icon:d.g})))}),I=function(e){var t=Object(a.useState)({height:500,width:500}),n=Object(i.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(null),l=Object(i.a)(s,2),u=l[0],m=l[1],f={selectOnLineNumbers:!0,fontSize:e.fontSize,wordWrap:"on",lightbulb:{enabled:!0}};return Object(a.useEffect)(function(){addEventListener("resize",function(){u?clearTimeout(u):m(setTimeout(function(){o({height:document.getElementById("right-col").clientWidth,width:document.getElementById("right-col").clientHeight})},300))}),o({height:document.getElementById("right-col").clientWidth,width:document.getElementById("right-col").clientHeight})},[]),r.a.createElement("div",{id:"puppy-editor"},r.a.createElement(w.a,{width:c.width,height:c.height,language:e.lang,theme:e.theme,value:e.source,options:f,onChange:e.onChange,editorDidMount:e.editorDidMount}),r.a.createElement(C,{fontPlus:e.fontPlus,fontMinus:e.fontMinus}))},k=n(305),x=n(450),P=(n(418),n(419),function(e){return Object(a.useEffect)(function(){0!==e.course.list.length&&(e.closeSetting(),e.fetchContent(e.coursePath,e.course.list[e.page].path),e.fetchSample(e.coursePath,e.course.list[e.page].path).then(function(t){e.play(t)()}))},[e.page,e.coursePath,e.course]),Object(a.useEffect)(function(){e.fetchSetting(e.coursePath)},[e.coursePath]),r.a.createElement("div",{id:"puppy-course",style:{visibility:e.visible?"visible":"hidden"}},r.a.createElement(x.a,{className:"course-all"},r.a.createElement(x.a.Header,{className:"course-header"},r.a.createElement(l.a,null,r.a.createElement(u.a,{className:"card-header-left",xs:6},e.course.list&&0!==e.course.list.length&&0!==e.page?r.a.createElement("a",{href:"#".concat(e.page-1)},r.a.createElement(g.a,{icon:d.c})," ".concat(e.course.list[e.page-1].title)):null),r.a.createElement(u.a,{className:"card-header-right",xs:6},e.course.list&&0!==e.course.list.length&&e.page!==e.course.list.length-1?r.a.createElement("a",{href:"#".concat(e.page+1)},"".concat(e.course.list[e.page+1].title," "),r.a.createElement(g.a,{icon:d.d})):null))),r.a.createElement(x.a.Body,{className:"course-body"},r.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:k(e.content)}}))))}),T=function(e){return fetch("".concat("/playground").concat(e),{method:"GET"}).then(function(e){if(e.ok)return e.text();throw new Error(e.statusText)}).then(function(e){return e})},N=function(e){return function(t){return T("/course/".concat(t,"/setting.json")).then(function(e){return JSON.parse(e)}).then(function(t){e(t)}).catch(function(e){console.log("ERR ".concat(e))})}},R=function(e){return function(t,n){var a=window.sessionStorage.getItem("/course/".concat(t,"/").concat(n,"/sample.py"));return a?(e(a),new Promise(function(){return a})):T("/course/".concat(t,"/").concat(n,"/sample.py")).then(function(t){return e(t),t})}},V=n(306),F=function(e){return e?e.resize:function(e,t){}},q=function(e){return function(){if(e){var t=e.render.canvas;if(t)if(t.webkitRequestFullscreen)t.webkitRequestFullscreen();else if(t.mozRequestFullScreen)t.mozRequestFullScreen();else if(t.msRequestFullscreen)t.msRequestFullscreen();else{if(!t.requestFullscreen)return;t.requestFullscreen()}}}},B=n(112),z=function(e){return fetch("http://localhost:8888/api/option/".concat(e),{method:"POST"}).then(function(e){if(e.ok)return e.json()})};B.editor.defineTheme("error",{base:"vs",inherit:!0,rules:[],colors:{"editor.background":"#ffEEEE"}}),B.languages.registerCodeActionProvider("python",{provideCodeActions:function(e,t,n,a){var r=[],c=!0,o=!1,i=void 0;try{for(var s,l=n.markers[Symbol.iterator]();!(c=(s=l.next()).done);c=!0){var u=s.value;switch(u.code){case"NLKeyValues":var m=u.source;m&&r.push(z(m).then(function(n){console.log(n);var a=Object.keys(n)[0],r="";return r="shape"==a?n[a]:"color"==a?'fillStyle="'.concat(n[a],'"'):"".concat(a,"=").concat("string"==typeof n[a]?'"'.concat(n[a],'"'):n[a]),{title:"\u3082\u3057\u304b\u3057\u3066\u300c".concat(r,"\u300d\u3067\u3059\u304b\uff1f"),edit:{edits:[{edits:[{range:t,text:r}],resource:e.uri}]},kind:"quickfix",isPreferred:!0}}))}}}catch(f){o=!0,i=f}finally{try{c||null==l.return||l.return()}finally{if(o)throw i}}return Promise.all(r)}}),B.languages.registerCompletionItemProvider("python",{provideCompletionItems:function(e,t,n,a){var r=e.getWordUntilPosition(t),c=new B.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=[];return["pi","sin","cos","tan","sqrt","log","log10","pow","hypot","gcd"].map(function(e){o.push({label:e,kind:B.languages.CompletionItemKind.Function,insertText:"".concat(e,"(${1})"),insertTextRules:B.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:c})}),["input","print","len","range","int","float","str"].map(function(e){o.push({label:e,kind:B.languages.CompletionItemKind.Function,insertText:"".concat(e,"(${1})"),insertTextRules:B.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:c})}),["random"].map(function(e){o.push({label:e,kind:B.languages.CompletionItemKind.Function,insertText:"".concat(e,"(${1})"),insertTextRules:B.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:c})}),["World","Circle","Rectangle","Polygon","Label"].map(function(e){o.push({label:e,kind:B.languages.CompletionItemKind.Constructor,insertText:"".concat(e,"(${1})"),insertTextRules:B.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:c})}),["width","height","isStatic","restitution","fillStyle","image","strokeStyle","lineWidth"].map(function(e){o.push({label:e,kind:B.languages.CompletionItemKind.Property,insertText:"".concat(e,"="),range:c})}),{suggestions:o}}});var M=function(e,t,n,a){return function(r,c){e&&function(e,t,n){var a=e.getModel().findMatches("[\uff01\u3000\u201d\uff03\uff04\uff05\uff06\u2019\uff08\uff09\uff0a\uff0b\uff0c\uff0d\uff0e\uff0f\uff1a\uff1b\uff1c\uff1d\uff1e\uff1f\uff20\uff3b\uff3c\uffe5\uff3d\uff3e\uff3f\u2018\uff5b\uff5c\uff5d\uff5e\uffe3\uff21\uff22\uff23\uff24\uff25\uff26\uff27\uff28\uff29\uff2a\uff2b\uff2c\uff2d\uff2e\uff2f\uff30\uff31\uff32\uff33\uff34\uff35\uff36\uff37\uff38\uff39\uff3a\uff41\uff42\uff43\uff44\uff45\uff46\uff47\uff48\uff49\uff4a\uff4b\uff4c\uff4d\uff4e\uff4f\uff50\uff51\uff52\uff53\uff54\uff55\uff56\uff57\uff58\uff59\uff5a\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19\uff10\uff61\uff62\uff63\uff64\uff65\uff66\uff67\uff68\uff69\uff6a\uff6b\uff6c\uff6d\uff6e\uff6f\uff71\uff72\uff73\uff74\uff75\uff76\uff77\uff78\uff79\uff7a\uff7b\uff7c\uff7d\uff7e\uff7f\uff80\uff81\uff82\uff83\uff84\uff85\uff86\uff87\uff88\uff89\uff8a\uff8b\uff8c\uff8d\uff89\uff8f\uff90\uff91\uff92\uff93\uff94\uff95\uff96\uff97\uff98\uff99\uff9a\uff9b\uff9c\uff9d\uff9e\uff9f]",!0,!0,!1,null,!1).map(function(e){return{range:e.range,options:{inlineClassName:"zenkakuClass"}}});n(e.deltaDecorations(t,a))}(e,n,a),t(r)}},L=function(e,t){return function(){t(Math.max(12,e-3))}},H=function(e,t,n,a){return function(){e(!0),window.sessionStorage.setItem("setting/tmp",t),T("/setting.json").then(function(e){n(e),a("json")})}},A=function(e){var t,n,c,o,m=e.qs.course?e.qs.course:"LIVE2019",f=""!==e.hash?parseInt(e.hash.substr(1)):0,p=Object(a.useState)({}),d=Object(i.a)(p,2),g=d[0],h=d[1],b=Object(a.useState)(!1),y=Object(i.a)(b,2),v=y[0],j=y[1],w=Object(a.useState)(!1),C=Object(i.a)(w,2),k=C[0],x=C[1],B=Object(a.useState)({title:"",list:[]}),z=Object(i.a)(B,2),A=z[0],W=z[1],J=Object(a.useState)(""),K=Object(i.a)(J,2),D=K[0],$=K[1],G=Object(a.useState)(null),_=Object(i.a)(G,2),U=_[0],X=_[1],Q=Object(a.useState)(""),Y=Object(i.a)(Q,2),Z=Y[0],ee=Y[1],te=Object(a.useState)("vs"),ne=Object(i.a)(te,2),ae=ne[0],re=ne[1],ce=Object(a.useState)(24),oe=Object(i.a)(ce,2),ie=oe[0],se=oe[1],le=Object(a.useState)(null),ue=Object(i.a)(le,2),me=ue[0],fe=ue[1],pe=Object(a.useState)([]),de=Object(i.a)(pe,2),ge=de[0],he=de[1],Ee=Object(a.useState)(!1),be=Object(i.a)(Ee,2),ye=be[0],Se=be[1],ve=Object(a.useState)({}),Oe=Object(i.a)(ve,2),je=(Oe[0],Oe[1]),we=Object(a.useState)("python"),Ce=Object(i.a)(we,2),Ie=Ce[0],ke=Ce[1],xe=function(e){return function(t){return function(){!function(e){return function(t){return function(){return!(!e||!e.load(t))&&(e.start(),!0)}}}(e)(t)()?re("error"):re("vs")}}},Pe=function(e,t,n,a,r){return function(){e(!1);var c=window.sessionStorage.getItem("setting/tmp");if(t)try{var o=JSON.parse(t);a(o)}catch(i){console.log(t)}c&&(n(c),r("python"))}}(Se,Z,ee,je,ke);return Object(a.useEffect)(function(){!function(e){var t={},n=["NLP"].map(function(e){return T("/course/".concat(e,"/setting.json")).then(function(e){return JSON.parse(e)}).then(function(n){t[e]=n})});Promise.all(n).then(function(){return e(t)})}(h);var e=document.getElementById("puppy-screen");if(e){var t=new V.Puppy(e,{});X(t)}!function(e){T("/setting.json").then(function(t){e(JSON.parse(t))})}(je)},[]),r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{className:"container"},r.a.createElement(E,{courses:g,setIsShowVersion:j,isSettingOpened:ye,openSetting:H(Se,Z,ee,ke),closeSetting:Pe}),r.a.createElement(S,{setShow:j,show:v}),r.a.createElement(l.a,{id:"main-row"},r.a.createElement(u.a,{id:"left-col",xs:6},r.a.createElement(P,{course:A,coursePath:m,page:f,content:D,visible:k,play:xe(U),fetchContent:(o=$,function(e,t){return T("/course/".concat(e,"/").concat(t,"/index.md")).then(function(e){return o(e)})}),fetchSample:R(ee),fetchSetting:N(W),closeSetting:Pe}),r.a.createElement(O,{isCourseVisible:k,setIsCourseVisible:x,play:xe(U)(Z),fullscreen:q(U),setSize:F(U)})),r.a.createElement(u.a,{id:"right-col",xs:6},r.a.createElement(I,{fontSize:ie,theme:ae,source:Z,lang:Ie,onChange:M(me,ee,ge,he),editorDidMount:(c=fe,function(e){c(e)}),fontPlus:(t=ie,n=se,function(){n(t+3)}),fontMinus:L(ie,se)})))))},W=n(307),J=n(160);o.a.render(r.a.createElement(W.a,null,r.a.createElement(J.a,{render:function(e){return r.a.createElement(A,{qs:(t=e.location.search,t.substr(1).split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})),hash:e.location.hash});var t}})),document.getElementById("root"))}},[[309,2,3]]]);
//# sourceMappingURL=main.d2601906.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1645)}])},1645:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),i=n(7294),o=n(3454),s=e=>{let{adSlot:t}=e;return(0,i.useEffect)(()=>{window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})},[]),(0,r.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-layout-key":o.env.GOOGLE_ADS_LAYOUT_KEY,"data-ad-client":o.env.GOOGLE_ADS_KEY,"data-ad-slot":t,"data-ad-format":"fluid","data-full-width-responsive":"true"})},l=n(5073),a=n.n(l),c=()=>{let e=(0,i.useRef)(null),[t,n]=(0,i.useState)(2),[o,s]=(0,i.useState)([]),[l,c]=(0,i.useState)([""]),[u,d]=(0,i.useState)(!1),[h,f]=(0,i.useState)(!1),[p,x]=(0,i.useState)(!1),[m,_]=(0,i.useState)(""),j=["#e0496a","#3e5bdd","#f6d049","#60b236","#f7a416","#2ca073","#9ec1e6","#dd6db4","#7058b3","#9e3a92"];(0,i.useEffect)(()=>{let n=e.current;if(!n)return;let r=n.getContext("2d");r&&(()=>{let[e,i]=[n.width/2,n.height/2],s=Math.PI/(t/2);for(let n=0;n<t;n++)r.beginPath(),r.fillStyle=j[n%j.length],r.moveTo(e,i),r.arc(e,i,e,s*(n-1),s*n),r.fill(),r.closePath();r.fillStyle="black",r.font="18px Pretendard",r.textAlign="center";for(let t=0;t<o.length;t++){let n=s*t+s/2;r.save(),r.translate(e+Math.cos(n)*(e-50),i+Math.sin(n)*(i-50)),r.rotate(n+Math.PI/2),o[t].split(" ").forEach((e,t)=>{r.fillText(e,0,30*t)}),r.restore()}})()},[o,j,t]);let v=()=>{if(!h){alert("옵션을 모두 입력한 뒤 완료 버튼을 눌러주세요!");return}let n=e.current;n&&(d(!0),n.style.transform="initial",n.style.transition="initial",setTimeout(()=>{let e=Math.floor(Math.random()*t),r=2*Math.PI/t;n.style.transform="rotate(-".concat(180/Math.PI*(r*e+Math.PI/2)+3630,"deg)"),n.style.transition="2s",setTimeout(()=>{d(!1),x(!0),_(o[e]),alert("축하합니다! '".concat(o[e],"' 당첨"))},2e3)},1))},g=(e,t)=>{c(n=>{let r=[...n];return r[e]=t,r})};return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsx)("h1",{children:"룰렛 돌리기"}),(0,r.jsxs)("div",{className:a().optionContainer,children:[(0,r.jsx)("h3",{children:"옵션 개수 선택"}),(0,r.jsx)("p",{children:"(2 ~ 10개 선택)"}),(0,r.jsxs)("div",{className:a().controller,children:[(0,r.jsx)("button",{onClick:()=>{2===t||h||(n(t-1),c(e=>e.slice(0,-1)))},children:"-"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:t}),"개"]}),(0,r.jsx)("button",{onClick:()=>{10===t||h||(n(t+1),c(e=>[...e,""]))},children:"+"})]})]}),(0,r.jsx)("div",{className:a().roulette,children:(0,r.jsx)("canvas",{ref:e,width:"280",height:"280"})}),!p&&!u&&(0,r.jsx)("button",{className:a().start,onClick:v,children:"룰렛 돌리기"}),p&&!u&&(0,r.jsxs)("div",{className:a().winningBtn,children:[(0,r.jsxs)("div",{className:a().winningLabel,children:[(0,r.jsx)("b",{children:'"'.concat(m,'"')})," 당첨"]}),(0,r.jsxs)("div",{className:a().behindBtn,children:[(0,r.jsx)("button",{className:a().start,onClick:v,children:"다시 돌리기"}),(0,r.jsx)("button",{className:a().reset,onClick:()=>{x(!1),f(!1)},children:"재설정"}),(0,r.jsx)("button",{className:a().new,onClick:()=>{s([]),c(Array(t).fill("")),_(""),x(!1),f(!1)},children:"새 원판"})]})]}),!1===h&&(0,r.jsx)("p",{style:{color:"grey",marginTop:"1.5rem"},children:"옵션을 모두 입력한 뒤 완료 버튼을 눌러주세요."}),!1===h&&(0,r.jsxs)("div",{className:a().optionInput,children:[Array.from({length:t}).map((e,t)=>(0,r.jsx)("div",{className:a().inputDiv,children:(0,r.jsx)("input",{placeholder:"옵션 ".concat(t+1," 입력"),value:l[t]||"",onChange:e=>g(t,e.target.value)})},t)),(0,r.jsx)("button",{onClick:()=>{if(l.includes("")||l.length!==t){alert("옵션을 모두 입력해 주세요!");return}s([...l]),f(!0)},children:"완료"})]})]})},u=n(9008),d=n.n(u),h=n(4722),f=n.n(h),p=()=>(0,r.jsxs)("div",{className:f().container,children:[(0,r.jsx)("h2",{children:"룰렛 이용방법"}),(0,r.jsxs)("div",{className:f().content,children:[(0,r.jsx)("p",{children:"1. 옵션 개수를 선택해 주세요. 2개 ~ 10개까지의 옵션을 설정할 수 있습니다."}),(0,r.jsxs)("p",{children:["2. 룰렛 하단의 입력창에 옵션명을 입력해 주세요. 모든 옵션을 입력한 뒤",(0,r.jsx)("b",{children:" 완료"})," 버튼을 눌러주세요."]}),(0,r.jsx)("p",{children:"3. 룰렛 돌리기 버튼을 눌러 룰렛을 돌리고 당첨 결과를 확인해 주세요."}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"룰렛 결과를 확인한 후"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"* 다시 돌리기"})," 버튼을 눌러 룰렛을 한번 더 돌릴 수 있습니다."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"* 재설정"})," 버튼을 눌러 현재 룰렛에 옵션을 추가하거나 제거할 수 있습니다."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"* 새 원판"})," 버튼을 눌러 모든 옵션이 초기화된 새로운 룰렛을 생성할 수 있습니다."]})]})]}),x=n(3454),m=()=>(0,r.jsxs)("div",{children:[(0,r.jsxs)(d(),{children:[(0,r.jsx)("link",{rel:"icon",type:"image",href:"/favicon.ico"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:"심플 룰렛"}),(0,r.jsx)("meta",{name:"description",content:"흥미로운 룰렛 게임을 간단히 플레이할 수 있는 사이트입니다. 결정이 필요한 다양한 상황에서 룰렛 결과를 유용하게 사용해 보세요!"}),(0,r.jsx)("meta",{property:"og:url",content:"https://roulette.timeqlife.com"}),(0,r.jsx)("meta",{property:"og:image",content:"/thumbnail.png"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{name:"author",content:"룰렛 게임사"}),(0,r.jsx)("meta",{name:"email",content:"seaofiandme@google.com"}),(0,r.jsx)("meta",{name:"naver-site-verification",content:x.env.NAVER_SEARCH_VERIFY_KEY})]}),(0,r.jsx)(s,{adSlot:"8185832302"}),(0,r.jsx)(c,{}),(0,r.jsx)(s,{adSlot:"8185832302"}),(0,r.jsx)(p,{})]})},4722:function(e){e.exports={container:"Explain_container__yb9wg",content:"Explain_content__ZBXgQ"}},5073:function(e){e.exports={container:"Roulette_container__3FVTw",optionContainer:"Roulette_optionContainer__mT8Dc",controller:"Roulette_controller__FMqpV",roulette:"Roulette_roulette__7il7u",start:"Roulette_start__uOZsM",new:"Roulette_new__oqNgE",reset:"Roulette_reset__e1dsu",optionInput:"Roulette_optionInput__lvHUw",winningBtn:"Roulette_winningBtn__mHr8V",winningLabel:"Roulette_winningLabel___nzxi",behindBtn:"Roulette_behindBtn__E7dvq",inputDiv:"Roulette_inputDiv__LwDVi"}},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var a=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?a=r.concat(a):u=-1,a.length&&h())}function h(){if(!c){var e=l(d);c=!0;for(var t=a.length;t;){for(r=a,a=[];++u<t;)r&&r[u].run();u=-1,t=a.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new f(e,t)),1!==a.length||c||l(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},s=!0;try{t[e](o,o.exports,r),s=!1}finally{s&&delete n[e]}return o.exports}r.ab="//";var i=r(229);e.exports=i}()},9008:function(e,t,n){e.exports=n(4764)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
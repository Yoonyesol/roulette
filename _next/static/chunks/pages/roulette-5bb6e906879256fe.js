(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[274],{3454:function(t,e,n){"use strict";var r,i;t.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1022:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/roulette",function(){return n(2371)}])},2371:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(5893),i=n(7294),o=n(3454),s=t=>{let{adSlot:e}=t;return(0,i.useEffect)(()=>{window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})},[]),(0,r.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-layout-key":o.env.GOOGLE_ADS_LAYOUT_KEY,"data-ad-client":o.env.GOOGLE_ADS_KEY,"data-ad-slot":e,"data-ad-format":"fluid","data-full-width-responsive":"true"})},a=n(9071),l=n.n(a),c=()=>{let t=(0,i.useRef)(null),[e,n]=(0,i.useState)(2),[o,s]=(0,i.useState)([]),[a,c]=(0,i.useState)([""]),[u,d]=(0,i.useState)(!1),[h,f]=(0,i.useState)(!1),[p,x]=(0,i.useState)(!1),[m,_]=(0,i.useState)(""),j=["#e0496a","#3e5bdd","#f6d049","#60b236","#f7a416","#2ca073","#9ec1e6","#dd6db4","#7058b3","#9e3a92"];(0,i.useEffect)(()=>{let n=t.current;if(!n)return;let r=n.getContext("2d");r&&(()=>{let[t,i]=[n.width/2,n.height/2],s=Math.PI/(e/2);for(let n=0;n<e;n++)r.beginPath(),r.fillStyle=j[n%j.length],r.moveTo(t,i),r.arc(t,i,t,s*(n-1),s*n),r.fill(),r.closePath();r.fillStyle="black",r.font="18px Pretendard",r.textAlign="center";for(let e=0;e<o.length;e++){let n=s*e+s/2;r.save(),r.translate(t+Math.cos(n)*(t-50),i+Math.sin(n)*(i-50)),r.rotate(n+Math.PI/2),o[e].split(" ").forEach((t,e)=>{r.fillText(t,0,30*e)}),r.restore()}})()},[o,j,e]);let g=()=>{if(!h){alert("옵션을 모두 입력한 뒤 완료 버튼을 눌러주세요!");return}let n=t.current;n&&(d(!0),n.style.transform="initial",n.style.transition="initial",setTimeout(()=>{let t=Math.floor(Math.random()*e),r=2*Math.PI/e;n.style.transform="rotate(-".concat(180/Math.PI*(r*t+Math.PI/2)+3630,"deg)"),n.style.transition="2s",setTimeout(()=>{d(!1),x(!0),_(o[t]),alert("축하합니다! '".concat(o[t],"' 당첨"))},2e3)},1))},v=(t,e)=>{c(n=>{let r=[...n];return r[t]=e,r})};return(0,r.jsxs)("div",{className:l().container,children:[(0,r.jsx)("h1",{children:"룰렛 돌리기"}),(0,r.jsxs)("div",{className:l().optionContainer,children:[(0,r.jsx)("h3",{children:"옵션 개수 선택"}),(0,r.jsx)("p",{children:"(2 ~ 10개 선택)"}),(0,r.jsxs)("div",{className:l().controller,children:[(0,r.jsx)("button",{onClick:()=>{2===e||h||(n(e-1),c(t=>t.slice(0,-1)))},children:"-"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:e}),"개"]}),(0,r.jsx)("button",{onClick:()=>{10===e||h||(n(e+1),c(t=>[...t,""]))},children:"+"})]})]}),(0,r.jsx)("div",{className:l().roulette,children:(0,r.jsx)("canvas",{ref:t,width:"280",height:"280"})}),!p&&!u&&(0,r.jsx)("button",{className:l().start,onClick:g,children:"룰렛 돌리기"}),p&&!u&&(0,r.jsxs)("div",{className:l().winningBtn,children:[(0,r.jsxs)("div",{className:l().winningLabel,children:[(0,r.jsx)("b",{children:'"'.concat(m,'"')})," 당첨"]}),(0,r.jsxs)("div",{className:l().behindBtn,children:[(0,r.jsx)("button",{className:l().start,onClick:g,children:"다시 돌리기"}),(0,r.jsx)("button",{className:l().reset,onClick:()=>{x(!1),f(!1)},children:"재설정"}),(0,r.jsx)("button",{className:l().new,onClick:()=>{s([]),c(Array(e).fill("")),_(""),x(!1),f(!1)},children:"새 원판"})]})]}),!1===h&&(0,r.jsx)("p",{style:{color:"grey",marginTop:"1.5rem"},children:"옵션을 모두 입력한 뒤 완료 버튼을 눌러주세요."}),!1===h&&(0,r.jsxs)("div",{className:l().optionInput,children:[Array.from({length:e}).map((t,e)=>(0,r.jsx)("div",{className:l().inputDiv,children:(0,r.jsx)("input",{placeholder:"옵션 ".concat(e+1," 입력"),value:a[e]||"",onChange:t=>v(e,t.target.value)})},e)),(0,r.jsx)("button",{onClick:()=>{if(a.includes("")||a.length!==e){alert("옵션을 모두 입력해 주세요!");return}s([...a]),f(!0)},children:"완료"})]})]})},u=n(9008),d=n.n(u),h=n(4722),f=n.n(h),p=()=>(0,r.jsxs)("div",{className:f().container,children:[(0,r.jsx)("h2",{children:"룰렛 이용방법"}),(0,r.jsxs)("div",{className:f().content,children:[(0,r.jsx)("p",{children:"1. 옵션 개수를 선택해 주세요. 2개 ~ 10개까지의 옵션을 설정할 수 있습니다."}),(0,r.jsxs)("p",{children:["2. 룰렛 하단의 입력창에 옵션명을 입력해 주세요. 모든 옵션을 입력한 뒤",(0,r.jsx)("b",{children:" 완료"})," 버튼을 눌러주세요."]}),(0,r.jsx)("p",{children:"3. 룰렛 돌리기 버튼을 눌러 룰렛을 돌리고 당첨 결과를 확인해 주세요."}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"룰렛 결과를 확인한 후"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"* 다시 돌리기"})," 버튼을 눌러 룰렛을 한번 더 돌릴 수 있습니다."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"* 재설정"})," 버튼을 눌러 현재 룰렛에 옵션을 추가하거나 제거할 수 있습니다."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"* 새 원판"})," 버튼을 눌러 모든 옵션이 초기화된 새로운 룰렛을 생성할 수 있습니다."]})]})]}),x=()=>(0,r.jsxs)("div",{children:[(0,r.jsxs)(d(),{children:[(0,r.jsx)("link",{rel:"icon",type:"image",href:"/favicon.ico"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:"심플 룰렛"}),(0,r.jsx)("meta",{name:"description",content:"흥미로운 룰렛 게임을 간단히 플레이할 수 있는 사이트입니다. 결정이 필요한 다양한 상황에서 룰렛 결과를 유용하게 사용해 보세요!"}),(0,r.jsx)("meta",{property:"og:url",content:"https://timeqlife.com/roulette"}),(0,r.jsx)("meta",{property:"og:image",content:"/thumbnail.png"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{name:"author",content:"룰렛 게임사"}),(0,r.jsx)("meta",{name:"email",content:"seaofiandme@google.com"})]}),(0,r.jsx)(s,{adSlot:"8185832302"}),(0,r.jsx)(c,{}),(0,r.jsx)(s,{adSlot:"8185832302"}),(0,r.jsx)(p,{})]})},4722:function(t){t.exports={container:"Explain_container__yb9wg",content:"Explain_content__ZBXgQ"}},9071:function(t){t.exports={container:"RouletteData_container___7ugS",optionContainer:"RouletteData_optionContainer__G5wLP",controller:"RouletteData_controller__v8T_O",roulette:"RouletteData_roulette___jR9H",start:"RouletteData_start__oE1qQ",new:"RouletteData_new__PWWxz",reset:"RouletteData_reset__kpAEa",optionInput:"RouletteData_optionInput__UL1us",winningBtn:"RouletteData_winningBtn__5981e",winningLabel:"RouletteData_winningLabel__0MzcW",behindBtn:"RouletteData_behindBtn__iMx2U",inputDiv:"RouletteData_inputDiv__ttGfl"}},7663:function(t){!function(){var e={229:function(t){var e,n,r,i=t.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var l=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&h())}function h(){if(!c){var t=a(d);c=!0;for(var e=l.length;e;){for(r=l,l=[];++u<e;)r&&r[u].run();u=-1,e=l.length}r=null,c=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function p(){}i.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new f(t,e)),1!==l.length||c||a(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(t){return[]},i.binding=function(t){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}},s=!0;try{e[t](o,o.exports,r),s=!1}finally{s&&delete n[t]}return o.exports}r.ab="//";var i=r(229);t.exports=i}()},9008:function(t,e,n){t.exports=n(4764)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=1022)}),_N_E=t.O()}]);
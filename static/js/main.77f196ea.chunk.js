(this.webpackJsonpcaro=this.webpackJsonpcaro||[]).push([[0],[,,,,,,,,,function(e,n,r){},,function(e,n,r){},function(e,n,r){},function(e,n,r){},function(e,n,r){"use strict";r.r(n);var t=r(1),c=r(4),a=r.n(c),s=r(2);var i=function(e,n,r,t){for(var c=t?"O":"X",a=[],s=0;s<n;s++){a=[];for(var i=0;i<r;i++)if(e[r*s+i]&&e[r*s+i]==c){if(a.push(r*s+i),5==a.length)return{player:c,line:a}}else a=[]}for(var l=0;l<n;l++){a=[];for(var u=0;u<r;u++)if(e[r*u+l]&&e[r*u+l]==c){if(a.push(r*u+l),5==a.length)return{player:c,line:a}}else a=[]}for(var o=0;o<n-4;o++)for(var j=4;j<r;j++){a=[];for(var b=0;b<5;b++)if(e[r*(o+b)+(j-b)]&&e[r*(o+b)+(j-b)]==c){if(a.push(r*(o+b)+(j-b)),5==a.length)return{player:c,line:a}}else a=[]}for(var d=0;d<n-4;d++)for(var f=0;f<r-4;f++){a=[];for(var v=0;v<5;v++)if(e[r*(d+v)+(f+v)]&&e[r*(d+v)+(f+v)]==c){if(a.push(r*(d+v)+(f+v)),5==a.length)return{player:c,line:a}}else a=[]}return null},l=(r(9),r(0));var u=function(e){var n=e.isWinning,r=e.onClick,t=e.value;return Object(l.jsx)("button",{className:"square "+(n?"square--winning":null),onClick:r,children:t})};r(11);function o(e,n,r,t){return Object(l.jsx)(u,{isWinning:n,value:e,onClick:function(){return r(t)}},"square "+t)}function j(e,n,r,t){for(var c=[],a=0,s=0;s<t;s++){for(var i=[],u=0;u<t;u++)i.push(o(e[t*s+u],n.includes(t*s+u),r,t*s+u)),a++;c.push(Object(l.jsx)("div",{className:"board-row",children:i},a))}return c}var b=function(e){var n=e.winningSquares,r=e.squares,t=e.onClick,c=e.row;return Object(l.jsx)("div",{children:j(r,n,t,c)})};r(12);var d=function(e){var n,r=e.row,c=Object(t.useState)([{squares:Array(r*r).fill(null)}]),a=Object(s.a)(c,2),u=a[0],o=a[1],j=Object(t.useState)(0),d=Object(s.a)(j,2),f=d[0],v=d[1],O=Object(t.useState)(!0),h=Object(s.a)(O,2),m=h[0],x=h[1],p=Object(t.useState)(!0),g=Object(s.a)(p,2),w=g[0],q=g[1],N=u,y=N[f],k=i(y.squares,r,r,m),S=N.map((function(e,n){var r=n?"Go to move #"+n+" ("+N[n].location+")":"Go to game start";return Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){return function(e){v(e),x(e%2===0)}(n)},children:n===f?Object(l.jsx)("b",{children:r}):r})},n)}));return n=k?"Winner: "+k.player:y.squares.includes(null)?"Next player: "+(m?"X":"O"):"Draw",Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("div",{className:"game-board",children:Object(l.jsx)(b,{winningSquares:k?k.line:[],squares:y.squares,onClick:function(e){return function(e){var n=u.slice(0,f+1),t=n[n.length-1].squares.slice();i(t,r,r)||t[e]||(t[e]=m?"X":"O",v(n.length),x(!m),o(n.concat([{squares:t,location:[e%r+1,(e-e%r)/r+1]}])))}(e)},row:r})}),Object(l.jsxs)("div",{className:"game-info",children:[Object(l.jsxs)("button",{onClick:function(){q(!w)},children:["Sort by: ",w?"Ascending":"Descending"]}),Object(l.jsx)("div",{children:n}),Object(l.jsx)("ol",{children:w?S:S.reverse()})]})]})};r(13);var f=function(){var e=Object(t.useState)(0),n=Object(s.a)(e,2),r=n[0],c=n[1],a=Object(t.useState)(!0),i=Object(s.a)(a,2),u=i[0],o=i[1];function j(){o(!1),function(){var e=document.getElementsByName("rowValue")[0].value;e<5||e>20?alert("number of row and column must be from 5 to 20!"):c(e)}()}return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"flex-container",children:[Object(l.jsx)("h1",{children:"Caro"}),Object(l.jsxs)("div",{class:"flex-create-board",children:[Object(l.jsxs)("div",{className:"padding",children:[Object(l.jsx)("p",{children:"Nh\u1eadp s\u1ed1 h\xe0ng"}),Object(l.jsx)("input",{disabled:!u,className:"input",name:"rowValue",placeholder:"S\u1ed1 h\xe0ng",type:"number",min:"5",max:"20"})]}),Object(l.jsx)("button",{onClick:function(){return j()},disabled:!u,className:"button",children:"T\u1ea1o b\xe0n c\u1edd"})]})]}),u?Object(l.jsx)(l.Fragment,{}):Object(l.jsx)(d,{row:r})]})};a.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.77f196ea.chunk.js.map
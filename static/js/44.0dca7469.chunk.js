"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[44],{340:function(e,t){t.Z="b3e9d29fd7300ce6955a9032d5811af1"},44:function(e,t,r){r.r(t),r.d(t,{default:function(){return a}});var s=r(439),i=r(223),w=r(689),d=r(87),F=r(791),n=r(340),b=r(184),a=function(){var e,t,r=(0,w.TH)(),a=(0,F.useRef)(null!==(e=null===(t=r.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),I=(0,F.useState)(""),o=(0,s.Z)(I,2),h=o[0],V=o[1],f=(0,F.useState)(""),R=(0,s.Z)(f,2),B=R[0],c=R[1],u=(0,F.useState)(""),v=(0,s.Z)(u,2),g=v[0],Y=v[1],l=(0,F.useState)(""),A=(0,s.Z)(l,2),W=A[0],p=A[1],D=(0,F.useState)(""),G=(0,s.Z)(D,2),j=G[0],q=G[1],Z=(0,F.useState)([]),x=(0,s.Z)(Z,2),X=x[0],m=x[1],M=(0,F.useState)(!0),C=(0,s.Z)(M,2),P=C[0],U=C[1],O=(0,F.useState)(""),k=(0,s.Z)(O,2),E=k[0],L=k[1],N=(0,w.UO)();return(0,F.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(N.movieId,"?language=en-US&api_key=").concat(n.Z)).then((function(e){return e.json()})).then((function(e){if(console.log("movie data",e),e.title){U(!0),V(e.poster_path),c(e.title);var t=new Date(e.release_date);Y(t.getFullYear()),p(Math.floor(10*e.vote_average)),q(e.overview),m(e.genres),L(e.id)}else U(!1)})).catch((function(e){console.log("Error on fetch request with ID ".concat(N.movieId),e)}))}),[N.movieId]),(0,b.jsxs)("div",{className:i.Z.container,children:[(0,b.jsx)(d.rU,{to:a.current,children:(0,b.jsx)("button",{type:"button",children:"\ud83e\udc78 Go back"})}),P?(0,b.jsxs)("div",{className:i.Z.movie,children:[(0,b.jsx)("div",{className:i.Z.poster,children:(0,b.jsx)("img",{src:h?"https://image.tmdb.org/t/p/w300".concat(h):"data:image/png;base64,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",alt:"Movie poster"})}),(0,b.jsxs)("div",{className:i.Z.movieDetails,children:[(0,b.jsxs)("h2",{children:[B," (",g,")"]}),(0,b.jsxs)("p",{children:["User Score: ",W,"%"]}),(0,b.jsx)("h3",{children:"Overview"}),(0,b.jsx)("p",{children:j}),(0,b.jsx)("h3",{children:"Genres"}),(0,b.jsx)("ul",{className:i.Z.genres,children:X.map((function(e){return(0,b.jsx)("li",{children:(0,b.jsx)("p",{children:e.name})},e.id)}))})]}),(0,b.jsx)("br",{})]}):(0,b.jsx)("div",{className:i.Z.movie,children:(0,b.jsx)("h1",{children:"Sorry, we have no information about this movie..."})}),(0,b.jsx)("h3",{children:"Additional information:"}),(0,b.jsxs)("ul",{className:i.Z.infoList,children:[(0,b.jsx)("li",{className:i.Z.info,children:(0,b.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,b.jsx)("li",{className:i.Z.info,children:(0,b.jsx)(d.rU,{to:"reviews",children:"Reviews"})})]}),(0,b.jsx)(F.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading..."}),children:(0,b.jsx)(w.j3,{context:[E,L]})})]})}}}]);
//# sourceMappingURL=44.0dca7469.chunk.js.map
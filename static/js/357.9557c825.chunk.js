"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[357],{607:function(e,t){t.Z="b3e9d29fd7300ce6955a9032d5811af1"},357:function(e,t,n){n.r(t);var c=n(439),s=n(689),i=n(791),a=n(607),o=n(223),r=n(184);t.default=function(){var e=(0,s.bx)(),t=(0,c.Z)(e,1)[0],n=(0,i.useState)([]),u=(0,c.Z)(n,2),h=u[0],l=u[1],f=(0,i.useState)(!0),d=(0,c.Z)(f,2),v=d[0],m=d[1];return(0,i.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(a.Z,"&language=en-US")).then((function(e){return e.json()})).then((function(e){e.results.length>0?(m(!0),l(e.results)):m(!1)})).catch((function(e){console.log("Error on fetch request with ID ".concat(t),e)}))}),[t]),(0,r.jsx)("div",{className:o.Z.cast,children:(0,r.jsx)("ul",{className:o.Z.castList,children:v?h.map((function(e){return(0,r.jsxs)("li",{className:o.Z.reviewLi,children:[(0,r.jsx)("h4",{children:e.author}),(0,r.jsx)("p",{className:o.Z.reviewContent,children:e.content})]},e.id)})):"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=357.9557c825.chunk.js.map
!function(){"use strict";var t,r={250:function(){var t=window.wp.blocks,r=window.React,e=window.wp.i18n,n=window.wp.blockEditor,o=JSON.parse('{"u2":"static-block/static-block"}');(0,t.registerBlockType)(o.u2,{edit:function(){return(0,r.createElement)("p",{...(0,n.useBlockProps)()},(0,e.__)("Static Block – hello from the editor!","static-block"))},save:function(){return(0,r.createElement)("p",{...n.useBlockProps.save()},"Static Block – hello from the saved content!")}})}},e={};function n(t){var o=e[t];if(void 0!==o)return o.exports;var c=e[t]={exports:{}};return r[t](c,c.exports,n),c.exports}n.m=r,t=[],n.O=function(r,e,o,c){if(!e){var i=1/0;for(s=0;s<t.length;s++){e=t[s][0],o=t[s][1],c=t[s][2];for(var u=!0,a=0;a<e.length;a++)(!1&c||i>=c)&&Object.keys(n.O).every((function(t){return n.O[t](e[a])}))?e.splice(a--,1):(u=!1,c<i&&(i=c));if(u){t.splice(s--,1);var l=o();void 0!==l&&(r=l)}}return r}c=c||0;for(var s=t.length;s>0&&t[s-1][2]>c;s--)t[s]=t[s-1];t[s]=[e,o,c]},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},function(){var t={826:0,431:0};n.O.j=function(r){return 0===t[r]};var r=function(r,e){var o,c,i=e[0],u=e[1],a=e[2],l=0;if(i.some((function(r){return 0!==t[r]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(a)var s=a(n)}for(r&&r(e);l<i.length;l++)c=i[l],n.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return n.O(s)},e=self.webpackChunkstatic_block=self.webpackChunkstatic_block||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var o=n.O(void 0,[431],(function(){return n(250)}));o=n.O(o)}();
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{274:function(e,t,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(81).default)("0b116749",content,!0,{sourceMap:!1})},277:function(e,t,n){"use strict";n(274)},278:function(e,t,n){var r=n(80)((function(i){return i[1]}));r.push([e.i,".skeleton[data-v-3f902315]{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:placeholderShimmer-3f902315;animation-timing-function:linear;background-color:#f6f7f8;background-image:linear-gradient(90deg,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8);background-repeat:no-repeat;background-size:var(--width) var(--height);border-radius:var(--border-radius);display:inline-block;height:100%;position:relative;width:100%}.dark .skeleton[data-v-3f902315]{background:linear-gradient(90deg,#25323d 10%,#2e3c48 35.78%,#25323d 73.28%)!important}@keyframes placeholderShimmer-3f902315{0%{background-position:-468px 0}to{background-position:468px 0}}",""]),r.locals={},e.exports=r},281:function(e,t,n){"use strict";n.r(t);n(194);var r={props:{loading:{type:Boolean,default:!1},height:{type:[String,Number],default:"30px"},width:{type:[String,Number],default:"100%"},line:{type:[String,Number],default:1},borderRadius:{type:[String,Number],default:"4px"},preloaderClass:{type:[String,Array],default:function(){return""}},circle:{type:Boolean,default:!1},img:{type:String,default:"https://picsum/photos/300/300"}},computed:{shimmerStyles:function(){return{"--width":this.width,"--height":this.height,"--border-radius":this.circle?"50%":this.borderRadius}}}},o=(n(277),n(44)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("client-only",[t("transition",{key:e.loading,attrs:{name:"skeleton",mode:"out-in"}},[e.loading?t("div",{key:e.loading},[t("div",{key:"loading",staticClass:"shrink-0",class:e.preloaderClass,style:{height:e.height,width:e.width}},[t("span",{staticClass:"skeleton",style:e.shimmerStyles})])]):[e._t("default")]],2)],1)}),[],!1,null,"3f902315",null);t.default=component.exports}}]);
(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[46],{"078/":function(n,e,t){t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return r})),t.d(e,"d",(function(){return a}));const i=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],o=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","STLProductsFeed","RelatedProductsFeed","ShoppingSquareGridRelatedProducts","UserProfilePinGrid"],r=[...o,"ShoppingSquareGridRelatedProductsBoth","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ShoppingSquareGridRelatedProductsMetadata","ProductPinsFeed","ShoppingSquareGridCrop","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],a=["BaseBoardPinGrid"]},Y8Sn:function(n,e,t){t.d(e,"i",(function(){return i})),t.d(e,"h",(function(){return o})),t.d(e,"e",(function(){return r})),t.d(e,"f",(function(){return a})),t.d(e,"g",(function(){return c})),t.d(e,"d",(function(){return d})),t.d(e,"j",(function(){return u})),t.d(e,"k",(function(){return s})),t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return p})),t.d(e,"c",(function(){return f}));const i=n=>!!n&&!!n.video_list,o=({story_pin_data_id:n})=>!!n,r=n=>{var e;return n.rich_summary&&n.rich_summary.products&&n.rich_summary.products.length>0||(null===(e=n.rich_metadata)||void 0===e?void 0:e.products)&&n.rich_metadata.products.length>0||!1},a=n=>!!n.promoter&&!n.is_downstream_promotion,c=n=>!!n.video_status&&5!==n.video_status,d=n=>!!n.creator_class,u=(n,e)=>{const{organicVideosAutoplaying:t,promotedVideosAutoplaying:i}=e,o={...t,...i};return!!o[n]&&!o[n].paused},s=n=>["email","messages","deep_linking"].includes(n),l=(n,e)=>{const{organicVideosAutoplaying:t,promotedVideosAutoplaying:i}=e,o={...t,...i};for(const r in o){const{paused:e}=o[r];if(r!==n&&!e)return!1}return!0},p=(n,e)=>{const{organicVideosAutoplaying:t,promotedVideosAutoplaying:i}=e,o={...t,...i};return o[n]&&o[n].currentTime},f=()=>{let n=800,e=400;return"undefined"!=typeof window&&(n=window.innerHeight,e=window.innerWidth),{windowHeight:n,windowWidth:e}}},a9a9:function(n,e,t){t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return r}));var i=t("zpPL");const o=n=>i.a.instance.dispatch(function(n){return{type:"SPAMMY_CLICKTHROUGH_WARNING_SHOW",payload:n}}(n)),r=()=>i.a.instance.dispatch({type:"SPAMMY_CLICKTHROUGH_WARNING_DISMISS"})},fJfT:function(n,e,t){t.d(e,"e",(function(){return f})),t.d(e,"b",(function(){return h})),t.d(e,"f",(function(){return _})),t.d(e,"a",(function(){return w})),t.d(e,"d",(function(){return m})),t.d(e,"c",(function(){return g}));var i=t("TPPM"),o=t("ajUs"),r=t("eOdZ"),a=t("gxu6"),c=t("T0g9");var d={open(n,e,t,o,r){const d=Math.round(1e3*Math.random())+"",u=Math.round(1e3*Math.random())+"";a.b("offsite_"+d,u);const s={token:d+"-"+u,url:n,csr:void 0,pin:void 0,client_tracking_params:o,aux_data:r?JSON.stringify(r):void 0};e?s.pin=e:t&&(s.csr=t),Object(i.a)("/offsite/?"+Object(c.a)(s),!0)}};var u=t("zwad"),s=t("a9a9"),l=t("Y8Sn"),p=t("078/");const f=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isExternalLink:n,event:e})=>!n&&(e.metaKey||e.ctrlKey),_=({location:n,pin:e,surface:t})=>!Object(l.f)(e)&&(({location:n,pinId:e,surface:t})=>{const i=Boolean(t),o=p.a.includes(t),r=n.pathname.includes(e);return i&&!o||r})({location:n,pinId:e.id,surface:t}),w=async({isMounted:n,pin:e,location:t,spamCheckCallback:i,href:a})=>{const c=r.a.create("OffsiteLinkResource",{check_only:!0,client_tracking_params:Object(o.a)(e,t),pin_id:null==e?void 0:e.id,url:a}),d=await c.callGet({showError:!1});if(!d.resource_response.error&&n){const n=d.resource_response.data||{},{message:e,redirect_status:t,url:o}=n;i({blocked:["blocked","suspicious","porn"].includes(t),message:e,redirectStatus:t,sanitized_url:o})}},m=({event:n,onHistoryChange:e,href:t,history:o,target:r})=>{const a=u.a.getUrlClass(t);a===u.a.UrlClass.TRUSTED_DIFFERENT_ORIGIN||"blank"===r?Object(i.a)(t,"blank"===r):o&&a===u.a.UrlClass.SAME_ORIGIN&&(o.push(u.a.normalizeUrl(t)),e&&e({event:n}))},g=({href:n,pinId:e,pin:t,location:i,auxData:a,spamCheck:c})=>{"undefined"!=typeof window&&window.Windows?function({url:n,pinId:e,pin:t,location:i,auxData:a}){const c={check_only:!0,client_tracking_params:t?Object(o.a)(t,i):void 0,pin_id:t?t.id:e,url:n,aux_data:JSON.stringify(a)};r.a.create("OffsiteLinkResource",c).callGet().then(r=>{if(r&&r.resource_response&&!r.resource_response.error){const{resource_response:n}=r,{redirect_status:e,url:t}=n.data;if(!["blocked","suspicious","porn"].includes(e)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const n=new window.Windows.Foundation.Uri(t);window.Windows.System.Launcher.launchUriAsync(n)}return}}if(t){const r=Object(o.a)(t,i);d.open(n,e,null,r,a)}else d.open(n,e)})}({url:n,pinId:e,pin:t,location:i,auxData:a}):t?(({spamCheck:n,auxData:e,location:t,pin:i,pinId:r,href:a})=>{null!=n&&n.blocked?Object(s.b)(n):d.open(a,r,null,Object(o.a)(i,t),e)})({spamCheck:c,auxData:a,location:i,pin:t,pinId:e,href:n}):d.open(n,e)}},gqRH:function(n,e,t){t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return d}));var i=t("q1tI"),o=t("zwad"),r=t("fJfT"),a=t("EC67");function c(n){const{externalData:e,href:t,onHistoryChange:c,target:d}=n,[u,s]=Object(i.useState)(null),[l,p]=Object(i.useState)(!1),f=Object(a.h)(),h=Object(a.i)(),_=o.a.isOffsiteUrl(t);return Object(i.useEffect)(()=>(p(!0),()=>{p(!1)}),[]),Object(i.useEffect)(()=>{_&&null!=e&&e.pin&&null===u&&Object(r.f)({location:h,pin:e.pin,surface:e.surface})&&Object(r.a)({isMounted:l,pin:e.pin,location:h,spamCheckCallback:n=>s(n),href:t})},[e,t,_,l,h,u]),({event:n})=>{var i;Object(r.b)({isExternalLink:_,event:n})||(n.nativeEvent.preventDefault(),t&&(_?Object(r.c)({auxData:null==e?void 0:e.auxData,href:t,pinId:null==e||null===(i=e.pin)||void 0===i?void 0:i.id,pin:null==e?void 0:e.pin,location:h,spamCheck:u}):Object(r.d)({event:n,href:t,history:f,onHistoryChange:c,target:"blank"===d?"blank":null})))}}const d=({children:n,...e})=>n({handleClick:c(e)})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/46-09c2772c8a94df96692a.mjs.map
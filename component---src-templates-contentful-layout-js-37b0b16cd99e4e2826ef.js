(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3WF5":function(n,t,e){var a=e("eUgh"),i=e("ut/Y"),r=e("l9OW"),o=e("Z0cm");n.exports=function(n,t){return(o(n)?a:r)(n,i(t,3))}},BiGR:function(n,t,e){var a=e("nmnc"),i=e("03A+"),r=e("Z0cm"),o=a?a.isConcatSpreadable:void 0;n.exports=function(n){return r(n)||i(n)||!!(o&&n&&n[o])}},"C+Hg":function(n,t,e){"use strict";e.r(t);e("E9XD");var a=e("KQm4"),i=e("zLVn"),r=e("FdF9"),o=e("IMe6"),s=e("wUWr"),c=e.n(s),l=e("Z0cm"),d=e.n(l),u=e("v527"),p=e("/tfy"),f=e("YwZP"),m=e("TJpk"),y=e.n(m);t.default=function(n){var t=n.data,e=t.header,s=t.footer,l=t.seo,m=t.heroes,v=t.features,g=t.richTexts,h=t.layoutModuleContainers,w=t.moduleContainers,_=t.cards,k=t.ctas,b=t.faqs,E=t.embeds,x=t.logos,j=t.hubspotForms,T=t.fullWidthCtas,I=n.pageContext,S=I.modules,O=I.pathBuild,P=I.themeColor,W=I.isFaqLayout,q=I.h2FontSize,R=(n.path,Object(i.a)(n,["data","pageContext","path"])),C=Object(f.useLocation)().pathname,F="",M="451393",K="";C.includes("/uninstalled")&&(F='const DEV_WRITE_KEY = "PZkSwsTBxW1BrbyIYEUjFBEumGvTyjcz", PROD_WRITE_KEY = "MHae0tTVRqyHDim9qQ9ablSZpvm3Tvzc";\nconst params = new Proxy(new URLSearchParams(window.location.search), { get: (searchParams, prop) => searchParams.get(prop), });\nconst WRITE_KEY = (params.env == "production") ? PROD_WRITE_KEY : DEV_WRITE_KEY;\n\n!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey=WRITE_KEY;analytics.SNIPPET_VERSION="4.15.2";\n  // only ping Segment if an id exists\n  if (params.mmi) {\n    analytics.load(WRITE_KEY);\n\n    // identify user by anonId\n    analytics.identify(atob(params.mmi));\n    analytics.track(\'App Uninstalled\', {\n      app_version: params.av\n    });\n    // clear session cookies. meant to be one-time event to close loop\n    analytics.reset();\n  }\n}}();'),C.includes("/institutions")&&(M="4249353",K="7714137");var A='_linkedin_partner_id = "'+M+'";',B='<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid='+M+(K?"&conversionId="+K:"")+'&fmt=gif"/>',Y=r.default.useState(""),D=Y[0],z=Y[1],L=r.default.useState(1),H={faq:{idFaqActive:D,setIdFaqActive:z},pagination:{paginationPage:L[0],setPaginationPage:L[1]}},G=c()([m,v,g,h,w,_,k,b,E,x,j,T],(function n(t){if(t)return d()(t.edges)?n(t.edges):d()(t)?t.map((function(n){return n.node})):t})).reduce((function(n,t){if(!t||!t.contentful_id)return n;var e=S.indexOf(t.contentful_id);return n.splice(e,1,t),n}),Array(S.length-1)),N=[e].concat(Object(a.a)(G),[s]);return r.default.createElement(p.a.Provider,{value:H},r.default.createElement(u.a,Object.assign({},R,{themeColor:P,h2FontSize:q}),l&&Object(o.a)(Object.assign({},l,{pagePath:O})),F&&r.default.createElement(y.a,{script:[{type:"text/javascript",innerHTML:F}]}),N.map((function(n){return Object(o.a)(Object.assign({},n,{isFaq:W}))})),r.default.createElement("script",{type:"text/javascript",dangerouslySetInnerHTML:{__html:A+'\nwindow._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];\nwindow._linkedin_data_partner_ids.push(_linkedin_partner_id);\n(function(l) {\n  if (!l){window.lintrk = function(a,b){\n    window.lintrk.q.push([a,b])};\n    window.lintrk.q=[]}\n    var s = document.getElementsByTagName("script")[0];\n    var b = document.createElement("script");\n    b.type = "text/javascript";\n    b.async = true;\n    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";\n    s.parentNode.insertBefore(b, s);\n  })(window.lintrk);\n'}}),r.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B}})))}},JC6p:function(n,t,e){var a=e("cq/+"),i=e("7GkX");n.exports=function(n,t){return n&&a(n,t,i)}},SKAX:function(n,t,e){var a=e("JC6p"),i=e("lQqw")(a);n.exports=i},XGnz:function(n,t,e){var a=e("CH3K"),i=e("BiGR");n.exports=function n(t,e,r,o,s){var c=-1,l=t.length;for(r||(r=i),s||(s=[]);++c<l;){var d=t[c];e>0&&r(d)?e>1?n(d,e-1,r,o,s):a(s,d):o||(s[s.length]=d)}return s}},"cq/+":function(n,t,e){var a=e("mc0g")();n.exports=a},l9OW:function(n,t,e){var a=e("SKAX"),i=e("MMmD");n.exports=function(n,t){var e=-1,r=i(n)?Array(n.length):[];return a(n,(function(n,a,i){r[++e]=t(n,a,i)})),r}},lQqw:function(n,t,e){var a=e("MMmD");n.exports=function(n,t){return function(e,i){if(null==e)return e;if(!a(e))return n(e,i);for(var r=e.length,o=t?r:-1,s=Object(e);(t?o--:++o<r)&&!1!==i(s[o],o,s););return e}}},mc0g:function(n,t){n.exports=function(n){return function(t,e,a){for(var i=-1,r=Object(t),o=a(t),s=o.length;s--;){var c=o[n?s:++i];if(!1===e(r[c],c,r))break}return t}}},wUWr:function(n,t,e){var a=e("XGnz"),i=e("3WF5");n.exports=function(n,t){return a(i(n,t),1/0)}}}]);
//# sourceMappingURL=component---src-templates-contentful-layout-js-37b0b16cd99e4e2826ef.js.map
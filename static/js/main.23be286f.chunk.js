(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{247:function(e,t,a){e.exports=a.p+"static/media/ethereum-metamask-chrome.79226bac.png"},251:function(e,t,a){e.exports=a(563)},256:function(e,t,a){},298:function(e,t){},300:function(e,t){},342:function(e,t){},344:function(e,t){},415:function(e,t){},416:function(e,t){},471:function(e,t){},563:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(245),i=a.n(o),l=(a(256),a(79)),c=a.n(l),s=a(139),m=a(78),u=a(29),h=a(22),p=a(43),d=a(38),f=a(42),b=a(578),g=a(249),v=a(583),E=a(104),w=a.n(E),y=a(105),O=a.n(y),j=a(584),k=Object(g.a)({palette:{primary:{light:w.a[300],main:w.a[500],dark:w.a[700]},secondary:{light:O.a[300],main:O.a[500],dark:O.a[700]}},typography:{useNextVariants:!0}});var B=function(e){return function(t){return r.a.createElement(v.a,{theme:k},r.a.createElement(j.a,null),r.a.createElement(e,t))}},D=a(577),I=a(247),x=a.n(I),C=a(44);var M=Object(C.createLogger)({level:"info",format:C.format.combine(C.format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),C.format.splat(),C.format.json()),defaultMeta:{service:"citizens-vote-ui"},transports:[new C.transports.Console({format:C.format.simple(),level:"warn"})]}),N=B(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={open:!0},!0===e.web3Injected&&(M.info("Web3 is injected into this Onboarding object."),a.state={open:!1}),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return!1===this.state.open?null:r.a.createElement("div",{className:"onboardingDiv"},r.a.createElement(D.a,{container:!0,spacing:3,alignContent:"center"},r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement("a",{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer",className:"metaMaskUrl"},r.a.createElement("img",{src:x.a,className:"fullWidthImage",alt:"MetaMask Fox Logo"}))),r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"body1",gutterBottom:!0},"This application connects to the Blockchain through a Chrome Extension called"," ",r.a.createElement("a",{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"},"Metamask"),". This means this website has no control over your vote, it merely facilitates the process. Please install Metamask, or any other web3 provider to post messages to the blockchain."))))}}]),t}(r.a.Component)),T=a(579),S=a(580),_=a(581),P=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e="/";return this.props.bill.versions&&this.props.bill.versions.length>=1&&(e=this.props.bill.versions[0].version.formats.pdf.uri),r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(T.a,{className:"billPaper"},r.a.createElement(D.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(D.a,{item:!0,xs:10},r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},this.props.bill.shortTitleEn),r.a.createElement(b.a,{variant:"body1",gutterBottom:!0},this.props.bill.longTitleEn),r.a.createElement(b.a,{variant:"body1"},r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"billPdfUrl"},"Read Bill"))),r.a.createElement(D.a,{item:!0,xs:2},r.a.createElement(D.a,{container:!0,justify:"space-around",alignItems:"center"},r.a.createElement(D.a,{item:!0},r.a.createElement(S.a,null),r.a.createElement(b.a,null,"T\xe1")),r.a.createElement(D.a,{item:!0},r.a.createElement(_.a,null),r.a.createElement(b.a,null,"N\xedl")))))))}}]),t}(r.a.Component),V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).billItems=[],a.props.updateBills().then(function(e){e&&e.map?a.billItems=e.map(function(e,t){return r.a.createElement(P,{bill:e,key:t})}):a.billItems=[],a.setState(Object(m.a)({},a.state,{bills:e}))}),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{variant:"h4",gutterBottom:!0},this.billItems?this.billItems.length:0," D\xe1il Bills"),r.a.createElement("div",null,r.a.createElement(D.a,{container:!0,direction:"column",spacing:3},this.billItems)))}}]),t}(r.a.Component),H=function(){function e(){Object(u.a)(this,e)}return Object(h.a)(e,[{key:"getDailBills",value:function(e){return new Promise(function(t,n){a(377)(e).then(function(e){t(JSON.parse(e))}).catch(function(e){n(e)})})}},{key:"prepareDailBillsRequestUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Current",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2019-05-01",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"2019-06-08",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"50",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"en";return"https://api.oireachtas.ie/v1/legislation?bill_status=".concat(e,"&bill_source=Government,Private%20Member&date_start=").concat(t,"&date_end=").concat(a,"&limit=").concat(n,"&chamber_id=").concat(r,"&lang=").concat(o)}}]),e}(),R=B(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleClose=function(){a.setState(Object(m.a)({},a.state,{castVoteModalOpen:!1}))},a.handleClick=function(){a.setState(Object(m.a)({},a.state,{castVoteModalOpen:!0}))},a.state={castVoteModalOpen:!1,bills:[]},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"updateBills",value:function(){var e=Object(s.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){var a=new H,n=new Date,r=new Date(n.getTime()-6048e5).toISOString().substring(0,10),o=new Date(n.getTime()+12096e5).toISOString().substring(0,10),i=a.prepareDailBillsRequestUrl("Current",r,o,"50","","ga");e(a.getDailBills(i).then(function(e){return e.results?(M.info("".concat(e.results.length," results returned from api.oireachtas.ie")),e.results.map(function(e){return e.bill})):void M.warn("api.oireachtas.ie returned no results for voting on.")}).catch(function(e){M.error("Error thrown while trying to retrieve bills from the oireachtas api. "),t(e)}))}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"triggerCastVoteModal",value:function(){var e=Object(s.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:M.info("Vote cast modal triggered. ");case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"centerColumn"},r.a.createElement(D.a,{container:!0,spacing:2},r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(T.a,{className:"paper"},r.a.createElement(b.a,{variant:"h2",gutterBottom:!0},"Data Driven Democracy in Ireland"),r.a.createElement(b.a,{variant:"body1",gutterBottom:!0},"Through the use of the"," ",r.a.createElement("a",{href:"https://api.oireachtas.ie/"},"Oireachtas Open Data API"),"; this website allows you to vote on current D\xe1il legislation, and record that vote permanently to the Ethereum Blockchain."),r.a.createElement(b.a,{variant:"body1",gutterBottom:!0},"Citizens vote allows for any citizen to build up a voting record that they ",r.a.createElement("em",null,"cannot")," change. This allows first time candidates for elected office to be compared against incumbent candidates ",r.a.createElement("i",null,"vote for vote"),". How do the two measure up on climate change bills? How do the incumbent and challenger compare on tax bills? Abortion rights? Any contentious bill a voter wants to look at, if the challenger has been commiting their votes to the blockchain, a voter can trust that the candidate could not have changed that vote since the time it was cast. They can now fairly compare how the challenger voted and how the incumbent voted in the D\xe1il. Rather than relying on what candidates say they are going to do during the election cycle."),r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"It's time for informed voters to stop looking at what elected officials say, and to start looking at how they are voting. This project isn't a fully fledged application to do all that this entails. But it is a step in the right direction, helping Ireland take steps to becoming a more accountable and transparent Democracy."))),r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(T.a,{className:"paper"},r.a.createElement(N,{web3Injected:!1}))),r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(T.a,{className:"paper"},r.a.createElement(V,{updateBills:this.updateBills})))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[251,1,2]]]);
//# sourceMappingURL=main.23be286f.chunk.js.map
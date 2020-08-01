(this["webpackJsonplottery-react"]=this["webpackJsonplottery-react"]||[]).push([[0],{347:function(e,t,n){e.exports=n(750)},352:function(e,t,n){},354:function(e,t,n){},364:function(e,t){},373:function(e,t){},391:function(e,t){},393:function(e,t){},410:function(e,t){},411:function(e,t){},413:function(e,t){},414:function(e,t){},489:function(e,t){},491:function(e,t){},500:function(e,t){},502:function(e,t){},527:function(e,t){},529:function(e,t){},535:function(e,t){},536:function(e,t){},539:function(e,t){},555:function(e,t){},558:function(e,t){},563:function(e,t){},575:function(e,t){},576:function(e,t){},578:function(e,t){},750:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(71),s=n.n(o),c=(n(352),n(36)),i=n.n(c),u=n(104),l=n(11),p=n(13),m=n(24),h=n(23),f=n(763),d=n(762),y=n(752),g=n(765),b=(n(354),n(320)),v=new(n.n(b).a)(window.web3.currentProvider),w=new v.eth.Contract([{constant:!0,inputs:[],name:"getCurrentWinner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"manager",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pickWinner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getPlayers",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"currentWinner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"enter",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"players",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"}],"0x2d0E30274d7bF0dc0256FfB77C351De120735e09"),E=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={manager:"",players:[],balance:"",value:"",message:"",errorMsg:"",loading:!1,errorMsgChooseWin:"",loadingChooseWin:!1},e.onSubmit=function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,window.ethereum.enable();case 3:return t.next=5,v.eth.getAccounts();case 5:return a=t.sent,e.setState({message:"Waiting on transaction success...",loading:!0,errorMsg:""}),t.prev=7,t.next=10,w.methods.enter().send({from:a[0],value:v.utils.toWei(e.state.value,"ether")});case 10:e.setState({message:"You have been entered!"}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(7),e.setState({message:"",errorMsg:t.t0.message});case 16:e.setState({loading:!1}),e.updatePlayernBalance();case 18:case"end":return t.stop()}}),t,null,[[7,13]])})));return function(e){return t.apply(this,arguments)}}(),e.onClick=function(){var t=Object(u.a)(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.eth.getAccounts();case 2:return a=t.sent,e.setState({message:"Waiting on transaction success...",loadingChooseWin:!0,errorMsgChooseWin:""}),t.prev=4,t.next=7,w.methods.pickWinner().send({from:a[0]});case 7:return t.next=9,w.methods.currentWinner().call();case 9:r=t.sent,console.log(w.methods),e.setState({message:"The winner is ".concat(r,".")}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),e.setState({message:"",errorMsgChooseWin:t.t0.message});case 17:e.setState({loadingChooseWin:!1}),e.updatePlayernBalance();case 19:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(e){return t.apply(this,arguments)}}(),e.updatePlayernBalance=Object(u.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.methods.getPlayers().call();case 2:return n=t.sent,t.next=5,v.eth.getBalance(w.options.address);case 5:a=t.sent,e.setState({players:n,balance:a});case 7:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.methods.manager().call();case 2:t=e.sent,this.updatePlayernBalance(),this.setState({manager:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.manager,a=t.players,o=t.balance,s=t.value,c=t.message;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Lottery Contract"),r.a.createElement("p",null,"This Contract is managed by ",n),r.a.createElement("p",null,"There are currently ",a.length," people entered, competiting to win ",v.utils.fromWei(o,"ether")," ether!"),r.a.createElement("hr",null),r.a.createElement(f.a,{onSubmit:this.onSubmit,error:!!this.state.errorMsg},r.a.createElement("h3",null,"Want to try your luck?"),r.a.createElement("div",null,r.a.createElement("label",null,"Amount of ether to enter ")," ",r.a.createElement("br",null),r.a.createElement(d.a,{value:s,onChange:function(t){return e.setState({value:t.target.value})},placeholder:"in ether"})),r.a.createElement(y.a,{loading:this.state.loading,primary:!0,style:{marginTop:"10px"}},"Enter"),r.a.createElement(g.a,{error:!0,header:"Oops!",content:this.state.errorMsg})),r.a.createElement("hr",null),r.a.createElement(f.a,{error:!!this.state.errorMsgChooseWin},r.a.createElement("h3",null,"Ready to pick a winner?"),r.a.createElement(y.a,{loading:this.state.loadingChooseWin,onClick:this.onClick,basic:!0,color:"blue"},"Pick a winner!"),r.a.createElement(g.a,{error:!0,header:"Oops!",content:this.state.errorMsgChooseWin})),r.a.createElement("hr",null),r.a.createElement("h1",null,c))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[347,1,2]]]);
//# sourceMappingURL=main.0846f0fd.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{248:function(t,e,n){t.exports=n(496)},496:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),c=n(76),l=n(16),s=n(31),u=n(32),d=n(34),f=n(33),p=n(35),h=n(15),m=n(70),g=n.n(m),v=n(71),E=n.n(v),b=n(73),k=n.n(b),O=n(72),y=n.n(O),C=n(74),S=n(46),j=n.n(S),x=n(69),w=n.n(x),R=n(48),T=n.n(R),I=n(17),D=n(170),N=n.n(D),A=function(t){return 0===t.anchorNode.compareDocumentPosition(t.focusNode)&&t.focusOffset===t.anchorOffset},M=function(t){if(A(t))return!1;var e=t.anchorNode.compareDocumentPosition(t.focusNode),n=!1;return(!e&&t.anchorOffset>t.focusOffset||e===Node.DOCUMENT_POSITION_PRECEDING)&&(n=!0),n},L=function(t){for(var e=0,n=0;n<t.length;n++)e=t.charCodeAt(n)+((e<<5)-e);return e},P=function(t){return"#".concat(function(t){var e=(16777215&t).toString(16).toUpperCase();return"00000".substring(0,6-e.length)+e}(L(t)))},U=function(t){var e=function(t){var e=16777215&t;return[e>>16&255,e>>8&255,255&e]}(L(t));return"rgba(".concat(e[0],", ").concat(e[1],", ").concat(e[2],", 0.2)")},F=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(d.a)(this,Object(f.a)(e).call(this,t))).state={inputText:"",adding:!1},n.handleClick=function(t){n.rootRef.current.contains(t.target)||(console.log("close"),n.props.close())},n.handleSubmit=function(t){"enter"===t.key.toLowerCase()&&(n.props.updateTags(Object(l.a)(n.props.tags).concat([n.state.inputText])),n.setState({adding:!1,inputText:""}))},n.handleChange=function(t){n.setState({inputText:t.target.value})},n.handleAddTag=function(){n.setState({adding:!0})},n.rootRef=r.a.createRef(),n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){document.addEventListener("click",t.handleClick)},500)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick)}},{key:"render",value:function(){var t=this.props,e=t.handleMenuItemClick,n=t.left,a=t.top,o=t.tags;return r.a.createElement(h.e,{rootRef:this.rootRef},r.a.createElement(h.d,{style:{left:"".concat(n,"px"),top:"".concat(a+10,"px"),display:"inline-block",position:"absolute",zIndex:10}},r.a.createElement(h.c,null,o.map(function(t,n){return r.a.createElement(h.b,{key:n,onClick:function(a){return e(t,n)}},t)}),this.state.adding?r.a.createElement(h.b,null,r.a.createElement(h.f,{autoFocus:!0,style:{width:"100px"},defaultValue:"",margin:"normal",value:this.state.inputText,onChange:this.handleChange,onKeyPress:this.handleSubmit})):r.a.createElement(h.b,{style:{fontWeight:"bold"},onClick:this.handleAddTag},"ADD new tag"))))}}]),e}(r.a.Component),B=n(47),J=n.n(B),W=n(174),z=n.n(W),V=n(75);function _(){var t=Object(C.a)(["\n  padding: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return _=function(){return t},t}var G=V.a.div(_()),H=function(t){var e=t.entities,n=t.onStyle,o=t.onDelete;return r.a.createElement(a.Fragment,null,e.map(function(t,e){return r.a.createElement(G,{key:e},r.a.createElement("span",{style:n(t.tag)},t.tag),r.a.createElement("span",null,t.text),r.a.createElement(J.a,{style:{padding:"0px"},"aria-label":"Delete",onClick:function(){return o(t.start,t.end)}},r.a.createElement(z.a,{fontSize:"small"})))}))};function K(){var t=Object(C.a)(["\n  padding: 0.5rem;\n  line-height: 1.7rem;\n"]);return K=function(){return t},t}var q=V.a.div(K()),Q=Object(I.withStyles)({root:{borderLeft:"1px solid gray"},tile:{overflow:"scroll"}})(T.a),X=function(t){return t.mark?r.a.createElement("mark",{style:{border:"3px solid ".concat(P(t.tag)),backgroundColor:U(t.tag),padding:"0 4px"},"data-start":t.start,"data-end":t.end,onClick:function(){return t.onClick?t.onClick({start:t.start,end:t.end}):null}},t.text):r.a.createElement("span",{"data-start":t.start,"data-end":t.end,onClick:function(){return t.onClick?t.onClick({start:t.start,end:t.end}):null}},t.content)},Y=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(d.a)(this,Object(f.a)(e).call(this,t))).state={open:!1,start:0,end:0,inputText:"",left:0,top:0},n.handleDelete=function(t,e){var a=n.props.entities.findIndex(function(n){return n.start===t&&n.end===e});a>=0&&n.props.updateEntities(Object(l.a)(n.props.entities.slice(0,a)).concat(Object(l.a)(n.props.entities.slice(a+1))))},n.handleMouseUp=function(){var t=window.getSelection();if(A(t))n.setState({open:!1});else{for(var e=n.menuRef.current,a=0,r=0;e.offsetParent;)a+=(e=e.offsetParent).offsetTop,r+=e.offsetLeft;var o=window.getSelection().getRangeAt(0).getBoundingClientRect().left-r,i=window.getSelection().getRangeAt(0).getBoundingClientRect().top+window.getSelection().getRangeAt(0).getBoundingClientRect().height/2-a,c=parseInt(t.anchorNode.parentElement.getAttribute("data-start"),10)+t.anchorOffset,l=parseInt(t.focusNode.parentElement.getAttribute("data-start"),10)+t.focusOffset;if(M(t)){var s=[l,c];c=s[0],l=s[1]}n.setState({open:!0,start:c,end:l,left:o,top:i})}},n.handleMenuItemClick=function(t){var e=n.props.entities,a=e.findIndex(function(t){return t.start>n.state.start}),r={start:n.state.start,end:n.state.end,text:n.props.phrase.slice(n.state.start,n.state.end),tag:t},o=Object(l.a)(e).concat([r]);a>=0&&(o=Object(l.a)(e.slice(0,a)).concat([r],Object(l.a)(e.slice(a,e.length)))),n.props.updateEntities(o),n.setState({open:!1}),window.getSelection().empty()},n.rootRef=r.a.createRef(),n.menuRef=r.a.createRef(),n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.rootRef.current.addEventListener("mouseup",this.handleMouseUp)}},{key:"componentWillUnmount",value:function(){this.rootRef.current.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var t=this,e=this.props,n=e.phrase,o=e.entities,i=e.updateTags,l=function(t,e){var n=0,a=[],r=!0,o=!1,i=void 0;try{for(var l,s=N()(e,function(t){return t.start})[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var u=l.value,d=u.start,f=u.end;n<d&&a.push({start:n,end:d,content:t.slice(n,d)}),a.push(Object(c.a)({},u,{mark:!0,content:t.slice(d,f)})),n=f}}catch(p){o=!0,i=p}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n<t.length&&a.push({start:n,end:t.length,content:t.slice(n,t.length)}),a}(n,o);return r.a.createElement(a.Fragment,null,this.state.open&&r.a.createElement(F,{handleMenuItemClick:this.handleMenuItemClick,close:function(){return t.setState({open:!1})},left:this.state.left,top:this.state.top,tags:this.props.tags,updateTags:i}),r.a.createElement(j.a,{rootRef:this.menuRef},r.a.createElement(w.a,{style:{width:"100%"},cellHeight:130,cols:3},r.a.createElement(T.a,{cols:2},r.a.createElement(q,{ref:this.rootRef},l.map(function(t){return r.a.createElement(X,Object.assign({key:"".concat(t.start,"-").concat(t.end)},t))}))),r.a.createElement(Q,{cols:1},r.a.createElement(H,{entities:o,onStyle:function(t){return{backgroundColor:U(t),border:"3px solid ".concat(P(t))}},onDelete:function(e,n){return t.handleDelete(e,n)}})))))}}]),e}(r.a.Component),Z=function(t){var e=t.phrase,n=t.tags,a=t.updateTags,o=t.entities,i=t.updateEntities;return r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(y.a,null,"[",o.length,"] ",e)),r.a.createElement(k.a,null,r.a.createElement(Y,{phrase:e,tags:n,updateTags:a,entities:o,updateEntities:i})))},$="entities",tt=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(o)))).state={multiline:"",data:[],tags:[]},n.save=function(){localStorage.setItem($,JSON.stringify(n.state.data))},n.load=function(){var t=JSON.parse(localStorage.getItem($));n.setState({data:t,tags:n.loadTags(t)})},n.loadTags=function(t){return t.map(function(t){return t.entities.map(function(t){return t.tag})}).flat().reduce(function(t,e){return t.includes(e)?t:Object(l.a)(t).concat([e])},[])},n.onLoadFromInput=function(){n.setState({data:n.state.multiline.split("\n").filter(function(t){return""!==t}).map(function(t){return{phrase:t,entities:[]}})})},n.handleChange=function(t){n.setState({multiline:t.target.value})},n.parse=function(t){return t.map(function(t,e){return r.a.createElement("div",{key:e},n.parsePhrase(t))})},n.parsePhrase=function(t){return t.entities.reduceRight(function(t,e){return t.slice(0,e.start).concat("#".concat(e.tag,'"').concat(e.text,'"')).concat(t.slice(e.end,t.length))},t.phrase)},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{variant:"outlined",color:"primary",onClick:this.onLoadFromInput},"LOAD from input"),r.a.createElement(h.a,{variant:"outlined",onClick:this.save},"Save to localStorage"),r.a.createElement(h.a,{variant:"outlined",onClick:this.load},"Load from localStorage"),r.a.createElement("div",null,r.a.createElement(h.f,{id:"standard-multiline-flexible",label:"Multiline",multiline:!0,rowsMax:"4",value:this.state.multiline,onChange:this.handleChange,fullWidth:!0,margin:"normal"})),this.state.data.map(function(e,n){return r.a.createElement(Z,{key:n,phrase:e.phrase,tags:t.state.tags,updateTags:function(e){t.setState({tags:e})},entities:e.entities,updateEntities:function(e){t.setState(function(t){return Object(c.a)({},t,{data:Object(l.a)(t.data.slice(0,n)).concat([{phrase:t.data[n].phrase,entities:e}],Object(l.a)(t.data.slice(n+1,t.data.length)))})})}})}),r.a.createElement("div",null,r.a.createElement("h4",null,"Current Value"),this.parse(this.state.data)))}}]),e}(a.Component);i.a.render(r.a.createElement(tt,null),document.getElementById("root"))}},[[248,2,1]]]);
//# sourceMappingURL=main.9b5b5f07.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{oByp:function(e,t,r){"use strict";r.r(t);r("91GP");var n=r("mXGw"),a=r.n(n),o=r("xARA"),i=r("+qjn");var c=["onDragStart","onDrag","onDragEnd"];function l(e){return(Math.round(1e5*e)/1e5).toFixed(5)}var p=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).renderEvent=function(e){var r=t.props.events,n=(void 0===r?{}:r)[e];return a.a.createElement("div",{key:e},a.a.createElement("strong",null,e,":")," ",n?n.map(l).join(", "):a.a.createElement("em",null,"null"))},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return a.a.createElement("div",{className:"control-panel"},a.a.createElement("h3",null,"Draggable Marker"),a.a.createElement("p",null,"Try dragging the marker to another location."),a.a.createElement("div",null,c.map(this.renderEvent)),a.a.createElement("div",{className:"source-link"},a.a.createElement("a",{href:"https://github.com/uber/react-map-gl/tree/5.2-release/examples/draggable-markers",target:"_new"},"View Code ↗")))},n}(n.PureComponent);var s={fill:"#d00",stroke:"none"},u=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.size,t=void 0===e?20:e;return a.a.createElement("svg",{height:t,viewBox:"0 0 24 24",style:s},a.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"}))},n}(n.PureComponent);r.d(t,"default",(function(){return d})),r.d(t,"renderToDom",(function(){return m}));var g={position:"absolute",top:0,left:0,padding:"10px"},d=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this)._updateViewport=function(e){r.setState({viewport:e})},r._onMarkerDragStart=function(e){r._logDragEvent("onDragStart",e)},r._onMarkerDrag=function(e){r._logDragEvent("onDrag",e)},r._onMarkerDragEnd=function(e){r._logDragEvent("onDragEnd",e),r.setState({marker:{longitude:e.lngLat[0],latitude:e.lngLat[1]}})},r.state={viewport:{latitude:37.785164,longitude:-100,zoom:3.5,bearing:0,pitch:0},marker:{latitude:37.785164,longitude:-100},events:{}},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o._logDragEvent=function(e,t){var r;this.setState({events:Object.assign({},this.state.events,(r={},r[e]=t.lngLat,r))})},o.render=function(){var e=this.state,t=e.viewport,r=e.marker;return a.a.createElement(i.default,Object.assign({},t,{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/dark-v9",onViewportChange:this._updateViewport,mapboxApiAccessToken:""}),a.a.createElement(i.Marker,{longitude:r.longitude,latitude:r.latitude,offsetTop:-20,offsetLeft:-10,draggable:!0,onDragStart:this._onMarkerDragStart,onDrag:this._onMarkerDrag,onDragEnd:this._onMarkerDragEnd},a.a.createElement(u,{size:20})),a.a.createElement("div",{className:"nav",style:g},a.a.createElement(i.NavigationControl,{onViewportChange:this._updateViewport})),a.a.createElement(p,{containerComponent:this.props.containerComponent,events:this.state.events}))},n}(n.Component);function m(e){Object(o.render)(a.a.createElement(d,null),e)}}}]);
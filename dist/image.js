webpackJsonp([4],{0:function(e,i,t){"use strict";t(1);var n=t(4),s=t(5),r=t(9),o=function(){function e(){var e=this;this.configService=new s["default"],n(document).ready(function(){e.$embedContainer=n("#embed-content"),e.$embedResource=n("#embed-image"),e.resourceOriginalWidth=e.configService.get("resource.width"),e.resourceOriginalHeight=e.configService.get("resource.height"),e.resizer=new r["default"]({target:e.$embedResource,container:e.$embedContainer,resizeOnWindowChange:e.configService.get("resource.fitIn")===!0,"true":!1}),e.resizer.setContainerDimensions({width:window.innerWidth,height:window.innerHeight}),e.resizer.setTargetDimensions({width:e.resourceOriginalWidth,height:e.resourceOriginalHeight}),e.resizer.resize()})}return e}();i["default"]=o,window.embedPlugin=new o},9:function(e,i,t){"use strict";var n=t(7),s=function(){function e(e){var i=this;e||(e={}),e.target&&(this.$embedResource=e.target),e.container?this.$embedContainer=e.container:this.$embedContainer=$("body"),void 0!==e.resizeCallback&&(this.resizeCallback=e.resizeCallback),e.resizeOnWindowChange===!0&&$(window).resize(n.debounce(function(){i.onResizeWindow(window.innerWidth,window.innerHeight)},300)),this.defaultWidth=120,this.defaultHeight=120}return e.prototype.setContainerDimensions=function(e){this.containerDimensions=e},e.prototype.setTargetDimensions=function(e){this.targetDimensions=e},e.prototype.onResizeWindow=function(e,i){this.setContainerDimensions({width:e,height:i}),this.resize()},e.prototype.resize=function(){var e=this.containerDimensions.width,i=this.containerDimensions.height,t=this.targetDimensions.width,n=this.targetDimensions.height,s=this.targetDimensions.height/this.targetDimensions.width,r=t,o=n;t>n?(r>e&&(r=e,o=e*s),o>i&&(r=i/s,o=i)):o>i&&(r=i/s,o=i),null===r&&null===o&&(r=this.defaultWidth,o=this.defaultHeight),r=Math.floor(r),o=Math.floor(o);var h=0;this.containerDimensions.height>o&&(h=(this.containerDimensions.height-o)/2),this.$embedResource.css({width:r,height:o}),this.$embedContainer.css({width:r,height:o,"margin-top":h}),void 0!==this.resizeCallback&&this.resizeCallback.apply(this,[{width:r,height:o,"margin-top":h}])},e}();i["default"]=s}});
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define("Flowbite", [], factory); else if (typeof exports === "object") exports["Flowbite"] = factory(); else root["Flowbite"] = factory();
})(self, (function() {
  return function() {
    var __webpack_modules__ = {
      853: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          afterMain: function() {
            return afterMain;
          },
          afterRead: function() {
            return afterRead;
          },
          afterWrite: function() {
            return afterWrite;
          },
          applyStyles: function() {
            return modifiers_applyStyles;
          },
          arrow: function() {
            return modifiers_arrow;
          },
          auto: function() {
            return auto;
          },
          basePlacements: function() {
            return basePlacements;
          },
          beforeMain: function() {
            return beforeMain;
          },
          beforeRead: function() {
            return beforeRead;
          },
          beforeWrite: function() {
            return beforeWrite;
          },
          bottom: function() {
            return bottom;
          },
          clippingParents: function() {
            return clippingParents;
          },
          computeStyles: function() {
            return modifiers_computeStyles;
          },
          createPopper: function() {
            return popper_createPopper;
          },
          createPopperBase: function() {
            return createPopper;
          },
          createPopperLite: function() {
            return popper_lite_createPopper;
          },
          detectOverflow: function() {
            return detectOverflow;
          },
          end: function() {
            return end;
          },
          eventListeners: function() {
            return eventListeners;
          },
          flip: function() {
            return modifiers_flip;
          },
          hide: function() {
            return modifiers_hide;
          },
          left: function() {
            return left;
          },
          main: function() {
            return main;
          },
          modifierPhases: function() {
            return modifierPhases;
          },
          offset: function() {
            return modifiers_offset;
          },
          placements: function() {
            return enums_placements;
          },
          popper: function() {
            return popper;
          },
          popperGenerator: function() {
            return popperGenerator;
          },
          popperOffsets: function() {
            return modifiers_popperOffsets;
          },
          preventOverflow: function() {
            return modifiers_preventOverflow;
          },
          read: function() {
            return read;
          },
          reference: function() {
            return reference;
          },
          right: function() {
            return right;
          },
          start: function() {
            return start;
          },
          top: function() {
            return enums_top;
          },
          variationPlacements: function() {
            return variationPlacements;
          },
          viewport: function() {
            return viewport;
          },
          write: function() {
            return write;
          }
        });
        var enums_top = "top";
        var bottom = "bottom";
        var right = "right";
        var left = "left";
        var auto = "auto";
        var basePlacements = [ enums_top, bottom, right, left ];
        var start = "start";
        var end = "end";
        var clippingParents = "clippingParents";
        var viewport = "viewport";
        var popper = "popper";
        var reference = "reference";
        var variationPlacements = basePlacements.reduce((function(acc, placement) {
          return acc.concat([ placement + "-" + start, placement + "-" + end ]);
        }), []);
        var enums_placements = [].concat(basePlacements, [ auto ]).reduce((function(acc, placement) {
          return acc.concat([ placement, placement + "-" + start, placement + "-" + end ]);
        }), []);
        var beforeRead = "beforeRead";
        var read = "read";
        var afterRead = "afterRead";
        var beforeMain = "beforeMain";
        var main = "main";
        var afterMain = "afterMain";
        var beforeWrite = "beforeWrite";
        var write = "write";
        var afterWrite = "afterWrite";
        var modifierPhases = [ beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite ];
        function getNodeName(element) {
          return element ? (element.nodeName || "").toLowerCase() : null;
        }
        function getWindow(node) {
          if (node == null) {
            return window;
          }
          if (node.toString() !== "[object Window]") {
            var ownerDocument = node.ownerDocument;
            return ownerDocument ? ownerDocument.defaultView || window : window;
          }
          return node;
        }
        function isElement(node) {
          var OwnElement = getWindow(node).Element;
          return node instanceof OwnElement || node instanceof Element;
        }
        function isHTMLElement(node) {
          var OwnElement = getWindow(node).HTMLElement;
          return node instanceof OwnElement || node instanceof HTMLElement;
        }
        function isShadowRoot(node) {
          if (typeof ShadowRoot === "undefined") {
            return false;
          }
          var OwnElement = getWindow(node).ShadowRoot;
          return node instanceof OwnElement || node instanceof ShadowRoot;
        }
        function applyStyles(_ref) {
          var state = _ref.state;
          Object.keys(state.elements).forEach((function(name) {
            var style = state.styles[name] || {};
            var attributes = state.attributes[name] || {};
            var element = state.elements[name];
            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach((function(name) {
              var value = attributes[name];
              if (value === false) {
                element.removeAttribute(name);
              } else {
                element.setAttribute(name, value === true ? "" : value);
              }
            }));
          }));
        }
        function effect(_ref2) {
          var state = _ref2.state;
          var initialStyles = {
            popper: {
              position: state.options.strategy,
              left: "0",
              top: "0",
              margin: "0"
            },
            arrow: {
              position: "absolute"
            },
            reference: {}
          };
          Object.assign(state.elements.popper.style, initialStyles.popper);
          state.styles = initialStyles;
          if (state.elements.arrow) {
            Object.assign(state.elements.arrow.style, initialStyles.arrow);
          }
          return function() {
            Object.keys(state.elements).forEach((function(name) {
              var element = state.elements[name];
              var attributes = state.attributes[name] || {};
              var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
              var style = styleProperties.reduce((function(style, property) {
                style[property] = "";
                return style;
              }), {});
              if (!isHTMLElement(element) || !getNodeName(element)) {
                return;
              }
              Object.assign(element.style, style);
              Object.keys(attributes).forEach((function(attribute) {
                element.removeAttribute(attribute);
              }));
            }));
          };
        }
        var modifiers_applyStyles = {
          name: "applyStyles",
          enabled: true,
          phase: "write",
          fn: applyStyles,
          effect: effect,
          requires: [ "computeStyles" ]
        };
        function getBasePlacement(placement) {
          return placement.split("-")[0];
        }
        var math_max = Math.max;
        var math_min = Math.min;
        var round = Math.round;
        function getUAString() {
          var uaData = navigator.userAgentData;
          if (uaData != null && uaData.brands) {
            return uaData.brands.map((function(item) {
              return item.brand + "/" + item.version;
            })).join(" ");
          }
          return navigator.userAgent;
        }
        function isLayoutViewport() {
          return !/^((?!chrome|android).)*safari/i.test(getUAString());
        }
        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
          if (includeScale === void 0) {
            includeScale = false;
          }
          if (isFixedStrategy === void 0) {
            isFixedStrategy = false;
          }
          var clientRect = element.getBoundingClientRect();
          var scaleX = 1;
          var scaleY = 1;
          if (includeScale && isHTMLElement(element)) {
            scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
            scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
          }
          var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
          var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
          var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
          var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
          var width = clientRect.width / scaleX;
          var height = clientRect.height / scaleY;
          return {
            width: width,
            height: height,
            top: y,
            right: x + width,
            bottom: y + height,
            left: x,
            x: x,
            y: y
          };
        }
        function getLayoutRect(element) {
          var clientRect = getBoundingClientRect(element);
          var width = element.offsetWidth;
          var height = element.offsetHeight;
          if (Math.abs(clientRect.width - width) <= 1) {
            width = clientRect.width;
          }
          if (Math.abs(clientRect.height - height) <= 1) {
            height = clientRect.height;
          }
          return {
            x: element.offsetLeft,
            y: element.offsetTop,
            width: width,
            height: height
          };
        }
        function contains(parent, child) {
          var rootNode = child.getRootNode && child.getRootNode();
          if (parent.contains(child)) {
            return true;
          } else if (rootNode && isShadowRoot(rootNode)) {
            var next = child;
            do {
              if (next && parent.isSameNode(next)) {
                return true;
              }
              next = next.parentNode || next.host;
            } while (next);
          }
          return false;
        }
        function getComputedStyle(element) {
          return getWindow(element).getComputedStyle(element);
        }
        function isTableElement(element) {
          return [ "table", "td", "th" ].indexOf(getNodeName(element)) >= 0;
        }
        function getDocumentElement(element) {
          return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
        }
        function getParentNode(element) {
          if (getNodeName(element) === "html") {
            return element;
          }
          return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
        }
        function getTrueOffsetParent(element) {
          if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
            return null;
          }
          return element.offsetParent;
        }
        function getContainingBlock(element) {
          var isFirefox = /firefox/i.test(getUAString());
          var isIE = /Trident/i.test(getUAString());
          if (isIE && isHTMLElement(element)) {
            var elementCss = getComputedStyle(element);
            if (elementCss.position === "fixed") {
              return null;
            }
          }
          var currentNode = getParentNode(element);
          if (isShadowRoot(currentNode)) {
            currentNode = currentNode.host;
          }
          while (isHTMLElement(currentNode) && [ "html", "body" ].indexOf(getNodeName(currentNode)) < 0) {
            var css = getComputedStyle(currentNode);
            if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [ "transform", "perspective" ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
              return currentNode;
            } else {
              currentNode = currentNode.parentNode;
            }
          }
          return null;
        }
        function getOffsetParent(element) {
          var window = getWindow(element);
          var offsetParent = getTrueOffsetParent(element);
          while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
            offsetParent = getTrueOffsetParent(offsetParent);
          }
          if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
            return window;
          }
          return offsetParent || getContainingBlock(element) || window;
        }
        function getMainAxisFromPlacement(placement) {
          return [ "top", "bottom" ].indexOf(placement) >= 0 ? "x" : "y";
        }
        function within(min, value, max) {
          return math_max(min, math_min(value, max));
        }
        function withinMaxClamp(min, value, max) {
          var v = within(min, value, max);
          return v > max ? max : v;
        }
        function getFreshSideObject() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          };
        }
        function mergePaddingObject(paddingObject) {
          return Object.assign({}, getFreshSideObject(), paddingObject);
        }
        function expandToHashMap(value, keys) {
          return keys.reduce((function(hashMap, key) {
            hashMap[key] = value;
            return hashMap;
          }), {});
        }
        var toPaddingObject = function toPaddingObject(padding, state) {
          padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
            placement: state.placement
          })) : padding;
          return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        };
        function arrow(_ref) {
          var _state$modifiersData$;
          var state = _ref.state, name = _ref.name, options = _ref.options;
          var arrowElement = state.elements.arrow;
          var popperOffsets = state.modifiersData.popperOffsets;
          var basePlacement = getBasePlacement(state.placement);
          var axis = getMainAxisFromPlacement(basePlacement);
          var isVertical = [ left, right ].indexOf(basePlacement) >= 0;
          var len = isVertical ? "height" : "width";
          if (!arrowElement || !popperOffsets) {
            return;
          }
          var paddingObject = toPaddingObject(options.padding, state);
          var arrowRect = getLayoutRect(arrowElement);
          var minProp = axis === "y" ? enums_top : left;
          var maxProp = axis === "y" ? bottom : right;
          var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
          var startDiff = popperOffsets[axis] - state.rects.reference[axis];
          var arrowOffsetParent = getOffsetParent(arrowElement);
          var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
          var centerToReference = endDiff / 2 - startDiff / 2;
          var min = paddingObject[minProp];
          var max = clientSize - arrowRect[len] - paddingObject[maxProp];
          var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
          var offset = within(min, center, max);
          var axisProp = axis;
          state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, 
          _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }
        function arrow_effect(_ref2) {
          var state = _ref2.state, options = _ref2.options;
          var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
          if (arrowElement == null) {
            return;
          }
          if (typeof arrowElement === "string") {
            arrowElement = state.elements.popper.querySelector(arrowElement);
            if (!arrowElement) {
              return;
            }
          }
          if (!contains(state.elements.popper, arrowElement)) {
            return;
          }
          state.elements.arrow = arrowElement;
        }
        var modifiers_arrow = {
          name: "arrow",
          enabled: true,
          phase: "main",
          fn: arrow,
          effect: arrow_effect,
          requires: [ "popperOffsets" ],
          requiresIfExists: [ "preventOverflow" ]
        };
        function getVariation(placement) {
          return placement.split("-")[1];
        }
        var unsetSides = {
          top: "auto",
          right: "auto",
          bottom: "auto",
          left: "auto"
        };
        function roundOffsetsByDPR(_ref) {
          var x = _ref.x, y = _ref.y;
          var win = window;
          var dpr = win.devicePixelRatio || 1;
          return {
            x: round(x * dpr) / dpr || 0,
            y: round(y * dpr) / dpr || 0
          };
        }
        function mapToStyles(_ref2) {
          var _Object$assign2;
          var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
          var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
          var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
            x: x,
            y: y
          }) : {
            x: x,
            y: y
          };
          x = _ref3.x;
          y = _ref3.y;
          var hasX = offsets.hasOwnProperty("x");
          var hasY = offsets.hasOwnProperty("y");
          var sideX = left;
          var sideY = enums_top;
          var win = window;
          if (adaptive) {
            var offsetParent = getOffsetParent(popper);
            var heightProp = "clientHeight";
            var widthProp = "clientWidth";
            if (offsetParent === getWindow(popper)) {
              offsetParent = getDocumentElement(popper);
              if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
              }
            }
            offsetParent = offsetParent;
            if (placement === enums_top || (placement === left || placement === right) && variation === end) {
              sideY = bottom;
              var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
              y -= offsetY - popperRect.height;
              y *= gpuAcceleration ? 1 : -1;
            }
            if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
              sideX = right;
              var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
              x -= offsetX - popperRect.width;
              x *= gpuAcceleration ? 1 : -1;
            }
          }
          var commonStyles = Object.assign({
            position: position
          }, adaptive && unsetSides);
          var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
            x: x,
            y: y
          }) : {
            x: x,
            y: y
          };
          x = _ref4.x;
          y = _ref4.y;
          if (gpuAcceleration) {
            var _Object$assign;
            return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", 
            _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", 
            _Object$assign));
          }
          return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", 
          _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
        }
        function computeStyles(_ref5) {
          var state = _ref5.state, options = _ref5.options;
          var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
          var commonStyles = {
            placement: getBasePlacement(state.placement),
            variation: getVariation(state.placement),
            popper: state.elements.popper,
            popperRect: state.rects.popper,
            gpuAcceleration: gpuAcceleration,
            isFixed: state.options.strategy === "fixed"
          };
          if (state.modifiersData.popperOffsets != null) {
            state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
              offsets: state.modifiersData.popperOffsets,
              position: state.options.strategy,
              adaptive: adaptive,
              roundOffsets: roundOffsets
            })));
          }
          if (state.modifiersData.arrow != null) {
            state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
              offsets: state.modifiersData.arrow,
              position: "absolute",
              adaptive: false,
              roundOffsets: roundOffsets
            })));
          }
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
            "data-popper-placement": state.placement
          });
        }
        var modifiers_computeStyles = {
          name: "computeStyles",
          enabled: true,
          phase: "beforeWrite",
          fn: computeStyles,
          data: {}
        };
        var passive = {
          passive: true
        };
        function eventListeners_effect(_ref) {
          var state = _ref.state, instance = _ref.instance, options = _ref.options;
          var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
          var window = getWindow(state.elements.popper);
          var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
          if (scroll) {
            scrollParents.forEach((function(scrollParent) {
              scrollParent.addEventListener("scroll", instance.update, passive);
            }));
          }
          if (resize) {
            window.addEventListener("resize", instance.update, passive);
          }
          return function() {
            if (scroll) {
              scrollParents.forEach((function(scrollParent) {
                scrollParent.removeEventListener("scroll", instance.update, passive);
              }));
            }
            if (resize) {
              window.removeEventListener("resize", instance.update, passive);
            }
          };
        }
        var eventListeners = {
          name: "eventListeners",
          enabled: true,
          phase: "write",
          fn: function fn() {},
          effect: eventListeners_effect,
          data: {}
        };
        var hash = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };
        function getOppositePlacement(placement) {
          return placement.replace(/left|right|bottom|top/g, (function(matched) {
            return hash[matched];
          }));
        }
        var getOppositeVariationPlacement_hash = {
          start: "end",
          end: "start"
        };
        function getOppositeVariationPlacement(placement) {
          return placement.replace(/start|end/g, (function(matched) {
            return getOppositeVariationPlacement_hash[matched];
          }));
        }
        function getWindowScroll(node) {
          var win = getWindow(node);
          var scrollLeft = win.pageXOffset;
          var scrollTop = win.pageYOffset;
          return {
            scrollLeft: scrollLeft,
            scrollTop: scrollTop
          };
        }
        function getWindowScrollBarX(element) {
          return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }
        function getViewportRect(element, strategy) {
          var win = getWindow(element);
          var html = getDocumentElement(element);
          var visualViewport = win.visualViewport;
          var width = html.clientWidth;
          var height = html.clientHeight;
          var x = 0;
          var y = 0;
          if (visualViewport) {
            width = visualViewport.width;
            height = visualViewport.height;
            var layoutViewport = isLayoutViewport();
            if (layoutViewport || !layoutViewport && strategy === "fixed") {
              x = visualViewport.offsetLeft;
              y = visualViewport.offsetTop;
            }
          }
          return {
            width: width,
            height: height,
            x: x + getWindowScrollBarX(element),
            y: y
          };
        }
        function getDocumentRect(element) {
          var _element$ownerDocumen;
          var html = getDocumentElement(element);
          var winScroll = getWindowScroll(element);
          var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
          var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
          var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
          var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
          var y = -winScroll.scrollTop;
          if (getComputedStyle(body || html).direction === "rtl") {
            x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
          }
          return {
            width: width,
            height: height,
            x: x,
            y: y
          };
        }
        function isScrollParent(element) {
          var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
          return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
        function getScrollParent(node) {
          if ([ "html", "body", "#document" ].indexOf(getNodeName(node)) >= 0) {
            return node.ownerDocument.body;
          }
          if (isHTMLElement(node) && isScrollParent(node)) {
            return node;
          }
          return getScrollParent(getParentNode(node));
        }
        function listScrollParents(element, list) {
          var _element$ownerDocumen;
          if (list === void 0) {
            list = [];
          }
          var scrollParent = getScrollParent(element);
          var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
          var win = getWindow(scrollParent);
          var target = isBody ? [ win ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
          var updatedList = list.concat(target);
          return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
        }
        function rectToClientRect(rect) {
          return Object.assign({}, rect, {
            left: rect.x,
            top: rect.y,
            right: rect.x + rect.width,
            bottom: rect.y + rect.height
          });
        }
        function getInnerBoundingClientRect(element, strategy) {
          var rect = getBoundingClientRect(element, false, strategy === "fixed");
          rect.top = rect.top + element.clientTop;
          rect.left = rect.left + element.clientLeft;
          rect.bottom = rect.top + element.clientHeight;
          rect.right = rect.left + element.clientWidth;
          rect.width = element.clientWidth;
          rect.height = element.clientHeight;
          rect.x = rect.left;
          rect.y = rect.top;
          return rect;
        }
        function getClientRectFromMixedType(element, clippingParent, strategy) {
          return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        }
        function getClippingParents(element) {
          var clippingParents = listScrollParents(getParentNode(element));
          var canEscapeClipping = [ "absolute", "fixed" ].indexOf(getComputedStyle(element).position) >= 0;
          var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
          if (!isElement(clipperElement)) {
            return [];
          }
          return clippingParents.filter((function(clippingParent) {
            return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
          }));
        }
        function getClippingRect(element, boundary, rootBoundary, strategy) {
          var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
          var clippingParents = [].concat(mainClippingParents, [ rootBoundary ]);
          var firstClippingParent = clippingParents[0];
          var clippingRect = clippingParents.reduce((function(accRect, clippingParent) {
            var rect = getClientRectFromMixedType(element, clippingParent, strategy);
            accRect.top = math_max(rect.top, accRect.top);
            accRect.right = math_min(rect.right, accRect.right);
            accRect.bottom = math_min(rect.bottom, accRect.bottom);
            accRect.left = math_max(rect.left, accRect.left);
            return accRect;
          }), getClientRectFromMixedType(element, firstClippingParent, strategy));
          clippingRect.width = clippingRect.right - clippingRect.left;
          clippingRect.height = clippingRect.bottom - clippingRect.top;
          clippingRect.x = clippingRect.left;
          clippingRect.y = clippingRect.top;
          return clippingRect;
        }
        function computeOffsets(_ref) {
          var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
          var basePlacement = placement ? getBasePlacement(placement) : null;
          var variation = placement ? getVariation(placement) : null;
          var commonX = reference.x + reference.width / 2 - element.width / 2;
          var commonY = reference.y + reference.height / 2 - element.height / 2;
          var offsets;
          switch (basePlacement) {
           case enums_top:
            offsets = {
              x: commonX,
              y: reference.y - element.height
            };
            break;

           case bottom:
            offsets = {
              x: commonX,
              y: reference.y + reference.height
            };
            break;

           case right:
            offsets = {
              x: reference.x + reference.width,
              y: commonY
            };
            break;

           case left:
            offsets = {
              x: reference.x - element.width,
              y: commonY
            };
            break;

           default:
            offsets = {
              x: reference.x,
              y: reference.y
            };
          }
          var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
          if (mainAxis != null) {
            var len = mainAxis === "y" ? "height" : "width";
            switch (variation) {
             case start:
              offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
              break;

             case end:
              offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
              break;
            }
          }
          return offsets;
        }
        function detectOverflow(state, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
          var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
          var altContext = elementContext === popper ? reference : popper;
          var popperRect = state.rects.popper;
          var element = state.elements[altBoundary ? altContext : elementContext];
          var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
          var referenceClientRect = getBoundingClientRect(state.elements.reference);
          var popperOffsets = computeOffsets({
            reference: referenceClientRect,
            element: popperRect,
            strategy: "absolute",
            placement: placement
          });
          var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
          var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
          var overflowOffsets = {
            top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
            bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
            left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
            right: elementClientRect.right - clippingClientRect.right + paddingObject.right
          };
          var offsetData = state.modifiersData.offset;
          if (elementContext === popper && offsetData) {
            var offset = offsetData[placement];
            Object.keys(overflowOffsets).forEach((function(key) {
              var multiply = [ right, bottom ].indexOf(key) >= 0 ? 1 : -1;
              var axis = [ enums_top, bottom ].indexOf(key) >= 0 ? "y" : "x";
              overflowOffsets[key] += offset[axis] * multiply;
            }));
          }
          return overflowOffsets;
        }
        function computeAutoPlacement(state, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
          var variation = getVariation(placement);
          var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter((function(placement) {
            return getVariation(placement) === variation;
          })) : basePlacements;
          var allowedPlacements = placements.filter((function(placement) {
            return allowedAutoPlacements.indexOf(placement) >= 0;
          }));
          if (allowedPlacements.length === 0) {
            allowedPlacements = placements;
          }
          var overflows = allowedPlacements.reduce((function(acc, placement) {
            acc[placement] = detectOverflow(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              padding: padding
            })[getBasePlacement(placement)];
            return acc;
          }), {});
          return Object.keys(overflows).sort((function(a, b) {
            return overflows[a] - overflows[b];
          }));
        }
        function getExpandedFallbackPlacements(placement) {
          if (getBasePlacement(placement) === auto) {
            return [];
          }
          var oppositePlacement = getOppositePlacement(placement);
          return [ getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement) ];
        }
        function flip(_ref) {
          var state = _ref.state, options = _ref.options, name = _ref.name;
          if (state.modifiersData[name]._skip) {
            return;
          }
          var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
          var preferredPlacement = state.options.placement;
          var basePlacement = getBasePlacement(preferredPlacement);
          var isBasePlacement = basePlacement === preferredPlacement;
          var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [ getOppositePlacement(preferredPlacement) ] : getExpandedFallbackPlacements(preferredPlacement));
          var placements = [ preferredPlacement ].concat(fallbackPlacements).reduce((function(acc, placement) {
            return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              padding: padding,
              flipVariations: flipVariations,
              allowedAutoPlacements: allowedAutoPlacements
            }) : placement);
          }), []);
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var checksMap = new Map;
          var makeFallbackChecks = true;
          var firstFittingPlacement = placements[0];
          for (var i = 0; i < placements.length; i++) {
            var placement = placements[i];
            var _basePlacement = getBasePlacement(placement);
            var isStartVariation = getVariation(placement) === start;
            var isVertical = [ enums_top, bottom ].indexOf(_basePlacement) >= 0;
            var len = isVertical ? "width" : "height";
            var overflow = detectOverflow(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              altBoundary: altBoundary,
              padding: padding
            });
            var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
            if (referenceRect[len] > popperRect[len]) {
              mainVariationSide = getOppositePlacement(mainVariationSide);
            }
            var altVariationSide = getOppositePlacement(mainVariationSide);
            var checks = [];
            if (checkMainAxis) {
              checks.push(overflow[_basePlacement] <= 0);
            }
            if (checkAltAxis) {
              checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
            }
            if (checks.every((function(check) {
              return check;
            }))) {
              firstFittingPlacement = placement;
              makeFallbackChecks = false;
              break;
            }
            checksMap.set(placement, checks);
          }
          if (makeFallbackChecks) {
            var numberOfChecks = flipVariations ? 3 : 1;
            var _loop = function _loop(_i) {
              var fittingPlacement = placements.find((function(placement) {
                var checks = checksMap.get(placement);
                if (checks) {
                  return checks.slice(0, _i).every((function(check) {
                    return check;
                  }));
                }
              }));
              if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
              }
            };
            for (var _i = numberOfChecks; _i > 0; _i--) {
              var _ret = _loop(_i);
              if (_ret === "break") break;
            }
          }
          if (state.placement !== firstFittingPlacement) {
            state.modifiersData[name]._skip = true;
            state.placement = firstFittingPlacement;
            state.reset = true;
          }
        }
        var modifiers_flip = {
          name: "flip",
          enabled: true,
          phase: "main",
          fn: flip,
          requiresIfExists: [ "offset" ],
          data: {
            _skip: false
          }
        };
        function getSideOffsets(overflow, rect, preventedOffsets) {
          if (preventedOffsets === void 0) {
            preventedOffsets = {
              x: 0,
              y: 0
            };
          }
          return {
            top: overflow.top - rect.height - preventedOffsets.y,
            right: overflow.right - rect.width + preventedOffsets.x,
            bottom: overflow.bottom - rect.height + preventedOffsets.y,
            left: overflow.left - rect.width - preventedOffsets.x
          };
        }
        function isAnySideFullyClipped(overflow) {
          return [ enums_top, right, bottom, left ].some((function(side) {
            return overflow[side] >= 0;
          }));
        }
        function hide(_ref) {
          var state = _ref.state, name = _ref.name;
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var preventedOffsets = state.modifiersData.preventOverflow;
          var referenceOverflow = detectOverflow(state, {
            elementContext: "reference"
          });
          var popperAltOverflow = detectOverflow(state, {
            altBoundary: true
          });
          var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
          var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
          var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
          var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
          state.modifiersData[name] = {
            referenceClippingOffsets: referenceClippingOffsets,
            popperEscapeOffsets: popperEscapeOffsets,
            isReferenceHidden: isReferenceHidden,
            hasPopperEscaped: hasPopperEscaped
          };
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
            "data-popper-reference-hidden": isReferenceHidden,
            "data-popper-escaped": hasPopperEscaped
          });
        }
        var modifiers_hide = {
          name: "hide",
          enabled: true,
          phase: "main",
          requiresIfExists: [ "preventOverflow" ],
          fn: hide
        };
        function distanceAndSkiddingToXY(placement, rects, offset) {
          var basePlacement = getBasePlacement(placement);
          var invertDistance = [ left, enums_top ].indexOf(basePlacement) >= 0 ? -1 : 1;
          var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
            placement: placement
          })) : offset, skidding = _ref[0], distance = _ref[1];
          skidding = skidding || 0;
          distance = (distance || 0) * invertDistance;
          return [ left, right ].indexOf(basePlacement) >= 0 ? {
            x: distance,
            y: skidding
          } : {
            x: skidding,
            y: distance
          };
        }
        function offset(_ref2) {
          var state = _ref2.state, options = _ref2.options, name = _ref2.name;
          var _options$offset = options.offset, offset = _options$offset === void 0 ? [ 0, 0 ] : _options$offset;
          var data = enums_placements.reduce((function(acc, placement) {
            acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
            return acc;
          }), {});
          var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
          if (state.modifiersData.popperOffsets != null) {
            state.modifiersData.popperOffsets.x += x;
            state.modifiersData.popperOffsets.y += y;
          }
          state.modifiersData[name] = data;
        }
        var modifiers_offset = {
          name: "offset",
          enabled: true,
          phase: "main",
          requires: [ "popperOffsets" ],
          fn: offset
        };
        function popperOffsets(_ref) {
          var state = _ref.state, name = _ref.name;
          state.modifiersData[name] = computeOffsets({
            reference: state.rects.reference,
            element: state.rects.popper,
            strategy: "absolute",
            placement: state.placement
          });
        }
        var modifiers_popperOffsets = {
          name: "popperOffsets",
          enabled: true,
          phase: "read",
          fn: popperOffsets,
          data: {}
        };
        function getAltAxis(axis) {
          return axis === "x" ? "y" : "x";
        }
        function preventOverflow(_ref) {
          var state = _ref.state, options = _ref.options, name = _ref.name;
          var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
          var overflow = detectOverflow(state, {
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            altBoundary: altBoundary
          });
          var basePlacement = getBasePlacement(state.placement);
          var variation = getVariation(state.placement);
          var isBasePlacement = !variation;
          var mainAxis = getMainAxisFromPlacement(basePlacement);
          var altAxis = getAltAxis(mainAxis);
          var popperOffsets = state.modifiersData.popperOffsets;
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
            placement: state.placement
          })) : tetherOffset;
          var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
            mainAxis: tetherOffsetValue,
            altAxis: tetherOffsetValue
          } : Object.assign({
            mainAxis: 0,
            altAxis: 0
          }, tetherOffsetValue);
          var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
          var data = {
            x: 0,
            y: 0
          };
          if (!popperOffsets) {
            return;
          }
          if (checkMainAxis) {
            var _offsetModifierState$;
            var mainSide = mainAxis === "y" ? enums_top : left;
            var altSide = mainAxis === "y" ? bottom : right;
            var len = mainAxis === "y" ? "height" : "width";
            var offset = popperOffsets[mainAxis];
            var min = offset + overflow[mainSide];
            var max = offset - overflow[altSide];
            var additive = tether ? -popperRect[len] / 2 : 0;
            var minLen = variation === start ? referenceRect[len] : popperRect[len];
            var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
            var arrowElement = state.elements.arrow;
            var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
              width: 0,
              height: 0
            };
            var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
            var arrowPaddingMin = arrowPaddingObject[mainSide];
            var arrowPaddingMax = arrowPaddingObject[altSide];
            var arrowLen = within(0, referenceRect[len], arrowRect[len]);
            var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
            var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
            var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
            var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
            var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
            var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
            var tetherMax = offset + maxOffset - offsetModifierValue;
            var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
            popperOffsets[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset;
          }
          if (checkAltAxis) {
            var _offsetModifierState$2;
            var _mainSide = mainAxis === "x" ? enums_top : left;
            var _altSide = mainAxis === "x" ? bottom : right;
            var _offset = popperOffsets[altAxis];
            var _len = altAxis === "y" ? "height" : "width";
            var _min = _offset + overflow[_mainSide];
            var _max = _offset - overflow[_altSide];
            var isOriginSide = [ enums_top, left ].indexOf(basePlacement) !== -1;
            var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
            var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
            var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
            var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
            popperOffsets[altAxis] = _preventedOffset;
            data[altAxis] = _preventedOffset - _offset;
          }
          state.modifiersData[name] = data;
        }
        var modifiers_preventOverflow = {
          name: "preventOverflow",
          enabled: true,
          phase: "main",
          fn: preventOverflow,
          requiresIfExists: [ "offset" ]
        };
        function getHTMLElementScroll(element) {
          return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
          };
        }
        function getNodeScroll(node) {
          if (node === getWindow(node) || !isHTMLElement(node)) {
            return getWindowScroll(node);
          } else {
            return getHTMLElementScroll(node);
          }
        }
        function isElementScaled(element) {
          var rect = element.getBoundingClientRect();
          var scaleX = round(rect.width) / element.offsetWidth || 1;
          var scaleY = round(rect.height) / element.offsetHeight || 1;
          return scaleX !== 1 || scaleY !== 1;
        }
        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
          if (isFixed === void 0) {
            isFixed = false;
          }
          var isOffsetParentAnElement = isHTMLElement(offsetParent);
          var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
          var documentElement = getDocumentElement(offsetParent);
          var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
          var scroll = {
            scrollLeft: 0,
            scrollTop: 0
          };
          var offsets = {
            x: 0,
            y: 0
          };
          if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
            if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
              scroll = getNodeScroll(offsetParent);
            }
            if (isHTMLElement(offsetParent)) {
              offsets = getBoundingClientRect(offsetParent, true);
              offsets.x += offsetParent.clientLeft;
              offsets.y += offsetParent.clientTop;
            } else if (documentElement) {
              offsets.x = getWindowScrollBarX(documentElement);
            }
          }
          return {
            x: rect.left + scroll.scrollLeft - offsets.x,
            y: rect.top + scroll.scrollTop - offsets.y,
            width: rect.width,
            height: rect.height
          };
        }
        function order(modifiers) {
          var map = new Map;
          var visited = new Set;
          var result = [];
          modifiers.forEach((function(modifier) {
            map.set(modifier.name, modifier);
          }));
          function sort(modifier) {
            visited.add(modifier.name);
            var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
            requires.forEach((function(dep) {
              if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) {
                  sort(depModifier);
                }
              }
            }));
            result.push(modifier);
          }
          modifiers.forEach((function(modifier) {
            if (!visited.has(modifier.name)) {
              sort(modifier);
            }
          }));
          return result;
        }
        function orderModifiers(modifiers) {
          var orderedModifiers = order(modifiers);
          return modifierPhases.reduce((function(acc, phase) {
            return acc.concat(orderedModifiers.filter((function(modifier) {
              return modifier.phase === phase;
            })));
          }), []);
        }
        function debounce(fn) {
          var pending;
          return function() {
            if (!pending) {
              pending = new Promise((function(resolve) {
                Promise.resolve().then((function() {
                  pending = undefined;
                  resolve(fn());
                }));
              }));
            }
            return pending;
          };
        }
        function mergeByName(modifiers) {
          var merged = modifiers.reduce((function(merged, current) {
            var existing = merged[current.name];
            merged[current.name] = existing ? Object.assign({}, existing, current, {
              options: Object.assign({}, existing.options, current.options),
              data: Object.assign({}, existing.data, current.data)
            }) : current;
            return merged;
          }), {});
          return Object.keys(merged).map((function(key) {
            return merged[key];
          }));
        }
        var DEFAULT_OPTIONS = {
          placement: "bottom",
          modifiers: [],
          strategy: "absolute"
        };
        function areValidElements() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return !args.some((function(element) {
            return !(element && typeof element.getBoundingClientRect === "function");
          }));
        }
        function popperGenerator(generatorOptions) {
          if (generatorOptions === void 0) {
            generatorOptions = {};
          }
          var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
          return function createPopper(reference, popper, options) {
            if (options === void 0) {
              options = defaultOptions;
            }
            var state = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
              modifiersData: {},
              elements: {
                reference: reference,
                popper: popper
              },
              attributes: {},
              styles: {}
            };
            var effectCleanupFns = [];
            var isDestroyed = false;
            var instance = {
              state: state,
              setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                  reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                  popper: listScrollParents(popper)
                };
                var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
                state.orderedModifiers = orderedModifiers.filter((function(m) {
                  return m.enabled;
                }));
                runModifierEffects();
                return instance.update();
              },
              forceUpdate: function forceUpdate() {
                if (isDestroyed) {
                  return;
                }
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
                if (!areValidElements(reference, popper)) {
                  return;
                }
                state.rects = {
                  reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === "fixed"),
                  popper: getLayoutRect(popper)
                };
                state.reset = false;
                state.placement = state.options.placement;
                state.orderedModifiers.forEach((function(modifier) {
                  return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                }));
                for (var index = 0; index < state.orderedModifiers.length; index++) {
                  if (state.reset === true) {
                    state.reset = false;
                    index = -1;
                    continue;
                  }
                  var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                  if (typeof fn === "function") {
                    state = fn({
                      state: state,
                      options: _options,
                      name: name,
                      instance: instance
                    }) || state;
                  }
                }
              },
              update: debounce((function() {
                return new Promise((function(resolve) {
                  instance.forceUpdate();
                  resolve(state);
                }));
              })),
              destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
              }
            };
            if (!areValidElements(reference, popper)) {
              return instance;
            }
            instance.setOptions(options).then((function(state) {
              if (!isDestroyed && options.onFirstUpdate) {
                options.onFirstUpdate(state);
              }
            }));
            function runModifierEffects() {
              state.orderedModifiers.forEach((function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
                if (typeof effect === "function") {
                  var cleanupFn = effect({
                    state: state,
                    name: name,
                    instance: instance,
                    options: options
                  });
                  var noopFn = function noopFn() {};
                  effectCleanupFns.push(cleanupFn || noopFn);
                }
              }));
            }
            function cleanupModifierEffects() {
              effectCleanupFns.forEach((function(fn) {
                return fn();
              }));
              effectCleanupFns = [];
            }
            return instance;
          };
        }
        var createPopper = popperGenerator();
        var defaultModifiers = [ eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide ];
        var popper_createPopper = popperGenerator({
          defaultModifiers: defaultModifiers
        });
        var popper_lite_defaultModifiers = [ eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles ];
        var popper_lite_createPopper = popperGenerator({
          defaultModifiers: popper_lite_defaultModifiers
        });
      },
      902: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initAccordions = void 0;
        var instances_1 = __webpack_require__(423);
        var Default = {
          alwaysOpen: false,
          activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
          inactiveClasses: "text-gray-500 dark:text-gray-400",
          onOpen: function() {},
          onClose: function() {},
          onToggle: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var Accordion = function() {
          function Accordion(accordionEl, items, options, instanceOptions) {
            if (accordionEl === void 0) {
              accordionEl = null;
            }
            if (items === void 0) {
              items = [];
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._instanceId = instanceOptions.id ? instanceOptions.id : accordionEl.id;
            this._accordionEl = accordionEl;
            this._items = items;
            this._options = __assign(__assign({}, Default), options);
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("Accordion", this, this._instanceId, instanceOptions.override);
          }
          Accordion.prototype.init = function() {
            var _this = this;
            if (this._items.length && !this._initialized) {
              this._items.forEach((function(item) {
                if (item.active) {
                  _this.open(item.id);
                }
                var clickHandler = function() {
                  _this.toggle(item.id);
                };
                item.triggerEl.addEventListener("click", clickHandler);
                item.clickHandler = clickHandler;
              }));
              this._initialized = true;
            }
          };
          Accordion.prototype.destroy = function() {
            if (this._items.length && this._initialized) {
              this._items.forEach((function(item) {
                item.triggerEl.removeEventListener("click", item.clickHandler);
                delete item.clickHandler;
              }));
              this._initialized = false;
            }
          };
          Accordion.prototype.removeInstance = function() {
            instances_1.default.removeInstance("Accordion", this._instanceId);
          };
          Accordion.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          Accordion.prototype.getItem = function(id) {
            return this._items.filter((function(item) {
              return item.id === id;
            }))[0];
          };
          Accordion.prototype.open = function(id) {
            var _a, _b;
            var _this = this;
            var item = this.getItem(id);
            if (!this._options.alwaysOpen) {
              this._items.map((function(i) {
                var _a, _b;
                if (i !== item) {
                  (_a = i.triggerEl.classList).remove.apply(_a, _this._options.activeClasses.split(" "));
                  (_b = i.triggerEl.classList).add.apply(_b, _this._options.inactiveClasses.split(" "));
                  i.targetEl.classList.add("hidden");
                  i.triggerEl.setAttribute("aria-expanded", "false");
                  i.active = false;
                  if (i.iconEl) {
                    i.iconEl.classList.add("rotate-180");
                  }
                }
              }));
            }
            (_a = item.triggerEl.classList).add.apply(_a, this._options.activeClasses.split(" "));
            (_b = item.triggerEl.classList).remove.apply(_b, this._options.inactiveClasses.split(" "));
            item.triggerEl.setAttribute("aria-expanded", "true");
            item.targetEl.classList.remove("hidden");
            item.active = true;
            if (item.iconEl) {
              item.iconEl.classList.remove("rotate-180");
            }
            this._options.onOpen(this, item);
          };
          Accordion.prototype.toggle = function(id) {
            var item = this.getItem(id);
            if (item.active) {
              this.close(id);
            } else {
              this.open(id);
            }
            this._options.onToggle(this, item);
          };
          Accordion.prototype.close = function(id) {
            var _a, _b;
            var item = this.getItem(id);
            (_a = item.triggerEl.classList).remove.apply(_a, this._options.activeClasses.split(" "));
            (_b = item.triggerEl.classList).add.apply(_b, this._options.inactiveClasses.split(" "));
            item.targetEl.classList.add("hidden");
            item.triggerEl.setAttribute("aria-expanded", "false");
            item.active = false;
            if (item.iconEl) {
              item.iconEl.classList.add("rotate-180");
            }
            this._options.onClose(this, item);
          };
          Accordion.prototype.updateOnOpen = function(callback) {
            this._options.onOpen = callback;
          };
          Accordion.prototype.updateOnClose = function(callback) {
            this._options.onClose = callback;
          };
          Accordion.prototype.updateOnToggle = function(callback) {
            this._options.onToggle = callback;
          };
          return Accordion;
        }();
        function initAccordions() {
          document.querySelectorAll("[data-accordion]").forEach((function($accordionEl) {
            var alwaysOpen = $accordionEl.getAttribute("data-accordion");
            var activeClasses = $accordionEl.getAttribute("data-active-classes");
            var inactiveClasses = $accordionEl.getAttribute("data-inactive-classes");
            var items = [];
            $accordionEl.querySelectorAll("[data-accordion-target]").forEach((function($triggerEl) {
              if ($triggerEl.closest("[data-accordion]") === $accordionEl) {
                var item = {
                  id: $triggerEl.getAttribute("data-accordion-target"),
                  triggerEl: $triggerEl,
                  targetEl: document.querySelector($triggerEl.getAttribute("data-accordion-target")),
                  iconEl: $triggerEl.querySelector("[data-accordion-icon]"),
                  active: $triggerEl.getAttribute("aria-expanded") === "true" ? true : false
                };
                items.push(item);
              }
            }));
            new Accordion($accordionEl, items, {
              alwaysOpen: alwaysOpen === "open" ? true : false,
              activeClasses: activeClasses ? activeClasses : Default.activeClasses,
              inactiveClasses: inactiveClasses ? inactiveClasses : Default.inactiveClasses
            });
          }));
        }
        exports.initAccordions = initAccordions;
        if (typeof window !== "undefined") {
          window.Accordion = Accordion;
          window.initAccordions = initAccordions;
        }
        exports["default"] = Accordion;
      },
      33: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initCarousels = void 0;
        var instances_1 = __webpack_require__(423);
        var Default = {
          defaultPosition: 0,
          indicators: {
            items: [],
            activeClasses: "bg-white dark:bg-gray-800",
            inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
          },
          interval: 3e3,
          onNext: function() {},
          onPrev: function() {},
          onChange: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var Carousel = function() {
          function Carousel(carouselEl, items, options, instanceOptions) {
            if (carouselEl === void 0) {
              carouselEl = null;
            }
            if (items === void 0) {
              items = [];
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._instanceId = instanceOptions.id ? instanceOptions.id : carouselEl.id;
            this._carouselEl = carouselEl;
            this._items = items;
            this._options = __assign(__assign(__assign({}, Default), options), {
              indicators: __assign(__assign({}, Default.indicators), options.indicators)
            });
            this._activeItem = this.getItem(this._options.defaultPosition);
            this._indicators = this._options.indicators.items;
            this._intervalDuration = this._options.interval;
            this._intervalInstance = null;
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("Carousel", this, this._instanceId, instanceOptions.override);
          }
          Carousel.prototype.init = function() {
            var _this = this;
            if (this._items.length && !this._initialized) {
              this._items.map((function(item) {
                item.el.classList.add("absolute", "inset-0", "transition-transform", "transform");
              }));
              if (this.getActiveItem()) {
                this.slideTo(this.getActiveItem().position);
              } else {
                this.slideTo(0);
              }
              this._indicators.map((function(indicator, position) {
                indicator.el.addEventListener("click", (function() {
                  _this.slideTo(position);
                }));
              }));
              this._initialized = true;
            }
          };
          Carousel.prototype.destroy = function() {
            if (this._initialized) {
              this._initialized = false;
            }
          };
          Carousel.prototype.removeInstance = function() {
            instances_1.default.removeInstance("Carousel", this._instanceId);
          };
          Carousel.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          Carousel.prototype.getItem = function(position) {
            return this._items[position];
          };
          Carousel.prototype.slideTo = function(position) {
            var nextItem = this._items[position];
            var rotationItems = {
              left: nextItem.position === 0 ? this._items[this._items.length - 1] : this._items[nextItem.position - 1],
              middle: nextItem,
              right: nextItem.position === this._items.length - 1 ? this._items[0] : this._items[nextItem.position + 1]
            };
            this._rotate(rotationItems);
            this._setActiveItem(nextItem);
            if (this._intervalInstance) {
              this.pause();
              this.cycle();
            }
            this._options.onChange(this);
          };
          Carousel.prototype.next = function() {
            var activeItem = this.getActiveItem();
            var nextItem = null;
            if (activeItem.position === this._items.length - 1) {
              nextItem = this._items[0];
            } else {
              nextItem = this._items[activeItem.position + 1];
            }
            this.slideTo(nextItem.position);
            this._options.onNext(this);
          };
          Carousel.prototype.prev = function() {
            var activeItem = this.getActiveItem();
            var prevItem = null;
            if (activeItem.position === 0) {
              prevItem = this._items[this._items.length - 1];
            } else {
              prevItem = this._items[activeItem.position - 1];
            }
            this.slideTo(prevItem.position);
            this._options.onPrev(this);
          };
          Carousel.prototype._rotate = function(rotationItems) {
            this._items.map((function(item) {
              item.el.classList.add("hidden");
            }));
            if (this._items.length === 1) {
              rotationItems.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10");
              rotationItems.middle.el.classList.add("translate-x-0", "z-20");
              return;
            }
            rotationItems.left.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20");
            rotationItems.left.el.classList.add("-translate-x-full", "z-10");
            rotationItems.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10");
            rotationItems.middle.el.classList.add("translate-x-0", "z-30");
            rotationItems.right.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-30");
            rotationItems.right.el.classList.add("translate-x-full", "z-20");
          };
          Carousel.prototype.cycle = function() {
            var _this = this;
            if (typeof window !== "undefined") {
              this._intervalInstance = window.setInterval((function() {
                _this.next();
              }), this._intervalDuration);
            }
          };
          Carousel.prototype.pause = function() {
            clearInterval(this._intervalInstance);
          };
          Carousel.prototype.getActiveItem = function() {
            return this._activeItem;
          };
          Carousel.prototype._setActiveItem = function(item) {
            var _a, _b;
            var _this = this;
            this._activeItem = item;
            var position = item.position;
            if (this._indicators.length) {
              this._indicators.map((function(indicator) {
                var _a, _b;
                indicator.el.setAttribute("aria-current", "false");
                (_a = indicator.el.classList).remove.apply(_a, _this._options.indicators.activeClasses.split(" "));
                (_b = indicator.el.classList).add.apply(_b, _this._options.indicators.inactiveClasses.split(" "));
              }));
              (_a = this._indicators[position].el.classList).add.apply(_a, this._options.indicators.activeClasses.split(" "));
              (_b = this._indicators[position].el.classList).remove.apply(_b, this._options.indicators.inactiveClasses.split(" "));
              this._indicators[position].el.setAttribute("aria-current", "true");
            }
          };
          Carousel.prototype.updateOnNext = function(callback) {
            this._options.onNext = callback;
          };
          Carousel.prototype.updateOnPrev = function(callback) {
            this._options.onPrev = callback;
          };
          Carousel.prototype.updateOnChange = function(callback) {
            this._options.onChange = callback;
          };
          return Carousel;
        }();
        function initCarousels() {
          document.querySelectorAll("[data-carousel]").forEach((function($carouselEl) {
            var interval = $carouselEl.getAttribute("data-carousel-interval");
            var slide = $carouselEl.getAttribute("data-carousel") === "slide" ? true : false;
            var items = [];
            var defaultPosition = 0;
            if ($carouselEl.querySelectorAll("[data-carousel-item]").length) {
              Array.from($carouselEl.querySelectorAll("[data-carousel-item]")).map((function($carouselItemEl, position) {
                items.push({
                  position: position,
                  el: $carouselItemEl
                });
                if ($carouselItemEl.getAttribute("data-carousel-item") === "active") {
                  defaultPosition = position;
                }
              }));
            }
            var indicators = [];
            if ($carouselEl.querySelectorAll("[data-carousel-slide-to]").length) {
              Array.from($carouselEl.querySelectorAll("[data-carousel-slide-to]")).map((function($indicatorEl) {
                indicators.push({
                  position: parseInt($indicatorEl.getAttribute("data-carousel-slide-to")),
                  el: $indicatorEl
                });
              }));
            }
            var carousel = new Carousel($carouselEl, items, {
              defaultPosition: defaultPosition,
              indicators: {
                items: indicators
              },
              interval: interval ? interval : Default.interval
            });
            if (slide) {
              carousel.cycle();
            }
            var carouselNextEl = $carouselEl.querySelector("[data-carousel-next]");
            var carouselPrevEl = $carouselEl.querySelector("[data-carousel-prev]");
            if (carouselNextEl) {
              carouselNextEl.addEventListener("click", (function() {
                carousel.next();
              }));
            }
            if (carouselPrevEl) {
              carouselPrevEl.addEventListener("click", (function() {
                carousel.prev();
              }));
            }
          }));
        }
        exports.initCarousels = initCarousels;
        if (typeof window !== "undefined") {
          window.Carousel = Carousel;
          window.initCarousels = initCarousels;
        }
        exports["default"] = Carousel;
      },
      673: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initCopyClipboards = void 0;
        var instances_1 = __webpack_require__(423);
        var Default = {
          htmlEntities: false,
          contentType: "input",
          onCopy: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var CopyClipboard = function() {
          function CopyClipboard(triggerEl, targetEl, options, instanceOptions) {
            if (triggerEl === void 0) {
              triggerEl = null;
            }
            if (targetEl === void 0) {
              targetEl = null;
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
            this._triggerEl = triggerEl;
            this._targetEl = targetEl;
            this._options = __assign(__assign({}, Default), options);
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("CopyClipboard", this, this._instanceId, instanceOptions.override);
          }
          CopyClipboard.prototype.init = function() {
            var _this = this;
            if (this._targetEl && this._triggerEl && !this._initialized) {
              this._triggerElClickHandler = function() {
                _this.copy();
              };
              if (this._triggerEl) {
                this._triggerEl.addEventListener("click", this._triggerElClickHandler);
              }
              this._initialized = true;
            }
          };
          CopyClipboard.prototype.destroy = function() {
            if (this._triggerEl && this._targetEl && this._initialized) {
              if (this._triggerEl) {
                this._triggerEl.removeEventListener("click", this._triggerElClickHandler);
              }
              this._initialized = false;
            }
          };
          CopyClipboard.prototype.removeInstance = function() {
            instances_1.default.removeInstance("CopyClipboard", this._instanceId);
          };
          CopyClipboard.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          CopyClipboard.prototype.getTargetValue = function() {
            if (this._options.contentType === "input") {
              return this._targetEl.value;
            }
            if (this._options.contentType === "innerHTML") {
              return this._targetEl.innerHTML;
            }
            if (this._options.contentType === "textContent") {
              return this._targetEl.textContent.replace(/\s+/g, " ").trim();
            }
          };
          CopyClipboard.prototype.copy = function() {
            var textToCopy = this.getTargetValue();
            if (this._options.htmlEntities) {
              textToCopy = this.decodeHTML(textToCopy);
            }
            var tempTextArea = document.createElement("textarea");
            tempTextArea.value = textToCopy;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand("copy");
            document.body.removeChild(tempTextArea);
            this._options.onCopy(this);
            return textToCopy;
          };
          CopyClipboard.prototype.decodeHTML = function(html) {
            var textarea = document.createElement("textarea");
            textarea.innerHTML = html;
            return textarea.textContent;
          };
          CopyClipboard.prototype.updateOnCopyCallback = function(callback) {
            this._options.onCopy = callback;
          };
          return CopyClipboard;
        }();
        function initCopyClipboards() {
          document.querySelectorAll("[data-copy-to-clipboard-target]").forEach((function($triggerEl) {
            var targetId = $triggerEl.getAttribute("data-copy-to-clipboard-target");
            var $targetEl = document.getElementById(targetId);
            var contentType = $triggerEl.getAttribute("data-copy-to-clipboard-content-type");
            var htmlEntities = $triggerEl.getAttribute("data-copy-to-clipboard-html-entities");
            if ($targetEl) {
              if (!instances_1.default.instanceExists("CopyClipboard", $targetEl.getAttribute("id"))) {
                new CopyClipboard($triggerEl, $targetEl, {
                  htmlEntities: htmlEntities && htmlEntities === "true" ? true : Default.htmlEntities,
                  contentType: contentType ? contentType : Default.contentType
                });
              }
            } else {
              console.error('The target element with id "'.concat(targetId, '" does not exist. Please check the data-copy-to-clipboard-target attribute.'));
            }
          }));
        }
        exports.initCopyClipboards = initCopyClipboards;
        if (typeof window !== "undefined") {
          window.CopyClipboard = CopyClipboard;
          window.initClipboards = initCopyClipboards;
        }
        exports["default"] = CopyClipboard;
      },
      922: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initCollapses = void 0;
        var instances_1 = __webpack_require__(423);
        var Default = {
          onCollapse: function() {},
          onExpand: function() {},
          onToggle: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var Collapse = function() {
          function Collapse(targetEl, triggerEl, options, instanceOptions) {
            if (targetEl === void 0) {
              targetEl = null;
            }
            if (triggerEl === void 0) {
              triggerEl = null;
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
            this._targetEl = targetEl;
            this._triggerEl = triggerEl;
            this._options = __assign(__assign({}, Default), options);
            this._visible = false;
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("Collapse", this, this._instanceId, instanceOptions.override);
          }
          Collapse.prototype.init = function() {
            var _this = this;
            if (this._triggerEl && this._targetEl && !this._initialized) {
              if (this._triggerEl.hasAttribute("aria-expanded")) {
                this._visible = this._triggerEl.getAttribute("aria-expanded") === "true";
              } else {
                this._visible = !this._targetEl.classList.contains("hidden");
              }
              this._clickHandler = function() {
                _this.toggle();
              };
              this._triggerEl.addEventListener("click", this._clickHandler);
              this._initialized = true;
            }
          };
          Collapse.prototype.destroy = function() {
            if (this._triggerEl && this._initialized) {
              this._triggerEl.removeEventListener("click", this._clickHandler);
              this._initialized = false;
            }
          };
          Collapse.prototype.removeInstance = function() {
            instances_1.default.removeInstance("Collapse", this._instanceId);
          };
          Collapse.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          Collapse.prototype.collapse = function() {
            this._targetEl.classList.add("hidden");
            if (this._triggerEl) {
              this._triggerEl.setAttribute("aria-expanded", "false");
            }
            this._visible = false;
            this._options.onCollapse(this);
          };
          Collapse.prototype.expand = function() {
            this._targetEl.classList.remove("hidden");
            if (this._triggerEl) {
              this._triggerEl.setAttribute("aria-expanded", "true");
            }
            this._visible = true;
            this._options.onExpand(this);
          };
          Collapse.prototype.toggle = function() {
            if (this._visible) {
              this.collapse();
            } else {
              this.expand();
            }
            this._options.onToggle(this);
          };
          Collapse.prototype.updateOnCollapse = function(callback) {
            this._options.onCollapse = callback;
          };
          Collapse.prototype.updateOnExpand = function(callback) {
            this._options.onExpand = callback;
          };
          Collapse.prototype.updateOnToggle = function(callback) {
            this._options.onToggle = callback;
          };
          return Collapse;
        }();
        function initCollapses() {
          document.querySelectorAll("[data-collapse-toggle]").forEach((function($triggerEl) {
            var targetId = $triggerEl.getAttribute("data-collapse-toggle");
            var $targetEl = document.getElementById(targetId);
            if ($targetEl) {
              if (!instances_1.default.instanceExists("Collapse", $targetEl.getAttribute("id"))) {
                new Collapse($targetEl, $triggerEl);
              } else {
                new Collapse($targetEl, $triggerEl, {}, {
                  id: $targetEl.getAttribute("id") + "_" + instances_1.default._generateRandomId()
                });
              }
            } else {
              console.error('The target element with id "'.concat(targetId, '" does not exist. Please check the data-collapse-toggle attribute.'));
            }
          }));
        }
        exports.initCollapses = initCollapses;
        if (typeof window !== "undefined") {
          window.Collapse = Collapse;
          window.initCollapses = initCollapses;
        }
        exports["default"] = Collapse;
      },
      556: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initDials = void 0;
        var instances_1 = __webpack_require__(423);
        var Default = {
          triggerType: "hover",
          onShow: function() {},
          onHide: function() {},
          onToggle: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var Dial = function() {
          function Dial(parentEl, triggerEl, targetEl, options, instanceOptions) {
            if (parentEl === void 0) {
              parentEl = null;
            }
            if (triggerEl === void 0) {
              triggerEl = null;
            }
            if (targetEl === void 0) {
              targetEl = null;
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
            this._parentEl = parentEl;
            this._triggerEl = triggerEl;
            this._targetEl = targetEl;
            this._options = __assign(__assign({}, Default), options);
            this._visible = false;
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("Dial", this, this._instanceId, instanceOptions.override);
          }
          Dial.prototype.init = function() {
            var _this = this;
            if (this._triggerEl && this._targetEl && !this._initialized) {
              var triggerEventTypes = this._getTriggerEventTypes(this._options.triggerType);
              this._showEventHandler = function() {
                _this.show();
              };
              triggerEventTypes.showEvents.forEach((function(ev) {
                _this._triggerEl.addEventListener(ev, _this._showEventHandler);
                _this._targetEl.addEventListener(ev, _this._showEventHandler);
              }));
              this._hideEventHandler = function() {
                if (!_this._parentEl.matches(":hover")) {
                  _this.hide();
                }
              };
              triggerEventTypes.hideEvents.forEach((function(ev) {
                _this._parentEl.addEventListener(ev, _this._hideEventHandler);
              }));
              this._initialized = true;
            }
          };
          Dial.prototype.destroy = function() {
            var _this = this;
            if (this._initialized) {
              var triggerEventTypes = this._getTriggerEventTypes(this._options.triggerType);
              triggerEventTypes.showEvents.forEach((function(ev) {
                _this._triggerEl.removeEventListener(ev, _this._showEventHandler);
                _this._targetEl.removeEventListener(ev, _this._showEventHandler);
              }));
              triggerEventTypes.hideEvents.forEach((function(ev) {
                _this._parentEl.removeEventListener(ev, _this._hideEventHandler);
              }));
              this._initialized = false;
            }
          };
          Dial.prototype.removeInstance = function() {
            instances_1.default.removeInstance("Dial", this._instanceId);
          };
          Dial.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          Dial.prototype.hide = function() {
            this._targetEl.classList.add("hidden");
            if (this._triggerEl) {
              this._triggerEl.setAttribute("aria-expanded", "false");
            }
            this._visible = false;
            this._options.onHide(this);
          };
          Dial.prototype.show = function() {
            this._targetEl.classList.remove("hidden");
            if (this._triggerEl) {
              this._triggerEl.setAttribute("aria-expanded", "true");
            }
            this._visible = true;
            this._options.onShow(this);
          };
          Dial.prototype.toggle = function() {
            if (this._visible) {
              this.hide();
            } else {
              this.show();
            }
          };
          Dial.prototype.isHidden = function() {
            return !this._visible;
          };
          Dial.prototype.isVisible = function() {
            return this._visible;
          };
          Dial.prototype._getTriggerEventTypes = function(triggerType) {
            switch (triggerType) {
             case "hover":
              return {
                showEvents: [ "mouseenter", "focus" ],
                hideEvents: [ "mouseleave", "blur" ]
              };

             case "click":
              return {
                showEvents: [ "click", "focus" ],
                hideEvents: [ "focusout", "blur" ]
              };

             case "none":
              return {
                showEvents: [],
                hideEvents: []
              };

             default:
              return {
                showEvents: [ "mouseenter", "focus" ],
                hideEvents: [ "mouseleave", "blur" ]
              };
            }
          };
          Dial.prototype.updateOnShow = function(callback) {
            this._options.onShow = callback;
          };
          Dial.prototype.updateOnHide = function(callback) {
            this._options.onHide = callback;
          };
          Dial.prototype.updateOnToggle = function(callback) {
            this._options.onToggle = callback;
          };
          return Dial;
        }();
        function initDials() {
          document.querySelectorAll("[data-dial-init]").forEach((function($parentEl) {
            var $triggerEl = $parentEl.querySelector("[data-dial-toggle]");
            if ($triggerEl) {
              var dialId = $triggerEl.getAttribute("data-dial-toggle");
              var $dialEl = document.getElementById(dialId);
              if ($dialEl) {
                var triggerType = $triggerEl.getAttribute("data-dial-trigger");
                new Dial($parentEl, $triggerEl, $dialEl, {
                  triggerType: triggerType ? triggerType : Default.triggerType
                });
              } else {
                console.error("Dial with id ".concat(dialId, " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"));
              }
            } else {
              console.error("Dial with id ".concat($parentEl.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
            }
          }));
        }
        exports.initDials = initDials;
        if (typeof window !== "undefined") {
          window.Dial = Dial;
          window.initDials = initDials;
        }
        exports["default"] = Dial;
      },
      791: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initDismisses = void 0;
        var instances_1 = __webpack_require__(423);
        var Default = {
          transition: "transition-opacity",
          duration: 300,
          timing: "ease-out",
          onHide: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var Dismiss = function() {
          function Dismiss(targetEl, triggerEl, options, instanceOptions) {
            if (targetEl === void 0) {
              targetEl = null;
            }
            if (triggerEl === void 0) {
              triggerEl = null;
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
            this._targetEl = targetEl;
            this._triggerEl = triggerEl;
            this._options = __assign(__assign({}, Default), options);
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("Dismiss", this, this._instanceId, instanceOptions.override);
          }
          Dismiss.prototype.init = function() {
            var _this = this;
            if (this._triggerEl && this._targetEl && !this._initialized) {
              this._clickHandler = function() {
                _this.hide();
              };
              this._triggerEl.addEventListener("click", this._clickHandler);
              this._initialized = true;
            }
          };
          Dismiss.prototype.destroy = function() {
            if (this._triggerEl && this._initialized) {
              this._triggerEl.removeEventListener("click", this._clickHandler);
              this._initialized = false;
            }
          };
          Dismiss.prototype.removeInstance = function() {
            instances_1.default.removeInstance("Dismiss", this._instanceId);
          };
          Dismiss.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          Dismiss.prototype.hide = function() {
            var _this = this;
            this._targetEl.classList.add(this._options.transition, "duration-".concat(this._options.duration), this._options.timing, "opacity-0");
            setTimeout((function() {
              _this._targetEl.classList.add("hidden");
            }), this._options.duration);
            this._options.onHide(this, this._targetEl);
          };
          Dismiss.prototype.updateOnHide = function(callback) {
            this._options.onHide = callback;
          };
          return Dismiss;
        }();
        function initDismisses() {
          document.querySelectorAll("[data-dismiss-target]").forEach((function($triggerEl) {
            var targetId = $triggerEl.getAttribute("data-dismiss-target");
            var $dismissEl = document.querySelector(targetId);
            if ($dismissEl) {
              new Dismiss($dismissEl, $triggerEl);
            } else {
              console.error('The dismiss element with id "'.concat(targetId, '" does not exist. Please check the data-dismiss-target attribute.'));
            }
          }));
        }
        exports.initDismisses = initDismisses;
        if (typeof window !== "undefined") {
          window.Dismiss = Dismiss;
          window.initDismisses = initDismisses;
        }
        exports["default"] = Dismiss;
      },
      340: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initDrawers = void 0;
        var instances_1 = __webpack_require__(423);
        var Default = {
          placement: "left",
          bodyScrolling: false,
          backdrop: true,
          edge: false,
          edgeOffset: "bottom-[60px]",
          backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
          onShow: function() {},
          onHide: function() {},
          onToggle: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var Drawer = function() {
          function Drawer(targetEl, options, instanceOptions) {
            if (targetEl === void 0) {
              targetEl = null;
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._eventListenerInstances = [];
            this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
            this._targetEl = targetEl;
            this._options = __assign(__assign({}, Default), options);
            this._visible = false;
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("Drawer", this, this._instanceId, instanceOptions.override);
          }
          Drawer.prototype.init = function() {
            var _this = this;
            if (this._targetEl && !this._initialized) {
              this._targetEl.setAttribute("aria-hidden", "true");
              this._targetEl.classList.add("transition-transform");
              this._getPlacementClasses(this._options.placement).base.map((function(c) {
                _this._targetEl.classList.add(c);
              }));
              this._handleEscapeKey = function(event) {
                if (event.key === "Escape") {
                  if (_this.isVisible()) {
                    _this.hide();
                  }
                }
              };
              document.addEventListener("keydown", this._handleEscapeKey);
              this._initialized = true;
            }
          };
          Drawer.prototype.destroy = function() {
            if (this._initialized) {
              this.removeAllEventListenerInstances();
              this._destroyBackdropEl();
              document.removeEventListener("keydown", this._handleEscapeKey);
              this._initialized = false;
            }
          };
          Drawer.prototype.removeInstance = function() {
            instances_1.default.removeInstance("Drawer", this._instanceId);
          };
          Drawer.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          Drawer.prototype.hide = function() {
            var _this = this;
            if (this._options.edge) {
              this._getPlacementClasses(this._options.placement + "-edge").active.map((function(c) {
                _this._targetEl.classList.remove(c);
              }));
              this._getPlacementClasses(this._options.placement + "-edge").inactive.map((function(c) {
                _this._targetEl.classList.add(c);
              }));
            } else {
              this._getPlacementClasses(this._options.placement).active.map((function(c) {
                _this._targetEl.classList.remove(c);
              }));
              this._getPlacementClasses(this._options.placement).inactive.map((function(c) {
                _this._targetEl.classList.add(c);
              }));
            }
            this._targetEl.setAttribute("aria-hidden", "true");
            this._targetEl.removeAttribute("aria-modal");
            this._targetEl.removeAttribute("role");
            if (!this._options.bodyScrolling) {
              document.body.classList.remove("overflow-hidden");
            }
            if (this._options.backdrop) {
              this._destroyBackdropEl();
            }
            this._visible = false;
            this._options.onHide(this);
          };
          Drawer.prototype.show = function() {
            var _this = this;
            if (this._options.edge) {
              this._getPlacementClasses(this._options.placement + "-edge").active.map((function(c) {
                _this._targetEl.classList.add(c);
              }));
              this._getPlacementClasses(this._options.placement + "-edge").inactive.map((function(c) {
                _this._targetEl.classList.remove(c);
              }));
            } else {
              this._getPlacementClasses(this._options.placement).active.map((function(c) {
                _this._targetEl.classList.add(c);
              }));
              this._getPlacementClasses(this._options.placement).inactive.map((function(c) {
                _this._targetEl.classList.remove(c);
              }));
            }
            this._targetEl.setAttribute("aria-modal", "true");
            this._targetEl.setAttribute("role", "dialog");
            this._targetEl.removeAttribute("aria-hidden");
            if (!this._options.bodyScrolling) {
              document.body.classList.add("overflow-hidden");
            }
            if (this._options.backdrop) {
              this._createBackdrop();
            }
            this._visible = true;
            this._options.onShow(this);
          };
          Drawer.prototype.toggle = function() {
            if (this.isVisible()) {
              this.hide();
            } else {
              this.show();
            }
          };
          Drawer.prototype._createBackdrop = function() {
            var _a;
            var _this = this;
            if (!this._visible) {
              var backdropEl = document.createElement("div");
              backdropEl.setAttribute("drawer-backdrop", "");
              (_a = backdropEl.classList).add.apply(_a, this._options.backdropClasses.split(" "));
              document.querySelector("body").append(backdropEl);
              backdropEl.addEventListener("click", (function() {
                _this.hide();
              }));
            }
          };
          Drawer.prototype._destroyBackdropEl = function() {
            if (this._visible && document.querySelector("[drawer-backdrop]") !== null) {
              document.querySelector("[drawer-backdrop]").remove();
            }
          };
          Drawer.prototype._getPlacementClasses = function(placement) {
            switch (placement) {
             case "top":
              return {
                base: [ "top-0", "left-0", "right-0" ],
                active: [ "transform-none" ],
                inactive: [ "-translate-y-full" ]
              };

             case "right":
              return {
                base: [ "right-0", "top-0" ],
                active: [ "transform-none" ],
                inactive: [ "translate-x-full" ]
              };

             case "bottom":
              return {
                base: [ "bottom-0", "left-0", "right-0" ],
                active: [ "transform-none" ],
                inactive: [ "translate-y-full" ]
              };

             case "left":
              return {
                base: [ "left-0", "top-0" ],
                active: [ "transform-none" ],
                inactive: [ "-translate-x-full" ]
              };

             case "bottom-edge":
              return {
                base: [ "left-0", "top-0" ],
                active: [ "transform-none" ],
                inactive: [ "translate-y-full", this._options.edgeOffset ]
              };

             default:
              return {
                base: [ "left-0", "top-0" ],
                active: [ "transform-none" ],
                inactive: [ "-translate-x-full" ]
              };
            }
          };
          Drawer.prototype.isHidden = function() {
            return !this._visible;
          };
          Drawer.prototype.isVisible = function() {
            return this._visible;
          };
          Drawer.prototype.addEventListenerInstance = function(element, type, handler) {
            this._eventListenerInstances.push({
              element: element,
              type: type,
              handler: handler
            });
          };
          Drawer.prototype.removeAllEventListenerInstances = function() {
            this._eventListenerInstances.map((function(eventListenerInstance) {
              eventListenerInstance.element.removeEventListener(eventListenerInstance.type, eventListenerInstance.handler);
            }));
            this._eventListenerInstances = [];
          };
          Drawer.prototype.getAllEventListenerInstances = function() {
            return this._eventListenerInstances;
          };
          Drawer.prototype.updateOnShow = function(callback) {
            this._options.onShow = callback;
          };
          Drawer.prototype.updateOnHide = function(callback) {
            this._options.onHide = callback;
          };
          Drawer.prototype.updateOnToggle = function(callback) {
            this._options.onToggle = callback;
          };
          return Drawer;
        }();
        function initDrawers() {
          document.querySelectorAll("[data-drawer-target]").forEach((function($triggerEl) {
            var drawerId = $triggerEl.getAttribute("data-drawer-target");
            var $drawerEl = document.getElementById(drawerId);
            if ($drawerEl) {
              var placement = $triggerEl.getAttribute("data-drawer-placement");
              var bodyScrolling = $triggerEl.getAttribute("data-drawer-body-scrolling");
              var backdrop = $triggerEl.getAttribute("data-drawer-backdrop");
              var edge = $triggerEl.getAttribute("data-drawer-edge");
              var edgeOffset = $triggerEl.getAttribute("data-drawer-edge-offset");
              new Drawer($drawerEl, {
                placement: placement ? placement : Default.placement,
                bodyScrolling: bodyScrolling ? bodyScrolling === "true" ? true : false : Default.bodyScrolling,
                backdrop: backdrop ? backdrop === "true" ? true : false : Default.backdrop,
                edge: edge ? edge === "true" ? true : false : Default.edge,
                edgeOffset: edgeOffset ? edgeOffset : Default.edgeOffset
              });
            } else {
              console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
            }
          }));
          document.querySelectorAll("[data-drawer-toggle]").forEach((function($triggerEl) {
            var drawerId = $triggerEl.getAttribute("data-drawer-toggle");
            var $drawerEl = document.getElementById(drawerId);
            if ($drawerEl) {
              var drawer_1 = instances_1.default.getInstance("Drawer", drawerId);
              if (drawer_1) {
                var toggleDrawer = function() {
                  drawer_1.toggle();
                };
                $triggerEl.addEventListener("click", toggleDrawer);
                drawer_1.addEventListenerInstance($triggerEl, "click", toggleDrawer);
              } else {
                console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
              }
            } else {
              console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
            }
          }));
          document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach((function($triggerEl) {
            var drawerId = $triggerEl.getAttribute("data-drawer-dismiss") ? $triggerEl.getAttribute("data-drawer-dismiss") : $triggerEl.getAttribute("data-drawer-hide");
            var $drawerEl = document.getElementById(drawerId);
            if ($drawerEl) {
              var drawer_2 = instances_1.default.getInstance("Drawer", drawerId);
              if (drawer_2) {
                var hideDrawer = function() {
                  drawer_2.hide();
                };
                $triggerEl.addEventListener("click", hideDrawer);
                drawer_2.addEventListenerInstance($triggerEl, "click", hideDrawer);
              } else {
                console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
              }
            } else {
              console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
            }
          }));
          document.querySelectorAll("[data-drawer-show]").forEach((function($triggerEl) {
            var drawerId = $triggerEl.getAttribute("data-drawer-show");
            var $drawerEl = document.getElementById(drawerId);
            if ($drawerEl) {
              var drawer_3 = instances_1.default.getInstance("Drawer", drawerId);
              if (drawer_3) {
                var showDrawer = function() {
                  drawer_3.show();
                };
                $triggerEl.addEventListener("click", showDrawer);
                drawer_3.addEventListenerInstance($triggerEl, "click", showDrawer);
              } else {
                console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
              }
            } else {
              console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
            }
          }));
        }
        exports.initDrawers = initDrawers;
        if (typeof window !== "undefined") {
          window.Drawer = Drawer;
          window.initDrawers = initDrawers;
        }
        exports["default"] = Drawer;
      },
      316: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
          if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initDropdowns = void 0;
        var core_1 = __webpack_require__(853);
        var instances_1 = __webpack_require__(423);
        var Default = {
          placement: "bottom",
          triggerType: "click",
          offsetSkidding: 0,
          offsetDistance: 10,
          delay: 300,
          ignoreClickOutsideClass: false,
          onShow: function() {},
          onHide: function() {},
          onToggle: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var Dropdown = function() {
          function Dropdown(targetElement, triggerElement, options, instanceOptions) {
            if (targetElement === void 0) {
              targetElement = null;
            }
            if (triggerElement === void 0) {
              triggerElement = null;
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._instanceId = instanceOptions.id ? instanceOptions.id : targetElement.id;
            this._targetEl = targetElement;
            this._triggerEl = triggerElement;
            this._options = __assign(__assign({}, Default), options);
            this._popperInstance = null;
            this._visible = false;
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("Dropdown", this, this._instanceId, instanceOptions.override);
          }
          Dropdown.prototype.init = function() {
            if (this._triggerEl && this._targetEl && !this._initialized) {
              this._popperInstance = this._createPopperInstance();
              this._setupEventListeners();
              this._initialized = true;
            }
          };
          Dropdown.prototype.destroy = function() {
            var _this = this;
            var triggerEvents = this._getTriggerEvents();
            if (this._options.triggerType === "click") {
              triggerEvents.showEvents.forEach((function(ev) {
                _this._triggerEl.removeEventListener(ev, _this._clickHandler);
              }));
            }
            if (this._options.triggerType === "hover") {
              triggerEvents.showEvents.forEach((function(ev) {
                _this._triggerEl.removeEventListener(ev, _this._hoverShowTriggerElHandler);
                _this._targetEl.removeEventListener(ev, _this._hoverShowTargetElHandler);
              }));
              triggerEvents.hideEvents.forEach((function(ev) {
                _this._triggerEl.removeEventListener(ev, _this._hoverHideHandler);
                _this._targetEl.removeEventListener(ev, _this._hoverHideHandler);
              }));
            }
            this._popperInstance.destroy();
            this._initialized = false;
          };
          Dropdown.prototype.removeInstance = function() {
            instances_1.default.removeInstance("Dropdown", this._instanceId);
          };
          Dropdown.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          Dropdown.prototype._setupEventListeners = function() {
            var _this = this;
            var triggerEvents = this._getTriggerEvents();
            this._clickHandler = function() {
              _this.toggle();
            };
            if (this._options.triggerType === "click") {
              triggerEvents.showEvents.forEach((function(ev) {
                _this._triggerEl.addEventListener(ev, _this._clickHandler);
              }));
            }
            this._hoverShowTriggerElHandler = function(ev) {
              if (ev.type === "click") {
                _this.toggle();
              } else {
                setTimeout((function() {
                  _this.show();
                }), _this._options.delay);
              }
            };
            this._hoverShowTargetElHandler = function() {
              _this.show();
            };
            this._hoverHideHandler = function() {
              setTimeout((function() {
                if (!_this._targetEl.matches(":hover")) {
                  _this.hide();
                }
              }), _this._options.delay);
            };
            if (this._options.triggerType === "hover") {
              triggerEvents.showEvents.forEach((function(ev) {
                _this._triggerEl.addEventListener(ev, _this._hoverShowTriggerElHandler);
                _this._targetEl.addEventListener(ev, _this._hoverShowTargetElHandler);
              }));
              triggerEvents.hideEvents.forEach((function(ev) {
                _this._triggerEl.addEventListener(ev, _this._hoverHideHandler);
                _this._targetEl.addEventListener(ev, _this._hoverHideHandler);
              }));
            }
          };
          Dropdown.prototype._createPopperInstance = function() {
            return (0, core_1.createPopper)(this._triggerEl, this._targetEl, {
              placement: this._options.placement,
              modifiers: [ {
                name: "offset",
                options: {
                  offset: [ this._options.offsetSkidding, this._options.offsetDistance ]
                }
              } ]
            });
          };
          Dropdown.prototype._setupClickOutsideListener = function() {
            var _this = this;
            this._clickOutsideEventListener = function(ev) {
              _this._handleClickOutside(ev, _this._targetEl);
            };
            document.body.addEventListener("click", this._clickOutsideEventListener, true);
          };
          Dropdown.prototype._removeClickOutsideListener = function() {
            document.body.removeEventListener("click", this._clickOutsideEventListener, true);
          };
          Dropdown.prototype._handleClickOutside = function(ev, targetEl) {
            var clickedEl = ev.target;
            var ignoreClickOutsideClass = this._options.ignoreClickOutsideClass;
            var isIgnored = false;
            if (ignoreClickOutsideClass) {
              var ignoredClickOutsideEls = document.querySelectorAll(".".concat(ignoreClickOutsideClass));
              ignoredClickOutsideEls.forEach((function(el) {
                if (el.contains(clickedEl)) {
                  isIgnored = true;
                  return;
                }
              }));
            }
            if (clickedEl !== targetEl && !targetEl.contains(clickedEl) && !this._triggerEl.contains(clickedEl) && !isIgnored && this.isVisible()) {
              this.hide();
            }
          };
          Dropdown.prototype._getTriggerEvents = function() {
            switch (this._options.triggerType) {
             case "hover":
              return {
                showEvents: [ "mouseenter", "click" ],
                hideEvents: [ "mouseleave" ]
              };

             case "click":
              return {
                showEvents: [ "click" ],
                hideEvents: []
              };

             case "none":
              return {
                showEvents: [],
                hideEvents: []
              };

             default:
              return {
                showEvents: [ "click" ],
                hideEvents: []
              };
            }
          };
          Dropdown.prototype.toggle = function() {
            if (this.isVisible()) {
              this.hide();
            } else {
              this.show();
            }
            this._options.onToggle(this);
          };
          Dropdown.prototype.isVisible = function() {
            return this._visible;
          };
          Dropdown.prototype.show = function() {
            this._targetEl.classList.remove("hidden");
            this._targetEl.classList.add("block");
            this._popperInstance.setOptions((function(options) {
              return __assign(__assign({}, options), {
                modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [ {
                  name: "eventListeners",
                  enabled: true
                } ], false)
              });
            }));
            this._setupClickOutsideListener();
            this._popperInstance.update();
            this._visible = true;
            this._options.onShow(this);
          };
          Dropdown.prototype.hide = function() {
            this._targetEl.classList.remove("block");
            this._targetEl.classList.add("hidden");
            this._popperInstance.setOptions((function(options) {
              return __assign(__assign({}, options), {
                modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [ {
                  name: "eventListeners",
                  enabled: false
                } ], false)
              });
            }));
            this._visible = false;
            this._removeClickOutsideListener();
            this._options.onHide(this);
          };
          Dropdown.prototype.updateOnShow = function(callback) {
            this._options.onShow = callback;
          };
          Dropdown.prototype.updateOnHide = function(callback) {
            this._options.onHide = callback;
          };
          Dropdown.prototype.updateOnToggle = function(callback) {
            this._options.onToggle = callback;
          };
          return Dropdown;
        }();
        function initDropdowns() {
          document.querySelectorAll("[data-dropdown-toggle]").forEach((function($triggerEl) {
            var dropdownId = $triggerEl.getAttribute("data-dropdown-toggle");
            var $dropdownEl = document.getElementById(dropdownId);
            if ($dropdownEl) {
              var placement = $triggerEl.getAttribute("data-dropdown-placement");
              var offsetSkidding = $triggerEl.getAttribute("data-dropdown-offset-skidding");
              var offsetDistance = $triggerEl.getAttribute("data-dropdown-offset-distance");
              var triggerType = $triggerEl.getAttribute("data-dropdown-trigger");
              var delay = $triggerEl.getAttribute("data-dropdown-delay");
              var ignoreClickOutsideClass = $triggerEl.getAttribute("data-dropdown-ignore-click-outside-class");
              new Dropdown($dropdownEl, $triggerEl, {
                placement: placement ? placement : Default.placement,
                triggerType: triggerType ? triggerType : Default.triggerType,
                offsetSkidding: offsetSkidding ? parseInt(offsetSkidding) : Default.offsetSkidding,
                offsetDistance: offsetDistance ? parseInt(offsetDistance) : Default.offsetDistance,
                delay: delay ? parseInt(delay) : Default.delay,
                ignoreClickOutsideClass: ignoreClickOutsideClass ? ignoreClickOutsideClass : Default.ignoreClickOutsideClass
              });
            } else {
              console.error('The dropdown element with id "'.concat(dropdownId, '" does not exist. Please check the data-dropdown-toggle attribute.'));
            }
          }));
        }
        exports.initDropdowns = initDropdowns;
        if (typeof window !== "undefined") {
          window.Dropdown = Dropdown;
          window.initDropdowns = initDropdowns;
        }
        exports["default"] = Dropdown;
      },
      311: function(__unused_webpack_module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initFlowbite = void 0;
        var accordion_1 = __webpack_require__(902);
        var carousel_1 = __webpack_require__(33);
        var clipboard_1 = __webpack_require__(673);
        var collapse_1 = __webpack_require__(922);
        var dial_1 = __webpack_require__(556);
        var dismiss_1 = __webpack_require__(791);
        var drawer_1 = __webpack_require__(340);
        var dropdown_1 = __webpack_require__(316);
        var input_counter_1 = __webpack_require__(656);
        var modal_1 = __webpack_require__(16);
        var popover_1 = __webpack_require__(903);
        var tabs_1 = __webpack_require__(247);
        var tooltip_1 = __webpack_require__(671);
        function initFlowbite() {
          (0, accordion_1.initAccordions)();
          (0, collapse_1.initCollapses)();
          (0, carousel_1.initCarousels)();
          (0, dismiss_1.initDismisses)();
          (0, dropdown_1.initDropdowns)();
          (0, modal_1.initModals)();
          (0, drawer_1.initDrawers)();
          (0, tabs_1.initTabs)();
          (0, tooltip_1.initTooltips)();
          (0, popover_1.initPopovers)();
          (0, dial_1.initDials)();
          (0, input_counter_1.initInputCounters)();
          (0, clipboard_1.initCopyClipboards)();
        }
        exports.initFlowbite = initFlowbite;
        if (typeof window !== "undefined") {
          window.initFlowbite = initFlowbite;
        }
      },
      656: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initInputCounters = void 0;
        var instances_1 = __webpack_require__(423);
        var Default = {
          minValue: null,
          maxValue: null,
          onIncrement: function() {},
          onDecrement: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var InputCounter = function() {
          function InputCounter(targetEl, incrementEl, decrementEl, options, instanceOptions) {
            if (targetEl === void 0) {
              targetEl = null;
            }
            if (incrementEl === void 0) {
              incrementEl = null;
            }
            if (decrementEl === void 0) {
              decrementEl = null;
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
            this._targetEl = targetEl;
            this._incrementEl = incrementEl;
            this._decrementEl = decrementEl;
            this._options = __assign(__assign({}, Default), options);
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("InputCounter", this, this._instanceId, instanceOptions.override);
          }
          InputCounter.prototype.init = function() {
            var _this = this;
            if (this._targetEl && !this._initialized) {
              this._inputHandler = function(event) {
                {
                  var target = event.target;
                  if (!/^\d*$/.test(target.value)) {
                    target.value = target.value.replace(/[^\d]/g, "");
                  }
                  if (_this._options.maxValue !== null && parseInt(target.value) > _this._options.maxValue) {
                    target.value = _this._options.maxValue.toString();
                  }
                  if (_this._options.minValue !== null && parseInt(target.value) < _this._options.minValue) {
                    target.value = _this._options.minValue.toString();
                  }
                }
              };
              this._incrementClickHandler = function() {
                _this.increment();
              };
              this._decrementClickHandler = function() {
                _this.decrement();
              };
              this._targetEl.addEventListener("input", this._inputHandler);
              if (this._incrementEl) {
                this._incrementEl.addEventListener("click", this._incrementClickHandler);
              }
              if (this._decrementEl) {
                this._decrementEl.addEventListener("click", this._decrementClickHandler);
              }
              this._initialized = true;
            }
          };
          InputCounter.prototype.destroy = function() {
            if (this._targetEl && this._initialized) {
              this._targetEl.removeEventListener("input", this._inputHandler);
              if (this._incrementEl) {
                this._incrementEl.removeEventListener("click", this._incrementClickHandler);
              }
              if (this._decrementEl) {
                this._decrementEl.removeEventListener("click", this._decrementClickHandler);
              }
              this._initialized = false;
            }
          };
          InputCounter.prototype.removeInstance = function() {
            instances_1.default.removeInstance("InputCounter", this._instanceId);
          };
          InputCounter.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          InputCounter.prototype.getCurrentValue = function() {
            return parseInt(this._targetEl.value) || 0;
          };
          InputCounter.prototype.increment = function() {
            if (this._options.maxValue !== null && this.getCurrentValue() >= this._options.maxValue) {
              return;
            }
            this._targetEl.value = (this.getCurrentValue() + 1).toString();
            this._options.onIncrement(this);
          };
          InputCounter.prototype.decrement = function() {
            if (this._options.minValue !== null && this.getCurrentValue() <= this._options.minValue) {
              return;
            }
            this._targetEl.value = (this.getCurrentValue() - 1).toString();
            this._options.onDecrement(this);
          };
          InputCounter.prototype.updateOnIncrement = function(callback) {
            this._options.onIncrement = callback;
          };
          InputCounter.prototype.updateOnDecrement = function(callback) {
            this._options.onDecrement = callback;
          };
          return InputCounter;
        }();
        function initInputCounters() {
          document.querySelectorAll("[data-input-counter]").forEach((function($targetEl) {
            var targetId = $targetEl.id;
            var $incrementEl = document.querySelector('[data-input-counter-increment="' + targetId + '"]');
            var $decrementEl = document.querySelector('[data-input-counter-decrement="' + targetId + '"]');
            var minValue = $targetEl.getAttribute("data-input-counter-min");
            var maxValue = $targetEl.getAttribute("data-input-counter-max");
            if ($targetEl) {
              if (!instances_1.default.instanceExists("InputCounter", $targetEl.getAttribute("id"))) {
                new InputCounter($targetEl, $incrementEl ? $incrementEl : null, $decrementEl ? $decrementEl : null, {
                  minValue: minValue ? parseInt(minValue) : null,
                  maxValue: maxValue ? parseInt(maxValue) : null
                });
              }
            } else {
              console.error('The target element with id "'.concat(targetId, '" does not exist. Please check the data-input-counter attribute.'));
            }
          }));
        }
        exports.initInputCounters = initInputCounters;
        if (typeof window !== "undefined") {
          window.InputCounter = InputCounter;
          window.initInputCounters = initInputCounters;
        }
        exports["default"] = InputCounter;
      },
      16: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initModals = void 0;
        var instances_1 = __webpack_require__(423);
        var Default = {
          placement: "center",
          backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
          backdrop: "dynamic",
          closable: true,
          onHide: function() {},
          onShow: function() {},
          onToggle: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var Modal = function() {
          function Modal(targetEl, options, instanceOptions) {
            if (targetEl === void 0) {
              targetEl = null;
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._eventListenerInstances = [];
            this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
            this._targetEl = targetEl;
            this._options = __assign(__assign({}, Default), options);
            this._isHidden = true;
            this._backdropEl = null;
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("Modal", this, this._instanceId, instanceOptions.override);
          }
          Modal.prototype.init = function() {
            var _this = this;
            if (this._targetEl && !this._initialized) {
              this._getPlacementClasses().map((function(c) {
                _this._targetEl.classList.add(c);
              }));
              this._initialized = true;
            }
          };
          Modal.prototype.destroy = function() {
            if (this._initialized) {
              this.removeAllEventListenerInstances();
              this._destroyBackdropEl();
              this._initialized = false;
            }
          };
          Modal.prototype.removeInstance = function() {
            instances_1.default.removeInstance("Modal", this._instanceId);
          };
          Modal.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          Modal.prototype._createBackdrop = function() {
            var _a;
            if (this._isHidden) {
              var backdropEl = document.createElement("div");
              backdropEl.setAttribute("modal-backdrop", "");
              (_a = backdropEl.classList).add.apply(_a, this._options.backdropClasses.split(" "));
              document.querySelector("body").append(backdropEl);
              this._backdropEl = backdropEl;
            }
          };
          Modal.prototype._destroyBackdropEl = function() {
            if (!this._isHidden) {
              document.querySelector("[modal-backdrop]").remove();
            }
          };
          Modal.prototype._setupModalCloseEventListeners = function() {
            var _this = this;
            if (this._options.backdrop === "dynamic") {
              this._clickOutsideEventListener = function(ev) {
                _this._handleOutsideClick(ev.target);
              };
              this._targetEl.addEventListener("click", this._clickOutsideEventListener, true);
            }
            this._keydownEventListener = function(ev) {
              if (ev.key === "Escape") {
                _this.hide();
              }
            };
            document.body.addEventListener("keydown", this._keydownEventListener, true);
          };
          Modal.prototype._removeModalCloseEventListeners = function() {
            if (this._options.backdrop === "dynamic") {
              this._targetEl.removeEventListener("click", this._clickOutsideEventListener, true);
            }
            document.body.removeEventListener("keydown", this._keydownEventListener, true);
          };
          Modal.prototype._handleOutsideClick = function(target) {
            if (target === this._targetEl || target === this._backdropEl && this.isVisible()) {
              this.hide();
            }
          };
          Modal.prototype._getPlacementClasses = function() {
            switch (this._options.placement) {
             case "top-left":
              return [ "justify-start", "items-start" ];

             case "top-center":
              return [ "justify-center", "items-start" ];

             case "top-right":
              return [ "justify-end", "items-start" ];

             case "center-left":
              return [ "justify-start", "items-center" ];

             case "center":
              return [ "justify-center", "items-center" ];

             case "center-right":
              return [ "justify-end", "items-center" ];

             case "bottom-left":
              return [ "justify-start", "items-end" ];

             case "bottom-center":
              return [ "justify-center", "items-end" ];

             case "bottom-right":
              return [ "justify-end", "items-end" ];

             default:
              return [ "justify-center", "items-center" ];
            }
          };
          Modal.prototype.toggle = function() {
            if (this._isHidden) {
              this.show();
            } else {
              this.hide();
            }
            this._options.onToggle(this);
          };
          Modal.prototype.show = function() {
            if (this.isHidden) {
              this._targetEl.classList.add("flex");
              this._targetEl.classList.remove("hidden");
              this._targetEl.setAttribute("aria-modal", "true");
              this._targetEl.setAttribute("role", "dialog");
              this._targetEl.removeAttribute("aria-hidden");
              this._createBackdrop();
              this._isHidden = false;
              if (this._options.closable) {
                this._setupModalCloseEventListeners();
              }
              document.body.classList.add("overflow-hidden");
              this._options.onShow(this);
            }
          };
          Modal.prototype.hide = function() {
            if (this.isVisible) {
              this._targetEl.classList.add("hidden");
              this._targetEl.classList.remove("flex");
              this._targetEl.setAttribute("aria-hidden", "true");
              this._targetEl.removeAttribute("aria-modal");
              this._targetEl.removeAttribute("role");
              this._destroyBackdropEl();
              this._isHidden = true;
              document.body.classList.remove("overflow-hidden");
              if (this._options.closable) {
                this._removeModalCloseEventListeners();
              }
              this._options.onHide(this);
            }
          };
          Modal.prototype.isVisible = function() {
            return !this._isHidden;
          };
          Modal.prototype.isHidden = function() {
            return this._isHidden;
          };
          Modal.prototype.addEventListenerInstance = function(element, type, handler) {
            this._eventListenerInstances.push({
              element: element,
              type: type,
              handler: handler
            });
          };
          Modal.prototype.removeAllEventListenerInstances = function() {
            this._eventListenerInstances.map((function(eventListenerInstance) {
              eventListenerInstance.element.removeEventListener(eventListenerInstance.type, eventListenerInstance.handler);
            }));
            this._eventListenerInstances = [];
          };
          Modal.prototype.getAllEventListenerInstances = function() {
            return this._eventListenerInstances;
          };
          Modal.prototype.updateOnShow = function(callback) {
            this._options.onShow = callback;
          };
          Modal.prototype.updateOnHide = function(callback) {
            this._options.onHide = callback;
          };
          Modal.prototype.updateOnToggle = function(callback) {
            this._options.onToggle = callback;
          };
          return Modal;
        }();
        function initModals() {
          document.querySelectorAll("[data-modal-target]").forEach((function($triggerEl) {
            var modalId = $triggerEl.getAttribute("data-modal-target");
            var $modalEl = document.getElementById(modalId);
            if ($modalEl) {
              var placement = $modalEl.getAttribute("data-modal-placement");
              var backdrop = $modalEl.getAttribute("data-modal-backdrop");
              new Modal($modalEl, {
                placement: placement ? placement : Default.placement,
                backdrop: backdrop ? backdrop : Default.backdrop
              });
            } else {
              console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
            }
          }));
          document.querySelectorAll("[data-modal-toggle]").forEach((function($triggerEl) {
            var modalId = $triggerEl.getAttribute("data-modal-toggle");
            var $modalEl = document.getElementById(modalId);
            if ($modalEl) {
              var modal_1 = instances_1.default.getInstance("Modal", modalId);
              if (modal_1) {
                var toggleModal = function() {
                  modal_1.toggle();
                };
                $triggerEl.addEventListener("click", toggleModal);
                modal_1.addEventListenerInstance($triggerEl, "click", toggleModal);
              } else {
                console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
              }
            } else {
              console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"));
            }
          }));
          document.querySelectorAll("[data-modal-show]").forEach((function($triggerEl) {
            var modalId = $triggerEl.getAttribute("data-modal-show");
            var $modalEl = document.getElementById(modalId);
            if ($modalEl) {
              var modal_2 = instances_1.default.getInstance("Modal", modalId);
              if (modal_2) {
                var showModal = function() {
                  modal_2.show();
                };
                $triggerEl.addEventListener("click", showModal);
                modal_2.addEventListenerInstance($triggerEl, "click", showModal);
              } else {
                console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
              }
            } else {
              console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
            }
          }));
          document.querySelectorAll("[data-modal-hide]").forEach((function($triggerEl) {
            var modalId = $triggerEl.getAttribute("data-modal-hide");
            var $modalEl = document.getElementById(modalId);
            if ($modalEl) {
              var modal_3 = instances_1.default.getInstance("Modal", modalId);
              if (modal_3) {
                var hideModal = function() {
                  modal_3.hide();
                };
                $triggerEl.addEventListener("click", hideModal);
                modal_3.addEventListenerInstance($triggerEl, "click", hideModal);
              } else {
                console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
              }
            } else {
              console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
            }
          }));
        }
        exports.initModals = initModals;
        if (typeof window !== "undefined") {
          window.Modal = Modal;
          window.initModals = initModals;
        }
        exports["default"] = Modal;
      },
      903: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
          if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initPopovers = void 0;
        var core_1 = __webpack_require__(853);
        var instances_1 = __webpack_require__(423);
        var Default = {
          placement: "top",
          offset: 10,
          triggerType: "hover",
          onShow: function() {},
          onHide: function() {},
          onToggle: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var Popover = function() {
          function Popover(targetEl, triggerEl, options, instanceOptions) {
            if (targetEl === void 0) {
              targetEl = null;
            }
            if (triggerEl === void 0) {
              triggerEl = null;
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
            this._targetEl = targetEl;
            this._triggerEl = triggerEl;
            this._options = __assign(__assign({}, Default), options);
            this._popperInstance = null;
            this._visible = false;
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("Popover", this, instanceOptions.id ? instanceOptions.id : this._targetEl.id, instanceOptions.override);
          }
          Popover.prototype.init = function() {
            if (this._triggerEl && this._targetEl && !this._initialized) {
              this._setupEventListeners();
              this._popperInstance = this._createPopperInstance();
              this._initialized = true;
            }
          };
          Popover.prototype.destroy = function() {
            var _this = this;
            if (this._initialized) {
              var triggerEvents = this._getTriggerEvents();
              triggerEvents.showEvents.forEach((function(ev) {
                _this._triggerEl.removeEventListener(ev, _this._showHandler);
                _this._targetEl.removeEventListener(ev, _this._showHandler);
              }));
              triggerEvents.hideEvents.forEach((function(ev) {
                _this._triggerEl.removeEventListener(ev, _this._hideHandler);
                _this._targetEl.removeEventListener(ev, _this._hideHandler);
              }));
              this._removeKeydownListener();
              this._removeClickOutsideListener();
              if (this._popperInstance) {
                this._popperInstance.destroy();
              }
              this._initialized = false;
            }
          };
          Popover.prototype.removeInstance = function() {
            instances_1.default.removeInstance("Popover", this._instanceId);
          };
          Popover.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          Popover.prototype._setupEventListeners = function() {
            var _this = this;
            var triggerEvents = this._getTriggerEvents();
            this._showHandler = function() {
              _this.show();
            };
            this._hideHandler = function() {
              setTimeout((function() {
                if (!_this._targetEl.matches(":hover")) {
                  _this.hide();
                }
              }), 100);
            };
            triggerEvents.showEvents.forEach((function(ev) {
              _this._triggerEl.addEventListener(ev, _this._showHandler);
              _this._targetEl.addEventListener(ev, _this._showHandler);
            }));
            triggerEvents.hideEvents.forEach((function(ev) {
              _this._triggerEl.addEventListener(ev, _this._hideHandler);
              _this._targetEl.addEventListener(ev, _this._hideHandler);
            }));
          };
          Popover.prototype._createPopperInstance = function() {
            return (0, core_1.createPopper)(this._triggerEl, this._targetEl, {
              placement: this._options.placement,
              modifiers: [ {
                name: "offset",
                options: {
                  offset: [ 0, this._options.offset ]
                }
              } ]
            });
          };
          Popover.prototype._getTriggerEvents = function() {
            switch (this._options.triggerType) {
             case "hover":
              return {
                showEvents: [ "mouseenter", "focus" ],
                hideEvents: [ "mouseleave", "blur" ]
              };

             case "click":
              return {
                showEvents: [ "click", "focus" ],
                hideEvents: [ "focusout", "blur" ]
              };

             case "none":
              return {
                showEvents: [],
                hideEvents: []
              };

             default:
              return {
                showEvents: [ "mouseenter", "focus" ],
                hideEvents: [ "mouseleave", "blur" ]
              };
            }
          };
          Popover.prototype._setupKeydownListener = function() {
            var _this = this;
            this._keydownEventListener = function(ev) {
              if (ev.key === "Escape") {
                _this.hide();
              }
            };
            document.body.addEventListener("keydown", this._keydownEventListener, true);
          };
          Popover.prototype._removeKeydownListener = function() {
            document.body.removeEventListener("keydown", this._keydownEventListener, true);
          };
          Popover.prototype._setupClickOutsideListener = function() {
            var _this = this;
            this._clickOutsideEventListener = function(ev) {
              _this._handleClickOutside(ev, _this._targetEl);
            };
            document.body.addEventListener("click", this._clickOutsideEventListener, true);
          };
          Popover.prototype._removeClickOutsideListener = function() {
            document.body.removeEventListener("click", this._clickOutsideEventListener, true);
          };
          Popover.prototype._handleClickOutside = function(ev, targetEl) {
            var clickedEl = ev.target;
            if (clickedEl !== targetEl && !targetEl.contains(clickedEl) && !this._triggerEl.contains(clickedEl) && this.isVisible()) {
              this.hide();
            }
          };
          Popover.prototype.isVisible = function() {
            return this._visible;
          };
          Popover.prototype.toggle = function() {
            if (this.isVisible()) {
              this.hide();
            } else {
              this.show();
            }
            this._options.onToggle(this);
          };
          Popover.prototype.show = function() {
            this._targetEl.classList.remove("opacity-0", "invisible");
            this._targetEl.classList.add("opacity-100", "visible");
            this._popperInstance.setOptions((function(options) {
              return __assign(__assign({}, options), {
                modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [ {
                  name: "eventListeners",
                  enabled: true
                } ], false)
              });
            }));
            this._setupClickOutsideListener();
            this._setupKeydownListener();
            this._popperInstance.update();
            this._visible = true;
            this._options.onShow(this);
          };
          Popover.prototype.hide = function() {
            this._targetEl.classList.remove("opacity-100", "visible");
            this._targetEl.classList.add("opacity-0", "invisible");
            this._popperInstance.setOptions((function(options) {
              return __assign(__assign({}, options), {
                modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [ {
                  name: "eventListeners",
                  enabled: false
                } ], false)
              });
            }));
            this._removeClickOutsideListener();
            this._removeKeydownListener();
            this._visible = false;
            this._options.onHide(this);
          };
          Popover.prototype.updateOnShow = function(callback) {
            this._options.onShow = callback;
          };
          Popover.prototype.updateOnHide = function(callback) {
            this._options.onHide = callback;
          };
          Popover.prototype.updateOnToggle = function(callback) {
            this._options.onToggle = callback;
          };
          return Popover;
        }();
        function initPopovers() {
          document.querySelectorAll("[data-popover-target]").forEach((function($triggerEl) {
            var popoverID = $triggerEl.getAttribute("data-popover-target");
            var $popoverEl = document.getElementById(popoverID);
            if ($popoverEl) {
              var triggerType = $triggerEl.getAttribute("data-popover-trigger");
              var placement = $triggerEl.getAttribute("data-popover-placement");
              var offset = $triggerEl.getAttribute("data-popover-offset");
              new Popover($popoverEl, $triggerEl, {
                placement: placement ? placement : Default.placement,
                offset: offset ? parseInt(offset) : Default.offset,
                triggerType: triggerType ? triggerType : Default.triggerType
              });
            } else {
              console.error('The popover element with id "'.concat(popoverID, '" does not exist. Please check the data-popover-target attribute.'));
            }
          }));
        }
        exports.initPopovers = initPopovers;
        if (typeof window !== "undefined") {
          window.Popover = Popover;
          window.initPopovers = initPopovers;
        }
        exports["default"] = Popover;
      },
      247: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initTabs = void 0;
        var instances_1 = __webpack_require__(423);
        var Default = {
          defaultTabId: null,
          activeClasses: "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
          inactiveClasses: "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
          onShow: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var Tabs = function() {
          function Tabs(tabsEl, items, options, instanceOptions) {
            if (tabsEl === void 0) {
              tabsEl = null;
            }
            if (items === void 0) {
              items = [];
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._instanceId = instanceOptions.id ? instanceOptions.id : tabsEl.id;
            this._tabsEl = tabsEl;
            this._items = items;
            this._activeTab = options ? this.getTab(options.defaultTabId) : null;
            this._options = __assign(__assign({}, Default), options);
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("Tabs", this, this._tabsEl.id, true);
            instances_1.default.addInstance("Tabs", this, this._instanceId, instanceOptions.override);
          }
          Tabs.prototype.init = function() {
            var _this = this;
            if (this._items.length && !this._initialized) {
              if (!this._activeTab) {
                this.setActiveTab(this._items[0]);
              }
              this.show(this._activeTab.id, true);
              this._items.map((function(tab) {
                tab.triggerEl.addEventListener("click", (function(event) {
                  event.preventDefault();
                  _this.show(tab.id);
                }));
              }));
            }
          };
          Tabs.prototype.destroy = function() {
            if (this._initialized) {
              this._initialized = false;
            }
          };
          Tabs.prototype.removeInstance = function() {
            this.destroy();
            instances_1.default.removeInstance("Tabs", this._instanceId);
          };
          Tabs.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          Tabs.prototype.getActiveTab = function() {
            return this._activeTab;
          };
          Tabs.prototype.setActiveTab = function(tab) {
            this._activeTab = tab;
          };
          Tabs.prototype.getTab = function(id) {
            return this._items.filter((function(t) {
              return t.id === id;
            }))[0];
          };
          Tabs.prototype.show = function(id, forceShow) {
            var _a, _b;
            var _this = this;
            if (forceShow === void 0) {
              forceShow = false;
            }
            var tab = this.getTab(id);
            if (tab === this._activeTab && !forceShow) {
              return;
            }
            this._items.map((function(t) {
              var _a, _b;
              if (t !== tab) {
                (_a = t.triggerEl.classList).remove.apply(_a, _this._options.activeClasses.split(" "));
                (_b = t.triggerEl.classList).add.apply(_b, _this._options.inactiveClasses.split(" "));
                t.targetEl.classList.add("hidden");
                t.triggerEl.setAttribute("aria-selected", "false");
              }
            }));
            (_a = tab.triggerEl.classList).add.apply(_a, this._options.activeClasses.split(" "));
            (_b = tab.triggerEl.classList).remove.apply(_b, this._options.inactiveClasses.split(" "));
            tab.triggerEl.setAttribute("aria-selected", "true");
            tab.targetEl.classList.remove("hidden");
            this.setActiveTab(tab);
            this._options.onShow(this, tab);
          };
          Tabs.prototype.updateOnShow = function(callback) {
            this._options.onShow = callback;
          };
          return Tabs;
        }();
        function initTabs() {
          document.querySelectorAll("[data-tabs-toggle]").forEach((function($parentEl) {
            var tabItems = [];
            var activeClasses = $parentEl.getAttribute("data-tabs-active-classes");
            var inactiveClasses = $parentEl.getAttribute("data-tabs-inactive-classes");
            var defaultTabId = null;
            $parentEl.querySelectorAll('[role="tab"]').forEach((function($triggerEl) {
              var isActive = $triggerEl.getAttribute("aria-selected") === "true";
              var tab = {
                id: $triggerEl.getAttribute("data-tabs-target"),
                triggerEl: $triggerEl,
                targetEl: document.querySelector($triggerEl.getAttribute("data-tabs-target"))
              };
              tabItems.push(tab);
              if (isActive) {
                defaultTabId = tab.id;
              }
            }));
            new Tabs($parentEl, tabItems, {
              defaultTabId: defaultTabId,
              activeClasses: activeClasses ? activeClasses : Default.activeClasses,
              inactiveClasses: inactiveClasses ? inactiveClasses : Default.inactiveClasses
            });
          }));
        }
        exports.initTabs = initTabs;
        if (typeof window !== "undefined") {
          window.Tabs = Tabs;
          window.initTabs = initTabs;
        }
        exports["default"] = Tabs;
      },
      671: function(__unused_webpack_module, exports, __webpack_require__) {
        var __assign = this && this.__assign || function() {
          __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
          if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.initTooltips = void 0;
        var core_1 = __webpack_require__(853);
        var instances_1 = __webpack_require__(423);
        var Default = {
          placement: "top",
          triggerType: "hover",
          onShow: function() {},
          onHide: function() {},
          onToggle: function() {}
        };
        var DefaultInstanceOptions = {
          id: null,
          override: true
        };
        var Tooltip = function() {
          function Tooltip(targetEl, triggerEl, options, instanceOptions) {
            if (targetEl === void 0) {
              targetEl = null;
            }
            if (triggerEl === void 0) {
              triggerEl = null;
            }
            if (options === void 0) {
              options = Default;
            }
            if (instanceOptions === void 0) {
              instanceOptions = DefaultInstanceOptions;
            }
            this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
            this._targetEl = targetEl;
            this._triggerEl = triggerEl;
            this._options = __assign(__assign({}, Default), options);
            this._popperInstance = null;
            this._visible = false;
            this._initialized = false;
            this.init();
            instances_1.default.addInstance("Tooltip", this, this._instanceId, instanceOptions.override);
          }
          Tooltip.prototype.init = function() {
            if (this._triggerEl && this._targetEl && !this._initialized) {
              this._setupEventListeners();
              this._popperInstance = this._createPopperInstance();
              this._initialized = true;
            }
          };
          Tooltip.prototype.destroy = function() {
            var _this = this;
            if (this._initialized) {
              var triggerEvents = this._getTriggerEvents();
              triggerEvents.showEvents.forEach((function(ev) {
                _this._triggerEl.removeEventListener(ev, _this._showHandler);
              }));
              triggerEvents.hideEvents.forEach((function(ev) {
                _this._triggerEl.removeEventListener(ev, _this._hideHandler);
              }));
              this._removeKeydownListener();
              this._removeClickOutsideListener();
              if (this._popperInstance) {
                this._popperInstance.destroy();
              }
              this._initialized = false;
            }
          };
          Tooltip.prototype.removeInstance = function() {
            instances_1.default.removeInstance("Tooltip", this._instanceId);
          };
          Tooltip.prototype.destroyAndRemoveInstance = function() {
            this.destroy();
            this.removeInstance();
          };
          Tooltip.prototype._setupEventListeners = function() {
            var _this = this;
            var triggerEvents = this._getTriggerEvents();
            this._showHandler = function() {
              _this.show();
            };
            this._hideHandler = function() {
              _this.hide();
            };
            triggerEvents.showEvents.forEach((function(ev) {
              _this._triggerEl.addEventListener(ev, _this._showHandler);
            }));
            triggerEvents.hideEvents.forEach((function(ev) {
              _this._triggerEl.addEventListener(ev, _this._hideHandler);
            }));
          };
          Tooltip.prototype._createPopperInstance = function() {
            return (0, core_1.createPopper)(this._triggerEl, this._targetEl, {
              placement: this._options.placement,
              modifiers: [ {
                name: "offset",
                options: {
                  offset: [ 0, 8 ]
                }
              } ]
            });
          };
          Tooltip.prototype._getTriggerEvents = function() {
            switch (this._options.triggerType) {
             case "hover":
              return {
                showEvents: [ "mouseenter", "focus" ],
                hideEvents: [ "mouseleave", "blur" ]
              };

             case "click":
              return {
                showEvents: [ "click", "focus" ],
                hideEvents: [ "focusout", "blur" ]
              };

             case "none":
              return {
                showEvents: [],
                hideEvents: []
              };

             default:
              return {
                showEvents: [ "mouseenter", "focus" ],
                hideEvents: [ "mouseleave", "blur" ]
              };
            }
          };
          Tooltip.prototype._setupKeydownListener = function() {
            var _this = this;
            this._keydownEventListener = function(ev) {
              if (ev.key === "Escape") {
                _this.hide();
              }
            };
            document.body.addEventListener("keydown", this._keydownEventListener, true);
          };
          Tooltip.prototype._removeKeydownListener = function() {
            document.body.removeEventListener("keydown", this._keydownEventListener, true);
          };
          Tooltip.prototype._setupClickOutsideListener = function() {
            var _this = this;
            this._clickOutsideEventListener = function(ev) {
              _this._handleClickOutside(ev, _this._targetEl);
            };
            document.body.addEventListener("click", this._clickOutsideEventListener, true);
          };
          Tooltip.prototype._removeClickOutsideListener = function() {
            document.body.removeEventListener("click", this._clickOutsideEventListener, true);
          };
          Tooltip.prototype._handleClickOutside = function(ev, targetEl) {
            var clickedEl = ev.target;
            if (clickedEl !== targetEl && !targetEl.contains(clickedEl) && !this._triggerEl.contains(clickedEl) && this.isVisible()) {
              this.hide();
            }
          };
          Tooltip.prototype.isVisible = function() {
            return this._visible;
          };
          Tooltip.prototype.toggle = function() {
            if (this.isVisible()) {
              this.hide();
            } else {
              this.show();
            }
          };
          Tooltip.prototype.show = function() {
            this._targetEl.classList.remove("opacity-0", "invisible");
            this._targetEl.classList.add("opacity-100", "visible");
            this._popperInstance.setOptions((function(options) {
              return __assign(__assign({}, options), {
                modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [ {
                  name: "eventListeners",
                  enabled: true
                } ], false)
              });
            }));
            this._setupClickOutsideListener();
            this._setupKeydownListener();
            this._popperInstance.update();
            this._visible = true;
            this._options.onShow(this);
          };
          Tooltip.prototype.hide = function() {
            this._targetEl.classList.remove("opacity-100", "visible");
            this._targetEl.classList.add("opacity-0", "invisible");
            this._popperInstance.setOptions((function(options) {
              return __assign(__assign({}, options), {
                modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [ {
                  name: "eventListeners",
                  enabled: false
                } ], false)
              });
            }));
            this._removeClickOutsideListener();
            this._removeKeydownListener();
            this._visible = false;
            this._options.onHide(this);
          };
          Tooltip.prototype.updateOnShow = function(callback) {
            this._options.onShow = callback;
          };
          Tooltip.prototype.updateOnHide = function(callback) {
            this._options.onHide = callback;
          };
          Tooltip.prototype.updateOnToggle = function(callback) {
            this._options.onToggle = callback;
          };
          return Tooltip;
        }();
        function initTooltips() {
          document.querySelectorAll("[data-tooltip-target]").forEach((function($triggerEl) {
            var tooltipId = $triggerEl.getAttribute("data-tooltip-target");
            var $tooltipEl = document.getElementById(tooltipId);
            if ($tooltipEl) {
              var triggerType = $triggerEl.getAttribute("data-tooltip-trigger");
              var placement = $triggerEl.getAttribute("data-tooltip-placement");
              new Tooltip($tooltipEl, $triggerEl, {
                placement: placement ? placement : Default.placement,
                triggerType: triggerType ? triggerType : Default.triggerType
              });
            } else {
              console.error('The tooltip element with id "'.concat(tooltipId, '" does not exist. Please check the data-tooltip-target attribute.'));
            }
          }));
        }
        exports.initTooltips = initTooltips;
        if (typeof window !== "undefined") {
          window.Tooltip = Tooltip;
          window.initTooltips = initTooltips;
        }
        exports["default"] = Tooltip;
      },
      947: function(__unused_webpack_module, exports) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var Events = function() {
          function Events(eventType, eventFunctions) {
            if (eventFunctions === void 0) {
              eventFunctions = [];
            }
            this._eventType = eventType;
            this._eventFunctions = eventFunctions;
          }
          Events.prototype.init = function() {
            var _this = this;
            this._eventFunctions.forEach((function(eventFunction) {
              if (typeof window !== "undefined") {
                window.addEventListener(_this._eventType, eventFunction);
              }
            }));
          };
          return Events;
        }();
        exports["default"] = Events;
      },
      423: function(__unused_webpack_module, exports) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var Instances = function() {
          function Instances() {
            this._instances = {
              Accordion: {},
              Carousel: {},
              Collapse: {},
              Dial: {},
              Dismiss: {},
              Drawer: {},
              Dropdown: {},
              Modal: {},
              Popover: {},
              Tabs: {},
              Tooltip: {},
              InputCounter: {},
              CopyClipboard: {}
            };
          }
          Instances.prototype.addInstance = function(component, instance, id, override) {
            if (override === void 0) {
              override = false;
            }
            if (!this._instances[component]) {
              console.warn("Flowbite: Component ".concat(component, " does not exist."));
              return false;
            }
            if (this._instances[component][id] && !override) {
              console.warn("Flowbite: Instance with ID ".concat(id, " already exists."));
              return;
            }
            if (override && this._instances[component][id]) {
              this._instances[component][id].destroyAndRemoveInstance();
            }
            this._instances[component][id ? id : this._generateRandomId()] = instance;
          };
          Instances.prototype.getAllInstances = function() {
            return this._instances;
          };
          Instances.prototype.getInstances = function(component) {
            if (!this._instances[component]) {
              console.warn("Flowbite: Component ".concat(component, " does not exist."));
              return false;
            }
            return this._instances[component];
          };
          Instances.prototype.getInstance = function(component, id) {
            if (!this._componentAndInstanceCheck(component, id)) {
              return;
            }
            if (!this._instances[component][id]) {
              console.warn("Flowbite: Instance with ID ".concat(id, " does not exist."));
              return;
            }
            return this._instances[component][id];
          };
          Instances.prototype.destroyAndRemoveInstance = function(component, id) {
            if (!this._componentAndInstanceCheck(component, id)) {
              return;
            }
            this.destroyInstanceObject(component, id);
            this.removeInstance(component, id);
          };
          Instances.prototype.removeInstance = function(component, id) {
            if (!this._componentAndInstanceCheck(component, id)) {
              return;
            }
            delete this._instances[component][id];
          };
          Instances.prototype.destroyInstanceObject = function(component, id) {
            if (!this._componentAndInstanceCheck(component, id)) {
              return;
            }
            this._instances[component][id].destroy();
          };
          Instances.prototype.instanceExists = function(component, id) {
            if (!this._instances[component]) {
              return false;
            }
            if (!this._instances[component][id]) {
              return false;
            }
            return true;
          };
          Instances.prototype._generateRandomId = function() {
            return Math.random().toString(36).substr(2, 9);
          };
          Instances.prototype._componentAndInstanceCheck = function(component, id) {
            if (!this._instances[component]) {
              console.warn("Flowbite: Component ".concat(component, " does not exist."));
              return false;
            }
            if (!this._instances[component][id]) {
              console.warn("Flowbite: Instance with ID ".concat(id, " does not exist."));
              return false;
            }
            return true;
          };
          return Instances;
        }();
        var instances = new Instances;
        exports["default"] = instances;
        if (typeof window !== "undefined") {
          window.FlowbiteInstances = instances;
        }
      }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
      var cachedModule = __webpack_module_cache__[moduleId];
      if (cachedModule !== undefined) {
        return cachedModule.exports;
      }
      var module = __webpack_module_cache__[moduleId] = {
        exports: {}
      };
      __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      return module.exports;
    }
    !function() {
      __webpack_require__.d = function(exports, definition) {
        for (var key in definition) {
          if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key]
            });
          }
        }
      };
    }();
    !function() {
      __webpack_require__.o = function(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      };
    }();
    !function() {
      __webpack_require__.r = function(exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
          });
        }
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
      };
    }();
    var __webpack_exports__ = {};
    !function() {
      var exports = __webpack_exports__;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var accordion_1 = __webpack_require__(902);
      var carousel_1 = __webpack_require__(33);
      var collapse_1 = __webpack_require__(922);
      var dial_1 = __webpack_require__(556);
      var dismiss_1 = __webpack_require__(791);
      var drawer_1 = __webpack_require__(340);
      var dropdown_1 = __webpack_require__(316);
      var modal_1 = __webpack_require__(16);
      var popover_1 = __webpack_require__(903);
      var tabs_1 = __webpack_require__(247);
      var tooltip_1 = __webpack_require__(671);
      var input_counter_1 = __webpack_require__(656);
      var clipboard_1 = __webpack_require__(673);
      var index_1 = __webpack_require__(311);
      var events_1 = __webpack_require__(947);
      var afterRenderEvent = new Event("turbo:after-stream-render");
      addEventListener("turbo:before-stream-render", (function(event) {
        var originalRender = event.detail.render;
        event.detail.render = function(streamElement) {
          originalRender(streamElement);
          document.dispatchEvent(afterRenderEvent);
        };
      }));
      var turboLoadEvents = new events_1.default("turbo:load", [ index_1.initFlowbite ]);
      turboLoadEvents.init();
      var turboFrameLoadEvents = new events_1.default("turbo:frame-load", [ index_1.initFlowbite ]);
      turboFrameLoadEvents.init();
      var turboStreamLoadEvents = new events_1.default("turbo:after-stream-render", [ index_1.initFlowbite ]);
      turboStreamLoadEvents.init();
      exports["default"] = {
        Accordion: accordion_1.default,
        Carousel: carousel_1.default,
        Collapse: collapse_1.default,
        Dial: dial_1.default,
        Drawer: drawer_1.default,
        Dismiss: dismiss_1.default,
        Dropdown: dropdown_1.default,
        Modal: modal_1.default,
        Popover: popover_1.default,
        Tabs: tabs_1.default,
        Tooltip: tooltip_1.default,
        InputCounter: input_counter_1.default,
        CopyClipboard: clipboard_1.default,
        Events: events_1.default
      };
    }();
    return __webpack_exports__;
  }();
}));

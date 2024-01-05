(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-extended-pdf-viewer', ['exports', '@angular/core', '@angular/common', 'rxjs', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-extended-pdf-viewer'] = {}, global.ng.core, global.ng.common, global.rxjs, global.ng.forms));
}(this, (function (exports, i0, i1, rxjs, i2) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var _isIE11 = typeof window === 'undefined' ? false : !!window.MSInputMethodContext && !!document.documentMode;
    var isEdge = typeof navigator === 'undefined' || /Edge\/\d./i.test(navigator.userAgent);
    var needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
    var pdfjsVersion = '2.9.149';
    var pdfjsBleedingEdgeVersion = '2.10.363';
    function getVersionSuffix(folder) {
        if (folder && folder.includes('bleeding-edge')) {
            return pdfjsBleedingEdgeVersion;
        }
        return pdfjsVersion;
    }
    exports.pdfDefaultOptions = {
        cursorToolOnLoad: 0,
        defaultUrl: '',
        defaultZoomValue: undefined,
        disableHistory: false,
        disablePageLabels: false,
        enablePrintAutoRotate: false,
        enableWebGL: false,
        eventBusDispatchToDOM: false,
        externalLinkRel: 'noopener noreferrer nofollow',
        externalLinkTarget: 0,
        historyUpdateUrl: false,
        imageResourcesPath: './images/',
        maxCanvasPixels: 16777216,
        pdfBugEnabled: false,
        removePageBorders: false,
        renderer: 'canvas',
        renderInteractiveForms: true,
        sidebarViewOnLoad: -1,
        scrollModeOnLoad: -1,
        spreadModeOnLoad: -1,
        textLayerMode: 2,
        useOnlyCssZoom: false,
        viewOnLoad: 0,
        cMapPacked: true,
        cMapUrl: function () { return './' + exports.pdfDefaultOptions.assetsFolder + '/cmaps/'; },
        disableAutoFetch: false,
        disableCreateObjectURL: false,
        disableFontFace: false,
        disableRange: false,
        disableStream: false,
        isEvalSupported: true,
        maxImageSize: -1,
        pdfBug: false,
        postMessageTransfers: true,
        verbosity: 1,
        workerPort: null,
        assetsFolder: 'assets',
        sandboxBundleSrc: function () { return _isIE11 || isEdge || needsES5
            ? './' + exports.pdfDefaultOptions.assetsFolder + '/pdf.sandbox-' + getVersionSuffix(exports.pdfDefaultOptions.assetsFolder) + '-es5.js'
            : './' + exports.pdfDefaultOptions.assetsFolder + '/pdf.sandbox-' + getVersionSuffix(exports.pdfDefaultOptions.assetsFolder) + '.js'; },
        workerSrc: function () { return _isIE11 || isEdge || needsES5
            ? './' + exports.pdfDefaultOptions.assetsFolder + '/pdf.worker-' + getVersionSuffix(exports.pdfDefaultOptions.assetsFolder) + '-es5.js'
            : './' + exports.pdfDefaultOptions.assetsFolder + '/pdf.worker-' + getVersionSuffix(exports.pdfDefaultOptions.assetsFolder) + '.js'; },
        // options specific to ngx-extended-pdf-viewer (as opposed to being used by pdf.js)
        doubleTapZoomFactor: 'page-width'
    };
    if (typeof window !== 'undefined') {
        if (window.pdfDefaultOptions) {
            exports.pdfDefaultOptions = window.pdfDefaultOptions;
        }
        else {
            window.pdfDefaultOptions = exports.pdfDefaultOptions;
        }
    }

    exports.VerbosityLevel = void 0;
    (function (VerbosityLevel) {
        VerbosityLevel[VerbosityLevel["ERRORS"] = 0] = "ERRORS";
        VerbosityLevel[VerbosityLevel["WARNINGS"] = 1] = "WARNINGS";
        VerbosityLevel[VerbosityLevel["INFOS"] = 5] = "INFOS";
    })(exports.VerbosityLevel || (exports.VerbosityLevel = {}));
    ;

    exports.FindState = void 0;
    (function (FindState) {
        FindState[FindState["FOUND"] = 0] = "FOUND";
        FindState[FindState["NOT_FOUND"] = 1] = "NOT_FOUND";
        FindState[FindState["WRAPPED"] = 2] = "WRAPPED";
        FindState[FindState["PENDING"] = 3] = "PENDING";
    })(exports.FindState || (exports.FindState = {}));

    /** List of all field that can be customized */
    var requiredIds = [
        'toolbarViewer',
        'numPages',
        'pageNumber',
        'scaleSelectContainer',
        'customScaleOption',
        'previous',
        'next',
        'zoomIn',
        'zoomOut',
        'viewFind',
        'openFile',
        'print',
        'presentationMode',
        'download',
        'viewBookmark',
        'secondaryToolbar',
        'secondaryToolbarToggle',
        'secondaryToolbarButtonContainer',
        'secondaryPresentationMode',
        'secondaryOpenFile',
        'secondaryPrint',
        'secondaryDownload',
        'secondaryViewBookmark',
        'firstPage',
        'lastPage',
        'pageRotateCw',
        'pageRotateCcw',
        'cursorSelectTool',
        'cursorHandTool',
        'scrollVertical',
        'scrollHorizontal',
        'scrollWrapped',
        'spreadNone',
        'spreadOdd',
        'spreadEven',
        'documentProperties',
        'contextFirstPage',
        'contextLastPage',
        'contextPageRotateCw',
        'contextPageRotateCcw',
        'currentOutlineItem',
        'outerContainer',
        'viewerContainer',
        'sidebarToggle',
        'viewThumbnail',
        'viewOutline',
        'viewAttachments',
        'thumbnailView',
        'outlineView',
        'attachmentsView',
        'outerContainer',
        'sidebarResizer',
        'outlineOptionsContainer',
        'findbar',
        'viewFind',
        'findInput',
        'findInputMultiline',
        'findHighlightAll',
        'findMatchCase',
        'findEntireWord',
        'findMultipleSearchTexts',
        'findIgnoreAccents',
        'findMsg',
        'findResultsCount',
        'findPrevious',
        'findNext',
        'findFuzzy',
        'passwordOverlay',
        'passwordText',
        'password',
        'passwordSubmit',
        'passwordCancel',
        'documentPropertiesOverlay',
        'documentPropertiesClose',
        'fileNameField',
        'fileSizeField',
        'titleField',
        'authorField',
        'subjectField',
        'keywordsField',
        'creationDateField',
        'modificationDateField',
        'creatorField',
        'producerField',
        'versionField',
        'pageCountField',
        'pageSizeField',
        'linearizedField',
        'errorWrapper',
        'errorMessage',
        'errorClose',
        'errorMoreInfo',
        'errorShowMore',
        'errorShowLess',
        'scaleSelectContainer',
        'viewAttachments',
        'viewLayers',
        'viewThumbnail',
        'viewOutline',
    ];
    var PdfDummyComponentsComponent = /** @class */ (function () {
        function PdfDummyComponentsComponent() {
        }
        PdfDummyComponentsComponent.prototype.addMissingStandardWidgets = function () {
            var _this = this;
            this.dummyComponentsContainer = document.getElementsByClassName('dummy-pdf-viewer-components')[0];
            var container = this.dummyComponentsContainer;
            if (container) {
                for (var i = 0; i < container.children.length; i++) {
                    var child = container.firstChild;
                    if (child) {
                        container.removeChild(child);
                    }
                }
            }
            requiredIds.forEach(function (id) {
                if (_this.needsDummyWidget(id)) {
                    var dummy = document.createElement('span');
                    dummy.id = id;
                    dummy.className = 'invisible dummy-component';
                    _this.dummyComponentsContainer.appendChild(dummy);
                }
            });
            if (this.needsDummyWidget('scaleSelect')) {
                var dummy = document.createElement('select');
                dummy.id = 'scaleSelect';
                dummy.className = 'invisible dummy-component';
                this.dummyComponentsContainer.appendChild(dummy);
            }
        };
        PdfDummyComponentsComponent.prototype.needsDummyWidget = function (id) {
            var widget = document.getElementById(id);
            if (!widget) {
                return true;
            }
            return false;
        };
        return PdfDummyComponentsComponent;
    }());
    /** @nocollapse */ PdfDummyComponentsComponent.ɵfac = function PdfDummyComponentsComponent_Factory(t) { return new (t || PdfDummyComponentsComponent)(); };
    /** @nocollapse */ PdfDummyComponentsComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfDummyComponentsComponent, selectors: [["pdf-dummy-components"]], decls: 1, vars: 0, consts: [[1, "invisible", "dummy-pdf-viewer-components"]], template: function PdfDummyComponentsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "span", 0);
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfDummyComponentsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-dummy-components',
                        templateUrl: './pdf-dummy-components.component.html'
                    }]
            }], null, null);
    })();

    var PdfCursorTools;
    (function (PdfCursorTools) {
        PdfCursorTools[PdfCursorTools["SELECT"] = 0] = "SELECT";
        PdfCursorTools[PdfCursorTools["HAND"] = 1] = "HAND";
        PdfCursorTools[PdfCursorTools["ZOOM"] = 2] = "ZOOM";
    })(PdfCursorTools || (PdfCursorTools = {}));

    var PinchOnMobileSupport = /** @class */ (function () {
        function PinchOnMobileSupport(_zone) {
            this._zone = _zone;
            this.startX = 0;
            this.startY = 0;
            this.initialPinchDistance = 0;
            this.pinchScale = 1;
            this.boundOnViewerTouchStart = this.onViewerTouchStart.bind(this);
            this.boundOnViewerTouchMove = this.onViewerTouchMove.bind(this);
            this.boundOnViewerTouchEnd = this.onViewerTouchEnd.bind(this);
            this.initializePinchZoom();
        }
        PinchOnMobileSupport.prototype.isMobile = function () {
            return 'ontouchstart' in document.documentElement;
        };
        PinchOnMobileSupport.prototype.onViewerTouchStart = function (event) {
            this.initialPinchDistance = 0;
            if (event.touches.length === 2) {
                var container = document.getElementById('viewerContainer');
                var rect = container.getBoundingClientRect();
                if (event.touches[0].pageX >= rect.left && event.touches[0].pageX <= rect.right) {
                    if (event.touches[0].pageY >= (rect.top + window.scrollY) && event.touches[0].pageY <= (rect.bottom + window.scrollY)) {
                        if (event.touches[1].pageX >= rect.left && event.touches[1].pageX <= rect.right) {
                            if (event.touches[1].pageY >= (rect.top + window.scrollY) && event.touches[1].pageY <= (rect.bottom + window.scrollY)) {
                                this.startX = (event.touches[0].pageX + event.touches[1].pageX) / 2;
                                this.startY = (event.touches[0].pageY + event.touches[1].pageY) / 2;
                                this.initialPinchDistance = Math.hypot(event.touches[1].pageX - event.touches[0].pageX, event.touches[1].pageY - event.touches[0].pageY);
                                if (event.cancelable) {
                                    event.preventDefault();
                                }
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
        };
        PinchOnMobileSupport.prototype.onViewerTouchMove = function (event) {
            var PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
            var PDFViewerApplication = window.PDFViewerApplication;
            if (this.initialPinchDistance <= 0 || event.touches.length !== 2) {
                return;
            }
            var pinchDistance = Math.hypot(event.touches[1].pageX - event.touches[0].pageX, event.touches[1].pageY - event.touches[0].pageY);
            var container = document.getElementById('viewerContainer');
            var originX = this.startX + container.scrollLeft;
            var originY = this.startY + container.scrollTop;
            this.pinchScale = pinchDistance / this.initialPinchDistance;
            var minZoom = Number(PDFViewerApplicationOptions.get('minZoom'));
            if (!minZoom) {
                minZoom = 0.1;
            }
            var currentZoom = PDFViewerApplication.pdfViewer._currentScale;
            if (currentZoom * this.pinchScale < minZoom) {
                this.pinchScale = minZoom / currentZoom;
            }
            var maxZoom = Number(PDFViewerApplicationOptions.get('maxZoom'));
            if (!maxZoom) {
                maxZoom = 10;
            }
            if (currentZoom * this.pinchScale > maxZoom) {
                this.pinchScale = maxZoom / currentZoom;
            }
            this.viewer.style.transform = "scale(" + this.pinchScale + ")";
            this.viewer.style.transformOrigin = originX + "px " + originY + "px";
            if (event.cancelable) {
                event.preventDefault();
            }
            event.stopPropagation();
        };
        PinchOnMobileSupport.prototype.onViewerTouchEnd = function (event) {
            var PDFViewerApplication = window.PDFViewerApplication;
            if (this.initialPinchDistance <= 0) {
                return;
            }
            this.viewer.style.transform = "none";
            this.viewer.style.transformOrigin = "unset";
            PDFViewerApplication.pdfViewer.currentScale *= this.pinchScale;
            var container = document.getElementById('viewerContainer');
            var rect = container.getBoundingClientRect();
            var dx = this.startX - rect.left;
            var dy = this.startY - rect.top;
            container.scrollLeft += dx * (this.pinchScale - 1);
            container.scrollTop += dy * (this.pinchScale - 1);
            this.resetPinchZoomParams();
            if (event.cancelable) {
                event.preventDefault();
            }
            event.stopPropagation();
        };
        PinchOnMobileSupport.prototype.resetPinchZoomParams = function () {
            this.startX = this.startY = this.initialPinchDistance = 0;
            this.pinchScale = 1;
        };
        PinchOnMobileSupport.prototype.initializePinchZoom = function () {
            var _this = this;
            if (!this.isMobile()) {
                return;
            }
            this.viewer = document.getElementById('viewer');
            this._zone.runOutsideAngular(function () {
                document.addEventListener('touchstart', _this.boundOnViewerTouchStart);
                document.addEventListener('touchmove', _this.boundOnViewerTouchMove, { passive: false });
                document.addEventListener('touchend', _this.boundOnViewerTouchEnd);
            });
        };
        PinchOnMobileSupport.prototype.destroyPinchZoom = function () {
            if (!this.isMobile()) {
                return;
            }
            document.removeEventListener('touchstart', this.boundOnViewerTouchStart);
            document.removeEventListener('touchmove', this.boundOnViewerTouchMove);
            document.removeEventListener('touchend', this.boundOnViewerTouchEnd);
        };
        return PinchOnMobileSupport;
    }());

    exports.ScrollModeType = void 0;
    (function (ScrollModeType) {
        ScrollModeType[ScrollModeType["vertical"] = 0] = "vertical";
        ScrollModeType[ScrollModeType["horizontal"] = 1] = "horizontal";
        ScrollModeType[ScrollModeType["wrapped"] = 2] = "wrapped";
    })(exports.ScrollModeType || (exports.ScrollModeType = {}));

    var UnitToPx = /** @class */ (function () {
        function UnitToPx() {
        }
        UnitToPx.initElements = function () {
            // this.con = document.createElement('div');
            this.con.style.position = 'absolute';
            this.con.style.width = '0';
            this.con.style.height = '0';
            this.con.style.visibility = 'hidden';
            this.con.style.overflow = 'hidden';
            // this.el = document.createElement('div');
            this.con.appendChild(this.el);
        };
        UnitToPx.pxPerUnit = function (unit) {
            if (!this.pxPerUnitCache[unit]) {
                if (!this.con) {
                    this.initElements();
                }
                this.el.style.width = this.sample + unit;
                document.body.appendChild(this.con);
                var dimension = this.el.getBoundingClientRect();
                this.con.parentNode.removeChild(this.con);
                this.pxPerUnitCache[unit] = dimension.width / this.sample;
            }
            return this.pxPerUnitCache[unit];
        };
        UnitToPx.toPx = function (length) {
            var unitRe = /^\s*([+-]?[\d\.]*)\s*(.*)\s*$/i;
            var match = unitRe.exec(length);
            if (match != null && match.length > 2) {
                var bare = match[1] === '';
                var val = bare ? 1 : Number(match[1]);
                var unit = match[2];
                var valid = !isNaN(val) && unit;
                if (valid) {
                    return unit == 'px' ? val : this.pxPerUnit(unit) * val;
                }
            }
            throw new TypeError('Error parsing length');
        };
        return UnitToPx;
    }());
    // cache this.con, el for reused
    UnitToPx.con = document.createElement('div');
    UnitToPx.el = document.createElement('div');
    // high sample will more accurate?
    UnitToPx.sample = 100;
    UnitToPx.pxPerUnitCache = {};

    var PDFNotificationService = /** @class */ (function () {
        function PDFNotificationService() {
            var _this = this;
            // this event is fired when the pdf.js library has been loaded and objects like PDFApplication are available
            this.onPDFJSInit = new rxjs.Subject();
            this.pdfjsVersion = new rxjs.ReplaySubject(1);
            if (typeof window !== 'undefined') {
                if (window.pdfjsLib && window.pdfjsLib.version) {
                    this.pdfjsVersion.next(window.pdfjsLib.version);
                }
                else {
                    this.onPDFJSInit.subscribe(function () {
                        _this.pdfjsVersion.next(window.pdfjsLib.version);
                    });
                }
            }
        }
        return PDFNotificationService;
    }());
    /** @nocollapse */ PDFNotificationService.ɵfac = function PDFNotificationService_Factory(t) { return new (t || PDFNotificationService)(); };
    /** @nocollapse */ PDFNotificationService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: PDFNotificationService, factory: PDFNotificationService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PDFNotificationService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

    var DynamicCssComponent = /** @class */ (function () {
        function DynamicCssComponent(renderer, document) {
            this.renderer = renderer;
            this.document = document;
            this.zoom = 1.0;
            this.width = 100;
            this.xs = 490;
            this.sm = 560;
            this.md = 610;
            this.lg = 660;
            this.xl = 740;
            this.xxl = 830;
        }
        Object.defineProperty(DynamicCssComponent.prototype, "style", {
            get: function () {
                return "\n@media all and (max-width: " + this.xl + "px) {\n  #toolbarViewerMiddle {\n    display: table;\n    margin: auto;\n    left: auto;\n    position: inherit;\n    transform: none;\n  }\n}\n\n@media all and (max-width: 840px) {\n  #sidebarContent {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n\n  html[dir='ltr'] #outerContainer.sidebarOpen #viewerContainer {\n    left: 0px !important;\n  }\n  html[dir='rtl'] #outerContainer.sidebarOpen #viewerContainer {\n    right: 0px !important;\n  }\n\n  #outerContainer .hiddenLargeView,\n  #outerContainer .hiddenMediumView {\n    display: inherit;\n  }\n  #outerContainer .visibleLargeView,\n  #outerContainer .visibleMediumView {\n    display: none;\n  }\n}\n\n@media all and (max-width: " + this.lg + "px) {\n  .toolbarButtonSpacer {\n    width: 15px;\n  }\n\n  #outerContainer .hiddenLargeView {\n    display: none;\n  }\n  #outerContainer .visibleLargeView {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: " + this.md + "px) {\n  .toolbarButtonSpacer {\n    display: none;\n  }\n  #outerContainer .hiddenMediumView {\n    display: none;\n  }\n  #outerContainer .visibleMediumView {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: " + this.sm + "px) {\n  #outerContainer .hiddenSmallView,\n  #outerContainer .hiddenSmallView * {\n    display: none;\n  }\n  #outerContainer .visibleSmallView {\n    display: inherit;\n  }\n  .toolbarButtonSpacer {\n    width: 0;\n  }\n  html[dir='ltr'] .findbar {\n    left: 38px;\n  }\n  html[dir='rtl'] .findbar {\n    right: 38px;\n  }\n}\n\n@media all and (max-width: " + this.xs + "px) {\n  #scaleSelectContainer {\n    display: none;\n  }\n}\n\n#outerContainer .visibleXLView,\n#outerContainer .visibleXXLView,\n#outerContainer .visibleTinyView {\n  display: none;\n}\n\n#outerContainer .hiddenXLView,\n#outerContainer .hiddenXXLView {\n  display: unset;\n}\n\n@media all and (max-width: " + this.xl + "px) {\n  #outerContainer .hiddenXLView {\n    display: none;\n  }\n  #outerContainer .visibleXLView {\n    display: inherit;\n  }\n\n  #toolbarViewerMiddle {\n    -webkit-transform: translateX(-36%);\n    transform: translateX(-36%);\n    display: unset;\n    margin: unset;\n    left: 50%;\n    position: absolute;\n  }\n}\n\n@media all and (max-width: " + this.xxl + "px) {\n  #outerContainer .hiddenXXLView {\n    display: none;\n  }\n  #outerContainer .visibleXXLView {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: " + this.md + "px) {\n  #toolbarViewerMiddle {\n    -webkit-transform: translateX(-26%);\n    transform: translateX(-26%);\n  }\n}\n\n@media all and (max-width: " + this.xs + "px) {\n  #outerContainer .hiddenTinyView,\n  #outerContainer .hiddenTinyView * {\n    display: none;\n  }\n  #outerContainer .visibleTinyView {\n    display: inherit;\n  }\n}\n  ";
            },
            enumerable: false,
            configurable: true
        });
        DynamicCssComponent.prototype.ngOnInit = function () {
            this.injectStyle();
        };
        DynamicCssComponent.prototype.ngOnChanges = function () {
            var fullWith = this.document.body.clientWidth;
            var partialViewScale = fullWith / this.width;
            var scaleFactor = partialViewScale * (this.zoom ? this.zoom : 1);
            this.xs = scaleFactor * 490;
            this.sm = scaleFactor * 560;
            this.md = scaleFactor * 610;
            this.lg = scaleFactor * 660;
            this.xl = scaleFactor * 740;
            this.xxl = scaleFactor * 830;
            var styles = this.document.getElementById('pdf-dynamic-css');
            if (styles) {
                styles.innerHTML = this.style;
            }
        };
        DynamicCssComponent.prototype.injectStyle = function () {
            var styles = this.document.createElement('STYLE');
            styles.id = 'pdf-dynamic-css';
            styles.innerHTML = this.style;
            this.renderer.appendChild(this.document.head, styles);
        };
        DynamicCssComponent.prototype.ngOnDestroy = function () {
            var styles = this.document.getElementById('pdf-dynamic-css');
            if (styles && styles.parentElement) {
                styles.parentElement.removeChild(styles);
            }
        };
        return DynamicCssComponent;
    }());
    /** @nocollapse */ DynamicCssComponent.ɵfac = function DynamicCssComponent_Factory(t) { return new (t || DynamicCssComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(i1.DOCUMENT)); };
    /** @nocollapse */ DynamicCssComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: DynamicCssComponent, selectors: [["pdf-dynamic-css"]], inputs: { zoom: "zoom", width: "width" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function DynamicCssComponent_Template(rf, ctx) { }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DynamicCssComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-dynamic-css',
                        templateUrl: './dynamic-css.component.html',
                        styleUrls: ['./dynamic-css.component.css']
                    }]
            }], function () {
            return [{ type: i0__namespace.Renderer2 }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }];
        }, { zoom: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }] });
    })();

    var PdfSidebarToolbarComponent = /** @class */ (function () {
        function PdfSidebarToolbarComponent() {
        }
        PdfSidebarToolbarComponent.prototype.ngOnInit = function () {
        };
        return PdfSidebarToolbarComponent;
    }());
    /** @nocollapse */ PdfSidebarToolbarComponent.ɵfac = function PdfSidebarToolbarComponent_Factory(t) { return new (t || PdfSidebarToolbarComponent)(); };
    /** @nocollapse */ PdfSidebarToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfSidebarToolbarComponent, selectors: [["pdf-sidebar-toolbar"]], decls: 31, vars: 0, consts: [["id", "toolbarSidebar"], ["id", "toolbarSidebarLeft"], ["type", "button", "id", "viewThumbnail", "title", "Show Thumbnails", "data-l10n-id", "thumbs", 1, "toolbarButton", "toggled"], ["data-l10n-id", "thumbs_label"], ["viewBox", "0 0 24 24", 2, "width", "20px", "height", "20px"], ["fill", "currentColor", "d", "M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"], ["type", "button", "id", "viewOutline", "title", "Show Document Outline (double-click to expand/collapse all items)", "data-l10n-id", "document_outline", "hidden", "true", 1, "toolbarButton"], ["data-l10n-id", "document_outline_label"], ["fill", "currentColor", "d", "M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z"], ["type", "button", "id", "viewAttachments", "title", "Show Attachments", "data-l10n-id", "attachments", "hidden", "true", 1, "toolbarButton"], ["data-l10n-id", "attachments_label"], ["fill", "currentColor", "d", "M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z"], ["id", "viewLayers", "title", "Show Layers (double-click to reset all layers to the default state)", "data-l10n-id", "layers", "hidden", "true", 1, "toolbarButton"], ["data-l10n-id", "layers_label"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 4.233 4.233", 2, "width", "20px", "height", "20px"], ["d", "M.15 2.992c-.198.1-.2.266-.002.365l1.604.802a.93.93 0 00.729-.001l1.602-.801c.198-.1.197-.264 0-.364l-.695-.348c-1.306.595-2.542 0-2.542 0m-.264.53l.658-.329c.6.252 1.238.244 1.754 0l.659.329-1.536.768zM.15 1.935c-.198.1-.198.265 0 .364l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363l-.694-.35c-1.14.56-2.546.001-2.546.001m-.264.53l.664-.332c.52.266 1.261.235 1.75.002l.659.33-1.537.768zM.15.877c-.198.099-.198.264 0 .363l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363L2.481.075a.926.926 0 00-.727 0zm.43.182L2.117.29l1.538.769-1.538.768z"], ["id", "toolbarSidebarRight"], ["id", "outlineOptionsContainer", 1, "hidden"], [1, "verticalToolbarSeparator"], ["id", "currentOutlineItem", "disabled", "disabled", "title", "Find Current Outline Item", "tabindex", "6", "data-l10n-id", "current_outline_item", 1, "toolbarButton"], ["data-l10n-id", "current_outline_item_label"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", 2, "width", "20px", "height", "20px"], ["d", "m14 9h-6c-1.3 0-1.3 2 0 2h6c1.3 0 1.3-2 0-2zm-5.2-8h-3.8c-1.3 0-1.3 2 0 2h1.7zm-6.8 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.3 1.7-0.7 0-0.5-0.4-1-1-1zm3 8c-1 0-1.3 1-0.7 1.7 0.6 0.6 1.7 0.2 1.7-0.7 0-0.5-0.4-1-1-1zm0.3-4h-0.3c-1.4 0-1.4 2 0 2h2.3zm-3.3 0c-0.9 0-1.4 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.7 0-0.6-0.5-1-1-1zm12 8h-9c-1.3 0-1.3 2 0 2h9c1.3 0 1.3-2 0-2zm-12 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.712 0-0.5-0.4-1-1-1z"], ["d", "m7.37 4.838 3.93-3.911v2.138h3.629v3.546h-3.629v2.138l-3.93-3.911"]], template: function PdfSidebarToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelementStart(2, "button", 2);
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Thumbnails");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(5, "svg", 4);
                i0__namespace.ɵɵelement(6, "path", 5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(7, "button", 6);
                i0__namespace.ɵɵelementStart(8, "span", 7);
                i0__namespace.ɵɵtext(9, "Document Outline");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(10, "svg", 4);
                i0__namespace.ɵɵelement(11, "path", 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(12, "button", 9);
                i0__namespace.ɵɵelementStart(13, "span", 10);
                i0__namespace.ɵɵtext(14, "Attachments");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(15, "svg", 4);
                i0__namespace.ɵɵelement(16, "path", 11);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(17, "button", 12);
                i0__namespace.ɵɵelementStart(18, "span", 13);
                i0__namespace.ɵɵtext(19, "Layers");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(20, "svg", 14);
                i0__namespace.ɵɵelement(21, "path", 15);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(22, "div", 16);
                i0__namespace.ɵɵelementStart(23, "div", 17);
                i0__namespace.ɵɵelement(24, "div", 18);
                i0__namespace.ɵɵelementStart(25, "button", 19);
                i0__namespace.ɵɵelementStart(26, "span", 20);
                i0__namespace.ɵɵtext(27, "Current Outline Item");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(28, "svg", 21);
                i0__namespace.ɵɵelement(29, "path", 22);
                i0__namespace.ɵɵelement(30, "path", 23);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: ["button[_ngcontent-%COMP%]{margin-right:4px!important}div#toolbarSidebar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-child{margin-left:4px!important}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfSidebarToolbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-sidebar-toolbar',
                        templateUrl: './pdf-sidebar-toolbar.component.html',
                        styleUrls: ['./pdf-sidebar-toolbar.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var _c0$8 = ["thumbnailViewTemplate"];
    function PdfSidebarContentComponent_ng_content_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customThumbnail ? customThumbnail : defaultThumbnail"]);
        }
    }
    function PdfSidebarContentComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "a", 8);
            i0__namespace.ɵɵelementStart(1, "div", 9);
            i0__namespace.ɵɵelement(2, "div", 10);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    var _c1$3 = ["*"];
    var THUMBNAIL_CANVAS_BORDER_WIDTH = 1; // px
    var PdfSidebarContentComponent = /** @class */ (function () {
        function PdfSidebarContentComponent() {
            var _this = this;
            this.thumbnailDrawn = new i0.EventEmitter();
            this.top = '32px';
            this._hideSidebarToolbar = false;
            if (typeof window !== 'undefined') {
                window.pdfThumbnailGeneratorReady = function () { return _this.pdfThumbnailGeneratorReady(); };
                window.pdfThumbnailGenerator = function (pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) { return _this.createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise); };
            }
        }
        PdfSidebarContentComponent.prototype.ngOnDestroy = function () {
            this.linkService = undefined;
        };
        PdfSidebarContentComponent.prototype.pdfThumbnailGeneratorReady = function () {
            if (!this.thumbnailViewTemplate) {
                return false;
            }
            var t = this.thumbnailViewTemplate.nativeElement;
            return !!t && !!t.innerHTML && t.innerHTML.length > 0;
        };
        PdfSidebarContentComponent.prototype.createThumbnail = function (pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) {
            this.linkService = linkService;
            var template = this.thumbnailViewTemplate;
            // get the inner HTML without the attributes and classes added by Angular
            var inner = template.nativeElement.innerHTML
                .split(/_ng\w+-\w+-\w+=""/g)
                .join('')
                .split(/ng-\w+-\w+/g)
                .join('')
                .split(/<!--[\s\S]*?-->/g)
                .join('');
            var borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
            var widthOfRing = pdfThumbnailView.canvasWidth + borderAdjustment + 'px';
            var heightOfRing = pdfThumbnailView.canvasHeight + borderAdjustment + 'px';
            var newHtml = inner.split('WIDTH_OF_RING').join(widthOfRing).split('HEIGHT_OF_RING').join(heightOfRing).split('PAGE_NUMBER').join(id);
            var newElement = this.createElementFromHTML(newHtml);
            newElement.classList.remove('pdf-viewer-template');
            var anchor = newElement;
            anchor.href = linkService.getAnchorUrl('#page=' + id);
            thumbPageTitlePromise.then(function (msg) {
                anchor.title = msg;
            });
            anchor.onclick = function () {
                linkService.page = id;
                return false;
            };
            pdfThumbnailView.anchor = anchor;
            var ring = newElement.getElementsByClassName('image-container')[0];
            pdfThumbnailView.ring = ring;
            pdfThumbnailView.div = newElement.getElementsByClassName('thumbnail')[0];
            container.appendChild(newElement);
            var thumbnailDrawnEvent = {
                thumbnail: newElement,
                container: container,
                pageId: id,
            };
            this.thumbnailDrawn.emit(thumbnailDrawnEvent);
        };
        PdfSidebarContentComponent.prototype.createElementFromHTML = function (htmlString) {
            var div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            // Change this to div.childNodes to support multiple top-level nodes
            return div.firstChild;
        };
        PdfSidebarContentComponent.prototype.onKeyDown = function (event) {
            if (event.code === 'ArrowDown') {
                if (this.linkService) {
                    if (event.ctrlKey || event.metaKey) {
                        this.linkService.page = this.linkService.pagesCount;
                    }
                    else if (this.linkService.page < this.linkService.pagesCount) {
                        this.linkService.page = this.linkService.page + 1;
                    }
                    event.preventDefault();
                }
            }
            else if (event.code === 'ArrowUp') {
                if (this.linkService) {
                    if (event.ctrlKey || event.metaKey) {
                        this.linkService.page = 1;
                    }
                    else if (this.linkService.page > 1) {
                        this.linkService.page = this.linkService.page - 1;
                    }
                    event.preventDefault();
                }
            }
        };
        Object.defineProperty(PdfSidebarContentComponent.prototype, "hideSidebarToolbar", {
            set: function (h) {
                this._hideSidebarToolbar = h;
                if (this._hideSidebarToolbar) {
                    this.top = '0';
                }
                else {
                    this.top = '32px';
                }
            },
            enumerable: false,
            configurable: true
        });
        return PdfSidebarContentComponent;
    }());
    /** @nocollapse */ PdfSidebarContentComponent.ɵfac = function PdfSidebarContentComponent_Factory(t) { return new (t || PdfSidebarContentComponent)(); };
    /** @nocollapse */ PdfSidebarContentComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfSidebarContentComponent, selectors: [["pdf-sidebar-content"]], viewQuery: function PdfSidebarContentComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$8, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.thumbnailViewTemplate = _t.first);
            }
        }, inputs: { customThumbnail: "customThumbnail", hideSidebarToolbar: "hideSidebarToolbar" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, ngContentSelectors: _c1$3, decls: 10, vars: 3, consts: [["id", "sidebarContent"], ["thumbnailViewTemplate", ""], [4, "ngTemplateOutlet"], ["id", "thumbnailView", 3, "keydown"], ["id", "outlineView", 1, "hidden"], ["id", "attachmentsView", 1, "hidden"], ["id", "layersView", 1, "hidden"], ["defaultThumbnail", ""], [1, "pdf-viewer-template"], ["data-page-number", "$page", 1, "thumbnail"], [1, "thumbnailSelectionRing", "image-container", 2, "width", "WIDTH_OF_RING", "height", "HEIGHT_OF_RING"]], template: function PdfSidebarContentComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", null, 1);
                i0__namespace.ɵɵtemplate(3, PdfSidebarContentComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "div", 3);
                i0__namespace.ɵɵlistener("keydown", function PdfSidebarContentComponent_Template_div_keydown_4_listener($event) { return ctx.onKeyDown($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(5, "div", 4);
                i0__namespace.ɵɵelement(6, "div", 5);
                i0__namespace.ɵɵelement(7, "div", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(8, PdfSidebarContentComponent_ng_template_8_Template, 3, 0, "ng-template", null, 7, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r2 = i0__namespace.ɵɵreference(9);
                i0__namespace.ɵɵstyleProp("top", ctx.top);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx.customThumbnail ? ctx.customThumbnail : _r2);
            }
        }, directives: [i1__namespace.NgTemplateOutlet], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfSidebarContentComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-sidebar-content',
                        templateUrl: './pdf-sidebar-content.component.html',
                        styleUrls: ['./pdf-sidebar-content.component.css'],
                    }]
            }], function () { return []; }, { customThumbnail: [{
                    type: i0.Input
                }], thumbnailViewTemplate: [{
                    type: i0.ViewChild,
                    args: ['thumbnailViewTemplate']
                }], thumbnailDrawn: [{
                    type: i0.Output
                }], hideSidebarToolbar: [{
                    type: i0.Input
                }] });
    })();

    function PdfSidebarComponent_ng_content_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customSidebar ? customSidebar : defaultSidebar"]);
        }
    }
    function PdfSidebarComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵelementStart(1, "div", 3);
            i0__namespace.ɵɵelement(2, "pdf-sidebar-toolbar");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "pdf-sidebar-content", 4);
            i0__namespace.ɵɵlistener("thumbnailDrawn", function PdfSidebarComponent_ng_template_2_Template_pdf_sidebar_content_thumbnailDrawn_3_listener($event) { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.thumbnailDrawn.emit($event); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(4, "div", 5);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("top", ctx_r2.sidebarPositionTop);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵstyleProp("display", ctx_r2.hideSidebarToolbar ? "none" : "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("customThumbnail", ctx_r2.customThumbnail)("hideSidebarToolbar", ctx_r2.hideSidebarToolbar);
        }
    }
    var _c0$7 = ["*"];
    var PdfSidebarComponent = /** @class */ (function () {
        function PdfSidebarComponent(elementRef, ref) {
            this.elementRef = elementRef;
            this.ref = ref;
            this.sidebarVisible = true;
            this.showSidebarButton = true;
            this.thumbnailDrawn = new i0.EventEmitter();
            this.hideSidebarToolbar = true;
        }
        PdfSidebarComponent.prototype.showToolbarWhenNecessary = function () {
            var element = this.elementRef.nativeElement;
            var buttons = element.querySelectorAll('button');
            var visible = 0;
            for (var index = 0; index < buttons.length; index++) {
                var b = buttons.item(index);
                if (!b.hidden) {
                    visible++;
                }
            }
            this.hideSidebarToolbar = visible <= 1;
            this.ref.markForCheck();
        };
        return PdfSidebarComponent;
    }());
    /** @nocollapse */ PdfSidebarComponent.ɵfac = function PdfSidebarComponent_Factory(t) { return new (t || PdfSidebarComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    /** @nocollapse */ PdfSidebarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfSidebarComponent, selectors: [["pdf-sidebar"]], inputs: { sidebarPositionTop: "sidebarPositionTop", sidebarVisible: "sidebarVisible", showSidebarButton: "showSidebarButton", customSidebar: "customSidebar", customThumbnail: "customThumbnail" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, ngContentSelectors: _c0$7, decls: 4, vars: 1, consts: [[4, "ngTemplateOutlet"], ["defaultSidebar", ""], ["id", "sidebarContainer"], ["id", "additionalSidebarContainer"], [3, "customThumbnail", "hideSidebarToolbar", "thumbnailDrawn"], ["id", "sidebarResizer", 1, "hidden"]], template: function PdfSidebarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div");
                i0__namespace.ɵɵtemplate(1, PdfSidebarComponent_ng_content_1_Template, 1, 0, "ng-content", 0);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(2, PdfSidebarComponent_ng_template_2_Template, 5, 6, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(3);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx.customSidebar ? ctx.customSidebar : _r1);
            }
        }, directives: [i1__namespace.NgTemplateOutlet, PdfSidebarToolbarComponent, PdfSidebarContentComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfSidebarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-sidebar',
                        templateUrl: './pdf-sidebar.component.html',
                        styleUrls: ['./pdf-sidebar.component.css'],
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.ChangeDetectorRef }]; }, { sidebarPositionTop: [{
                    type: i0.Input
                }], sidebarVisible: [{
                    type: i0.Input
                }], showSidebarButton: [{
                    type: i0.Input
                }], customSidebar: [{
                    type: i0.Input
                }], customThumbnail: [{
                    type: i0.Input
                }], thumbnailDrawn: [{
                    type: i0.Output
                }] });
    })();

    var PdfToggleSidebarComponent = /** @class */ (function () {
        function PdfToggleSidebarComponent() {
            this.showSidebarButton = true;
        }
        PdfToggleSidebarComponent.prototype.ngOnInit = function () { };
        return PdfToggleSidebarComponent;
    }());
    /** @nocollapse */ PdfToggleSidebarComponent.ɵfac = function PdfToggleSidebarComponent_Factory(t) { return new (t || PdfToggleSidebarComponent)(); };
    /** @nocollapse */ PdfToggleSidebarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfToggleSidebarComponent, selectors: [["pdf-toggle-sidebar"]], inputs: { showSidebarButton: "showSidebarButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "sidebarToggle", "title", "Toggle Sidebar", "data-l10n-id", "toggle_sidebar", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z"], ["data-l10n-id", "toggle_sidebar_label"]], template: function PdfToggleSidebarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Toggle Sidebar");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showSidebarButton);
            }
        }, styles: ["button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-top:-2px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfToggleSidebarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-toggle-sidebar',
                        templateUrl: './pdf-toggle-sidebar.component.html',
                        styleUrls: ['./pdf-toggle-sidebar.component.css']
                    }]
            }], function () { return []; }, { showSidebarButton: [{
                    type: i0.Input
                }] });
    })();

    var PdfFindButtonComponent = /** @class */ (function () {
        function PdfFindButtonComponent() {
            this.showFindButton = undefined;
            this.textLayer = undefined;
        }
        PdfFindButtonComponent.prototype.ngOnInit = function () {
        };
        return PdfFindButtonComponent;
    }());
    /** @nocollapse */ PdfFindButtonComponent.ɵfac = function PdfFindButtonComponent_Factory(t) { return new (t || PdfFindButtonComponent)(); };
    /** @nocollapse */ PdfFindButtonComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindButtonComponent, selectors: [["pdf-find-button"]], inputs: { showFindButton: "showFindButton", textLayer: "textLayer" }, decls: 5, vars: 2, consts: [["type", "button", "id", "viewFind", "title", "Find in Document", "data-l10n-id", "findbar", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"], ["data-l10n-id", "findbar_label"]], template: function PdfFindButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Find");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showFindButton || !ctx.textLayer);
            }
        }, styles: ["button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-top:-2px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-find-button',
                        templateUrl: './pdf-find-button.component.html',
                        styleUrls: ['./pdf-find-button.component.css']
                    }]
            }], function () { return []; }, { showFindButton: [{
                    type: i0.Input
                }], textLayer: [{
                    type: i0.Input
                }] });
    })();

    var _c0$6 = ["button"];
    var PdfFirstPageComponent = /** @class */ (function () {
        function PdfFirstPageComponent(notificationService) {
            var _this = this;
            this.notificationService = notificationService;
            this.disableFirstPage = true;
            var subscription = this.notificationService.onPDFJSInit.subscribe(function () {
                _this.onPdfJsInit();
                subscription.unsubscribe();
            });
        }
        PdfFirstPageComponent.prototype.firstPage = function () {
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch('firstpage');
        };
        PdfFirstPageComponent.prototype.onPdfJsInit = function () {
            var _this = this;
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.on('updateuistate', function (event) { return _this.updateUIState(event); });
        };
        PdfFirstPageComponent.prototype.updateUIState = function (event) {
            this.disableFirstPage = event.pageNumber <= 1;
            this.button.nativeElement.disabled = this.disableFirstPage;
        };
        return PdfFirstPageComponent;
    }());
    /** @nocollapse */ PdfFirstPageComponent.ɵfac = function PdfFirstPageComponent_Factory(t) { return new (t || PdfFirstPageComponent)(i0__namespace.ɵɵdirectiveInject(PDFNotificationService)); };
    /** @nocollapse */ PdfFirstPageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFirstPageComponent, selectors: [["pdf-first-page"]], viewQuery: function PdfFirstPageComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$6, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.button = _t.first);
            }
        }, decls: 6, vars: 1, consts: [["type", "button", "title", "First page", "id", "primaryFirstPage", "data-l10n-id", "first_page", 1, "toolbarButton", "hiddenLargeView", 3, "disabled", "click"], ["button", ""], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z"], ["data-l10n-id", "first_page_label"]], template: function PdfFirstPageComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0, 1);
                i0__namespace.ɵɵlistener("click", function PdfFirstPageComponent_Template_button_click_0_listener() { return ctx.firstPage(); });
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(2, "svg", 2);
                i0__namespace.ɵɵelement(3, "path", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(4, "span", 4);
                i0__namespace.ɵɵtext(5, "First page");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("disabled", ctx.disableFirstPage);
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFirstPageComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-first-page',
                        templateUrl: './pdf-first-page.component.html',
                        styleUrls: ['./pdf-first-page.component.css']
                    }]
            }], function () { return [{ type: PDFNotificationService }]; }, { button: [{
                    type: i0.ViewChild,
                    args: ['button']
                }] });
    })();

    var PdfPreviousPageComponent = /** @class */ (function () {
        function PdfPreviousPageComponent() {
        }
        PdfPreviousPageComponent.prototype.ngOnInit = function () { };
        return PdfPreviousPageComponent;
    }());
    /** @nocollapse */ PdfPreviousPageComponent.ɵfac = function PdfPreviousPageComponent_Factory(t) { return new (t || PdfPreviousPageComponent)(); };
    /** @nocollapse */ PdfPreviousPageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfPreviousPageComponent, selectors: [["pdf-previous-page"]], decls: 5, vars: 0, consts: [["type", "button", "title", "Previous Page", "id", "previous", "data-l10n-id", "previous", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"], ["data-l10n-id", "previous_label"]], template: function PdfPreviousPageComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Previous");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfPreviousPageComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-previous-page',
                        templateUrl: './pdf-previous-page.component.html',
                        styleUrls: ['./pdf-previous-page.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfPageNumberComponent = /** @class */ (function () {
        function PdfPageNumberComponent() {
            this.showPagingButtons = true;
        }
        PdfPageNumberComponent.prototype.ngOnInit = function () { };
        return PdfPageNumberComponent;
    }());
    /** @nocollapse */ PdfPageNumberComponent.ɵfac = function PdfPageNumberComponent_Factory(t) { return new (t || PdfPageNumberComponent)(); };
    /** @nocollapse */ PdfPageNumberComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfPageNumberComponent, selectors: [["pdf-page-number"]], inputs: { showPagingButtons: "showPagingButtons" }, decls: 2, vars: 4, consts: [["type", "number", "id", "pageNumber", "title", "Page", "value", "1", "size", "4", "min", "1", "data-l10n-id", "page", 1, "toolbarField", "pageNumber"], ["id", "numPages", 1, "toolbarLabel", "hiddenXLView"]], template: function PdfPageNumberComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "input", 0);
                i0__namespace.ɵɵelement(1, "span", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showPagingButtons);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassProp("invisible", !ctx.showPagingButtons);
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfPageNumberComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-page-number',
                        templateUrl: './pdf-page-number.component.html',
                        styleUrls: ['./pdf-page-number.component.css']
                    }]
            }], function () { return []; }, { showPagingButtons: [{
                    type: i0.Input
                }] });
    })();

    var PdfNextPageComponent = /** @class */ (function () {
        function PdfNextPageComponent() {
        }
        PdfNextPageComponent.prototype.ngOnInit = function () { };
        return PdfNextPageComponent;
    }());
    /** @nocollapse */ PdfNextPageComponent.ɵfac = function PdfNextPageComponent_Factory(t) { return new (t || PdfNextPageComponent)(); };
    /** @nocollapse */ PdfNextPageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfNextPageComponent, selectors: [["pdf-next-page"]], decls: 5, vars: 0, consts: [["type", "button", "title", "Next Page", "id", "next", "data-l10n-id", "next", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"], ["data-l10n-id", "next_label"]], template: function PdfNextPageComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfNextPageComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-next-page',
                        templateUrl: './pdf-next-page.component.html',
                        styleUrls: ['./pdf-next-page.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var _c0$5 = ["button"];
    var PdfLastPageComponent = /** @class */ (function () {
        function PdfLastPageComponent(notificationService) {
            var _this = this;
            this.notificationService = notificationService;
            this.disableLastPage = true;
            var subscription = this.notificationService.onPDFJSInit.subscribe(function () {
                _this.onPdfJsInit();
                subscription.unsubscribe();
            });
        }
        PdfLastPageComponent.prototype.firstPage = function () {
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch('firstpage');
        };
        PdfLastPageComponent.prototype.onPdfJsInit = function () {
            var _this = this;
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.on('updateuistate', function (event) { return _this.updateUIState(event); });
        };
        PdfLastPageComponent.prototype.updateUIState = function (event) {
            this.disableLastPage = event.pageNumber === event.pagesCount;
            this.button.nativeElement.disabled = this.disableLastPage;
        };
        PdfLastPageComponent.prototype.lastPage = function () {
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch('lastpage');
        };
        return PdfLastPageComponent;
    }());
    /** @nocollapse */ PdfLastPageComponent.ɵfac = function PdfLastPageComponent_Factory(t) { return new (t || PdfLastPageComponent)(i0__namespace.ɵɵdirectiveInject(PDFNotificationService)); };
    /** @nocollapse */ PdfLastPageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfLastPageComponent, selectors: [["pdf-last-page"]], viewQuery: function PdfLastPageComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$5, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.button = _t.first);
            }
        }, decls: 6, vars: 1, consts: [["type", "button", "title", "Last page", "id", "primaryLastPage", "data-l10n-id", "last_page", 1, "toolbarButton", "hiddenLargeView", 3, "disabled", "click"], ["button", ""], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z"], ["data-l10n-id", "last_page_label"]], template: function PdfLastPageComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0, 1);
                i0__namespace.ɵɵlistener("click", function PdfLastPageComponent_Template_button_click_0_listener() { return ctx.lastPage(); });
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(2, "svg", 2);
                i0__namespace.ɵɵelement(3, "path", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(4, "span", 4);
                i0__namespace.ɵɵtext(5, "Last page");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("disabled", ctx.disableLastPage);
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfLastPageComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-last-page',
                        templateUrl: './pdf-last-page.component.html',
                        styleUrls: ['./pdf-last-page.component.css']
                    }]
            }], function () { return [{ type: PDFNotificationService }]; }, { button: [{
                    type: i0.ViewChild,
                    args: ['button']
                }] });
    })();

    var PdfPagingAreaComponent = /** @class */ (function () {
        function PdfPagingAreaComponent() {
            this.showPagingButtons = true;
        }
        return PdfPagingAreaComponent;
    }());
    /** @nocollapse */ PdfPagingAreaComponent.ɵfac = function PdfPagingAreaComponent_Factory(t) { return new (t || PdfPagingAreaComponent)(); };
    /** @nocollapse */ PdfPagingAreaComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfPagingAreaComponent, selectors: [["pdf-paging-area"]], inputs: { showPagingButtons: "showPagingButtons" }, decls: 7, vars: 5, consts: [[1, "paging-left", "hiddenTinyView"], [2, "margin-right", "-3px"], [2, "margin-left", "-3px"], [3, "showPagingButtons"], [1, "paging-right", "hiddenTinyView"], [2, "margin-right", "-3px", "margin-left", "-3px"]], template: function PdfPagingAreaComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelement(1, "pdf-first-page", 1);
                i0__namespace.ɵɵelement(2, "pdf-previous-page", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "pdf-page-number", 3);
                i0__namespace.ɵɵelementStart(4, "div", 4);
                i0__namespace.ɵɵelement(5, "pdf-next-page", 5);
                i0__namespace.ɵɵelement(6, "pdf-last-page", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showPagingButtons);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("showPagingButtons", ctx.showPagingButtons);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassProp("invisible", !ctx.showPagingButtons);
            }
        }, directives: [PdfFirstPageComponent, PdfPreviousPageComponent, PdfPageNumberComponent, PdfNextPageComponent, PdfLastPageComponent], styles: [".paging-right[_ngcontent-%COMP%]{float:right}.paging-left[_ngcontent-%COMP%], .paging-right[_ngcontent-%COMP%]{display:block;margin-top:-2px}.paging-left[_ngcontent-%COMP%]{float:left}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfPagingAreaComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-paging-area',
                        templateUrl: './pdf-paging-area.component.html',
                        styleUrls: ['./pdf-paging-area.component.css']
                    }]
            }], null, { showPagingButtons: [{
                    type: i0.Input
                }] });
    })();

    var PdfZoomOutComponent = /** @class */ (function () {
        function PdfZoomOutComponent() {
        }
        PdfZoomOutComponent.prototype.ngOnInit = function () {
        };
        return PdfZoomOutComponent;
    }());
    /** @nocollapse */ PdfZoomOutComponent.ɵfac = function PdfZoomOutComponent_Factory(t) { return new (t || PdfZoomOutComponent)(); };
    /** @nocollapse */ PdfZoomOutComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfZoomOutComponent, selectors: [["pdf-zoom-out"]], decls: 5, vars: 0, consts: [["type", "button", "id", "zoomOut", "title", "Zoom Out", "data-l10n-id", "zoom_out", 1, "toolbarButton", "zoomOut"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M19,13H5V11H19V13Z"], ["data-l10n-id", "zoom_out_label"]], template: function PdfZoomOutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Zoom Out");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: ["button[_ngcontent-%COMP%]{margin-left:-2px!important;margin-right:-2px!important}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfZoomOutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-zoom-out',
                        templateUrl: './pdf-zoom-out.component.html',
                        styleUrls: ['./pdf-zoom-out.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfZoomInComponent = /** @class */ (function () {
        function PdfZoomInComponent() {
        }
        PdfZoomInComponent.prototype.ngOnInit = function () {
        };
        return PdfZoomInComponent;
    }());
    /** @nocollapse */ PdfZoomInComponent.ɵfac = function PdfZoomInComponent_Factory(t) { return new (t || PdfZoomInComponent)(); };
    /** @nocollapse */ PdfZoomInComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfZoomInComponent, selectors: [["pdf-zoom-in"]], decls: 5, vars: 0, consts: [["type", "button", "id", "zoomIn", "title", "Zoom In", "data-l10n-id", "zoom_in", 1, "toolbarButton", "zoomIn"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"], ["data-l10n-id", "zoom_in_label"]], template: function PdfZoomInComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Zoom In");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: ["button[_ngcontent-%COMP%]{margin-left:-2px!important;margin-right:-2px!important}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfZoomInComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-zoom-in',
                        templateUrl: './pdf-zoom-in.component.html',
                        styleUrls: ['./pdf-zoom-in.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var _c0$4 = ["sizeSelector"];
    function PdfZoomDropdownComponent_option_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "option", 5);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var level_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("id", level_r2.id);
            i0__namespace.ɵɵattribute("value", level_r2.value)("data-l10n-id", level_r2.dataL10nId)("data-l10n-args", level_r2.dataL10nArgs);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", level_r2.displayValue, " ");
        }
    }
    var PdfZoomDropdownComponent = /** @class */ (function () {
        function PdfZoomDropdownComponent(element) {
            this.element = element;
            this._zoomLevels = [];
        }
        Object.defineProperty(PdfZoomDropdownComponent.prototype, "zoomLevels", {
            // ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
            set: function (levels) {
                var _this = this;
                this._zoomLevels = levels.map(function (l) { return _this.valueToZoomLevel(l); });
            },
            enumerable: false,
            configurable: true
        });
        PdfZoomDropdownComponent.prototype.ngOnInit = function () {
            if (typeof document !== 'undefined') {
                var callback_1 = function (e) {
                    document.removeEventListener('localized', callback_1);
                };
                document.addEventListener('localized', callback_1);
            }
        };
        PdfZoomDropdownComponent.prototype.valueToZoomLevel = function (value) {
            if (value.toString().endsWith('%')) {
                value = value.toString().replace('%', '');
                value = Number(value) / 100;
            }
            var numericalValue = Number(value);
            if (!numericalValue) {
                var v = String(value);
                return {
                    id: this.snakeToCamel(value + 'Option'),
                    value: v,
                    dataL10nId: 'page_scale_' + v.replace('page-', ''),
                    dataL10nArgs: undefined,
                    displayValue: v,
                };
            }
            var percentage = Math.round(numericalValue * 100);
            return {
                id: "scale_" + percentage,
                value: String(numericalValue),
                dataL10nId: 'page_scale_percent',
                dataL10nArgs: "{ \"scale\": " + percentage + " }",
                displayValue: String(percentage) + '%',
            };
        };
        PdfZoomDropdownComponent.prototype.snakeToCamel = function (str) {
            // idea found here: https://hisk.io/javascript-snake-to-camel/
            return str.replace(/([-_][a-z])/g, function (group) { return group.toUpperCase().replace('-', '').replace('_', ''); });
        };
        return PdfZoomDropdownComponent;
    }());
    /** @nocollapse */ PdfZoomDropdownComponent.ɵfac = function PdfZoomDropdownComponent_Factory(t) { return new (t || PdfZoomDropdownComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    /** @nocollapse */ PdfZoomDropdownComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfZoomDropdownComponent, selectors: [["pdf-zoom-dropdown"]], viewQuery: function PdfZoomDropdownComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$4, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.sizeSelector = _t.first);
            }
        }, inputs: { zoomLevels: "zoomLevels" }, decls: 5, vars: 1, consts: [["id", "scaleSelectContainer"], ["id", "scaleSelect", "title", "Zoom", "data-l10n-id", "zoom"], ["sizeSelector", ""], [3, "id", 4, "ngFor", "ngForOf"], ["id", "customScaleOption", "title", "", "value", "custom", "disabled", "disabled", "hidden", "true"], [3, "id"]], template: function PdfZoomDropdownComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "span", 0);
                i0__namespace.ɵɵelementStart(1, "select", 1, 2);
                i0__namespace.ɵɵtemplate(3, PdfZoomDropdownComponent_option_3_Template, 2, 5, "option", 3);
                i0__namespace.ɵɵelement(4, "option", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", ctx._zoomLevels);
            }
        }, directives: [i1__namespace.NgForOf, i2__namespace.NgSelectOption, i2__namespace.ɵNgSelectMultipleOption], styles: ["select[_ngcontent-%COMP%]{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid}#customScaleOption[_ngcontent-%COMP%]{display:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfZoomDropdownComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-zoom-dropdown',
                        templateUrl: './pdf-zoom-dropdown.component.html',
                        styleUrls: ['./pdf-zoom-dropdown.component.css'],
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }]; }, { zoomLevels: [{
                    type: i0.Input
                }], sizeSelector: [{
                    type: i0.ViewChild,
                    args: ['sizeSelector']
                }] });
    })();

    var PdfZoomToolbarComponent = /** @class */ (function () {
        function PdfZoomToolbarComponent() {
            this.showZoomButtons = true;
            this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
        }
        return PdfZoomToolbarComponent;
    }());
    /** @nocollapse */ PdfZoomToolbarComponent.ɵfac = function PdfZoomToolbarComponent_Factory(t) { return new (t || PdfZoomToolbarComponent)(); };
    /** @nocollapse */ PdfZoomToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfZoomToolbarComponent, selectors: [["pdf-zoom-toolbar"]], inputs: { showZoomButtons: "showZoomButtons", zoomLevels: "zoomLevels" }, decls: 4, vars: 3, consts: [["id", "toolbarViewerMiddle"], [2, "width", "unset", "max-width", "unset", "padding-top", "3px", 3, "zoomLevels"]], template: function PdfZoomToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelement(1, "pdf-zoom-out");
                i0__namespace.ɵɵelement(2, "pdf-zoom-in");
                i0__namespace.ɵɵelement(3, "pdf-zoom-dropdown", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showZoomButtons);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("zoomLevels", ctx.zoomLevels);
            }
        }, directives: [PdfZoomOutComponent, PdfZoomInComponent, PdfZoomDropdownComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfZoomToolbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-zoom-toolbar',
                        templateUrl: './pdf-zoom-toolbar.component.html',
                        styleUrls: ['./pdf-zoom-toolbar.component.css']
                    }]
            }], null, { showZoomButtons: [{
                    type: i0.Input
                }], zoomLevels: [{
                    type: i0.Input
                }] });
    })();

    var PdfHandToolComponent = /** @class */ (function () {
        function PdfHandToolComponent(notificationService) {
            var _this = this;
            this.notificationService = notificationService;
            this.showHandToolButton = true;
            this.isSelected = false;
            var subscription = this.notificationService.onPDFJSInit.subscribe(function () {
                _this.onPdfJsInit();
                subscription.unsubscribe();
            });
        }
        PdfHandToolComponent.prototype.onPdfJsInit = function () {
            var _this = this;
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.on('cursortoolchanged', function (_a) {
                var tool = _a.tool;
                return (_this.isSelected = tool === PdfCursorTools.HAND);
            });
        };
        PdfHandToolComponent.prototype.onClick = function () {
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: PdfCursorTools.HAND });
        };
        return PdfHandToolComponent;
    }());
    /** @nocollapse */ PdfHandToolComponent.ɵfac = function PdfHandToolComponent_Factory(t) { return new (t || PdfHandToolComponent)(i0__namespace.ɵɵdirectiveInject(PDFNotificationService)); };
    /** @nocollapse */ PdfHandToolComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfHandToolComponent, selectors: [["pdf-hand-tool"]], inputs: { showHandToolButton: "showHandToolButton" }, decls: 5, vars: 4, consts: [["type", "button", "id", "primaryCursorHandTool", "title", "Enable hand tool", "data-l10n-id", "cursor_hand_tool", 1, "toolbarButton", "hiddenXXLView", 3, "click"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"], ["data-l10n-id", "cursor_hand_tool_label"]], template: function PdfHandToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function PdfHandToolComponent_Template_button_click_0_listener() { return ctx.onClick(); });
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Hand Tool");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showHandToolButton)("toggled", ctx.isSelected);
            }
        }, styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}.toggled[_ngcontent-%COMP%]{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:inset 0 1px 1px rgba(0,0,0,.1),inset 0 0 1px rgba(0,0,0,.2),0 1px 0 rgba(255,255,255,.05)}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfHandToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-hand-tool',
                        templateUrl: './pdf-hand-tool.component.html',
                        styleUrls: ['./pdf-hand-tool.component.css']
                    }]
            }], function () { return [{ type: PDFNotificationService }]; }, { showHandToolButton: [{
                    type: i0.Input
                }] });
    })();

    var PdfSelectToolComponent = /** @class */ (function () {
        function PdfSelectToolComponent(notificationService) {
            var _this = this;
            this.notificationService = notificationService;
            this.showSelectToolButton = true;
            this.isSelected = true;
            var subscription = this.notificationService.onPDFJSInit.subscribe(function () {
                _this.onPdfJsInit();
                subscription.unsubscribe();
            });
        }
        PdfSelectToolComponent.prototype.onPdfJsInit = function () {
            var _this = this;
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.on('cursortoolchanged', function (_a) {
                var tool = _a.tool;
                return (_this.isSelected = tool === PdfCursorTools.SELECT);
            });
        };
        PdfSelectToolComponent.prototype.onClick = function () {
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: PdfCursorTools.SELECT });
        };
        return PdfSelectToolComponent;
    }());
    /** @nocollapse */ PdfSelectToolComponent.ɵfac = function PdfSelectToolComponent_Factory(t) { return new (t || PdfSelectToolComponent)(i0__namespace.ɵɵdirectiveInject(PDFNotificationService)); };
    /** @nocollapse */ PdfSelectToolComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfSelectToolComponent, selectors: [["pdf-select-tool"]], inputs: { showSelectToolButton: "showSelectToolButton" }, decls: 5, vars: 4, consts: [["type", "button", "id", "primaryCursorSelectTool", "title", "Enable text selection tool", "data-l10n-id", "cursor_text_select_tool", 1, "toolbarButton", "hiddenXXLView", 3, "click"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z"], ["data-l10n-id", "cursor_text_select_tool_label"]], template: function PdfSelectToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function PdfSelectToolComponent_Template_button_click_0_listener() { return ctx.onClick(); });
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Text selection tool");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showSelectToolButton)("toggled", ctx.isSelected);
            }
        }, styles: ["[_nghost-%COMP%]{margin-top:0;margin-right:-3px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}.toggled[_ngcontent-%COMP%]{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:inset 0 1px 1px rgba(0,0,0,.1),inset 0 0 1px rgba(0,0,0,.2),0 1px 0 rgba(255,255,255,.05)}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfSelectToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-select-tool',
                        templateUrl: './pdf-select-tool.component.html',
                        styleUrls: ['./pdf-select-tool.component.css']
                    }]
            }], function () { return [{ type: PDFNotificationService }]; }, { showSelectToolButton: [{
                    type: i0.Input
                }] });
    })();

    var _c0$3 = ["button1"];
    var _c1$2 = ["button2"];
    function PdfRotatePageComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 2, 3);
            i0__namespace.ɵɵlistener("click", function PdfRotatePageComponent_button_0_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.rotateCW(); });
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(2, "svg", 4);
            i0__namespace.ɵɵelement(3, "path", 5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵclassProp("invisible", !ctx_r0.showRotateButton);
            i0__namespace.ɵɵproperty("disabled", ctx_r0.disableRotate);
        }
    }
    function PdfRotatePageComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 6, 7);
            i0__namespace.ɵɵlistener("click", function PdfRotatePageComponent_button_1_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.rotateCCW(); });
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(2, "svg", 4);
            i0__namespace.ɵɵelement(3, "path", 8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showRotateButton);
            i0__namespace.ɵɵproperty("disabled", ctx_r1.disableRotate);
        }
    }
    var PdfRotatePageComponent = /** @class */ (function () {
        function PdfRotatePageComponent(notificationService) {
            var _this = this;
            this.notificationService = notificationService;
            this.showRotateButton = true;
            this.disableRotate = true;
            this.clockwise = true;
            this.counterClockwise = true;
            var subscription = this.notificationService.onPDFJSInit.subscribe(function () {
                _this.onPdfJsInit();
                subscription.unsubscribe();
            });
        }
        PdfRotatePageComponent.prototype.rotateCW = function () {
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch('rotatecw');
        };
        PdfRotatePageComponent.prototype.rotateCCW = function () {
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch('rotateccw');
        };
        PdfRotatePageComponent.prototype.onPdfJsInit = function () {
            var _this = this;
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.on('updateuistate', function (event) { return _this.updateUIState(event); });
        };
        PdfRotatePageComponent.prototype.updateUIState = function (event) {
            this.disableRotate = event.pagesCount === 0;
            if (this.button1) {
                this.button1.nativeElement.disabled = this.disableRotate;
            }
            if (this.button2) {
                this.button2.nativeElement.disabled = this.disableRotate;
            }
        };
        return PdfRotatePageComponent;
    }());
    /** @nocollapse */ PdfRotatePageComponent.ɵfac = function PdfRotatePageComponent_Factory(t) { return new (t || PdfRotatePageComponent)(i0__namespace.ɵɵdirectiveInject(PDFNotificationService)); };
    /** @nocollapse */ PdfRotatePageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfRotatePageComponent, selectors: [["pdf-rotate-page"]], viewQuery: function PdfRotatePageComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$3, 5);
                i0__namespace.ɵɵviewQuery(_c1$2, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.button1 = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.button2 = _t.first);
            }
        }, inputs: { showRotateButton: "showRotateButton", clockwise: "clockwise", counterClockwise: "counterClockwise" }, decls: 2, vars: 2, consts: [["type", "button", "id", "primaryPageRotateCw", "class", "toolbarButton hiddenXLView rotateCw", "title", "Rotate Clockwise", "data-l10n-id", "page_rotate_cw", 3, "invisible", "disabled", "click", 4, "ngIf"], ["type", "button", "id", "primaryPageRotateCcw", "class", "toolbarButton hiddenXLView rotateCcw", "title", "Rotate Counterclockwise", "data-l10n-id", "page_rotate_ccw", 3, "invisible", "disabled", "click", 4, "ngIf"], ["type", "button", "id", "primaryPageRotateCw", "title", "Rotate Clockwise", "data-l10n-id", "page_rotate_cw", 1, "toolbarButton", "hiddenXLView", "rotateCw", 3, "disabled", "click"], ["button1", ""], ["viewBox", "0 0 24 24", 2, "width", "23px", "height", "23px"], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3"], ["type", "button", "id", "primaryPageRotateCcw", "title", "Rotate Counterclockwise", "data-l10n-id", "page_rotate_ccw", 1, "toolbarButton", "hiddenXLView", "rotateCcw", 3, "disabled", "click"], ["button2", ""], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3"]], template: function PdfRotatePageComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, PdfRotatePageComponent_button_0_Template, 4, 3, "button", 0);
                i0__namespace.ɵɵtemplate(1, PdfRotatePageComponent_button_1_Template, 4, 3, "button", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.clockwise);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.counterClockwise);
            }
        }, directives: [i1__namespace.NgIf], styles: ["[_nghost-%COMP%]{margin-top:-1px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfRotatePageComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-rotate-page',
                        templateUrl: './pdf-rotate-page.component.html',
                        styleUrls: ['./pdf-rotate-page.component.css']
                    }]
            }], function () { return [{ type: PDFNotificationService }]; }, { showRotateButton: [{
                    type: i0.Input
                }], clockwise: [{
                    type: i0.Input
                }], counterClockwise: [{
                    type: i0.Input
                }], button1: [{
                    type: i0.ViewChild,
                    args: ['button1']
                }], button2: [{
                    type: i0.ViewChild,
                    args: ['button2']
                }] });
    })();

    var PdfPresentationModeComponent = /** @class */ (function () {
        function PdfPresentationModeComponent() {
            this.showPresentationModeButton = true;
        }
        return PdfPresentationModeComponent;
    }());
    /** @nocollapse */ PdfPresentationModeComponent.ɵfac = function PdfPresentationModeComponent_Factory(t) { return new (t || PdfPresentationModeComponent)(); };
    /** @nocollapse */ PdfPresentationModeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfPresentationModeComponent, selectors: [["pdf-presentation-mode"]], inputs: { showPresentationModeButton: "showPresentationModeButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "presentationMode", "title", "Switch to Presentation Mode", "data-l10n-id", "presentation_mode", 1, "toolbarButton", "hiddenLargeView"], ["viewBox", "0 0 24 24", 2, "width", "27px", "height", "27px"], ["fill", "currentColor", "d", "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"], ["data-l10n-id", "presentation_mode_label"]], template: function PdfPresentationModeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Presentation Mode");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showPresentationModeButton);
            }
        }, styles: ["[_nghost-%COMP%]   button.toolbarButton[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfPresentationModeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-presentation-mode',
                        templateUrl: './pdf-presentation-mode.component.html',
                        styleUrls: ['./pdf-presentation-mode.component.css']
                    }]
            }], null, { showPresentationModeButton: [{
                    type: i0.Input
                }] });
    })();

    var PdfOpenFileComponent = /** @class */ (function () {
        function PdfOpenFileComponent() {
            this.showOpenFileButton = true;
        }
        return PdfOpenFileComponent;
    }());
    /** @nocollapse */ PdfOpenFileComponent.ɵfac = function PdfOpenFileComponent_Factory(t) { return new (t || PdfOpenFileComponent)(); };
    /** @nocollapse */ PdfOpenFileComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfOpenFileComponent, selectors: [["pdf-open-file"]], inputs: { showOpenFileButton: "showOpenFileButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "openFile", "title", "Open File", "data-l10n-id", "open_file", 1, "toolbarButton", "hiddenMediumView"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "20px"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z"], ["data-l10n-id", "open_file_label"]], template: function PdfOpenFileComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Open");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showOpenFileButton);
            }
        }, styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfOpenFileComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-open-file',
                        templateUrl: './pdf-open-file.component.html',
                        styleUrls: ['./pdf-open-file.component.css']
                    }]
            }], null, { showOpenFileButton: [{
                    type: i0.Input
                }] });
    })();

    var PdfPrintComponent = /** @class */ (function () {
        function PdfPrintComponent() {
            this.showPrintButton = true;
        }
        return PdfPrintComponent;
    }());
    /** @nocollapse */ PdfPrintComponent.ɵfac = function PdfPrintComponent_Factory(t) { return new (t || PdfPrintComponent)(); };
    /** @nocollapse */ PdfPrintComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfPrintComponent, selectors: [["pdf-print"]], inputs: { showPrintButton: "showPrintButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "print", "title", "Print", "data-l10n-id", "print", 1, "toolbarButton", "hiddenSmallView"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"], ["data-l10n-id", "print_label"]], template: function PdfPrintComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Print");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showPrintButton);
            }
        }, styles: ["[_nghost-%COMP%]{margin-top:-1px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfPrintComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-print',
                        templateUrl: './pdf-print.component.html',
                        styleUrls: ['./pdf-print.component.css']
                    }]
            }], null, { showPrintButton: [{
                    type: i0.Input
                }] });
    })();

    var PdfDownloadComponent = /** @class */ (function () {
        function PdfDownloadComponent() {
            this.showDownloadButton = true;
        }
        return PdfDownloadComponent;
    }());
    /** @nocollapse */ PdfDownloadComponent.ɵfac = function PdfDownloadComponent_Factory(t) { return new (t || PdfDownloadComponent)(); };
    /** @nocollapse */ PdfDownloadComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfDownloadComponent, selectors: [["pdf-download"]], inputs: { showDownloadButton: "showDownloadButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "download", "title", "Download", "data-l10n-id", "download", 1, "toolbarButton", "hiddenSmallView"], ["viewBox", "0 0 24 24", 2, "width", "20px", "height", "20px"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z"], ["data-l10n-id", "download_label"]], template: function PdfDownloadComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Download");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showDownloadButton);
            }
        }, styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfDownloadComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-download',
                        templateUrl: './pdf-download.component.html',
                        styleUrls: ['./pdf-download.component.css']
                    }]
            }], null, { showDownloadButton: [{
                    type: i0.Input
                }] });
    })();

    var PdfBookmarkComponent = /** @class */ (function () {
        function PdfBookmarkComponent() {
            this.showBookmarkButton = true;
        }
        return PdfBookmarkComponent;
    }());
    /** @nocollapse */ PdfBookmarkComponent.ɵfac = function PdfBookmarkComponent_Factory(t) { return new (t || PdfBookmarkComponent)(); };
    /** @nocollapse */ PdfBookmarkComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfBookmarkComponent, selectors: [["pdf-bookmark"]], inputs: { showBookmarkButton: "showBookmarkButton" }, decls: 5, vars: 2, consts: [["href", "#", "id", "viewBookmark", "title", "Current view (copy or open in new window)", "data-l10n-id", "bookmark", 1, "toolbarButton", "hiddenTinyView"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"], ["data-l10n-id", "bookmark_label"]], template: function PdfBookmarkComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "a", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Current View");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showBookmarkButton);
            }
        }, styles: ["[_nghost-%COMP%]   a.toolbarButton[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-top:4px}[_nghost-%COMP%]:focus{outline:none}a[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfBookmarkComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-bookmark',
                        templateUrl: './pdf-bookmark.component.html',
                        styleUrls: ['./pdf-bookmark.component.css']
                    }]
            }], null, { showBookmarkButton: [{
                    type: i0.Input
                }] });
    })();

    var PdfToggleSecondaryToolbarComponent = /** @class */ (function () {
        function PdfToggleSecondaryToolbarComponent() {
            this.showSecondaryToolbarButton = true;
        }
        PdfToggleSecondaryToolbarComponent.prototype.ngOnInit = function () { };
        return PdfToggleSecondaryToolbarComponent;
    }());
    /** @nocollapse */ PdfToggleSecondaryToolbarComponent.ɵfac = function PdfToggleSecondaryToolbarComponent_Factory(t) { return new (t || PdfToggleSecondaryToolbarComponent)(); };
    /** @nocollapse */ PdfToggleSecondaryToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfToggleSecondaryToolbarComponent, selectors: [["pdf-toggle-secondary-toolbar"]], inputs: { showSecondaryToolbarButton: "showSecondaryToolbarButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "secondaryToolbarToggle", "title", "Tools", "data-l10n-id", "tools", 1, "toolbarButton"], ["viewBox", "0 0 24 24", "onclick", "event.preventDefault(); return false;", 2, "width", "27px", "height", "27px"], ["fill", "currentColor", "d", "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"], ["data-l10n-id", "tools_label"]], template: function PdfToggleSecondaryToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Tools");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("invisible", !ctx.showSecondaryToolbarButton);
            }
        }, styles: ["svg[_ngcontent-%COMP%]{margin-top:-3px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfToggleSecondaryToolbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-toggle-secondary-toolbar',
                        templateUrl: './pdf-toggle-secondary-toolbar.component.html',
                        styleUrls: ['./pdf-toggle-secondary-toolbar.component.css']
                    }]
            }], function () { return []; }, { showSecondaryToolbarButton: [{
                    type: i0.Input
                }] });
    })();

    function PdfToolbarComponent_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customToolbar ? customToolbar : defaultToolbar"]);
        }
    }
    function PdfToolbarComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 7);
            i0__namespace.ɵɵelementStart(1, "div", 8);
            i0__namespace.ɵɵelement(2, "pdf-toggle-sidebar", 9);
            i0__namespace.ɵɵelement(3, "pdf-find-button", 10);
            i0__namespace.ɵɵelement(4, "pdf-paging-area", 11);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(5, "pdf-zoom-toolbar", 12);
            i0__namespace.ɵɵelementStart(6, "div", 13);
            i0__namespace.ɵɵelement(7, "pdf-hand-tool", 14);
            i0__namespace.ɵɵelement(8, "pdf-select-tool", 15);
            i0__namespace.ɵɵelement(9, "pdf-rotate-page", 16);
            i0__namespace.ɵɵelement(10, "pdf-rotate-page", 16);
            i0__namespace.ɵɵelement(11, "pdf-presentation-mode", 17);
            i0__namespace.ɵɵelement(12, "pdf-open-file", 18);
            i0__namespace.ɵɵelement(13, "pdf-print", 19);
            i0__namespace.ɵɵelement(14, "pdf-download", 20);
            i0__namespace.ɵɵelement(15, "pdf-bookmark", 21);
            i0__namespace.ɵɵelement(16, "pdf-toggle-secondary-toolbar", 22);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("showSidebarButton", ctx_r2.showSidebarButton);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("showFindButton", ctx_r2.showFindButton)("textLayer", ctx_r2.textLayer);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("showPagingButtons", ctx_r2.showPagingButtons);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("showZoomButtons", ctx_r2.showZoomButtons)("zoomLevels", ctx_r2.zoomLevels);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("showHandToolButton", ctx_r2.showHandToolButton);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("showSelectToolButton", ctx_r2.showHandToolButton);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("showRotateButton", ctx_r2.showRotateButton)("clockwise", true)("counterClockwise", false);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("showRotateButton", ctx_r2.showRotateButton)("clockwise", false)("counterClockwise", true);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("showPresentationModeButton", ctx_r2.showPresentationModeButton);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("showOpenFileButton", ctx_r2.showOpenFileButton);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("showPrintButton", ctx_r2.showPrintButton);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("showDownloadButton", ctx_r2.showDownloadButton);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("showBookmarkButton", ctx_r2.showBookmarkButton);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("showSecondaryToolbarButton", ctx_r2.showSecondaryToolbarButton);
        }
    }
    var _c0$2 = ["*"];
    var PdfToolbarComponent = /** @class */ (function () {
        function PdfToolbarComponent() {
            this.mobileFriendlyZoomScale = 1;
            this.primaryMenuVisible = true;
            this.showBookmarkButton = true;
            this.showDownloadButton = true;
            this.showFindButton = undefined;
            this.showHandToolButton = true;
            this.showOpenFileButton = true;
            this.showPrintButton = true;
            this.showPagingButtons = true;
            this.showPresentationModeButton = false;
            this.showRotateButton = true;
            this.showSecondaryToolbarButton = true;
            this.showSidebarButton = true;
            this.showZoomButtons = true;
            this.textLayer = undefined;
            this.toolbarMarginTop = '0px';
            this.toolbarWidth = '100%';
            this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
        }
        return PdfToolbarComponent;
    }());
    /** @nocollapse */ PdfToolbarComponent.ɵfac = function PdfToolbarComponent_Factory(t) { return new (t || PdfToolbarComponent)(); };
    /** @nocollapse */ PdfToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfToolbarComponent, selectors: [["pdf-toolbar"]], inputs: { customToolbar: "customToolbar", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", primaryMenuVisible: "primaryMenuVisible", showBookmarkButton: "showBookmarkButton", showDownloadButton: "showDownloadButton", showFindButton: "showFindButton", showHandToolButton: "showHandToolButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showPagingButtons: "showPagingButtons", showPresentationModeButton: "showPresentationModeButton", showRotateButton: "showRotateButton", showSecondaryToolbarButton: "showSecondaryToolbarButton", showSidebarButton: "showSidebarButton", showZoomButtons: "showZoomButtons", textLayer: "textLayer", toolbarMarginTop: "toolbarMarginTop", toolbarWidth: "toolbarWidth", zoomLevels: "zoomLevels" }, ngContentSelectors: _c0$2, decls: 8, vars: 11, consts: [[1, "toolbar"], ["id", "toolbarContainer"], [4, "ngTemplateOutlet"], ["id", "loadingBar"], [1, "progress"], [1, "glimmer"], ["defaultToolbar", ""], ["id", "toolbarViewer"], ["id", "toolbarViewerLeft"], [3, "showSidebarButton"], [3, "showFindButton", "textLayer"], [3, "showPagingButtons"], [3, "showZoomButtons", "zoomLevels"], ["id", "toolbarViewerRight"], [3, "showHandToolButton"], [3, "showSelectToolButton"], [3, "showRotateButton", "clockwise", "counterClockwise"], [3, "showPresentationModeButton"], [3, "showOpenFileButton"], [3, "showPrintButton"], [3, "showDownloadButton"], [3, "showBookmarkButton"], [3, "showSecondaryToolbarButton"]], template: function PdfToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵtemplate(2, PdfToolbarComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
                i0__namespace.ɵɵelementStart(3, "div", 3);
                i0__namespace.ɵɵelementStart(4, "div", 4);
                i0__namespace.ɵɵelement(5, "div", 5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(6, PdfToolbarComponent_ng_template_6_Template, 17, 20, "ng-template", null, 6, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(7);
                i0__namespace.ɵɵstyleProp("transform", "scale(" + ctx.mobileFriendlyZoomScale + ")")("transform-origin", "left center")("width", ctx.toolbarWidth)("margin-top", ctx.toolbarMarginTop);
                i0__namespace.ɵɵclassProp("invisible", !ctx.primaryMenuVisible);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx.customToolbar ? ctx.customToolbar : _r1);
            }
        }, directives: [i1__namespace.NgTemplateOutlet, PdfToggleSidebarComponent, PdfFindButtonComponent, PdfPagingAreaComponent, PdfZoomToolbarComponent, PdfHandToolComponent, PdfSelectToolComponent, PdfRotatePageComponent, PdfPresentationModeComponent, PdfOpenFileComponent, PdfPrintComponent, PdfDownloadComponent, PdfBookmarkComponent, PdfToggleSecondaryToolbarComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfToolbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-toolbar',
                        templateUrl: './pdf-toolbar.component.html',
                        styleUrls: ['./pdf-toolbar.component.css']
                    }]
            }], function () { return []; }, { customToolbar: [{
                    type: i0.Input
                }], mobileFriendlyZoomScale: [{
                    type: i0.Input
                }], primaryMenuVisible: [{
                    type: i0.Input
                }], showBookmarkButton: [{
                    type: i0.Input
                }], showDownloadButton: [{
                    type: i0.Input
                }], showFindButton: [{
                    type: i0.Input
                }], showHandToolButton: [{
                    type: i0.Input
                }], showOpenFileButton: [{
                    type: i0.Input
                }], showPrintButton: [{
                    type: i0.Input
                }], showPagingButtons: [{
                    type: i0.Input
                }], showPresentationModeButton: [{
                    type: i0.Input
                }], showRotateButton: [{
                    type: i0.Input
                }], showSecondaryToolbarButton: [{
                    type: i0.Input
                }], showSidebarButton: [{
                    type: i0.Input
                }], showZoomButtons: [{
                    type: i0.Input
                }], textLayer: [{
                    type: i0.Input
                }], toolbarMarginTop: [{
                    type: i0.Input
                }], toolbarWidth: [{
                    type: i0.Input
                }], zoomLevels: [{
                    type: i0.Input
                }] });
    })();

    function PdfSecondaryToolbarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵelementStart(1, "div", 3);
            i0__namespace.ɵɵelementStart(2, "button", 4);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(3, "svg", 5);
            i0__namespace.ɵɵelement(4, "path", 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(5, "span", 7);
            i0__namespace.ɵɵtext(6, "Presentation Mode");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "button", 8);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(8, "svg", 5);
            i0__namespace.ɵɵelement(9, "path", 9);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(10, "span", 10);
            i0__namespace.ɵɵtext(11, "Open");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(12, "button", 11);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(13, "svg", 5);
            i0__namespace.ɵɵelement(14, "path", 12);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(15, "span", 13);
            i0__namespace.ɵɵtext(16, "Print");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(17, "button", 14);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(18, "svg", 5);
            i0__namespace.ɵɵelement(19, "path", 15);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(20, "span", 16);
            i0__namespace.ɵɵtext(21, "Download");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(22, "a", 17);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(23, "svg", 5);
            i0__namespace.ɵɵelement(24, "path", 18);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(25, "span", 19);
            i0__namespace.ɵɵtext(26, "Current View");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(27, "button", 20);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(28, "svg", 21);
            i0__namespace.ɵɵelement(29, "path", 22);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(30, "span", 23);
            i0__namespace.ɵɵtext(31, "Go to First Page");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(32, "button", 24);
            i0__namespace.ɵɵlistener("click", function PdfSecondaryToolbarComponent_ng_template_1_Template_button_click_32_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.previousPage(); });
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(33, "svg", 21);
            i0__namespace.ɵɵelement(34, "path", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(35, "span", 26);
            i0__namespace.ɵɵtext(36, "Go to Previous Page");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(37, "button", 27);
            i0__namespace.ɵɵlistener("click", function PdfSecondaryToolbarComponent_ng_template_1_Template_button_click_37_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.nextPage(); });
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(38, "svg", 21);
            i0__namespace.ɵɵelement(39, "path", 28);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(40, "span", 29);
            i0__namespace.ɵɵtext(41, "Go to Next Page");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(42, "button", 30);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(43, "svg", 21);
            i0__namespace.ɵɵelement(44, "path", 31);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(45, "span", 32);
            i0__namespace.ɵɵtext(46, "Go to Last Page");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(47, "button", 33);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(48, "svg", 5);
            i0__namespace.ɵɵelement(49, "path", 34);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(50, "span", 35);
            i0__namespace.ɵɵtext(51, "Rotate Clockwise");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(52, "button", 36);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(53, "svg", 5);
            i0__namespace.ɵɵelement(54, "path", 37);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(55, "span", 38);
            i0__namespace.ɵɵtext(56, "Rotate Counterclockwise");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(57, "button", 39);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(58, "svg", 5);
            i0__namespace.ɵɵelement(59, "path", 40);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(60, "span", 41);
            i0__namespace.ɵɵtext(61, "Text Selection Tool");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(62, "button", 42);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(63, "svg", 5);
            i0__namespace.ɵɵelement(64, "path", 43);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(65, "span", 44);
            i0__namespace.ɵɵtext(66, "Hand Tool");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(67, "button", 45);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(68, "svg", 46);
            i0__namespace.ɵɵelement(69, "path", 47);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(70, "span", 48);
            i0__namespace.ɵɵtext(71, "Vertical Scrolling");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(72, "button", 49);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(73, "svg", 46);
            i0__namespace.ɵɵelement(74, "path", 50);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(75, "span", 51);
            i0__namespace.ɵɵtext(76, "Horizontal Scrolling");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(77, "button", 52);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(78, "svg", 46);
            i0__namespace.ɵɵelement(79, "path", 53);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(80, "span", 54);
            i0__namespace.ɵɵtext(81, "Wrapped Scrolling");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(82, "button", 55);
            i0__namespace.ɵɵlistener("click", function PdfSecondaryToolbarComponent_ng_template_1_Template_button_click_82_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.onSpreadChange("off"); });
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(83, "svg", 56);
            i0__namespace.ɵɵelement(84, "path", 57);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(85, "span", 58);
            i0__namespace.ɵɵtext(86, "No Spreads");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(87, "button", 59);
            i0__namespace.ɵɵlistener("click", function PdfSecondaryToolbarComponent_ng_template_1_Template_button_click_87_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.onSpreadChange("odd"); });
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(88, "svg", 46);
            i0__namespace.ɵɵelement(89, "path", 60);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(90, "span", 61);
            i0__namespace.ɵɵtext(91, "Odd Spreads");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(92, "button", 62);
            i0__namespace.ɵɵlistener("click", function PdfSecondaryToolbarComponent_ng_template_1_Template_button_click_92_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r7 = i0__namespace.ɵɵnextContext(); return ctx_r7.onSpreadChange("even"); });
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(93, "svg", 46);
            i0__namespace.ɵɵelement(94, "path", 63);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(95, "span", 64);
            i0__namespace.ɵɵtext(96, "Even Spreads");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(97, "button", 65);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(98, "svg", 66);
            i0__namespace.ɵɵelement(99, "path", 67);
            i0__namespace.ɵɵelement(100, "path", 68);
            i0__namespace.ɵɵelement(101, "circle", 69);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(102, "span", 70);
            i0__namespace.ɵɵtext(103, "Document Properties\u2026");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("top", ctx_r1.secondaryToolbarTop)("transform", "scale(" + ctx_r1.mobileFriendlyZoomScale + ")")("transform-origin", "right top");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showPresentationModeButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showOpenFileButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showPrintButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showDownloadButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showBookmarkButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showPagingButtons);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showPagingButtons);
            i0__namespace.ɵɵproperty("disabled", ctx_r1.disablePreviousPage);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showPagingButtons);
            i0__namespace.ɵɵproperty("disabled", ctx_r1.disableNextPage);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showPagingButtons);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showRotateButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showRotateButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showHandToolButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showHandToolButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showScrollingButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showScrollingButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showScrollingButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showSpreadButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showSpreadButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showSpreadButton);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showPropertiesButton);
        }
    }
    var PdfSecondaryToolbarComponent = /** @class */ (function () {
        function PdfSecondaryToolbarComponent(element, notificationService) {
            var _this = this;
            this.element = element;
            this.notificationService = notificationService;
            this.showPresentationModeButton = true;
            this.showOpenFileButton = true;
            this.showPrintButton = true;
            this.showDownloadButton = true;
            this.showBookmarkButton = true;
            this.showPagingButtons = true;
            this.showRotateButton = true;
            this.showHandToolButton = true;
            this.showScrollingButton = true;
            this.showSpreadButton = true;
            this.showPropertiesButton = true;
            this.spreadChange = new i0.EventEmitter();
            this.secondaryMenuIsEmpty = new i0.EventEmitter();
            this.disablePreviousPage = true;
            this.disableNextPage = true;
            var subscription = this.notificationService.onPDFJSInit.subscribe(function () {
                _this.onPdfJsInit();
                subscription.unsubscribe();
            });
        }
        PdfSecondaryToolbarComponent.prototype.onPdfJsInit = function () {
            var _this = this;
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.on('pagechanging', function () {
                _this.updateUIState();
            });
            PDFViewerApplication.eventBus.on('pagerendered', function () {
                _this.updateUIState();
            });
        };
        PdfSecondaryToolbarComponent.prototype.updateUIState = function () {
            var _this = this;
            setTimeout(function () {
                var PDFViewerApplication = window.PDFViewerApplication;
                var currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
                var previousButton = document.getElementById('previousPage');
                if (previousButton) {
                    _this.disablePreviousPage = Number(currentPage) <= 1;
                    previousButton.disabled = _this.disablePreviousPage;
                }
                var nextButton = document.getElementById('nextPage');
                if (nextButton) {
                    _this.disableNextPage = currentPage === PDFViewerApplication.pagesCount;
                    nextButton.disabled = _this.disableNextPage;
                }
            });
        };
        PdfSecondaryToolbarComponent.prototype.onSpreadChange = function (newSpread) {
            this.spreadChange.emit(newSpread);
        };
        PdfSecondaryToolbarComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            setTimeout(function () { return _this.checkVisibility(); });
        };
        PdfSecondaryToolbarComponent.prototype.onResize = function () {
            var _this = this;
            setTimeout(function () { return _this.checkVisibility(); });
        };
        PdfSecondaryToolbarComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () { return _this.checkVisibility(); });
        };
        PdfSecondaryToolbarComponent.prototype.ngOnInit = function () {
            var _this = this;
            setTimeout(function () { return _this.checkVisibility(); });
        };
        PdfSecondaryToolbarComponent.prototype.checkVisibility = function () {
            var visibleButtons = 0;
            var e = this.element.nativeElement;
            var f = e.children.item(0);
            if (f) {
                var g = f.children.item(0);
                if (g && g instanceof HTMLElement) {
                    visibleButtons = this.checkVisibilityRecursively(g);
                }
            }
            this.secondaryMenuIsEmpty.emit(visibleButtons === 0);
        };
        PdfSecondaryToolbarComponent.prototype.checkVisibilityRecursively = function (e) {
            if (typeof window === 'undefined') {
                return 0;
            }
            if (e.style.display === 'none') {
                return 0;
            }
            if (e.classList.contains('hidden')) {
                return 0;
            }
            if (e.classList.contains('invisible')) {
                return 0;
            }
            var style = window.getComputedStyle(e);
            if (style.display === 'none') {
                return 0;
            }
            if (e instanceof HTMLButtonElement || e instanceof HTMLAnchorElement) {
                return 1;
            }
            var count = 0;
            var children = e.children;
            if (children && children.length) {
                for (var i = 0; i < children.length && count === 0; i++) {
                    var child = children.item(i);
                    if (child && child instanceof HTMLElement) {
                        count += this.checkVisibilityRecursively(child);
                    }
                }
            }
            return count;
        };
        PdfSecondaryToolbarComponent.prototype.previousPage = function () {
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch('previouspage');
        };
        PdfSecondaryToolbarComponent.prototype.nextPage = function () {
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch('nextpage');
        };
        return PdfSecondaryToolbarComponent;
    }());
    /** @nocollapse */ PdfSecondaryToolbarComponent.ɵfac = function PdfSecondaryToolbarComponent_Factory(t) { return new (t || PdfSecondaryToolbarComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(PDFNotificationService)); };
    /** @nocollapse */ PdfSecondaryToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfSecondaryToolbarComponent, selectors: [["pdf-secondary-toolbar"]], hostBindings: function PdfSecondaryToolbarComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("resize", function PdfSecondaryToolbarComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0__namespace.ɵɵresolveWindow);
            }
        }, inputs: { customSecondaryToolbar: "customSecondaryToolbar", secondaryToolbarTop: "secondaryToolbarTop", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", showBookmarkButton: "showBookmarkButton", showPagingButtons: "showPagingButtons", showRotateButton: "showRotateButton", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton" }, outputs: { spreadChange: "spreadChange", secondaryMenuIsEmpty: "secondaryMenuIsEmpty" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 3, vars: 1, consts: [[3, "ngTemplateOutlet"], ["defaultSecondaryToolbar", ""], ["id", "secondaryToolbar", 1, "secondaryToolbar", "hidden", "doorHangerRight"], ["id", "secondaryToolbarButtonContainer"], ["type", "button", "id", "secondaryPresentationMode", "title", "Switch to Presentation Mode", "data-l10n-id", "presentation_mode", 1, "secondaryToolbarButton", "visibleLargeView"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"], ["data-l10n-id", "presentation_mode_label"], ["type", "button", "id", "secondaryOpenFile", "title", "Open File", "data-l10n-id", "open_file", 1, "secondaryToolbarButton", "visibleMediumView"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z"], ["data-l10n-id", "open_file_label"], ["type", "button", "id", "secondaryPrint", "title", "Print", "data-l10n-id", "print", 1, "secondaryToolbarButton", "visibleSmallView"], ["fill", "currentColor", "d", "M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"], ["data-l10n-id", "print_label"], ["type", "button", "id", "secondaryDownload", "title", "Download", "data-l10n-id", "download", 1, "secondaryToolbarButton", "visibleSmallView"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z"], ["data-l10n-id", "download_label"], ["href", "#", "id", "secondaryViewBookmark", "title", "Current view (copy or open in new window)", "data-l10n-id", "bookmark", 1, "secondaryToolbarButton", "bookmark", "visibleTinyView"], ["fill", "currentColor", "d", "M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"], ["data-l10n-id", "bookmark_label"], ["type", "button", "id", "firstPage", "title", "Go to First Page", "data-l10n-id", "first_page", 1, "secondaryToolbarButton", "firstPage", "visibleLargeView"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z"], ["data-l10n-id", "first_page_label"], ["type", "button", "id", "previousPage", "title", "Go to Previous Page", "data-l10n-id", "previous", 1, "secondaryToolbarButton", "previousPage", "visibleTinyView", 3, "disabled", "click"], ["fill", "currentColor", "d", "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"], ["data-l10n-id", "previous_label"], ["type", "button", "id", "nextPage", "title", "Go to Next Page", "data-l10n-id", "next", 1, "secondaryToolbarButton", "nextPage", "visibleTinyView", 3, "disabled", "click"], ["fill", "currentColor", "d", "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"], ["data-l10n-id", "next_label"], ["type", "button", "id", "lastPage", "title", "Go to Last Page", "data-l10n-id", "last_page", 1, "secondaryToolbarButton", "lastPage", "visibleLargeView"], ["fill", "currentColor", "d", "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z"], ["data-l10n-id", "last_page_label"], ["type", "button", "id", "pageRotateCw", "title", "Rotate Clockwise", "data-l10n-id", "page_rotate_cw", 1, "secondaryToolbarButton", "rotateCw", "visibleXLView"], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3"], ["data-l10n-id", "page_rotate_cw_label"], ["type", "button", "id", "pageRotateCcw", "title", "Rotate Counterclockwise", "data-l10n-id", "page_rotate_ccw", 1, "secondaryToolbarButton", "rotateCcw", "visibleXLView"], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3"], ["data-l10n-id", "page_rotate_ccw_label"], ["type", "button", "id", "cursorSelectTool", "title", "Enable Text Selection Tool", "data-l10n-id", "cursor_text_select_tool", 1, "secondaryToolbarButton", "toggled", "visibleXXLView"], ["fill", "currentColor", "d", "M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z"], ["data-l10n-id", "cursor_text_select_tool_label"], ["type", "button", "id", "cursorHandTool", "title", "Enable Hand Tool", "data-l10n-id", "cursor_hand_tool", 1, "secondaryToolbarButton", "visibleXXLView"], ["fill", "currentColor", "d", "M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"], ["data-l10n-id", "cursor_hand_tool_label"], ["type", "button", "id", "scrollVertical", "title", "Use Vertical Scrolling", "data-l10n-id", "scroll_vertical", 1, "secondaryToolbarButton", "scrollVertical", "toggled"], [2, "width", "24px", "height", "24px", "margin-top", "3px"], ["fill", "currentColor", "d", "M9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM11 0v.5c0 1-.5 1.5-1.5 1.5h-3C5.5 2 5 1.5 5 .5V0h6zM11 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6z"], ["data-l10n-id", "scroll_vertical_label"], ["type", "button", "id", "scrollHorizontal", "title", "Use Horizontal Scrolling", "data-l10n-id", "scroll_horizontal", 1, "secondaryToolbarButton", "scrollHorizontal"], ["fill", "currentColor", "d", "M0 4h1.5c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5H0zM9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM16 4h-1.5c-1 0-1.5.5-1.5 1.5v5c0 1 .5 1.5 1.5 1.5H16z"], ["data-l10n-id", "scroll_horizontal_label"], ["type", "button", "id", "scrollWrapped", "title", "Use Wrapped Scrolling", "data-l10n-id", "scroll_wrapped", 1, "secondaryToolbarButton", "scrollWrapped"], ["fill", "currentColor", "d", "M5.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C1 4.5 1.5 4 2.5 4zM7 0v.5C7 1.5 6.5 2 5.5 2h-3C1.5 2 1 1.5 1 .5V0h6zM7 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6zM13.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5zM15 0v.5c0 1-.5 1.5-1.5 1.5h-3C9.5 2 9 1.5 9 .5V0h6zM15 16v-.507c0-1-.5-1.5-1.5-1.5h-3C9.5 14 9 14.5 9 15.5v.5h6z"], ["data-l10n-id", "scroll_wrapped_label"], ["type", "button", "id", "spreadNone", "title", "Do not join page spreads", "data-l10n-id", "spread_none", 1, "secondaryToolbarButton", "spreadNone", "toggled", 3, "click"], ["height", "16", "width", "16"], ["fill", "currentColor", "d", "M6 3c-1 0-1.5.5-1.5 1.5v7c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5v-7c0-1-.5-1.5-1.5-1.5z"], ["data-l10n-id", "spread_none_label"], ["type", "button", "id", "spreadOdd", "title", "Join page spreads starting with odd-numbered pages", "data-l10n-id", "spread_odd", 1, "secondaryToolbarButton", "spreadOdd", 3, "click"], ["fill", "currentColor", "d", "M10.56 3.5C9.56 3.5 9 4 9 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.93 1.2c.8 0 1.4.2 1.8.64.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.44-.2.3-.6.6-1 .93l-.6.4c-.4.3-.6.4-.7.55-.1.1-.2.2-.3.4h3.2v1.27h-5c0-.5.1-1 .3-1.43.2-.49.7-1 1.5-1.54.7-.5 1.1-.8 1.3-1.02.3-.3.4-.7.4-1.05 0-.3-.1-.6-.3-.77-.2-.2-.4-.3-.7-.3-.4 0-.7.2-.9.5-.1.2-.1.5-.2.9h-1.4c0-.6.2-1.1.3-1.5.4-.7 1.1-1.1 2-1.1zM1.54 3.5C.54 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.54 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.8 1.125H4.5V12H3V6.9H1.3v-1c.5 0 .8 0 .97-.03.33-.07.53-.17.73-.37.1-.2.2-.3.25-.5.05-.2.05-.3.05-.3z"], ["data-l10n-id", "spread_odd_label"], ["type", "button", "id", "spreadEven", "title", "Join page spreads starting with even-numbered pages", "data-l10n-id", "spread_even", 1, "secondaryToolbarButton", "spreadEven", 3, "click"], ["fill", "currentColor", "d", "M1.5 3.5C.5 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm2 1.2c.8 0 1.4.2 1.8.6.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.4-.2.3-.5.7-1 1l-.6.4c-.4.3-.6.4-.75.56-.15.14-.25.24-.35.44H6v1.3H1c0-.6.1-1.1.3-1.5.3-.6.7-1 1.5-1.6.7-.4 1.1-.8 1.28-1 .32-.3.42-.6.42-1 0-.3-.1-.6-.23-.8-.17-.2-.37-.3-.77-.3s-.7.1-.9.5c-.04.2-.1.5-.1.9H1.1c0-.6.1-1.1.3-1.5.4-.7 1.1-1.1 2.1-1.1zM10.54 3.54C9.5 3.54 9 4 9 5v6.5c0 1 .5 1.5 1.54 1.5h4c.96 0 1.46-.5 1.46-1.5V5c0-1-.5-1.46-1.5-1.46zm1.9.95c.7 0 1.3.2 1.7.5.4.4.6.8.6 1.4 0 .4-.1.8-.4 1.1-.2.2-.3.3-.5.4.1 0 .3.1.6.3.4.3.5.8.5 1.4 0 .6-.2 1.2-.6 1.6-.4.5-1.1.7-1.9.7-1 0-1.8-.3-2.2-1-.14-.29-.24-.69-.24-1.29h1.4c0 .3 0 .5.1.7.2.4.5.5 1 .5.3 0 .5-.1.7-.3.2-.2.3-.5.3-.8 0-.5-.2-.8-.6-.95-.2-.05-.5-.15-1-.15v-1c.5 0 .8-.1 1-.14.3-.1.5-.4.5-.9 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.7-.3-.3 0-.6.1-.75.3-.2.2-.2.5-.2.86h-1.34c0-.4.1-.7.19-1.1 0-.12.2-.32.4-.62.2-.2.4-.3.7-.4.3-.1.6-.1 1-.1z"], ["data-l10n-id", "spread_even_label"], ["type", "button", "id", "documentProperties", "title", "Document Properties\u2026", "data-l10n-id", "document_properties", 1, "secondaryToolbarButton", "documentProperties"], ["viewBox", "0 0 16 16", 2, "width", "16px", "height", "16px", "margin-top", "3px"], ["fill", "currentColor", "d", "M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM8 2a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6z"], ["fill", "currentColor", "d", "M8 7a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z"], ["fill", "currentColor", "cx", "8", "cy", "5", "r", "1.188"], ["data-l10n-id", "document_properties_label"]], template: function PdfSecondaryToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementContainer(0, 0);
                i0__namespace.ɵɵtemplate(1, PdfSecondaryToolbarComponent_ng_template_1_Template, 104, 48, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(2);
                i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx.customSecondaryToolbar ? ctx.customSecondaryToolbar : _r0);
            }
        }, directives: [i1__namespace.NgTemplateOutlet], styles: ["svg[_ngcontent-%COMP%]{position:absolute;display:inline-block;top:0;left:0}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfSecondaryToolbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-secondary-toolbar',
                        templateUrl: './pdf-secondary-toolbar.component.html',
                        styleUrls: ['./pdf-secondary-toolbar.component.css'],
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: PDFNotificationService }]; }, { customSecondaryToolbar: [{
                    type: i0.Input
                }], secondaryToolbarTop: [{
                    type: i0.Input
                }], mobileFriendlyZoomScale: [{
                    type: i0.Input
                }], showPresentationModeButton: [{
                    type: i0.Input
                }], showOpenFileButton: [{
                    type: i0.Input
                }], showPrintButton: [{
                    type: i0.Input
                }], showDownloadButton: [{
                    type: i0.Input
                }], showBookmarkButton: [{
                    type: i0.Input
                }], showPagingButtons: [{
                    type: i0.Input
                }], showRotateButton: [{
                    type: i0.Input
                }], showHandToolButton: [{
                    type: i0.Input
                }], showScrollingButton: [{
                    type: i0.Input
                }], showSpreadButton: [{
                    type: i0.Input
                }], showPropertiesButton: [{
                    type: i0.Input
                }], spreadChange: [{
                    type: i0.Output
                }], secondaryMenuIsEmpty: [{
                    type: i0.Output
                }], onResize: [{
                    type: i0.HostListener,
                    args: ['window:resize']
                }] });
    })();

    var PdfFindbarService = /** @class */ (function () {
        function PdfFindbarService() {
            this.individualWordsMode = true;
            this.multipleSearchTexts = false;
        }
        return PdfFindbarService;
    }());
    /** @nocollapse */ PdfFindbarService.ɵfac = function PdfFindbarService_Factory(t) { return new (t || PdfFindbarService)(); };
    /** @nocollapse */ PdfFindbarService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: PdfFindbarService, factory: PdfFindbarService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindbarService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    var PdfSearchInputFieldComponent = /** @class */ (function () {
        function PdfSearchInputFieldComponent(pdfFindbarService) {
            this.pdfFindbarService = pdfFindbarService;
        }
        return PdfSearchInputFieldComponent;
    }());
    /** @nocollapse */ PdfSearchInputFieldComponent.ɵfac = function PdfSearchInputFieldComponent_Factory(t) { return new (t || PdfSearchInputFieldComponent)(i0__namespace.ɵɵdirectiveInject(PdfFindbarService)); };
    /** @nocollapse */ PdfSearchInputFieldComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfSearchInputFieldComponent, selectors: [["pdf-search-input-field"]], decls: 2, vars: 5, consts: [["autocomplete", "search-input-field", "id", "findInput", "title", "Find", "data-l10n-id", "find_input", "name", "search-input-field", 1, "toolbarField", 3, "placeholder"], ["id", "findInputMultiline", "type", "checkbox", "placeholder", "Multiple search terms. Each line is a search term.", "data-l10n-id", "find_input_line_by_line", "lines", "3", 1, "toolbarField"]], template: function PdfSearchInputFieldComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "input", 0);
                i0__namespace.ɵɵelement(1, "textarea", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("hidden", !ctx.pdfFindbarService.individualWordsMode);
                i0__namespace.ɵɵproperty("placeholder", "Find in document\u2026");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassProp("hidden", ctx.pdfFindbarService.individualWordsMode);
            }
        }, styles: ["textarea[_ngcontent-%COMP%]{width:200px;height:3.5em}textarea[_ngcontent-%COMP%]::-moz-placeholder{font-style:italic}textarea[_ngcontent-%COMP%]:-ms-input-placeholder{font-style:italic}textarea[_ngcontent-%COMP%]::placeholder{font-style:italic}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfSearchInputFieldComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-search-input-field',
                        templateUrl: './pdf-search-input-field.component.html',
                        styleUrls: ['./pdf-search-input-field.component.css'],
                    }]
            }], function () { return [{ type: PdfFindbarService }]; }, null);
    })();

    var PdfFindPreviousComponent = /** @class */ (function () {
        function PdfFindPreviousComponent() {
        }
        PdfFindPreviousComponent.prototype.ngOnInit = function () {
        };
        return PdfFindPreviousComponent;
    }());
    /** @nocollapse */ PdfFindPreviousComponent.ɵfac = function PdfFindPreviousComponent_Factory(t) { return new (t || PdfFindPreviousComponent)(); };
    /** @nocollapse */ PdfFindPreviousComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindPreviousComponent, selectors: [["pdf-find-previous"]], decls: 5, vars: 0, consts: [["type", "button", "id", "findPrevious", "title", "Find the previous occurrence of the phrase", "data-l10n-id", "find_previous", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"], ["data-l10n-id", "find_previous_label"]], template: function PdfFindPreviousComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Previous");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: ["button.toolbarButton#findPrevious[_ngcontent-%COMP%]{margin-top:0}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindPreviousComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-find-previous',
                        templateUrl: './pdf-find-previous.component.html',
                        styleUrls: ['./pdf-find-previous.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfFindNextComponent = /** @class */ (function () {
        function PdfFindNextComponent() {
        }
        PdfFindNextComponent.prototype.ngOnInit = function () {
        };
        return PdfFindNextComponent;
    }());
    /** @nocollapse */ PdfFindNextComponent.ɵfac = function PdfFindNextComponent_Factory(t) { return new (t || PdfFindNextComponent)(); };
    /** @nocollapse */ PdfFindNextComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindNextComponent, selectors: [["pdf-find-next"]], decls: 5, vars: 0, consts: [["type", "button", "id", "findNext", "title", "Find the next occurrence of the phrase", "data-l10n-id", "find_next", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"], ["data-l10n-id", "find_next_label"]], template: function PdfFindNextComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(1, "svg", 1);
                i0__namespace.ɵɵelement(2, "path", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceHTML();
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: ["button.toolbarButton#findNext[_ngcontent-%COMP%]{margin-top:0}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindNextComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-find-next',
                        templateUrl: './pdf-find-next.component.html',
                        styleUrls: ['./pdf-find-next.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    function PdfFindInputAreaComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵelement(1, "pdf-search-input-field");
            i0__namespace.ɵɵelement(2, "pdf-find-previous");
            i0__namespace.ɵɵelement(3, "pdf-find-next");
            i0__namespace.ɵɵelementEnd();
        }
    }
    var PdfFindInputAreaComponent = /** @class */ (function () {
        function PdfFindInputAreaComponent() {
        }
        return PdfFindInputAreaComponent;
    }());
    /** @nocollapse */ PdfFindInputAreaComponent.ɵfac = function PdfFindInputAreaComponent_Factory(t) { return new (t || PdfFindInputAreaComponent)(); };
    /** @nocollapse */ PdfFindInputAreaComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindInputAreaComponent, selectors: [["pdf-find-input-area"]], inputs: { customFindbarInputArea: "customFindbarInputArea" }, decls: 2, vars: 2, consts: [["id", "findbarInputContainer", 4, "ngIf"], [3, "ngTemplateOutlet"], ["id", "findbarInputContainer"]], template: function PdfFindInputAreaComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, PdfFindInputAreaComponent_div_0_Template, 4, 0, "div", 0);
                i0__namespace.ɵɵelementContainer(1, 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", !ctx.customFindbarInputArea);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx.customFindbarInputArea);
            }
        }, directives: [i1__namespace.NgIf, i1__namespace.NgTemplateOutlet, PdfSearchInputFieldComponent, PdfFindPreviousComponent, PdfFindNextComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindInputAreaComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-find-input-area',
                        templateUrl: './pdf-find-input-area.component.html',
                        styleUrls: ['./pdf-find-input-area.component.css']
                    }]
            }], function () { return []; }, { customFindbarInputArea: [{
                    type: i0.Input
                }] });
    })();

    var PdfFindHighlightAllComponent = /** @class */ (function () {
        function PdfFindHighlightAllComponent() {
        }
        PdfFindHighlightAllComponent.prototype.ngOnInit = function () {
        };
        return PdfFindHighlightAllComponent;
    }());
    /** @nocollapse */ PdfFindHighlightAllComponent.ɵfac = function PdfFindHighlightAllComponent_Factory(t) { return new (t || PdfFindHighlightAllComponent)(); };
    /** @nocollapse */ PdfFindHighlightAllComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindHighlightAllComponent, selectors: [["pdf-find-highlight-all"]], decls: 3, vars: 0, consts: [["type", "checkbox", "id", "findHighlightAll", 1, "toolbarField"], ["for", "findHighlightAll", "data-l10n-id", "find_highlight", 1, "toolbarLabel"]], template: function PdfFindHighlightAllComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "input", 0);
                i0__namespace.ɵɵelementStart(1, "label", 1);
                i0__namespace.ɵɵtext(2, " Highlight all\n");
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindHighlightAllComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-find-highlight-all',
                        templateUrl: './pdf-find-highlight-all.component.html',
                        styleUrls: ['./pdf-find-highlight-all.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfFindMatchCaseComponent = /** @class */ (function () {
        function PdfFindMatchCaseComponent() {
        }
        PdfFindMatchCaseComponent.prototype.ngOnInit = function () {
        };
        return PdfFindMatchCaseComponent;
    }());
    /** @nocollapse */ PdfFindMatchCaseComponent.ɵfac = function PdfFindMatchCaseComponent_Factory(t) { return new (t || PdfFindMatchCaseComponent)(); };
    /** @nocollapse */ PdfFindMatchCaseComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindMatchCaseComponent, selectors: [["pdf-find-match-case"]], decls: 3, vars: 0, consts: [["type", "checkbox", "id", "findMatchCase", 1, "toolbarField"], ["for", "findMatchCase", "data-l10n-id", "find_match_case_label", 1, "toolbarLabel"]], template: function PdfFindMatchCaseComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "input", 0);
                i0__namespace.ɵɵelementStart(1, "label", 1);
                i0__namespace.ɵɵtext(2, " Match case\n");
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindMatchCaseComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-find-match-case',
                        templateUrl: './pdf-find-match-case.component.html',
                        styleUrls: ['./pdf-find-match-case.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfFindbarOptionsOneContainerComponent = /** @class */ (function () {
        function PdfFindbarOptionsOneContainerComponent() {
        }
        PdfFindbarOptionsOneContainerComponent.prototype.ngOnInit = function () {
        };
        return PdfFindbarOptionsOneContainerComponent;
    }());
    /** @nocollapse */ PdfFindbarOptionsOneContainerComponent.ɵfac = function PdfFindbarOptionsOneContainerComponent_Factory(t) { return new (t || PdfFindbarOptionsOneContainerComponent)(); };
    /** @nocollapse */ PdfFindbarOptionsOneContainerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindbarOptionsOneContainerComponent, selectors: [["pdf-findbar-options-one-container"]], decls: 3, vars: 0, consts: [["id", "findbarOptionsOneContainer"]], template: function PdfFindbarOptionsOneContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelement(1, "pdf-find-highlight-all");
                i0__namespace.ɵɵelement(2, "pdf-find-match-case");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [PdfFindHighlightAllComponent, PdfFindMatchCaseComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindbarOptionsOneContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-findbar-options-one-container',
                        templateUrl: './pdf-findbar-options-one-container.component.html',
                        styleUrls: ['./pdf-findbar-options-one-container.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfFindEntireWordComponent = /** @class */ (function () {
        function PdfFindEntireWordComponent() {
        }
        PdfFindEntireWordComponent.prototype.ngOnInit = function () {
        };
        return PdfFindEntireWordComponent;
    }());
    /** @nocollapse */ PdfFindEntireWordComponent.ɵfac = function PdfFindEntireWordComponent_Factory(t) { return new (t || PdfFindEntireWordComponent)(); };
    /** @nocollapse */ PdfFindEntireWordComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindEntireWordComponent, selectors: [["pdf-find-entire-word"]], decls: 3, vars: 0, consts: [["type", "checkbox", "id", "findEntireWord", 1, "toolbarField"], ["for", "findEntireWord", "data-l10n-id", "find_entire_word_label", 1, "toolbarLabel"]], template: function PdfFindEntireWordComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "input", 0);
                i0__namespace.ɵɵelementStart(1, "label", 1);
                i0__namespace.ɵɵtext(2, " Whole words\n");
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindEntireWordComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-find-entire-word',
                        templateUrl: './pdf-find-entire-word.component.html',
                        styleUrls: ['./pdf-find-entire-word.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfFindMultipleSearchTextsComponent = /** @class */ (function () {
        function PdfFindMultipleSearchTextsComponent(pdfFindbarService) {
            this.pdfFindbarService = pdfFindbarService;
        }
        PdfFindMultipleSearchTextsComponent.prototype.ngOnInit = function () { };
        return PdfFindMultipleSearchTextsComponent;
    }());
    /** @nocollapse */ PdfFindMultipleSearchTextsComponent.ɵfac = function PdfFindMultipleSearchTextsComponent_Factory(t) { return new (t || PdfFindMultipleSearchTextsComponent)(i0__namespace.ɵɵdirectiveInject(PdfFindbarService)); };
    /** @nocollapse */ PdfFindMultipleSearchTextsComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindMultipleSearchTextsComponent, selectors: [["pdf-find-entire-phrase"]], decls: 6, vars: 6, consts: [["type", "checkbox", "id", "findMultipleSearchTexts", 1, "toolbarField", 3, "ngModel", "ngModelChange"], ["for", "findMultipleSearchTexts", "data-l10n-id", "find_multiple_texts_label", 1, "toolbarLabel"], ["type", "checkbox", "id", "individualWordsMode", 1, "toolbarField", 3, "ngModel", "ngModelChange"], ["for", "individualWordsMode", "id", "individualWordsModeLabel", "data-l10n-id", "find_individual_words_label", 1, "toolbarLabel"]], template: function PdfFindMultipleSearchTextsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "input", 0);
                i0__namespace.ɵɵlistener("ngModelChange", function PdfFindMultipleSearchTextsComponent_Template_input_ngModelChange_0_listener($event) { return ctx.pdfFindbarService.multipleSearchTexts = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(1, "label", 1);
                i0__namespace.ɵɵtext(2, " multiple search texts\n");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "input", 2);
                i0__namespace.ɵɵlistener("ngModelChange", function PdfFindMultipleSearchTextsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.pdfFindbarService.individualWordsMode = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "label", 3);
                i0__namespace.ɵɵtext(5, " separated by word boundaries\n");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngModel", ctx.pdfFindbarService.multipleSearchTexts);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵclassProp("hidden", !ctx.pdfFindbarService.multipleSearchTexts);
                i0__namespace.ɵɵproperty("ngModel", ctx.pdfFindbarService.individualWordsMode);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassProp("hidden", !ctx.pdfFindbarService.multipleSearchTexts);
            }
        }, directives: [i2__namespace.CheckboxControlValueAccessor, i2__namespace.NgControlStatus, i2__namespace.NgModel], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindMultipleSearchTextsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-find-entire-phrase',
                        templateUrl: './pdf-find-entire-phrase.component.html',
                        styleUrls: ['./pdf-find-entire-phrase.component.css']
                    }]
            }], function () { return [{ type: PdfFindbarService }]; }, null);
    })();

    var PdfFindbarOptionsTwoContainerComponent = /** @class */ (function () {
        function PdfFindbarOptionsTwoContainerComponent() {
        }
        PdfFindbarOptionsTwoContainerComponent.prototype.ngOnInit = function () {
        };
        return PdfFindbarOptionsTwoContainerComponent;
    }());
    /** @nocollapse */ PdfFindbarOptionsTwoContainerComponent.ɵfac = function PdfFindbarOptionsTwoContainerComponent_Factory(t) { return new (t || PdfFindbarOptionsTwoContainerComponent)(); };
    /** @nocollapse */ PdfFindbarOptionsTwoContainerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindbarOptionsTwoContainerComponent, selectors: [["pdf-findbar-options-two-container"]], decls: 3, vars: 0, consts: [["id", "findbarOptionsTwoContainer"]], template: function PdfFindbarOptionsTwoContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelement(1, "pdf-find-entire-word");
                i0__namespace.ɵɵelement(2, "pdf-find-entire-phrase");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [PdfFindEntireWordComponent, PdfFindMultipleSearchTextsComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindbarOptionsTwoContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-findbar-options-two-container',
                        templateUrl: './pdf-findbar-options-two-container.component.html',
                        styleUrls: ['./pdf-findbar-options-two-container.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfFindIgnoreAccentsComponent = /** @class */ (function () {
        function PdfFindIgnoreAccentsComponent() {
        }
        PdfFindIgnoreAccentsComponent.prototype.ngOnInit = function () {
        };
        return PdfFindIgnoreAccentsComponent;
    }());
    /** @nocollapse */ PdfFindIgnoreAccentsComponent.ɵfac = function PdfFindIgnoreAccentsComponent_Factory(t) { return new (t || PdfFindIgnoreAccentsComponent)(); };
    /** @nocollapse */ PdfFindIgnoreAccentsComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindIgnoreAccentsComponent, selectors: [["pdf-find-ignore-accents"]], decls: 3, vars: 0, consts: [["type", "checkbox", "id", "findIgnoreAccents", 1, "toolbarField"], ["for", "findIgnoreAccents", "data-l10n-id", "find_ignore_accents", 1, "toolbarLabel"]], template: function PdfFindIgnoreAccentsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "input", 0);
                i0__namespace.ɵɵelementStart(1, "label", 1);
                i0__namespace.ɵɵtext(2, " Ignore accents and diacritics\n");
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindIgnoreAccentsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-find-ignore-accents',
                        templateUrl: './pdf-find-ignore-accents.component.html',
                        styleUrls: ['./pdf-find-ignore-accents.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfFindFuzzilyComponent = /** @class */ (function () {
        function PdfFindFuzzilyComponent() {
        }
        PdfFindFuzzilyComponent.prototype.ngOnInit = function () {
        };
        return PdfFindFuzzilyComponent;
    }());
    /** @nocollapse */ PdfFindFuzzilyComponent.ɵfac = function PdfFindFuzzilyComponent_Factory(t) { return new (t || PdfFindFuzzilyComponent)(); };
    /** @nocollapse */ PdfFindFuzzilyComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindFuzzilyComponent, selectors: [["pdf-find-fuzzily"]], decls: 3, vars: 0, consts: [["type", "checkbox", "id", "findFuzzy", 1, "toolbarField"], ["for", "findFuzzy", "data-l10n-id", "find_fuzzy", 1, "toolbarLabel"]], template: function PdfFindFuzzilyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "input", 0);
                i0__namespace.ɵɵelementStart(1, "label", 1);
                i0__namespace.ɵɵtext(2, " Fuzzy search\n");
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindFuzzilyComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-find-fuzzily',
                        templateUrl: './pdf-find-fuzzily.component.html',
                        styleUrls: ['./pdf-find-fuzzily.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfFindResultsCountComponent = /** @class */ (function () {
        function PdfFindResultsCountComponent() {
        }
        PdfFindResultsCountComponent.prototype.ngOnInit = function () {
        };
        return PdfFindResultsCountComponent;
    }());
    /** @nocollapse */ PdfFindResultsCountComponent.ɵfac = function PdfFindResultsCountComponent_Factory(t) { return new (t || PdfFindResultsCountComponent)(); };
    /** @nocollapse */ PdfFindResultsCountComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindResultsCountComponent, selectors: [["pdf-find-results-count"]], decls: 1, vars: 0, consts: [["id", "findResultsCount", 1, "toolbarLabel", "hidden"]], template: function PdfFindResultsCountComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "span", 0);
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindResultsCountComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-find-results-count',
                        templateUrl: './pdf-find-results-count.component.html',
                        styleUrls: ['./pdf-find-results-count.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfFindbarOptionsThreeContainerComponent = /** @class */ (function () {
        function PdfFindbarOptionsThreeContainerComponent() {
        }
        PdfFindbarOptionsThreeContainerComponent.prototype.ngOnInit = function () {
        };
        return PdfFindbarOptionsThreeContainerComponent;
    }());
    /** @nocollapse */ PdfFindbarOptionsThreeContainerComponent.ɵfac = function PdfFindbarOptionsThreeContainerComponent_Factory(t) { return new (t || PdfFindbarOptionsThreeContainerComponent)(); };
    /** @nocollapse */ PdfFindbarOptionsThreeContainerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindbarOptionsThreeContainerComponent, selectors: [["pdf-findbar-options-three-container"]], decls: 4, vars: 0, consts: [["id", "findbarOptionsThreeContainer"]], template: function PdfFindbarOptionsThreeContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelement(1, "pdf-find-ignore-accents");
                i0__namespace.ɵɵelement(2, "pdf-find-fuzzily");
                i0__namespace.ɵɵelement(3, "pdf-find-results-count");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [PdfFindIgnoreAccentsComponent, PdfFindFuzzilyComponent, PdfFindResultsCountComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindbarOptionsThreeContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-findbar-options-three-container',
                        templateUrl: './pdf-findbar-options-three-container.component.html',
                        styleUrls: ['./pdf-findbar-options-three-container.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfFindbarMessageContainerComponent = /** @class */ (function () {
        function PdfFindbarMessageContainerComponent() {
        }
        PdfFindbarMessageContainerComponent.prototype.ngOnInit = function () {
        };
        return PdfFindbarMessageContainerComponent;
    }());
    /** @nocollapse */ PdfFindbarMessageContainerComponent.ɵfac = function PdfFindbarMessageContainerComponent_Factory(t) { return new (t || PdfFindbarMessageContainerComponent)(); };
    /** @nocollapse */ PdfFindbarMessageContainerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindbarMessageContainerComponent, selectors: [["pdf-findbar-message-container"]], decls: 2, vars: 0, consts: [["id", "findbarMessageContainer"], ["id", "findMsg", 1, "toolbarLabel"]], template: function PdfFindbarMessageContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelement(1, "span", 1);
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindbarMessageContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-findbar-message-container',
                        templateUrl: './pdf-findbar-message-container.component.html',
                        styleUrls: ['./pdf-findbar-message-container.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    function PdfFindbarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵelementContainer(1, 0);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            var _r2 = i0__namespace.ɵɵreference(4);
            i0__namespace.ɵɵstyleProp("transform", "scale(" + ctx_r1.mobileFriendlyZoomScale + ")")("transform-origin", "left center")("left", ctx_r1.findbarLeft)("top", ctx_r1.findbarTop);
            i0__namespace.ɵɵclassProp("invisible", !ctx_r1.showFindButton);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r1.customFindbarButtons ? ctx_r1.customFindbarButtons : _r2);
        }
    }
    function PdfFindbarComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "pdf-find-input-area", 4);
            i0__namespace.ɵɵelement(1, "pdf-findbar-options-one-container");
            i0__namespace.ɵɵelement(2, "pdf-findbar-options-two-container");
            i0__namespace.ɵɵelement(3, "pdf-findbar-options-three-container");
            i0__namespace.ɵɵelement(4, "pdf-findbar-message-container");
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("customFindbarInputArea", ctx_r3.customFindbarInputArea);
        }
    }
    var PdfFindbarComponent = /** @class */ (function () {
        function PdfFindbarComponent() {
            this.showFindButton = true;
        }
        return PdfFindbarComponent;
    }());
    /** @nocollapse */ PdfFindbarComponent.ɵfac = function PdfFindbarComponent_Factory(t) { return new (t || PdfFindbarComponent)(); };
    /** @nocollapse */ PdfFindbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfFindbarComponent, selectors: [["pdf-findbar"]], inputs: { showFindButton: "showFindButton", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", findbarLeft: "findbarLeft", findbarTop: "findbarTop", customFindbarInputArea: "customFindbarInputArea", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons" }, decls: 5, vars: 1, consts: [[3, "ngTemplateOutlet"], ["defaultFindbar", ""], ["defaultFindbarButtons", ""], ["id", "findbar", 1, "findbar", "hidden", "doorHanger"], [3, "customFindbarInputArea"]], template: function PdfFindbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementContainer(0, 0);
                i0__namespace.ɵɵtemplate(1, PdfFindbarComponent_ng_template_1_Template, 2, 11, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(3, PdfFindbarComponent_ng_template_3_Template, 5, 1, "ng-template", null, 2, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(2);
                i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx.customFindbar ? ctx.customFindbar : _r0);
            }
        }, directives: [i1__namespace.NgTemplateOutlet, PdfFindInputAreaComponent, PdfFindbarOptionsOneContainerComponent, PdfFindbarOptionsTwoContainerComponent, PdfFindbarOptionsThreeContainerComponent, PdfFindbarMessageContainerComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfFindbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-findbar',
                        templateUrl: './pdf-findbar.component.html',
                        styleUrls: ['./pdf-findbar.component.css']
                    }]
            }], null, { showFindButton: [{
                    type: i0.Input
                }], mobileFriendlyZoomScale: [{
                    type: i0.Input
                }], findbarLeft: [{
                    type: i0.Input
                }], findbarTop: [{
                    type: i0.Input
                }], customFindbarInputArea: [{
                    type: i0.Input
                }], customFindbar: [{
                    type: i0.Input
                }], customFindbarButtons: [{
                    type: i0.Input
                }] });
    })();

    var PdfContextMenuComponent = /** @class */ (function () {
        function PdfContextMenuComponent() {
        }
        PdfContextMenuComponent.prototype.ngOnInit = function () {
        };
        return PdfContextMenuComponent;
    }());
    /** @nocollapse */ PdfContextMenuComponent.ɵfac = function PdfContextMenuComponent_Factory(t) { return new (t || PdfContextMenuComponent)(); };
    /** @nocollapse */ PdfContextMenuComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfContextMenuComponent, selectors: [["pdf-context-menu"]], decls: 5, vars: 0, consts: [["type", "context", "id", "viewerContextMenu", 2, "display", "none"], ["id", "contextFirstPage", 2, "display", "none"], ["id", "contextLastPage", 2, "display", "none"], ["id", "contextPageRotateCw", 2, "display", "none"], ["id", "contextPageRotateCcw", 2, "display", "none"]], template: function PdfContextMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelement(1, "div", 1);
                i0__namespace.ɵɵelement(2, "div", 2);
                i0__namespace.ɵɵelement(3, "div", 3);
                i0__namespace.ɵɵelement(4, "div", 4);
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: ["[_nghost-%COMP%]{margin-top:4px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfContextMenuComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-context-menu',
                        templateUrl: './pdf-context-menu.component.html',
                        styleUrls: ['./pdf-context-menu.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfDocumentPropertiesOverlayComponent = /** @class */ (function () {
        function PdfDocumentPropertiesOverlayComponent() {
        }
        PdfDocumentPropertiesOverlayComponent.prototype.ngOnInit = function () {
        };
        return PdfDocumentPropertiesOverlayComponent;
    }());
    /** @nocollapse */ PdfDocumentPropertiesOverlayComponent.ɵfac = function PdfDocumentPropertiesOverlayComponent_Factory(t) { return new (t || PdfDocumentPropertiesOverlayComponent)(); };
    /** @nocollapse */ PdfDocumentPropertiesOverlayComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfDocumentPropertiesOverlayComponent, selectors: [["pdf-document-properties-overlay"]], decls: 77, vars: 0, consts: [[1, "dialog"], [1, "row"], ["data-l10n-id", "document_properties_file_name"], ["id", "fileNameField"], ["data-l10n-id", "document_properties_file_size"], ["id", "fileSizeField"], ["data-l10n-id", "document_properties_title"], ["id", "titleField"], ["data-l10n-id", "document_properties_author"], ["id", "authorField"], ["data-l10n-id", "document_properties_subject"], ["id", "subjectField"], ["data-l10n-id", "document_properties_keywords"], ["id", "keywordsField"], ["data-l10n-id", "document_properties_creation_date"], ["id", "creationDateField"], ["data-l10n-id", "document_properties_modification_date"], ["id", "modificationDateField"], ["data-l10n-id", "document_properties_creator"], ["id", "creatorField"], ["data-l10n-id", "document_properties_producer"], ["id", "producerField"], ["data-l10n-id", "document_properties_version"], ["id", "versionField"], ["data-l10n-id", "document_properties_page_count"], ["id", "pageCountField"], ["data-l10n-id", "document_properties_page_size"], ["id", "pageSizeField"], [1, "separator"], ["data-l10n-id", "document_properties_linearized"], ["id", "linearizedField"], [1, "buttonRow"], ["type", "button", "id", "documentPropertiesClose", 1, "overlayButton"], ["data-l10n-id", "document_properties_close"]], template: function PdfDocumentPropertiesOverlayComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div");
                i0__namespace.ɵɵelementStart(1, "div", 0);
                i0__namespace.ɵɵelementStart(2, "div", 1);
                i0__namespace.ɵɵelementStart(3, "span", 2);
                i0__namespace.ɵɵtext(4, "File name:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "p", 3);
                i0__namespace.ɵɵtext(6, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "div", 1);
                i0__namespace.ɵɵelementStart(8, "span", 4);
                i0__namespace.ɵɵtext(9, "File size:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "p", 5);
                i0__namespace.ɵɵtext(11, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "div", 1);
                i0__namespace.ɵɵelementStart(13, "span", 6);
                i0__namespace.ɵɵtext(14, "Title:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "p", 7);
                i0__namespace.ɵɵtext(16, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "div", 1);
                i0__namespace.ɵɵelementStart(18, "span", 8);
                i0__namespace.ɵɵtext(19, "Author:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "p", 9);
                i0__namespace.ɵɵtext(21, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(22, "div", 1);
                i0__namespace.ɵɵelementStart(23, "span", 10);
                i0__namespace.ɵɵtext(24, "Subject:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(25, "p", 11);
                i0__namespace.ɵɵtext(26, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(27, "div", 1);
                i0__namespace.ɵɵelementStart(28, "span", 12);
                i0__namespace.ɵɵtext(29, "Keywords:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(30, "p", 13);
                i0__namespace.ɵɵtext(31, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(32, "div", 1);
                i0__namespace.ɵɵelementStart(33, "span", 14);
                i0__namespace.ɵɵtext(34, "Creation Date:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(35, "p", 15);
                i0__namespace.ɵɵtext(36, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(37, "div", 1);
                i0__namespace.ɵɵelementStart(38, "span", 16);
                i0__namespace.ɵɵtext(39, "Modification Date:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(40, "p", 17);
                i0__namespace.ɵɵtext(41, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(42, "div", 1);
                i0__namespace.ɵɵelementStart(43, "span", 18);
                i0__namespace.ɵɵtext(44, "Creator:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(45, "p", 19);
                i0__namespace.ɵɵtext(46, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(47, "div", 1);
                i0__namespace.ɵɵelementStart(48, "span", 20);
                i0__namespace.ɵɵtext(49, "PDF Producer:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(50, "p", 21);
                i0__namespace.ɵɵtext(51, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(52, "div", 1);
                i0__namespace.ɵɵelementStart(53, "span", 22);
                i0__namespace.ɵɵtext(54, "PDF Version:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(55, "p", 23);
                i0__namespace.ɵɵtext(56, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(57, "div", 1);
                i0__namespace.ɵɵelementStart(58, "span", 24);
                i0__namespace.ɵɵtext(59, "Page Count:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(60, "p", 25);
                i0__namespace.ɵɵtext(61, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(62, "div", 1);
                i0__namespace.ɵɵelementStart(63, "span", 26);
                i0__namespace.ɵɵtext(64, "Page Size:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(65, "p", 27);
                i0__namespace.ɵɵtext(66, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(67, "div", 28);
                i0__namespace.ɵɵelementStart(68, "div", 1);
                i0__namespace.ɵɵelementStart(69, "span", 29);
                i0__namespace.ɵɵtext(70, "Fast Web View:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(71, "p", 30);
                i0__namespace.ɵɵtext(72, "-");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(73, "div", 31);
                i0__namespace.ɵɵelementStart(74, "button", 32);
                i0__namespace.ɵɵelementStart(75, "span", 33);
                i0__namespace.ɵɵtext(76, "Close");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfDocumentPropertiesOverlayComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-document-properties-overlay',
                        templateUrl: './pdf-document-properties-overlay.component.html',
                        styleUrls: ['./pdf-document-properties-overlay.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var PdfDarkThemeComponent = /** @class */ (function () {
        function PdfDarkThemeComponent() {
        }
        return PdfDarkThemeComponent;
    }());
    /** @nocollapse */ PdfDarkThemeComponent.ɵfac = function PdfDarkThemeComponent_Factory(t) { return new (t || PdfDarkThemeComponent)(); };
    /** @nocollapse */ PdfDarkThemeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfDarkThemeComponent, selectors: [["pdf-dark-theme"]], decls: 0, vars: 0, template: function PdfDarkThemeComponent_Template(rf, ctx) { }, styles: ["ngx-extended-pdf-viewer .fancyDropdownToolbarButton:after{content:url(\"data:image/svg+xml; utf8, <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(217, 217, 217)' d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>\")}ngx-extended-pdf-viewer *{box-sizing:content-box}ngx-extended-pdf-viewer .textLayer{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1}ngx-extended-pdf-viewer .textLayer br,ngx-extended-pdf-viewer .textLayer span{color:transparent;position:absolute;white-space:pre;cursor:text;transform-origin:0 0}ngx-extended-pdf-viewer .textLayer .highlight{position:inherit;margin:-1px;padding:1px;background-color:var(#b400aa);border-radius:4px}ngx-extended-pdf-viewer .textLayer .highlight.begin{border-radius:4px 0 0 4px}ngx-extended-pdf-viewer .textLayer .highlight.end{border-radius:0 4px 4px 0}ngx-extended-pdf-viewer .textLayer .highlight.middle{border-radius:0}ngx-extended-pdf-viewer .textLayer .highlight.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer ::-moz-selection{background:blue}ngx-extended-pdf-viewer .textLayer ::selection{background:blue}ngx-extended-pdf-viewer .textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .textLayer .endOfContent.active{top:0}ngx-extended-pdf-viewer .annotationLayer section{position:absolute;text-align:left;text-align:initial}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.pushButton>a,ngx-extended-pdf-viewer .annotationLayer .linkAnnotation>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.pushButton>a:hover,ngx-extended-pdf-viewer .annotationLayer .linkAnnotation>a:hover{opacity:.2;background:#ff0;box-shadow:0 2px 10px #ff0}ngx-extended-pdf-viewer .annotationLayer .textAnnotation img{position:absolute;cursor:pointer}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input,ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea{background-color:rgba(0,54,255,.13);color:#474747;border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select option{padding:0}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea{font:message-box;font-size:9px;resize:none}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input[disabled],ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select[disabled],ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input[disabled],ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea[disabled]{background:none;border:1px solid transparent;cursor:not-allowed}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:hover,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input:hover,ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select:hover,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input:hover,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea:hover{border:1px solid #000}ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select:focus,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input:focus,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea:focus{background:none;border:1px solid transparent}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:#474747;content:\"\";display:block;position:absolute}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{height:80%;left:45%;width:1px}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{transform:rotate(45deg)}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{transform:rotate(-45deg)}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input.comb:focus{width:115%}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}ngx-extended-pdf-viewer .annotationLayer .popupWrapper{position:absolute;width:20em}ngx-extended-pdf-viewer .annotationLayer .popup{position:absolute;z-index:200;max-width:20em;background-color:#ff9;box-shadow:0 2px 5px #888;border-radius:2px;padding:6px;margin-left:5px;cursor:pointer;font:message-box;font-size:9px;white-space:normal;word-wrap:break-word}ngx-extended-pdf-viewer .annotationLayer .popup>*{font-size:9px}ngx-extended-pdf-viewer .annotationLayer .popup h1{display:inline-block}ngx-extended-pdf-viewer .annotationLayer .popup span{display:inline-block;margin-left:5px}ngx-extended-pdf-viewer .annotationLayer .popup p{border-top:1px solid #333;margin-top:2px;padding-top:2px}ngx-extended-pdf-viewer .annotationLayer .caretAnnotation,ngx-extended-pdf-viewer .annotationLayer .circleAnnotation svg ellipse,ngx-extended-pdf-viewer .annotationLayer .fileAttachmentAnnotation,ngx-extended-pdf-viewer .annotationLayer .freeTextAnnotation,ngx-extended-pdf-viewer .annotationLayer .highlightAnnotation,ngx-extended-pdf-viewer .annotationLayer .inkAnnotation svg polyline,ngx-extended-pdf-viewer .annotationLayer .lineAnnotation svg line,ngx-extended-pdf-viewer .annotationLayer .polygonAnnotation svg polygon,ngx-extended-pdf-viewer .annotationLayer .polylineAnnotation svg polyline,ngx-extended-pdf-viewer .annotationLayer .squareAnnotation svg rect,ngx-extended-pdf-viewer .annotationLayer .squigglyAnnotation,ngx-extended-pdf-viewer .annotationLayer .stampAnnotation,ngx-extended-pdf-viewer .annotationLayer .strikeoutAnnotation,ngx-extended-pdf-viewer .annotationLayer .underlineAnnotation{cursor:pointer}ngx-extended-pdf-viewer .xfaLayer{position:absolute;top:0;left:0;z-index:200;transform-origin:0 0}ngx-extended-pdf-viewer .xfaLayer *{color:inherit;font:inherit;font-style:inherit;font-weight:inherit;-webkit-font-kerning:inherit;font-feature-settings:inherit;font-kerning:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;vertical-align:inherit;box-sizing:border-box;background:transparent}ngx-extended-pdf-viewer .xfaLayer a{color:blue}ngx-extended-pdf-viewer .xfaRich li{margin-left:3em}ngx-extended-pdf-viewer .xfaFont{color:#000;font-weight:400;-webkit-font-kerning:none;font-feature-settings:\"kern\" off;font-kerning:none;font-size:10px;font-style:normal;letter-spacing:0;text-decoration:none;vertical-align:0}ngx-extended-pdf-viewer .xfaDraw{z-index:100}ngx-extended-pdf-viewer .xfaExclgroup{z-index:200}ngx-extended-pdf-viewer .xfaField{z-index:300}ngx-extended-pdf-viewer .xfaRich{z-index:300;line-height:1.2}ngx-extended-pdf-viewer .xfaSubform{z-index:200}ngx-extended-pdf-viewer .xfaLabel{display:flex;flex-direction:row;align-items:center;width:100%;height:100%}ngx-extended-pdf-viewer .xfaCaption{flex:1 1 auto}ngx-extended-pdf-viewer .xfaBorderDiv{background:transparent;position:absolute;pointer-events:none}ngx-extended-pdf-viewer .xfaWrapper{position:relative;display:flex;align-items:center;justify-content:center;width:auto;height:auto}ngx-extended-pdf-viewer .xfaContentArea{overflow:hidden}ngx-extended-pdf-viewer .xfaSelect,ngx-extended-pdf-viewer .xfaTextfield{background-color:rgba(0,54,255,.13)}ngx-extended-pdf-viewer .xfaSelect:focus,ngx-extended-pdf-viewer .xfaTextfield:focus{background-color:transparent}ngx-extended-pdf-viewer .xfaSelect,ngx-extended-pdf-viewer .xfaTextfield{width:100%;height:100%;flex:100 1 0;border:none;resize:none}ngx-extended-pdf-viewer .xfaLabel>input[type=radio]{position:absolute;left:-99999px}ngx-extended-pdf-viewer .xfaLabel>input[type=radio]:focus+.xfaCheckboxMark{box-shadow:0 0 5px rgba(0,0,0,.7)}ngx-extended-pdf-viewer .xfaCheckboxMark{cursor:pointer;flex:0 0 auto;border:2px solid #8f8f9d;font-size:10px;line-height:10px;width:10px;height:10px;text-align:center;vertical-align:middle;display:flex;flex-direction:row;align-items:center}ngx-extended-pdf-viewer .xfaCheckbox:checked+.xfaCheckboxMark:after{content:attr(mark)}ngx-extended-pdf-viewer .xfaButton{cursor:pointer;width:100%;height:100%;border:none;text-align:center}ngx-extended-pdf-viewer .xfaButton:hover{background:Highlight}ngx-extended-pdf-viewer .xfaRich{white-space:pre-wrap}ngx-extended-pdf-viewer .xfaImage{width:100%;height:100%}ngx-extended-pdf-viewer .xfaRich{width:100%;height:auto}ngx-extended-pdf-viewer .xfaPosition{display:block}ngx-extended-pdf-viewer .xfaLrTb,ngx-extended-pdf-viewer .xfaRlTb,ngx-extended-pdf-viewer .xfaTb{display:flex;flex-direction:column;align-items:stretch}ngx-extended-pdf-viewer .xfaLr,ngx-extended-pdf-viewer .xfaRl,ngx-extended-pdf-viewer .xfaTb>div{flex:1 1 auto}ngx-extended-pdf-viewer .xfaTb>div{justify-content:left}ngx-extended-pdf-viewer .xfaLr>div{display:inline;float:left}ngx-extended-pdf-viewer .xfaRl>div{display:inline;float:right}ngx-extended-pdf-viewer .xfaArea,ngx-extended-pdf-viewer .xfaPosition{position:relative}ngx-extended-pdf-viewer .xfaValignMiddle{display:flex;align-items:center}ngx-extended-pdf-viewer .xfaLrTb>div{display:inline;float:left}ngx-extended-pdf-viewer .xfaRlTb>div{display:inline;float:right}ngx-extended-pdf-viewer .xfaTable{display:flex;flex-direction:column}ngx-extended-pdf-viewer .xfaTable .xfaRow{display:flex;flex-direction:row;flex:1 1 auto}ngx-extended-pdf-viewer .xfaTable .xfaRow>div{flex:1 1 auto}ngx-extended-pdf-viewer .xfaTable .xfaRlRow{display:flex;flex-direction:row-reverse;flex:1}ngx-extended-pdf-viewer .xfaTable .xfaRlRow>div{flex:1}ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom:none;--page-margin:1px auto -8px;--page-border:9px solid transparent;--spreadHorizontalWrapped-margin-LR:-3.5px}@media screen and (forced-colors:active){ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom:9px;--page-margin:9px auto 0;--page-border:none;--spreadHorizontalWrapped-margin-LR:4.5px}}ngx-extended-pdf-viewer .pdfViewer{padding-bottom:var(--pdfViewer-padding-bottom)}ngx-extended-pdf-viewer .pdfViewer .canvasWrapper{overflow:hidden}ngx-extended-pdf-viewer .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px;position:relative;overflow:visible;border:9px solid transparent;background-clip:content-box;-o-border-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=\") 9 9 repeat;border-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=\") 9 9 repeat;background-color:#fff}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .page{margin:0 auto 10px;border:none}ngx-extended-pdf-viewer .pdfViewer.singlePageView{display:inline-block}ngx-extended-pdf-viewer .pdfViewer.singlePageView .page{margin:0;border:none}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped,ngx-extended-pdf-viewer .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .spread{white-space:nowrap}ngx-extended-pdf-viewer .pdfViewer.removePageBorders,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread,ngx-extended-pdf-viewer .spread .page{display:inline-block;vertical-align:middle}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .spread .page{margin-left:-3.5px;margin-right:-3.5px}ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollWrapped .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders .spread .page{margin-left:5px;margin-right:5px}ngx-extended-pdf-viewer .pdfViewer .page canvas{margin:0;display:block}ngx-extended-pdf-viewer .pdfViewer .page canvas[hidden]{display:none}ngx-extended-pdf-viewer .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(\"data:image/gif;base64,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\") 50% no-repeat}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .spread{display:block}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100%!important}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100%;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100%;border:0}ngx-extended-pdf-viewer .html *{padding:0;margin:0}ngx-extended-pdf-viewer .html{height:100%;width:100%;font-size:10px}ngx-extended-pdf-viewer .body{height:100%;width:100%}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .pdf-viewer button,ngx-extended-pdf-viewer .pdf-viewer input,ngx-extended-pdf-viewer .pdf-viewer select{font:message-box;outline:none;scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color)}ngx-extended-pdf-viewer button{cursor:pointer}ngx-extended-pdf-viewer select{background-color:#474747!important;color:#d9d9d9}ngx-extended-pdf-viewer .hidden,ngx-extended-pdf-viewer [hidden]{display:none!important}ngx-extended-pdf-viewer .pdfViewer.enablePermissions .textLayer span{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;cursor:not-allowed}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0!important;overflow:hidden!important}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:#000}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid transparent;background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0;border-top:2px solid transparent;background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid transparent;background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls .textLayer span,ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls>*{cursor:default}ngx-extended-pdf-viewer #outerContainer{width:100%;height:100%;position:relative}ngx-extended-pdf-viewer #sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;visibility:hidden;z-index:100;transition-duration:.2s;transition-timing-function:ease}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContainer{transition-property:left;left:-200px;left:calc(0px - $sidebar-width)}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContainer{transition-property:right;right:calc(0px - $sidebar-width)}ngx-extended-pdf-viewer .loadingInProgress #sidebarContainer{top:36px}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outerContainer.sidebarMoving #sidebarContainer,ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{right:0}ngx-extended-pdf-viewer #mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:320px}ngx-extended-pdf-viewer #sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:rgba(0,0,0,.1)}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContent{left:0}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContent{right:0}ngx-extended-pdf-viewer #viewerContainer{top:32px;right:0;bottom:0;left:0;outline:none}ngx-extended-pdf-viewer #viewerContainer:not(.pdfPresentationMode){transition-duration:.2s;transition-timing-function:ease}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px}ngx-extended-pdf-viewer .toolbar{position:relative;left:0;right:0;z-index:9999;cursor:default;border:0;border-bottom:1px solid rgba(0,0,0,.5)}ngx-extended-pdf-viewer #toolbarContainer{width:100%}ngx-extended-pdf-viewer #toolbarSidebar{width:calc(100% - 10px);height:32px;background-color:#424242;color:#d9d9d9;border:none;padding-top:1px;padding-left:5px;padding-right:5px}html[dir=ltr] #toolbarSidebarRight .toolbarButton{margin-right:3px!important}html[dir=rtl] #toolbarSidebarRight .toolbarButton{margin-left:3px!important}html[dir=ltr] #sidebarToggle{margin-right:5px}html[dir=rtl] #sidebarToggle{margin-left:5px}ngx-extended-pdf-viewer #sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:200;cursor:ew-resize}html[dir=ltr] ngx-extended-pdf-viewer #sidebarResizer{right:-6px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarResizer{left:-6px}ngx-extended-pdf-viewer #toolbarContainer,ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar{position:relative;min-height:32px;background-color:#474747}ngx-extended-pdf-viewer #toolbarViewer{min-height:32px}ngx-extended-pdf-viewer #loadingBar{position:relative;width:100%;height:4px;background-color:#333;border-bottom:1px solid #333}ngx-extended-pdf-viewer #loadingBar .progress{position:absolute;top:0;left:0;width:0;height:100%;background-color:#ddd;overflow:hidden;transition:width .2s}@-webkit-keyframes progressIndeterminate{0%{left:-142px}to{left:0}}@keyframes progressIndeterminate{0%{left:-142px}to{left:0}}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate{background-color:#999;transition:none}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg,#bbb,#999 5px,#999 45px,#ddd 55px,#ddd 95px,#bbb 100px);-webkit-animation:progressIndeterminate .95s linear infinite;animation:progressIndeterminate .95s linear infinite}ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar{top:40px;position:absolute;z-index:10000;height:auto;min-width:16px;padding:0 6px;margin:4px 2px;color:#d9d9d9;font-size:12px;line-height:14px;text-align:left;cursor:default}ngx-extended-pdf-viewer .findbar{min-width:300px}ngx-extended-pdf-viewer .findbar>div{height:32px}ngx-extended-pdf-viewer .findbar.wrapContainers>div{clear:both}ngx-extended-pdf-viewer .findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] ngx-extended-pdf-viewer .findbar{left:34px}html[dir=rtl] ngx-extended-pdf-viewer .findbar{right:34px}ngx-extended-pdf-viewer .findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #findInput{width:200px}ngx-extended-pdf-viewer #findInput::-moz-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput:-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url(\"data:image/png;base64,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\");background-repeat:no-repeat;background-position:100%}html[dir=rtl] ngx-extended-pdf-viewer #findInput[data-status=pending]{background-position:0}#findInput[data-status=notFound]{background-color:#f66}html[dir=rtl] ngx-extended-pdf-viewer ngx-extended-pdf-viewer .secondaryToolbar{padding:6px;height:auto;z-index:3000}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}ngx-extended-pdf-viewer #secondaryToolbarButtonContainer{max-width:200px;max-height:400px;overflow-y:auto;-webkit-overflow-scrolling:touch;margin-bottom:-4px}ngx-extended-pdf-viewer #secondaryToolbarButtonContainer.hiddenScrollModeButtons>.scrollModeButtons,ngx-extended-pdf-viewer #secondaryToolbarButtonContainer.hiddenSpreadModeButtons>.spreadModeButtons{display:none!important}ngx-extended-pdf-viewer .doorHanger,ngx-extended-pdf-viewer .doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:after,ngx-extended-pdf-viewer .doorHangerRight:before{bottom:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHangerRight:after{border-bottom-color:#474747;border-width:8px}ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:after{right:13px;margin-right:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:before{right:13px;margin-right:-9px}ngx-extended-pdf-viewer #findResultsCount{background-color:#d9d9d9;color:#474747;text-align:center;padding:3px 4px}ngx-extended-pdf-viewer #findMsg{font-style:italic;color:#f66}ngx-extended-pdf-viewer #findMsg:empty{display:none}ngx-extended-pdf-viewer #toolbarViewerMiddle{position:absolute;left:50%;transform:translateX(-50%)}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight{float:left;margin-left:4px}html[dir=ltr] #toolbarSidebarLeft,html[dir=rtl] #toolbarSidebarRight{float:left}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft{float:right;margin-right:4px}html[dir=ltr] #toolbarSidebarRight,html[dir=rtl] #toolbarSidebarLeft{float:right}html[dir=ltr] #toolbarSidebarLeft *,html[dir=ltr] #toolbarSidebarRight *,html[dir=ltr] .findbar *,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight>*{position:relative;float:left}html[dir=rtl] #toolbarSidebarLeft *,html[dir=rtl] #toolbarSidebarRight *,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight>*,html[dir=rtl] ngx-extended-pdf-viewer .findbar *{position:relative;float:right}ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{border:0;background:none;width:32px;height:25px}ngx-extended-pdf-viewer .toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}ngx-extended-pdf-viewer .overlayButton[disabled],ngx-extended-pdf-viewer .secondaryToolbarButton[disabled],ngx-extended-pdf-viewer .toolbarButton[disabled]{opacity:.5}ngx-extended-pdf-viewer .dropdownToolbarButton,ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{border:1px solid transparent;color:#d9d9d9}ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{min-width:16px;padding:2px 6px 0;border-radius:2px;font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .overlayButton,html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton{margin:3px 2px 4px 0}html[dir=rtl] ngx-extended-pdf-viewer .overlayButton,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px 2px}ngx-extended-pdf-viewer .overlayButton{background-clip:padding-box}ngx-extended-pdf-viewer .dropdownToolbarButton,ngx-extended-pdf-viewer .overlayButton{background-color:rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .secondaryToolbarButton.toggled,ngx-extended-pdf-viewer .toolbarButton.toggled{background-color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton>select{color:#d9d9d9;background-color:hsla(0,0%,100%,.8)}ngx-extended-pdf-viewer .dropdownToolbarButton>select>option{background:#474747}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:first-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:last-child{margin-left:4px}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:4px}ngx-extended-pdf-viewer .toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] ngx-extended-pdf-viewer #findPrevious{margin-left:3px}html[dir=ltr] ngx-extended-pdf-viewer #findNext,html[dir=rtl] ngx-extended-pdf-viewer #findPrevious{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findNext{margin-left:3px}ngx-extended-pdf-viewer .secondaryToolbarButton:before,ngx-extended-pdf-viewer .toolbarButton:before{position:absolute;display:inline-block;top:4px;left:7px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton:before{left:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton:before{right:4px}ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark,ngx-extended-pdf-viewer .toolbarButton.bookmark{box-sizing:border-box;outline:none;padding-top:4px;text-decoration:none}ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark{padding-top:5px}ngx-extended-pdf-viewer .bookmark[href=\"#\"]{opacity:.5;pointer-events:none}ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification:after{position:absolute;display:inline-block;top:1px;content:\"\";background-color:#70db55;height:9px;width:9px;border-radius:50%}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification:after{left:17px}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification:after{right:17px}ngx-extended-pdf-viewer .secondaryToolbarButton{position:relative;margin:0 0 4px;padding:3px 0 1px;height:auto;min-height:25px;width:auto;min-width:100%;white-space:normal}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:24px;text-align:left}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:24px;text-align:right}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark{padding-left:27px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark{padding-right:27px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}ngx-extended-pdf-viewer .toolbarField{padding:3px 6px;margin:4px 0;border-radius:2px;background-color:hsla(0,0%,100%,.8);background-clip:padding-box;border:1px solid rgba(0,0,0,.4);color:#4d4d4d;font-size:12px;line-height:14px;outline-style:none}ngx-extended-pdf-viewer .toolbarField:-ms-input-placeholder{color:#d9d9d9}ngx-extended-pdf-viewer .toolbarField:-ms-input-placeholder,ngx-extended-pdf-viewer .toolbarField::-ms-input-placeholder,ngx-extended-pdf-viewer .toolbarField::placeholder{color:#d9d9d9}ngx-extended-pdf-viewer .toolbarField[type=checkbox]{display:inline-block;margin:8px 0}ngx-extended-pdf-viewer .toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading{background-image:url(\"data:image/png;base64,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\");background-repeat:no-repeat;background-position:1px}ngx-extended-pdf-viewer .toolbarField.pageNumber::-webkit-inner-spin-button,ngx-extended-pdf-viewer .toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}ngx-extended-pdf-viewer .toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid transparent;border-radius:2px;color:#d9d9d9;font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}ngx-extended-pdf-viewer #thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer #thumbnailView>a:active{outline:0}ngx-extended-pdf-viewer .thumbnail{margin:0 10px 5px}html[dir=ltr] ngx-extended-pdf-viewer .thumbnail{float:left}html[dir=rtl] ngx-extended-pdf-viewer .thumbnail{float:right}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}ngx-extended-pdf-viewer .thumbnail:not([data-loaded]){border:1px dashed rgba(255,0,0,.5);margin:-1px 9px 4px}ngx-extended-pdf-viewer .thumbnailImage{border:1px solid transparent;opacity:.8;z-index:1;background-color:#fff;background-clip:content-box}ngx-extended-pdf-viewer .thumbnailSelectionRing{border-radius:2px;padding:7px}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{opacity:1}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing{background-color:hsla(0,0%,100%,.4);background-clip:padding-box;color:#fff}ngx-extended-pdf-viewer #attachmentsView,ngx-extended-pdf-viewer #layersView,ngx-extended-pdf-viewer #outlineView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outlineView{padding:4px 4px 0}ngx-extended-pdf-viewer #attachmentsView{padding:3px 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>.treeItems,html[dir=ltr] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem{margin-left:20px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>.treeItems,html[dir=rtl] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem{margin-right:20px}ngx-extended-pdf-viewer .treeItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:#424242;font-size:13px;line-height:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>a{padding:2px 0 5px 4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>a{padding:2px 4px 5px 0}ngx-extended-pdf-viewer #layersView .treeItem>a>*{cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer #layersView .treeItem>a>label{padding-left:4px}html[dir=rtl] ngx-extended-pdf-viewer #layersView .treesItem>a>label{padding-right:4px}ngx-extended-pdf-viewer .treeItemToggler{position:relative;height:0;width:0}ngx-extended-pdf-viewer .treeItemToggler:before{content:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22%3E%3Cpath d%3D%22M10 13l4-7H6z%22%2F%3E%3C%2Fsvg%3E\");display:inline-block;position:absolute;max-width:16px}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden:before{content:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22%3E%3Cpath d%3D%22M13 9L6 5v8z%22%2F%3E%3C%2Fsvg%3E\");max-width:16px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden:before{transform:scaleX(-1)}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden~.treeItems{display:none}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler{float:left}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler{float:right}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler:before{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler:before{left:4px}ngx-extended-pdf-viewer .treeItem>a:hover,ngx-extended-pdf-viewer .treeItemToggler:hover,ngx-extended-pdf-viewer .treeItemToggler:hover+a,ngx-extended-pdf-viewer .treeItemToggler:hover~.treeItems{background-clip:padding-box;border-radius:2px}ngx-extended-pdf-viewer .treeItem.selected{background-clip:padding-box}ngx-extended-pdf-viewer ::-moz-selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer ::selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer #errorWrapper{background:none repeat scroll 0 0 #f66;color:#fff;left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}ngx-extended-pdf-viewer .loadingInProgress #errorWrapper{top:37px}ngx-extended-pdf-viewer #errorMessageLeft{float:left}ngx-extended-pdf-viewer #errorMessageRight{float:right}ngx-extended-pdf-viewer #errorMoreInfo{background-color:#fff;color:#f66;padding:3px;margin:3px;width:98%}ngx-extended-pdf-viewer .overlayButton{width:auto;margin:3px 4px 2px!important;padding:2px 6px 3px}ngx-extended-pdf-viewer #overlayContainer{display:table;position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.2);z-index:40000}ngx-extended-pdf-viewer #overlayContainer>*{overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer #overlayContainer>.container{display:table-cell;vertical-align:middle;text-align:center}ngx-extended-pdf-viewer #overlayContainer>.container .dialog{display:inline-block;padding:15px;border-spacing:4px;color:#d9d9d9;font-size:12px;line-height:14px;background-color:#474747;border-radius:4px}ngx-extended-pdf-viewer .dialog>.row{display:table-row}ngx-extended-pdf-viewer .dialog>.row>*{display:table-cell}ngx-extended-pdf-viewer .dialog .toolbarField{margin:5px 0}ngx-extended-pdf-viewer .dialog .buttonRow{text-align:center;vertical-align:middle}ngx-extended-pdf-viewer .dialog :link{color:#fff}ngx-extended-pdf-viewer #passwordOverlay>.dialog{text-align:center}ngx-extended-pdf-viewer #passwordOverlay .toolbarField{width:200px}ngx-extended-pdf-viewer #documentPropertiesOverlay>.dialog{text-align:left}ngx-extended-pdf-viewer #documentPropertiesOverlay .row>*{min-width:100px}html[dir=ltr] ngx-extended-pdf-viewer #documentPropertiesOverlay .row>*{text-align:left}html[dir=rtl] ngx-extended-pdf-viewer #documentPropertiesOverlay .row>*{text-align:right}.fileInput{background:#fff;color:#000;margin-top:5px;visibility:hidden;position:fixed;right:0;top:0}ngx-extended-pdf-viewer #documentPropertiesOverlay .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesOverlay .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesOverlay .buttonRow{margin-top:10px}ngx-extended-pdf-viewer .clearBoth{clear:both}ngx-extended-pdf-viewer .grab-to-pan-grab{cursor:url(\"data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8=\"),move!important;cursor:-webkit-grab!important;cursor:grab!important}ngx-extended-pdf-viewer .grab-to-pan-grab :not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit!important}ngx-extended-pdf-viewer .grab-to-pan-grab:active,ngx-extended-pdf-viewer .grab-to-pan-grabbing{cursor:url(\"data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8=\"),move!important;cursor:-webkit-grabbing!important;cursor:grabbing!important;position:fixed;background:transparent;display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}@media screen and (-webkit-min-device-pixel-ratio:1.1),screen and (min-resolution:1.1dppx){ngx-extended-pdf-viewer .toolbarButton:before{transform:scale(.5);top:-5px}ngx-extended-pdf-viewer .secondaryToolbarButton:before{transform:scale(.5);top:-4px}}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:before,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:before{left:-1px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton:before{left:-2px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton:before{left:186px}ngx-extended-pdf-viewer #findInput[data-status=pending],ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading{background-image:url(\"data:image/png;base64,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\");background-size:16px 17px}ngx-extended-pdf-viewer .visibleLargeView,ngx-extended-pdf-viewer .visibleMediumView,ngx-extended-pdf-viewer .visibleSmallView{display:none}ngx-extended-pdf-viewer .html .unverified-signature-warning{width:100%;background-color:#ff5353;font-size:12px;text-align:center;padding-top:5px;padding-bottom:5px}.treeItem.selected>a{font-weight:700}ngx-extended-pdf-viewer #viewerContainer{overflow:auto;-webkit-overflow-scrolling:touch;position:absolute}ngx-extended-pdf-viewer .invisible{display:none!important}ngx-extended-pdf-viewer #outerContainer{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}ngx-extended-pdf-viewer .textLayer .highlight.color0{background-color:rgba(180,0,170,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color0.selected{background-color:#b400aa}ngx-extended-pdf-viewer .textLayer .highlight.color1{background-color:rgba(0,100,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color1.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer .highlight.color2{background-color:rgba(0,0,255,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color2.selected{background-color:blue}ngx-extended-pdf-viewer .textLayer .highlight.color3{background-color:rgba(255,0,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color3.selected{background-color:red}ngx-extended-pdf-viewer textLayer .highlight.color4{background-color:rgba(255,94,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color4.selected{background-color:#ff5e00}html[dir=ltr] ngx-extended-pdf-viewer .overlayButton,html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:0;margin-left:4px}ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{padding-left:0;padding-right:0}ngx-extended-pdf-viewer .offscreen{position:fixed!important;left:-9999px!important;display:block!important;width:3000px!important}ngx-extended-pdf-viewer .offscreen #sidebarContainer{top:1000px!important}ngx-extended-pdf-viewer .toolbarButton{margin-left:-1px!important;margin-right:-2px!important}ngx-extended-pdf-viewer #numPages{padding-right:0}ngx-extended-pdf-viewer .pdf-viewer-template,ngx-extended-pdf-viewer .pdf-viewer-template *{display:none}ngx-extended-pdf-viewer a:focus,ngx-extended-pdf-viewer button:focus,ngx-extended-pdf-viewer input:focus,ngx-extended-pdf-viewer select:focus{outline:none;border:1px solid blue}ngx-extended-pdf-viewer input[type=checkbox]:focus{outline:1px solid blue}.hidden-by-fullscreen{display:none!important}", "@media print{body,html{overflow-y:visible!important;margin:0;padding:0}body{background:transparent none;height:100%;width:100%}body>*{display:none!important;outline:0;padding:0;margin:0}body #printContainer{display:block!important;height:100%;width:100%}body #printContainer img{max-width:100%;max-height:100%;direction:ltr;display:block!important}body #printContainer>div{page-break-after:always;page-break-inside:avoid;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%}body,html{overflow-y:visible!important}html.cdk-global-scrollblock{width:auto;position:static}}"], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfDarkThemeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-dark-theme',
                        templateUrl: './pdf-dark-theme.component.html',
                        styleUrls: ['./colors.scss', '../common/print.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], null, null);
    })();

    var PdfLightThemeComponent = /** @class */ (function () {
        function PdfLightThemeComponent() {
        }
        return PdfLightThemeComponent;
    }());
    /** @nocollapse */ PdfLightThemeComponent.ɵfac = function PdfLightThemeComponent_Factory(t) { return new (t || PdfLightThemeComponent)(); };
    /** @nocollapse */ PdfLightThemeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfLightThemeComponent, selectors: [["pdf-light-theme"]], decls: 0, vars: 0, template: function PdfLightThemeComponent_Template(rf, ctx) { }, styles: ["ngx-extended-pdf-viewer .fancyDropdownToolbarButton:after{content:url(\"data:image/svg+xml; utf8, <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(90, 90, 90)' d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>\")}ngx-extended-pdf-viewer *{box-sizing:content-box}ngx-extended-pdf-viewer .textLayer{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1}ngx-extended-pdf-viewer .textLayer br,ngx-extended-pdf-viewer .textLayer span{color:transparent;position:absolute;white-space:pre;cursor:text;transform-origin:0 0}ngx-extended-pdf-viewer .textLayer .highlight{position:inherit;margin:-1px;padding:1px;background-color:var(#b400aa);border-radius:4px}ngx-extended-pdf-viewer .textLayer .highlight.begin{border-radius:4px 0 0 4px}ngx-extended-pdf-viewer .textLayer .highlight.end{border-radius:0 4px 4px 0}ngx-extended-pdf-viewer .textLayer .highlight.middle{border-radius:0}ngx-extended-pdf-viewer .textLayer .highlight.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer ::-moz-selection{background:blue}ngx-extended-pdf-viewer .textLayer ::selection{background:blue}ngx-extended-pdf-viewer .textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .textLayer .endOfContent.active{top:0}ngx-extended-pdf-viewer .annotationLayer section{position:absolute;text-align:left;text-align:initial}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.pushButton>a,ngx-extended-pdf-viewer .annotationLayer .linkAnnotation>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.pushButton>a:hover,ngx-extended-pdf-viewer .annotationLayer .linkAnnotation>a:hover{opacity:.2;background:#ff0;box-shadow:0 2px 10px #ff0}ngx-extended-pdf-viewer .annotationLayer .textAnnotation img{position:absolute;cursor:pointer}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input,ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea{background-color:rgba(0,54,255,.13);color:#5a5a5a;border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select option{padding:0}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea{font:message-box;font-size:9px;resize:none}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input[disabled],ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select[disabled],ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input[disabled],ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea[disabled]{background:none;border:1px solid transparent;cursor:not-allowed}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:hover,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input:hover,ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select:hover,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input:hover,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea:hover{border:1px solid #000}ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select:focus,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input:focus,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea:focus{background:none;border:1px solid transparent}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:#5a5a5a;content:\"\";display:block;position:absolute}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{height:80%;left:45%;width:1px}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{transform:rotate(45deg)}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{transform:rotate(-45deg)}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input.comb:focus{width:115%}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}ngx-extended-pdf-viewer .annotationLayer .popupWrapper{position:absolute;width:20em}ngx-extended-pdf-viewer .annotationLayer .popup{position:absolute;z-index:200;max-width:20em;background-color:#ff9;box-shadow:0 2px 5px #888;border-radius:2px;padding:6px;margin-left:5px;cursor:pointer;font:message-box;font-size:9px;white-space:normal;word-wrap:break-word}ngx-extended-pdf-viewer .annotationLayer .popup>*{font-size:9px}ngx-extended-pdf-viewer .annotationLayer .popup h1{display:inline-block}ngx-extended-pdf-viewer .annotationLayer .popup span{display:inline-block;margin-left:5px}ngx-extended-pdf-viewer .annotationLayer .popup p{border-top:1px solid #333;margin-top:2px;padding-top:2px}ngx-extended-pdf-viewer .annotationLayer .caretAnnotation,ngx-extended-pdf-viewer .annotationLayer .circleAnnotation svg ellipse,ngx-extended-pdf-viewer .annotationLayer .fileAttachmentAnnotation,ngx-extended-pdf-viewer .annotationLayer .freeTextAnnotation,ngx-extended-pdf-viewer .annotationLayer .highlightAnnotation,ngx-extended-pdf-viewer .annotationLayer .inkAnnotation svg polyline,ngx-extended-pdf-viewer .annotationLayer .lineAnnotation svg line,ngx-extended-pdf-viewer .annotationLayer .polygonAnnotation svg polygon,ngx-extended-pdf-viewer .annotationLayer .polylineAnnotation svg polyline,ngx-extended-pdf-viewer .annotationLayer .squareAnnotation svg rect,ngx-extended-pdf-viewer .annotationLayer .squigglyAnnotation,ngx-extended-pdf-viewer .annotationLayer .stampAnnotation,ngx-extended-pdf-viewer .annotationLayer .strikeoutAnnotation,ngx-extended-pdf-viewer .annotationLayer .underlineAnnotation{cursor:pointer}ngx-extended-pdf-viewer .xfaLayer{position:absolute;top:0;left:0;z-index:200;transform-origin:0 0}ngx-extended-pdf-viewer .xfaLayer *{color:inherit;font:inherit;font-style:inherit;font-weight:inherit;-webkit-font-kerning:inherit;font-feature-settings:inherit;font-kerning:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;vertical-align:inherit;box-sizing:border-box;background:transparent}ngx-extended-pdf-viewer .xfaLayer a{color:blue}ngx-extended-pdf-viewer .xfaRich li{margin-left:3em}ngx-extended-pdf-viewer .xfaFont{color:#000;font-weight:400;-webkit-font-kerning:none;font-feature-settings:\"kern\" off;font-kerning:none;font-size:10px;font-style:normal;letter-spacing:0;text-decoration:none;vertical-align:0}ngx-extended-pdf-viewer .xfaDraw{z-index:100}ngx-extended-pdf-viewer .xfaExclgroup{z-index:200}ngx-extended-pdf-viewer .xfaField{z-index:300}ngx-extended-pdf-viewer .xfaRich{z-index:300;line-height:1.2}ngx-extended-pdf-viewer .xfaSubform{z-index:200}ngx-extended-pdf-viewer .xfaLabel{display:flex;flex-direction:row;align-items:center;width:100%;height:100%}ngx-extended-pdf-viewer .xfaCaption{flex:1 1 auto}ngx-extended-pdf-viewer .xfaBorderDiv{background:transparent;position:absolute;pointer-events:none}ngx-extended-pdf-viewer .xfaWrapper{position:relative;display:flex;align-items:center;justify-content:center;width:auto;height:auto}ngx-extended-pdf-viewer .xfaContentArea{overflow:hidden}ngx-extended-pdf-viewer .xfaSelect,ngx-extended-pdf-viewer .xfaTextfield{background-color:rgba(0,54,255,.13)}ngx-extended-pdf-viewer .xfaSelect:focus,ngx-extended-pdf-viewer .xfaTextfield:focus{background-color:transparent}ngx-extended-pdf-viewer .xfaSelect,ngx-extended-pdf-viewer .xfaTextfield{width:100%;height:100%;flex:100 1 0;border:none;resize:none}ngx-extended-pdf-viewer .xfaLabel>input[type=radio]{position:absolute;left:-99999px}ngx-extended-pdf-viewer .xfaLabel>input[type=radio]:focus+.xfaCheckboxMark{box-shadow:0 0 5px rgba(0,0,0,.7)}ngx-extended-pdf-viewer .xfaCheckboxMark{cursor:pointer;flex:0 0 auto;border:2px solid #8f8f9d;font-size:10px;line-height:10px;width:10px;height:10px;text-align:center;vertical-align:middle;display:flex;flex-direction:row;align-items:center}ngx-extended-pdf-viewer .xfaCheckbox:checked+.xfaCheckboxMark:after{content:attr(mark)}ngx-extended-pdf-viewer .xfaButton{cursor:pointer;width:100%;height:100%;border:none;text-align:center}ngx-extended-pdf-viewer .xfaButton:hover{background:Highlight}ngx-extended-pdf-viewer .xfaRich{white-space:pre-wrap}ngx-extended-pdf-viewer .xfaImage{width:100%;height:100%}ngx-extended-pdf-viewer .xfaRich{width:100%;height:auto}ngx-extended-pdf-viewer .xfaPosition{display:block}ngx-extended-pdf-viewer .xfaLrTb,ngx-extended-pdf-viewer .xfaRlTb,ngx-extended-pdf-viewer .xfaTb{display:flex;flex-direction:column;align-items:stretch}ngx-extended-pdf-viewer .xfaLr,ngx-extended-pdf-viewer .xfaRl,ngx-extended-pdf-viewer .xfaTb>div{flex:1 1 auto}ngx-extended-pdf-viewer .xfaTb>div{justify-content:left}ngx-extended-pdf-viewer .xfaLr>div{display:inline;float:left}ngx-extended-pdf-viewer .xfaRl>div{display:inline;float:right}ngx-extended-pdf-viewer .xfaArea,ngx-extended-pdf-viewer .xfaPosition{position:relative}ngx-extended-pdf-viewer .xfaValignMiddle{display:flex;align-items:center}ngx-extended-pdf-viewer .xfaLrTb>div{display:inline;float:left}ngx-extended-pdf-viewer .xfaRlTb>div{display:inline;float:right}ngx-extended-pdf-viewer .xfaTable{display:flex;flex-direction:column}ngx-extended-pdf-viewer .xfaTable .xfaRow{display:flex;flex-direction:row;flex:1 1 auto}ngx-extended-pdf-viewer .xfaTable .xfaRow>div{flex:1 1 auto}ngx-extended-pdf-viewer .xfaTable .xfaRlRow{display:flex;flex-direction:row-reverse;flex:1}ngx-extended-pdf-viewer .xfaTable .xfaRlRow>div{flex:1}ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom:none;--page-margin:1px auto -8px;--page-border:9px solid transparent;--spreadHorizontalWrapped-margin-LR:-3.5px}@media screen and (forced-colors:active){ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom:9px;--page-margin:9px auto 0;--page-border:none;--spreadHorizontalWrapped-margin-LR:4.5px}}ngx-extended-pdf-viewer .pdfViewer{padding-bottom:var(--pdfViewer-padding-bottom)}ngx-extended-pdf-viewer .pdfViewer .canvasWrapper{overflow:hidden}ngx-extended-pdf-viewer .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px;position:relative;overflow:visible;border:9px solid transparent;background-clip:content-box;-o-border-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=\") 9 9 repeat;border-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=\") 9 9 repeat;background-color:#fff}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .page{margin:0 auto 10px;border:none}ngx-extended-pdf-viewer .pdfViewer.singlePageView{display:inline-block}ngx-extended-pdf-viewer .pdfViewer.singlePageView .page{margin:0;border:none}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped,ngx-extended-pdf-viewer .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .spread{white-space:nowrap}ngx-extended-pdf-viewer .pdfViewer.removePageBorders,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread,ngx-extended-pdf-viewer .spread .page{display:inline-block;vertical-align:middle}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .spread .page{margin-left:-3.5px;margin-right:-3.5px}ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollWrapped .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders .spread .page{margin-left:5px;margin-right:5px}ngx-extended-pdf-viewer .pdfViewer .page canvas{margin:0;display:block}ngx-extended-pdf-viewer .pdfViewer .page canvas[hidden]{display:none}ngx-extended-pdf-viewer .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(\"data:image/gif;base64,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\") 50% no-repeat}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .spread{display:block}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100%!important}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100%;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100%;border:0}ngx-extended-pdf-viewer .html *{padding:0;margin:0}ngx-extended-pdf-viewer .html{height:100%;width:100%;font-size:10px}ngx-extended-pdf-viewer .body{height:100%;width:100%}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .pdf-viewer button,ngx-extended-pdf-viewer .pdf-viewer input,ngx-extended-pdf-viewer .pdf-viewer select{font:message-box;outline:none;scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color)}ngx-extended-pdf-viewer button{cursor:pointer}ngx-extended-pdf-viewer select{background-color:#fff!important;color:#5a5a5a}ngx-extended-pdf-viewer .hidden,ngx-extended-pdf-viewer [hidden]{display:none!important}ngx-extended-pdf-viewer .pdfViewer.enablePermissions .textLayer span{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;cursor:not-allowed}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0!important;overflow:hidden!important}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:#f9f9f9}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid transparent;background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0;border-top:2px solid transparent;background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid transparent;background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls .textLayer span,ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls>*{cursor:default}ngx-extended-pdf-viewer #outerContainer{width:100%;height:100%;position:relative}ngx-extended-pdf-viewer #sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;visibility:hidden;z-index:100;transition-duration:.2s;transition-timing-function:ease}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContainer{transition-property:left;left:-200px;left:calc(0px - $sidebar-width)}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContainer{transition-property:right;right:calc(0px - $sidebar-width)}ngx-extended-pdf-viewer .loadingInProgress #sidebarContainer{top:36px}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outerContainer.sidebarMoving #sidebarContainer,ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{right:0}ngx-extended-pdf-viewer #mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:320px}ngx-extended-pdf-viewer #sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:#f2f2f3}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContent{left:0}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContent{right:0}ngx-extended-pdf-viewer #viewerContainer{top:32px;right:0;bottom:0;left:0;outline:none}ngx-extended-pdf-viewer #viewerContainer:not(.pdfPresentationMode){transition-duration:.2s;transition-timing-function:ease}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px}ngx-extended-pdf-viewer .toolbar{position:relative;left:0;right:0;z-index:9999;cursor:default;border:0;border-bottom:1px solid #ddd}ngx-extended-pdf-viewer #toolbarContainer{width:100%}ngx-extended-pdf-viewer #toolbarSidebar{width:calc(100% - 10px);height:32px;background-color:#f2f2f3;color:#5a5a5a;border:none;padding-top:1px;padding-left:5px;padding-right:5px}html[dir=ltr] #toolbarSidebarRight .toolbarButton{margin-right:3px!important}html[dir=rtl] #toolbarSidebarRight .toolbarButton{margin-left:3px!important}html[dir=ltr] #sidebarToggle{margin-right:5px}html[dir=rtl] #sidebarToggle{margin-left:5px}ngx-extended-pdf-viewer #sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:200;cursor:ew-resize}html[dir=ltr] ngx-extended-pdf-viewer #sidebarResizer{right:-6px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarResizer{left:-6px}ngx-extended-pdf-viewer #toolbarContainer,ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar{position:relative;min-height:32px;background-color:#f9f9f9}ngx-extended-pdf-viewer #toolbarViewer{min-height:32px}ngx-extended-pdf-viewer #loadingBar{position:relative;width:100%;height:4px;background-color:#333;border-bottom:1px solid #333}ngx-extended-pdf-viewer #loadingBar .progress{position:absolute;top:0;left:0;width:0;height:100%;background-color:#ddd;overflow:hidden;transition:width .2s}@-webkit-keyframes progressIndeterminate{0%{left:-142px}to{left:0}}@keyframes progressIndeterminate{0%{left:-142px}to{left:0}}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate{background-color:#999;transition:none}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg,#bbb,#999 5px,#999 45px,#ddd 55px,#ddd 95px,#bbb 100px);-webkit-animation:progressIndeterminate .95s linear infinite;animation:progressIndeterminate .95s linear infinite}ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar{top:40px;position:absolute;z-index:10000;height:auto;min-width:16px;padding:0 6px;margin:4px 2px;color:#5a5a5a;font-size:12px;line-height:14px;text-align:left;cursor:default}ngx-extended-pdf-viewer .findbar{min-width:300px}ngx-extended-pdf-viewer .findbar>div{height:32px}ngx-extended-pdf-viewer .findbar.wrapContainers>div{clear:both}ngx-extended-pdf-viewer .findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] ngx-extended-pdf-viewer .findbar{left:34px}html[dir=rtl] ngx-extended-pdf-viewer .findbar{right:34px}ngx-extended-pdf-viewer .findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #findInput{width:200px}ngx-extended-pdf-viewer #findInput::-moz-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput:-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url(\"data:image/png;base64,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\");background-repeat:no-repeat;background-position:100%}html[dir=rtl] ngx-extended-pdf-viewer #findInput[data-status=pending]{background-position:0}#findInput[data-status=notFound]{background-color:#f66}html[dir=rtl] ngx-extended-pdf-viewer ngx-extended-pdf-viewer .secondaryToolbar{padding:6px;height:auto;z-index:3000}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}ngx-extended-pdf-viewer #secondaryToolbarButtonContainer{max-width:200px;max-height:400px;overflow-y:auto;-webkit-overflow-scrolling:touch;margin-bottom:-4px}ngx-extended-pdf-viewer #secondaryToolbarButtonContainer.hiddenScrollModeButtons>.scrollModeButtons,ngx-extended-pdf-viewer #secondaryToolbarButtonContainer.hiddenSpreadModeButtons>.spreadModeButtons{display:none!important}ngx-extended-pdf-viewer .doorHanger,ngx-extended-pdf-viewer .doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:after,ngx-extended-pdf-viewer .doorHangerRight:before{bottom:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHangerRight:after{border-bottom-color:#f9f9f9;border-width:8px}ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:after{right:13px;margin-right:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:before{right:13px;margin-right:-9px}ngx-extended-pdf-viewer #findResultsCount{background-color:#5a5a5a;color:#f9f9f9;text-align:center;padding:3px 4px}ngx-extended-pdf-viewer #findMsg{font-style:italic;color:#f66}ngx-extended-pdf-viewer #findMsg:empty{display:none}ngx-extended-pdf-viewer #toolbarViewerMiddle{position:absolute;left:50%;transform:translateX(-50%)}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight{float:left;margin-left:4px}html[dir=ltr] #toolbarSidebarLeft,html[dir=rtl] #toolbarSidebarRight{float:left}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft{float:right;margin-right:4px}html[dir=ltr] #toolbarSidebarRight,html[dir=rtl] #toolbarSidebarLeft{float:right}html[dir=ltr] #toolbarSidebarLeft *,html[dir=ltr] #toolbarSidebarRight *,html[dir=ltr] .findbar *,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight>*{position:relative;float:left}html[dir=rtl] #toolbarSidebarLeft *,html[dir=rtl] #toolbarSidebarRight *,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight>*,html[dir=rtl] ngx-extended-pdf-viewer .findbar *{position:relative;float:right}ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{border:0;background:none;width:32px;height:25px}ngx-extended-pdf-viewer .toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}ngx-extended-pdf-viewer .overlayButton[disabled],ngx-extended-pdf-viewer .secondaryToolbarButton[disabled],ngx-extended-pdf-viewer .toolbarButton[disabled]{opacity:.5}ngx-extended-pdf-viewer .dropdownToolbarButton,ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{border:1px solid transparent;color:#5a5a5a}ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{min-width:16px;padding:2px 6px 0;border-radius:2px;font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .overlayButton,html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton{margin:3px 2px 4px 0}html[dir=rtl] ngx-extended-pdf-viewer .overlayButton,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px 2px}ngx-extended-pdf-viewer .overlayButton{background-clip:padding-box}ngx-extended-pdf-viewer .dropdownToolbarButton,ngx-extended-pdf-viewer .overlayButton{background-color:rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .secondaryToolbarButton.toggled,ngx-extended-pdf-viewer .toolbarButton.toggled{background-color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton>select{color:#5a5a5a;background-color:#fff}ngx-extended-pdf-viewer .dropdownToolbarButton>select>option{background:#f9f9f9}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:first-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:last-child{margin-left:4px}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:4px}ngx-extended-pdf-viewer .toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] ngx-extended-pdf-viewer #findPrevious{margin-left:3px}html[dir=ltr] ngx-extended-pdf-viewer #findNext,html[dir=rtl] ngx-extended-pdf-viewer #findPrevious{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findNext{margin-left:3px}ngx-extended-pdf-viewer .secondaryToolbarButton:before,ngx-extended-pdf-viewer .toolbarButton:before{position:absolute;display:inline-block;top:4px;left:7px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton:before{left:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton:before{right:4px}ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark,ngx-extended-pdf-viewer .toolbarButton.bookmark{box-sizing:border-box;outline:none;padding-top:4px;text-decoration:none}ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark{padding-top:5px}ngx-extended-pdf-viewer .bookmark[href=\"#\"]{opacity:.5;pointer-events:none}ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification:after{position:absolute;display:inline-block;top:1px;content:\"\";background-color:#70db55;height:9px;width:9px;border-radius:50%}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification:after{left:17px}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification:after{right:17px}ngx-extended-pdf-viewer .secondaryToolbarButton{position:relative;margin:0 0 4px;padding:3px 0 1px;height:auto;min-height:25px;width:auto;min-width:100%;white-space:normal}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:24px;text-align:left}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:24px;text-align:right}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark{padding-left:27px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark{padding-right:27px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}ngx-extended-pdf-viewer .toolbarField{padding:3px 6px;margin:4px 0;border-radius:2px;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.4);color:#5a5a5a;font-size:12px;line-height:14px;outline-style:none}ngx-extended-pdf-viewer .toolbarField:-ms-input-placeholder{color:#bfbfbf}ngx-extended-pdf-viewer .toolbarField:-ms-input-placeholder,ngx-extended-pdf-viewer .toolbarField::-ms-input-placeholder,ngx-extended-pdf-viewer .toolbarField::placeholder{color:#bfbfbf}ngx-extended-pdf-viewer .toolbarField[type=checkbox]{display:inline-block;margin:8px 0}ngx-extended-pdf-viewer .toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading{background-image:url(\"data:image/png;base64,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\");background-repeat:no-repeat;background-position:1px}ngx-extended-pdf-viewer .toolbarField.pageNumber::-webkit-inner-spin-button,ngx-extended-pdf-viewer .toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}ngx-extended-pdf-viewer .toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid transparent;border-radius:2px;color:#5a5a5a;font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}ngx-extended-pdf-viewer #thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer #thumbnailView>a:active{outline:0}ngx-extended-pdf-viewer .thumbnail{margin:0 10px 5px}html[dir=ltr] ngx-extended-pdf-viewer .thumbnail{float:left}html[dir=rtl] ngx-extended-pdf-viewer .thumbnail{float:right}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}ngx-extended-pdf-viewer .thumbnail:not([data-loaded]){border:1px dashed rgba(255,0,0,.5);margin:-1px 9px 4px}ngx-extended-pdf-viewer .thumbnailImage{border:1px solid transparent;opacity:.8;z-index:1;background-color:#fff;background-clip:content-box}ngx-extended-pdf-viewer .thumbnailSelectionRing{border-radius:2px;padding:7px}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{opacity:1}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing{background-color:hsla(0,0%,100%,.4);background-clip:padding-box;color:#fff}ngx-extended-pdf-viewer #attachmentsView,ngx-extended-pdf-viewer #layersView,ngx-extended-pdf-viewer #outlineView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outlineView{padding:4px 4px 0}ngx-extended-pdf-viewer #attachmentsView{padding:3px 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>.treeItems,html[dir=ltr] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem{margin-left:20px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>.treeItems,html[dir=rtl] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem{margin-right:20px}ngx-extended-pdf-viewer .treeItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:#5a5a5a;font-size:13px;line-height:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>a{padding:2px 0 5px 4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>a{padding:2px 4px 5px 0}ngx-extended-pdf-viewer #layersView .treeItem>a>*{cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer #layersView .treeItem>a>label{padding-left:4px}html[dir=rtl] ngx-extended-pdf-viewer #layersView .treesItem>a>label{padding-right:4px}ngx-extended-pdf-viewer .treeItemToggler{position:relative;height:0;width:0}ngx-extended-pdf-viewer .treeItemToggler:before{content:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22%3E%3Cpath d%3D%22M10 13l4-7H6z%22%2F%3E%3C%2Fsvg%3E\");display:inline-block;position:absolute;max-width:16px}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden:before{content:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22%3E%3Cpath d%3D%22M13 9L6 5v8z%22%2F%3E%3C%2Fsvg%3E\");max-width:16px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden:before{transform:scaleX(-1)}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden~.treeItems{display:none}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler{float:left}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler{float:right}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler:before{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler:before{left:4px}ngx-extended-pdf-viewer .treeItem>a:hover,ngx-extended-pdf-viewer .treeItemToggler:hover,ngx-extended-pdf-viewer .treeItemToggler:hover+a,ngx-extended-pdf-viewer .treeItemToggler:hover~.treeItems{background-clip:padding-box;border-radius:2px}ngx-extended-pdf-viewer .treeItem.selected{background-clip:padding-box}ngx-extended-pdf-viewer ::-moz-selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer ::selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer #errorWrapper{background:none repeat scroll 0 0 #f66;color:#fff;left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}ngx-extended-pdf-viewer .loadingInProgress #errorWrapper{top:37px}ngx-extended-pdf-viewer #errorMessageLeft{float:left}ngx-extended-pdf-viewer #errorMessageRight{float:right}ngx-extended-pdf-viewer #errorMoreInfo{background-color:#fff;color:#f66;padding:3px;margin:3px;width:98%}ngx-extended-pdf-viewer .overlayButton{width:auto;margin:3px 4px 2px!important;padding:2px 6px 3px}ngx-extended-pdf-viewer #overlayContainer{display:table;position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.2);z-index:40000}ngx-extended-pdf-viewer #overlayContainer>*{overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer #overlayContainer>.container{display:table-cell;vertical-align:middle;text-align:center}ngx-extended-pdf-viewer #overlayContainer>.container .dialog{display:inline-block;padding:15px;border-spacing:4px;color:#5a5a5a;font-size:12px;line-height:14px;background-color:#f9f9f9;border-radius:4px}ngx-extended-pdf-viewer .dialog>.row{display:table-row}ngx-extended-pdf-viewer .dialog>.row>*{display:table-cell}ngx-extended-pdf-viewer .dialog .toolbarField{margin:5px 0}ngx-extended-pdf-viewer .dialog .buttonRow{text-align:center;vertical-align:middle}ngx-extended-pdf-viewer .dialog :link{color:#fff}ngx-extended-pdf-viewer #passwordOverlay>.dialog{text-align:center}ngx-extended-pdf-viewer #passwordOverlay .toolbarField{width:200px}ngx-extended-pdf-viewer #documentPropertiesOverlay>.dialog{text-align:left}ngx-extended-pdf-viewer #documentPropertiesOverlay .row>*{min-width:100px}html[dir=ltr] ngx-extended-pdf-viewer #documentPropertiesOverlay .row>*{text-align:left}html[dir=rtl] ngx-extended-pdf-viewer #documentPropertiesOverlay .row>*{text-align:right}.fileInput{background:#fff;color:#f9f9f9;margin-top:5px;visibility:hidden;position:fixed;right:0;top:0}ngx-extended-pdf-viewer #documentPropertiesOverlay .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesOverlay .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesOverlay .buttonRow{margin-top:10px}ngx-extended-pdf-viewer .clearBoth{clear:both}ngx-extended-pdf-viewer .grab-to-pan-grab{cursor:url(\"data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8=\"),move!important;cursor:-webkit-grab!important;cursor:grab!important}ngx-extended-pdf-viewer .grab-to-pan-grab :not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit!important}ngx-extended-pdf-viewer .grab-to-pan-grab:active,ngx-extended-pdf-viewer .grab-to-pan-grabbing{cursor:url(\"data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8=\"),move!important;cursor:-webkit-grabbing!important;cursor:grabbing!important;position:fixed;background:transparent;display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}@media screen and (-webkit-min-device-pixel-ratio:1.1),screen and (min-resolution:1.1dppx){ngx-extended-pdf-viewer .toolbarButton:before{transform:scale(.5);top:-5px}ngx-extended-pdf-viewer .secondaryToolbarButton:before{transform:scale(.5);top:-4px}}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:before,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:before{left:-1px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton:before{left:-2px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton:before{left:186px}ngx-extended-pdf-viewer #findInput[data-status=pending],ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading{background-image:url(\"data:image/png;base64,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\");background-size:16px 17px}ngx-extended-pdf-viewer .visibleLargeView,ngx-extended-pdf-viewer .visibleMediumView,ngx-extended-pdf-viewer .visibleSmallView{display:none}ngx-extended-pdf-viewer .html .unverified-signature-warning{width:100%;background-color:#ff5353;font-size:12px;text-align:center;padding-top:5px;padding-bottom:5px}.treeItem.selected>a{font-weight:700}ngx-extended-pdf-viewer #viewerContainer{overflow:auto;-webkit-overflow-scrolling:touch;position:absolute}ngx-extended-pdf-viewer .invisible{display:none!important}ngx-extended-pdf-viewer #outerContainer{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}ngx-extended-pdf-viewer .textLayer .highlight.color0{background-color:rgba(180,0,170,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color0.selected{background-color:#b400aa}ngx-extended-pdf-viewer .textLayer .highlight.color1{background-color:rgba(0,100,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color1.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer .highlight.color2{background-color:rgba(0,0,255,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color2.selected{background-color:blue}ngx-extended-pdf-viewer .textLayer .highlight.color3{background-color:rgba(255,0,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color3.selected{background-color:red}ngx-extended-pdf-viewer textLayer .highlight.color4{background-color:rgba(255,94,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color4.selected{background-color:#ff5e00}html[dir=ltr] ngx-extended-pdf-viewer .overlayButton,html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:0;margin-left:4px}ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{padding-left:0;padding-right:0}ngx-extended-pdf-viewer .offscreen{position:fixed!important;left:-9999px!important;display:block!important;width:3000px!important}ngx-extended-pdf-viewer .offscreen #sidebarContainer{top:1000px!important}ngx-extended-pdf-viewer .toolbarButton{margin-left:-1px!important;margin-right:-2px!important}ngx-extended-pdf-viewer #numPages{padding-right:0}ngx-extended-pdf-viewer .pdf-viewer-template,ngx-extended-pdf-viewer .pdf-viewer-template *{display:none}ngx-extended-pdf-viewer a:focus,ngx-extended-pdf-viewer button:focus,ngx-extended-pdf-viewer input:focus,ngx-extended-pdf-viewer select:focus{outline:none;border:1px solid blue}ngx-extended-pdf-viewer input[type=checkbox]:focus{outline:1px solid blue}.hidden-by-fullscreen{display:none!important}", "@media print{body,html{overflow-y:visible!important;margin:0;padding:0}body{background:transparent none;height:100%;width:100%}body>*{display:none!important;outline:0;padding:0;margin:0}body #printContainer{display:block!important;height:100%;width:100%}body #printContainer img{max-width:100%;max-height:100%;direction:ltr;display:block!important}body #printContainer>div{page-break-after:always;page-break-inside:avoid;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%}body,html{overflow-y:visible!important}html.cdk-global-scrollblock{width:auto;position:static}}"], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfLightThemeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-light-theme',
                        templateUrl: './pdf-light-theme.component.html',
                        styleUrls: ['./colors.scss', '../common/print.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], null, null);
    })();

    var TranslatePipe = /** @class */ (function () {
        function TranslatePipe() {
        }
        TranslatePipe.prototype.transform = function (key, fallback) {
            return this.translate(key, fallback);
        };
        TranslatePipe.prototype.translate = function (key, englishText) {
            return __awaiter(this, void 0, void 0, function () {
                var PDFViewerApplication;
                return __generator(this, function (_a) {
                    PDFViewerApplication = window.PDFViewerApplication;
                    return [2 /*return*/, PDFViewerApplication.l10n.get(key, null, englishText)];
                });
            });
        };
        return TranslatePipe;
    }());
    /** @nocollapse */ TranslatePipe.ɵfac = function TranslatePipe_Factory(t) { return new (t || TranslatePipe)(); };
    /** @nocollapse */ TranslatePipe.ɵpipe = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefinePipe({ name: "translate", type: TranslatePipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TranslatePipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'translate'
                    }]
            }], null, null);
    })();

    var _c0$1 = ["root"];
    var _c1$1 = ["pdfSecondaryToolbarComponent"];
    var _c2$1 = ["pdfsidebar"];
    function NgxExtendedPdfViewerComponent_link_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "link", 49);
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵattribute("xhref", ctx_r0.localeFolderPath + "/locale.properties");
        }
    }
    function NgxExtendedPdfViewerComponent_pdf_dark_theme_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "pdf-dark-theme");
        }
    }
    function NgxExtendedPdfViewerComponent_pdf_light_theme_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "pdf-light-theme");
        }
    }
    function NgxExtendedPdfViewerComponent_ng_content_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar"]);
        }
    }
    function NgxExtendedPdfViewerComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 50);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "async");
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(2, 1, i0__namespace.ɵɵpipeBind2(3, 3, "unverified_signature_warning", "This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid. Please download the file and open it in Acrobat Reader to verify the signature is valid.")), " ");
        }
    }
    function NgxExtendedPdfViewerComponent_ng_template_65_Template(rf, ctx) { }
    var _c3 = ["*"];
    var NgxExtendedPdfViewerComponent = /** @class */ (function () {
        function NgxExtendedPdfViewerComponent(ngZone, platformId, notificationService, location, elementRef) {
            this.ngZone = ngZone;
            this.platformId = platformId;
            this.notificationService = notificationService;
            this.location = location;
            this.elementRef = elementRef;
            this.ngxExtendedPdfViewerIncompletelyInitialized = true;
            this.enableDragAndDrop = true;
            this.formData = {};
            /** Maps the internal ids of the annotations of pdf.js to their field name */
            this.formIdToFieldName = {};
            this.formRadioButtonValueToId = {};
            this.formDataChange = new i0.EventEmitter();
            this.pageViewMode = 'multiple';
            this.progress = new i0.EventEmitter();
            this.srcChange = new i0.EventEmitter();
            this.scrollMode = undefined;
            this.scrollModeChange = new i0.EventEmitter();
            this.authorization = undefined;
            this.httpHeaders = undefined;
            this.contextMenuAllowed = true;
            this.afterPrint = new i0.EventEmitter();
            this.beforePrint = new i0.EventEmitter();
            this.currentZoomFactor = new i0.EventEmitter();
            this.enablePrint = true;
            /**
             * Number of milliseconds to wait between initializing the PDF viewer and loading the PDF file.
             * Most users can let this parameter safely at it's default value of zero.
             * Set this to 1000 or higher if you run into timing problems (typically caused by loading the locale files
             * after the PDF files, so they are not available when the PDF viewer is initialized).
             */
            this.delayFirstView = 0;
            /** How many log messages should be printed?
             * Legal values: VerbosityLevel.INFOS (= 5), VerbosityLevel.WARNINGS (= 1), VerbosityLevel.ERRORS (= 0) */
            this.logLevel = exports.VerbosityLevel.WARNINGS;
            this.enablePinchOnMobile = false;
            /** Use the minified (minifiedJSLibraries="true", which is the default) or the user-readable pdf.js library (minifiedJSLibraries="false") */
            this.minifiedJSLibraries = true;
            this.primaryMenuVisible = true;
            /** option to increase (or reduce) print resolution. Default is 150 (dpi). Sensible values
             * are 300, 600, and 1200. Note the increase memory consumption, which may even result in a browser crash. */
            this.printResolution = null;
            this.rotationChange = new i0.EventEmitter();
            /**
             * The combination of height, minHeight, and autoHeight ensures the PDF height of the PDF viewer is calculated correctly when the height is a percentage.
             * By default, many CSS frameworks make a div with 100% have a height or zero pixels. checkHeigth() fixes this.
             */
            this.autoHeight = false;
            this.minHeight = undefined;
            this._height = '100%';
            /**
             * If this flag is true, this components adds a link to the locale assets. The pdf viewer
             * sees this link and uses it to load the locale files automatically.
             * @param useBrowserLocale boolean
             */
            this.useBrowserLocale = false;
            this.backgroundColor = '#e8e8eb';
            /** Allows the user to define the name of the file after clicking "download" */
            this.filenameForDownload = undefined;
            /** Allows the user to disable the keyboard bindings completely */
            this.ignoreKeyboard = false;
            /** Allows the user to disable a list of key bindings. */
            this.ignoreKeys = [];
            /** Allows the user to enable a list of key bindings explicitly. If this property is set, every other key binding is ignored. */
            this.acceptKeys = [];
            /** Allows the user to put the viewer's svg images into an arbitrary folder */
            this.imageResourcesPath = './' + exports.pdfDefaultOptions.assetsFolder + '/images/';
            /** Allows the user to put their locale folder into an arbitrary folder */
            this.localeFolderPath = './' + exports.pdfDefaultOptions.assetsFolder + '/locale';
            /** Override the default locale. This must be the complete locale name, such as "es-ES". The string is allowed to be all lowercase.
             */
            this.language = undefined;
            /** By default, listening to the URL is deactivated because often the anchor tag is used for the Angular router */
            this.listenToURL = false;
            /** Navigate to a certain "named destination" */
            this.nameddest = undefined;
            /** allows you to pass a password to read password-protected files */
            this.password = undefined;
            this._showSidebarButton = true;
            this.viewerPositionTop = '32px';
            /** pdf.js can show signatures, but fails to verify them. So they are switched off by default.
             * Set "[showUnverifiedSignatures]"="true" to display e-signatures nonetheless.
             */
            this.showUnverifiedSignatures = false;
            this.sidebarVisible = undefined;
            this.sidebarVisibleChange = new i0.EventEmitter();
            this.showFindButton = undefined;
            this.showPagingButtons = true;
            this.showZoomButtons = true;
            this.showPresentationModeButton = false;
            this.showOpenFileButton = true;
            this.showPrintButton = true;
            this.showDownloadButton = true;
            this.showBookmarkButton = true;
            this.theme = 'light';
            this.showToolbar = true;
            this.showSecondaryToolbarButton = true;
            /** Set by the event (secondaryMenuIsEmpty) */
            this.hideKebabMenuForSecondaryToolbar = false;
            this.showRotateButton = true;
            this.handTool = true;
            this.handToolChange = new i0.EventEmitter();
            this.showHandToolButton = false;
            this.showScrollingButton = true;
            this.showSpreadButton = true;
            this.showPropertiesButton = true;
            this.showBorders = true;
            this.spreadChange = new i0.EventEmitter();
            this.thumbnailDrawn = new i0.EventEmitter();
            this._page = undefined;
            this.pageChange = new i0.EventEmitter();
            this.pageLabel = undefined;
            this.pageLabelChange = new i0.EventEmitter();
            this.pagesLoaded = new i0.EventEmitter();
            this.pageRender = new i0.EventEmitter();
            this.pageRendered = new i0.EventEmitter();
            this.pdfDownloaded = new i0.EventEmitter();
            this.pdfLoaded = new i0.EventEmitter();
            this.pdfLoadingFailed = new i0.EventEmitter();
            this.textLayer = undefined;
            this.textLayerRendered = new i0.EventEmitter();
            this.updateFindMatchesCount = new i0.EventEmitter();
            this.updateFindState = new i0.EventEmitter();
            /** Legal values: undefined, 'auto', 'page-actual', 'page-fit', 'page-width', or '50' (or any other percentage) */
            this.zoom = undefined;
            this.zoomChange = new i0.EventEmitter();
            this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 1, 1.25, 1.5, 2, 3, 4];
            this.maxZoom = 10;
            this.minZoom = 0.1;
            /** This attribute allows you to increase the size of the UI elements so you can use them on small mobile devices.
             * This attribute is a string with a percent character at the end (e.g. "150%").
             */
            this._mobileFriendlyZoom = '100%';
            this.mobileFriendlyZoomScale = 1;
            this.toolbarMarginTop = '0px';
            this.toolbarWidth = '100%';
            this.toolbarWidthInPixels = 100;
            this.secondaryToolbarTop = undefined;
            this.sidebarPositionTop = undefined;
            // dirty IE11 hack - temporary solution
            this.findbarTop = undefined;
            // dirty IE11 hack - temporary solution
            this.findbarLeft = undefined;
            // Additional PDF Form Field Types #567: Used to store the exported values of radio and checkbox buttons
            this.buttonValues = {};
            this.shuttingDown = false;
        }
        Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "src", {
            set: function (url) {
                var _this = this;
                if (url instanceof Uint8Array) {
                    this._src = url.buffer;
                }
                else if (url instanceof URL) {
                    this._src = url.toString();
                }
                else if (typeof Blob !== 'undefined' && url instanceof Blob) {
                    // additional check introduced to support server side rendering
                    var reader_1 = new FileReader();
                    reader_1.onloadend = function () {
                        setTimeout(function () {
                            _this.src = new Uint8Array(reader_1.result);
                            if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
                                if (_this.ngxExtendedPdfViewerIncompletelyInitialized) {
                                    _this.openPDF();
                                }
                                else {
                                    (function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0: return [4 /*yield*/, this.openPDF2()];
                                            case 1: return [2 /*return*/, _c.sent()];
                                        }
                                    }); }); })();
                                }
                                // else openPDF is called later, so we do nothing to prevent loading the PDF file twice
                            }
                        });
                    };
                    reader_1.readAsArrayBuffer(url);
                }
                else if (typeof url === 'string') {
                    this._src = url;
                    if (url.length > 980) {
                        // minimal length of a base64 encoded PDF
                        if (url.length % 4 === 0) {
                            if (/^[a-zA-Z\d\/+]+={0,2}$/.test(url)) {
                                console.error('The URL looks like a base64 encoded string. If so, please use the attribute [base64Src] instead of [src]');
                            }
                        }
                    }
                }
                else {
                    this._src = url;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "base64Src", {
            set: function (base64) {
                if (base64) {
                    var binary_string = window.atob(base64);
                    var len = binary_string.length;
                    var bytes = new Uint8Array(len);
                    for (var i = 0; i < len; i++) {
                        bytes[i] = binary_string.charCodeAt(i);
                    }
                    this.src = bytes.buffer;
                }
                else {
                    this._src = undefined;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (h) {
                var _this = this;
                this.minHeight = undefined;
                this.autoHeight = false;
                if (h) {
                    this._height = h;
                }
                else {
                    this.height = '100%';
                }
                setTimeout(function () {
                    _this.checkHeight();
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "showSidebarButton", {
            get: function () {
                return this._showSidebarButton;
            },
            set: function (show) {
                this._showSidebarButton = show;
                var isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
                var factor = 1;
                if (isIE) {
                    factor = Number((this._mobileFriendlyZoom || '100').replace('%', '')) / 100;
                }
                if (this._showSidebarButton) {
                    this.findbarLeft = (68 * factor).toString() + 'px';
                }
                else {
                    this.findbarLeft = '0px';
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "page", {
            get: function () {
                return this._page;
            },
            set: function (p) {
                if (p) {
                    // silently cope with strings
                    this._page = Number(p);
                }
                else {
                    this._page = undefined;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "mobileFriendlyZoom", {
            get: function () {
                return this._mobileFriendlyZoom;
            },
            /**
             * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
             * This attribute is a string with a percent character at the end (e.g. "150%").
             */
            set: function (zoom) {
                var _this = this;
                // tslint:disable-next-line:triple-equals - the type conversion is intended
                if (zoom == 'true') {
                    zoom = '150%';
                    // tslint:disable-next-line:triple-equals - the type conversion is intended
                }
                else if (zoom == 'false' || zoom === undefined || zoom === null) {
                    zoom = '100%';
                }
                this._mobileFriendlyZoom = zoom;
                var factor = 1;
                if (!String(zoom).includes('%')) {
                    zoom = 100 * Number(zoom) + '%';
                }
                factor = Number((zoom || '100').replace('%', '')) / 100;
                this.mobileFriendlyZoomScale = factor;
                this.toolbarWidth = (100 / factor).toString() + '%';
                this.toolbarMarginTop = (factor - 1) * 16 + 'px';
                setTimeout(function () { return _this.calcViewerPositionTop(); });
            },
            enumerable: false,
            configurable: true
        });
        NgxExtendedPdfViewerComponent.prototype.calcViewerPositionTop = function () {
            var toolbar = document.getElementsByClassName('toolbar')[0];
            if (toolbar === undefined) {
                return;
            }
            var top = toolbar.getBoundingClientRect().height;
            this.viewerPositionTop = top + 'px';
            var factor = top / 33;
            this.sidebarPositionTop = (33 + 33 * (factor - 1)).toString() + 'px';
            this.secondaryToolbarTop = (33 + 38 * (factor - 1)).toString() + 'px';
            this.findbarTop = (34 + 54 * (factor - 1)).toString() + 'px';
            var findButton = document.getElementById('viewFind');
            if (findButton) {
                var containerPositionLeft = toolbar.getBoundingClientRect().left;
                var findButtonPosition = findButton.getBoundingClientRect();
                var left = findButtonPosition.left - containerPositionLeft;
                this.findbarLeft = left + 'px';
            }
            else if (this.showSidebarButton) {
                this.findbarLeft = 34 + (32 * factor).toString() + 'px';
            }
            else {
                this.findbarLeft = '0px';
            }
        };
        NgxExtendedPdfViewerComponent.prototype.iOSVersionRequiresES5 = function () {
            var match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            if (match !== undefined && match !== null) {
                return parseInt(match[1], 10) < 14;
            }
            return false;
        };
        NgxExtendedPdfViewerComponent.prototype.needsES5 = function () {
            var isIE = !!window.MSInputMethodContext && !!document.documentMode;
            var isEdge = /Edge\/\d./i.test(navigator.userAgent);
            var isIOs13OrBelow = this.iOSVersionRequiresES5();
            var needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
            needsES5 = needsES5 || isIE || isEdge || isIOs13OrBelow || !this.ngxBrowserSupportsNullSafeChaining();
            return needsES5;
        };
        NgxExtendedPdfViewerComponent.prototype.ngxBrowserSupportsNullSafeChaining = function () {
            return !!Promise['allSettled'];
        };
        NgxExtendedPdfViewerComponent.prototype.loadViewer = function () {
            var _this = this;
            if (!window['pdfjs-dist/build/pdf']) {
                setTimeout(function () { return _this.loadViewer(); }, 25);
            }
            else {
                var needsES5 = this.needsES5();
                var suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
                var script2 = document.createElement('script');
                var assets = exports.pdfDefaultOptions.assetsFolder;
                var versionSuffix = getVersionSuffix(assets);
                if (needsES5) {
                    console.log('Using the ES5 version of the PDF viewer.');
                }
                script2.src = this.location.normalize(needsES5 ? assets + '/viewer-' + versionSuffix + '-es5' + suffix : assets + '/viewer-' + versionSuffix + suffix);
                script2.type = 'text/javascript';
                script2.async = true;
                document.getElementsByTagName('head')[0].appendChild(script2);
            }
        };
        NgxExtendedPdfViewerComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (i1.isPlatformBrowser(this.platformId)) {
                var link = document.createElement('link');
                link.href = this.localeFolderPath + '/locale.properties';
                link.setAttribute('origin', 'ngx-extended-pdf-viewer');
                link.rel = 'resource';
                link.type = 'application/l10n';
                var widget = this.elementRef.nativeElement;
                widget.appendChild(link);
                window.getFormValue = function (key) { return _this.getFormValue(key); };
                window.setFormValue = function (key, value) { return _this.setFormValue(key, value); };
                window.assignFormIdAndFieldName = function (key, fieldName, radioButtonField) { return _this.assignFormIdAndFieldName(key, fieldName, radioButtonField); };
                this.onResize();
                this.loadPdfJs();
            }
        };
        NgxExtendedPdfViewerComponent.prototype.loadPdfJs = function () {
            if (!window['pdfjs-dist/build/pdf']) {
                var needsES5 = this.needsES5();
                var suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
                if (this.minifiedJSLibraries) {
                    if (!exports.pdfDefaultOptions.workerSrc().endsWith('.min.js')) {
                        var src_1 = exports.pdfDefaultOptions.workerSrc();
                        exports.pdfDefaultOptions.workerSrc = function () { return src_1.replace('.js', '.min.js'); };
                    }
                }
                var assets = exports.pdfDefaultOptions.assetsFolder;
                var versionSuffix = getVersionSuffix(assets);
                var script = document.createElement('script');
                script.src = this.location.normalize(needsES5 ? assets + '/pdf-' + versionSuffix + '-es5' + suffix : assets + '/pdf-' + versionSuffix + suffix);
                script.type = 'text/javascript';
                script.async = true;
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            if (!window.webViewerLoad) {
                this.loadViewer();
            }
        };
        NgxExtendedPdfViewerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (typeof window !== 'undefined') {
                if (!this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    if (window.webViewerLoad) {
                        this.doInitPDFViewer();
                    }
                    else {
                        setTimeout(function () { return _this.ngAfterViewInit(); }, 50);
                    }
                }
            }
        };
        NgxExtendedPdfViewerComponent.prototype.assignTabindexes = function () {
            if (this.startTabindex) {
                var r = this.root.nativeElement.cloneNode(true);
                r.classList.add('offscreen');
                this.showElementsRecursively(r);
                document.body.appendChild(r);
                var elements = this.collectElementPositions(r, this.root.nativeElement, []);
                document.body.removeChild(r);
                var sorted = elements.sort(function (a, b) {
                    if (a.y - b.y > 15) {
                        return 1;
                    }
                    if (b.y - a.y > 15) {
                        return -1;
                    }
                    return a.x - b.x;
                });
                for (var i = 0; i < sorted.length; i++) {
                    sorted[i].element.tabIndex = this.startTabindex + i;
                }
            }
        };
        NgxExtendedPdfViewerComponent.prototype.showElementsRecursively = function (root) {
            root.classList.remove('hidden');
            root.classList.remove('invisible');
            root.classList.remove('hiddenXXLView');
            root.classList.remove('hiddenXLView');
            root.classList.remove('hiddenLargeView');
            root.classList.remove('hiddenMediumView');
            root.classList.remove('hiddenSmallView');
            root.classList.remove('hiddenTinyView');
            root.classList.remove('visibleXXLView');
            root.classList.remove('visibleXLView');
            root.classList.remove('visibleLargeView');
            root.classList.remove('visibleMediumView');
            root.classList.remove('visibleSmallView');
            root.classList.remove('visibleTinyView');
            if (root instanceof HTMLButtonElement || root instanceof HTMLAnchorElement || root instanceof HTMLInputElement || root instanceof HTMLSelectElement) {
                return;
            }
            else if (root.childElementCount > 0) {
                for (var i = 0; i < root.childElementCount; i++) {
                    var c = root.children.item(i);
                    if (c) {
                        this.showElementsRecursively(c);
                    }
                }
            }
        };
        NgxExtendedPdfViewerComponent.prototype.collectElementPositions = function (copy, original, elements) {
            if (copy instanceof HTMLButtonElement || copy instanceof HTMLAnchorElement || copy instanceof HTMLInputElement || copy instanceof HTMLSelectElement) {
                var rect = copy.getBoundingClientRect();
                var elementAndPos = {
                    element: original,
                    x: Math.round(rect.left),
                    y: Math.round(rect.top),
                };
                elements.push(elementAndPos);
            }
            else if (copy.childElementCount > 0) {
                for (var i = 0; i < copy.childElementCount; i++) {
                    var c = copy.children.item(i);
                    var o = original.children.item(i);
                    if (c && o) {
                        elements = this.collectElementPositions(c, o, elements);
                    }
                }
            }
            return elements;
        };
        NgxExtendedPdfViewerComponent.prototype.doInitPDFViewer = function () {
            var _this = this;
            if (typeof window === 'undefined') {
                return;
            }
            var langLinks = document.querySelectorAll('link[type="application/l10n"]');
            var langCount = langLinks.length;
            if (langCount === 0) {
                var dict = document.querySelector('script[type="application/l10n"]');
                if (!dict) {
                    if (!this.useBrowserLocale) {
                        console.error(
                        // tslint:disable-next-line:quotemark
                        "If you set the attribute 'useBrowserLocale' to false, you must provide the translations yourself in a script or link tag.");
                        console.error('The easiest way to do this is to add them to the index.html.');
                    }
                }
                else if (this.useBrowserLocale) {
                    console.error(
                    // tslint:disable-next-line:quotemark
                    "Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
                }
            }
            else if (this.useBrowserLocale) {
                var o = langLinks[0].attributes['origin'];
                if (o && o.value !== 'ngx-extended-pdf-viewer') {
                    console.error(
                    // tslint:disable-next-line:quotemark
                    "Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
                }
            }
            var callback = function (e) {
                document.removeEventListener('localized', callback);
                _this.initTimeout = setTimeout(function () {
                    if (!_this.shuttingDown) {
                        // hurried users sometimes reload the PDF before it has finished initializing
                        _this.calcViewerPositionTop();
                        _this.afterLibraryInit();
                        _this.openPDF();
                        _this.assignTabindexes();
                    }
                }, _this.delayFirstView);
            };
            window.addEventListener('afterprint', function (event) {
                _this.afterPrint.emit();
            });
            window.addEventListener('beforeprint', function (event) {
                _this.beforePrint.emit();
            });
            document.addEventListener('localized', callback);
            if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
                // tslint:disable-next-line:quotemark
                console.error("You're trying to open two instances of the PDF viewer. Most likely, this will result in errors.");
            }
            var onLoaded = function () {
                _this.overrideDefaultSettings();
                document.removeEventListener('webviewerloaded', onLoaded);
                if (_this.enablePinchOnMobile) {
                    _this.pinchOnMobileSupport = new PinchOnMobileSupport(_this.ngZone);
                }
            };
            document.addEventListener('webviewerloaded', onLoaded);
            this.activateTextlayerIfNecessary(null);
            setTimeout(function () {
                if (!_this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    // This initializes the webviewer, the file may be passed in to it to initialize the viewer with a pdf directly
                    _this.primaryMenuVisible = _this.showToolbar;
                    var hideSecondaryMenu = _this.hideKebabMenuForSecondaryToolbar && !_this.showSecondaryToolbarButton;
                    if (hideSecondaryMenu) {
                        if (!_this.isPrimaryMenuVisible()) {
                            _this.primaryMenuVisible = false;
                        }
                    }
                    _this.dummyComponents.addMissingStandardWidgets();
                    window.webViewerLoad();
                    var PDFViewerApplication = window.PDFViewerApplication;
                    PDFViewerApplication.appConfig.defaultUrl = ''; // IE bugfix
                    if (_this.filenameForDownload) {
                        PDFViewerApplication.appConfig.filenameForDownload = _this.filenameForDownload;
                    }
                    var PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
                    PDFViewerApplicationOptions.set('enableDragAndDrop', _this.enableDragAndDrop);
                    var language = _this.language === "" ? undefined : _this.language;
                    if (!language) {
                        language = navigator.language;
                    }
                    PDFViewerApplicationOptions.set('locale', language);
                    PDFViewerApplicationOptions.set('imageResourcesPath', _this.imageResourcesPath);
                    PDFViewerApplicationOptions.set('minZoom', _this.minZoom);
                    PDFViewerApplicationOptions.set('maxZoom', _this.maxZoom);
                    PDFViewerApplicationOptions.set('pageViewMode', _this.pageViewMode);
                    PDFViewerApplicationOptions.set('verbosity', _this.logLevel);
                    PDFViewerApplicationOptions.set('initialZoom', _this.zoom);
                    PDFViewerApplication.isViewerEmbedded = true;
                    if (PDFViewerApplication.printKeyDownListener) {
                        window.addEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
                    }
                    var pc = document.getElementById('printContainer');
                    if (pc) {
                        document.getElementsByTagName('body')[0].appendChild(pc);
                    }
                }
            }, 0);
        };
        /** Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available */
        NgxExtendedPdfViewerComponent.prototype.afterLibraryInit = function () {
            this.notificationService.onPDFJSInit.next();
        };
        NgxExtendedPdfViewerComponent.prototype.checkHeight = function () {
            if (typeof document !== 'undefined') {
                var container = document.getElementsByClassName('zoom')[0];
                if (container) {
                    if ((this.autoHeight || container.clientHeight === 0) && this._height.includes('%')) {
                        this.autoHeight = true;
                        var available = window.innerHeight;
                        var rect = container.getBoundingClientRect();
                        var top = rect.top;
                        var maximumHeight = available - top;
                        // take the margins and paddings of the parent containers into account
                        var padding = this.calculateBorderMarging(container);
                        maximumHeight -= padding;
                        var factor = Number(this._height.replace('%', ''));
                        maximumHeight = (maximumHeight * factor) / 100;
                        if (maximumHeight > 100) {
                            this.minHeight = maximumHeight + 'px';
                        }
                        else {
                            this.minHeight = '100px';
                        }
                    }
                }
            }
        };
        NgxExtendedPdfViewerComponent.prototype.calculateBorderMarging = function (container) {
            if (container) {
                var computedStyle = window.getComputedStyle(container);
                var padding = UnitToPx.toPx(computedStyle.paddingBottom);
                var margin = UnitToPx.toPx(computedStyle.marginBottom);
                if (container.style.zIndex) {
                    return padding + margin;
                }
                return padding + margin + this.calculateBorderMarging(container.parentElement);
            }
            return 0;
        };
        NgxExtendedPdfViewerComponent.prototype.onSpreadChange = function (newSpread) {
            this.spreadChange.emit(newSpread);
        };
        NgxExtendedPdfViewerComponent.prototype.activateTextlayerIfNecessary = function (options) {
            var _this = this;
            if (this.textLayer === undefined) {
                if (!this.handTool) {
                    if (options) {
                        options.set('textLayerMode', exports.pdfDefaultOptions.textLayerMode);
                    }
                    this.textLayer = true;
                    if (this.showFindButton === undefined) {
                        this.showFindButton = true;
                        setTimeout(function () {
                            // todo remove this hack:
                            var viewFind = document.getElementById('viewFind');
                            if (viewFind) {
                                viewFind.classList.remove('invisible');
                            }
                            var findbar = document.getElementById('findbar');
                            if (findbar) {
                                findbar.classList.remove('invisible');
                            }
                        });
                    }
                }
                else {
                    if (options) {
                        options.set('textLayerMode', this.showHandToolButton ? exports.pdfDefaultOptions.textLayerMode : 0);
                    }
                    if (!this.showHandToolButton) {
                        if (this.showFindButton || this.showFindButton === undefined) {
                            this.ngZone.run(function () {
                                _this.showFindButton = false;
                            });
                            if (this.logLevel >= exports.VerbosityLevel.WARNINGS) {
                                console.warn(
                                // tslint:disable-next-line:max-line-length
                                'Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                            }
                        }
                        if (this.showHandToolButton) {
                            if (this.logLevel >= exports.VerbosityLevel.WARNINGS) {
                                console.warn(
                                // tslint:disable-next-line:max-line-length
                                'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                                this.showHandToolButton = false;
                            }
                        }
                    }
                }
            }
            else {
                if (this.textLayer) { // todo: is this a redundant check?
                    if (options) {
                        options.set('textLayerMode', exports.pdfDefaultOptions.textLayerMode);
                    }
                    this.textLayer = true;
                    if (this.showFindButton === undefined) {
                        this.showFindButton = true;
                        setTimeout(function () {
                            // todo remove this hack:
                            var viewFind = document.getElementById('viewFind');
                            if (viewFind) {
                                viewFind.classList.remove('invisible');
                            }
                            var findbar = document.getElementById('findbar');
                            if (findbar) {
                                findbar.classList.remove('invisible');
                            }
                        });
                    }
                }
                else { // todo: is the else branch dead code?
                    if (options) {
                        options.set('textLayerMode', 0);
                    }
                    this.textLayer = false;
                    if (this.showFindButton) {
                        if (this.logLevel >= exports.VerbosityLevel.WARNINGS) {
                            // tslint:disable-next-line:max-line-length
                            console.warn('Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                            this.ngZone.run(function () {
                                _this.showFindButton = false;
                            });
                        }
                    }
                    if (this.showHandToolButton) {
                        if (this.logLevel >= exports.VerbosityLevel.WARNINGS) {
                            console.warn(
                            // tslint:disable-next-line:max-line-length
                            'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                            this.showHandToolButton = false;
                        }
                    }
                }
            }
        };
        NgxExtendedPdfViewerComponent.prototype.overrideDefaultSettings = function () {
            return __awaiter(this, void 0, void 0, function () {
                var options, key, sidebarVisible, PDFViewerApplication;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            options = window.PDFViewerApplicationOptions;
                            // tslint:disable-next-line:forin
                            for (key in exports.pdfDefaultOptions) {
                                options.set(key, exports.pdfDefaultOptions[key]);
                            }
                            options.set('disablePreferences', true);
                            return [4 /*yield*/, this.setZoom()];
                        case 1:
                            _c.sent();
                            options.set('ignoreKeyboard', this.ignoreKeyboard);
                            options.set('ignoreKeys', this.ignoreKeys);
                            options.set('acceptKeys', this.acceptKeys);
                            this.activateTextlayerIfNecessary(options);
                            if (this.scrollMode || this.scrollMode === exports.ScrollModeType.vertical) {
                                options.set('scrollModeOnLoad', this.scrollMode);
                            }
                            sidebarVisible = this.sidebarVisible;
                            PDFViewerApplication = window.PDFViewerApplication;
                            if (sidebarVisible !== undefined) {
                                PDFViewerApplication.sidebarViewOnLoad = sidebarVisible ? 1 : 0;
                                if (PDFViewerApplication.appConfig) {
                                    PDFViewerApplication.appConfig.sidebarViewOnLoad = sidebarVisible ? 1 : 0;
                                }
                                options.set('sidebarViewOnLoad', this.sidebarVisible ? 1 : 0);
                            }
                            if (this.spread === 'even') {
                                options.set('spreadModeOnLoad', 2);
                                if (PDFViewerApplication.pdfViewer) {
                                    PDFViewerApplication.pdfViewer.spreadMode = 2;
                                }
                                this.onSpreadChange('even');
                            }
                            else if (this.spread === 'odd') {
                                options.set('spreadModeOnLoad', 1);
                                if (PDFViewerApplication.pdfViewer) {
                                    PDFViewerApplication.pdfViewer.spreadMode = 1;
                                }
                                this.onSpreadChange('odd');
                            }
                            else {
                                options.set('spreadModeOnLoad', 0);
                                if (PDFViewerApplication.pdfViewer) {
                                    PDFViewerApplication.pdfViewer.spreadMode = 0;
                                }
                                this.onSpreadChange('off');
                            }
                            if (this.printResolution) {
                                options.set('printResolution', this.printResolution);
                            }
                            if (this.showBorders === false) {
                                options.set('removePageBorders', !this.showBorders);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        NgxExtendedPdfViewerComponent.prototype.openPDF = function () {
            var _this = this;
            ServiceWorkerOptions.showUnverifiedSignatures = this.showUnverifiedSignatures;
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.enablePrint = this.enablePrint;
            NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = true;
            if (this._src) {
                this.ngxExtendedPdfViewerIncompletelyInitialized = false;
                this.onResize();
                if (!this.listenToURL) {
                    PDFViewerApplication.pdfLinkService.setHash = function () { };
                }
                this.initTimeout = null;
                this.selectCursorTool();
                PDFViewerApplication.eventBus.on('textlayerrendered', function (x) {
                    _this.textLayerRendered.emit(x);
                });
                PDFViewerApplication.eventBus.on('scrollmodechanged', function (x) {
                    _this.scrollModeChange.emit(x.mode);
                });
                PDFViewerApplication.eventBus.on('progress', function (x) {
                    _this.progress.emit(x);
                });
                PDFViewerApplication.eventBus.on('pagesloaded', function (x) { return __awaiter(_this, void 0, void 0, function () {
                    var r;
                    var _this = this;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                this.pagesLoaded.emit(x);
                                this.removeScrollbarInInititeScrollMode();
                                if (this.rotation !== undefined && this.rotation !== null) {
                                    r = Number(this.rotation);
                                    if (r === 0 || r === 90 || r === 180 || r === 270) {
                                        PDFViewerApplication.pdfViewer.pagesRotation = r;
                                    }
                                }
                                setTimeout(function () {
                                    if (!_this.shuttingDown) {
                                        // hurried users sometimes reload the PDF before it has finished initializing
                                        if (_this.nameddest) {
                                            PDFViewerApplication.pdfLinkService.navigateTo(_this.nameddest);
                                        }
                                        else if (_this.page) {
                                            PDFViewerApplication.page = Number(_this.page);
                                        }
                                        else if (_this.pageLabel) {
                                            PDFViewerApplication.pdfViewer.currentPageLabel = _this.pageLabel;
                                        }
                                    }
                                });
                                return [4 /*yield*/, this.setZoom()];
                            case 1:
                                _c.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                PDFViewerApplication.eventBus.on('pagerendered', function (x) {
                    _this.ngZone.run(function () {
                        _this.pageRendered.emit(x);
                        _this.removeScrollbarInInititeScrollMode();
                    });
                });
                PDFViewerApplication.eventBus.on('pagerender', function (x) {
                    _this.ngZone.run(function () {
                        _this.pageRender.emit(x);
                    });
                });
                PDFViewerApplication.eventBus.on('download', function (x) {
                    _this.ngZone.run(function () {
                        _this.pdfDownloaded.emit(x);
                    });
                });
                PDFViewerApplication.eventBus.on('scalechanging', function (x) {
                    {
                        var scale_1 = _this.root.nativeElement.querySelector('#scaleSelect');
                        var userZoomFactor_1 = '';
                        if (scale_1) {
                            userZoomFactor_1 = scale_1.value;
                        }
                    }
                    _this.currentZoomFactor.emit(x.scale);
                    var scale = _this.root.nativeElement.querySelector('#scaleSelect');
                    var userZoomFactor = _this.zoom;
                    if (scale) {
                        userZoomFactor = scale.value;
                    }
                    if (userZoomFactor !== 'auto' && userZoomFactor !== 'page-fit' && userZoomFactor !== 'page-actual' && userZoomFactor !== 'page-width') {
                        _this.zoom = x.scale * 100;
                        _this.zoomChange.emit(x.scale * 100);
                        // setTimeout(() => this.zoomChange.emit(x.scale * 100));
                    }
                    else if (_this.zoom !== userZoomFactor) {
                        // called when the user selects one of the text values of the zoom select dropdown
                        _this.zoomChange.emit(userZoomFactor);
                    }
                });
                PDFViewerApplication.eventBus.on('rotationchanging', function (x) {
                    _this.ngZone.run(function () {
                        _this.rotationChange.emit(x.pagesRotation);
                    });
                });
                PDFViewerApplication.eventBus.on('fileinputchange', function (x) {
                    _this.ngZone.run(function () {
                        var path = x.fileInput.value.replace('C:\\fakepath\\', '');
                        _this.srcChange.emit(path);
                    });
                });
                PDFViewerApplication.eventBus.on('cursortoolchanged', function (x) {
                    _this.ngZone.run(function () {
                        _this.handToolChange.emit(x.tool === PdfCursorTools.HAND);
                    });
                });
                PDFViewerApplication.eventBus.on('sidebarviewchanged', function (x) {
                    _this.ngZone.run(function () {
                        _this.sidebarVisibleChange.emit(x.view > 0);
                        if (_this.sidebarComponent) {
                            _this.sidebarComponent.showToolbarWhenNecessary();
                        }
                    });
                });
                PDFViewerApplication.eventBus.on('documentloaded', function (pdfLoadedEvent) {
                    _this.ngZone.run(function () {
                        _this.loadComplete(pdfLoadedEvent.source.pdfDocument);
                    });
                });
                var hideSidebarToolbar = function () {
                    _this.ngZone.run(function () {
                        if (_this.sidebarComponent) {
                            _this.sidebarComponent.showToolbarWhenNecessary();
                        }
                    });
                };
                PDFViewerApplication.eventBus.on('outlineloaded', hideSidebarToolbar);
                PDFViewerApplication.eventBus.on('attachmentsloaded', hideSidebarToolbar);
                PDFViewerApplication.eventBus.on('layersloaded', hideSidebarToolbar);
                PDFViewerApplication.eventBus.on('updatefindcontrolstate', function (x) {
                    if (x.state === exports.FindState.NOT_FOUND) {
                        _this.updateFindMatchesCount.emit({ current: 0, total: 0 });
                    }
                    else if (x.matchesCount.total) {
                        x.matchesCount.matches = PDFViewerApplication.findController._pageMatches;
                        x.matchesCount.matchesLength = PDFViewerApplication.findController._pageMatchesLength;
                        x.matchesCount.matchesColor = PDFViewerApplication.findController._pageMatchesColor;
                        _this.updateFindMatchesCount.emit(x.matchesCount);
                    }
                    if (_this.updateFindState) {
                        _this.updateFindState.emit(x.state);
                    }
                });
                PDFViewerApplication.eventBus.on('updatefindmatchescount', function (x) {
                    x.matchesCount.matches = PDFViewerApplication.findController._pageMatches;
                    x.matchesCount.matchesLength = PDFViewerApplication.findController._pageMatchesLength;
                    x.matchesCount.matchesColor = PDFViewerApplication.findController._pageMatchesColor;
                    _this.updateFindMatchesCount.emit(x.matchesCount);
                });
                PDFViewerApplication.eventBus.on('pagechanging', function (x) {
                    if (!_this.shuttingDown) {
                        // hurried users sometimes reload the PDF before it has finished initializing
                        _this.ngZone.run(function () {
                            var currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
                            var currentPageLabel = PDFViewerApplication.pdfViewer.currentPageLabel;
                            if (currentPage !== _this.page) {
                                _this.pageChange.emit(currentPage);
                            }
                            if (currentPageLabel !== _this.pageLabel) {
                                _this.pageLabelChange.emit(currentPageLabel);
                            }
                        });
                    }
                });
                this.checkHeight();
                // open a file in the viewer
                if (!!this._src) {
                    var options = {
                        password: this.password,
                        verbosity: this.logLevel,
                    };
                    if (this._src['range']) {
                        options.range = this._src['range'];
                    }
                    if (this.httpHeaders) {
                        options.httpHeaders = this.httpHeaders;
                    }
                    if (this.authorization) {
                        options.withCredentials = true;
                        if (options.httpHeaders) {
                            if (!options.httpHeaders.Authorization) {
                                options.httpHeaders.Authorization = this.authorization;
                            }
                        }
                        else {
                            options.httpHeaders = {
                                Authorization: this.authorization,
                            };
                        }
                    }
                    PDFViewerApplication.onError = function (error) { return _this.pdfLoadingFailed.emit(error); };
                    PDFViewerApplication.open(this._src, options).then(function () {
                        _this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, this.setZoom()];
                                case 1: return [2 /*return*/, _c.sent()];
                            }
                        }); }); });
                    });
                }
                setTimeout(function () {
                    if (!_this.shuttingDown) {
                        // hurried users sometimes reload the PDF before it has finished initializing
                        if (_this.page) {
                            PDFViewerApplication.page = Number(_this.page);
                        }
                    }
                }, 100);
            }
        };
        NgxExtendedPdfViewerComponent.prototype.removeScrollbarInInititeScrollMode = function () {
            var _this = this;
            if (this.pageViewMode === 'infinite-scroll') {
                setTimeout(function () {
                    var viewer = document.getElementById('viewer');
                    if (viewer) {
                        var height = viewer.clientHeight + 17;
                        var zoom = document.getElementsByClassName('zoom')[0];
                        if (_this.primaryMenuVisible) {
                            _this.height = height + 35 + 'px';
                        }
                        else {
                            _this.height = height + 'px';
                        }
                        if (zoom) {
                            zoom.style.height = _this.height;
                        }
                    }
                });
            }
        };
        NgxExtendedPdfViewerComponent.prototype.openPDF2 = function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var PDFViewerApplication, options;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.overrideDefaultSettings();
                            PDFViewerApplication = window.PDFViewerApplication;
                            return [4 /*yield*/, PDFViewerApplication.close()];
                        case 1:
                            _c.sent();
                            // #802 clear the form data; otherwise the "download" dialogs opens
                            (_b = (_a = PDFViewerApplication.pdfDocument) === null || _a === void 0 ? void 0 : _a.annotationStorage) === null || _b === void 0 ? void 0 : _b.resetModified();
                            this.formData = {};
                            this.formIdToFieldName = {};
                            this.formRadioButtonValueToId = {};
                            options = {
                                password: this.password,
                                verbosity: this.logLevel,
                            };
                            if (this._src && this._src['range']) {
                                options.range = this._src['range'];
                            }
                            if (this.httpHeaders) {
                                options.httpHeaders = this.httpHeaders;
                            }
                            if (this.authorization) {
                                options.withCredentials = true;
                                if (options.httpHeaders) {
                                    if (!options.httpHeaders.Authorization) {
                                        options.httpHeaders.Authorization = this.authorization;
                                    }
                                }
                                else {
                                    options.httpHeaders = {
                                        Authorization: this.authorization,
                                    };
                                }
                            }
                            PDFViewerApplication.open(this._src, options).then(function () {
                                _this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
                            }, function (error) { return _this.pdfLoadingFailed.emit(error); });
                            return [2 /*return*/];
                    }
                });
            });
        };
        NgxExtendedPdfViewerComponent.prototype.selectCursorTool = function () {
            var PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: this.handTool ? 1 : 0 });
        };
        NgxExtendedPdfViewerComponent.prototype.ngOnDestroy = function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var PDFViewerApplication, body, topLevelElements, i, e;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (typeof window === 'undefined') {
                                return [2 /*return*/]; // fast escape for server side rendering
                            }
                            window.getFormValue = undefined;
                            window.setFormValue = undefined;
                            PDFViewerApplication = window.PDFViewerApplication;
                            this.shuttingDown = true;
                            NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
                            if (this.initTimeout) {
                                clearTimeout(this.initTimeout);
                                this.initTimeout = undefined;
                            }
                            if (!PDFViewerApplication) return [3 /*break*/, 2];
                            if (this.pinchOnMobileSupport) {
                                this.pinchOnMobileSupport.destroyPinchZoom();
                                this.pinchOnMobileSupport = undefined;
                            }
                            // #802 clear the form data; otherwise the "download" dialogs opens
                            (_b = (_a = PDFViewerApplication.pdfDocument) === null || _a === void 0 ? void 0 : _a.annotationStorage) === null || _b === void 0 ? void 0 : _b.resetModified();
                            this.formData = {};
                            this.formIdToFieldName = {};
                            this.formRadioButtonValueToId = {};
                            if (PDFViewerApplication.cleanup) {
                                PDFViewerApplication.cleanup();
                            }
                            else if (PDFViewerApplication._cleanup) {
                                PDFViewerApplication._cleanup();
                            }
                            return [4 /*yield*/, PDFViewerApplication.close()];
                        case 1:
                            _c.sent();
                            if (PDFViewerApplication.printKeyDownListener) {
                                removeEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
                            }
                            setTimeout(function () {
                                if (PDFViewerApplication._boundEvents) {
                                    PDFViewerApplication.unbindWindowEvents();
                                }
                                var bus = PDFViewerApplication.eventBus;
                                if (bus) {
                                    PDFViewerApplication.unbindEvents();
                                    for (var key in bus._listeners) {
                                        if (bus._listeners[key]) {
                                            var list = bus._listeners[key];
                                            // not sure if the for loop is necessary - but
                                            // it might improve garbage collection if the "listeners"
                                            // array is stored somewhere else
                                            for (var i = 0; i < list.length; i++) {
                                                list[i] = undefined;
                                            }
                                            bus._listeners[key] = undefined;
                                        }
                                    }
                                }
                                PDFViewerApplication.eventBus = null;
                            });
                            _c.label = 2;
                        case 2:
                            body = document.getElementsByTagName('body');
                            if (body[0]) {
                                topLevelElements = body[0].children;
                                for (i = topLevelElements.length - 1; i >= 0; i--) {
                                    e = topLevelElements.item(i);
                                    if (e && e.id === 'printContainer') {
                                        body[0].removeChild(e);
                                    }
                                    else if (e && e.id === 'fileInput') {
                                        body[0].removeChild(e);
                                    }
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        NgxExtendedPdfViewerComponent.prototype.isPrimaryMenuVisible = function () {
            if (this.showToolbar) {
                var visible = this.showBookmarkButton ||
                    this.showDownloadButton ||
                    this.showFindButton ||
                    this.showOpenFileButton ||
                    this.showPagingButtons ||
                    this.showPresentationModeButton ||
                    this.showPrintButton ||
                    this.showPropertiesButton ||
                    this.showRotateButton ||
                    this.showHandToolButton ||
                    this.showScrollingButton ||
                    this.showSpreadButton ||
                    this.showSidebarButton ||
                    this.showZoomButtons;
                if (visible) {
                    return true;
                }
            }
            return false;
        };
        NgxExtendedPdfViewerComponent.prototype.ngOnChanges = function (changes) {
            return __awaiter(this, void 0, void 0, function () {
                var PDFViewerApplication, PDFViewerApplicationOptions, r, options, options, options, options, options, viewer, zoomEvent;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (typeof window === 'undefined') {
                                return [2 /*return*/]; // server side rendering
                            }
                            PDFViewerApplication = window.PDFViewerApplication;
                            PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
                            if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) return [3 /*break*/, 7];
                            if (!('src' in changes || 'base64Src' in changes)) return [3 /*break*/, 6];
                            if (!!!this._src) return [3 /*break*/, 4];
                            if (!this.ngxExtendedPdfViewerIncompletelyInitialized) return [3 /*break*/, 1];
                            this.openPDF();
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this.openPDF2()];
                        case 2:
                            _c.sent();
                            _c.label = 3;
                        case 3: return [3 /*break*/, 6];
                        case 4:
                            // #802 clear the form data; otherwise the "download" dialogs opens
                            PDFViewerApplication.pdfDocument.annotationStorage.resetModified();
                            this.formData = {};
                            this.formIdToFieldName = {};
                            this.formRadioButtonValueToId = {};
                            return [4 /*yield*/, PDFViewerApplication.close()];
                        case 5:
                            _c.sent();
                            _c.label = 6;
                        case 6:
                            if ('enableDragAndDrop' in changes) {
                                PDFViewerApplicationOptions.set('enableDragAndDrop', this.enableDragAndDrop);
                            }
                            if ('zoom' in changes) {
                                (function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, this.setZoom()];
                                        case 1: return [2 /*return*/, _c.sent()];
                                    }
                                }); }); })();
                            }
                            if ('maxZoom' in changes) {
                                PDFViewerApplicationOptions.set('maxZoom', this.maxZoom);
                            }
                            if ('minZoom' in changes) {
                                PDFViewerApplicationOptions.set('minZoom', this.minZoom);
                            }
                            if ('handTool' in changes) {
                                this.selectCursorTool();
                            }
                            if ('page' in changes) {
                                if (this.page) {
                                    // tslint:disable-next-line: triple-equals
                                    if (this.page != PDFViewerApplication.page) {
                                        PDFViewerApplication.page = this.page;
                                    }
                                }
                            }
                            if ('pageLabel' in changes) {
                                if (this.pageLabel) {
                                    if (this.pageLabel !== PDFViewerApplication.pdfViewer.currentPageLabel) {
                                        PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
                                    }
                                }
                            }
                            if ('rotation' in changes) {
                                if (this.rotation) {
                                    r = Number(this.rotation);
                                    if (r === 0 || r === 90 || r === 180 || r === 270) {
                                        PDFViewerApplication.pdfViewer.pagesRotation = r;
                                    }
                                }
                                else {
                                    PDFViewerApplication.pdfViewer.pagesRotation = 0;
                                }
                            }
                            if ('scrollMode' in changes) {
                                if (this.scrollMode || this.scrollMode === exports.ScrollModeType.vertical) {
                                    PDFViewerApplication.pdfViewer.scrollMode = Number(this.scrollMode);
                                }
                            }
                            if ('sidebarVisible' in changes) {
                                if (this.sidebarVisible) {
                                    PDFViewerApplication.pdfSidebar.open();
                                }
                                else {
                                    PDFViewerApplication.pdfSidebar.close();
                                }
                            }
                            if ('filenameForDownload' in changes) {
                                PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
                            }
                            if ('nameddest' in changes) {
                                if (this.nameddest) {
                                    PDFViewerApplication.pdfLinkService.navigateTo(this.nameddest);
                                }
                            }
                            if ('spread' in changes) {
                                if (this.spread === 'even') {
                                    PDFViewerApplication.spreadModeOnLoad = 2;
                                    PDFViewerApplication.pdfViewer.spreadMode = 2;
                                    this.onSpreadChange('even');
                                }
                                else if (this.spread === 'odd') {
                                    PDFViewerApplication.spreadModeOnLoad = 1;
                                    PDFViewerApplication.pdfViewer.spreadMode = 1;
                                    this.onSpreadChange('odd');
                                }
                                else {
                                    PDFViewerApplication.spreadModeOnLoad = 0;
                                    PDFViewerApplication.pdfViewer.spreadMode = 0;
                                    this.onSpreadChange('off');
                                }
                            }
                            if ('enablePinchOnMobile' in changes) {
                                if (!changes['enablePinchOnMobile'].isFirstChange()) {
                                    if (changes['enablePinchOnMobile'].currentValue !== changes['enablePinchOnMobile'].previousValue) {
                                        if (this.enablePinchOnMobile) {
                                            this.pinchOnMobileSupport = new PinchOnMobileSupport(this.ngZone);
                                        }
                                        else {
                                            if (this.pinchOnMobileSupport) {
                                                this.pinchOnMobileSupport.destroyPinchZoom();
                                                this.pinchOnMobileSupport = undefined;
                                            }
                                        }
                                    }
                                }
                            }
                            this.primaryMenuVisible = this.showToolbar;
                            if (!this.showSecondaryToolbarButton || this.hideKebabMenuForSecondaryToolbar) {
                                if (!this.isPrimaryMenuVisible()) {
                                    this.primaryMenuVisible = false;
                                }
                            }
                            setTimeout(function () { return _this.calcViewerPositionTop(); });
                            _c.label = 7;
                        case 7:
                            this.onResize();
                            if ('printResolution' in changes) {
                                options = PDFViewerApplicationOptions;
                                if (options) {
                                    options.set('printResolution', this.printResolution);
                                }
                            }
                            if ('ignoreKeyboard' in changes) {
                                options = PDFViewerApplicationOptions;
                                if (options) {
                                    this.overrideDefaultSettings();
                                }
                            }
                            if ('ignoreKeys' in changes) {
                                options = PDFViewerApplicationOptions;
                                if (options) {
                                    this.overrideDefaultSettings();
                                }
                            }
                            if ('acceptKeys' in changes) {
                                options = PDFViewerApplicationOptions;
                                if (options) {
                                    this.overrideDefaultSettings();
                                }
                            }
                            if ('showBorders' in changes) {
                                if (!changes['showBorders'].isFirstChange()) {
                                    options = PDFViewerApplicationOptions;
                                    if (options) {
                                        this.overrideDefaultSettings();
                                        viewer = document.getElementById('viewer');
                                        if (this.showBorders) {
                                            viewer.classList.remove('removePageBorders');
                                        }
                                        else {
                                            viewer.classList.add('removePageBorders');
                                        }
                                        if (PDFViewerApplication.pdfViewer) {
                                            PDFViewerApplication.pdfViewer.removePageBorders = !this.showBorders;
                                        }
                                        zoomEvent = {
                                            source: viewer,
                                            // tslint:disable-next-line:no-bitwise
                                            scale: (Number(this.zoom) | 100) / 100,
                                            presetValue: this.zoom,
                                        };
                                        PDFViewerApplication.eventBus.dispatch('scalechanging', zoomEvent);
                                    }
                                }
                            }
                            if ('showUnverifiedSignatures' in changes) {
                                if (PDFViewerApplication && PDFViewerApplication.pdfDocument) {
                                    PDFViewerApplication.pdfDocument._transport.messageHandler.send('showUnverifiedSignatures', this.showUnverifiedSignatures);
                                }
                            }
                            if ('formData' in changes) {
                                if (!changes['formData'].isFirstChange()) {
                                    this.updateFormFields(this.formData, changes['formData'].previousValue);
                                }
                            }
                            if ('enablePrint' in changes) {
                                if (!changes['enablePrint'].isFirstChange()) {
                                    PDFViewerApplication.enablePrint = this.enablePrint;
                                }
                            }
                            if (('customFindbar' in changes && !changes['customFindbar'].isFirstChange()) ||
                                ('customFindbarButtons' in changes && !changes['customFindbarButtons'].isFirstChange()) ||
                                ('customFindbarInputArea' in changes && !changes['customFindbarInputArea'].isFirstChange()) ||
                                ('customToolbar' in changes && !changes['customToolbar'].isFirstChange())) {
                                if (this.dummyComponents) {
                                    this.dummyComponents.addMissingStandardWidgets();
                                }
                            }
                            if ('height' in changes) {
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        NgxExtendedPdfViewerComponent.prototype.setZoom = function () {
            return __awaiter(this, void 0, void 0, function () {
                var PDFViewerApplication, zoomAsNumber, userSetting, PDFViewerApplicationOptions, scaleDropdownField, _c, _d, option;
                var e_1, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            PDFViewerApplication = window.PDFViewerApplication;
                            zoomAsNumber = this.zoom;
                            if (String(zoomAsNumber).endsWith('%')) {
                                zoomAsNumber = Number(String(zoomAsNumber).replace('%', '')) / 100;
                            }
                            else if (!isNaN(Number(zoomAsNumber))) {
                                zoomAsNumber = Number(zoomAsNumber) / 100;
                            }
                            if (!!zoomAsNumber) return [3 /*break*/, 3];
                            if (!!PDFViewerApplication.store) return [3 /*break*/, 1];
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, PDFViewerApplication.store.get('zoom')];
                        case 2:
                            userSetting = _f.sent();
                            if (userSetting) {
                                if (!isNaN(Number(userSetting))) {
                                    zoomAsNumber = Number(userSetting) / 100;
                                }
                                else {
                                    zoomAsNumber = userSetting;
                                }
                            }
                            else {
                                zoomAsNumber = 'auto';
                            }
                            _f.label = 3;
                        case 3:
                            if (PDFViewerApplication) {
                                PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
                                PDFViewerApplicationOptions.set('defaultZoomValue', zoomAsNumber);
                            }
                            scaleDropdownField = this.root.nativeElement.querySelector('#scaleSelect');
                            if (scaleDropdownField) {
                                if (this.zoom === 'auto' || this.zoom === 'page-fit' || this.zoom === 'page-actual' || this.zoom === 'page-width') {
                                    scaleDropdownField.value = this.zoom;
                                }
                                else {
                                    scaleDropdownField.value = 'custom';
                                    try {
                                        for (_c = __values(scaleDropdownField.options), _d = _c.next(); !_d.done; _d = _c.next()) {
                                            option = _d.value;
                                            if (option.value === 'custom') {
                                                option.textContent = Math.round(Number(zoomAsNumber) * 100000) / 1000 + '%';
                                                continue;
                                            }
                                        }
                                    }
                                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                    finally {
                                        try {
                                            if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                    }
                                }
                            }
                            if (PDFViewerApplication.pdfViewer) {
                                PDFViewerApplication.pdfViewer.currentScaleValue = zoomAsNumber || 'auto';
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        NgxExtendedPdfViewerComponent.prototype.onResize = function () {
            var _this = this;
            var pdfViewer = document.getElementsByClassName('html');
            if (pdfViewer && pdfViewer.length > 0) {
                var container = document.getElementById('outerContainer');
                if (container) {
                    var width = container.clientWidth;
                    this.toolbarWidthInPixels = width;
                    if (this.secondaryToolbarComponent) {
                        this.secondaryToolbarComponent.checkVisibility();
                    }
                }
                this.checkHeight();
            }
            try {
                var observer = new ResizeObserver(function () { return _this.removeScrollbarInInititeScrollMode(); });
                var viewer = document.getElementById('viewer');
                if (viewer) {
                    observer.observe(viewer);
                }
            }
            catch (exception) {
                console.log('ResizeObserver is not supported by your browser');
            }
        };
        NgxExtendedPdfViewerComponent.prototype.onContextMenu = function () {
            return this.contextMenuAllowed;
        };
        NgxExtendedPdfViewerComponent.prototype.onSecondaryMenuIsEmpty = function (hideKebabButton) {
            this.hideKebabMenuForSecondaryToolbar = hideKebabButton;
            if (hideKebabButton) {
                if (!this.isPrimaryMenuVisible()) {
                    this.primaryMenuVisible = false;
                }
            }
        };
        NgxExtendedPdfViewerComponent.prototype.getFormValue = function (key) {
            return { value: this.formData[key] };
        };
        NgxExtendedPdfViewerComponent.prototype.setFormValue = function (key, value) {
            if (!this.formData) {
                this.formData = {};
            }
            if (this.formIdToFieldName[key]) {
                // radiobuttons
                this.formData[this.formIdToFieldName[key]] = value;
            }
            else {
                this.formData[key] = value;
            }
            this.formDataChange.emit(this.formData);
        };
        NgxExtendedPdfViewerComponent.prototype.assignFormIdAndFieldName = function (key, fieldName, radioButtonField) {
            this.formIdToFieldName[key] = fieldName;
            if (radioButtonField) {
                this.formRadioButtonValueToId[radioButtonField] = key;
            }
        };
        NgxExtendedPdfViewerComponent.prototype.updateFormFields = function (formData, previousFormData) {
            var PDFViewerApplication = window.PDFViewerApplication;
            if (!PDFViewerApplication || !PDFViewerApplication.pdfDocument || !PDFViewerApplication.pdfDocument.annotationStorage) {
                // ngOnChanges calls this method too early - so just ignore it
                return;
            }
            var storage = PDFViewerApplication.pdfDocument.annotationStorage;
            var _loop_1 = function (key) {
                if (formData.hasOwnProperty(key)) {
                    if (formData[key] !== previousFormData[key]) {
                        var field = document.querySelector("input[name='" + key + "']");
                        if (field instanceof HTMLInputElement) {
                            if (field.type === 'radio') {
                                storage.setValue(field.id, key, { value: formData[key] === field.value, emitMessage: false });
                                var fields = document.querySelectorAll("input[name='" + key + "']");
                                var fieldIdToActivate_1 = this_1.formRadioButtonValueToId[formData[key]];
                                fields.forEach(function (field) {
                                    field.checked = field.id === fieldIdToActivate_1;
                                });
                            }
                            else if (field.type === 'checkbox') {
                                storage.setValue(field.id, key, { value: formData[key], emitMessage: false });
                                field.checked = formData[key];
                            }
                            else {
                                storage.setValue(field.id, key, { value: formData[key], emitMessage: false });
                                field.value = formData[key];
                            }
                        }
                        else if (!field) {
                            var textarea = document.querySelector("textarea[name='" + key + "']");
                            if (textarea) {
                                storage.setValue(textarea.id, key, { value: formData[key], emitMessage: false });
                                textarea.textContent = formData[key];
                            }
                            else {
                                var dropdown = document.querySelector("select[name='" + key + "']");
                                if (dropdown) {
                                    storage.setValue(dropdown.id, key, { value: formData[key], emitMessage: false });
                                    if (dropdown.multiple) {
                                        var options = this_1.formData[key];
                                        for (var i = 0; i < dropdown.options.length; i++) {
                                            dropdown.options[i].selected = options.indexOf(dropdown.options[i].value) >= 0;
                                        }
                                    }
                                    else {
                                        dropdown.value = formData[key];
                                    }
                                }
                            }
                        }
                        else {
                            var fieldName = this_1.formIdToFieldName[key];
                            debugger;
                        }
                    }
                }
            };
            var this_1 = this;
            for (var key in formData) {
                _loop_1(key);
            }
            for (var key in previousFormData) {
                if (previousFormData.hasOwnProperty(key)) {
                    if (!formData.hasOwnProperty(key)) {
                        var field = document.querySelector("input[name='" + key + "']");
                        if (field instanceof HTMLInputElement) {
                            // this entry has been deleted
                            if (field.type === 'checkbox') {
                                storage.setValue(field.id, key, { value: false, emitMessage: false });
                                field.checked = false;
                            }
                            else {
                                storage.setValue(field.id, key, { value: undefined, emitMessage: false });
                                field.value = '';
                            }
                        }
                        else if (!field) {
                            var textarea = document.querySelector("textarea[name='" + key + "']");
                            if (textarea) {
                                storage.setValue(textarea.id, key, { value: undefined, emitMessage: false });
                                textarea.textContent = null;
                            }
                        }
                    }
                }
            }
        };
        NgxExtendedPdfViewerComponent.prototype.loadComplete = function (pdf /* PDFDocumentProxy */) {
            var _this = this;
            /** This method has been inspired by https://medium.com/factory-mind/angular-pdf-forms-fa72b15c3fbd. Thanks, Jonny Fox! */
            this.hasSignature = false;
            this.buttonValues = {};
            var _loop_2 = function (i) {
                // track the current page
                var currentPage = null;
                pdf
                    .getPage(i)
                    .then(function (p) {
                    currentPage = p;
                    // get the annotations of the current page
                    return p.getAnnotations();
                })
                    .then(function (annotations) {
                    // ugly cast due to missing typescript definitions
                    // please contribute to complete @types/pdfjs-dist
                    annotations
                        .filter(function (a) { return a.subtype === 'Widget'; }) // get the form field annotation only
                        .forEach(function (a) {
                        // Additional PDF Form Field Types #567: Store the exportValue for the check boxes and buttonValue for radio buttons for quick reference
                        if (a.checkBox)
                            _this.buttonValues[a.id] = a.exportValue;
                        else if (a.radioButton)
                            _this.buttonValues[a.id] = a.buttonValue;
                        if (a.fieldType === 'Sig') {
                            _this.ngZone.run(function () {
                                _this.hasSignature = true;
                                setTimeout(function () {
                                    var viewerContainer = document.querySelector('#viewerContainer');
                                    viewerContainer.scrollBy(0, -32);
                                });
                            });
                        }
                        /*
                        // get the rectangle that represent the single field
                        // and resize it according to the current DPI
                        const fieldRect = currentPage.getViewport(dpiRatio).convertToViewportRectangle(a.rect);
          
                        // add the corresponding input
                        this.addInput(a, fieldRect);
                        */
                    });
                });
            };
            for (var i = 1; i <= pdf.numPages; i++) {
                _loop_2(i);
            }
        };
        NgxExtendedPdfViewerComponent.prototype.zoomToPageWidth = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var PDFViewerApplication, desiredCenterY, previousScale, currentScale, scaleCorrectionFactor, rect, dy;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            PDFViewerApplication = window.PDFViewerApplication;
                            desiredCenterY = event.clientY;
                            previousScale = PDFViewerApplication.pdfViewer.currentScale;
                            if (!(this.zoom !== exports.pdfDefaultOptions.doubleTapZoomFactor && this.zoom + '%' !== exports.pdfDefaultOptions.doubleTapZoomFactor)) return [3 /*break*/, 2];
                            this.previousZoom = this.zoom;
                            this.zoom = exports.pdfDefaultOptions.doubleTapZoomFactor; // by default: 'page-width';
                            return [4 /*yield*/, this.setZoom()];
                        case 1:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            if (this.previousZoom) {
                                this.zoom = this.previousZoom;
                            }
                            else {
                                this.zoom = 'page-width';
                            }
                            return [4 /*yield*/, this.setZoom()];
                        case 3:
                            _c.sent();
                            _c.label = 4;
                        case 4:
                            currentScale = PDFViewerApplication.pdfViewer.currentScale;
                            scaleCorrectionFactor = currentScale / previousScale - 1;
                            rect = PDFViewerApplication.pdfViewer.container.getBoundingClientRect();
                            dy = desiredCenterY - rect.top;
                            PDFViewerApplication.pdfViewer.container.scrollTop += dy * scaleCorrectionFactor;
                            return [2 /*return*/];
                    }
                });
            });
        };
        return NgxExtendedPdfViewerComponent;
    }());
    NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
    /** @nocollapse */ NgxExtendedPdfViewerComponent.ɵfac = function NgxExtendedPdfViewerComponent_Factory(t) { return new (t || NgxExtendedPdfViewerComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone), i0__namespace.ɵɵdirectiveInject(i0.PLATFORM_ID), i0__namespace.ɵɵdirectiveInject(PDFNotificationService), i0__namespace.ɵɵdirectiveInject(i1__namespace.Location), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    /** @nocollapse */ NgxExtendedPdfViewerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: NgxExtendedPdfViewerComponent, selectors: [["ngx-extended-pdf-viewer"]], viewQuery: function NgxExtendedPdfViewerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(PdfDummyComponentsComponent, 5);
                i0__namespace.ɵɵviewQuery(_c0$1, 5);
                i0__namespace.ɵɵviewQuery(_c1$1, 5);
                i0__namespace.ɵɵviewQuery(_c2$1, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.dummyComponents = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.root = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.secondaryToolbarComponent = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.sidebarComponent = _t.first);
            }
        }, hostBindings: function NgxExtendedPdfViewerComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("contextmenu", function NgxExtendedPdfViewerComponent_contextmenu_HostBindingHandler() { return ctx.onContextMenu(); });
            }
        }, inputs: { customFindbarInputArea: "customFindbarInputArea", customToolbar: "customToolbar", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", customSecondaryToolbar: "customSecondaryToolbar", customSidebar: "customSidebar", customThumbnail: "customThumbnail", customFreeFloatingBar: "customFreeFloatingBar", enableDragAndDrop: "enableDragAndDrop", formData: "formData", pageViewMode: "pageViewMode", scrollMode: "scrollMode", authorization: "authorization", httpHeaders: "httpHeaders", contextMenuAllowed: "contextMenuAllowed", enablePrint: "enablePrint", delayFirstView: "delayFirstView", logLevel: "logLevel", enablePinchOnMobile: "enablePinchOnMobile", minifiedJSLibraries: "minifiedJSLibraries", printResolution: "printResolution", rotation: "rotation", src: "src", base64Src: "base64Src", height: "height", useBrowserLocale: "useBrowserLocale", backgroundColor: "backgroundColor", filenameForDownload: "filenameForDownload", ignoreKeyboard: "ignoreKeyboard", ignoreKeys: "ignoreKeys", acceptKeys: "acceptKeys", imageResourcesPath: "imageResourcesPath", localeFolderPath: "localeFolderPath", language: "language", listenToURL: "listenToURL", nameddest: "nameddest", password: "password", showUnverifiedSignatures: "showUnverifiedSignatures", startTabindex: "startTabindex", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", showFindButton: "showFindButton", showPagingButtons: "showPagingButtons", showZoomButtons: "showZoomButtons", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", showBookmarkButton: "showBookmarkButton", theme: "theme", showToolbar: "showToolbar", showSecondaryToolbarButton: "showSecondaryToolbarButton", showRotateButton: "showRotateButton", handTool: "handTool", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton", showBorders: "showBorders", spread: "spread", page: "page", pageLabel: "pageLabel", textLayer: "textLayer", zoom: "zoom", zoomLevels: "zoomLevels", maxZoom: "maxZoom", minZoom: "minZoom", _mobileFriendlyZoom: "_mobileFriendlyZoom", mobileFriendlyZoom: "mobileFriendlyZoom" }, outputs: { formDataChange: "formDataChange", progress: "progress", srcChange: "srcChange", scrollModeChange: "scrollModeChange", afterPrint: "afterPrint", beforePrint: "beforePrint", currentZoomFactor: "currentZoomFactor", rotationChange: "rotationChange", sidebarVisibleChange: "sidebarVisibleChange", handToolChange: "handToolChange", spreadChange: "spreadChange", thumbnailDrawn: "thumbnailDrawn", pageChange: "pageChange", pageLabelChange: "pageLabelChange", pagesLoaded: "pagesLoaded", pageRender: "pageRender", pageRendered: "pageRendered", pdfDownloaded: "pdfDownloaded", pdfLoaded: "pdfLoaded", pdfLoadingFailed: "pdfLoadingFailed", textLayerRendered: "textLayerRendered", updateFindMatchesCount: "updateFindMatchesCount", updateFindState: "updateFindState", zoomChange: "zoomChange" }, features: [i0__namespace.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 67, vars: 59, consts: [["rel", "resource", "type", "application/l10n", "origin", "ngx-extended-pdf-viewer", 4, "ngIf"], [4, "ngIf"], [3, "zoom", "width"], [1, "zoom"], ["root", ""], [1, "html"], [1, "loadingInProgress", "body"], ["id", "outerContainer", 3, "resize"], [1, "free-floating-bar"], [4, "ngTemplateOutlet"], [3, "sidebarPositionTop", "sidebarVisible", "showSidebarButton", "customSidebar", "customThumbnail", "thumbnailDrawn"], ["pdfsidebar", ""], ["id", "mainContainer"], [3, "customToolbar", "mobileFriendlyZoomScale", "primaryMenuVisible", "showBookmarkButton", "showDownloadButton", "showFindButton", "showHandToolButton", "showOpenFileButton", "showPrintButton", "showPagingButtons", "showPresentationModeButton", "showRotateButton", "showSecondaryToolbarButton", "showSidebarButton", "showZoomButtons", "textLayer", "toolbarMarginTop", "toolbarWidth", "zoomLevels"], [3, "customSecondaryToolbar", "secondaryToolbarTop", "mobileFriendlyZoomScale", "showPresentationModeButton", "showOpenFileButton", "showPrintButton", "showDownloadButton", "showBookmarkButton", "showPagingButtons", "showRotateButton", "showHandToolButton", "showScrollingButton", "showSpreadButton", "showPropertiesButton", "spreadChange", "secondaryMenuIsEmpty"], ["pdfSecondaryToolbarComponent", ""], [3, "findbarLeft", "findbarTop", "mobileFriendlyZoomScale", "showFindButton", "customFindbarInputArea", "customFindbarButtons"], ["id", "viewerContainer"], ["class", "unverified-signature-warning", 4, "ngIf"], ["id", "viewer", 1, "pdfViewer", 3, "dblclick"], ["id", "errorWrapper", "hidden", "true"], ["id", "errorMessageLeft"], ["id", "errorMessage"], ["type", "button", "id", "errorShowMore", "data-l10n-id", "error_more_info"], ["type", "button", "id", "errorShowLess", "data-l10n-id", "error_less_info", "hidden", "true"], ["id", "errorMessageRight"], ["type", "button", "id", "errorClose", "data-l10n-id", "error_close"], [1, "clearBoth"], ["id", "errorMoreInfo", "hidden", "true", "readonly", "readonly"], ["id", "overlayContainer", 1, "hidden"], ["id", "passwordOverlay", 1, "container", "hidden"], [1, "dialog"], [1, "row"], ["id", "passwordText", "data-l10n-id", "password_label"], ["id", "password", 1, "toolbarField"], [1, "buttonRow"], ["type", "button", "id", "passwordCancel", 1, "overlayButton"], ["data-l10n-id", "password_cancel"], ["type", "button", "id", "passwordSubmit", 1, "overlayButton"], ["data-l10n-id", "password_ok"], ["id", "documentPropertiesOverlay", 1, "container", "hidden"], ["id", "printServiceOverlay", 1, "container", "hidden"], ["data-l10n-id", "print_progress_message"], ["value", "0", "max", "100"], ["data-l10n-id", "print_progress_percent", "data-l10n-args", "{ \"progress\": 0 }", 1, "relative-progress"], ["type", "button", "id", "printCancel", 1, "overlayButton"], ["data-l10n-id", "print_progress_close"], ["id", "printContainer"], ["defaultFreeFloatingBar", ""], ["rel", "resource", "type", "application/l10n", "origin", "ngx-extended-pdf-viewer"], [1, "unverified-signature-warning"]], template: function NgxExtendedPdfViewerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵtemplate(0, NgxExtendedPdfViewerComponent_link_0_Template, 1, 1, "link", 0);
                i0__namespace.ɵɵtemplate(1, NgxExtendedPdfViewerComponent_pdf_dark_theme_1_Template, 1, 0, "pdf-dark-theme", 1);
                i0__namespace.ɵɵtemplate(2, NgxExtendedPdfViewerComponent_pdf_light_theme_2_Template, 1, 0, "pdf-light-theme", 1);
                i0__namespace.ɵɵelement(3, "pdf-dynamic-css", 2);
                i0__namespace.ɵɵelementStart(4, "div", 3, 4);
                i0__namespace.ɵɵelementStart(6, "div", 5);
                i0__namespace.ɵɵelementStart(7, "div", 6);
                i0__namespace.ɵɵelementStart(8, "div", 7);
                i0__namespace.ɵɵlistener("resize", function NgxExtendedPdfViewerComponent_Template_div_resize_8_listener() { return ctx.onResize(); }, false, i0__namespace.ɵɵresolveWindow);
                i0__namespace.ɵɵelementStart(9, "div", 8);
                i0__namespace.ɵɵtemplate(10, NgxExtendedPdfViewerComponent_ng_content_10_Template, 1, 0, "ng-content", 9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "pdf-sidebar", 10, 11);
                i0__namespace.ɵɵlistener("thumbnailDrawn", function NgxExtendedPdfViewerComponent_Template_pdf_sidebar_thumbnailDrawn_11_listener($event) { return ctx.thumbnailDrawn.emit($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "div", 12);
                i0__namespace.ɵɵelement(14, "pdf-dummy-components");
                i0__namespace.ɵɵelement(15, "pdf-toolbar", 13);
                i0__namespace.ɵɵelementStart(16, "pdf-secondary-toolbar", 14, 15);
                i0__namespace.ɵɵlistener("spreadChange", function NgxExtendedPdfViewerComponent_Template_pdf_secondary_toolbar_spreadChange_16_listener($event) { return ctx.onSpreadChange($event); })("secondaryMenuIsEmpty", function NgxExtendedPdfViewerComponent_Template_pdf_secondary_toolbar_secondaryMenuIsEmpty_16_listener($event) { return ctx.onSecondaryMenuIsEmpty($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(18, "pdf-findbar", 16);
                i0__namespace.ɵɵelement(19, "pdf-context-menu");
                i0__namespace.ɵɵelementStart(20, "div", 17);
                i0__namespace.ɵɵtemplate(21, NgxExtendedPdfViewerComponent_div_21_Template, 4, 6, "div", 18);
                i0__namespace.ɵɵelementStart(22, "div", 19);
                i0__namespace.ɵɵlistener("dblclick", function NgxExtendedPdfViewerComponent_Template_div_dblclick_22_listener($event) { return ctx.zoomToPageWidth($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(23, "div", 20);
                i0__namespace.ɵɵelementStart(24, "div", 21);
                i0__namespace.ɵɵelement(25, "span", 22);
                i0__namespace.ɵɵelementStart(26, "button", 23);
                i0__namespace.ɵɵtext(27, " More Information ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(28, "button", 24);
                i0__namespace.ɵɵtext(29, " Less Information ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(30, "div", 25);
                i0__namespace.ɵɵelementStart(31, "button", 26);
                i0__namespace.ɵɵtext(32, "Close");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(33, "div", 27);
                i0__namespace.ɵɵelement(34, "textarea", 28);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(35, "div", 29);
                i0__namespace.ɵɵelementStart(36, "div", 30);
                i0__namespace.ɵɵelementStart(37, "div", 31);
                i0__namespace.ɵɵelementStart(38, "div", 32);
                i0__namespace.ɵɵelementStart(39, "p", 33);
                i0__namespace.ɵɵtext(40, " Enter the password to open this PDF file: ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(41, "div", 32);
                i0__namespace.ɵɵelement(42, "input", 34);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(43, "div", 35);
                i0__namespace.ɵɵelementStart(44, "button", 36);
                i0__namespace.ɵɵelementStart(45, "span", 37);
                i0__namespace.ɵɵtext(46, "Cancel");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(47, "button", 38);
                i0__namespace.ɵɵelementStart(48, "span", 39);
                i0__namespace.ɵɵtext(49, "OK");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(50, "pdf-document-properties-overlay", 40);
                i0__namespace.ɵɵelementStart(51, "div", 41);
                i0__namespace.ɵɵelementStart(52, "div", 31);
                i0__namespace.ɵɵelementStart(53, "div", 32);
                i0__namespace.ɵɵelementStart(54, "span", 42);
                i0__namespace.ɵɵtext(55, "Preparing document for printing\u2026");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(56, "div", 32);
                i0__namespace.ɵɵelement(57, "progress", 43);
                i0__namespace.ɵɵelementStart(58, "span", 44);
                i0__namespace.ɵɵtext(59, "0%");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(60, "div", 35);
                i0__namespace.ɵɵelementStart(61, "button", 45);
                i0__namespace.ɵɵelementStart(62, "span", 46);
                i0__namespace.ɵɵtext(63, "Cancel");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(64, "div", 47);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(65, NgxExtendedPdfViewerComponent_ng_template_65_Template, 0, 0, "ng-template", null, 48, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r8 = i0__namespace.ɵɵreference(66);
                i0__namespace.ɵɵproperty("ngIf", ctx.useBrowserLocale);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.theme === "dark");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.theme === "light");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("zoom", ctx.mobileFriendlyZoomScale)("width", ctx.toolbarWidthInPixels);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("height", ctx.minHeight ? ctx.minHeight : ctx.height);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵstyleProp("background-color", ctx.backgroundColor);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx.customFreeFloatingBar ? ctx.customFreeFloatingBar : _r8);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("sidebarPositionTop", ctx.sidebarPositionTop)("sidebarVisible", ctx.sidebarVisible)("showSidebarButton", ctx.showSidebarButton)("customSidebar", ctx.customSidebar)("customThumbnail", ctx.customThumbnail);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("customToolbar", ctx.customToolbar)("mobileFriendlyZoomScale", ctx.mobileFriendlyZoomScale)("primaryMenuVisible", ctx.primaryMenuVisible)("showBookmarkButton", ctx.showBookmarkButton)("showDownloadButton", ctx.showDownloadButton)("showFindButton", ctx.showFindButton)("showHandToolButton", ctx.showHandToolButton)("showOpenFileButton", ctx.showOpenFileButton)("showPrintButton", ctx.showPrintButton && ctx.enablePrint)("showPagingButtons", ctx.showPagingButtons)("showPresentationModeButton", ctx.showPresentationModeButton)("showRotateButton", ctx.showRotateButton)("showSecondaryToolbarButton", ctx.showSecondaryToolbarButton && !ctx.hideKebabMenuForSecondaryToolbar)("showSidebarButton", ctx.showSidebarButton)("showZoomButtons", ctx.showZoomButtons)("textLayer", ctx.textLayer)("toolbarMarginTop", ctx.toolbarMarginTop)("toolbarWidth", ctx.toolbarWidth)("zoomLevels", ctx.zoomLevels);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("customSecondaryToolbar", ctx.customSecondaryToolbar)("secondaryToolbarTop", ctx.secondaryToolbarTop)("mobileFriendlyZoomScale", ctx.mobileFriendlyZoomScale)("showPresentationModeButton", ctx.showPresentationModeButton)("showOpenFileButton", ctx.showOpenFileButton)("showPrintButton", ctx.showPrintButton && ctx.enablePrint)("showDownloadButton", ctx.showDownloadButton)("showBookmarkButton", ctx.showBookmarkButton)("showPagingButtons", ctx.showPagingButtons)("showRotateButton", ctx.showRotateButton)("showHandToolButton", ctx.showHandToolButton)("showScrollingButton", ctx.showScrollingButton)("showSpreadButton", ctx.showSpreadButton)("showPropertiesButton", ctx.showPropertiesButton);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("findbarLeft", ctx.findbarLeft)("findbarTop", ctx.findbarTop)("mobileFriendlyZoomScale", ctx.mobileFriendlyZoomScale)("showFindButton", ctx.showFindButton)("customFindbarInputArea", ctx.customFindbarInputArea)("customFindbarButtons", ctx.customFindbarButtons);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵstyleProp("top", ctx.viewerPositionTop);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.hasSignature && ctx.showUnverifiedSignatures);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("background-color", ctx.backgroundColor);
            }
        }, directives: [i1__namespace.NgIf, DynamicCssComponent, i1__namespace.NgTemplateOutlet, PdfSidebarComponent, PdfDummyComponentsComponent, PdfToolbarComponent, PdfSecondaryToolbarComponent, PdfFindbarComponent, PdfContextMenuComponent, PdfDocumentPropertiesOverlayComponent, PdfDarkThemeComponent, PdfLightThemeComponent], pipes: [i1__namespace.AsyncPipe, TranslatePipe], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxExtendedPdfViewerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-extended-pdf-viewer',
                        templateUrl: './ngx-extended-pdf-viewer.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () {
            return [{ type: i0__namespace.NgZone }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }, { type: PDFNotificationService }, { type: i1__namespace.Location }, { type: i0__namespace.ElementRef }];
        }, { dummyComponents: [{
                    type: i0.ViewChild,
                    args: [PdfDummyComponentsComponent]
                }], root: [{
                    type: i0.ViewChild,
                    args: ['root']
                }], customFindbarInputArea: [{
                    type: i0.Input
                }], customToolbar: [{
                    type: i0.Input
                }], customFindbar: [{
                    type: i0.Input
                }], customFindbarButtons: [{
                    type: i0.Input
                }], customSecondaryToolbar: [{
                    type: i0.Input
                }], customSidebar: [{
                    type: i0.Input
                }], customThumbnail: [{
                    type: i0.Input
                }], customFreeFloatingBar: [{
                    type: i0.Input
                }], enableDragAndDrop: [{
                    type: i0.Input
                }], formData: [{
                    type: i0.Input
                }], formDataChange: [{
                    type: i0.Output
                }], pageViewMode: [{
                    type: i0.Input
                }], progress: [{
                    type: i0.Output
                }], secondaryToolbarComponent: [{
                    type: i0.ViewChild,
                    args: ['pdfSecondaryToolbarComponent']
                }], sidebarComponent: [{
                    type: i0.ViewChild,
                    args: ['pdfsidebar']
                }], srcChange: [{
                    type: i0.Output
                }], scrollMode: [{
                    type: i0.Input
                }], scrollModeChange: [{
                    type: i0.Output
                }], authorization: [{
                    type: i0.Input
                }], httpHeaders: [{
                    type: i0.Input
                }], contextMenuAllowed: [{
                    type: i0.Input
                }], afterPrint: [{
                    type: i0.Output
                }], beforePrint: [{
                    type: i0.Output
                }], currentZoomFactor: [{
                    type: i0.Output
                }], enablePrint: [{
                    type: i0.Input
                }], delayFirstView: [{
                    type: i0.Input
                }], logLevel: [{
                    type: i0.Input
                }], enablePinchOnMobile: [{
                    type: i0.Input
                }], minifiedJSLibraries: [{
                    type: i0.Input
                }], printResolution: [{
                    type: i0.Input
                }], rotation: [{
                    type: i0.Input
                }], rotationChange: [{
                    type: i0.Output
                }], src: [{
                    type: i0.Input
                }], base64Src: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], useBrowserLocale: [{
                    type: i0.Input
                }], backgroundColor: [{
                    type: i0.Input
                }], filenameForDownload: [{
                    type: i0.Input
                }], ignoreKeyboard: [{
                    type: i0.Input
                }], ignoreKeys: [{
                    type: i0.Input
                }], acceptKeys: [{
                    type: i0.Input
                }], imageResourcesPath: [{
                    type: i0.Input
                }], localeFolderPath: [{
                    type: i0.Input
                }], language: [{
                    type: i0.Input
                }], listenToURL: [{
                    type: i0.Input
                }], nameddest: [{
                    type: i0.Input
                }], password: [{
                    type: i0.Input
                }], showUnverifiedSignatures: [{
                    type: i0.Input
                }], startTabindex: [{
                    type: i0.Input
                }], showSidebarButton: [{
                    type: i0.Input
                }], sidebarVisible: [{
                    type: i0.Input
                }], sidebarVisibleChange: [{
                    type: i0.Output
                }], showFindButton: [{
                    type: i0.Input
                }], showPagingButtons: [{
                    type: i0.Input
                }], showZoomButtons: [{
                    type: i0.Input
                }], showPresentationModeButton: [{
                    type: i0.Input
                }], showOpenFileButton: [{
                    type: i0.Input
                }], showPrintButton: [{
                    type: i0.Input
                }], showDownloadButton: [{
                    type: i0.Input
                }], showBookmarkButton: [{
                    type: i0.Input
                }], theme: [{
                    type: i0.Input
                }], showToolbar: [{
                    type: i0.Input
                }], showSecondaryToolbarButton: [{
                    type: i0.Input
                }], showRotateButton: [{
                    type: i0.Input
                }], handTool: [{
                    type: i0.Input
                }], handToolChange: [{
                    type: i0.Output
                }], showHandToolButton: [{
                    type: i0.Input
                }], showScrollingButton: [{
                    type: i0.Input
                }], showSpreadButton: [{
                    type: i0.Input
                }], showPropertiesButton: [{
                    type: i0.Input
                }], showBorders: [{
                    type: i0.Input
                }], spread: [{
                    type: i0.Input
                }], spreadChange: [{
                    type: i0.Output
                }], thumbnailDrawn: [{
                    type: i0.Output
                }], page: [{
                    type: i0.Input
                }], pageChange: [{
                    type: i0.Output
                }], pageLabel: [{
                    type: i0.Input
                }], pageLabelChange: [{
                    type: i0.Output
                }], pagesLoaded: [{
                    type: i0.Output
                }], pageRender: [{
                    type: i0.Output
                }], pageRendered: [{
                    type: i0.Output
                }], pdfDownloaded: [{
                    type: i0.Output
                }], pdfLoaded: [{
                    type: i0.Output
                }], pdfLoadingFailed: [{
                    type: i0.Output
                }], textLayer: [{
                    type: i0.Input
                }], textLayerRendered: [{
                    type: i0.Output
                }], updateFindMatchesCount: [{
                    type: i0.Output
                }], updateFindState: [{
                    type: i0.Output
                }], zoom: [{
                    type: i0.Input
                }], zoomChange: [{
                    type: i0.Output
                }], zoomLevels: [{
                    type: i0.Input
                }], maxZoom: [{
                    type: i0.Input
                }], minZoom: [{
                    type: i0.Input
                }], _mobileFriendlyZoom: [{
                    type: i0.Input
                }], mobileFriendlyZoom: [{
                    type: i0.Input
                }], onContextMenu: [{
                    type: i0.HostListener,
                    args: ['contextmenu']
                }] });
    })();

    var _c0 = ["root"];
    var _c1 = ["pdfSecondaryToolbarComponent"];
    var _c2 = ["pdfsidebar"];
    function NgxExtendedPdfViewerServerComponent_link_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "link", 7);
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵattribute("xhref", ctx_r0.localeFolderPath + "/locale.properties");
        }
    }
    function NgxExtendedPdfViewerServerComponent_pdf_dark_theme_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "pdf-dark-theme");
        }
    }
    function NgxExtendedPdfViewerServerComponent_pdf_light_theme_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "pdf-light-theme");
        }
    }
    function NgxExtendedPdfViewerServerComponent_ng_template_8_Template(rf, ctx) { }
    var NgxExtendedPdfViewerServerComponent = /** @class */ (function () {
        function NgxExtendedPdfViewerServerComponent() {
            this.customFindbarButtons = undefined;
            this.formData = {};
            this.formDataChange = new i0.EventEmitter();
            this.pageViewMode = 'multiple';
            this.progress = new i0.EventEmitter();
            this.srcChange = new i0.EventEmitter();
            this.scrollMode = undefined;
            this.scrollModeChange = new i0.EventEmitter();
            this.authorization = undefined;
            this.httpHeaders = undefined;
            this.contextMenuAllowed = true;
            this.afterPrint = new i0.EventEmitter();
            this.beforePrint = new i0.EventEmitter();
            this.currentZoomFactor = new i0.EventEmitter();
            this.enablePrint = true;
            /**
             * Number of milliseconds to wait between initializing the PDF viewer and loading the PDF file.
             * Most users can let this parameter safely at it's default value of zero.
             * Set this to 1000 or higher if you run into timing problems (typically caused by loading the locale files
             * after the PDF files, so they are not available when the PDF viewer is initialized).
             */
            this.delayFirstView = 0;
            /** How many log messages should be printed?
             * Legal values: VerbosityLevel.INFOS (= 5), VerbosityLevel.WARNINGS (= 1), VerbosityLevel.ERRORS (= 0) */
            this.logLevel = exports.VerbosityLevel.WARNINGS;
            this.enablePinchOnMobile = false;
            /** Use the minified (minifiedJSLibraries="true", which is the default) or the user-readable pdf.js library (minifiedJSLibraries="false") */
            this.minifiedJSLibraries = true;
            this.primaryMenuVisible = true;
            /** option to increase (or reduce) print resolution. Default is 150 (dpi). Sensible values
             * are 300, 600, and 1200. Note the increase memory consumption, which may even result in a browser crash. */
            this.printResolution = null;
            this.rotationChange = new i0.EventEmitter();
            /**
             * If this flag is true, this components adds a link to the locale assets. The pdf viewer
             * sees this link and uses it to load the locale files automatically.
             * @param useBrowserLocale boolean
             */
            this.useBrowserLocale = false;
            this.backgroundColor = '#e8e8eb';
            /** Allows the user to define the name of the file after clicking "download" */
            this.filenameForDownload = 'document.pdf';
            /** Allows the user to disable the keyboard bindings completely */
            this.ignoreKeyboard = false;
            /** Allows the user to disable a list of key bindings. */
            this.ignoreKeys = [];
            /** Allows the user to enable a list of key bindings explicitly. If this property is set, every other key binding is ignored. */
            this.acceptKeys = [];
            /** Allows the user to put the viewer's svg images into an arbitrary folder */
            this.imageResourcesPath = './' + exports.pdfDefaultOptions.assetsFolder + '/images/';
            /** Allows the user to put their locale folder into an arbitrary folder */
            this.localeFolderPath = './' + exports.pdfDefaultOptions.assetsFolder + '/locale';
            /** Override the default locale. This must be the complete locale name, such as "es-ES". The string is allowed to be all lowercase.
             */
            this.language = undefined;
            /** By default, listening to the URL is deactivated because often the anchor tag is used for the Angular router */
            this.listenToURL = false;
            /** Navigate to a certain "named destination" */
            this.nameddest = undefined;
            /** allows you to pass a password to read password-protected files */
            this.password = undefined;
            /** pdf.js can show signatures, but fails to verify them. So they are switched off by default.
             * Set "[showUnverifiedSignatures]"="true" to display e-signatures nonetheless.
             */
            this.showUnverifiedSignatures = false;
            this.sidebarVisible = undefined;
            this.sidebarVisibleChange = new i0.EventEmitter();
            this.showFindButton = undefined;
            this.showPagingButtons = true;
            this.showZoomButtons = true;
            this.showPresentationModeButton = false;
            this.showOpenFileButton = true;
            this.showPrintButton = true;
            this.showDownloadButton = true;
            this.showBookmarkButton = true;
            this.theme = 'light';
            this.showToolbar = true;
            this.showSecondaryToolbarButton = true;
            /** Set by the event (secondaryMenuIsEmpty) */
            this.hideKebabMenuForSecondaryToolbar = false;
            this.showRotateButton = true;
            this.handTool = true;
            this.handToolChange = new i0.EventEmitter();
            this.showHandToolButton = false;
            this.showScrollingButton = true;
            this.showSpreadButton = true;
            this.showPropertiesButton = true;
            this.showBorders = true;
            this.spreadChange = new i0.EventEmitter();
            this.thumbnailDrawn = new i0.EventEmitter();
            this._page = undefined;
            this.pageChange = new i0.EventEmitter();
            this.pageLabel = undefined;
            this.pageLabelChange = new i0.EventEmitter();
            this.pagesLoaded = new i0.EventEmitter();
            this.pageRendered = new i0.EventEmitter();
            this.pdfDownloaded = new i0.EventEmitter();
            this.pdfLoaded = new i0.EventEmitter();
            this.pdfLoadingFailed = new i0.EventEmitter();
            this.textLayer = undefined;
            this.textLayerRendered = new i0.EventEmitter();
            this.updateFindMatchesCount = new i0.EventEmitter();
            this.updateFindState = new i0.EventEmitter();
            /** Legal values: undefined, 'auto', 'page-actual', 'page-fit', 'page-width', or '50' (or any other percentage) */
            this.zoom = undefined;
            this.zoomChange = new i0.EventEmitter();
            this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 1, 1.25, 1.5, 2, 3, 4];
            this.maxZoom = 10;
            this.minZoom = 0.1;
            /** This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
             * This attribute is a string with a percent character at the end (e.g. "150%").
             */
            this._mobileFriendlyZoom = '100%';
            this.mobileFriendlyZoomScale = 1;
            this.toolbarMarginTop = '0px';
            this.toolbarWidth = '100%';
            this.toolbarWidthInPixels = 100;
            this.secondaryToolbarTop = undefined;
            // dirty IE11 hack - temporary solution
            this.findbarTop = undefined;
            // dirty IE11 hack - temporary solution
            this.findbarLeft = undefined;
            // Additional PDF Form Field Types #567: Used to store the exported values of radio and checkbox buttons
            this.buttonValues = {};
            this.shuttingDown = false;
        }
        Object.defineProperty(NgxExtendedPdfViewerServerComponent.prototype, "src", {
            set: function (url) { },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxExtendedPdfViewerServerComponent.prototype, "base64Src", {
            set: function (base64) { },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxExtendedPdfViewerServerComponent.prototype, "height", {
            set: function (h) { },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxExtendedPdfViewerServerComponent.prototype, "showSidebarButton", {
            get: function () {
                return true;
            },
            set: function (show) { },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxExtendedPdfViewerServerComponent.prototype, "page", {
            get: function () {
                return this._page;
            },
            set: function (p) { },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxExtendedPdfViewerServerComponent.prototype, "mobileFriendlyZoom", {
            get: function () {
                return this._mobileFriendlyZoom;
            },
            /**
             * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
             * This attribute is a string with a percent character at the end (e.g. "150%").
             */
            set: function (zoom) { },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxExtendedPdfViewerServerComponent.prototype, "sidebarPositionTop", {
            get: function () {
                return '32px';
            },
            enumerable: false,
            configurable: true
        });
        NgxExtendedPdfViewerServerComponent.prototype.ngOnChanges = function (changes) { };
        NgxExtendedPdfViewerServerComponent.prototype.ngOnInit = function () { };
        NgxExtendedPdfViewerServerComponent.prototype.ngAfterViewInit = function () { };
        NgxExtendedPdfViewerServerComponent.prototype.ngOnDestroy = function () { };
        NgxExtendedPdfViewerServerComponent.prototype.onContextMenu = function () {
            return this.contextMenuAllowed;
        };
        return NgxExtendedPdfViewerServerComponent;
    }());
    NgxExtendedPdfViewerServerComponent.ngxExtendedPdfViewerInitialized = false;
    /** @nocollapse */ NgxExtendedPdfViewerServerComponent.ɵfac = function NgxExtendedPdfViewerServerComponent_Factory(t) { return new (t || NgxExtendedPdfViewerServerComponent)(); };
    /** @nocollapse */ NgxExtendedPdfViewerServerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: NgxExtendedPdfViewerServerComponent, selectors: [["ngx-extended-pdf-viewer"]], viewQuery: function NgxExtendedPdfViewerServerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(PdfDummyComponentsComponent, 5);
                i0__namespace.ɵɵviewQuery(_c0, 5);
                i0__namespace.ɵɵviewQuery(_c1, 5);
                i0__namespace.ɵɵviewQuery(_c2, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.dummyComponents = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.root = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.secondaryToolbarComponent = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.sidebarComponent = _t.first);
            }
        }, hostBindings: function NgxExtendedPdfViewerServerComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("contextmenu", function NgxExtendedPdfViewerServerComponent_contextmenu_HostBindingHandler() { return ctx.onContextMenu(); });
            }
        }, inputs: { customFindbarInputArea: "customFindbarInputArea", customToolbar: "customToolbar", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", customSecondaryToolbar: "customSecondaryToolbar", customSidebar: "customSidebar", customThumbnail: "customThumbnail", customFreeFloatingBar: "customFreeFloatingBar", formData: "formData", pageViewMode: "pageViewMode", scrollMode: "scrollMode", authorization: "authorization", httpHeaders: "httpHeaders", contextMenuAllowed: "contextMenuAllowed", enablePrint: "enablePrint", delayFirstView: "delayFirstView", logLevel: "logLevel", enablePinchOnMobile: "enablePinchOnMobile", minifiedJSLibraries: "minifiedJSLibraries", printResolution: "printResolution", rotation: "rotation", src: "src", base64Src: "base64Src", height: "height", useBrowserLocale: "useBrowserLocale", backgroundColor: "backgroundColor", filenameForDownload: "filenameForDownload", ignoreKeyboard: "ignoreKeyboard", ignoreKeys: "ignoreKeys", acceptKeys: "acceptKeys", imageResourcesPath: "imageResourcesPath", localeFolderPath: "localeFolderPath", language: "language", listenToURL: "listenToURL", nameddest: "nameddest", password: "password", showUnverifiedSignatures: "showUnverifiedSignatures", startTabindex: "startTabindex", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", showFindButton: "showFindButton", showPagingButtons: "showPagingButtons", showZoomButtons: "showZoomButtons", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", showBookmarkButton: "showBookmarkButton", theme: "theme", showToolbar: "showToolbar", showSecondaryToolbarButton: "showSecondaryToolbarButton", showRotateButton: "showRotateButton", handTool: "handTool", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton", showBorders: "showBorders", spread: "spread", page: "page", pageLabel: "pageLabel", textLayer: "textLayer", zoom: "zoom", zoomLevels: "zoomLevels", maxZoom: "maxZoom", minZoom: "minZoom", _mobileFriendlyZoom: "_mobileFriendlyZoom", mobileFriendlyZoom: "mobileFriendlyZoom" }, outputs: { formDataChange: "formDataChange", progress: "progress", srcChange: "srcChange", scrollModeChange: "scrollModeChange", afterPrint: "afterPrint", beforePrint: "beforePrint", currentZoomFactor: "currentZoomFactor", rotationChange: "rotationChange", sidebarVisibleChange: "sidebarVisibleChange", handToolChange: "handToolChange", spreadChange: "spreadChange", thumbnailDrawn: "thumbnailDrawn", pageChange: "pageChange", pageLabelChange: "pageLabelChange", pagesLoaded: "pagesLoaded", pageRendered: "pageRendered", pdfDownloaded: "pdfDownloaded", pdfLoaded: "pdfLoaded", pdfLoadingFailed: "pdfLoadingFailed", textLayerRendered: "textLayerRendered", updateFindMatchesCount: "updateFindMatchesCount", updateFindState: "updateFindState", zoomChange: "zoomChange" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 10, vars: 7, consts: [["rel", "resource", "type", "application/l10n", "origin", "ngx-extended-pdf-viewer", 4, "ngIf"], [4, "ngIf"], [3, "zoom", "width"], [1, "zoom"], [1, "html"], ["id", "mainContainer"], ["defaultFreeFloatingBar", ""], ["rel", "resource", "type", "application/l10n", "origin", "ngx-extended-pdf-viewer"]], template: function NgxExtendedPdfViewerServerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, NgxExtendedPdfViewerServerComponent_link_0_Template, 1, 1, "link", 0);
                i0__namespace.ɵɵtemplate(1, NgxExtendedPdfViewerServerComponent_pdf_dark_theme_1_Template, 1, 0, "pdf-dark-theme", 1);
                i0__namespace.ɵɵtemplate(2, NgxExtendedPdfViewerServerComponent_pdf_light_theme_2_Template, 1, 0, "pdf-light-theme", 1);
                i0__namespace.ɵɵelement(3, "pdf-dynamic-css", 2);
                i0__namespace.ɵɵelementStart(4, "div", 3);
                i0__namespace.ɵɵelementStart(5, "div", 4);
                i0__namespace.ɵɵelementStart(6, "div", 5);
                i0__namespace.ɵɵelement(7, "pdf-dummy-components");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(8, NgxExtendedPdfViewerServerComponent_ng_template_8_Template, 0, 0, "ng-template", null, 6, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.useBrowserLocale);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.theme === "dark");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.theme === "light");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("zoom", ctx.mobileFriendlyZoomScale)("width", ctx.toolbarWidthInPixels);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleProp("height", ctx.height);
            }
        }, directives: [i1__namespace.NgIf, DynamicCssComponent, PdfDummyComponentsComponent, PdfDarkThemeComponent, PdfLightThemeComponent], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxExtendedPdfViewerServerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-extended-pdf-viewer',
                        templateUrl: './ngx-extended-pdf-viewer-server.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return []; }, { dummyComponents: [{
                    type: i0.ViewChild,
                    args: [PdfDummyComponentsComponent]
                }], root: [{
                    type: i0.ViewChild,
                    args: ['root']
                }], customFindbarInputArea: [{
                    type: i0.Input
                }], customToolbar: [{
                    type: i0.Input
                }], customFindbar: [{
                    type: i0.Input
                }], customFindbarButtons: [{
                    type: i0.Input
                }], customSecondaryToolbar: [{
                    type: i0.Input
                }], customSidebar: [{
                    type: i0.Input
                }], customThumbnail: [{
                    type: i0.Input
                }], customFreeFloatingBar: [{
                    type: i0.Input
                }], formData: [{
                    type: i0.Input
                }], formDataChange: [{
                    type: i0.Output
                }], pageViewMode: [{
                    type: i0.Input
                }], progress: [{
                    type: i0.Output
                }], secondaryToolbarComponent: [{
                    type: i0.ViewChild,
                    args: ['pdfSecondaryToolbarComponent']
                }], sidebarComponent: [{
                    type: i0.ViewChild,
                    args: ['pdfsidebar']
                }], srcChange: [{
                    type: i0.Output
                }], scrollMode: [{
                    type: i0.Input
                }], scrollModeChange: [{
                    type: i0.Output
                }], authorization: [{
                    type: i0.Input
                }], httpHeaders: [{
                    type: i0.Input
                }], contextMenuAllowed: [{
                    type: i0.Input
                }], afterPrint: [{
                    type: i0.Output
                }], beforePrint: [{
                    type: i0.Output
                }], currentZoomFactor: [{
                    type: i0.Output
                }], enablePrint: [{
                    type: i0.Input
                }], delayFirstView: [{
                    type: i0.Input
                }], logLevel: [{
                    type: i0.Input
                }], enablePinchOnMobile: [{
                    type: i0.Input
                }], minifiedJSLibraries: [{
                    type: i0.Input
                }], printResolution: [{
                    type: i0.Input
                }], rotation: [{
                    type: i0.Input
                }], rotationChange: [{
                    type: i0.Output
                }], src: [{
                    type: i0.Input
                }], base64Src: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], useBrowserLocale: [{
                    type: i0.Input
                }], backgroundColor: [{
                    type: i0.Input
                }], filenameForDownload: [{
                    type: i0.Input
                }], ignoreKeyboard: [{
                    type: i0.Input
                }], ignoreKeys: [{
                    type: i0.Input
                }], acceptKeys: [{
                    type: i0.Input
                }], imageResourcesPath: [{
                    type: i0.Input
                }], localeFolderPath: [{
                    type: i0.Input
                }], language: [{
                    type: i0.Input
                }], listenToURL: [{
                    type: i0.Input
                }], nameddest: [{
                    type: i0.Input
                }], password: [{
                    type: i0.Input
                }], showUnverifiedSignatures: [{
                    type: i0.Input
                }], startTabindex: [{
                    type: i0.Input
                }], showSidebarButton: [{
                    type: i0.Input
                }], sidebarVisible: [{
                    type: i0.Input
                }], sidebarVisibleChange: [{
                    type: i0.Output
                }], showFindButton: [{
                    type: i0.Input
                }], showPagingButtons: [{
                    type: i0.Input
                }], showZoomButtons: [{
                    type: i0.Input
                }], showPresentationModeButton: [{
                    type: i0.Input
                }], showOpenFileButton: [{
                    type: i0.Input
                }], showPrintButton: [{
                    type: i0.Input
                }], showDownloadButton: [{
                    type: i0.Input
                }], showBookmarkButton: [{
                    type: i0.Input
                }], theme: [{
                    type: i0.Input
                }], showToolbar: [{
                    type: i0.Input
                }], showSecondaryToolbarButton: [{
                    type: i0.Input
                }], showRotateButton: [{
                    type: i0.Input
                }], handTool: [{
                    type: i0.Input
                }], handToolChange: [{
                    type: i0.Output
                }], showHandToolButton: [{
                    type: i0.Input
                }], showScrollingButton: [{
                    type: i0.Input
                }], showSpreadButton: [{
                    type: i0.Input
                }], showPropertiesButton: [{
                    type: i0.Input
                }], showBorders: [{
                    type: i0.Input
                }], spread: [{
                    type: i0.Input
                }], spreadChange: [{
                    type: i0.Output
                }], thumbnailDrawn: [{
                    type: i0.Output
                }], page: [{
                    type: i0.Input
                }], pageChange: [{
                    type: i0.Output
                }], pageLabel: [{
                    type: i0.Input
                }], pageLabelChange: [{
                    type: i0.Output
                }], pagesLoaded: [{
                    type: i0.Output
                }], pageRendered: [{
                    type: i0.Output
                }], pdfDownloaded: [{
                    type: i0.Output
                }], pdfLoaded: [{
                    type: i0.Output
                }], pdfLoadingFailed: [{
                    type: i0.Output
                }], textLayer: [{
                    type: i0.Input
                }], textLayerRendered: [{
                    type: i0.Output
                }], updateFindMatchesCount: [{
                    type: i0.Output
                }], updateFindState: [{
                    type: i0.Output
                }], zoom: [{
                    type: i0.Input
                }], zoomChange: [{
                    type: i0.Output
                }], zoomLevels: [{
                    type: i0.Input
                }], maxZoom: [{
                    type: i0.Input
                }], minZoom: [{
                    type: i0.Input
                }], _mobileFriendlyZoom: [{
                    type: i0.Input
                }], mobileFriendlyZoom: [{
                    type: i0.Input
                }], onContextMenu: [{
                    type: i0.HostListener,
                    args: ['contextmenu']
                }] });
    })();

    var NgxExtendedPdfViewerService = /** @class */ (function () {
        function NgxExtendedPdfViewerService() {
        }
        NgxExtendedPdfViewerService.prototype.findMultiple = function (text, options) {
            if (options === void 0) { options = {}; }
            options = Object.assign(Object.assign({}, options), { findMultipleSearchTexts: true });
            var searchString = text.join('\n') + '\n';
            return this.find(searchString, options);
        };
        NgxExtendedPdfViewerService.prototype.find = function (text, options) {
            if (options === void 0) { options = {}; }
            if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
                // tslint:disable-next-line:quotemark
                console.error("The PDF viewer hasn't finished initializing. Please call find() later.");
                return false;
            }
            else {
                var highlightAllCheckbox = document.getElementById('findHighlightAll');
                if (highlightAllCheckbox) {
                    highlightAllCheckbox.checked = options.highlightAll || false;
                }
                var matchCaseCheckbox = document.getElementById('findMatchCase');
                if (matchCaseCheckbox) {
                    matchCaseCheckbox.checked = options.matchCase || false;
                }
                var entireWordCheckbox = document.getElementById('findEntireWord');
                if (entireWordCheckbox) {
                    entireWordCheckbox.checked = options.wholeWords || false;
                }
                var findIgnoreAccentsCheckbox = document.getElementById('findIgnoreAccents');
                if (findIgnoreAccentsCheckbox) {
                    findIgnoreAccentsCheckbox.checked = options.ignoreAccents || false;
                }
                var multipleSearchTerms = options.findMultipleSearchTexts || text.includes('\n') || false;
                var findMultipleSearchTextsCheckbox = document.getElementById('findMultipleSearchTexts');
                if (findMultipleSearchTextsCheckbox) {
                    findMultipleSearchTextsCheckbox.checked = multipleSearchTerms;
                }
                var individualWordsModeCheckbox = document.getElementById('individualWordsMode');
                if (individualWordsModeCheckbox) {
                    individualWordsModeCheckbox.checked = false;
                }
                var fuzzySearchCheckbox = document.getElementById('findFuzzy');
                if (fuzzySearchCheckbox) {
                    fuzzySearchCheckbox.checked = options.fuzzySearch || false;
                }
                var inputField = multipleSearchTerms ? document.getElementById('findInputMultiline') : document.getElementById('findInput');
                if (inputField) {
                    if (inputField instanceof HTMLTextAreaElement) {
                        inputField.value = text;
                        // todo dirty hack!
                        inputField.classList.remove('hidden');
                        document.getElementById('findInput').classList.add('hidden');
                        document.getElementById('individualWordsModeLabel').classList.remove('hidden');
                        document.getElementById('individualWordsMode').classList.remove('hidden');
                        // end of the dirty hack
                    }
                    else if (inputField instanceof HTMLInputElement) {
                        inputField.value = text;
                        // todo dirty hack!
                        inputField.classList.remove('hidden');
                        document.getElementById('findInputMultiline').classList.add('hidden');
                        document.getElementById('individualWordsModeLabel').classList.add('hidden');
                        document.getElementById('individualWordsMode').classList.add('hidden');
                        // end of the dirty hack
                    }
                    inputField.dispatchEvent(new Event('input'));
                    return true;
                }
                else {
                    // tslint:disable-next-line:quotemark
                    console.error("Unexpected error: the input field used to search isn't part of the DOM.");
                    return false;
                }
            }
        };
        NgxExtendedPdfViewerService.prototype.findNext = function () {
            if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
                // tslint:disable-next-line:quotemark
                console.error("The PDF viewer hasn't finished initializing. Please call findNext() later.");
                return false;
            }
            else {
                var button = document.getElementById('findNext');
                if (button) {
                    button.click();
                    return true;
                }
                return false;
            }
        };
        NgxExtendedPdfViewerService.prototype.findPrevious = function () {
            if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
                // tslint:disable-next-line:quotemark
                console.error("The PDF viewer hasn't finished initializing. Please call findPrevious() later.");
                return false;
            }
            else {
                var button = document.getElementById('findPrevious');
                if (button) {
                    button.click();
                    return true;
                }
                return false;
            }
        };
        NgxExtendedPdfViewerService.prototype.print = function (printRange) {
            var _this = this;
            var PDFViewerApplication = window.PDFViewerApplication;
            var alreadyThere = !!window['isInPDFPrintRange'] && !printRange;
            if (!alreadyThere) {
                if (!printRange) {
                    printRange = {};
                }
                this.setPrintRange(printRange);
            }
            window.printPDF();
            if (!alreadyThere) {
                PDFViewerApplication.eventBus.on('afterprint', function () {
                    _this.removePrintRange();
                });
            }
        };
        NgxExtendedPdfViewerService.prototype.removePrintRange = function () {
            window['isInPDFPrintRange'] = undefined;
            window['filteredPageCount'] = undefined;
        };
        NgxExtendedPdfViewerService.prototype.setPrintRange = function (printRange) {
            var _this = this;
            var PDFViewerApplication = window.PDFViewerApplication;
            window['isInPDFPrintRange'] = function (page) { return _this.isInPDFPrintRange(page, printRange); };
            window['filteredPageCount'] = this.filteredPageCount(PDFViewerApplication.pagesCount, printRange);
        };
        NgxExtendedPdfViewerService.prototype.filteredPageCount = function (pageCount, range) {
            var result = 0;
            for (var page = 1; page <= pageCount; page++) {
                if (this.isInPDFPrintRange(page, range)) {
                    result++;
                }
            }
            return result;
        };
        NgxExtendedPdfViewerService.prototype.isInPDFPrintRange = function (pageIndex, printRange) {
            var page = pageIndex + 1;
            if (printRange.from) {
                if (page < printRange.from) {
                    return false;
                }
            }
            if (printRange.to) {
                if (page > printRange.to) {
                    return false;
                }
            }
            if (printRange.excluded) {
                var e = printRange.excluded;
                if (e.some(function (p) { return p === page; })) {
                    return false;
                }
            }
            if (printRange.included) {
                if (!printRange.included.some(function (p) { return p === page; })) {
                    return false;
                }
            }
            return true;
        };
        NgxExtendedPdfViewerService.prototype.getPageAsText = function (pageNumber) {
            var _this = this;
            var PDFViewerApplication = window.PDFViewerApplication;
            var pdfDocument = PDFViewerApplication.pdfDocument;
            var pagePromise = pdfDocument.getPage(pageNumber);
            var extractTextSnippets = function (pdfPage) { return new Promise(function (resolve, reject) {
                var textSnippets = pdfPage.getTextContent();
                resolve(textSnippets);
            }); };
            var combineTextSnippets = function (textSnippets) { return new Promise(function (resolve, reject) {
                var text = _this.convertTextInfoToText(textSnippets);
                resolve(text);
            }); };
            return pagePromise.then(extractTextSnippets).then(combineTextSnippets);
        };
        NgxExtendedPdfViewerService.prototype.convertTextInfoToText = function (textInfo) {
            if (!textInfo) {
                return '';
            }
            return textInfo.items.map(function (info) { return info.str; }).join('');
        };
        NgxExtendedPdfViewerService.prototype.getPageAsImage = function (pageNumber, scale) {
            var _this = this;
            var PDFViewerApplication = window.PDFViewerApplication;
            var pdfDocument = PDFViewerApplication.pdfDocument;
            var pagePromise = pdfDocument.getPage(pageNumber);
            var imagePromise = function (pdfPage) { return new Promise(function (resolve, reject) {
                resolve(_this.draw(pdfPage, scale));
            }); };
            return pagePromise.then(imagePromise);
        };
        NgxExtendedPdfViewerService.prototype.draw = function (pdfPage, scale) {
            var zoomFactor = 1;
            if (scale.scale) {
                zoomFactor = scale.scale;
            }
            else if (scale.width) {
                zoomFactor = scale.width / pdfPage.getViewport({ scale: 1 }).width;
            }
            else if (scale.height) {
                zoomFactor = scale.height / pdfPage.getViewport({ scale: 1 }).height;
            }
            var viewport = pdfPage.getViewport({
                scale: zoomFactor,
            });
            var _a = this.getPageDrawContext(viewport.width, viewport.height), ctx = _a.ctx, canvas = _a.canvas;
            var drawViewport = viewport.clone();
            var renderContext = {
                canvasContext: ctx,
                viewport: drawViewport,
            };
            var renderTask = pdfPage.render(renderContext);
            var dataUrlPromise = function () { return new Promise(function (resolve, reject) {
                resolve(canvas.toDataURL());
            }); };
            return renderTask.promise.then(dataUrlPromise);
        };
        NgxExtendedPdfViewerService.prototype.getPageDrawContext = function (width, height) {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d', { alpha: false });
            if (!ctx) {
                // tslint:disable-next-line: quotemark
                throw new Error("Couldn't create the 2d context");
            }
            canvas.width = width;
            canvas.height = height;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            return { ctx: ctx, canvas: canvas };
        };
        NgxExtendedPdfViewerService.prototype.getCurrentDocumentAsBlob = function () {
            return __awaiter(this, void 0, void 0, function () {
                var PDFViewerApplication, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            PDFViewerApplication = window.PDFViewerApplication;
                            return [4 /*yield*/, PDFViewerApplication.pdfDocument.saveDocument(PDFViewerApplication.pdfDocument.annotationStorage)];
                        case 1:
                            data = _a.sent();
                            return [2 /*return*/, new Blob([data], { type: 'application/pdf' })];
                    }
                });
            });
        };
        NgxExtendedPdfViewerService.prototype.getFormData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var PDFViewerApplication, pdf /*: PDFDocumentProxy */, dpiRatio, result, _loop_1, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            PDFViewerApplication = window.PDFViewerApplication;
                            pdf = PDFViewerApplication.pdfDocument;
                            dpiRatio = 96 / 72;
                            result = [];
                            _loop_1 = function (i) {
                                var currentPage /* : PDFPageProxy */, annotations;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, pdf.getPage(i)];
                                        case 1:
                                            currentPage = _b.sent();
                                            return [4 /*yield*/, currentPage.getAnnotations()];
                                        case 2:
                                            annotations = _b.sent();
                                            annotations
                                                .filter(function (a) { return a.subtype === 'Widget'; }) // get the form field annotations only
                                                .forEach(function (a) {
                                                // get the rectangle that represent the single field
                                                // and resize it according to the current DPI
                                                var fieldRect = currentPage.getViewport({ scale: dpiRatio }).convertToViewportRectangle(a.rect);
                                                // add the corresponding input
                                                result.push({ fieldAnnotation: a, fieldRect: fieldRect });
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            i = 1;
                            _a.label = 1;
                        case 1:
                            if (!(i <= pdf.numPages)) return [3 /*break*/, 4];
                            return [5 /*yield**/, _loop_1(i)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/, result];
                    }
                });
            });
        };
        return NgxExtendedPdfViewerService;
    }());

    var PdfOriginalComponent = /** @class */ (function () {
        function PdfOriginalComponent() {
        }
        return PdfOriginalComponent;
    }());
    /** @nocollapse */ PdfOriginalComponent.ɵfac = function PdfOriginalComponent_Factory(t) { return new (t || PdfOriginalComponent)(); };
    /** @nocollapse */ PdfOriginalComponent.ɵcmp = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineComponent({ type: PdfOriginalComponent, selectors: [["pdf-original-theme"]], decls: 0, vars: 0, template: function PdfOriginalComponent_Template(rf, ctx) { }, styles: [".textLayer{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1}.textLayer>span{color:transparent;position:absolute;white-space:pre;cursor:text;transform-origin:0 0}.textLayer .highlight{margin:-1px;padding:1px;background-color:#b400aa;border-radius:4px}.textLayer .highlight.begin{border-radius:4px 0 0 4px}.textLayer .highlight.end{border-radius:0 4px 4px 0}.textLayer .highlight.middle{border-radius:0}.textLayer .highlight.selected{background-color:#006400}.textLayer ::-moz-selection{background:#00f}.textLayer ::selection{background:#00f}.textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.textLayer .endOfContent.active{top:0}.annotationLayer section{position:absolute}.annotationLayer .buttonWidgetAnnotation.pushButton>a,.annotationLayer .linkAnnotation>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}.annotationLayer .buttonWidgetAnnotation.pushButton>a:hover,.annotationLayer .linkAnnotation>a:hover{opacity:.2;background:#ff0;box-shadow:0 2px 10px #ff0}.annotationLayer .textAnnotation img{position:absolute;cursor:pointer}.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input,.annotationLayer .choiceWidgetAnnotation select,.annotationLayer .textWidgetAnnotation input,.annotationLayer .textWidgetAnnotation textarea{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}.annotationLayer .choiceWidgetAnnotation select option{padding:0}.annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}.annotationLayer .textWidgetAnnotation textarea{font:message-box;font-size:9px;resize:none}.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled],.annotationLayer .choiceWidgetAnnotation select[disabled],.annotationLayer .textWidgetAnnotation input[disabled],.annotationLayer .textWidgetAnnotation textarea[disabled]{background:none;border:1px solid transparent;cursor:not-allowed}.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,.annotationLayer .buttonWidgetAnnotation.radioButton input:hover,.annotationLayer .choiceWidgetAnnotation select:hover,.annotationLayer .textWidgetAnnotation input:hover,.annotationLayer .textWidgetAnnotation textarea:hover{border:1px solid #000}.annotationLayer .choiceWidgetAnnotation select:focus,.annotationLayer .textWidgetAnnotation input:focus,.annotationLayer .textWidgetAnnotation textarea:focus{background:none;border:1px solid transparent}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:#000;content:\"\";display:block;position:absolute}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{height:80%;left:45%;width:1px}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{transform:rotate(45deg)}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{transform:rotate(-45deg)}.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}.annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}.annotationLayer .textWidgetAnnotation input.comb:focus{width:115%}.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}.annotationLayer .popupWrapper{position:absolute;width:20em}.annotationLayer .popup{position:absolute;z-index:4;max-width:20em;background-color:#ff9;box-shadow:0 2px 5px #888;border-radius:2px;padding:6px;margin-left:5px;cursor:pointer;font:message-box;font-size:9px;word-wrap:break-word}.annotationLayer .popup>*{font-size:9px}.annotationLayer .popup h1{display:inline-block}.annotationLayer .popup span{display:inline-block;margin-left:5px}.annotationLayer .popup p{border-top:1px solid #333;margin-top:2px;padding-top:2px}.annotationLayer .caretAnnotation,.annotationLayer .circleAnnotation svg ellipse,.annotationLayer .fileAttachmentAnnotation,.annotationLayer .freeTextAnnotation,.annotationLayer .highlightAnnotation,.annotationLayer .inkAnnotation svg polyline,.annotationLayer .lineAnnotation svg line,.annotationLayer .polygonAnnotation svg polygon,.annotationLayer .polylineAnnotation svg polyline,.annotationLayer .squareAnnotation svg rect,.annotationLayer .squigglyAnnotation,.annotationLayer .stampAnnotation,.annotationLayer .strikeoutAnnotation,.annotationLayer .underlineAnnotation{cursor:pointer}.pdfViewer .canvasWrapper{overflow:hidden}.pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px;position:relative;overflow:visible;border:9px solid transparent;background-clip:content-box;-o-border-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=\") 9 9 repeat;border-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=\") 9 9 repeat;background-color:#fff}.pdfViewer.removePageBorders .page{margin:0 auto 10px;border:none}.pdfViewer.singlePageView{display:inline-block}.pdfViewer.singlePageView .page{margin:0;border:none}.pdfViewer.scrollHorizontal,.pdfViewer.scrollWrapped,.spread{margin-left:3.5px;margin-right:3.5px;text-align:center}.pdfViewer.scrollHorizontal,.spread{white-space:nowrap}.pdfViewer.removePageBorders,.pdfViewer.scrollHorizontal .spread,.pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}.pdfViewer.scrollHorizontal .page,.pdfViewer.scrollHorizontal .spread,.pdfViewer.scrollWrapped .page,.pdfViewer.scrollWrapped .spread,.spread .page{display:inline-block;vertical-align:middle}.pdfViewer.scrollHorizontal .page,.pdfViewer.scrollWrapped .page,.spread .page{margin-left:-3.5px;margin-right:-3.5px}.pdfViewer.removePageBorders.scrollHorizontal .page,.pdfViewer.removePageBorders.scrollWrapped .page,.pdfViewer.removePageBorders .spread .page{margin-left:5px;margin-right:5px}.pdfViewer .page canvas{margin:0;display:block}.pdfViewer .page canvas[hidden]{display:none}.pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(\"data:image/gif;base64,R0lGODlhGAAYAPQAAP///wAAAM7Ozvr6+uDg4LCwsOjo6I6OjsjIyJycnNjY2KioqMDAwPLy8nZ2doaGhri4uGhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJBwAAACwAAAAAGAAYAAAFriAgjiQAQWVaDgr5POSgkoTDjFE0NoQ8iw8HQZQTDQjDn4jhSABhAAOhoTqSDg7qSUQwxEaEwwFhXHhHgzOA1xshxAnfTzotGRaHglJqkJcaVEqCgyoCBQkJBQKDDXQGDYaIioyOgYSXA36XIgYMBWRzXZoKBQUMmil0lgalLSIClgBpO0g+s26nUWddXyoEDIsACq5SsTMMDIECwUdJPw0Mzsu0qHYkw72bBmozIQAh+QQJBwAAACwAAAAAGAAYAAAFsCAgjiTAMGVaDgR5HKQwqKNxIKPjjFCk0KNXC6ATKSI7oAhxWIhezwhENTCQEoeGCdWIPEgzESGxEIgGBWstEW4QCGGAIJEoxGmGt5ZkgCRQQHkGd2CESoeIIwoMBQUMP4cNeQQGDYuNj4iSb5WJnmeGng0CDGaBlIQEJziHk3sABidDAHBgagButSKvAAoyuHuUYHgCkAZqebw0AgLBQyyzNKO3byNuoSS8x8OfwIchACH5BAkHAAAALAAAAAAYABgAAAW4ICCOJIAgZVoOBJkkpDKoo5EI43GMjNPSokXCINKJCI4HcCRIQEQvqIOhGhBHhUTDhGo4diOZyFAoKEQDxra2mAEgjghOpCgz3LTBIxJ5kgwMBShACREHZ1V4Kg1rS44pBAgMDAg/Sw0GBAQGDZGTlY+YmpyPpSQDiqYiDQoCliqZBqkGAgKIS5kEjQ21VwCyp76dBHiNvz+MR74AqSOdVwbQuo+abppo10ssjdkAnc0rf8vgl8YqIQAh+QQJBwAAACwAAAAAGAAYAAAFrCAgjiQgCGVaDgZZFCQxqKNRKGOSjMjR0qLXTyciHA7AkaLACMIAiwOC1iAxCrMToHHYjWQiA4NBEA0Q1RpWxHg4cMXxNDk4OBxNUkPAQAEXDgllKgMzQA1pSYopBgonCj9JEA8REQ8QjY+RQJOVl4ugoYssBJuMpYYjDQSliwasiQOwNakALKqsqbWvIohFm7V6rQAGP6+JQLlFg7KDQLKJrLjBKbvAor3IKiEAIfkECQcAAAAsAAAAABgAGAAABbUgII4koChlmhokw5DEoI4NQ4xFMQoJO4uuhignMiQWvxGBIQC+AJBEUyUcIRiyE6CR0CllW4HABxBURTUw4nC4FcWo5CDBRpQaCoF7VjgsyCUDYDMNZ0mHdwYEBAaGMwwHDg4HDA2KjI4qkJKUiJ6faJkiA4qAKQkRB3E0i6YpAw8RERAjA4tnBoMApCMQDhFTuySKoSKMJAq6rD4GzASiJYtgi6PUcs9Kew0xh7rNJMqIhYchACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJEAQZZo2JIKQxqCOjWCMDDMqxT2LAgELkBMZCoXfyCBQiFwiRsGpku0EshNgUNAtrYPT0GQVNRBWwSKBMp98P24iISgNDAS4ipGA6JUpA2WAhDR4eWM/CAkHBwkIDYcGiTOLjY+FmZkNlCN3eUoLDmwlDW+AAwcODl5bYl8wCVYMDw5UWzBtnAANEQ8kBIM0oAAGPgcREIQnVloAChEOqARjzgAQEbczg8YkWJq8nSUhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJGAYZZoOpKKQqDoORDMKwkgwtiwSBBYAJ2owGL5RgxBziQQMgkwoMkhNqAEDARPSaiMDFdDIiRSFQowMXE8Z6RdpYHWnEAWGPVkajPmARVZMPUkCBQkJBQINgwaFPoeJi4GVlQ2Qc3VJBQcLV0ptfAMJBwdcIl+FYjALQgimoGNWIhAQZA4HXSpLMQ8PIgkOSHxAQhERPw7ASTSFyCMMDqBTJL8tf3y2fCEAIfkECQcAAAAsAAAAABgAGAAABa8gII4k0DRlmg6kYZCoOg5EDBDEaAi2jLO3nEkgkMEIL4BLpBAkVy3hCTAQKGAznM0AFNFGBAbj2cA9jQixcGZAGgECBu/9HnTp+FGjjezJFAwFBQwKe2Z+KoCChHmNjVMqA21nKQwJEJRlbnUFCQlFXlpeCWcGBUACCwlrdw8RKGImBwktdyMQEQciB7oACwcIeA4RVwAODiIGvHQKERAjxyMIB5QlVSTLYLZ0sW8hACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWPM5wNiV0UDUIBNkdoepTfMkA7thIECiyRtUAGq8fm2O4jIBgMBA1eAZ6Knx+gHaJR4QwdCMKBxEJRggFDGgQEREPjjAMBQUKIwIRDhBDC2QNDDEKoEkDoiMHDigICGkJBS2dDA6TAAnAEAkCdQ8ORQcHTAkLcQQODLPMIgIJaCWxJMIkPIoAt3EhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWHM5wNiV0UN3xdLiqr+mENcWpM9TIbrsBkEck8oC0DQqBQGGIz+t3eXtob0ZTPgNrIwQJDgtGAgwCWSIMDg4HiiUIDAxFAAoODwxDBWINCEGdSTQkCQcoegADBaQ6MggHjwAFBZUFCm0HB0kJCUy9bAYHCCPGIwqmRq0jySMGmj6yRiEAIfkECQcAAAAsAAAAABgAGAAABbIgII4k0DRlmg6kYZCsOg4EKhLE2BCxDOAxnIiW84l2L4BLZKipBopW8XRLDkeCiAMyMvQAA+uON4JEIo+vqukkKQ6RhLHplVGN+LyKcXA4Dgx5DWwGDXx+gIKENnqNdzIDaiMECwcFRgQCCowiCAcHCZIlCgICVgSfCEMMnA0CXaU2YSQFoQAKUQMMqjoyAglcAAyBAAIMRUYLCUkFlybDeAYJryLNk6xGNCTQXY0juHghACH5BAkHAAAALAAAAAAYABgAAAWzICCOJNA0ZVoOAmkY5KCSSgSNBDE2hDyLjohClBMNij8RJHIQvZwEVOpIekRQJyJs5AMoHA+GMbE1lnm9EcPhOHRnhpwUl3AsknHDm5RN+v8qCAkHBwkIfw1xBAYNgoSGiIqMgJQifZUjBhAJYj95ewIJCQV7KYpzBAkLLQADCHOtOpY5PgNlAAykAEUsQ1wzCgWdCIdeArczBQVbDJ0NAqyeBb64nQAGArBTt8R8mLuyPyEAOwAAAAAAAAAAAA==\") 50% no-repeat}.pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}.pdfPresentationMode .pdfViewer .page,.pdfPresentationMode .pdfViewer .spread{display:block}.pdfPresentationMode .pdfViewer .page,.pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}.pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100%!important}.pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100%;border:0}.pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100%;border:0}:root{--sidebar-width:200px;--sidebar-transition-duration:200ms;--sidebar-transition-timing-function:ease}.html *{padding:0;margin:0}.html{font-size:10px}.body,.html{height:100%;width:100%}.body{background-color:#404040;background-image:url(\"data:image/png;base64,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\")}.body,.pdf-viewer button,.pdf-viewer input,.pdf-viewer select{font:message-box;outline:none}.hidden,[hidden]{display:none!important}.pdfViewer.enablePermissions .textLayer>span{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;cursor:not-allowed}#viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0!important;overflow:hidden!important}#viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:#000}#viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid transparent;background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}#viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0;border-top:2px solid transparent;background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-ms-user-select:none;user-select:none}#viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid transparent;background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}.pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}.pdfPresentationMode:fullscreen a:not(.internalLink){display:none}.pdfPresentationMode:-webkit-full-screen .textLayer>span{cursor:none}.pdfPresentationMode:-ms-fullscreen .textLayer>span{cursor:none}.pdfPresentationMode:fullscreen .textLayer>span{cursor:none}.pdfPresentationMode.pdfPresentationModeControls .textLayer>span,.pdfPresentationMode.pdfPresentationModeControls>*{cursor:default}#outerContainer{width:100%;height:100%;position:relative}#sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;width:var(--sidebar-width);visibility:hidden;z-index:2;border-top:1px solid #333;transition-duration:.2s;transition-duration:var(--sidebar-transition-duration);transition-timing-function:ease;transition-timing-function:var(--sidebar-transition-timing-function)}html[dir=ltr] #sidebarContainer{transition-property:left;left:-200px;left:calc(0px - 200px);left:calc(0px - var(--sidebar-width))}html[dir=rtl] #sidebarContainer{transition-property:right;right:-200px;right:calc(0px - 200px);right:calc(0px - var(--sidebar-width))}.loadingInProgress #sidebarContainer{top:36px}#outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#outerContainer.sidebarMoving #sidebarContainer,#outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] #outerContainer.sidebarOpen #sidebarContainer{right:0}#mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:320px}#sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:rgba(0,0,0,.1)}html[dir=ltr] #sidebarContent{left:0;box-shadow:inset -1px 0 0 rgba(0,0,0,.25)}html[dir=rtl] #sidebarContent{right:0;box-shadow:inset 1px 0 0 rgba(0,0,0,.25)}#viewerContainer{overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;top:32px;right:0;bottom:0;left:0;outline:none}#viewerContainer:not(.pdfPresentationMode){transition-duration:.2s;transition-duration:var(--sidebar-transition-duration);transition-timing-function:ease;transition-timing-function:var(--sidebar-transition-timing-function)}html[dir=ltr] #viewerContainer{box-shadow:inset 1px 0 0 hsla(0,0%,100%,.05)}html[dir=rtl] #viewerContainer{box-shadow:inset -1px 0 0 hsla(0,0%,100%,.05)}#outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px;left:var(--sidebar-width)}html[dir=rtl] #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px;right:var(--sidebar-width)}.toolbar{position:relative;left:0;right:0;z-index:7;cursor:default}#toolbarContainer{width:100%}#toolbarSidebar{width:100%;height:32px;background-color:#424242;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAArlBMVEUAAAAsLCwYGBgyMjIuLi4UFBQlJSUcHBw0NDQ/Pz8nJycaGhowMDAhISEfHx8pKSk2NjYjIyM5OTkNDQ07OzsWFhY9PT1BQUFGRkYRERFKSkpISEgPDw8LCwsHBwdMTEwJCQlEREQEBAROTk5XV1dRUVFeXl4CAgJVVVVcXFxTU1NZWVlgYGBiYmJpaWltbW1kZGRxcXFmZmZvb292dnZ4eHhra2uFhYV0dHR6enon69kAAAAAOnRSTlMPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8Pfl6gHwAACDhJREFUeAGFlwWW9EgSgyOZ0cxVhqKGf5bo/hfbRwPNJ/CzQvqkBKiye2kHPr5ArjdxfiLSE05rAUDMeEvtUk81SswxNnR3EMdDLfr0N8SU8mrbK5h4vHWhx63U+tiNbhmXIle5HJ9NGkOVRZXRdDSMDmM2C4gBuGTFcMBq1TAhSAAceQdsxuaxzgz2810+FqsDVbcLShlpWED95h7jCk5zNwcqNnKhDUpJaQ/nkhObBzztEArQpn9urrFoZEF6e3KtePtDvb9UHnUtvURv4Qpig/KpFBUvH6w5K935tTzBeFueS8maLgGhVCfgBZlPzYhRvXpG0z+jrvARBgPSEHiv2/vPfKLbG90hwIwkQOHhFU4QzKChg2OOihQn6Hw4mVkxpNhz17jtqsU91drmwFhTVp2XGUinYRZ1K8aSW1AOtYnXea9sHKoucQ6lZhEemKo+tUCH++ImfR5J3ZSSW6ygQ+4kgVzjF3JLjFBbAzRVGwvRK1bHU7iwPpvSyAt0cAOTBjIt/ImezuswX2hdsH8afgFV8OXxJOpBKKpKz1Ed46V0hdOu6eRhpACRBJS0x+WchsbCtW38GRk0nLd8nv814gBc96bijYDg6isY/Pe9SgdtgdWsBzG4QOH5KnzbYVZX50ugvb4JW0c6QRIcZGSVvdviCktZVgvCDYHruaTFiKCccvtc8A3g37yoT6pmvuQ+ljfWgCsqMVvhkMd79voeCQF+npdeYicni1ZxnVE8nQsmKwzreLMWsdyCbQDNhhW/YnQoIk1nLxaFJtuSi3W7Hk5dkwo9R/SkGb8GHwwqa1hbARp12LR5jjMikClnVWtG6R56n3CoDCJl7bg5NorS6ExibR9YKK4lqagAe2sULmWqbyNWz5gQep4mESKyJtW+gPJOPWmh40VDRAOkwgjPjvSb3MKsowUp03Zw2g8JDWdVdHfHJqOvK5LNVfC5k+k1oPoYWTKqnKWCPb7yBwwSjy/enkqA8V+JRKzgDCPCoVpy6nC40onjvAywr37Znyu+06ecjBi9tKqmbbD1qw60+U8BjxMXWQaEh7BZSzwu9KTgqZSLOD33rsBP07GjJaSycIBuXd9cJEwPkoKTStkdum6lJQbfHkAjsH5Ik+upX1k9vgKY+PlxM4YpUBRdBnKzICpUvdRh/UdPJvGrMr+u3YNWmSC6lCWi/T6p+gm1YLtL0o/EDiQlmxzuqxrDHBN9PM6Cx01RD5aPjJxx0dhurRsC/jPM2TnzZkpDw6kEPkzMyWXoKnG/iKwA3RGTfWnU4BBdBT15vMrpJHNFdUEqsakKwqK9qE8+nBzQ3ozkPh3S24kjQrUpDk+I4gI8LliX8CnnzpJ/F4jvNSx5KRE+jRpBQ7zqHJCBTmoYl27EqWBhB9dCWdAWTuWJTRfX/tZkhF3rX7K3AQg2yI884tK7fq8aDsmyRteqW60xFsy8Y2CADV8XfMWwlJ+eRhc6lonYrYkwohFOOsfG0jSIK7JqaKSquQaO/cb5GGct0nXscjbNUUt87wW9FeGVTqnnWnw09/twCCYAIN1paYE9Y/EuHPBe9YYpfPlHO+L1liMweK/6h6upn7g9Fq3oFSorXFcdjQX88tHCGjRx6cgjfHQ/J8EteU9TCCqLj+5/mx74FHR/AWWY6UK2Tc0Cikdd3yYYjf0LKOH32FLjdo7nDvdgcGhft57SWcj699h+FXv4yiC/GwwsljDz/b/0dKJdYJUrh2RO8XeDwd+0C5lXX1r+TiJCKqjCZRdp/+igLdidsZnBUyYMgcegiWjItaJTKAuXaylrfd6sB8rYiTFa05XAkGlRclBjn9tUdXDOEBBtgoGPCX9LiBDVidhsY6Ch4bK37i0h4JO+fNO3UxwRYwZgRggxGFrM3/Qt/BUeVWFskPBYjb8aVvq6Pu1/hcdn8IHP6uqvdXcsPUSiibgILCnyrZnXv9YdvKGHPM7rExml+e2A4RduOgJv6PEJfeAx/rZ4TU4RQkMIxAsqaBzZ8uvv2uuSbF/4C9Z5WV4eMsFPC2Q1L37VUPsWhs8UhSS+3yj2/v1GAUecFTTX5ia0TLArpplDB4epKWOzQxVScT5f0RB4a1pc9s6eBXBHIUuxN+W7dH+kg1Tk3gu7DJtIMXykA3y2i1SCuOpuIr68fraL/rqrIBt7lOZ/i+Y15RpWFM2arbenWUNEu9Rdo+PNmB0BmPbsRn3cwoCHGEYbMmDI3Ef0t0gq67euAgP87V8XNjtGDjd2BZ6as6yrivoyTdirHMQNQcVlFfR/8RaqSLljtuS9MPJa3+6xwUmiHx4U39pUYicxoLF8tnRs5Pmc6NYxo0gVhWSlPJYe4D0v36+NP0bzGU37J2sDNpjUzazC7TQE2CpMF1mbl86Wrs4gMeAnUfSxrkqQipQHjhcowBDridFPxMPnHOqKFqgGG9XnHPqTY2A3mdIMvAVRkkkju26pbaTqXh3VXA13uPGeHEt5xgkYIUNVDEDmamy2grkxAXoYaOjwdCt9Al01d/S2Db95Ti0A5ALfF5c6YcH4C7ShKJq84s28tzZ8vw7I4/t1kCws/JDuDFcAd+JzlhEINonXR3vYaDFDXLBeNTMG3gePesL+HiDyJ9X8+/lJdQl+wMHjBxwkwAgGsPPZtgU6Hy29ktBe8MUosBPfSr8oqk+ccaeze+HSCHhIc2v/8Y95tGy0f4cEfb34yepmOCicJM6vQ3s7Zcgx3FQDCQoPBQAtXdtGEzeilARoSNkCKlYEj1QnlEcj2rrTXuUamDbuPFcWTYvG47dTXiOAP1ryq5a9PAPsTsAXLft/Jk0NzNpMD2QAAAAASUVORK5CYII=\"),linear-gradient(rgba(77,77,77,.99),rgba(64,64,64,.95))}html[dir=ltr] #toolbarSidebar{box-shadow:inset -1px 0 0 rgba(0,0,0,.25),inset 0 -1px 0 hsla(0,0%,100%,.05),0 1px 0 rgba(0,0,0,.15),0 0 1px rgba(0,0,0,.1)}html[dir=rtl] #toolbarSidebar{box-shadow:inset 1px 0 0 rgba(0,0,0,.25),inset 0 1px 0 hsla(0,0%,100%,.05),0 1px 0 rgba(0,0,0,.15),0 0 1px rgba(0,0,0,.1)}#sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:4;cursor:ew-resize}html[dir=ltr] #sidebarResizer{right:-6px}html[dir=rtl] #sidebarResizer{left:-6px}#toolbarContainer,.findbar,.secondaryToolbar{position:relative;min-height:32px;background-color:#474747;background-image:url(\"data:image/png;base64,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\"),linear-gradient(rgba(82,82,82,.99),rgba(69,69,69,.95))}.findbar,.secondaryToolbar,html[dir=ltr] #toolbarContainer,html[dir=rtl] #toolbarContainer{box-shadow:inset 0 1px 1px rgba(0,0,0,.15),inset 0 -1px 0 hsla(0,0%,100%,.05),0 1px 0 rgba(0,0,0,.15),0 1px 1px rgba(0,0,0,.1)}#toolbarViewer{min-height:32px}#loadingBar{position:relative;width:100%;height:4px;background-color:#333;border-bottom:1px solid #333}#loadingBar .progress{position:absolute;top:0;left:0;width:0;height:100%;background-color:#ddd;overflow:hidden;transition:width .2s}@-webkit-keyframes progressIndeterminate{0%{left:-142px}to{left:0}}@keyframes progressIndeterminate{0%{left:-142px}to{left:0}}#loadingBar .progress.indeterminate{background-color:#999;transition:none}#loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg,#bbb,#999 5px,#999 45px,#ddd 55px,#ddd 95px,#bbb 100px);-webkit-animation:progressIndeterminate .95s linear infinite;animation:progressIndeterminate .95s linear infinite}.findbar,.secondaryToolbar{top:32px;position:absolute;z-index:7;height:auto;min-width:16px;padding:0 6px;margin:4px 2px;color:#d9d9d9;font-size:12px;line-height:14px;text-align:left;cursor:default}.findbar{min-width:300px}.findbar>div{height:32px}.findbar.wrapContainers>div{clear:both}.findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] .findbar{left:68px}html[dir=rtl] .findbar{right:68px}.findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#findInput{width:200px}#findInput::-moz-placeholder{font-style:italic}#findInput:-ms-input-placeholder{font-style:italic}#findInput::placeholder{font-style:italic}#findInput[data-status=pending]{background-image:url(\"data:image/png;base64,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\");background-repeat:no-repeat;background-position:100%}html[dir=rtl] #findInput[data-status=pending]{background-position:0}.secondaryToolbar{padding:6px;height:auto;z-index:8}html[dir=ltr] .secondaryToolbar{right:4px}html[dir=rtl] .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer{max-width:200px;max-height:400px;overflow-y:auto;-webkit-overflow-scrolling:touch;margin-bottom:-4px}#secondaryToolbarButtonContainer.hiddenScrollModeButtons>.scrollModeButtons,#secondaryToolbarButtonContainer.hiddenSpreadModeButtons>.spreadModeButtons{display:none!important}.doorHanger,.doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px;box-shadow:0 1px 4px rgba(0,0,0,.3)}.doorHanger:after,.doorHanger:before,.doorHangerRight:after,.doorHangerRight:before{bottom:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}.doorHanger:after,.doorHangerRight:after{border-bottom-color:rgba(82,82,82,.99);border-width:8px}.doorHanger:before,.doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] .doorHanger:after,html[dir=rtl] .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] .doorHanger:before,html[dir=rtl] .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=ltr] .doorHangerRight:after,html[dir=rtl] .doorHanger:after{right:13px;margin-right:-8px}html[dir=ltr] .doorHangerRight:before,html[dir=rtl] .doorHanger:before{right:13px;margin-right:-9px}#findResultsCount{background-color:#d9d9d9;color:#525252;text-align:center;padding:3px 4px}#findMsg{font-style:italic;color:#a6b7d0}#findMsg:empty{display:none}#findInput.notFound{background-color:#f66}#toolbarViewerMiddle{position:absolute;left:50%;transform:translateX(-50%)}html[dir=ltr] #toolbarViewerLeft,html[dir=rtl] #toolbarViewerRight{float:left}html[dir=ltr] #toolbarViewerRight,html[dir=rtl] #toolbarViewerLeft{float:right}html[dir=ltr] #toolbarViewerLeft>*,html[dir=ltr] #toolbarViewerMiddle>*,html[dir=ltr] #toolbarViewerRight>*,html[dir=ltr] .findbar *{position:relative;float:left}html[dir=rtl] #toolbarViewerLeft>*,html[dir=rtl] #toolbarViewerMiddle>*,html[dir=rtl] #toolbarViewerRight>*,html[dir=rtl] .findbar *{position:relative;float:right}.overlayButton,.secondaryToolbarButton,.toolbarButton{border:0;background:none;width:32px;height:25px}.toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}.overlayButton[disabled],.secondaryToolbarButton[disabled],.toolbarButton[disabled]{opacity:.5}.toolbarButton.textButton{background-color:rgba(0,0,0,.12);background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,0));background-clip:padding-box;border-color:rgba(0,0,0,.32) rgba(0,0,0,.38) rgba(0,0,0,.42);border-style:solid;border-width:1px;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.05),inset 0 0 1px hsla(0,0%,100%,.15),0 1px 0 hsla(0,0%,100%,.05)}.dropdownToolbarButton:hover,.overlayButton:focus,.overlayButton:hover,.toolbarButton.textButton:focus,.toolbarButton.textButton:hover{background-color:rgba(0,0,0,.2);box-shadow:inset 0 1px 0 hsla(0,0%,100%,.05),inset 0 0 1px hsla(0,0%,100%,.15),0 0 1px rgba(0,0,0,.05);z-index:3}.dropdownToolbarButton:hover{background-color:rgba(0,0,0,.26)}.dropdownToolbarButton,.overlayButton,.secondaryToolbarButton,.toolbarButton{min-width:16px;padding:2px 6px 0;border:1px solid transparent;border-radius:2px;color:hsla(0,0%,100%,.8);font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}html[dir=ltr] .dropdownToolbarButton,html[dir=ltr] .overlayButton,html[dir=ltr] .toolbarButton{margin:3px 2px 4px 0}html[dir=rtl] .dropdownToolbarButton,html[dir=rtl] .overlayButton,html[dir=rtl] .toolbarButton{margin:3px 0 4px 2px}.dropdownToolbarButton,.overlayButton,.secondaryToolbarButton:focus,.secondaryToolbarButton:hover,.toolbarButton:focus,.toolbarButton:hover{background-color:rgba(0,0,0,.12);background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,0));background-clip:padding-box;border-color:rgba(0,0,0,.32) rgba(0,0,0,.38) rgba(0,0,0,.42);border-style:solid;border-width:1px;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.05),inset 0 0 1px hsla(0,0%,100%,.15),0 1px 0 hsla(0,0%,100%,.05)}.dropdownToolbarButton:hover:active,.overlayButton:hover:active,.secondaryToolbarButton:hover:active,.toolbarButton:hover:active{background-color:rgba(0,0,0,.2);background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,0));border-color:rgba(0,0,0,.35) rgba(0,0,0,.4) rgba(0,0,0,.45);box-shadow:inset 0 1px 1px rgba(0,0,0,.1),inset 0 0 1px rgba(0,0,0,.2),0 1px 0 hsla(0,0%,100%,.05)}.secondaryToolbarButton.toggled,.toolbarButton.toggled{background-color:rgba(0,0,0,.3);background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,0));border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:inset 0 1px 1px rgba(0,0,0,.1),inset 0 0 1px rgba(0,0,0,.2),0 1px 0 hsla(0,0%,100%,.05)}.secondaryToolbarButton.toggled:hover:active,.toolbarButton.toggled:hover:active{background-color:rgba(0,0,0,.4);border-color:rgba(0,0,0,.4) rgba(0,0,0,.5) rgba(0,0,0,.55);box-shadow:inset 0 1px 1px rgba(0,0,0,.2),inset 0 0 1px rgba(0,0,0,.3),0 1px 0 hsla(0,0%,100%,.05)}.dropdownToolbarButton{width:140px;padding:0;overflow:hidden}.dropdownToolbarButton:after{position:absolute;display:inline-block;top:4px;content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAQCAYAAADagWXwAAAAMklEQVR4AWMYSPD//39+IF4AotElWIB4LRA/g9IsyJJLwBIIvIR8NxAylrCDML0ygAAAMdZbs0uKR4sAAAAASUVORK5CYII=\")}html[dir=ltr] .dropdownToolbarButton:after{right:8px}html[dir=rtl] .dropdownToolbarButton:after{left:8px}.dropdownToolbarButton>select{width:162px;height:23px;font-size:12px;color:#f2f2f2;margin:0;padding:3px 2px 2px;border:none;background:transparent}.dropdownToolbarButton>select>option{background:#3d3d3d}#customScaleOption{display:none}#pageWidthOption{border-bottom:1px solid hsla(0,0%,100%,.5)}html[dir=ltr] .toolbarButton:first-child,html[dir=rtl] .toolbarButton:last-child{margin-left:4px}html[dir=ltr] .toolbarButton:last-child,html[dir=rtl] .toolbarButton:first-child{margin-right:4px}.toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] #findPrevious{margin-left:3px}html[dir=ltr] #findNext,html[dir=rtl] #findPrevious{margin-right:3px}html[dir=rtl] #findNext{margin-left:3px}.secondaryToolbarButton:before,.toolbarButton:before{position:absolute;display:inline-block;top:4px;left:7px}html[dir=ltr] .secondaryToolbarButton:before{left:4px}html[dir=rtl] .secondaryToolbarButton:before{right:4px}.secondaryToolbarButton.bookmark,.toolbarButton.bookmark{box-sizing:border-box;outline:none;padding-top:4px;text-decoration:none}.secondaryToolbarButton.bookmark{padding-top:5px}.bookmark[href=\"#\"]{opacity:.5;pointer-events:none}.toolbarButton.pdfSidebarNotification:after{position:absolute;display:inline-block;top:1px;content:\"\";background-color:#70db55;height:9px;width:9px;border-radius:50%}html[dir=ltr] .toolbarButton.pdfSidebarNotification:after{left:17px}html[dir=rtl] .toolbarButton.pdfSidebarNotification:after{right:17px}.secondaryToolbarButton{position:relative;margin:0 0 4px;padding:3px 0 1px;height:auto;min-height:25px;width:auto;min-width:100%;white-space:normal}html[dir=ltr] .secondaryToolbarButton{padding-left:24px;text-align:left}html[dir=rtl] .secondaryToolbarButton{padding-right:24px;text-align:right}html[dir=ltr] .secondaryToolbarButton.bookmark{padding-left:27px}html[dir=rtl] .secondaryToolbarButton.bookmark{padding-right:27px}html[dir=ltr] .secondaryToolbarButton>span{padding-right:4px}html[dir=rtl] .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbarButton.scrollVertical:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVQ4y8WSTQpCIRRGz82IBjloCw3aQyt+E1fUIoKUoKCrTXwgcgNtkiDi58fx/gnGKqU8gHu9Sj29iBx679YCqKo65/YtU1Wz5TUBy7KcYoybVvPemwArfJl5ky/GG7BGUKqviMhxKAXgBcS+iMM1AHL9ed0AOgNQ4L2GXs88C8iGxswc7HptGBBCuKSU/jsHV8D1mYnIebSITyB1mp/tgjZt/GkOhtr4AeCVUDEo9o/6AAAAAElFTkSuQmCC\")}.secondaryToolbarButton.scrollHorizontal:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVQ4y+2QsQpCMQxFT2zr6KRfo5P/+b7gfZgIDop0EEnjYKq1+gZnvVBCODe5pPDXQ2YmZibfcjGzHZBEZOnGA9Abi4isnO+BUucjcAQWjfkCnKrBa8uvwLk2EVB/VeoJ0tRPHMCiN1MGAOt4659coJ5szVAfYPWE1Ceo6jyEUBe8naCqKYRw/4NhGLallDZhPY7jLOf83PjKNz3/dd0AKIVY6yZsfmAAAAAASUVORK5CYII=\")}.secondaryToolbarButton.scrollWrapped:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVQ4y62SUUoEMQyGv9iignZBb6AP3sET92VO5CEWdoYFF0zjg+2QLdsdhM1Lm35p0uaPAJjZETjwZ1LXJCLPjs+c205EniKAqmoI4dFBU9XSHFUtIYQHf1tVFSAC5Jzf53m+8wEppTVBzvltyM1MGJiZyRaXutkDrYLVPpiIvAw4lb/G6pxck9YmumInYPHFgd3aA6DUQ3MV1F0onb/y6Jyf9vS6li64ONaSniUolyq4/fgFdQ7uL+m8xSPANE2fy7IM5+Aqv9UcfAGh/6OIfGzx1sTvTud+DjxvSqVeBXXwmgotRv8rY+lGXQF+AT5JoDHpim/qAAAAAElFTkSuQmCC\")}.secondaryToolbarButton.spreadNone:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeklEQVQ4y92TMQ6AIBAE9zxjRSz8kQ/maxaGxmI5GwpykQRiY6QclmGPBOB/y8xkZE8awQPAVCMAJiKbz86Nyy4Ap2PrU7AlIIDsmnJEkMsBKfXhhN0NrHonjgpY1bc3I+DNCJ71CUhSVRfPugUxxj2lpDULIeRv/p0bxlgxLtRRJCAAAAAASUVORK5CYII=\")}.secondaryToolbarButton.spreadOdd:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABH0lEQVQ4y9XRvWpUURQF4O/MXARhGgUhkN7KxkawEPEZREgXEmwkeQNLSysfIFXAQpm3EAtrewu1ScgPMkQmuTcrzZnhEEimFBcczs/aa++19+H/R5JyG7eKL/VwjNHiHQUppdy7gVf5+129zNHjE47wGnebYnMc42NN8AprrZXDJI+TrCdZS/Ijya+GP0nyIMnTJM+T3KmulrYu8Ba7tUJw2Tg4xUt8wGYp5bw6XiaY42HdYairxQ5+llK2k7zDGXTXBIvqQx3kApf4Ukp5k2QPT647GOEzvuEv9nHQJJhV8TN8xXv8aR2kCtaxgd9NO3CWZKuJHy1mVKDv++/j8bhvGx6Goeu67tEqvoPpdPpiNpuN24DJZLL8hVX8v8UVGX2ZknnnEZIAAAAASUVORK5CYII=\")}.secondaryToolbarButton.spreadEven:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIklEQVQ4y9WSO0pEQRBFT/keYjDJGPhZgGBgYCYTKLgFPwsQIzP34AqMjEyNHAVTIw0EQz+B+EdMBBkQBkGYmWPSTxpBJxQr6bp1mqpbdMP/DzV+Y/14pKQFDFR1IAAjov4DJ/HhMokPoAXsJL0EjGXDPoAnYB8ogGVgNLfSUkfUhjqnDqapFX9O56I6ow5VvHLwBiwAq8B5RByr3cxBT31K9vci4lTt5Q4e1Au1mfSG+viNX6kTSW/mHPVO3Ur5dmp2m/F79Ua9VndT7SxfoR0Ra+oscAIcAevZCi8R0VCXgNdUGyR7mnd1BZhMtQGglzWoqwfAODCtHlYgADqdzmVRFJ38k3S73bIsy6l+vARoNpvz7Xa7yC/UarUvB/3438YnK2jWph8eMkkAAAAASUVORK5CYII=\")}.secondaryToolbarButton.documentProperties:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAABWklEQVQYGU3BwUrCAAAG4H8Mdgn00K2Ll0p2EHKeuvYMHrp26EEqcOCI6u5lBUKaBUUkEYKBMJg6obAOQUFibnWwghzW9qc2R98HBBinRoM99mhQYxz/UaLq2+y5N93z7rl7w55vU6WEP5RYZPf1amMdy0gggeWt9dcrdnlECWNehs93ejSFCKai0dSdzmcvA4BxPjnlWRkCRnjKM4wJs7JT5iMX4Wb5sLcKARP9i/4F/gh7q3xwsxhUvwxEMJWEgqnIwBhU4d2+HCLEY54gZJe8W/iWnUeIbbYReit81/F+6VYRokULIff6vYz2LptUEGCddQSosHm/A3XFN4Z5iphwCk4RExSHed9QV4CZ5jZNblHEWBIKRihyk2ZzGzMAYnJHp8kDLiHAJPdpdvSYjAlhTmlk/RpbrDDHHCts+bWGNqdAQEDA/Fra0j5L/vVP5ePI0tbSWICAkV+DHsfDVCx2KwAAAABJRU5ErkJggg==\")}.verticalToolbarSeparator{display:block;padding:8px 0;margin:8px 4px;width:1px;background-color:rgba(0,0,0,.5);box-shadow:0 0 0 1px hsla(0,0%,100%,.08)}html[dir=ltr] .verticalToolbarSeparator{margin-left:2px}html[dir=rtl] .verticalToolbarSeparator{margin-right:2px}.toolbarField{padding:3px 6px;margin:4px 0;border-radius:2px;background-color:hsla(0,0%,100%,.09);background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,0));background-clip:padding-box;border-color:rgba(0,0,0,.32) rgba(0,0,0,.38) rgba(0,0,0,.42);border-style:solid;border-width:1px;box-shadow:inset 0 1px 0 rgba(0,0,0,.05),0 1px 0 hsla(0,0%,100%,.05);color:#f2f2f2;font-size:12px;line-height:14px;outline-style:none}.toolbarField[type=checkbox]{display:inline-block;margin:8px 0}.toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}.toolbarField.pageNumber.visiblePageIsLoading{background-image:url(\"data:image/png;base64,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\");background-repeat:no-repeat;background-position:1px}.toolbarField.pageNumber::-webkit-inner-spin-button,.toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.toolbarField:hover{background-color:hsla(0,0%,100%,.11);border-color:rgba(0,0,0,.4) rgba(0,0,0,.43) rgba(0,0,0,.45)}.toolbarField:focus{background-color:hsla(0,0%,100%,.15);border-color:rgba(77,184,255,.8) rgba(77,184,255,.85) rgba(77,184,255,.9)}.toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid transparent;border-radius:2px;color:#d9d9d9;font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}#thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}#thumbnailView>a:active,#thumbnailView>a:focus{outline:0}.thumbnail{margin:0 10px 5px}html[dir=ltr] .thumbnail{float:left}html[dir=rtl] .thumbnail{float:right}#thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}#thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}.thumbnail:not([data-loaded]){border:1px dashed hsla(0,0%,100%,.5);margin:-1px 9px 4px}.thumbnailImage{border:1px solid transparent;box-shadow:0 0 0 1px rgba(0,0,0,.5),0 2px 8px rgba(0,0,0,.3);opacity:.8;z-index:1;background-color:#fff;background-clip:content-box}.thumbnailSelectionRing{border-radius:2px;padding:7px}.thumbnail:hover>.thumbnailSelectionRing>.thumbnailImage,a:focus>.thumbnail>.thumbnailSelectionRing>.thumbnailImage{opacity:.9}.thumbnail:hover>.thumbnailSelectionRing,a:focus>.thumbnail>.thumbnailSelectionRing{background-color:hsla(0,0%,100%,.15);background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,0));background-clip:padding-box;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.05),inset 0 0 1px hsla(0,0%,100%,.2),0 0 1px rgba(0,0,0,.2);color:hsla(0,0%,100%,.9)}.thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{box-shadow:0 0 0 1px rgba(0,0,0,.5);opacity:1}.thumbnail.selected>.thumbnailSelectionRing{background-color:hsla(0,0%,100%,.3);background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,0));background-clip:padding-box;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.05),inset 0 0 1px hsla(0,0%,100%,.1),0 0 1px rgba(0,0,0,.2);color:#fff}#attachmentsView,#layersView,#outlineView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#outlineView{padding:4px 4px 0}#attachmentsView{padding:3px 4px 0}html[dir=ltr] .outlineItem>.outlineItems,html[dir=ltr] .outlineWithDeepNesting>.outlineItem{margin-left:20px}html[dir=rtl] .outlineItem>.outlineItems,html[dir=rtl] .outlineWithDeepNesting>.outlineItem{margin-right:20px}.attachmentsItem>button,.outlineItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:hsla(0,0%,100%,.8);font-size:13px;line-height:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.attachmentsItem>button{border:0;background:none;cursor:pointer;width:100%}html[dir=ltr] .outlineItem>a{padding:2px 0 5px 4px}html[dir=ltr] .attachmentsItem>button{padding:2px 0 3px 7px;text-align:left}html[dir=rtl] .outlineItem>a{padding:2px 4px 5px 0}html[dir=rtl] .attachmentsItem>button{padding:2px 7px 3px 0;text-align:right}.outlineItemToggler{position:relative;height:0;width:0;color:hsla(0,0%,100%,.5)}.outlineItemToggler:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAQAAABKmM6bAAAARElEQVR4AWMgDrzofXEGBbYxvBB7cQhJYPcLAZC6MCQhN4hWphfzoQJ9CPNUX5wACux/IYpsSTZQyB/VXrYXFS8YIWwAuoI/FPk23zUAAAAASUVORK5CYII=\");display:inline-block;position:absolute}.outlineItemToggler.outlineItemsHidden:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAQAAABKmM6bAAAAR0lEQVQI12NgYHgx6YUSAyp4cebFyRc1L0RQhUDw0IukF+yoQiC45YXvCyZUIRAsQhVa/8IRWeP+FzEvWJFtLH8hgGwjmrsAP6JHRnPnejIAAAAASUVORK5CYII=\")}html[dir=rtl] .outlineItemToggler.outlineItemsHidden:before{transform:scaleX(-1)}.outlineItemToggler.outlineItemsHidden~.outlineItems{display:none}html[dir=ltr] .outlineItemToggler{float:left}html[dir=rtl] .outlineItemToggler{float:right}html[dir=ltr] .outlineItemToggler:before{right:4px}html[dir=rtl] .outlineItemToggler:before{left:4px}.attachmentsItem>button:hover,.outlineItem>a:hover,.outlineItemToggler:hover,.outlineItemToggler:hover+a,.outlineItemToggler:hover~.outlineItems{background-color:hsla(0,0%,100%,.02);background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,0));background-clip:padding-box;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.05),inset 0 0 1px hsla(0,0%,100%,.2),0 0 1px rgba(0,0,0,.2);border-radius:2px;color:hsla(0,0%,100%,.9)}.outlineItem.selected{background-color:hsla(0,0%,100%,.08);background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,0));background-clip:padding-box;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.05),inset 0 0 1px hsla(0,0%,100%,.1),0 0 1px rgba(0,0,0,.2);color:#fff}html[dir=ltr] .treeItem>.treeItems,html[dir=ltr] .treeWithDeepNesting>.treeItem{margin-left:20px}html[dir=rtl] .treeItem>.treeItems,html[dir=rtl] .treeWithDeepNesting>.treeItem{margin-right:20px}.treeItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:var(--outline-color);font-size:13px;line-height:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal;cursor:pointer}html[dir=ltr] .treeItem>a{padding:2px 0 5px 4px}html[dir=rtl] .treeItem>a{padding:2px 4px 5px 0}#layersView .treeItem>a>*{cursor:pointer}html[dir=ltr] #layersView .treeItem>a>label{padding-left:4px}html[dir=rtl] #layersView .treesItem>a>label{padding-right:4px}.treeItemToggler{position:relative;height:0;width:0;color:hsla(0,0%,100%,.5)}.treeItemToggler:before{content:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22%3E%3Cpath d%3D%22M10 13l4-7H6z%22%2F%3E%3C%2Fsvg%3E\");display:inline-block;position:absolute;max-width:16px}.treeItemToggler.treeItemsHidden:before{content:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2216%22 height%3D%2216%22%3E%3Cpath d%3D%22M13 9L6 5v8z%22%2F%3E%3C%2Fsvg%3E\");max-width:16px}html[dir=rtl] .treeItemToggler.treeItemsHidden:before{transform:scaleX(-1)}.treeItemToggler.treeItemsHidden~.treeItems{display:none}html[dir=ltr] .treeItemToggler{float:left}html[dir=rtl] .treeItemToggler{float:right}html[dir=ltr] .treeItemToggler:before{right:4px}html[dir=rtl] .treeItemToggler:before{left:4px}.treeItem>a:hover,.treeItemToggler:hover,.treeItemToggler:hover+a,.treeItemToggler:hover~.treeItems{background-color:var(--sidebaritem-bg-color);background-clip:padding-box;border-radius:2px;color:var(--outline-hover-color)}.treeItem.selected{background-color:var(--outline-active-bg-color);background-clip:padding-box;color:var(--outline-active-color)}.noResults{font-size:12px;color:hsla(0,0%,100%,.8);font-style:italic;cursor:default}::-moz-selection{background:rgba(0,0,255,.3)}::selection{background:rgba(0,0,255,.3)}#errorWrapper{background:none repeat scroll 0 0 #f55;color:#fff;left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}.loadingInProgress #errorWrapper{top:37px}#errorMessageLeft{float:left}#errorMessageRight{float:right}#errorMoreInfo{background-color:#fff;color:#000;padding:3px;margin:3px;width:98%}.overlayButton{width:auto;margin:3px 4px 2px!important;padding:2px 6px 3px}#overlayContainer{display:table;position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.2);z-index:9}#overlayContainer>*{overflow:auto;-webkit-overflow-scrolling:touch}#overlayContainer>.container{display:table-cell;vertical-align:middle;text-align:center}#overlayContainer>.container .dialog{display:inline-block;padding:15px;border-spacing:4px;color:#d9d9d9;font-size:12px;line-height:14px;background-color:#474747;background-image:url(\"data:image/png;base64,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\"),linear-gradient(rgba(82,82,82,.99),rgba(69,69,69,.95));border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.3)}.dialog>.row{display:table-row}.dialog>.row>*{display:table-cell}.dialog .toolbarField{margin:5px 0}.dialog .separator{display:block;margin:4px 0;height:1px;width:100%;background-color:rgba(0,0,0,.5);box-shadow:0 0 0 1px hsla(0,0%,100%,.08)}.dialog .buttonRow{text-align:center;vertical-align:middle}.dialog :link{color:#fff}#passwordOverlay>.dialog{text-align:center}#passwordOverlay .toolbarField{width:200px}#documentPropertiesOverlay>.dialog{text-align:left}#documentPropertiesOverlay .row>*{min-width:100px}html[dir=ltr] #documentPropertiesOverlay .row>*{text-align:left}html[dir=rtl] #documentPropertiesOverlay .row>*{text-align:right}#documentPropertiesOverlay .row>span{width:125px;word-wrap:break-word}#documentPropertiesOverlay .row>p{max-width:225px;word-wrap:break-word}#documentPropertiesOverlay .buttonRow{margin-top:10px}.clearBoth{clear:both}.fileInput{background:#fff;color:#000;margin-top:5px;visibility:hidden;top:0}#PDFBug,.fileInput{position:fixed;right:0}#PDFBug{background:none repeat scroll 0 0 #fff;border:1px solid #666;top:32px;bottom:0;font-size:10px;padding:0;width:300px}#PDFBug .controls{background:#eee;border-bottom:1px solid #666;padding:3px}#PDFBug .panels{bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;right:0;top:27px}#PDFBug .panels>div{padding:5px}#PDFBug button.active{font-weight:700}.debuggerShowText{color:#00f}.debuggerHideText:hover,.debuggerShowText{background:none repeat scroll 0 0 #ff0}#PDFBug .stats{font-family:courier;font-size:10px;white-space:pre}#PDFBug .stats .title{font-weight:700}#PDFBug table{font-size:10px}#viewer.textLayer-visible .textLayer{opacity:1}#viewer.textLayer-visible .canvasWrapper{background-color:#80ff80}#viewer.textLayer-visible .canvasWrapper canvas{mix-blend-mode:screen}#viewer.textLayer-visible .textLayer>span{background-color:rgba(255,255,0,.1);color:#000;border:1px solid rgba(255,0,0,.5);box-sizing:border-box}#viewer.textLayer-hover .textLayer>span:hover{background-color:#fff;color:#000}#viewer.textLayer-shadow .textLayer>span{background-color:hsla(0,0%,100%,.6);color:#000}.grab-to-pan-grab{cursor:url(\"data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8=\"),move!important;cursor:-webkit-grab!important;cursor:grab!important}.grab-to-pan-grab :not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit!important}.grab-to-pan-grab:active,.grab-to-pan-grabbing{cursor:url(\"data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8=\"),move!important;cursor:-webkit-grabbing!important;cursor:grabbing!important;position:fixed;background:transparent;display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}#printContainer{display:none}@media screen and (-webkit-min-device-pixel-ratio:1.1),screen and (min-resolution:1.1dppx){.toolbarButton:before{transform:scale(.5);top:-5px}.secondaryToolbarButton:before{transform:scale(.5);top:-4px}html[dir=ltr] .toolbarButton:before,html[dir=rtl] .toolbarButton:before{left:-1px}html[dir=ltr] .secondaryToolbarButton:before{left:-2px}html[dir=rtl] .secondaryToolbarButton:before{left:186px}#findInput[data-status=pending],.toolbarField.pageNumber.visiblePageIsLoading{background-image:url(\"data:image/png;base64,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\");background-size:16px 17px}.dropdownToolbarButton:after{transform:scale(.5);top:-5px;content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgCAQAAACI54EcAAAAX0lEQVR4AWMYieB/PBAyICADEsf2/yMgtMUmqfz/+v9nQHgdyEKT5P9/GCgBhkAWP7Iky/+VQEE4BPJYEJLtUEEEbIdI4oA0kiToIMJewQwEgsFHOOAREDPK0OAwlQQAP2d+rjszeyAAAAAASUVORK5CYII=\")}html[dir=ltr] .dropdownToolbarButton:after{right:4px}html[dir=rtl] .dropdownToolbarButton:after{left:4px}.toolbarButton.zoomIn:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAZ0lEQVR4AWMYBGAUMOKT/P8OyhDCrYblPz4TvhN2AQte2f+UGvCPdANGDXiMJvsFh7gsLgM+4bDmE7Eu+IsuTaoX/lFoAGMBWkLsg4oXkZuZTkMZpiRnptGkjDBgoAsUxgYGeoBRAADcyxzU99YUOAAAAABJRU5ErkJggg==\")}.secondaryToolbarButton.scrollVertical:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABJElEQVRYw+1XwW3DMAy8C/p23/k3GxTdoitkh6yQUbpCtyi6QWP32Wcg/Svm4xgGIRmirSgIEgKGDJkgz6KPPBOZJiJ/MBjJdY7fkyGmqHXIlfBDaQChTyaRVSdmbtBVrqNz7tCDELWe74fLe/9T/AS6rts5555zfJum8XjYrRgNfeATwOsEPcexvkm+lwZwiFBPxzk/B8mXS/SBVCMKNRqRGPevBoAWUHNaMVS9pdYsiPV8WUpDKwBJ7LPmNxBLGKy0XkLD2OiVuSW5Og2z9YD3/jcy/7U+EACh9y17Am3b7h964O71wAeAt4k4YzZ8kdyWpuEGwDGz821qzYLFNvfHRCbKwEsB0O24yAlZAPwn3q7aNEyJEq2MTYBKiVJR4jS7DCdrO4IxIrnNqQAAAABJRU5ErkJggg==\")}.secondaryToolbarButton.scrollHorizontal:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABE0lEQVRYw+1TwW0DIRCcjfj5kTacv/tIMy7BDaWDKyAVRDrFKeGQ30w+nLRZ7wJWpHzCSKcDsTMsMwBMTExM/HcIyY86PgB4F5FXXUDyDcBpUC/iv+g9AXD/pzoBgBuAoyN6rGs9sMGnmhfVBHQDe1eeMIyIPQmCmn1DzfnRRFIF0hDw1mjGET86hOtAROaA/VFNaRGTIstA962I0Ggg1E7GYnY2KCZLvS4dF8SLKg1Y7N0RPuAEjcv0GujlO2I1Bu4AozuAzsnoPDsGT7Hl4B3PRiANATox8IFovIPyqW6wi306AlcAyDmz1haTa1HfV8Bnztk+VwJgWpblrIqzI3AB8LyuK7Zt6+X9W/7ExMTE3+MbtVGT7qYHUMoAAAAASUVORK5CYII=\")}.secondaryToolbarButton.scrollWrapped:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABsUlEQVRYw+1XQU7DQAz0oJzLmXvzAhC/4AnwhvIF+Alf6C+AH7RZjhyr7J01l7RsjO3dpCCEVEtRkpXtzDq2xwsahJnfaYIAuMjf59o3uQ9xP+iKdzZ8Ms2QHEAaPsbKXX4ADgBpJzczWj/bP/R9vx1AsLjvnw9XjHEjPSv2OTDO/cYYt98iEEK47/v+vCZsi8UiyrUQwuoY+5P8mSCr4zURXTnZnWf+K4Ab0QfWRHQpMl0rYeT2OYCtU0IQDgjAUgDYGPpqCQJotT5gNaI0sRF5OiMgzQ92uJJe0qI7B4DV5djxAwuE1oqp0FKnRIpLv6eZolwR4qPIiJ1dYEYOeHZcigCM3aEAgJXqgceQjRFCq3658hdAsCCsCP9WGdYm7tc8EGN8U/hfzgdMRGnQHUmMMYgZwvSV2x8i0HXdwzF83nXd42ke+PfzwBMRXTt6eSY/A7gTdOzZS3kBcCvLsCWiXWXna421XSWAZS0XTBGe0LaLBxPvUFHq76wcbuRop3JBidFKEUoV/ODS8Ydz5JrLhqzNkxYAayjRwgdn5JLAUy0dp8IIBkdHhhvOgDPKgU/8BAgVvVaLzwAAAABJRU5ErkJggg==\")}.secondaryToolbarButton.spreadNone:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYw+1W2w3CMBCLEd9hCUboGuzFPqzBCOSDEZIBYn4KilBzuqbpSYhY6keq09nxPRTnBgYG/h3QBpK8OecmKaTIeQdw6S3gMZNAIP/kBXDW5D2ucCtXyJxCUBcBFP6jtQdaHMACKVtu3+oAF27f7MLWErAizEQAe+yBtT2AytyXpdjVASp7A5ZjaL4HKIwirMbwm+x9zhZNWKt5tugBrijP7g5Ia5lWDnDrUjpoA1NKz0KE+M2xfR0IIVxjjCdNrPc+jcfmwM/gBc7GXpo/qW9+AAAAAElFTkSuQmCC\")}.secondaryToolbarButton.spreadOdd:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACNElEQVRYw+2Wu2sUURTGfyesaCGrrZBGjFgpokFRsLK2EC200MpGFAtBiaiVTUTEv8BarAO2qYJE0kgKQV1NfKCFCDvFhkWczyJnljs3985EUli4By47e893HnOeA2Ma05j+d7LqQdIcMJ3AKMYCS2Z2pgZalz/quJRMpctC+dCB9wFAGUcrPmY2FTnwLoMP70b/zWw/QCcAlAmhSrBMRCQXqTZMzZGJiFmd38BT4KB7ej3iK6O8OvPABU/pNHAOeO56y1C+k/D6A3DHzF5HvDIVyoT8nJndinjLwLKneSYXgcqzew6+JGlf4g3LBgdKYNZr4rCkBUmLkk445hkwbEvBAQfOANszIU45UAKfgAlJO4DLwG5gJ3DSC28IrDWlQMDdTCGppaUFTHr+Q32/gBcelb3uUNlUA8r0b5m4TxVh2D0D4LaZvZFkwP2oo5JtGDuTM5BKQWj8O3DDjXeABz6olHNAf/F2bXPgLXDVzH5I2gM8BA6ldHQyRqzBgDL8KkUrwBUz60s6Ajz2YiyDFra2FDQVYVM0hsBNNz4JPPJOWgsw28Lu6yTG5DXgm99Vvy+Bs/58HriYicC8mX30lvsCnN4QRukJcKopBZ/N7GttGZgNgFVX8LNhEA02sYFrEQy34WJizFq0QEZ8MzsevdmrzNKJ17PWxe1YUxGyxTZsauUajYqhKIrVaNYrMf8FyLE1CuRbT1EUKxtqoNfrzfb7/V2b+YzqdrtFfLdV+TGN6Z/RH9SvJLfI2RKxAAAAAElFTkSuQmCC\")}.secondaryToolbarButton.spreadEven:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfUlEQVRYw+2WPWhUQRSFv7smaCEJqCBRQQQtFCGgYoiVKCgWFoqIP+APpLAWBBs70UCK1BZaCCoIgqCRdEZEJSFiEDRiElQICBLEXZAkSt6xyN1lMnnzNmBh4V4YdmfmnOHOmTNzHzSiEY3438OqfyQ9AnblYBRjgWEzO7wANM/f6bg8TnUtC/lhAuMBQIlEq/OY2eYogbEEPhyr9c1sC0BTAMhySFVilqNISql6mAWJNCVIA8ANYNz7G4ETwFGgVCeBaeA28BiYBJqdfxI4knMsNQk/eOtJGUbSOceMJvijkjoK+F0xvxQdQQZ0O7hd0ktJg5I6HXMPmE1ILOAdMCapWdJlSW8lPZO0zTF3gbmiI5gESpJWAGeBVp/bA7wys1lJ0xEv3MBW4Hk0vgbYC7wHfnsCy1IJrAeeRmO/gCeuyiZgZYECcX/OfdTnY/td9azIhAqMMgNcMrNRSQZcqePwcO6+mV31xFdLOg9ciG5Urgfkv1+BM2Y2IKkJuOYPTRYvEvCVSPAH8Ab4GGNKOTuQA0/5ztuAW8ChCJNSoLqBY5JeS+oD9pnZiCswVZRABnwCusxsStIOd+72aHEVKJAFzYB1wGl//X4CI6kEMjfcRTMrS9oA9ADL/erNeJtLHAHAQ+AA0An0+6P0HXgQYFpz+ZKGJV2vV70k9UoaTvD7Ja0t4LZLGgr58S2YXkIFLfLAKuCmpDvAC+Cb3/k24CBwfFFRCrIbzKmEFhWQ2ryZdUS7G0oUnbg8a55uu/MUUJ0KpwJlsgS3sErWTFipVL5ELleO8wXIsQsi4NdtlUrl8yIPTExMdJfL5dalfEa1tLRU4rG/5TeiEf8s/gDDWIJiYZyY4wAAAABJRU5ErkJggg==\")}.secondaryToolbarButton.documentProperties:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAADbElEQVR4AZWUX2hTZxjGHzMvEjAFd7cbbeiFpI3buitXLxyCF14IC1jEC4dTcRO8GJPeiMwVxCFbaRp6sYn0TnFr6dxwBVtLZ2zTNEebNC1mxjYxmVtnKJaMNX9Kcp69Hwdmer6msPd3OHx5/rznBEKw2bCJfvZylCkuCyk5BegXFTq65GEf/2Cef0n1T1osy6e8qEFxt1zg5JcqLNHNkaWScDZa0Gw+lMALi7X44u1Qz93uu92hnsXba3HRLJYl1bzZgjbzN7F/F7LpwS9OYx+82IW3hF1y2td9Oj3ILJX/QpJt9gXNZpI5RWHq4km0ogm2EaX14snClJWSdHP9Aqf5gFlFdqhlP9xoNO6W/dkhKykN538LapdFyjDzfGjnXjiw1Th27n0+pLLM1i7XUINc9JgZppkuhFrbsa0+zYOcEw4Sr8G21vZCSOWl5SFArPdxiUvm4pVj9qfX4ipYi9dQDxxXjpmLqrMeWAfoNlN8xmdLt/TvXn6snGK0iI3AvXRLOdJ0o/IhU4rr/uuw8+2nJaMYufHJDdj5TlqKih+FAJ/y6VoYTdDnTXTgfbnr07QWVr1CAP/8wiSTmYEM/icDqvf3CCoGn/BJ4lICOhxmTviR0ElcUr11A+YcF7gwf24eOkwqT+7QmT+nPHMOZowJJlJnU9ARxwI6qbPKMWOoTKkfS+5CDjriWEAnd0E5lTBe3WGMsZX+FeiIYwGdlX7lvPoJ6SBnOVueKENHHAvolCeUkw5i/GM+Emb5rh4S3QIa70hDnLFTOOGpTtOgUQwWYUd0C9gpBpVenT7hAbYn+xkVZunTglELTffxsdKT/dgOoOtANcwII9Wf6dwYzH+v9PwPedRDpyRVPtx1oAuQyzVzjdNCtBbkG8Rr0I4PhPdQN5LoY1TlZ67BBWt83tVhhgWDgQ1voeOUhKGyq8M+rw8+KQtwfHS4NMpJIco7bCMa0CZuVOVKo6cOb/z7cX12tHSPD4Uw4/yGb9vLonzNmLiSKd37vBMu2GbH8SOrgwxRMcM5jvErnmGncEZOY6LMWO7q4PEj2AF94NrdEblqTvABFZOM0OAjwZDTpKWaE5GruzvgQoNxoKXTv9Bbvc9fdar3F3o7/WiR1Jbjwh7voYHziZ6XN8sj5rg5Xh55eTPRM3Deewh79Gf/C1dTNwWJacanAAAAAElFTkSuQmCC\")}.outlineItemToggler:before{transform:scale(.5);top:-1px;content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAc0lEQVR4AWOgM3gx4cUZAnACwwupF8fwKQHKSoPMSserKA1iIduLTbiUAGXYYO6yw6nIlrDzJ6D6URbT+UARKfSgyMDmZHRF7AjnI5yMqcwBRZEN4dDvwx1FciDnYzoZu/NT8Uc3x4vNLzZiOBnT+ZhOBgAIx/kNQRV40AAAAABJRU5ErkJggg==\")}.outlineItemToggler.outlineItemsHidden:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAXElEQVR4AWMAgRd9L6QZCIEXZ14cfZH2gp2AIjDc8MIWryIYBFlMUBHMYryK8FiMkMZjMUIKj8UICWwWE1a08YUdxdb1v5BBczimJRQGJsISTICwhNKkArYEDwAAaN/49eXnGYUAAAAASUVORK5CYII=\")}html[dir=rtl] .outlineItemToggler.outlineItemsHidden:before{transform:scale(-.5,.5)}html[dir=ltr] .outlineItemToggler:before{right:0}html[dir=rtl] .outlineItemToggler:before{left:0}}@media print{body{background:transparent none}#errorWrapper,#loadingBox,#secondaryToolbar,#sidebarContainer,.textLayer,.toolbar{display:none}#viewerContainer{overflow:visible}#mainContainer,#viewerContainer,.page,.page canvas{position:static;padding:0;margin:0}.page{float:left;display:none;border:none;box-shadow:none;background-clip:content-box;background-color:#fff}.page[data-loaded]{display:block}.fileInput,body[data-pdfjsprinting] #outerContainer{display:none}body[data-pdfjsprinting] #printContainer{display:block}#printContainer{height:100%}#printContainer>div{position:relative;top:0;left:0;width:1px;height:1px;overflow:visible;page-break-after:always;page-break-inside:avoid}#printContainer canvas,#printContainer img{display:block}}.visibleLargeView,.visibleMediumView,.visibleSmallView{display:none}", "#viewerContainer{overflow:auto;-webkit-overflow-scrolling:touch;position:absolute}.invisible{display:none!important}@media print{body[data-pdfjsprinting]>*{display:none!important}body[data-pdfjsprinting] #printContainer{display:block!important}body[data-pdfjsprinting] #printContainer div img{height:100vh!important}}body[data-pdfjsprinting] #printContainer,body[data-pdfjsprinting] #printContainer *{padding:0;margin:0;font:message-box;outline:none}#printContainer canvas,#printContainer img{display:block!important}#outerContainer{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}@media print{body,html{overflow-y:visible!important}html.cdk-global-scrollblock{width:auto;position:static}}.textLayer .highlight.color0{background-color:rgba(180,0,170,.4)}.textLayer .highlight.color0.selected{background-color:#b400aa}.textLayer .highlight.color1{background-color:rgb(0,100,0,.4)}.textLayer .highlight.color1.selected{background-color:#006400}.textLayer .highlight.color2{background-color:rgb(0,0,255,.4)}.textLayer .highlight.color2.selected{background-color:#00f}.textLayer .highlight.color3{background-color:rgb(255,0,0,.4)}.textLayer .highlight.color3.selected{background-color:red}textLayer .highlight.color4{background-color:rgb(255,94,0,.4)}.textLayer .highlight.color4.selected{background-color:#ff5e00}html[dir=ltr] .overlayButton,html[dir=ltr] .toolbarButton{margin:3px 0 4px}html[dir=ltr] .toolbarButton:last-child,html[dir=rtl] .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] #secondaryToolbarToggle{margin-right:0;margin-left:4px}.overlayButton,.secondaryToolbarButton,.toolbarButton{padding-left:0;padding-right:0}.offscreen{position:fixed!important;left:-9999px!important;display:block!important;width:3000px!important}.offscreen #sidebarContainer{top:1000px!important}.toolbarButton{margin-left:-1px!important;margin-right:-2px!important}#numPages{padding-right:0}.pdf-viewer-template,.pdf-viewer-template *{display:none}"], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PdfOriginalComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf-original-theme',
                        templateUrl: './pdf-original.component.html',
                        styleUrls: ['./viewer-with-images.css', './ngx-extended-pdf-viewer.component.css'],
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], null, null);
    })();

    var NgxExtendedPdfViewerCommonModule = /** @class */ (function () {
        function NgxExtendedPdfViewerCommonModule() {
        }
        return NgxExtendedPdfViewerCommonModule;
    }());
    /** @nocollapse */ NgxExtendedPdfViewerCommonModule.ɵfac = function NgxExtendedPdfViewerCommonModule_Factory(t) { return new (t || NgxExtendedPdfViewerCommonModule)(); };
    /** @nocollapse */ NgxExtendedPdfViewerCommonModule.ɵmod = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineNgModule({ type: NgxExtendedPdfViewerCommonModule });
    /** @nocollapse */ NgxExtendedPdfViewerCommonModule.ɵinj = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjector({ providers: [NgxExtendedPdfViewerService, PDFNotificationService, i1.Location, { provide: i1.LocationStrategy, useClass: i1.PathLocationStrategy }], imports: [[i1.CommonModule, i2.FormsModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxExtendedPdfViewerCommonModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.CommonModule, i2.FormsModule],
                        declarations: [
                            DynamicCssComponent,
                            PdfZoomDropdownComponent,
                            PdfContextMenuComponent,
                            PdfPresentationModeComponent,
                            PdfOpenFileComponent,
                            PdfPrintComponent,
                            PdfDownloadComponent,
                            PdfBookmarkComponent,
                            PdfZoomToolbarComponent,
                            PdfPagingAreaComponent,
                            PdfFindbarComponent,
                            PdfSidebarComponent,
                            PdfHandToolComponent,
                            PdfSelectToolComponent,
                            PdfSecondaryToolbarComponent,
                            PdfDocumentPropertiesOverlayComponent,
                            PdfSearchInputFieldComponent,
                            PdfFindPreviousComponent,
                            PdfFindNextComponent,
                            PdfFindInputAreaComponent,
                            PdfFindbarOptionsTwoContainerComponent,
                            PdfFindbarOptionsOneContainerComponent,
                            PdfFindMatchCaseComponent,
                            PdfFindHighlightAllComponent,
                            PdfFindEntireWordComponent,
                            PdfFindFuzzilyComponent,
                            PdfFindMultipleSearchTextsComponent,
                            PdfFindIgnoreAccentsComponent,
                            PdfFindbarOptionsThreeContainerComponent,
                            PdfFindResultsCountComponent,
                            PdfFindbarMessageContainerComponent,
                            PdfToolbarComponent,
                            PdfFindButtonComponent,
                            PdfToggleSidebarComponent,
                            PdfToggleSecondaryToolbarComponent,
                            PdfLastPageComponent,
                            PdfFirstPageComponent,
                            PdfNextPageComponent,
                            PdfPreviousPageComponent,
                            PdfPageNumberComponent,
                            PdfRotatePageComponent,
                            PdfZoomInComponent,
                            PdfZoomOutComponent,
                            PdfDummyComponentsComponent,
                            PdfSidebarContentComponent,
                            PdfSidebarToolbarComponent,
                            PdfOriginalComponent,
                            PdfDarkThemeComponent,
                            PdfLightThemeComponent,
                            TranslatePipe,
                        ],
                        providers: [NgxExtendedPdfViewerService, PDFNotificationService, i1.Location, { provide: i1.LocationStrategy, useClass: i1.PathLocationStrategy }],
                        exports: [
                            PdfZoomDropdownComponent,
                            PdfContextMenuComponent,
                            PdfPresentationModeComponent,
                            PdfOpenFileComponent,
                            PdfPrintComponent,
                            PdfDownloadComponent,
                            PdfBookmarkComponent,
                            PdfZoomToolbarComponent,
                            PdfPagingAreaComponent,
                            PdfFindbarComponent,
                            PdfSidebarComponent,
                            PdfSidebarContentComponent,
                            PdfSidebarToolbarComponent,
                            PdfSecondaryToolbarComponent,
                            PdfDocumentPropertiesOverlayComponent,
                            PdfSearchInputFieldComponent,
                            PdfFindPreviousComponent,
                            PdfFindNextComponent,
                            PdfFindInputAreaComponent,
                            PdfFindbarOptionsTwoContainerComponent,
                            PdfFindbarOptionsOneContainerComponent,
                            PdfFindMatchCaseComponent,
                            PdfFindHighlightAllComponent,
                            PdfFindEntireWordComponent,
                            PdfFindMultipleSearchTextsComponent,
                            PdfFindIgnoreAccentsComponent,
                            PdfFindbarOptionsThreeContainerComponent,
                            PdfFindResultsCountComponent,
                            PdfFindbarMessageContainerComponent,
                            PdfHandToolComponent,
                            PdfRotatePageComponent,
                            PdfSelectToolComponent,
                            PdfToolbarComponent,
                            PdfFindButtonComponent,
                            PdfToggleSidebarComponent,
                            PdfToggleSecondaryToolbarComponent,
                            PdfLastPageComponent,
                            PdfFirstPageComponent,
                            PdfNextPageComponent,
                            PdfPreviousPageComponent,
                            PdfPageNumberComponent,
                            PdfZoomInComponent,
                            PdfZoomOutComponent,
                            PdfOriginalComponent,
                            PdfDarkThemeComponent,
                            PdfLightThemeComponent,
                            TranslatePipe,
                            DynamicCssComponent,
                            PdfDummyComponentsComponent
                        ],
                    }]
            }], function () { return []; }, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(NgxExtendedPdfViewerCommonModule, { declarations: [DynamicCssComponent,
                PdfZoomDropdownComponent,
                PdfContextMenuComponent,
                PdfPresentationModeComponent,
                PdfOpenFileComponent,
                PdfPrintComponent,
                PdfDownloadComponent,
                PdfBookmarkComponent,
                PdfZoomToolbarComponent,
                PdfPagingAreaComponent,
                PdfFindbarComponent,
                PdfSidebarComponent,
                PdfHandToolComponent,
                PdfSelectToolComponent,
                PdfSecondaryToolbarComponent,
                PdfDocumentPropertiesOverlayComponent,
                PdfSearchInputFieldComponent,
                PdfFindPreviousComponent,
                PdfFindNextComponent,
                PdfFindInputAreaComponent,
                PdfFindbarOptionsTwoContainerComponent,
                PdfFindbarOptionsOneContainerComponent,
                PdfFindMatchCaseComponent,
                PdfFindHighlightAllComponent,
                PdfFindEntireWordComponent,
                PdfFindFuzzilyComponent,
                PdfFindMultipleSearchTextsComponent,
                PdfFindIgnoreAccentsComponent,
                PdfFindbarOptionsThreeContainerComponent,
                PdfFindResultsCountComponent,
                PdfFindbarMessageContainerComponent,
                PdfToolbarComponent,
                PdfFindButtonComponent,
                PdfToggleSidebarComponent,
                PdfToggleSecondaryToolbarComponent,
                PdfLastPageComponent,
                PdfFirstPageComponent,
                PdfNextPageComponent,
                PdfPreviousPageComponent,
                PdfPageNumberComponent,
                PdfRotatePageComponent,
                PdfZoomInComponent,
                PdfZoomOutComponent,
                PdfDummyComponentsComponent,
                PdfSidebarContentComponent,
                PdfSidebarToolbarComponent,
                PdfOriginalComponent,
                PdfDarkThemeComponent,
                PdfLightThemeComponent,
                TranslatePipe], imports: [i1.CommonModule, i2.FormsModule], exports: [PdfZoomDropdownComponent,
                PdfContextMenuComponent,
                PdfPresentationModeComponent,
                PdfOpenFileComponent,
                PdfPrintComponent,
                PdfDownloadComponent,
                PdfBookmarkComponent,
                PdfZoomToolbarComponent,
                PdfPagingAreaComponent,
                PdfFindbarComponent,
                PdfSidebarComponent,
                PdfSidebarContentComponent,
                PdfSidebarToolbarComponent,
                PdfSecondaryToolbarComponent,
                PdfDocumentPropertiesOverlayComponent,
                PdfSearchInputFieldComponent,
                PdfFindPreviousComponent,
                PdfFindNextComponent,
                PdfFindInputAreaComponent,
                PdfFindbarOptionsTwoContainerComponent,
                PdfFindbarOptionsOneContainerComponent,
                PdfFindMatchCaseComponent,
                PdfFindHighlightAllComponent,
                PdfFindEntireWordComponent,
                PdfFindMultipleSearchTextsComponent,
                PdfFindIgnoreAccentsComponent,
                PdfFindbarOptionsThreeContainerComponent,
                PdfFindResultsCountComponent,
                PdfFindbarMessageContainerComponent,
                PdfHandToolComponent,
                PdfRotatePageComponent,
                PdfSelectToolComponent,
                PdfToolbarComponent,
                PdfFindButtonComponent,
                PdfToggleSidebarComponent,
                PdfToggleSecondaryToolbarComponent,
                PdfLastPageComponent,
                PdfFirstPageComponent,
                PdfNextPageComponent,
                PdfPreviousPageComponent,
                PdfPageNumberComponent,
                PdfZoomInComponent,
                PdfZoomOutComponent,
                PdfOriginalComponent,
                PdfDarkThemeComponent,
                PdfLightThemeComponent,
                TranslatePipe,
                DynamicCssComponent,
                PdfDummyComponentsComponent] });
    })();

    if (!Promise['allSettled']) {
        if (!!window['Zone'] && !window['__zone_symbol__Promise.allSettled']) {
            console.error("Please update zone.js to version 0.10.3 or higher. Otherwise, you'll run the slow ECMAScript 5 version even on modern browser that can run the fast ESMAScript 2015 version.");
        }
    }
    function isKeyIgnored(cmd, keycode) {
        var PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
        var ignoreKeys = PDFViewerApplicationOptions.get('ignoreKeys');
        var acceptKeys = PDFViewerApplicationOptions.get('acceptKeys');
        if (keycode === 'WHEEL') {
            if (isKeyInList(ignoreKeys, cmd, 'WHEEL')) {
                return true;
            }
            if (!!acceptKeys && acceptKeys.length > 0) {
                return !isKeyInList(acceptKeys, cmd, 'WHEEL');
            }
            return false;
        }
        if (keycode === 16 || keycode === 17 || keycode === 18 || keycode === 224) {
            // ignore solitary SHIFT, ALT, CMD, and CTRL because they only make sense as two-key-combinations
            return true;
        }
        // cmd is a bit-array:
        // 1 == CTRL
        // 2 == ALT
        // 4 == SHIFT
        // 8 == META
        var ignoreKeyboard = PDFViewerApplicationOptions.get('ignoreKeyboard');
        if (!!ignoreKeyboard) {
            return true;
        }
        if (!!ignoreKeys && ignoreKeys.length > 0) {
            if (isKeyInList(ignoreKeys, cmd, keycode)) {
                return true;
            }
        }
        if (!!acceptKeys && acceptKeys.length > 0) {
            return !isKeyInList(acceptKeys, cmd, keycode);
        }
        return false;
    }
    function isKeyInList(settings, cmd, keycode) {
        if (!settings) {
            return true;
        }
        return settings.some(function (keyDef) { return isKey(keyDef, cmd, keycode); });
    }
    function isKey(keyDef, cmd, keycode) {
        var cmdDef = 0;
        var key = 0;
        keyDef = keyDef.toLowerCase();
        // tslint:disable: no-bitwise
        if (keyDef.includes('ctrl+')) {
            cmdDef |= 1;
            keyDef = keyDef.replace('ctrl+', '');
        }
        if (keyDef.includes('cmd+')) {
            cmdDef |= 8;
            keyDef = keyDef.replace('cmd+', '');
        }
        if (keyDef.includes('alt+')) {
            cmdDef |= 2;
            keyDef = keyDef.replace('alt+', '');
        }
        if (keyDef.includes('shift+')) {
            cmdDef |= 4;
            keyDef = keyDef.replace('shift+', '');
        }
        if (keyDef.includes('meta+')) {
            cmdDef |= 8;
            keyDef = keyDef.replace('meta+', '');
        }
        if (keyDef === 'up') {
            key = 38;
        }
        else if (keyDef === 'down') {
            key = 40;
        }
        else if (keyDef === '+' || keyDef === '"+"') {
            key = 171;
        }
        else if (keyDef === '-' || keyDef === '"-"') {
            key = 173;
        }
        else if (keyDef === 'esc') {
            key = 27;
        }
        else if (keyDef === 'enter') {
            key = 13;
        }
        else if (keyDef === 'space') {
            key = 32;
        }
        else if (keyDef === 'f4') {
            key = 115;
        }
        else if (keyDef === 'backspace') {
            key = 8;
        }
        else if (keyDef === 'home') {
            key = 36;
        }
        else if (keyDef === 'end') {
            key = 35;
        }
        else if (keyDef === 'left') {
            key = 37;
        }
        else if (keyDef === 'right') {
            key = 39;
        }
        else if (keyDef === 'pagedown') {
            key = 34;
        }
        else if (keyDef === 'pageup') {
            key = 33;
        }
        else {
            key = keyDef.toUpperCase().charCodeAt(0);
        }
        if (keycode === 'WHEEL') {
            return keyDef === 'wheel' && cmd === cmdDef;
        }
        return key === keycode && cmd === cmdDef;
    }
    if (typeof window !== 'undefined') {
        window.isKeyIgnored = isKeyIgnored;
    }
    var NgxExtendedPdfViewerModule = /** @class */ (function () {
        function NgxExtendedPdfViewerModule() {
        }
        return NgxExtendedPdfViewerModule;
    }());
    /** @nocollapse */ NgxExtendedPdfViewerModule.ɵfac = function NgxExtendedPdfViewerModule_Factory(t) { return new (t || NgxExtendedPdfViewerModule)(); };
    /** @nocollapse */ NgxExtendedPdfViewerModule.ɵmod = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineNgModule({ type: NgxExtendedPdfViewerModule });
    /** @nocollapse */ NgxExtendedPdfViewerModule.ɵinj = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjector({ providers: [], imports: [[NgxExtendedPdfViewerCommonModule, i1.CommonModule, i2.FormsModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxExtendedPdfViewerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [NgxExtendedPdfViewerCommonModule, i1.CommonModule, i2.FormsModule],
                        declarations: [
                            NgxExtendedPdfViewerComponent,
                        ],
                        providers: [],
                        exports: [
                            PdfZoomDropdownComponent,
                            PdfContextMenuComponent,
                            PdfPresentationModeComponent,
                            PdfOpenFileComponent,
                            PdfPrintComponent,
                            PdfDownloadComponent,
                            PdfBookmarkComponent,
                            PdfZoomToolbarComponent,
                            PdfPagingAreaComponent,
                            PdfFindbarComponent,
                            PdfSidebarComponent,
                            PdfSidebarContentComponent,
                            PdfSidebarToolbarComponent,
                            PdfSecondaryToolbarComponent,
                            PdfDocumentPropertiesOverlayComponent,
                            PdfSearchInputFieldComponent,
                            PdfFindPreviousComponent,
                            PdfFindNextComponent,
                            PdfFindInputAreaComponent,
                            PdfFindbarOptionsTwoContainerComponent,
                            PdfFindbarOptionsOneContainerComponent,
                            PdfFindMatchCaseComponent,
                            PdfFindHighlightAllComponent,
                            PdfFindEntireWordComponent,
                            PdfFindMultipleSearchTextsComponent,
                            PdfFindIgnoreAccentsComponent,
                            PdfFindbarOptionsThreeContainerComponent,
                            PdfFindResultsCountComponent,
                            PdfFindbarMessageContainerComponent,
                            PdfHandToolComponent,
                            PdfRotatePageComponent,
                            PdfSelectToolComponent,
                            PdfToolbarComponent,
                            PdfFindButtonComponent,
                            PdfToggleSidebarComponent,
                            PdfToggleSecondaryToolbarComponent,
                            PdfLastPageComponent,
                            PdfFirstPageComponent,
                            PdfNextPageComponent,
                            PdfPreviousPageComponent,
                            PdfPageNumberComponent,
                            PdfZoomInComponent,
                            PdfZoomOutComponent,
                            NgxExtendedPdfViewerComponent,
                        ],
                    }]
            }], function () { return []; }, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(NgxExtendedPdfViewerModule, { declarations: [NgxExtendedPdfViewerComponent], imports: [NgxExtendedPdfViewerCommonModule, i1.CommonModule, i2.FormsModule], exports: [PdfZoomDropdownComponent,
                PdfContextMenuComponent,
                PdfPresentationModeComponent,
                PdfOpenFileComponent,
                PdfPrintComponent,
                PdfDownloadComponent,
                PdfBookmarkComponent,
                PdfZoomToolbarComponent,
                PdfPagingAreaComponent,
                PdfFindbarComponent,
                PdfSidebarComponent,
                PdfSidebarContentComponent,
                PdfSidebarToolbarComponent,
                PdfSecondaryToolbarComponent,
                PdfDocumentPropertiesOverlayComponent,
                PdfSearchInputFieldComponent,
                PdfFindPreviousComponent,
                PdfFindNextComponent,
                PdfFindInputAreaComponent,
                PdfFindbarOptionsTwoContainerComponent,
                PdfFindbarOptionsOneContainerComponent,
                PdfFindMatchCaseComponent,
                PdfFindHighlightAllComponent,
                PdfFindEntireWordComponent,
                PdfFindMultipleSearchTextsComponent,
                PdfFindIgnoreAccentsComponent,
                PdfFindbarOptionsThreeContainerComponent,
                PdfFindResultsCountComponent,
                PdfFindbarMessageContainerComponent,
                PdfHandToolComponent,
                PdfRotatePageComponent,
                PdfSelectToolComponent,
                PdfToolbarComponent,
                PdfFindButtonComponent,
                PdfToggleSidebarComponent,
                PdfToggleSecondaryToolbarComponent,
                PdfLastPageComponent,
                PdfFirstPageComponent,
                PdfNextPageComponent,
                PdfPreviousPageComponent,
                PdfPageNumberComponent,
                PdfZoomInComponent,
                PdfZoomOutComponent,
                NgxExtendedPdfViewerComponent] });
    })();

    var NgxExtendedPdfViewerServerModule = /** @class */ (function () {
        function NgxExtendedPdfViewerServerModule() {
        }
        return NgxExtendedPdfViewerServerModule;
    }());
    /** @nocollapse */ NgxExtendedPdfViewerServerModule.ɵfac = function NgxExtendedPdfViewerServerModule_Factory(t) { return new (t || NgxExtendedPdfViewerServerModule)(); };
    /** @nocollapse */ NgxExtendedPdfViewerServerModule.ɵmod = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineNgModule({ type: NgxExtendedPdfViewerServerModule });
    /** @nocollapse */ NgxExtendedPdfViewerServerModule.ɵinj = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjector({ providers: [], imports: [[NgxExtendedPdfViewerCommonModule, i1.CommonModule, i2.FormsModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxExtendedPdfViewerServerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [NgxExtendedPdfViewerCommonModule, i1.CommonModule, i2.FormsModule],
                        declarations: [
                            NgxExtendedPdfViewerServerComponent,
                        ],
                        providers: [],
                        exports: [
                            PdfZoomDropdownComponent,
                            PdfContextMenuComponent,
                            PdfPresentationModeComponent,
                            PdfOpenFileComponent,
                            PdfPrintComponent,
                            PdfDownloadComponent,
                            PdfBookmarkComponent,
                            PdfZoomToolbarComponent,
                            PdfPagingAreaComponent,
                            PdfFindbarComponent,
                            PdfSidebarComponent,
                            PdfSidebarContentComponent,
                            PdfSidebarToolbarComponent,
                            PdfSecondaryToolbarComponent,
                            PdfDocumentPropertiesOverlayComponent,
                            PdfSearchInputFieldComponent,
                            PdfFindPreviousComponent,
                            PdfFindNextComponent,
                            PdfFindInputAreaComponent,
                            PdfFindbarOptionsTwoContainerComponent,
                            PdfFindbarOptionsOneContainerComponent,
                            PdfFindMatchCaseComponent,
                            PdfFindHighlightAllComponent,
                            PdfFindEntireWordComponent,
                            PdfFindMultipleSearchTextsComponent,
                            PdfFindIgnoreAccentsComponent,
                            PdfFindbarOptionsThreeContainerComponent,
                            PdfFindResultsCountComponent,
                            PdfFindbarMessageContainerComponent,
                            PdfHandToolComponent,
                            PdfRotatePageComponent,
                            PdfSelectToolComponent,
                            PdfToolbarComponent,
                            PdfFindButtonComponent,
                            PdfToggleSidebarComponent,
                            PdfToggleSecondaryToolbarComponent,
                            PdfLastPageComponent,
                            PdfFirstPageComponent,
                            PdfNextPageComponent,
                            PdfPreviousPageComponent,
                            PdfPageNumberComponent,
                            PdfZoomInComponent,
                            PdfZoomOutComponent,
                            NgxExtendedPdfViewerServerComponent,
                        ],
                    }]
            }], function () { return []; }, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(NgxExtendedPdfViewerServerModule, { declarations: [NgxExtendedPdfViewerServerComponent], imports: [NgxExtendedPdfViewerCommonModule, i1.CommonModule, i2.FormsModule], exports: [PdfZoomDropdownComponent,
                PdfContextMenuComponent,
                PdfPresentationModeComponent,
                PdfOpenFileComponent,
                PdfPrintComponent,
                PdfDownloadComponent,
                PdfBookmarkComponent,
                PdfZoomToolbarComponent,
                PdfPagingAreaComponent,
                PdfFindbarComponent,
                PdfSidebarComponent,
                PdfSidebarContentComponent,
                PdfSidebarToolbarComponent,
                PdfSecondaryToolbarComponent,
                PdfDocumentPropertiesOverlayComponent,
                PdfSearchInputFieldComponent,
                PdfFindPreviousComponent,
                PdfFindNextComponent,
                PdfFindInputAreaComponent,
                PdfFindbarOptionsTwoContainerComponent,
                PdfFindbarOptionsOneContainerComponent,
                PdfFindMatchCaseComponent,
                PdfFindHighlightAllComponent,
                PdfFindEntireWordComponent,
                PdfFindMultipleSearchTextsComponent,
                PdfFindIgnoreAccentsComponent,
                PdfFindbarOptionsThreeContainerComponent,
                PdfFindResultsCountComponent,
                PdfFindbarMessageContainerComponent,
                PdfHandToolComponent,
                PdfRotatePageComponent,
                PdfSelectToolComponent,
                PdfToolbarComponent,
                PdfFindButtonComponent,
                PdfToggleSidebarComponent,
                PdfToggleSecondaryToolbarComponent,
                PdfLastPageComponent,
                PdfFirstPageComponent,
                PdfNextPageComponent,
                PdfPreviousPageComponent,
                PdfPageNumberComponent,
                PdfZoomInComponent,
                PdfZoomOutComponent,
                NgxExtendedPdfViewerServerComponent] });
    })();

    var PdfDocumentPropertiesExtractor = /** @class */ (function () {
        function PdfDocumentPropertiesExtractor() {
            this.pdfDateStringRegex = new RegExp('^D:' + // Prefix (required)
                '(\\d{4})' + // Year (required)
                '(\\d{2})?' + // Month (optional)
                '(\\d{2})?' + // Day (optional)
                '(\\d{2})?' + // Hour (optional)
                '(\\d{2})?' + // Minute (optional)
                '(\\d{2})?' + // Second (optional)
                '([Z|+|-])?' + // Universal time relation (optional)
                '(\\d{2})?' + // Offset hour (optional)
                // tslint:disable-next-line: quotemark
                "'?" + // Splitting apostrophe (optional)
                '(\\d{2})?' + // Offset minute (optional)
                // tslint:disable-next-line: quotemark
                "'?" // Trailing apostrophe (optional)
            );
        }
        PdfDocumentPropertiesExtractor.prototype.getDocumentProperties = function () {
            return __awaiter(this, void 0, void 0, function () {
                var PDFViewerApplication, pdfDocument, result;
                var _this = this;
                return __generator(this, function (_a) {
                    PDFViewerApplication = window
                        .PDFViewerApplication;
                    pdfDocument = PDFViewerApplication.pdfDocument;
                    result = {};
                    return [2 /*return*/, pdfDocument
                            .getMetadata()
                            .then(function (_a) {
                            var info = _a.info, metadata = _a.metadata, contentDispositionFilename = _a.contentDispositionFilename;
                            result.author = info.Author;
                            result.creationDate = _this.toDateObject(info.CreationDate);
                            result.creator = info.Creator;
                            result.keywords = info.Keywords;
                            result.linearized = info.IsLinearized;
                            result.modificationDate = _this.toDateObject(info.ModDate);
                            result.pdfFormatVersion = info.PDFFormatVersion;
                            result.producer = info.Producer;
                            result.subject = info.Subject;
                            result.title = info.Title;
                            if (contentDispositionFilename) {
                                result.fileName = contentDispositionFilename;
                            }
                            return pdfDocument.getDownloadInfo();
                        })
                            .then(function (_a) {
                            var length = _a.length;
                            result.maybeFileSize = length;
                            return result;
                        })];
                });
            });
        };
        /** shamelessly copied from pdf.js */
        PdfDocumentPropertiesExtractor.prototype.toDateObject = function (input) {
            // if (!input ||  typeof input !== "string")) {
            //  return null;
            //  }
            // Optional fields that don't satisfy the requirements from the regular
            // expression (such as incorrect digit counts or numbers that are out of
            // range) will fall back the defaults from the specification.
            var matches = this.pdfDateStringRegex.exec(input);
            if (!matches) {
                return null;
            }
            // JavaScript's `Date` object expects the month to be between 0 and 11
            // instead of 1 and 12, so we have to correct for that.
            var year = parseInt(matches[1], 10);
            var month = parseInt(matches[2], 10);
            month = month >= 1 && month <= 12 ? month - 1 : 0;
            var day = parseInt(matches[3], 10);
            day = day >= 1 && day <= 31 ? day : 1;
            var hour = parseInt(matches[4], 10);
            hour = hour >= 0 && hour <= 23 ? hour : 0;
            var minute = parseInt(matches[5], 10);
            minute = minute >= 0 && minute <= 59 ? minute : 0;
            var second = parseInt(matches[6], 10);
            second = second >= 0 && second <= 59 ? second : 0;
            var universalTimeRelation = matches[7] || 'Z';
            var offsetHour = parseInt(matches[8], 10);
            offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
            var offsetMinute = parseInt(matches[9], 10) || 0;
            offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
            // Universal time relation 'Z' means that the local time is equal to the
            // universal time, whereas the relations '+'/'-' indicate that the local
            // time is later respectively earlier than the universal time. Every date
            // is normalized to universal time.
            if (universalTimeRelation === '-') {
                hour += offsetHour;
                minute += offsetMinute;
            }
            else if (universalTimeRelation === '+') {
                hour -= offsetHour;
                minute -= offsetMinute;
            }
            return new Date(Date.UTC(year, month, day, hour, minute, second));
        };
        return PdfDocumentPropertiesExtractor;
    }());

    var LinkTarget = {
        NONE: 0,
        SELF: 1,
        BLANK: 2,
        PARENT: 3,
        TOP: 4
    };

    /*
     * Public API Surface of ngx-extended-pdf-viewer
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LinkTarget = LinkTarget;
    exports.NgxExtendedPdfViewerComponent = NgxExtendedPdfViewerComponent;
    exports.NgxExtendedPdfViewerModule = NgxExtendedPdfViewerModule;
    exports.NgxExtendedPdfViewerServerComponent = NgxExtendedPdfViewerServerComponent;
    exports.NgxExtendedPdfViewerServerModule = NgxExtendedPdfViewerServerModule;
    exports.NgxExtendedPdfViewerService = NgxExtendedPdfViewerService;
    exports.PDFNotificationService = PDFNotificationService;
    exports.PdfBookmarkComponent = PdfBookmarkComponent;
    exports.PdfContextMenuComponent = PdfContextMenuComponent;
    exports.PdfDocumentPropertiesExtractor = PdfDocumentPropertiesExtractor;
    exports.PdfDocumentPropertiesOverlayComponent = PdfDocumentPropertiesOverlayComponent;
    exports.PdfDownloadComponent = PdfDownloadComponent;
    exports.PdfFindButtonComponent = PdfFindButtonComponent;
    exports.PdfFindEntireWordComponent = PdfFindEntireWordComponent;
    exports.PdfFindFuzzilyComponent = PdfFindFuzzilyComponent;
    exports.PdfFindHighlightAllComponent = PdfFindHighlightAllComponent;
    exports.PdfFindIgnoreAccentsComponent = PdfFindIgnoreAccentsComponent;
    exports.PdfFindInputAreaComponent = PdfFindInputAreaComponent;
    exports.PdfFindMatchCaseComponent = PdfFindMatchCaseComponent;
    exports.PdfFindMultipleSearchTextsComponent = PdfFindMultipleSearchTextsComponent;
    exports.PdfFindNextComponent = PdfFindNextComponent;
    exports.PdfFindPreviousComponent = PdfFindPreviousComponent;
    exports.PdfFindResultsCountComponent = PdfFindResultsCountComponent;
    exports.PdfFindbarComponent = PdfFindbarComponent;
    exports.PdfFindbarMessageContainerComponent = PdfFindbarMessageContainerComponent;
    exports.PdfFindbarOptionsOneContainerComponent = PdfFindbarOptionsOneContainerComponent;
    exports.PdfFindbarOptionsThreeContainerComponent = PdfFindbarOptionsThreeContainerComponent;
    exports.PdfFindbarOptionsTwoContainerComponent = PdfFindbarOptionsTwoContainerComponent;
    exports.PdfFirstPageComponent = PdfFirstPageComponent;
    exports.PdfHandToolComponent = PdfHandToolComponent;
    exports.PdfLastPageComponent = PdfLastPageComponent;
    exports.PdfNextPageComponent = PdfNextPageComponent;
    exports.PdfOpenFileComponent = PdfOpenFileComponent;
    exports.PdfPageNumberComponent = PdfPageNumberComponent;
    exports.PdfPagingAreaComponent = PdfPagingAreaComponent;
    exports.PdfPresentationModeComponent = PdfPresentationModeComponent;
    exports.PdfPreviousPageComponent = PdfPreviousPageComponent;
    exports.PdfPrintComponent = PdfPrintComponent;
    exports.PdfRotatePageComponent = PdfRotatePageComponent;
    exports.PdfSearchInputFieldComponent = PdfSearchInputFieldComponent;
    exports.PdfSecondaryToolbarComponent = PdfSecondaryToolbarComponent;
    exports.PdfSelectToolComponent = PdfSelectToolComponent;
    exports.PdfSidebarComponent = PdfSidebarComponent;
    exports.PdfSidebarContentComponent = PdfSidebarContentComponent;
    exports.PdfSidebarToolbarComponent = PdfSidebarToolbarComponent;
    exports.PdfToggleSecondaryToolbarComponent = PdfToggleSecondaryToolbarComponent;
    exports.PdfToggleSidebarComponent = PdfToggleSidebarComponent;
    exports.PdfToolbarComponent = PdfToolbarComponent;
    exports.PdfZoomDropdownComponent = PdfZoomDropdownComponent;
    exports.PdfZoomInComponent = PdfZoomInComponent;
    exports.PdfZoomOutComponent = PdfZoomOutComponent;
    exports.PdfZoomToolbarComponent = PdfZoomToolbarComponent;
    exports.getVersionSuffix = getVersionSuffix;
    exports.pdfjsBleedingEdgeVersion = pdfjsBleedingEdgeVersion;
    exports.pdfjsVersion = pdfjsVersion;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-extended-pdf-viewer.umd.js.map

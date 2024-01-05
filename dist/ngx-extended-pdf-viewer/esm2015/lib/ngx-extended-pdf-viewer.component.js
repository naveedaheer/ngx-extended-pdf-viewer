import { __awaiter } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener, NgZone, Inject, PLATFORM_ID, ViewChild, } from '@angular/core';
import { getVersionSuffix, pdfDefaultOptions } from './options/pdf-default-options';
import { VerbosityLevel } from './options/verbosity-level';
import { FindState } from './events/find-result';
import { isPlatformBrowser } from '@angular/common';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import { ElementRef } from '@angular/core';
import { PdfSecondaryToolbarComponent } from './secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component';
import { PDFNotificationService } from './pdf-notification-service';
import { PdfCursorTools } from './options/pdf-cursor-tools';
import { Location } from '@angular/common';
import { PinchOnMobileSupport } from './pinch-on-mobile-support';
import { PdfSidebarComponent } from './sidebar/pdf-sidebar/pdf-sidebar.component';
import { ScrollModeType } from './options/pdf-viewer';
import { UnitToPx } from './unit-to-px';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-notification-service";
import * as i2 from "@angular/common";
import * as i3 from "./dynamic-css/dynamic-css.component";
import * as i4 from "./sidebar/pdf-sidebar/pdf-sidebar.component";
import * as i5 from "./pdf-dummy-components/pdf-dummy-components.component";
import * as i6 from "./toolbar/pdf-toolbar/pdf-toolbar.component";
import * as i7 from "./secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component";
import * as i8 from "./toolbar/pdf-findbar/pdf-findbar.component";
import * as i9 from "./toolbar/pdf-context-menu/pdf-context-menu.component";
import * as i10 from "./document-properties/pdf-document-properties-overlay/pdf-document-properties-overlay.component";
import * as i11 from "./theme/pdf-dark-theme/pdf-dark-theme.component";
import * as i12 from "./theme/pdf-light-theme/pdf-light-theme.component";
import * as i13 from "./translate.pipe";
const _c0 = ["root"];
const _c1 = ["pdfSecondaryToolbarComponent"];
const _c2 = ["pdfsidebar"];
function NgxExtendedPdfViewerComponent_link_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "link", 49);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("xhref", ctx_r0.localeFolderPath + "/locale.properties");
} }
function NgxExtendedPdfViewerComponent_pdf_dark_theme_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-dark-theme");
} }
function NgxExtendedPdfViewerComponent_pdf_light_theme_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-light-theme");
} }
function NgxExtendedPdfViewerComponent_ng_content_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar"]);
} }
function NgxExtendedPdfViewerComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, i0.ɵɵpipeBind2(3, 3, "unverified_signature_warning", "This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid. Please download the file and open it in Acrobat Reader to verify the signature is valid.")), " ");
} }
function NgxExtendedPdfViewerComponent_ng_template_65_Template(rf, ctx) { }
const _c3 = ["*"];
export class NgxExtendedPdfViewerComponent {
    constructor(ngZone, platformId, notificationService, location, elementRef) {
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
        this.formDataChange = new EventEmitter();
        this.pageViewMode = 'multiple';
        this.progress = new EventEmitter();
        this.srcChange = new EventEmitter();
        this.scrollMode = undefined;
        this.scrollModeChange = new EventEmitter();
        this.authorization = undefined;
        this.httpHeaders = undefined;
        this.contextMenuAllowed = true;
        this.afterPrint = new EventEmitter();
        this.beforePrint = new EventEmitter();
        this.currentZoomFactor = new EventEmitter();
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
        this.logLevel = VerbosityLevel.WARNINGS;
        this.enablePinchOnMobile = false;
        /** Use the minified (minifiedJSLibraries="true", which is the default) or the user-readable pdf.js library (minifiedJSLibraries="false") */
        this.minifiedJSLibraries = true;
        this.primaryMenuVisible = true;
        /** option to increase (or reduce) print resolution. Default is 150 (dpi). Sensible values
         * are 300, 600, and 1200. Note the increase memory consumption, which may even result in a browser crash. */
        this.printResolution = null;
        this.rotationChange = new EventEmitter();
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
        this.imageResourcesPath = './' + pdfDefaultOptions.assetsFolder + '/images/';
        /** Allows the user to put their locale folder into an arbitrary folder */
        this.localeFolderPath = './' + pdfDefaultOptions.assetsFolder + '/locale';
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
        this.sidebarVisibleChange = new EventEmitter();
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
        this.handToolChange = new EventEmitter();
        this.showHandToolButton = false;
        this.showScrollingButton = true;
        this.showSpreadButton = true;
        this.showPropertiesButton = true;
        this.showBorders = true;
        this.spreadChange = new EventEmitter();
        this.thumbnailDrawn = new EventEmitter();
        this._page = undefined;
        this.pageChange = new EventEmitter();
        this.pageLabel = undefined;
        this.pageLabelChange = new EventEmitter();
        this.pagesLoaded = new EventEmitter();
        this.pageRender = new EventEmitter();
        this.pageRendered = new EventEmitter();
        this.pdfDownloaded = new EventEmitter();
        this.pdfLoaded = new EventEmitter();
        this.pdfLoadingFailed = new EventEmitter();
        this.textLayer = undefined;
        this.textLayerRendered = new EventEmitter();
        this.updateFindMatchesCount = new EventEmitter();
        this.updateFindState = new EventEmitter();
        /** Legal values: undefined, 'auto', 'page-actual', 'page-fit', 'page-width', or '50' (or any other percentage) */
        this.zoom = undefined;
        this.zoomChange = new EventEmitter();
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
    set src(url) {
        if (url instanceof Uint8Array) {
            this._src = url.buffer;
        }
        else if (url instanceof URL) {
            this._src = url.toString();
        }
        else if (typeof Blob !== 'undefined' && url instanceof Blob) {
            // additional check introduced to support server side rendering
            const reader = new FileReader();
            reader.onloadend = () => {
                setTimeout(() => {
                    this.src = new Uint8Array(reader.result);
                    if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
                        if (this.ngxExtendedPdfViewerIncompletelyInitialized) {
                            this.openPDF();
                        }
                        else {
                            (() => __awaiter(this, void 0, void 0, function* () { return yield this.openPDF2(); }))();
                        }
                        // else openPDF is called later, so we do nothing to prevent loading the PDF file twice
                    }
                });
            };
            reader.readAsArrayBuffer(url);
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
    }
    set base64Src(base64) {
        if (base64) {
            const binary_string = window.atob(base64);
            const len = binary_string.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            this.src = bytes.buffer;
        }
        else {
            this._src = undefined;
        }
    }
    set height(h) {
        this.minHeight = undefined;
        this.autoHeight = false;
        if (h) {
            this._height = h;
        }
        else {
            this.height = '100%';
        }
        setTimeout(() => {
            this.checkHeight();
        });
    }
    get height() {
        return this._height;
    }
    get showSidebarButton() {
        return this._showSidebarButton;
    }
    set showSidebarButton(show) {
        this._showSidebarButton = show;
        const isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
        let factor = 1;
        if (isIE) {
            factor = Number((this._mobileFriendlyZoom || '100').replace('%', '')) / 100;
        }
        if (this._showSidebarButton) {
            this.findbarLeft = (68 * factor).toString() + 'px';
        }
        else {
            this.findbarLeft = '0px';
        }
    }
    get page() {
        return this._page;
    }
    set page(p) {
        if (p) {
            // silently cope with strings
            this._page = Number(p);
        }
        else {
            this._page = undefined;
        }
    }
    get mobileFriendlyZoom() {
        return this._mobileFriendlyZoom;
    }
    /**
     * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     */
    set mobileFriendlyZoom(zoom) {
        // tslint:disable-next-line:triple-equals - the type conversion is intended
        if (zoom == 'true') {
            zoom = '150%';
            // tslint:disable-next-line:triple-equals - the type conversion is intended
        }
        else if (zoom == 'false' || zoom === undefined || zoom === null) {
            zoom = '100%';
        }
        this._mobileFriendlyZoom = zoom;
        let factor = 1;
        if (!String(zoom).includes('%')) {
            zoom = 100 * Number(zoom) + '%';
        }
        factor = Number((zoom || '100').replace('%', '')) / 100;
        this.mobileFriendlyZoomScale = factor;
        this.toolbarWidth = (100 / factor).toString() + '%';
        this.toolbarMarginTop = (factor - 1) * 16 + 'px';
        setTimeout(() => this.calcViewerPositionTop());
    }
    calcViewerPositionTop() {
        const toolbar = document.getElementsByClassName('toolbar')[0];
        if (toolbar === undefined) {
            return;
        }
        let top = toolbar.getBoundingClientRect().height;
        this.viewerPositionTop = top + 'px';
        const factor = top / 33;
        this.sidebarPositionTop = (33 + 33 * (factor - 1)).toString() + 'px';
        this.secondaryToolbarTop = (33 + 38 * (factor - 1)).toString() + 'px';
        this.findbarTop = (34 + 54 * (factor - 1)).toString() + 'px';
        const findButton = document.getElementById('viewFind');
        if (findButton) {
            const containerPositionLeft = toolbar.getBoundingClientRect().left;
            const findButtonPosition = findButton.getBoundingClientRect();
            const left = findButtonPosition.left - containerPositionLeft;
            this.findbarLeft = left + 'px';
        }
        else if (this.showSidebarButton) {
            this.findbarLeft = 34 + (32 * factor).toString() + 'px';
        }
        else {
            this.findbarLeft = '0px';
        }
    }
    iOSVersionRequiresES5() {
        const match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        if (match !== undefined && match !== null) {
            return parseInt(match[1], 10) < 14;
        }
        return false;
    }
    needsES5() {
        const isIE = !!window.MSInputMethodContext && !!document.documentMode;
        const isEdge = /Edge\/\d./i.test(navigator.userAgent);
        const isIOs13OrBelow = this.iOSVersionRequiresES5();
        let needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
        needsES5 = needsES5 || isIE || isEdge || isIOs13OrBelow || !this.ngxBrowserSupportsNullSafeChaining();
        return needsES5;
    }
    ngxBrowserSupportsNullSafeChaining() {
        return !!Promise['allSettled'];
    }
    loadViewer() {
        if (!window['pdfjs-dist/build/pdf']) {
            setTimeout(() => this.loadViewer(), 25);
        }
        else {
            let needsES5 = this.needsES5();
            const suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
            const script2 = document.createElement('script');
            const assets = pdfDefaultOptions.assetsFolder;
            const versionSuffix = getVersionSuffix(assets);
            if (needsES5) {
                console.log('Using the ES5 version of the PDF viewer.');
            }
            script2.src = this.location.normalize(needsES5 ? assets + '/viewer-' + versionSuffix + '-es5' + suffix : assets + '/viewer-' + versionSuffix + suffix);
            script2.type = 'text/javascript';
            script2.async = true;
            document.getElementsByTagName('head')[0].appendChild(script2);
        }
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            const link = document.createElement('link');
            link.href = this.localeFolderPath + '/locale.properties';
            link.setAttribute('origin', 'ngx-extended-pdf-viewer');
            link.rel = 'resource';
            link.type = 'application/l10n';
            const widget = this.elementRef.nativeElement;
            widget.appendChild(link);
            window.getFormValue = (key) => this.getFormValue(key);
            window.setFormValue = (key, value) => this.setFormValue(key, value);
            window.assignFormIdAndFieldName = (key, fieldName, radioButtonField) => this.assignFormIdAndFieldName(key, fieldName, radioButtonField);
            this.onResize();
            this.loadPdfJs();
        }
    }
    loadPdfJs() {
        if (!window['pdfjs-dist/build/pdf']) {
            const needsES5 = this.needsES5();
            const suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
            if (this.minifiedJSLibraries) {
                if (!pdfDefaultOptions.workerSrc().endsWith('.min.js')) {
                    const src = pdfDefaultOptions.workerSrc();
                    pdfDefaultOptions.workerSrc = () => src.replace('.js', '.min.js');
                }
            }
            const assets = pdfDefaultOptions.assetsFolder;
            const versionSuffix = getVersionSuffix(assets);
            const script = document.createElement('script');
            script.src = this.location.normalize(needsES5 ? assets + '/pdf-' + versionSuffix + '-es5' + suffix : assets + '/pdf-' + versionSuffix + suffix);
            script.type = 'text/javascript';
            script.async = true;
            document.getElementsByTagName('head')[0].appendChild(script);
        }
        if (!window.webViewerLoad) {
            this.loadViewer();
        }
    }
    ngAfterViewInit() {
        if (typeof window !== 'undefined') {
            if (!this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                if (window.webViewerLoad) {
                    this.doInitPDFViewer();
                }
                else {
                    setTimeout(() => this.ngAfterViewInit(), 50);
                }
            }
        }
    }
    assignTabindexes() {
        if (this.startTabindex) {
            const r = this.root.nativeElement.cloneNode(true);
            r.classList.add('offscreen');
            this.showElementsRecursively(r);
            document.body.appendChild(r);
            const elements = this.collectElementPositions(r, this.root.nativeElement, []);
            document.body.removeChild(r);
            const sorted = elements.sort((a, b) => {
                if (a.y - b.y > 15) {
                    return 1;
                }
                if (b.y - a.y > 15) {
                    return -1;
                }
                return a.x - b.x;
            });
            for (let i = 0; i < sorted.length; i++) {
                sorted[i].element.tabIndex = this.startTabindex + i;
            }
        }
    }
    showElementsRecursively(root) {
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
            for (let i = 0; i < root.childElementCount; i++) {
                const c = root.children.item(i);
                if (c) {
                    this.showElementsRecursively(c);
                }
            }
        }
    }
    collectElementPositions(copy, original, elements) {
        if (copy instanceof HTMLButtonElement || copy instanceof HTMLAnchorElement || copy instanceof HTMLInputElement || copy instanceof HTMLSelectElement) {
            const rect = copy.getBoundingClientRect();
            const elementAndPos = {
                element: original,
                x: Math.round(rect.left),
                y: Math.round(rect.top),
            };
            elements.push(elementAndPos);
        }
        else if (copy.childElementCount > 0) {
            for (let i = 0; i < copy.childElementCount; i++) {
                const c = copy.children.item(i);
                const o = original.children.item(i);
                if (c && o) {
                    elements = this.collectElementPositions(c, o, elements);
                }
            }
        }
        return elements;
    }
    doInitPDFViewer() {
        if (typeof window === 'undefined') {
            return;
        }
        const langLinks = document.querySelectorAll('link[type="application/l10n"]');
        const langCount = langLinks.length;
        if (langCount === 0) {
            const dict = document.querySelector('script[type="application/l10n"]');
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
            const o = langLinks[0].attributes['origin'];
            if (o && o.value !== 'ngx-extended-pdf-viewer') {
                console.error(
                // tslint:disable-next-line:quotemark
                "Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
            }
        }
        const callback = (e) => {
            document.removeEventListener('localized', callback);
            this.initTimeout = setTimeout(() => {
                if (!this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    this.calcViewerPositionTop();
                    this.afterLibraryInit();
                    this.openPDF();
                    this.assignTabindexes();
                }
            }, this.delayFirstView);
        };
        window.addEventListener('afterprint', (event) => {
            this.afterPrint.emit();
        });
        window.addEventListener('beforeprint', (event) => {
            this.beforePrint.emit();
        });
        document.addEventListener('localized', callback);
        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("You're trying to open two instances of the PDF viewer. Most likely, this will result in errors.");
        }
        const onLoaded = () => {
            this.overrideDefaultSettings();
            document.removeEventListener('webviewerloaded', onLoaded);
            if (this.enablePinchOnMobile) {
                this.pinchOnMobileSupport = new PinchOnMobileSupport(this.ngZone);
            }
        };
        document.addEventListener('webviewerloaded', onLoaded);
        this.activateTextlayerIfNecessary(null);
        setTimeout(() => {
            if (!this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                // This initializes the webviewer, the file may be passed in to it to initialize the viewer with a pdf directly
                this.primaryMenuVisible = this.showToolbar;
                const hideSecondaryMenu = this.hideKebabMenuForSecondaryToolbar && !this.showSecondaryToolbarButton;
                if (hideSecondaryMenu) {
                    if (!this.isPrimaryMenuVisible()) {
                        this.primaryMenuVisible = false;
                    }
                }
                this.dummyComponents.addMissingStandardWidgets();
                window.webViewerLoad();
                const PDFViewerApplication = window.PDFViewerApplication;
                PDFViewerApplication.appConfig.defaultUrl = ''; // IE bugfix
                if (this.filenameForDownload) {
                    PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
                }
                const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
                PDFViewerApplicationOptions.set('enableDragAndDrop', this.enableDragAndDrop);
                let language = this.language === "" ? undefined : this.language;
                if (!language) {
                    language = navigator.language;
                }
                PDFViewerApplicationOptions.set('locale', language);
                PDFViewerApplicationOptions.set('imageResourcesPath', this.imageResourcesPath);
                PDFViewerApplicationOptions.set('minZoom', this.minZoom);
                PDFViewerApplicationOptions.set('maxZoom', this.maxZoom);
                PDFViewerApplicationOptions.set('pageViewMode', this.pageViewMode);
                PDFViewerApplicationOptions.set('verbosity', this.logLevel);
                PDFViewerApplicationOptions.set('initialZoom', this.zoom);
                PDFViewerApplication.isViewerEmbedded = true;
                if (PDFViewerApplication.printKeyDownListener) {
                    window.addEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
                }
                const pc = document.getElementById('printContainer');
                if (pc) {
                    document.getElementsByTagName('body')[0].appendChild(pc);
                }
            }
        }, 0);
    }
    /** Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available */
    afterLibraryInit() {
        this.notificationService.onPDFJSInit.next();
    }
    checkHeight() {
        if (typeof document !== 'undefined') {
            const container = document.getElementsByClassName('zoom')[0];
            if (container) {
                if ((this.autoHeight || container.clientHeight === 0) && this._height.includes('%')) {
                    this.autoHeight = true;
                    const available = window.innerHeight;
                    const rect = container.getBoundingClientRect();
                    const top = rect.top;
                    let maximumHeight = available - top;
                    // take the margins and paddings of the parent containers into account
                    let padding = this.calculateBorderMarging(container);
                    maximumHeight -= padding;
                    const factor = Number(this._height.replace('%', ''));
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
    }
    calculateBorderMarging(container) {
        if (container) {
            const computedStyle = window.getComputedStyle(container);
            const padding = UnitToPx.toPx(computedStyle.paddingBottom);
            const margin = UnitToPx.toPx(computedStyle.marginBottom);
            if (container.style.zIndex) {
                return padding + margin;
            }
            return padding + margin + this.calculateBorderMarging(container.parentElement);
        }
        return 0;
    }
    onSpreadChange(newSpread) {
        this.spreadChange.emit(newSpread);
    }
    activateTextlayerIfNecessary(options) {
        if (this.textLayer === undefined) {
            if (!this.handTool) {
                if (options) {
                    options.set('textLayerMode', pdfDefaultOptions.textLayerMode);
                }
                this.textLayer = true;
                if (this.showFindButton === undefined) {
                    this.showFindButton = true;
                    setTimeout(() => {
                        // todo remove this hack:
                        const viewFind = document.getElementById('viewFind');
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        const findbar = document.getElementById('findbar');
                        if (findbar) {
                            findbar.classList.remove('invisible');
                        }
                    });
                }
            }
            else {
                if (options) {
                    options.set('textLayerMode', this.showHandToolButton ? pdfDefaultOptions.textLayerMode : 0);
                }
                if (!this.showHandToolButton) {
                    if (this.showFindButton || this.showFindButton === undefined) {
                        this.ngZone.run(() => {
                            this.showFindButton = false;
                        });
                        if (this.logLevel >= VerbosityLevel.WARNINGS) {
                            console.warn(
                            // tslint:disable-next-line:max-line-length
                            'Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                        }
                    }
                    if (this.showHandToolButton) {
                        if (this.logLevel >= VerbosityLevel.WARNINGS) {
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
                    options.set('textLayerMode', pdfDefaultOptions.textLayerMode);
                }
                this.textLayer = true;
                if (this.showFindButton === undefined) {
                    this.showFindButton = true;
                    setTimeout(() => {
                        // todo remove this hack:
                        const viewFind = document.getElementById('viewFind');
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        const findbar = document.getElementById('findbar');
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
                    if (this.logLevel >= VerbosityLevel.WARNINGS) {
                        // tslint:disable-next-line:max-line-length
                        console.warn('Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                        this.ngZone.run(() => {
                            this.showFindButton = false;
                        });
                    }
                }
                if (this.showHandToolButton) {
                    if (this.logLevel >= VerbosityLevel.WARNINGS) {
                        console.warn(
                        // tslint:disable-next-line:max-line-length
                        'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                        this.showHandToolButton = false;
                    }
                }
            }
        }
    }
    overrideDefaultSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const options = window.PDFViewerApplicationOptions;
            // tslint:disable-next-line:forin
            for (const key in pdfDefaultOptions) {
                options.set(key, pdfDefaultOptions[key]);
            }
            options.set('disablePreferences', true);
            yield this.setZoom();
            options.set('ignoreKeyboard', this.ignoreKeyboard);
            options.set('ignoreKeys', this.ignoreKeys);
            options.set('acceptKeys', this.acceptKeys);
            this.activateTextlayerIfNecessary(options);
            if (this.scrollMode || this.scrollMode === ScrollModeType.vertical) {
                options.set('scrollModeOnLoad', this.scrollMode);
            }
            const sidebarVisible = this.sidebarVisible;
            const PDFViewerApplication = window.PDFViewerApplication;
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
        });
    }
    openPDF() {
        ServiceWorkerOptions.showUnverifiedSignatures = this.showUnverifiedSignatures;
        const PDFViewerApplication = window.PDFViewerApplication;
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
            PDFViewerApplication.eventBus.on('textlayerrendered', (x) => {
                this.textLayerRendered.emit(x);
            });
            PDFViewerApplication.eventBus.on('scrollmodechanged', (x) => {
                this.scrollModeChange.emit(x.mode);
            });
            PDFViewerApplication.eventBus.on('progress', (x) => {
                this.progress.emit(x);
            });
            PDFViewerApplication.eventBus.on('pagesloaded', (x) => __awaiter(this, void 0, void 0, function* () {
                this.pagesLoaded.emit(x);
                this.removeScrollbarInInititeScrollMode();
                if (this.rotation !== undefined && this.rotation !== null) {
                    const r = Number(this.rotation);
                    if (r === 0 || r === 90 || r === 180 || r === 270) {
                        PDFViewerApplication.pdfViewer.pagesRotation = r;
                    }
                }
                setTimeout(() => {
                    if (!this.shuttingDown) {
                        // hurried users sometimes reload the PDF before it has finished initializing
                        if (this.nameddest) {
                            PDFViewerApplication.pdfLinkService.navigateTo(this.nameddest);
                        }
                        else if (this.page) {
                            PDFViewerApplication.page = Number(this.page);
                        }
                        else if (this.pageLabel) {
                            PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
                        }
                    }
                });
                yield this.setZoom();
            }));
            PDFViewerApplication.eventBus.on('pagerendered', (x) => {
                this.ngZone.run(() => {
                    this.pageRendered.emit(x);
                    this.removeScrollbarInInititeScrollMode();
                });
            });
            PDFViewerApplication.eventBus.on('pagerender', (x) => {
                this.ngZone.run(() => {
                    this.pageRender.emit(x);
                });
            });
            PDFViewerApplication.eventBus.on('download', (x) => {
                this.ngZone.run(() => {
                    this.pdfDownloaded.emit(x);
                });
            });
            PDFViewerApplication.eventBus.on('scalechanging', (x) => {
                {
                    const scale = this.root.nativeElement.querySelector('#scaleSelect');
                    let userZoomFactor = '';
                    if (scale) {
                        userZoomFactor = scale.value;
                    }
                }
                this.currentZoomFactor.emit(x.scale);
                const scale = this.root.nativeElement.querySelector('#scaleSelect');
                let userZoomFactor = this.zoom;
                if (scale) {
                    userZoomFactor = scale.value;
                }
                if (userZoomFactor !== 'auto' && userZoomFactor !== 'page-fit' && userZoomFactor !== 'page-actual' && userZoomFactor !== 'page-width') {
                    this.zoom = x.scale * 100;
                    this.zoomChange.emit(x.scale * 100);
                    // setTimeout(() => this.zoomChange.emit(x.scale * 100));
                }
                else if (this.zoom !== userZoomFactor) {
                    // called when the user selects one of the text values of the zoom select dropdown
                    this.zoomChange.emit(userZoomFactor);
                }
            });
            PDFViewerApplication.eventBus.on('rotationchanging', (x) => {
                this.ngZone.run(() => {
                    this.rotationChange.emit(x.pagesRotation);
                });
            });
            PDFViewerApplication.eventBus.on('fileinputchange', (x) => {
                this.ngZone.run(() => {
                    const path = x.fileInput.value.replace('C:\\fakepath\\', '');
                    this.srcChange.emit(path);
                });
            });
            PDFViewerApplication.eventBus.on('cursortoolchanged', (x) => {
                this.ngZone.run(() => {
                    this.handToolChange.emit(x.tool === PdfCursorTools.HAND);
                });
            });
            PDFViewerApplication.eventBus.on('sidebarviewchanged', (x) => {
                this.ngZone.run(() => {
                    this.sidebarVisibleChange.emit(x.view > 0);
                    if (this.sidebarComponent) {
                        this.sidebarComponent.showToolbarWhenNecessary();
                    }
                });
            });
            PDFViewerApplication.eventBus.on('documentloaded', (pdfLoadedEvent) => {
                this.ngZone.run(() => {
                    this.loadComplete(pdfLoadedEvent.source.pdfDocument);
                });
            });
            const hideSidebarToolbar = () => {
                this.ngZone.run(() => {
                    if (this.sidebarComponent) {
                        this.sidebarComponent.showToolbarWhenNecessary();
                    }
                });
            };
            PDFViewerApplication.eventBus.on('outlineloaded', hideSidebarToolbar);
            PDFViewerApplication.eventBus.on('attachmentsloaded', hideSidebarToolbar);
            PDFViewerApplication.eventBus.on('layersloaded', hideSidebarToolbar);
            PDFViewerApplication.eventBus.on('updatefindcontrolstate', (x) => {
                if (x.state === FindState.NOT_FOUND) {
                    this.updateFindMatchesCount.emit({ current: 0, total: 0 });
                }
                else if (x.matchesCount.total) {
                    x.matchesCount.matches = PDFViewerApplication.findController._pageMatches;
                    x.matchesCount.matchesLength = PDFViewerApplication.findController._pageMatchesLength;
                    x.matchesCount.matchesColor = PDFViewerApplication.findController._pageMatchesColor;
                    this.updateFindMatchesCount.emit(x.matchesCount);
                }
                if (this.updateFindState) {
                    this.updateFindState.emit(x.state);
                }
            });
            PDFViewerApplication.eventBus.on('updatefindmatchescount', (x) => {
                x.matchesCount.matches = PDFViewerApplication.findController._pageMatches;
                x.matchesCount.matchesLength = PDFViewerApplication.findController._pageMatchesLength;
                x.matchesCount.matchesColor = PDFViewerApplication.findController._pageMatchesColor;
                this.updateFindMatchesCount.emit(x.matchesCount);
            });
            PDFViewerApplication.eventBus.on('pagechanging', (x) => {
                if (!this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    this.ngZone.run(() => {
                        const currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
                        const currentPageLabel = PDFViewerApplication.pdfViewer.currentPageLabel;
                        if (currentPage !== this.page) {
                            this.pageChange.emit(currentPage);
                        }
                        if (currentPageLabel !== this.pageLabel) {
                            this.pageLabelChange.emit(currentPageLabel);
                        }
                    });
                }
            });
            this.checkHeight();
            // open a file in the viewer
            if (!!this._src) {
                const options = {
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
                PDFViewerApplication.onError = (error) => this.pdfLoadingFailed.emit(error);
                PDFViewerApplication.open(this._src, options).then(() => {
                    this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
                    setTimeout(() => __awaiter(this, void 0, void 0, function* () { return yield this.setZoom(); }));
                });
            }
            setTimeout(() => {
                if (!this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    if (this.page) {
                        PDFViewerApplication.page = Number(this.page);
                    }
                }
            }, 100);
        }
    }
    removeScrollbarInInititeScrollMode() {
        if (this.pageViewMode === 'infinite-scroll') {
            setTimeout(() => {
                const viewer = document.getElementById('viewer');
                if (viewer) {
                    const height = viewer.clientHeight + 17;
                    const zoom = document.getElementsByClassName('zoom')[0];
                    if (this.primaryMenuVisible) {
                        this.height = height + 35 + 'px';
                    }
                    else {
                        this.height = height + 'px';
                    }
                    if (zoom) {
                        zoom.style.height = this.height;
                    }
                }
            });
        }
    }
    openPDF2() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.overrideDefaultSettings();
            const PDFViewerApplication = window.PDFViewerApplication;
            yield PDFViewerApplication.close();
            // #802 clear the form data; otherwise the "download" dialogs opens
            (_b = (_a = PDFViewerApplication.pdfDocument) === null || _a === void 0 ? void 0 : _a.annotationStorage) === null || _b === void 0 ? void 0 : _b.resetModified();
            this.formData = {};
            this.formIdToFieldName = {};
            this.formRadioButtonValueToId = {};
            const options = {
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
            PDFViewerApplication.open(this._src, options).then(() => {
                this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
            }, (error) => this.pdfLoadingFailed.emit(error));
        });
    }
    selectCursorTool() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: this.handTool ? 1 : 0 });
    }
    ngOnDestroy() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof window === 'undefined') {
                return; // fast escape for server side rendering
            }
            window.getFormValue = undefined;
            window.setFormValue = undefined;
            const PDFViewerApplication = window.PDFViewerApplication;
            this.shuttingDown = true;
            NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
            if (this.initTimeout) {
                clearTimeout(this.initTimeout);
                this.initTimeout = undefined;
            }
            if (PDFViewerApplication) {
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
                yield PDFViewerApplication.close();
                if (PDFViewerApplication.printKeyDownListener) {
                    removeEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
                }
                setTimeout(() => {
                    if (PDFViewerApplication._boundEvents) {
                        PDFViewerApplication.unbindWindowEvents();
                    }
                    const bus = PDFViewerApplication.eventBus;
                    if (bus) {
                        PDFViewerApplication.unbindEvents();
                        for (const key in bus._listeners) {
                            if (bus._listeners[key]) {
                                const list = bus._listeners[key];
                                // not sure if the for loop is necessary - but
                                // it might improve garbage collection if the "listeners"
                                // array is stored somewhere else
                                for (let i = 0; i < list.length; i++) {
                                    list[i] = undefined;
                                }
                                bus._listeners[key] = undefined;
                            }
                        }
                    }
                    PDFViewerApplication.eventBus = null;
                });
            }
            const body = document.getElementsByTagName('body');
            if (body[0]) {
                const topLevelElements = body[0].children;
                for (let i = topLevelElements.length - 1; i >= 0; i--) {
                    const e = topLevelElements.item(i);
                    if (e && e.id === 'printContainer') {
                        body[0].removeChild(e);
                    }
                    else if (e && e.id === 'fileInput') {
                        body[0].removeChild(e);
                    }
                }
            }
        });
    }
    isPrimaryMenuVisible() {
        if (this.showToolbar) {
            const visible = this.showBookmarkButton ||
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
    }
    ngOnChanges(changes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof window === 'undefined') {
                return; // server side rendering
            }
            const PDFViewerApplication = window.PDFViewerApplication;
            const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
            if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
                if ('src' in changes || 'base64Src' in changes) {
                    if (!!this._src) {
                        if (this.ngxExtendedPdfViewerIncompletelyInitialized) {
                            this.openPDF();
                        }
                        else {
                            yield this.openPDF2();
                        }
                    }
                    else {
                        // #802 clear the form data; otherwise the "download" dialogs opens
                        PDFViewerApplication.pdfDocument.annotationStorage.resetModified();
                        this.formData = {};
                        this.formIdToFieldName = {};
                        this.formRadioButtonValueToId = {};
                        yield PDFViewerApplication.close();
                    }
                }
                if ('enableDragAndDrop' in changes) {
                    PDFViewerApplicationOptions.set('enableDragAndDrop', this.enableDragAndDrop);
                }
                if ('zoom' in changes) {
                    (() => __awaiter(this, void 0, void 0, function* () { return yield this.setZoom(); }))();
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
                        const r = Number(this.rotation);
                        if (r === 0 || r === 90 || r === 180 || r === 270) {
                            PDFViewerApplication.pdfViewer.pagesRotation = r;
                        }
                    }
                    else {
                        PDFViewerApplication.pdfViewer.pagesRotation = 0;
                    }
                }
                if ('scrollMode' in changes) {
                    if (this.scrollMode || this.scrollMode === ScrollModeType.vertical) {
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
                setTimeout(() => this.calcViewerPositionTop());
            } // end of if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized)
            this.onResize();
            if ('printResolution' in changes) {
                const options = PDFViewerApplicationOptions;
                if (options) {
                    options.set('printResolution', this.printResolution);
                }
            }
            if ('ignoreKeyboard' in changes) {
                const options = PDFViewerApplicationOptions;
                if (options) {
                    this.overrideDefaultSettings();
                }
            }
            if ('ignoreKeys' in changes) {
                const options = PDFViewerApplicationOptions;
                if (options) {
                    this.overrideDefaultSettings();
                }
            }
            if ('acceptKeys' in changes) {
                const options = PDFViewerApplicationOptions;
                if (options) {
                    this.overrideDefaultSettings();
                }
            }
            if ('showBorders' in changes) {
                if (!changes['showBorders'].isFirstChange()) {
                    const options = PDFViewerApplicationOptions;
                    if (options) {
                        this.overrideDefaultSettings();
                        const viewer = document.getElementById('viewer');
                        if (this.showBorders) {
                            viewer.classList.remove('removePageBorders');
                        }
                        else {
                            viewer.classList.add('removePageBorders');
                        }
                        if (PDFViewerApplication.pdfViewer) {
                            PDFViewerApplication.pdfViewer.removePageBorders = !this.showBorders;
                        }
                        const zoomEvent = {
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
        });
    }
    setZoom() {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window.PDFViewerApplication;
            let zoomAsNumber = this.zoom;
            if (String(zoomAsNumber).endsWith('%')) {
                zoomAsNumber = Number(String(zoomAsNumber).replace('%', '')) / 100;
            }
            else if (!isNaN(Number(zoomAsNumber))) {
                zoomAsNumber = Number(zoomAsNumber) / 100;
            }
            if (!zoomAsNumber) {
                if (!PDFViewerApplication.store) {
                    // It's difficult to prevent calling this method to early, so we need this check.
                    // setZoom() is called later again, when the PDF document has been loaded and its
                    // fingerprint has been calculated.
                }
                else {
                    const userSetting = yield PDFViewerApplication.store.get('zoom');
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
                }
            }
            if (PDFViewerApplication) {
                const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
                PDFViewerApplicationOptions.set('defaultZoomValue', zoomAsNumber);
            }
            const scaleDropdownField = this.root.nativeElement.querySelector('#scaleSelect');
            if (scaleDropdownField) {
                if (this.zoom === 'auto' || this.zoom === 'page-fit' || this.zoom === 'page-actual' || this.zoom === 'page-width') {
                    scaleDropdownField.value = this.zoom;
                }
                else {
                    scaleDropdownField.value = 'custom';
                    for (const option of scaleDropdownField.options) {
                        if (option.value === 'custom') {
                            option.textContent = Math.round(Number(zoomAsNumber) * 100000) / 1000 + '%';
                            continue;
                        }
                    }
                }
            }
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.currentScaleValue = zoomAsNumber || 'auto';
            }
        });
    }
    onResize() {
        const pdfViewer = document.getElementsByClassName('html');
        if (pdfViewer && pdfViewer.length > 0) {
            const container = document.getElementById('outerContainer');
            if (container) {
                const width = container.clientWidth;
                this.toolbarWidthInPixels = width;
                if (this.secondaryToolbarComponent) {
                    this.secondaryToolbarComponent.checkVisibility();
                }
            }
            this.checkHeight();
        }
        try {
            const observer = new ResizeObserver(() => this.removeScrollbarInInititeScrollMode());
            const viewer = document.getElementById('viewer');
            if (viewer) {
                observer.observe(viewer);
            }
        }
        catch (exception) {
            console.log('ResizeObserver is not supported by your browser');
        }
    }
    onContextMenu() {
        return this.contextMenuAllowed;
    }
    onSecondaryMenuIsEmpty(hideKebabButton) {
        this.hideKebabMenuForSecondaryToolbar = hideKebabButton;
        if (hideKebabButton) {
            if (!this.isPrimaryMenuVisible()) {
                this.primaryMenuVisible = false;
            }
        }
    }
    getFormValue(key) {
        return { value: this.formData[key] };
    }
    setFormValue(key, value) {
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
    }
    assignFormIdAndFieldName(key, fieldName, radioButtonField) {
        this.formIdToFieldName[key] = fieldName;
        if (radioButtonField) {
            this.formRadioButtonValueToId[radioButtonField] = key;
        }
    }
    updateFormFields(formData, previousFormData) {
        const PDFViewerApplication = window.PDFViewerApplication;
        if (!PDFViewerApplication || !PDFViewerApplication.pdfDocument || !PDFViewerApplication.pdfDocument.annotationStorage) {
            // ngOnChanges calls this method too early - so just ignore it
            return;
        }
        const storage = PDFViewerApplication.pdfDocument.annotationStorage;
        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                if (formData[key] !== previousFormData[key]) {
                    const field = document.querySelector("input[name='" + key + "']");
                    if (field instanceof HTMLInputElement) {
                        if (field.type === 'radio') {
                            storage.setValue(field.id, key, { value: formData[key] === field.value, emitMessage: false });
                            const fields = document.querySelectorAll("input[name='" + key + "']");
                            const fieldIdToActivate = this.formRadioButtonValueToId[formData[key]];
                            fields.forEach((field) => {
                                field.checked = field.id === fieldIdToActivate;
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
                        const textarea = document.querySelector("textarea[name='" + key + "']");
                        if (textarea) {
                            storage.setValue(textarea.id, key, { value: formData[key], emitMessage: false });
                            textarea.textContent = formData[key];
                        }
                        else {
                            const dropdown = document.querySelector("select[name='" + key + "']");
                            if (dropdown) {
                                storage.setValue(dropdown.id, key, { value: formData[key], emitMessage: false });
                                if (dropdown.multiple) {
                                    const options = this.formData[key];
                                    for (let i = 0; i < dropdown.options.length; i++) {
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
                        const fieldName = this.formIdToFieldName[key];
                        debugger;
                    }
                }
            }
        }
        for (const key in previousFormData) {
            if (previousFormData.hasOwnProperty(key)) {
                if (!formData.hasOwnProperty(key)) {
                    const field = document.querySelector("input[name='" + key + "']");
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
                        const textarea = document.querySelector("textarea[name='" + key + "']");
                        if (textarea) {
                            storage.setValue(textarea.id, key, { value: undefined, emitMessage: false });
                            textarea.textContent = null;
                        }
                    }
                }
            }
        }
    }
    loadComplete(pdf /* PDFDocumentProxy */) {
        /** This method has been inspired by https://medium.com/factory-mind/angular-pdf-forms-fa72b15c3fbd. Thanks, Jonny Fox! */
        this.hasSignature = false;
        this.buttonValues = {};
        for (let i = 1; i <= pdf.numPages; i++) {
            // track the current page
            let currentPage = null;
            pdf
                .getPage(i)
                .then((p) => {
                currentPage = p;
                // get the annotations of the current page
                return p.getAnnotations();
            })
                .then((annotations) => {
                // ugly cast due to missing typescript definitions
                // please contribute to complete @types/pdfjs-dist
                annotations
                    .filter((a) => a.subtype === 'Widget') // get the form field annotation only
                    .forEach((a) => {
                    // Additional PDF Form Field Types #567: Store the exportValue for the check boxes and buttonValue for radio buttons for quick reference
                    if (a.checkBox)
                        this.buttonValues[a.id] = a.exportValue;
                    else if (a.radioButton)
                        this.buttonValues[a.id] = a.buttonValue;
                    if (a.fieldType === 'Sig') {
                        this.ngZone.run(() => {
                            this.hasSignature = true;
                            setTimeout(() => {
                                const viewerContainer = document.querySelector('#viewerContainer');
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
        }
    }
    zoomToPageWidth(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window.PDFViewerApplication;
            const desiredCenterY = event.clientY;
            const previousScale = PDFViewerApplication.pdfViewer.currentScale;
            if (this.zoom !== pdfDefaultOptions.doubleTapZoomFactor && this.zoom + '%' !== pdfDefaultOptions.doubleTapZoomFactor) {
                this.previousZoom = this.zoom;
                this.zoom = pdfDefaultOptions.doubleTapZoomFactor; // by default: 'page-width';
                yield this.setZoom();
            }
            else {
                if (this.previousZoom) {
                    this.zoom = this.previousZoom;
                }
                else {
                    this.zoom = 'page-width';
                }
                yield this.setZoom();
            }
            const currentScale = PDFViewerApplication.pdfViewer.currentScale;
            const scaleCorrectionFactor = currentScale / previousScale - 1;
            const rect = PDFViewerApplication.pdfViewer.container.getBoundingClientRect();
            const dy = desiredCenterY - rect.top;
            PDFViewerApplication.pdfViewer.container.scrollTop += dy * scaleCorrectionFactor;
        });
    }
}
NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
/** @nocollapse */ NgxExtendedPdfViewerComponent.ɵfac = function NgxExtendedPdfViewerComponent_Factory(t) { return new (t || NgxExtendedPdfViewerComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i2.Location), i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ NgxExtendedPdfViewerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: NgxExtendedPdfViewerComponent, selectors: [["ngx-extended-pdf-viewer"]], viewQuery: function NgxExtendedPdfViewerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PdfDummyComponentsComponent, 5);
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
        i0.ɵɵviewQuery(_c2, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dummyComponents = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.root = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.secondaryToolbarComponent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidebarComponent = _t.first);
    } }, hostBindings: function NgxExtendedPdfViewerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("contextmenu", function NgxExtendedPdfViewerComponent_contextmenu_HostBindingHandler() { return ctx.onContextMenu(); });
    } }, inputs: { customFindbarInputArea: "customFindbarInputArea", customToolbar: "customToolbar", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", customSecondaryToolbar: "customSecondaryToolbar", customSidebar: "customSidebar", customThumbnail: "customThumbnail", customFreeFloatingBar: "customFreeFloatingBar", enableDragAndDrop: "enableDragAndDrop", formData: "formData", pageViewMode: "pageViewMode", scrollMode: "scrollMode", authorization: "authorization", httpHeaders: "httpHeaders", contextMenuAllowed: "contextMenuAllowed", enablePrint: "enablePrint", delayFirstView: "delayFirstView", logLevel: "logLevel", enablePinchOnMobile: "enablePinchOnMobile", minifiedJSLibraries: "minifiedJSLibraries", printResolution: "printResolution", rotation: "rotation", src: "src", base64Src: "base64Src", height: "height", useBrowserLocale: "useBrowserLocale", backgroundColor: "backgroundColor", filenameForDownload: "filenameForDownload", ignoreKeyboard: "ignoreKeyboard", ignoreKeys: "ignoreKeys", acceptKeys: "acceptKeys", imageResourcesPath: "imageResourcesPath", localeFolderPath: "localeFolderPath", language: "language", listenToURL: "listenToURL", nameddest: "nameddest", password: "password", showUnverifiedSignatures: "showUnverifiedSignatures", startTabindex: "startTabindex", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", showFindButton: "showFindButton", showPagingButtons: "showPagingButtons", showZoomButtons: "showZoomButtons", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", showBookmarkButton: "showBookmarkButton", theme: "theme", showToolbar: "showToolbar", showSecondaryToolbarButton: "showSecondaryToolbarButton", showRotateButton: "showRotateButton", handTool: "handTool", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton", showBorders: "showBorders", spread: "spread", page: "page", pageLabel: "pageLabel", textLayer: "textLayer", zoom: "zoom", zoomLevels: "zoomLevels", maxZoom: "maxZoom", minZoom: "minZoom", _mobileFriendlyZoom: "_mobileFriendlyZoom", mobileFriendlyZoom: "mobileFriendlyZoom" }, outputs: { formDataChange: "formDataChange", progress: "progress", srcChange: "srcChange", scrollModeChange: "scrollModeChange", afterPrint: "afterPrint", beforePrint: "beforePrint", currentZoomFactor: "currentZoomFactor", rotationChange: "rotationChange", sidebarVisibleChange: "sidebarVisibleChange", handToolChange: "handToolChange", spreadChange: "spreadChange", thumbnailDrawn: "thumbnailDrawn", pageChange: "pageChange", pageLabelChange: "pageLabelChange", pagesLoaded: "pagesLoaded", pageRender: "pageRender", pageRendered: "pageRendered", pdfDownloaded: "pdfDownloaded", pdfLoaded: "pdfLoaded", pdfLoadingFailed: "pdfLoadingFailed", textLayerRendered: "textLayerRendered", updateFindMatchesCount: "updateFindMatchesCount", updateFindState: "updateFindState", zoomChange: "zoomChange" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 67, vars: 59, consts: [["rel", "resource", "type", "application/l10n", "origin", "ngx-extended-pdf-viewer", 4, "ngIf"], [4, "ngIf"], [3, "zoom", "width"], [1, "zoom"], ["root", ""], [1, "html"], [1, "loadingInProgress", "body"], ["id", "outerContainer", 3, "resize"], [1, "free-floating-bar"], [4, "ngTemplateOutlet"], [3, "sidebarPositionTop", "sidebarVisible", "showSidebarButton", "customSidebar", "customThumbnail", "thumbnailDrawn"], ["pdfsidebar", ""], ["id", "mainContainer"], [3, "customToolbar", "mobileFriendlyZoomScale", "primaryMenuVisible", "showBookmarkButton", "showDownloadButton", "showFindButton", "showHandToolButton", "showOpenFileButton", "showPrintButton", "showPagingButtons", "showPresentationModeButton", "showRotateButton", "showSecondaryToolbarButton", "showSidebarButton", "showZoomButtons", "textLayer", "toolbarMarginTop", "toolbarWidth", "zoomLevels"], [3, "customSecondaryToolbar", "secondaryToolbarTop", "mobileFriendlyZoomScale", "showPresentationModeButton", "showOpenFileButton", "showPrintButton", "showDownloadButton", "showBookmarkButton", "showPagingButtons", "showRotateButton", "showHandToolButton", "showScrollingButton", "showSpreadButton", "showPropertiesButton", "spreadChange", "secondaryMenuIsEmpty"], ["pdfSecondaryToolbarComponent", ""], [3, "findbarLeft", "findbarTop", "mobileFriendlyZoomScale", "showFindButton", "customFindbarInputArea", "customFindbarButtons"], ["id", "viewerContainer"], ["class", "unverified-signature-warning", 4, "ngIf"], ["id", "viewer", 1, "pdfViewer", 3, "dblclick"], ["id", "errorWrapper", "hidden", "true"], ["id", "errorMessageLeft"], ["id", "errorMessage"], ["type", "button", "id", "errorShowMore", "data-l10n-id", "error_more_info"], ["type", "button", "id", "errorShowLess", "data-l10n-id", "error_less_info", "hidden", "true"], ["id", "errorMessageRight"], ["type", "button", "id", "errorClose", "data-l10n-id", "error_close"], [1, "clearBoth"], ["id", "errorMoreInfo", "hidden", "true", "readonly", "readonly"], ["id", "overlayContainer", 1, "hidden"], ["id", "passwordOverlay", 1, "container", "hidden"], [1, "dialog"], [1, "row"], ["id", "passwordText", "data-l10n-id", "password_label"], ["id", "password", 1, "toolbarField"], [1, "buttonRow"], ["type", "button", "id", "passwordCancel", 1, "overlayButton"], ["data-l10n-id", "password_cancel"], ["type", "button", "id", "passwordSubmit", 1, "overlayButton"], ["data-l10n-id", "password_ok"], ["id", "documentPropertiesOverlay", 1, "container", "hidden"], ["id", "printServiceOverlay", 1, "container", "hidden"], ["data-l10n-id", "print_progress_message"], ["value", "0", "max", "100"], ["data-l10n-id", "print_progress_percent", "data-l10n-args", "{ \"progress\": 0 }", 1, "relative-progress"], ["type", "button", "id", "printCancel", 1, "overlayButton"], ["data-l10n-id", "print_progress_close"], ["id", "printContainer"], ["defaultFreeFloatingBar", ""], ["rel", "resource", "type", "application/l10n", "origin", "ngx-extended-pdf-viewer"], [1, "unverified-signature-warning"]], template: function NgxExtendedPdfViewerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NgxExtendedPdfViewerComponent_link_0_Template, 1, 1, "link", 0);
        i0.ɵɵtemplate(1, NgxExtendedPdfViewerComponent_pdf_dark_theme_1_Template, 1, 0, "pdf-dark-theme", 1);
        i0.ɵɵtemplate(2, NgxExtendedPdfViewerComponent_pdf_light_theme_2_Template, 1, 0, "pdf-light-theme", 1);
        i0.ɵɵelement(3, "pdf-dynamic-css", 2);
        i0.ɵɵelementStart(4, "div", 3, 4);
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelementStart(7, "div", 6);
        i0.ɵɵelementStart(8, "div", 7);
        i0.ɵɵlistener("resize", function NgxExtendedPdfViewerComponent_Template_div_resize_8_listener() { return ctx.onResize(); }, false, i0.ɵɵresolveWindow);
        i0.ɵɵelementStart(9, "div", 8);
        i0.ɵɵtemplate(10, NgxExtendedPdfViewerComponent_ng_content_10_Template, 1, 0, "ng-content", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "pdf-sidebar", 10, 11);
        i0.ɵɵlistener("thumbnailDrawn", function NgxExtendedPdfViewerComponent_Template_pdf_sidebar_thumbnailDrawn_11_listener($event) { return ctx.thumbnailDrawn.emit($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 12);
        i0.ɵɵelement(14, "pdf-dummy-components");
        i0.ɵɵelement(15, "pdf-toolbar", 13);
        i0.ɵɵelementStart(16, "pdf-secondary-toolbar", 14, 15);
        i0.ɵɵlistener("spreadChange", function NgxExtendedPdfViewerComponent_Template_pdf_secondary_toolbar_spreadChange_16_listener($event) { return ctx.onSpreadChange($event); })("secondaryMenuIsEmpty", function NgxExtendedPdfViewerComponent_Template_pdf_secondary_toolbar_secondaryMenuIsEmpty_16_listener($event) { return ctx.onSecondaryMenuIsEmpty($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "pdf-findbar", 16);
        i0.ɵɵelement(19, "pdf-context-menu");
        i0.ɵɵelementStart(20, "div", 17);
        i0.ɵɵtemplate(21, NgxExtendedPdfViewerComponent_div_21_Template, 4, 6, "div", 18);
        i0.ɵɵelementStart(22, "div", 19);
        i0.ɵɵlistener("dblclick", function NgxExtendedPdfViewerComponent_Template_div_dblclick_22_listener($event) { return ctx.zoomToPageWidth($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 20);
        i0.ɵɵelementStart(24, "div", 21);
        i0.ɵɵelement(25, "span", 22);
        i0.ɵɵelementStart(26, "button", 23);
        i0.ɵɵtext(27, " More Information ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "button", 24);
        i0.ɵɵtext(29, " Less Information ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div", 25);
        i0.ɵɵelementStart(31, "button", 26);
        i0.ɵɵtext(32, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(33, "div", 27);
        i0.ɵɵelement(34, "textarea", 28);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "div", 29);
        i0.ɵɵelementStart(36, "div", 30);
        i0.ɵɵelementStart(37, "div", 31);
        i0.ɵɵelementStart(38, "div", 32);
        i0.ɵɵelementStart(39, "p", 33);
        i0.ɵɵtext(40, " Enter the password to open this PDF file: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "div", 32);
        i0.ɵɵelement(42, "input", 34);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "div", 35);
        i0.ɵɵelementStart(44, "button", 36);
        i0.ɵɵelementStart(45, "span", 37);
        i0.ɵɵtext(46, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "button", 38);
        i0.ɵɵelementStart(48, "span", 39);
        i0.ɵɵtext(49, "OK");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(50, "pdf-document-properties-overlay", 40);
        i0.ɵɵelementStart(51, "div", 41);
        i0.ɵɵelementStart(52, "div", 31);
        i0.ɵɵelementStart(53, "div", 32);
        i0.ɵɵelementStart(54, "span", 42);
        i0.ɵɵtext(55, "Preparing document for printing\u2026");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "div", 32);
        i0.ɵɵelement(57, "progress", 43);
        i0.ɵɵelementStart(58, "span", 44);
        i0.ɵɵtext(59, "0%");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(60, "div", 35);
        i0.ɵɵelementStart(61, "button", 45);
        i0.ɵɵelementStart(62, "span", 46);
        i0.ɵɵtext(63, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(64, "div", 47);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(65, NgxExtendedPdfViewerComponent_ng_template_65_Template, 0, 0, "ng-template", null, 48, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r8 = i0.ɵɵreference(66);
        i0.ɵɵproperty("ngIf", ctx.useBrowserLocale);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.theme === "dark");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.theme === "light");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("zoom", ctx.mobileFriendlyZoomScale)("width", ctx.toolbarWidthInPixels);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", ctx.minHeight ? ctx.minHeight : ctx.height);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("background-color", ctx.backgroundColor);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customFreeFloatingBar ? ctx.customFreeFloatingBar : _r8);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("sidebarPositionTop", ctx.sidebarPositionTop)("sidebarVisible", ctx.sidebarVisible)("showSidebarButton", ctx.showSidebarButton)("customSidebar", ctx.customSidebar)("customThumbnail", ctx.customThumbnail);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("customToolbar", ctx.customToolbar)("mobileFriendlyZoomScale", ctx.mobileFriendlyZoomScale)("primaryMenuVisible", ctx.primaryMenuVisible)("showBookmarkButton", ctx.showBookmarkButton)("showDownloadButton", ctx.showDownloadButton)("showFindButton", ctx.showFindButton)("showHandToolButton", ctx.showHandToolButton)("showOpenFileButton", ctx.showOpenFileButton)("showPrintButton", ctx.showPrintButton && ctx.enablePrint)("showPagingButtons", ctx.showPagingButtons)("showPresentationModeButton", ctx.showPresentationModeButton)("showRotateButton", ctx.showRotateButton)("showSecondaryToolbarButton", ctx.showSecondaryToolbarButton && !ctx.hideKebabMenuForSecondaryToolbar)("showSidebarButton", ctx.showSidebarButton)("showZoomButtons", ctx.showZoomButtons)("textLayer", ctx.textLayer)("toolbarMarginTop", ctx.toolbarMarginTop)("toolbarWidth", ctx.toolbarWidth)("zoomLevels", ctx.zoomLevels);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("customSecondaryToolbar", ctx.customSecondaryToolbar)("secondaryToolbarTop", ctx.secondaryToolbarTop)("mobileFriendlyZoomScale", ctx.mobileFriendlyZoomScale)("showPresentationModeButton", ctx.showPresentationModeButton)("showOpenFileButton", ctx.showOpenFileButton)("showPrintButton", ctx.showPrintButton && ctx.enablePrint)("showDownloadButton", ctx.showDownloadButton)("showBookmarkButton", ctx.showBookmarkButton)("showPagingButtons", ctx.showPagingButtons)("showRotateButton", ctx.showRotateButton)("showHandToolButton", ctx.showHandToolButton)("showScrollingButton", ctx.showScrollingButton)("showSpreadButton", ctx.showSpreadButton)("showPropertiesButton", ctx.showPropertiesButton);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("findbarLeft", ctx.findbarLeft)("findbarTop", ctx.findbarTop)("mobileFriendlyZoomScale", ctx.mobileFriendlyZoomScale)("showFindButton", ctx.showFindButton)("customFindbarInputArea", ctx.customFindbarInputArea)("customFindbarButtons", ctx.customFindbarButtons);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("top", ctx.viewerPositionTop);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasSignature && ctx.showUnverifiedSignatures);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("background-color", ctx.backgroundColor);
    } }, directives: [i2.NgIf, i3.DynamicCssComponent, i2.NgTemplateOutlet, i4.PdfSidebarComponent, i5.PdfDummyComponentsComponent, i6.PdfToolbarComponent, i7.PdfSecondaryToolbarComponent, i8.PdfFindbarComponent, i9.PdfContextMenuComponent, i10.PdfDocumentPropertiesOverlayComponent, i11.PdfDarkThemeComponent, i12.PdfLightThemeComponent], pipes: [i2.AsyncPipe, i13.TranslatePipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxExtendedPdfViewerComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-extended-pdf-viewer',
                templateUrl: './ngx-extended-pdf-viewer.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PDFNotificationService }, { type: i2.Location }, { type: i0.ElementRef }]; }, { dummyComponents: [{
            type: ViewChild,
            args: [PdfDummyComponentsComponent]
        }], root: [{
            type: ViewChild,
            args: ['root']
        }], customFindbarInputArea: [{
            type: Input
        }], customToolbar: [{
            type: Input
        }], customFindbar: [{
            type: Input
        }], customFindbarButtons: [{
            type: Input
        }], customSecondaryToolbar: [{
            type: Input
        }], customSidebar: [{
            type: Input
        }], customThumbnail: [{
            type: Input
        }], customFreeFloatingBar: [{
            type: Input
        }], enableDragAndDrop: [{
            type: Input
        }], formData: [{
            type: Input
        }], formDataChange: [{
            type: Output
        }], pageViewMode: [{
            type: Input
        }], progress: [{
            type: Output
        }], secondaryToolbarComponent: [{
            type: ViewChild,
            args: ['pdfSecondaryToolbarComponent']
        }], sidebarComponent: [{
            type: ViewChild,
            args: ['pdfsidebar']
        }], srcChange: [{
            type: Output
        }], scrollMode: [{
            type: Input
        }], scrollModeChange: [{
            type: Output
        }], authorization: [{
            type: Input
        }], httpHeaders: [{
            type: Input
        }], contextMenuAllowed: [{
            type: Input
        }], afterPrint: [{
            type: Output
        }], beforePrint: [{
            type: Output
        }], currentZoomFactor: [{
            type: Output
        }], enablePrint: [{
            type: Input
        }], delayFirstView: [{
            type: Input
        }], logLevel: [{
            type: Input
        }], enablePinchOnMobile: [{
            type: Input
        }], minifiedJSLibraries: [{
            type: Input
        }], printResolution: [{
            type: Input
        }], rotation: [{
            type: Input
        }], rotationChange: [{
            type: Output
        }], src: [{
            type: Input
        }], base64Src: [{
            type: Input
        }], height: [{
            type: Input
        }], useBrowserLocale: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }], filenameForDownload: [{
            type: Input
        }], ignoreKeyboard: [{
            type: Input
        }], ignoreKeys: [{
            type: Input
        }], acceptKeys: [{
            type: Input
        }], imageResourcesPath: [{
            type: Input
        }], localeFolderPath: [{
            type: Input
        }], language: [{
            type: Input
        }], listenToURL: [{
            type: Input
        }], nameddest: [{
            type: Input
        }], password: [{
            type: Input
        }], showUnverifiedSignatures: [{
            type: Input
        }], startTabindex: [{
            type: Input
        }], showSidebarButton: [{
            type: Input
        }], sidebarVisible: [{
            type: Input
        }], sidebarVisibleChange: [{
            type: Output
        }], showFindButton: [{
            type: Input
        }], showPagingButtons: [{
            type: Input
        }], showZoomButtons: [{
            type: Input
        }], showPresentationModeButton: [{
            type: Input
        }], showOpenFileButton: [{
            type: Input
        }], showPrintButton: [{
            type: Input
        }], showDownloadButton: [{
            type: Input
        }], showBookmarkButton: [{
            type: Input
        }], theme: [{
            type: Input
        }], showToolbar: [{
            type: Input
        }], showSecondaryToolbarButton: [{
            type: Input
        }], showRotateButton: [{
            type: Input
        }], handTool: [{
            type: Input
        }], handToolChange: [{
            type: Output
        }], showHandToolButton: [{
            type: Input
        }], showScrollingButton: [{
            type: Input
        }], showSpreadButton: [{
            type: Input
        }], showPropertiesButton: [{
            type: Input
        }], showBorders: [{
            type: Input
        }], spread: [{
            type: Input
        }], spreadChange: [{
            type: Output
        }], thumbnailDrawn: [{
            type: Output
        }], page: [{
            type: Input
        }], pageChange: [{
            type: Output
        }], pageLabel: [{
            type: Input
        }], pageLabelChange: [{
            type: Output
        }], pagesLoaded: [{
            type: Output
        }], pageRender: [{
            type: Output
        }], pageRendered: [{
            type: Output
        }], pdfDownloaded: [{
            type: Output
        }], pdfLoaded: [{
            type: Output
        }], pdfLoadingFailed: [{
            type: Output
        }], textLayer: [{
            type: Input
        }], textLayerRendered: [{
            type: Output
        }], updateFindMatchesCount: [{
            type: Output
        }], updateFindState: [{
            type: Output
        }], zoom: [{
            type: Input
        }], zoomChange: [{
            type: Output
        }], zoomLevels: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], _mobileFriendlyZoom: [{
            type: Input
        }], mobileFriendlyZoom: [{
            type: Input
        }], onContextMenu: [{
            type: HostListener,
            args: ['contextmenu']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFJTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixZQUFZLEVBQ1osTUFBTSxFQUVOLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUXBGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsU0FBUyxFQUFzQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBaUIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ3pILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9C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LEtBQUs7WUFJQyxLQUFLO2tCQURYLEtBQUs7WUFJQyxXQUFXO2tCQURqQixLQUFLO1lBSUMsMEJBQTBCO2tCQURoQyxLQUFLO1lBT0MsZ0JBQWdCO2tCQUR0QixLQUFLO1lBR0MsUUFBUTtrQkFEZCxLQUFLO1lBR0MsY0FBYztrQkFEcEIsTUFBTTtZQUdBLGtCQUFrQjtrQkFEeEIsS0FBSztZQUdDLG1CQUFtQjtrQkFEekIsS0FBSztZQUdDLGdCQUFnQjtrQkFEdEIsS0FBSztZQUdDLG9CQUFvQjtrQkFEMUIsS0FBSztZQUdDLFdBQVc7a0JBRGpCLEtBQUs7WUFJQyxNQUFNO2tCQURaLEtBQUs7WUFJQyxZQUFZO2tCQURsQixNQUFNO1lBSUEsY0FBYztrQkFEcEIsTUFBTTtZQVVJLElBQUk7a0JBRGQsS0FBSztZQVdDLFVBQVU7a0JBRGhCLE1BQU07WUFJQSxTQUFTO2tCQURmLEtBQUs7WUFJQyxlQUFlO2tCQURyQixNQUFNO1lBSUEsV0FBVztrQkFEakIsTUFBTTtZQUlBLFVBQVU7a0JBRGhCLE1BQU07WUFJQSxZQUFZO2tCQURsQixNQUFNO1lBSUEsYUFBYTtrQkFEbkIsTUFBTTtZQUlBLFNBQVM7a0JBRGYsTUFBTTtZQUlBLGdCQUFnQjtrQkFEdEIsTUFBTTtZQUlBLFNBQVM7a0JBRGYsS0FBSztZQUlDLGlCQUFpQjtrQkFEdkIsTUFBTTtZQUlBLHNCQUFzQjtrQkFENUIsTUFBTTtZQUlBLGVBQWU7a0JBRHJCLE1BQU07WUFLQSxJQUFJO2tCQURWLEtBQUs7WUFJQyxVQUFVO2tCQURoQixNQUFNO1lBSUEsVUFBVTtrQkFEaEIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQU1HLG1CQUFtQjtrQkFBM0IsS0FBSztZQStCSyxrQkFBa0I7a0JBRDVCLEtBQUs7WUFvc0NDLGFBQWE7a0JBRG5CLFlBQVk7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBOZ1pvbmUsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIFBMQVRGT1JNX0lELFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkluaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2VzTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlcy1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQYWdlUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtcmVuZGVyZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZEb3dubG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtZG93bmxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBkZkxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IGdldFZlcnNpb25TdWZmaXgsIHBkZkRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1kZWZhdWx0LW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBTY2FsZUNoYW5naW5nRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9zY2FsZS1jaGFuZ2luZy1ldmVudCc7XHJcbmltcG9ydCB7IFBhZ2VzUm90YXRpb25FdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2VzLXJvdGF0aW9uLWV2ZW50JztcclxuaW1wb3J0IHsgRmlsZUlucHV0Q2hhbmdlZCB9IGZyb20gJy4vZXZlbnRzL2ZpbGUtaW5wdXQtY2hhbmdlZCc7XHJcbmltcG9ydCB7IFNpZGViYXJ2aWV3Q2hhbmdlIH0gZnJvbSAnLi9ldmVudHMvc2lkZWJhcnZpZXctY2hhbmdlZCc7XHJcbmltcG9ydCB7IEhhbmR0b29sQ2hhbmdlZCB9IGZyb20gJy4vZXZlbnRzL2hhbmR0b29sLWNoYW5nZWQnO1xyXG5pbXBvcnQgeyBQYWdlTnVtYmVyQ2hhbmdlIH0gZnJvbSAnLi9ldmVudHMvcGFnZS1udW1iZXItY2hhbmdlJztcclxuaW1wb3J0IHsgU2VydmljZVdvcmtlck9wdGlvbnNUeXBlIH0gZnJvbSAnLi9vcHRpb25zL3NlcnZpY2Utd29ya2VyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBWZXJib3NpdHlMZXZlbCB9IGZyb20gJy4vb3B0aW9ucy92ZXJib3NpdHktbGV2ZWwnO1xyXG5pbXBvcnQgeyBGaW5kU3RhdGUsIEZpbmRSZXN1bHRNYXRjaGVzQ291bnQsIEZpbmRSZXN1bHQgfSBmcm9tICcuL2V2ZW50cy9maW5kLXJlc3VsdCc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCB7IFBkZkN1cnNvclRvb2xzIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1jdXJzb3ItdG9vbHMnO1xyXG5pbXBvcnQgeyBUZXh0TGF5ZXJSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvdGV4dGxheWVyLXJlbmRlcmVkJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQaW5jaE9uTW9iaWxlU3VwcG9ydCB9IGZyb20gJy4vcGluY2gtb24tbW9iaWxlLXN1cHBvcnQnO1xyXG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2Nyb2xsTW9kZUNoYW5nZWRFdmVudCwgU2Nyb2xsTW9kZVR5cGUgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlcic7XHJcbmltcG9ydCB7IFBkZkRvY3VtZW50TG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9kb2N1bWVudC1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhckV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcHJvZ3Jlc3MtYmFyLWV2ZW50JztcclxuaW1wb3J0IHsgVW5pdFRvUHggfSBmcm9tICcuL3VuaXQtdG8tcHgnO1xyXG5pbXBvcnQgeyBQYWdlUmVuZGVyRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlLXJlbmRlci1ldmVudCc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IFNlcnZpY2VXb3JrZXJPcHRpb25zOiBTZXJ2aWNlV29ya2VyT3B0aW9uc1R5cGU7IC8vIGRlZmluZWQgaW4gdmlld2VyLmpzXHJcbmRlY2xhcmUgY2xhc3MgUmVzaXplT2JzZXJ2ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtOiAoKSA9PiB2b2lkKTtcclxuICBwdWJsaWMgb2JzZXJ2ZShkaXY6IEhUTUxFbGVtZW50KTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEVsZW1lbnRBbmRQb3NpdGlvbiB7XHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtRGF0YVR5cGUge1xyXG4gIFtmaWVsZE5hbWU6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmdbXTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIHN0YXRpYyBuZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgcHVibGljIG5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHVtbXkgY29tcG9uZW50cyBhcmUgaW5zZXJ0ZWQgYXV0b21hdGljYWxseSB3aGVuIHRoZSB1c2VyIGN1c3RvbWl6ZXMgdGhlIHRvb2xiYXJcclxuICAgKiB3aXRob3V0IGFkZGluZyBldmVyeSBvcmlnaW5hbCB0b29sYmFyIGl0ZW0uIFdpdGhvdXQgdGhlIGR1bW15IGNvbXBvbmVudHMsIHRoZVxyXG4gICAqIGluaXRpYWxpemF0aW9uIGNvZGUgb2YgcGRmLmpzIGNyYXNoZXMgYmVjYXVzZSBpdCBhc3N1bWUgdGhhdCBldmVyeSBzdGFuZGFyZCB3aWRnZXQgaXMgdGhlcmUuXHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZChQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQpXHJcbiAgcHVibGljIGR1bW15Q29tcG9uZW50czogUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50O1xyXG5cclxuICBAVmlld0NoaWxkKCdyb290JylcclxuICBwdWJsaWMgcm9vdDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBwaW5jaE9uTW9iaWxlU3VwcG9ydDogUGluY2hPbk1vYmlsZVN1cHBvcnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIC8qIFVJIHRlbXBsYXRlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJJbnB1dEFyZWE6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJCdXR0b25zOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21TZWNvbmRhcnlUb29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21TaWRlYmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21UaHVtYm5haWw6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZyZWVGbG9hdGluZ0JhcjogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZW5hYmxlRHJhZ0FuZERyb3AgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmb3JtRGF0YTogRm9ybURhdGFUeXBlID0ge307XHJcblxyXG4gIC8qKiBNYXBzIHRoZSBpbnRlcm5hbCBpZHMgb2YgdGhlIGFubm90YXRpb25zIG9mIHBkZi5qcyB0byB0aGVpciBmaWVsZCBuYW1lICovXHJcbiAgcHJpdmF0ZSBmb3JtSWRUb0ZpZWxkTmFtZSA9IHt9O1xyXG4gIHByaXZhdGUgZm9ybVJhZGlvQnV0dG9uVmFsdWVUb0lkID0ge307XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBmb3JtRGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybURhdGFUeXBlPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwYWdlVmlld01vZGU6ICdzaW5nbGUnIHwgJ2Jvb2snIHwgJ211bHRpcGxlJyB8ICdpbmZpbml0ZS1zY3JvbGwnIHwgc3RyaW5nID0gJ211bHRpcGxlJztcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHByb2dyZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0JhckV2ZW50PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdwZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50JylcclxuICBwcml2YXRlIHNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQ6IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BkZnNpZGViYXInKVxyXG4gIHByaXZhdGUgc2lkZWJhckNvbXBvbmVudDogUGRmU2lkZWJhckNvbXBvbmVudDtcclxuXHJcbiAgLyogcmVndWxhciBhdHRyaWJ1dGVzICovXHJcblxyXG4gIHByaXZhdGUgX3NyYzogc3RyaW5nIHwgQXJyYXlCdWZmZXIgfCBVaW50OEFycmF5IHwgeyByYW5nZTogYW55IH0gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzcmNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2Nyb2xsTW9kZTogU2Nyb2xsTW9kZVR5cGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzY3JvbGxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTY3JvbGxNb2RlVHlwZT4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYXV0aG9yaXphdGlvbjogT2JqZWN0IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBodHRwSGVhZGVyczogT2JqZWN0IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjb250ZXh0TWVudUFsbG93ZWQgPSB0cnVlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYWZ0ZXJQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGJlZm9yZVByaW50ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgY3VycmVudFpvb21GYWN0b3IgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgLyoqIFRoaXMgZmllbGQgc3RvcmVzIHRoZSBwcmV2aW91cyB6b29tIGxldmVsIGlmIHRoZSBwYWdlIGlzIGVubGFyZ2VkIHdpdGggYSBkb3VibGUtdGFwIG9yIGRvdWJsZS1jbGljayAqL1xyXG4gIHByaXZhdGUgcHJldmlvdXNab29tOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGVuYWJsZVByaW50ID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJldHdlZW4gaW5pdGlhbGl6aW5nIHRoZSBQREYgdmlld2VyIGFuZCBsb2FkaW5nIHRoZSBQREYgZmlsZS5cclxuICAgKiBNb3N0IHVzZXJzIGNhbiBsZXQgdGhpcyBwYXJhbWV0ZXIgc2FmZWx5IGF0IGl0J3MgZGVmYXVsdCB2YWx1ZSBvZiB6ZXJvLlxyXG4gICAqIFNldCB0aGlzIHRvIDEwMDAgb3IgaGlnaGVyIGlmIHlvdSBydW4gaW50byB0aW1pbmcgcHJvYmxlbXMgKHR5cGljYWxseSBjYXVzZWQgYnkgbG9hZGluZyB0aGUgbG9jYWxlIGZpbGVzXHJcbiAgICogYWZ0ZXIgdGhlIFBERiBmaWxlcywgc28gdGhleSBhcmUgbm90IGF2YWlsYWJsZSB3aGVuIHRoZSBQREYgdmlld2VyIGlzIGluaXRpYWxpemVkKS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBkZWxheUZpcnN0VmlldyA9IDA7XHJcblxyXG4gIC8qKiBzdG9yZSB0aGUgdGltZW91dCBpZCBzbyBpdCBjYW4gYmUgY2FuY2VsZWQgaWYgdXNlciBsZWF2ZXMgdGhlIHBhZ2UgYmVmb3JlIHRoZSBQREYgaXMgc2hvd24gKi9cclxuICBwcml2YXRlIGluaXRUaW1lb3V0OiBhbnk7XHJcblxyXG4gIC8qKiBIb3cgbWFueSBsb2cgbWVzc2FnZXMgc2hvdWxkIGJlIHByaW50ZWQ/XHJcbiAgICogTGVnYWwgdmFsdWVzOiBWZXJib3NpdHlMZXZlbC5JTkZPUyAoPSA1KSwgVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MgKD0gMSksIFZlcmJvc2l0eUxldmVsLkVSUk9SUyAoPSAwKSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxvZ0xldmVsID0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1M7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGVuYWJsZVBpbmNoT25Nb2JpbGUgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFVzZSB0aGUgbWluaWZpZWQgKG1pbmlmaWVkSlNMaWJyYXJpZXM9XCJ0cnVlXCIsIHdoaWNoIGlzIHRoZSBkZWZhdWx0KSBvciB0aGUgdXNlci1yZWFkYWJsZSBwZGYuanMgbGlicmFyeSAobWluaWZpZWRKU0xpYnJhcmllcz1cImZhbHNlXCIpICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbWluaWZpZWRKU0xpYnJhcmllcyA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBwcmltYXJ5TWVudVZpc2libGUgPSB0cnVlO1xyXG5cclxuICAvKiogb3B0aW9uIHRvIGluY3JlYXNlIChvciByZWR1Y2UpIHByaW50IHJlc29sdXRpb24uIERlZmF1bHQgaXMgMTUwIChkcGkpLiBTZW5zaWJsZSB2YWx1ZXNcclxuICAgKiBhcmUgMzAwLCA2MDAsIGFuZCAxMjAwLiBOb3RlIHRoZSBpbmNyZWFzZSBtZW1vcnkgY29uc3VtcHRpb24sIHdoaWNoIG1heSBldmVuIHJlc3VsdCBpbiBhIGJyb3dzZXIgY3Jhc2guICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcHJpbnRSZXNvbHV0aW9uID0gbnVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcm90YXRpb246IDAgfCA5MCB8IDE4MCB8IDI3MDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHJvdGF0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwwIHwgOTAgfCAxODAgfCAyNzA+KCk7XHJcblxyXG4gIHB1YmxpYyBoYXNTaWduYXR1cmU6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzcmModXJsOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IEJsb2IgfCBVaW50OEFycmF5IHwgVVJMIHwgeyByYW5nZTogYW55IH0pIHtcclxuICAgIGlmICh1cmwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgIHRoaXMuX3NyYyA9IHVybC5idWZmZXI7XHJcbiAgICB9IGVsc2UgaWYgKHVybCBpbnN0YW5jZW9mIFVSTCkge1xyXG4gICAgICB0aGlzLl9zcmMgPSB1cmwudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIHVybCBpbnN0YW5jZW9mIEJsb2IpIHtcclxuICAgICAgLy8gYWRkaXRpb25hbCBjaGVjayBpbnRyb2R1Y2VkIHRvIHN1cHBvcnQgc2VydmVyIHNpZGUgcmVuZGVyaW5nXHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNyYyA9IG5ldyBVaW50OEFycmF5KHJlYWRlci5yZXN1bHQgYXMgQXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICAgaWYgKE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbmNvbXBsZXRlbHlJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMub3BlblBERigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIChhc3luYyAoKSA9PiBhd2FpdCB0aGlzLm9wZW5QREYyKCkpKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZWxzZSBvcGVuUERGIGlzIGNhbGxlZCBsYXRlciwgc28gd2UgZG8gbm90aGluZyB0byBwcmV2ZW50IGxvYWRpbmcgdGhlIFBERiBmaWxlIHR3aWNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih1cmwpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLl9zcmMgPSB1cmw7XHJcbiAgICAgIGlmICh1cmwubGVuZ3RoID4gOTgwKSB7XHJcbiAgICAgICAgLy8gbWluaW1hbCBsZW5ndGggb2YgYSBiYXNlNjQgZW5jb2RlZCBQREZcclxuICAgICAgICBpZiAodXJsLmxlbmd0aCAlIDQgPT09IDApIHtcclxuICAgICAgICAgIGlmICgvXlthLXpBLVpcXGRcXC8rXSs9ezAsMn0kLy50ZXN0KHVybCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIFVSTCBsb29rcyBsaWtlIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLiBJZiBzbywgcGxlYXNlIHVzZSB0aGUgYXR0cmlidXRlIFtiYXNlNjRTcmNdIGluc3RlYWQgb2YgW3NyY10nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICh0aGlzLl9zcmMgYXMgYW55KSA9IHVybDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBiYXNlNjRTcmMoYmFzZTY0OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAoYmFzZTY0KSB7XHJcbiAgICAgIGNvbnN0IGJpbmFyeV9zdHJpbmcgPSB3aW5kb3cuYXRvYihiYXNlNjQpO1xyXG4gICAgICBjb25zdCBsZW4gPSBiaW5hcnlfc3RyaW5nLmxlbmd0aDtcclxuICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgYnl0ZXNbaV0gPSBiaW5hcnlfc3RyaW5nLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zcmMgPSBieXRlcy5idWZmZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zcmMgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgY29tYmluYXRpb24gb2YgaGVpZ2h0LCBtaW5IZWlnaHQsIGFuZCBhdXRvSGVpZ2h0IGVuc3VyZXMgdGhlIFBERiBoZWlnaHQgb2YgdGhlIFBERiB2aWV3ZXIgaXMgY2FsY3VsYXRlZCBjb3JyZWN0bHkgd2hlbiB0aGUgaGVpZ2h0IGlzIGEgcGVyY2VudGFnZS5cclxuICAgKiBCeSBkZWZhdWx0LCBtYW55IENTUyBmcmFtZXdvcmtzIG1ha2UgYSBkaXYgd2l0aCAxMDAlIGhhdmUgYSBoZWlnaHQgb3IgemVybyBwaXhlbHMuIGNoZWNrSGVpZ3RoKCkgZml4ZXMgdGhpcy5cclxuICAgKi9cclxuICBwcml2YXRlIGF1dG9IZWlnaHQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIG1pbkhlaWdodDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIF9oZWlnaHQgPSAnMTAwJSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBoZWlnaHQoaDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1pbkhlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuYXV0b0hlaWdodCA9IGZhbHNlO1xyXG4gICAgaWYgKGgpIHtcclxuICAgICAgdGhpcy5faGVpZ2h0ID0gaDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tIZWlnaHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhpcyBmbGFnIGlzIHRydWUsIHRoaXMgY29tcG9uZW50cyBhZGRzIGEgbGluayB0byB0aGUgbG9jYWxlIGFzc2V0cy4gVGhlIHBkZiB2aWV3ZXJcclxuICAgKiBzZWVzIHRoaXMgbGluayBhbmQgdXNlcyBpdCB0byBsb2FkIHRoZSBsb2NhbGUgZmlsZXMgYXV0b21hdGljYWxseS5cclxuICAgKiBAcGFyYW0gdXNlQnJvd3NlckxvY2FsZSBib29sZWFuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdXNlQnJvd3NlckxvY2FsZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSAnI2U4ZThlYic7XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBmaWxlIGFmdGVyIGNsaWNraW5nIFwiZG93bmxvYWRcIiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZpbGVuYW1lRm9yRG93bmxvYWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIHRoZSBrZXlib2FyZCBiaW5kaW5ncyBjb21wbGV0ZWx5ICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaWdub3JlS2V5Ym9hcmQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIGEgbGlzdCBvZiBrZXkgYmluZGluZ3MuICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaWdub3JlS2V5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGVuYWJsZSBhIGxpc3Qgb2Yga2V5IGJpbmRpbmdzIGV4cGxpY2l0bHkuIElmIHRoaXMgcHJvcGVydHkgaXMgc2V0LCBldmVyeSBvdGhlciBrZXkgYmluZGluZyBpcyBpZ25vcmVkLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGFjY2VwdEtleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBwdXQgdGhlIHZpZXdlcidzIHN2ZyBpbWFnZXMgaW50byBhbiBhcmJpdHJhcnkgZm9sZGVyICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaW1hZ2VSZXNvdXJjZXNQYXRoID0gJy4vJyArIHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlciArICcvaW1hZ2VzLyc7XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gcHV0IHRoZWlyIGxvY2FsZSBmb2xkZXIgaW50byBhbiBhcmJpdHJhcnkgZm9sZGVyICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbG9jYWxlRm9sZGVyUGF0aCA9ICcuLycgKyBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIgKyAnL2xvY2FsZSc7XHJcblxyXG4gIC8qKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBsb2NhbGUuIFRoaXMgbXVzdCBiZSB0aGUgY29tcGxldGUgbG9jYWxlIG5hbWUsIHN1Y2ggYXMgXCJlcy1FU1wiLiBUaGUgc3RyaW5nIGlzIGFsbG93ZWQgdG8gYmUgYWxsIGxvd2VyY2FzZS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsYW5ndWFnZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvKiogQnkgZGVmYXVsdCwgbGlzdGVuaW5nIHRvIHRoZSBVUkwgaXMgZGVhY3RpdmF0ZWQgYmVjYXVzZSBvZnRlbiB0aGUgYW5jaG9yIHRhZyBpcyB1c2VkIGZvciB0aGUgQW5ndWxhciByb3V0ZXIgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsaXN0ZW5Ub1VSTCA9IGZhbHNlO1xyXG5cclxuICAvKiogTmF2aWdhdGUgdG8gYSBjZXJ0YWluIFwibmFtZWQgZGVzdGluYXRpb25cIiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG5hbWVkZGVzdDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvKiogYWxsb3dzIHlvdSB0byBwYXNzIGEgcGFzc3dvcmQgdG8gcmVhZCBwYXNzd29yZC1wcm90ZWN0ZWQgZmlsZXMgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgX3Nob3dTaWRlYmFyQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIHZpZXdlclBvc2l0aW9uVG9wID0gJzMycHgnO1xyXG5cclxuICAvKiogcGRmLmpzIGNhbiBzaG93IHNpZ25hdHVyZXMsIGJ1dCBmYWlscyB0byB2ZXJpZnkgdGhlbS4gU28gdGhleSBhcmUgc3dpdGNoZWQgb2ZmIGJ5IGRlZmF1bHQuXHJcbiAgICogU2V0IFwiW3Nob3dVbnZlcmlmaWVkU2lnbmF0dXJlc11cIj1cInRydWVcIiB0byBkaXNwbGF5IGUtc2lnbmF0dXJlcyBub25ldGhlbGVzcy5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc3RhcnRUYWJpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgZ2V0IHNob3dTaWRlYmFyQnV0dG9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTaWRlYmFyQnV0dG9uO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc2hvd1NpZGViYXJCdXR0b24oc2hvdzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd1NpZGViYXJCdXR0b24gPSBzaG93O1xyXG4gICAgY29uc3QgaXNJRSA9IC9tc2llXFxzfHRyaWRlbnRcXC8vaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIGxldCBmYWN0b3IgPSAxO1xyXG4gICAgaWYgKGlzSUUpIHtcclxuICAgICAgZmFjdG9yID0gTnVtYmVyKCh0aGlzLl9tb2JpbGVGcmllbmRseVpvb20gfHwgJzEwMCcpLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9zaG93U2lkZWJhckJ1dHRvbikge1xyXG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gKDY4ICogZmFjdG9yKS50b1N0cmluZygpICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAnMHB4JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNpZGViYXJWaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc2lkZWJhclZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kQnV0dG9uOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQYWdpbmdCdXR0b25zID0gdHJ1ZTtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Wm9vbUJ1dHRvbnMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd09wZW5GaWxlQnV0dG9uID0gdHJ1ZTtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJpbnRCdXR0b24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbiA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0Jvb2ttYXJrQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdGhlbWU6ICdkYXJrJyB8ICdsaWdodCcgfCAnY3VzdG9tJyB8IHN0cmluZyA9ICdsaWdodCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dUb29sYmFyID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gPSB0cnVlO1xyXG5cclxuICAvKiogU2V0IGJ5IHRoZSBldmVudCAoc2Vjb25kYXJ5TWVudUlzRW1wdHkpICovXHJcbiAgcHVibGljIGhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dSb3RhdGVCdXR0b24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGhhbmRUb29sID0gdHJ1ZTtcclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgaGFuZFRvb2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0hhbmRUb29sQnV0dG9uID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1Njcm9sbGluZ0J1dHRvbiA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NwcmVhZEJ1dHRvbiA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1Byb3BlcnRpZXNCdXR0b24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dCb3JkZXJzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc3ByZWFkOiAnb2ZmJyB8ICdldmVuJyB8ICdvZGQnO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3ByZWFkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwnb2ZmJyB8ICdldmVuJyB8ICdvZGQnPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdGh1bWJuYWlsRHJhd24gPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlRodW1ibmFpbERyYXduRXZlbnQ+KCk7XHJcblxyXG4gIHByaXZhdGUgX3BhZ2U6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBwYWdlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBwYWdlKHA6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHApIHtcclxuICAgICAgLy8gc2lsZW50bHkgY29wZSB3aXRoIHN0cmluZ3NcclxuICAgICAgdGhpcy5fcGFnZSA9IE51bWJlcihwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3BhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwYWdlTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VMYWJlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZXNMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VzTG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlUmVuZGVyRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGRmRG93bmxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmRG93bmxvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGRmTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkxvYWRpbmdGYWlsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0ZXh0TGF5ZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB0ZXh0TGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGV4dExheWVyUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHVwZGF0ZUZpbmRNYXRjaGVzQ291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbmRSZXN1bHRNYXRjaGVzQ291bnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB1cGRhdGVGaW5kU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbmRTdGF0ZT4oKTtcclxuXHJcbiAgLyoqIExlZ2FsIHZhbHVlczogdW5kZWZpbmVkLCAnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgb3IgJzUwJyAob3IgYW55IG90aGVyIHBlcmNlbnRhZ2UpICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgem9vbTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgem9vbUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB6b29tTGV2ZWxzID0gWydhdXRvJywgJ3BhZ2UtYWN0dWFsJywgJ3BhZ2UtZml0JywgJ3BhZ2Utd2lkdGgnLCAwLjUsIDEsIDEuMjUsIDEuNSwgMiwgMywgNF07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1heFpvb20gPSAxMDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbWluWm9vbSA9IDAuMTtcclxuXHJcbiAgLyoqIFRoaXMgYXR0cmlidXRlIGFsbG93cyB5b3UgdG8gaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIFVJIGVsZW1lbnRzIHNvIHlvdSBjYW4gdXNlIHRoZW0gb24gc21hbGwgbW9iaWxlIGRldmljZXMuXHJcbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIF9tb2JpbGVGcmllbmRseVpvb206IHN0cmluZyA9ICcxMDAlJztcclxuXHJcbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gMTtcclxuXHJcbiAgcHVibGljIHRvb2xiYXJNYXJnaW5Ub3AgPSAnMHB4JztcclxuXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aCA9ICcxMDAlJztcclxuXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aEluUGl4ZWxzID0gMTAwO1xyXG5cclxuICBwdWJsaWMgc2Vjb25kYXJ5VG9vbGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgc2lkZWJhclBvc2l0aW9uVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxyXG4gIHB1YmxpYyBmaW5kYmFyVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxyXG4gIHB1YmxpYyBmaW5kYmFyTGVmdDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IFVzZWQgdG8gc3RvcmUgdGhlIGV4cG9ydGVkIHZhbHVlcyBvZiByYWRpbyBhbmQgY2hlY2tib3ggYnV0dG9uc1xyXG4gIHB1YmxpYyBidXR0b25WYWx1ZXM6IGFueSA9IHt9O1xyXG5cclxuICBwdWJsaWMgZ2V0IG1vYmlsZUZyaWVuZGx5Wm9vbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2JpbGVGcmllbmRseVpvb207XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgYXR0cmlidXRlcyBhbGxvd3MgeW91IHRvIGluY3JlYXNlIHRoZSBzaXplIG9mIHRoZSBVSSBlbGVtZW50cyBzbyB5b3UgY2FuIHVzZSB0aGVtIG9uIHNtYWxsIG1vYmlsZSBkZXZpY2VzLlxyXG4gICAqIFRoaXMgYXR0cmlidXRlIGlzIGEgc3RyaW5nIHdpdGggYSBwZXJjZW50IGNoYXJhY3RlciBhdCB0aGUgZW5kIChlLmcuIFwiMTUwJVwiKS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgbW9iaWxlRnJpZW5kbHlab29tKHpvb206IHN0cmluZykge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXHJcbiAgICBpZiAoem9vbSA9PSAndHJ1ZScpIHtcclxuICAgICAgem9vbSA9ICcxNTAlJztcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXHJcbiAgICB9IGVsc2UgaWYgKHpvb20gPT0gJ2ZhbHNlJyB8fCB6b29tID09PSB1bmRlZmluZWQgfHwgem9vbSA9PT0gbnVsbCkge1xyXG4gICAgICB6b29tID0gJzEwMCUnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbW9iaWxlRnJpZW5kbHlab29tID0gem9vbTtcclxuICAgIGxldCBmYWN0b3IgPSAxO1xyXG4gICAgaWYgKCFTdHJpbmcoem9vbSkuaW5jbHVkZXMoJyUnKSkge1xyXG4gICAgICB6b29tID0gMTAwICogTnVtYmVyKHpvb20pICsgJyUnO1xyXG4gICAgfVxyXG4gICAgZmFjdG9yID0gTnVtYmVyKCh6b29tIHx8ICcxMDAnKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcclxuICAgIHRoaXMubW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSBmYWN0b3I7XHJcbiAgICB0aGlzLnRvb2xiYXJXaWR0aCA9ICgxMDAgLyBmYWN0b3IpLnRvU3RyaW5nKCkgKyAnJSc7XHJcbiAgICB0aGlzLnRvb2xiYXJNYXJnaW5Ub3AgPSAoZmFjdG9yIC0gMSkgKiAxNiArICdweCc7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2h1dHRpbmdEb3duID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBjYWxjVmlld2VyUG9zaXRpb25Ub3AoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9vbGJhcicpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHRvb2xiYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgdG9wID0gdG9vbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICB0aGlzLnZpZXdlclBvc2l0aW9uVG9wID0gdG9wICsgJ3B4JztcclxuXHJcbiAgICBjb25zdCBmYWN0b3IgPSB0b3AgLyAzMztcclxuXHJcbiAgICB0aGlzLnNpZGViYXJQb3NpdGlvblRvcCA9ICgzMyArIDMzICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcclxuICAgIHRoaXMuc2Vjb25kYXJ5VG9vbGJhclRvcCA9ICgzMyArIDM4ICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcclxuICAgIHRoaXMuZmluZGJhclRvcCA9ICgzNCArIDU0ICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcclxuXHJcbiAgICBjb25zdCBmaW5kQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdGaW5kJyk7XHJcbiAgICBpZiAoZmluZEJ1dHRvbikge1xyXG4gICAgICBjb25zdCBjb250YWluZXJQb3NpdGlvbkxlZnQgPSB0b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIGNvbnN0IGZpbmRCdXR0b25Qb3NpdGlvbiA9IGZpbmRCdXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGxlZnQgPSBmaW5kQnV0dG9uUG9zaXRpb24ubGVmdCAtIGNvbnRhaW5lclBvc2l0aW9uTGVmdDtcclxuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9IGxlZnQgKyAncHgnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNob3dTaWRlYmFyQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAzNCArICgzMiAqIGZhY3RvcikudG9TdHJpbmcoKSArICdweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gJzBweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQsXHJcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBpT1NWZXJzaW9uUmVxdWlyZXNFUzUoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBtYXRjaCA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLm1hdGNoKC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Lyk7XHJcbiAgICBpZiAobWF0Y2ggIT09IHVuZGVmaW5lZCAmJiBtYXRjaCAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKSA8IDE0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmVlZHNFUzUoKSB7XHJcbiAgICBjb25zdCBpc0lFID0gISEoPGFueT53aW5kb3cpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKDxhbnk+ZG9jdW1lbnQpLmRvY3VtZW50TW9kZTtcclxuICAgIGNvbnN0IGlzRWRnZSA9IC9FZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICBjb25zdCBpc0lPczEzT3JCZWxvdyA9IHRoaXMuaU9TVmVyc2lvblJlcXVpcmVzRVM1KCk7XHJcbiAgICBsZXQgbmVlZHNFUzUgPSB0eXBlb2YgUmVhZGFibGVTdHJlYW0gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBQcm9taXNlWydhbGxTZXR0bGVkJ10gPT09ICd1bmRlZmluZWQnO1xyXG4gICAgbmVlZHNFUzUgPSBuZWVkc0VTNSB8fCBpc0lFIHx8IGlzRWRnZSB8fCBpc0lPczEzT3JCZWxvdyB8fCAhdGhpcy5uZ3hCcm93c2VyU3VwcG9ydHNOdWxsU2FmZUNoYWluaW5nKCk7XHJcbiAgICByZXR1cm4gbmVlZHNFUzU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5neEJyb3dzZXJTdXBwb3J0c051bGxTYWZlQ2hhaW5pbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISFQcm9taXNlWydhbGxTZXR0bGVkJ107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRWaWV3ZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXdpbmRvd1sncGRmanMtZGlzdC9idWlsZC9wZGYnXSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFZpZXdlcigpLCAyNSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgbmVlZHNFUzUgPSB0aGlzLm5lZWRzRVM1KCk7XHJcbiAgICAgIGNvbnN0IHN1ZmZpeCA9IHRoaXMubWluaWZpZWRKU0xpYnJhcmllcyA/ICcubWluLmpzJyA6ICcuanMnO1xyXG4gICAgICBjb25zdCBzY3JpcHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIGNvbnN0IGFzc2V0cyA9IHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlcjtcclxuICAgICAgY29uc3QgdmVyc2lvblN1ZmZpeCA9IGdldFZlcnNpb25TdWZmaXgoYXNzZXRzKTtcclxuXHJcbiAgICAgIGlmIChuZWVkc0VTNSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyB0aGUgRVM1IHZlcnNpb24gb2YgdGhlIFBERiB2aWV3ZXIuJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNjcmlwdDIuc3JjID0gdGhpcy5sb2NhdGlvbi5ub3JtYWxpemUobmVlZHNFUzUgPyBhc3NldHMgKyAnL3ZpZXdlci0nICsgdmVyc2lvblN1ZmZpeCArICctZXM1JyArIHN1ZmZpeCA6IGFzc2V0cyArICcvdmlld2VyLScgKyB2ZXJzaW9uU3VmZml4ICsgc3VmZml4KTtcclxuICAgICAgc2NyaXB0Mi50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgIHNjcmlwdDIuYXN5bmMgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdDIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICBsaW5rLmhyZWYgPSB0aGlzLmxvY2FsZUZvbGRlclBhdGggKyAnL2xvY2FsZS5wcm9wZXJ0aWVzJztcclxuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ29yaWdpbicsICduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlcicpO1xyXG4gICAgICBsaW5rLnJlbCA9ICdyZXNvdXJjZSc7XHJcbiAgICAgIGxpbmsudHlwZSA9ICdhcHBsaWNhdGlvbi9sMTBuJztcclxuICAgICAgY29uc3Qgd2lkZ2V0OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB3aWRnZXQuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5nZXRGb3JtVmFsdWUgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMuZ2V0Rm9ybVZhbHVlKGtleSk7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5zZXRGb3JtVmFsdWUgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuc2V0Rm9ybVZhbHVlKGtleSwgdmFsdWUpO1xyXG4gICAgICAod2luZG93IGFzIGFueSkuYXNzaWduRm9ybUlkQW5kRmllbGROYW1lID0gKGtleTogc3RyaW5nLCBmaWVsZE5hbWU6IHN0cmluZywgcmFkaW9CdXR0b25GaWVsZD86IHN0cmluZykgPT4gdGhpcy5hc3NpZ25Gb3JtSWRBbmRGaWVsZE5hbWUoa2V5LCBmaWVsZE5hbWUsIHJhZGlvQnV0dG9uRmllbGQpO1xyXG5cclxuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICB0aGlzLmxvYWRQZGZKcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkUGRmSnMoKSB7XHJcbiAgICBpZiAoIXdpbmRvd1sncGRmanMtZGlzdC9idWlsZC9wZGYnXSkge1xyXG4gICAgICBjb25zdCBuZWVkc0VTNSA9IHRoaXMubmVlZHNFUzUoKTtcclxuICAgICAgY29uc3Qgc3VmZml4ID0gdGhpcy5taW5pZmllZEpTTGlicmFyaWVzID8gJy5taW4uanMnIDogJy5qcyc7XHJcbiAgICAgIGlmICh0aGlzLm1pbmlmaWVkSlNMaWJyYXJpZXMpIHtcclxuICAgICAgICBpZiAoIXBkZkRlZmF1bHRPcHRpb25zLndvcmtlclNyYygpLmVuZHNXaXRoKCcubWluLmpzJykpIHtcclxuICAgICAgICAgIGNvbnN0IHNyYyA9IHBkZkRlZmF1bHRPcHRpb25zLndvcmtlclNyYygpO1xyXG4gICAgICAgICAgcGRmRGVmYXVsdE9wdGlvbnMud29ya2VyU3JjID0gKCkgPT4gc3JjLnJlcGxhY2UoJy5qcycsICcubWluLmpzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhc3NldHMgPSBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXI7XHJcbiAgICAgIGNvbnN0IHZlcnNpb25TdWZmaXggPSBnZXRWZXJzaW9uU3VmZml4KGFzc2V0cyk7XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzY3JpcHQuc3JjID0gdGhpcy5sb2NhdGlvbi5ub3JtYWxpemUobmVlZHNFUzUgPyBhc3NldHMgKyAnL3BkZi0nICsgdmVyc2lvblN1ZmZpeCArICctZXM1JyArIHN1ZmZpeCA6IGFzc2V0cyArICcvcGRmLScgKyB2ZXJzaW9uU3VmZml4ICsgc3VmZml4KTtcclxuICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfVxyXG4gICAgaWYgKCEod2luZG93IGFzIGFueSkud2ViVmlld2VyTG9hZCkge1xyXG4gICAgICB0aGlzLmxvYWRWaWV3ZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XHJcbiAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLndlYlZpZXdlckxvYWQpIHtcclxuICAgICAgICAgIHRoaXMuZG9Jbml0UERGVmlld2VyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ0FmdGVyVmlld0luaXQoKSwgNTApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3NpZ25UYWJpbmRleGVzKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhcnRUYWJpbmRleCkge1xyXG4gICAgICBjb25zdCByID0gdGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICByLmNsYXNzTGlzdC5hZGQoJ29mZnNjcmVlbicpO1xyXG4gICAgICB0aGlzLnNob3dFbGVtZW50c1JlY3Vyc2l2ZWx5KHIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHIpO1xyXG4gICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuY29sbGVjdEVsZW1lbnRQb3NpdGlvbnMociwgdGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQsIFtdKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChyKTtcclxuICAgICAgY29uc3Qgc29ydGVkID0gZWxlbWVudHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChhLnkgLSBiLnkgPiAxNSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiLnkgLSBhLnkgPiAxNSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYS54IC0gYi54O1xyXG4gICAgICB9KTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzb3J0ZWRbaV0uZWxlbWVudC50YWJJbmRleCA9IHRoaXMuc3RhcnRUYWJpbmRleCArIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0VsZW1lbnRzUmVjdXJzaXZlbHkocm9vdDogRWxlbWVudCk6IHZvaWQge1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblhYTFZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuWExWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbkxhcmdlVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5NZWRpdW1WaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblNtYWxsVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5UaW55VmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlWFhMVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlWExWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVMYXJnZVZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZU1lZGl1bVZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVNtYWxsVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlVGlueVZpZXcnKTtcclxuXHJcbiAgICBpZiAocm9vdCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IHJvb3QgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCB8fCByb290IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCByb290IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChyb290LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3QuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGMgPSByb290LmNoaWxkcmVuLml0ZW0oaSk7XHJcbiAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnRzUmVjdXJzaXZlbHkoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbGxlY3RFbGVtZW50UG9zaXRpb25zKGNvcHk6IEVsZW1lbnQsIG9yaWdpbmFsOiBFbGVtZW50LCBlbGVtZW50czogQXJyYXk8RWxlbWVudEFuZFBvc2l0aW9uPik6IEFycmF5PEVsZW1lbnRBbmRQb3NpdGlvbj4ge1xyXG4gICAgaWYgKGNvcHkgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgfHwgY29weSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgY29weSBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSBjb3B5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBlbGVtZW50QW5kUG9zID0ge1xyXG4gICAgICAgIGVsZW1lbnQ6IG9yaWdpbmFsLFxyXG4gICAgICAgIHg6IE1hdGgucm91bmQocmVjdC5sZWZ0KSxcclxuICAgICAgICB5OiBNYXRoLnJvdW5kKHJlY3QudG9wKSxcclxuICAgICAgfSBhcyBFbGVtZW50QW5kUG9zaXRpb247XHJcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudEFuZFBvcyk7XHJcbiAgICB9IGVsc2UgaWYgKGNvcHkuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29weS5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IGNvcHkuY2hpbGRyZW4uaXRlbShpKTtcclxuICAgICAgICBjb25zdCBvID0gb3JpZ2luYWwuY2hpbGRyZW4uaXRlbShpKTtcclxuICAgICAgICBpZiAoYyAmJiBvKSB7XHJcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuY29sbGVjdEVsZW1lbnRQb3NpdGlvbnMoYywgbywgZWxlbWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkb0luaXRQREZWaWV3ZXIoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGFuZ0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1t0eXBlPVwiYXBwbGljYXRpb24vbDEwblwiXScpO1xyXG4gICAgY29uc3QgbGFuZ0NvdW50ID0gbGFuZ0xpbmtzLmxlbmd0aDtcclxuXHJcbiAgICBpZiAobGFuZ0NvdW50ID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IGRpY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL2wxMG5cIl0nKTtcclxuICAgICAgaWYgKCFkaWN0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZUJyb3dzZXJMb2NhbGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcclxuICAgICAgICAgICAgXCJJZiB5b3Ugc2V0IHRoZSBhdHRyaWJ1dGUgJ3VzZUJyb3dzZXJMb2NhbGUnIHRvIGZhbHNlLCB5b3UgbXVzdCBwcm92aWRlIHRoZSB0cmFuc2xhdGlvbnMgeW91cnNlbGYgaW4gYSBzY3JpcHQgb3IgbGluayB0YWcuXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgZWFzaWVzdCB3YXkgdG8gZG8gdGhpcyBpcyB0byBhZGQgdGhlbSB0byB0aGUgaW5kZXguaHRtbC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy51c2VCcm93c2VyTG9jYWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcclxuICAgICAgICAgIFwiUGxlYXNlIHNldCB0aGUgYXR0cmlidXRlICd1c2VCcm93c2VyTG9jYWxlJyB0byBmYWxzZSBpZiB5b3UgcHJvdmlkZSB0aGUgdHJhbnNsYXRpb25zIHlvdXJzZWxmIGluIGEgc2NyaXB0IG9yIGxpbmsgdGFnLlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZUJyb3dzZXJMb2NhbGUpIHtcclxuICAgICAgY29uc3QgbyA9IGxhbmdMaW5rc1swXS5hdHRyaWJ1dGVzWydvcmlnaW4nXTtcclxuICAgICAgaWYgKG8gJiYgby52YWx1ZSAhPT0gJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXHJcbiAgICAgICAgICBcIlBsZWFzZSBzZXQgdGhlIGF0dHJpYnV0ZSAndXNlQnJvd3NlckxvY2FsZScgdG8gZmFsc2UgaWYgeW91IHByb3ZpZGUgdGhlIHRyYW5zbGF0aW9ucyB5b3Vyc2VsZiBpbiBhIHNjcmlwdCBvciBsaW5rIHRhZy5cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGUpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9jYWxpemVkJywgY2FsbGJhY2spO1xyXG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgIHRoaXMuY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCk7XHJcbiAgICAgICAgICB0aGlzLmFmdGVyTGlicmFyeUluaXQoKTtcclxuICAgICAgICAgIHRoaXMub3BlblBERigpO1xyXG4gICAgICAgICAgdGhpcy5hc3NpZ25UYWJpbmRleGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzLmRlbGF5Rmlyc3RWaWV3KTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2FmdGVycHJpbnQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5hZnRlclByaW50LmVtaXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmJlZm9yZVByaW50LmVtaXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvY2FsaXplZCcsIGNhbGxiYWNrKTtcclxuXHJcbiAgICBpZiAoTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UncmUgdHJ5aW5nIHRvIG9wZW4gdHdvIGluc3RhbmNlcyBvZiB0aGUgUERGIHZpZXdlci4gTW9zdCBsaWtlbHksIHRoaXMgd2lsbCByZXN1bHQgaW4gZXJyb3JzLlwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG9uTG9hZGVkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYnZpZXdlcmxvYWRlZCcsIG9uTG9hZGVkKTtcclxuICAgICAgaWYgKHRoaXMuZW5hYmxlUGluY2hPbk1vYmlsZSkge1xyXG4gICAgICAgIHRoaXMucGluY2hPbk1vYmlsZVN1cHBvcnQgPSBuZXcgUGluY2hPbk1vYmlsZVN1cHBvcnQodGhpcy5uZ1pvbmUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Vidmlld2VybG9hZGVkJywgb25Mb2FkZWQpO1xyXG5cclxuICAgIHRoaXMuYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShudWxsKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgLy8gVGhpcyBpbml0aWFsaXplcyB0aGUgd2Vidmlld2VyLCB0aGUgZmlsZSBtYXkgYmUgcGFzc2VkIGluIHRvIGl0IHRvIGluaXRpYWxpemUgdGhlIHZpZXdlciB3aXRoIGEgcGRmIGRpcmVjdGx5XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSB0aGlzLnNob3dUb29sYmFyO1xyXG4gICAgICAgIGNvbnN0IGhpZGVTZWNvbmRhcnlNZW51ID0gdGhpcy5oaWRlS2ViYWJNZW51Rm9yU2Vjb25kYXJ5VG9vbGJhciAmJiAhdGhpcy5zaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVTZWNvbmRhcnlNZW51KSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuaXNQcmltYXJ5TWVudVZpc2libGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnByaW1hcnlNZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmR1bW15Q29tcG9uZW50cy5hZGRNaXNzaW5nU3RhbmRhcmRXaWRnZXRzKCk7XHJcbiAgICAgICAgKDxhbnk+d2luZG93KS53ZWJWaWV3ZXJMb2FkKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmRlZmF1bHRVcmwgPSAnJzsgLy8gSUUgYnVnZml4XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsZW5hbWVGb3JEb3dubG9hZCkge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmZpbGVuYW1lRm9yRG93bmxvYWQgPSB0aGlzLmZpbGVuYW1lRm9yRG93bmxvYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2VuYWJsZURyYWdBbmREcm9wJywgdGhpcy5lbmFibGVEcmFnQW5kRHJvcCk7XHJcbiAgICAgICAgbGV0IGxhbmd1YWdlID0gdGhpcy5sYW5ndWFnZSA9PT0gXCJcIiA/IHVuZGVmaW5lZDogdGhpcy5sYW5ndWFnZTtcclxuICAgICAgICBpZiAoIWxhbmd1YWdlKSB7XHJcbiAgICAgICAgICBsYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnbG9jYWxlJywgbGFuZ3VhZ2UpO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2ltYWdlUmVzb3VyY2VzUGF0aCcsIHRoaXMuaW1hZ2VSZXNvdXJjZXNQYXRoKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdtaW5ab29tJywgdGhpcy5taW5ab29tKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdtYXhab29tJywgdGhpcy5tYXhab29tKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdwYWdlVmlld01vZGUnLCB0aGlzLnBhZ2VWaWV3TW9kZSk7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgndmVyYm9zaXR5JywgdGhpcy5sb2dMZXZlbCk7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnaW5pdGlhbFpvb20nLCB0aGlzLnpvb20pO1xyXG5cclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5pc1ZpZXdlckVtYmVkZGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIpIHtcclxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbnRDb250YWluZXInKTtcclxuICAgICAgICBpZiAocGMpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYXBwZW5kQ2hpbGQocGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICAvKiogTm90aWZpZXMgZXZlcnkgd2lkZ2V0IHRoYXQgaW1wbGVtZW50cyBvbkxpYnJhcnlJbml0KCkgdGhhdCB0aGUgUERGIHZpZXdlciBvYmplY3RzIGFyZSBhdmFpbGFibGUgKi9cclxuICBwcml2YXRlIGFmdGVyTGlicmFyeUluaXQoKSB7XHJcbiAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoZWNrSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnem9vbScpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLmF1dG9IZWlnaHQgfHwgY29udGFpbmVyLmNsaWVudEhlaWdodCA9PT0gMCkgJiYgdGhpcy5faGVpZ2h0LmluY2x1ZGVzKCclJykpIHtcclxuICAgICAgICAgIHRoaXMuYXV0b0hlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICBjb25zdCBhdmFpbGFibGUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICBjb25zdCByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgY29uc3QgdG9wID0gcmVjdC50b3A7XHJcbiAgICAgICAgICBsZXQgbWF4aW11bUhlaWdodCA9IGF2YWlsYWJsZSAtIHRvcDtcclxuICAgICAgICAgIC8vIHRha2UgdGhlIG1hcmdpbnMgYW5kIHBhZGRpbmdzIG9mIHRoZSBwYXJlbnQgY29udGFpbmVycyBpbnRvIGFjY291bnRcclxuICAgICAgICAgIGxldCBwYWRkaW5nID0gdGhpcy5jYWxjdWxhdGVCb3JkZXJNYXJnaW5nKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0IC09IHBhZGRpbmc7XHJcbiAgICAgICAgICBjb25zdCBmYWN0b3IgPSBOdW1iZXIodGhpcy5faGVpZ2h0LnJlcGxhY2UoJyUnLCAnJykpO1xyXG4gICAgICAgICAgbWF4aW11bUhlaWdodCA9IChtYXhpbXVtSGVpZ2h0ICogZmFjdG9yKSAvIDEwMDtcclxuICAgICAgICAgIGlmIChtYXhpbXVtSGVpZ2h0ID4gMTAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWluSGVpZ2h0ID0gbWF4aW11bUhlaWdodCArICdweCc7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1pbkhlaWdodCA9ICcxMDBweCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUJvcmRlck1hcmdpbmcoY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwpOiBudW1iZXIge1xyXG4gICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKTtcclxuXHJcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSBVbml0VG9QeC50b1B4KGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSk7XHJcbiAgICAgIGNvbnN0IG1hcmdpbiA9IFVuaXRUb1B4LnRvUHgoY29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20pO1xyXG4gICAgICBpZiAoY29udGFpbmVyLnN0eWxlLnpJbmRleCkge1xyXG4gICAgICAgIHJldHVybiBwYWRkaW5nICsgbWFyZ2luO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwYWRkaW5nICsgbWFyZ2luICsgdGhpcy5jYWxjdWxhdGVCb3JkZXJNYXJnaW5nKGNvbnRhaW5lci5wYXJlbnRFbGVtZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uU3ByZWFkQ2hhbmdlKG5ld1NwcmVhZDogJ29mZicgfCAnZXZlbicgfCAnb2RkJyk6IHZvaWQge1xyXG4gICAgdGhpcy5zcHJlYWRDaGFuZ2UuZW1pdChuZXdTcHJlYWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmF0ZVRleHRsYXllcklmTmVjZXNzYXJ5KG9wdGlvbnM6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGV4dExheWVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmhhbmRUb29sKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgcGRmRGVmYXVsdE9wdGlvbnMudGV4dExheWVyTW9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dExheWVyID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaG93RmluZEJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0b2RvIHJlbW92ZSB0aGlzIGhhY2s6XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdGaW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdGaW5kJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh2aWV3RmluZCkge1xyXG4gICAgICAgICAgICAgIHZpZXdGaW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmRiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZGJhcicpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoZmluZGJhcikge1xyXG4gICAgICAgICAgICAgIGZpbmRiYXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiA/IHBkZkRlZmF1bHRPcHRpb25zLnRleHRMYXllck1vZGUgOiAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24gfHwgdGhpcy5zaG93RmluZEJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAnSGlkaW5nIHRoZSBcImZpbmRcIiBidXR0b24gYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSBmaW5kIGJ1dHRvbi4nXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJoYW5kIHRvb2wgLyBzZWxlY3Rpb24gbW9kZVwiIG1lbnUgYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSB0aGUgbWVudSBpdGVtcy4nXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy50ZXh0TGF5ZXIpIHsgLy8gdG9kbzogaXMgdGhpcyBhIHJlZHVuZGFudCBjaGVjaz9cclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCBwZGZEZWZhdWx0T3B0aW9ucy50ZXh0TGF5ZXJNb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gcmVtb3ZlIHRoaXMgaGFjazpcclxuICAgICAgICAgICAgY29uc3Qgdmlld0ZpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld0ZpbmQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHZpZXdGaW5kKSB7XHJcbiAgICAgICAgICAgICAgdmlld0ZpbmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZmluZGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kYmFyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChmaW5kYmFyKSB7XHJcbiAgICAgICAgICAgICAgZmluZGJhci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgeyAvLyB0b2RvOiBpcyB0aGUgZWxzZSBicmFuY2ggZGVhZCBjb2RlP1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHRMYXllciA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignSGlkaW5nIHRoZSBcImZpbmRcIiBidXR0b24gYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSBmaW5kIGJ1dHRvbi4nKTtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zaG93SGFuZFRvb2xCdXR0b24pIHtcclxuICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJoYW5kIHRvb2wgLyBzZWxlY3Rpb24gbW9kZVwiIG1lbnUgYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSB0aGUgbWVudSBpdGVtcy4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIG92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgYXMgSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGRmRGVmYXVsdE9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucy5zZXQoa2V5LCBwZGZEZWZhdWx0T3B0aW9uc1trZXldKTtcclxuICAgIH1cclxuICAgIG9wdGlvbnMuc2V0KCdkaXNhYmxlUHJlZmVyZW5jZXMnLCB0cnVlKTtcclxuICAgIGF3YWl0IHRoaXMuc2V0Wm9vbSgpO1xyXG5cclxuICAgIG9wdGlvbnMuc2V0KCdpZ25vcmVLZXlib2FyZCcsIHRoaXMuaWdub3JlS2V5Ym9hcmQpO1xyXG4gICAgb3B0aW9ucy5zZXQoJ2lnbm9yZUtleXMnLCB0aGlzLmlnbm9yZUtleXMpO1xyXG4gICAgb3B0aW9ucy5zZXQoJ2FjY2VwdEtleXMnLCB0aGlzLmFjY2VwdEtleXMpO1xyXG4gICAgdGhpcy5hY3RpdmF0ZVRleHRsYXllcklmTmVjZXNzYXJ5KG9wdGlvbnMpO1xyXG5cclxuICAgIGlmICh0aGlzLnNjcm9sbE1vZGUgfHwgdGhpcy5zY3JvbGxNb2RlID09PSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbCkge1xyXG4gICAgICBvcHRpb25zLnNldCgnc2Nyb2xsTW9kZU9uTG9hZCcsIHRoaXMuc2Nyb2xsTW9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2lkZWJhclZpc2libGUgPSB0aGlzLnNpZGViYXJWaXNpYmxlO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuXHJcbiAgICBpZiAoc2lkZWJhclZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zaWRlYmFyVmlld09uTG9hZCA9IHNpZGViYXJWaXNpYmxlID8gMSA6IDA7XHJcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcuc2lkZWJhclZpZXdPbkxvYWQgPSBzaWRlYmFyVmlzaWJsZSA/IDEgOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIG9wdGlvbnMuc2V0KCdzaWRlYmFyVmlld09uTG9hZCcsIHRoaXMuc2lkZWJhclZpc2libGUgPyAxIDogMCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zcHJlYWQgPT09ICdldmVuJykge1xyXG4gICAgICBvcHRpb25zLnNldCgnc3ByZWFkTW9kZU9uTG9hZCcsIDIpO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAyO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ2V2ZW4nKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zcHJlYWQgPT09ICdvZGQnKSB7XHJcbiAgICAgIG9wdGlvbnMuc2V0KCdzcHJlYWRNb2RlT25Mb2FkJywgMSk7XHJcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2RkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcHRpb25zLnNldCgnc3ByZWFkTW9kZU9uTG9hZCcsIDApO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29mZicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJpbnRSZXNvbHV0aW9uKSB7XHJcbiAgICAgIG9wdGlvbnMuc2V0KCdwcmludFJlc29sdXRpb24nLCB0aGlzLnByaW50UmVzb2x1dGlvbik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaG93Qm9yZGVycyA9PT0gZmFsc2UpIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3JlbW92ZVBhZ2VCb3JkZXJzJywgIXRoaXMuc2hvd0JvcmRlcnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuUERGKCkge1xyXG4gICAgU2VydmljZVdvcmtlck9wdGlvbnMuc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzID0gdGhpcy5zaG93VW52ZXJpZmllZFNpZ25hdHVyZXM7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZW5hYmxlUHJpbnQgPSB0aGlzLmVuYWJsZVByaW50O1xyXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5fc3JjKSB7XHJcbiAgICAgIHRoaXMubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbmNvbXBsZXRlbHlJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm9uUmVzaXplKCk7XHJcbiAgICAgIGlmICghdGhpcy5saXN0ZW5Ub1VSTCkge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkxpbmtTZXJ2aWNlLnNldEhhc2ggPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgdGhpcy5zZWxlY3RDdXJzb3JUb29sKCk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndGV4dGxheWVycmVuZGVyZWQnLCAoeDogVGV4dExheWVyUmVuZGVyZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGV4dExheWVyUmVuZGVyZWQuZW1pdCh4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignc2Nyb2xsbW9kZWNoYW5nZWQnLCAoeDogU2Nyb2xsTW9kZUNoYW5nZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsTW9kZUNoYW5nZS5lbWl0KHgubW9kZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncHJvZ3Jlc3MnLCAoeDogUHJvZ3Jlc3NCYXJFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MuZW1pdCh4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXNsb2FkZWQnLCBhc3luYyAoeDogUGFnZXNMb2FkZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGFnZXNMb2FkZWQuZW1pdCh4KTtcclxuICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5pdGl0ZVNjcm9sbE1vZGUoKTtcclxuICAgICAgICBpZiAodGhpcy5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMucm90YXRpb24gIT09IG51bGwpIHtcclxuICAgICAgICAgIGNvbnN0IHIgPSBOdW1iZXIodGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgICBpZiAociA9PT0gMCB8fCByID09PSA5MCB8fCByID09PSAxODAgfHwgciA9PT0gMjcwKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XHJcbiAgICAgICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5hbWVkZGVzdCkge1xyXG4gICAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkxpbmtTZXJ2aWNlLm5hdmlnYXRlVG8odGhpcy5uYW1lZGRlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZSkge1xyXG4gICAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2UgPSBOdW1iZXIodGhpcy5wYWdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2VMYWJlbCkge1xyXG4gICAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsID0gdGhpcy5wYWdlTGFiZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNldFpvb20oKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlcmVuZGVyZWQnLCAoeDogUGFnZVJlbmRlcmVkRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wYWdlUmVuZGVyZWQuZW1pdCh4KTtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsYmFySW5Jbml0aXRlU2Nyb2xsTW9kZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VyZW5kZXInLCAoeDogUGFnZVJlbmRlckV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGFnZVJlbmRlci5lbWl0KHgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdkb3dubG9hZCcsICh4OiBQZGZEb3dubG9hZGVkRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wZGZEb3dubG9hZGVkLmVtaXQoeCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignc2NhbGVjaGFuZ2luZycsICh4OiBTY2FsZUNoYW5naW5nRXZlbnQpID0+IHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zdCBzY2FsZSA9ICh0aGlzLnJvb3QubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcignI3NjYWxlU2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBsZXQgdXNlclpvb21GYWN0b3IgPSAnJztcclxuICAgICAgICAgIGlmIChzY2FsZSkge1xyXG4gICAgICAgICAgICB1c2VyWm9vbUZhY3RvciA9IHNjYWxlLnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Wm9vbUZhY3Rvci5lbWl0KHguc2NhbGUpO1xyXG5cclxuICAgICAgICBjb25zdCBzY2FsZSA9ICh0aGlzLnJvb3QubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcignI3NjYWxlU2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IHVzZXJab29tRmFjdG9yID0gdGhpcy56b29tO1xyXG4gICAgICAgIGlmIChzY2FsZSkge1xyXG4gICAgICAgICAgdXNlclpvb21GYWN0b3IgPSBzY2FsZS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXJab29tRmFjdG9yICE9PSAnYXV0bycgJiYgdXNlclpvb21GYWN0b3IgIT09ICdwYWdlLWZpdCcgJiYgdXNlclpvb21GYWN0b3IgIT09ICdwYWdlLWFjdHVhbCcgJiYgdXNlclpvb21GYWN0b3IgIT09ICdwYWdlLXdpZHRoJykge1xyXG4gICAgICAgICAgdGhpcy56b29tID0geC5zY2FsZSAqIDEwMDtcclxuICAgICAgICAgIHRoaXMuem9vbUNoYW5nZS5lbWl0KHguc2NhbGUgKiAxMDApO1xyXG4gICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLnpvb21DaGFuZ2UuZW1pdCh4LnNjYWxlICogMTAwKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnpvb20gIT09IHVzZXJab29tRmFjdG9yKSB7XHJcbiAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIG9uZSBvZiB0aGUgdGV4dCB2YWx1ZXMgb2YgdGhlIHpvb20gc2VsZWN0IGRyb3Bkb3duXHJcbiAgICAgICAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh1c2VyWm9vbUZhY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdyb3RhdGlvbmNoYW5naW5nJywgKHg6IFBhZ2VzUm90YXRpb25FdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJvdGF0aW9uQ2hhbmdlLmVtaXQoeC5wYWdlc1JvdGF0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdmaWxlaW5wdXRjaGFuZ2UnLCAoeDogRmlsZUlucHV0Q2hhbmdlZCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwYXRoID0geC5maWxlSW5wdXQudmFsdWUucmVwbGFjZSgnQzpcXFxcZmFrZXBhdGhcXFxcJywgJycpO1xyXG4gICAgICAgICAgdGhpcy5zcmNDaGFuZ2UuZW1pdChwYXRoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdjdXJzb3J0b29sY2hhbmdlZCcsICh4OiBIYW5kdG9vbENoYW5nZWQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kVG9vbENoYW5nZS5lbWl0KHgudG9vbCA9PT0gUGRmQ3Vyc29yVG9vbHMuSEFORCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3NpZGViYXJ2aWV3Y2hhbmdlZCcsICh4OiBTaWRlYmFydmlld0NoYW5nZSkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNpZGViYXJWaXNpYmxlQ2hhbmdlLmVtaXQoeC52aWV3ID4gMCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaWRlYmFyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lkZWJhckNvbXBvbmVudC5zaG93VG9vbGJhcldoZW5OZWNlc3NhcnkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZG9jdW1lbnRsb2FkZWQnLCAocGRmTG9hZGVkRXZlbnQ6IFBkZkRvY3VtZW50TG9hZGVkRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2FkQ29tcGxldGUocGRmTG9hZGVkRXZlbnQuc291cmNlLnBkZkRvY3VtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBoaWRlU2lkZWJhclRvb2xiYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLnNpZGViYXJDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaWRlYmFyQ29tcG9uZW50LnNob3dUb29sYmFyV2hlbk5lY2Vzc2FyeSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ291dGxpbmVsb2FkZWQnLCBoaWRlU2lkZWJhclRvb2xiYXIpO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2F0dGFjaG1lbnRzbG9hZGVkJywgaGlkZVNpZGViYXJUb29sYmFyKTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdsYXllcnNsb2FkZWQnLCBoaWRlU2lkZWJhclRvb2xiYXIpO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZWZpbmRjb250cm9sc3RhdGUnLCAoeDogRmluZFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmICh4LnN0YXRlID09PSBGaW5kU3RhdGUuTk9UX0ZPVU5EKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmRNYXRjaGVzQ291bnQuZW1pdCh7IGN1cnJlbnQ6IDAsIHRvdGFsOiAwIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoeC5tYXRjaGVzQ291bnQudG90YWwpIHtcclxuICAgICAgICAgIHgubWF0Y2hlc0NvdW50Lm1hdGNoZXMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5fcGFnZU1hdGNoZXM7XHJcbiAgICAgICAgICB4Lm1hdGNoZXNDb3VudC5tYXRjaGVzTGVuZ3RoID0gUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuX3BhZ2VNYXRjaGVzTGVuZ3RoO1xyXG4gICAgICAgICAgeC5tYXRjaGVzQ291bnQubWF0Y2hlc0NvbG9yID0gUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuX3BhZ2VNYXRjaGVzQ29sb3I7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmRNYXRjaGVzQ291bnQuZW1pdCh4Lm1hdGNoZXNDb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy51cGRhdGVGaW5kU3RhdGUpIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlRmluZFN0YXRlLmVtaXQoeC5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZWZpbmRtYXRjaGVzY291bnQnLCAoeDogRmluZFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHgubWF0Y2hlc0NvdW50Lm1hdGNoZXMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5fcGFnZU1hdGNoZXM7XHJcbiAgICAgICAgeC5tYXRjaGVzQ291bnQubWF0Y2hlc0xlbmd0aCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlc0xlbmd0aDtcclxuICAgICAgICB4Lm1hdGNoZXNDb3VudC5tYXRjaGVzQ29sb3IgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5fcGFnZU1hdGNoZXNDb2xvcjtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZpbmRNYXRjaGVzQ291bnQuZW1pdCh4Lm1hdGNoZXNDb3VudCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VjaGFuZ2luZycsICh4OiBQYWdlTnVtYmVyQ2hhbmdlKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZUxhYmVsID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTGFiZWw7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgIT09IHRoaXMucGFnZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KGN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2VMYWJlbCAhPT0gdGhpcy5wYWdlTGFiZWwpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMYWJlbENoYW5nZS5lbWl0KGN1cnJlbnRQYWdlTGFiZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5jaGVja0hlaWdodCgpO1xyXG4gICAgICAvLyBvcGVuIGEgZmlsZSBpbiB0aGUgdmlld2VyXHJcbiAgICAgIGlmICghIXRoaXMuX3NyYykge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgdmVyYm9zaXR5OiB0aGlzLmxvZ0xldmVsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuX3NyY1sncmFuZ2UnXSkge1xyXG4gICAgICAgICAgb3B0aW9ucy5yYW5nZSA9IHRoaXMuX3NyY1sncmFuZ2UnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaHR0cEhlYWRlcnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB0aGlzLmh0dHBIZWFkZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hdXRob3JpemF0aW9uKSB7XHJcbiAgICAgICAgICBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcbiAgICAgICAgICBpZiAob3B0aW9ucy5odHRwSGVhZGVycykge1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuaHR0cEhlYWRlcnMuQXV0aG9yaXphdGlvbikge1xyXG4gICAgICAgICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRoaXMuYXV0aG9yaXphdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5odHRwSGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0aGlzLmF1dGhvcml6YXRpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLm9uRXJyb3IgPSAoZXJyb3I6IEVycm9yKSA9PiB0aGlzLnBkZkxvYWRpbmdGYWlsZWQuZW1pdChlcnJvcik7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ub3Blbih0aGlzLl9zcmMsIG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wZGZMb2FkZWQuZW1pdCh7IHBhZ2VzQ291bnQ6IFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2VzQ291bnQgfSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IGF3YWl0IHRoaXMuc2V0Wm9vbSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XHJcbiAgICAgICAgICAvLyBodXJyaWVkIHVzZXJzIHNvbWV0aW1lcyByZWxvYWQgdGhlIFBERiBiZWZvcmUgaXQgaGFzIGZpbmlzaGVkIGluaXRpYWxpemluZ1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZSkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gTnVtYmVyKHRoaXMucGFnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxiYXJJbkluaXRpdGVTY3JvbGxNb2RlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlID09PSAnaW5maW5pdGUtc2Nyb2xsJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB2aWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyJyk7XHJcbiAgICAgICAgaWYgKHZpZXdlcikge1xyXG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdmlld2VyLmNsaWVudEhlaWdodCArIDE3O1xyXG4gICAgICAgICAgY29uc3Qgem9vbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3pvb20nKVswXTtcclxuICAgICAgICAgIGlmICh0aGlzLnByaW1hcnlNZW51VmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodCArIDM1ICsgJ3B4JztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh6b29tKSB7XHJcbiAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+em9vbSkuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBvcGVuUERGMigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcblxyXG4gICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24uY2xvc2UoKTtcclxuXHJcbiAgICAvLyAjODAyIGNsZWFyIHRoZSBmb3JtIGRhdGE7IG90aGVyd2lzZSB0aGUgXCJkb3dubG9hZFwiIGRpYWxvZ3Mgb3BlbnNcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Py5hbm5vdGF0aW9uU3RvcmFnZT8ucmVzZXRNb2RpZmllZCgpO1xyXG4gICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xyXG4gICAgdGhpcy5mb3JtSWRUb0ZpZWxkTmFtZSA9IHt9O1xyXG4gICAgdGhpcy5mb3JtUmFkaW9CdXR0b25WYWx1ZVRvSWQgPSB7fTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICB2ZXJib3NpdHk6IHRoaXMubG9nTGV2ZWwsXHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuX3NyYyAmJiB0aGlzLl9zcmNbJ3JhbmdlJ10pIHtcclxuICAgICAgb3B0aW9ucy5yYW5nZSA9IHRoaXMuX3NyY1sncmFuZ2UnXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmh0dHBIZWFkZXJzKSB7XHJcbiAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB0aGlzLmh0dHBIZWFkZXJzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYXV0aG9yaXphdGlvbikge1xyXG4gICAgICBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcbiAgICAgIGlmIChvcHRpb25zLmh0dHBIZWFkZXJzKSB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmh0dHBIZWFkZXJzLkF1dGhvcml6YXRpb24pIHtcclxuICAgICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRoaXMuYXV0aG9yaXphdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3B0aW9ucy5odHRwSGVhZGVycyA9IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IHRoaXMuYXV0aG9yaXphdGlvbixcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5vcGVuKHRoaXMuX3NyYywgb3B0aW9ucykudGhlbihcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGRmTG9hZGVkLmVtaXQoeyBwYWdlc0NvdW50OiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlc0NvdW50IH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3I6IEVycm9yKSA9PiB0aGlzLnBkZkxvYWRpbmdGYWlsZWQuZW1pdChlcnJvcilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdEN1cnNvclRvb2woKSB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaGN1cnNvcnRvb2wnLCB7IHRvb2w6IHRoaXMuaGFuZFRvb2wgPyAxIDogMCB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBuZ09uRGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47IC8vIGZhc3QgZXNjYXBlIGZvciBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcclxuICAgIH1cclxuICAgICh3aW5kb3cgYXMgYW55KS5nZXRGb3JtVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAod2luZG93IGFzIGFueSkuc2V0Rm9ybVZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIHRoaXMuc2h1dHRpbmdEb3duID0gdHJ1ZTtcclxuXHJcbiAgICBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5pbml0VGltZW91dCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5pbml0VGltZW91dCk7XHJcbiAgICAgIHRoaXMuaW5pdFRpbWVvdXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24pIHtcclxuICAgICAgaWYgKHRoaXMucGluY2hPbk1vYmlsZVN1cHBvcnQpIHtcclxuICAgICAgICB0aGlzLnBpbmNoT25Nb2JpbGVTdXBwb3J0LmRlc3Ryb3lQaW5jaFpvb20oKTtcclxuICAgICAgICB0aGlzLnBpbmNoT25Nb2JpbGVTdXBwb3J0ID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAjODAyIGNsZWFyIHRoZSBmb3JtIGRhdGE7IG90aGVyd2lzZSB0aGUgXCJkb3dubG9hZFwiIGRpYWxvZ3Mgb3BlbnNcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQ/LmFubm90YXRpb25TdG9yYWdlPy5yZXNldE1vZGlmaWVkKCk7XHJcbiAgICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcclxuICAgICAgdGhpcy5mb3JtSWRUb0ZpZWxkTmFtZSA9IHt9O1xyXG4gICAgICB0aGlzLmZvcm1SYWRpb0J1dHRvblZhbHVlVG9JZCA9IHt9O1xyXG5cclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLmNsZWFudXApIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5jbGVhbnVwKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uX2NsZWFudXApIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5fY2xlYW51cCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5jbG9zZSgpO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIpIHtcclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5fYm91bmRFdmVudHMpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnVuYmluZFdpbmRvd0V2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidXMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cztcclxuICAgICAgICBpZiAoYnVzKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi51bmJpbmRFdmVudHMoKTtcclxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGJ1cy5fbGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChidXMuX2xpc3RlbmVyc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGJ1cy5fbGlzdGVuZXJzW2tleV07XHJcbiAgICAgICAgICAgICAgLy8gbm90IHN1cmUgaWYgdGhlIGZvciBsb29wIGlzIG5lY2Vzc2FyeSAtIGJ1dFxyXG4gICAgICAgICAgICAgIC8vIGl0IG1pZ2h0IGltcHJvdmUgZ2FyYmFnZSBjb2xsZWN0aW9uIGlmIHRoZSBcImxpc3RlbmVyc1wiXHJcbiAgICAgICAgICAgICAgLy8gYXJyYXkgaXMgc3RvcmVkIHNvbWV3aGVyZSBlbHNlXHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0W2ldID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBidXMuX2xpc3RlbmVyc1trZXldID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cyBhcyBhbnkpID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XHJcbiAgICBpZiAoYm9keVswXSkge1xyXG4gICAgICBjb25zdCB0b3BMZXZlbEVsZW1lbnRzID0gYm9keVswXS5jaGlsZHJlbjtcclxuICAgICAgZm9yIChsZXQgaSA9IHRvcExldmVsRWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBlID0gdG9wTGV2ZWxFbGVtZW50cy5pdGVtKGkpO1xyXG4gICAgICAgIGlmIChlICYmIGUuaWQgPT09ICdwcmludENvbnRhaW5lcicpIHtcclxuICAgICAgICAgIGJvZHlbMF0ucmVtb3ZlQ2hpbGQoZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlICYmIGUuaWQgPT09ICdmaWxlSW5wdXQnKSB7XHJcbiAgICAgICAgICBib2R5WzBdLnJlbW92ZUNoaWxkKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ByaW1hcnlNZW51VmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLnNob3dUb29sYmFyKSB7XHJcbiAgICAgIGNvbnN0IHZpc2libGUgPVxyXG4gICAgICAgIHRoaXMuc2hvd0Jvb2ttYXJrQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93RG93bmxvYWRCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93T3BlbkZpbGVCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dQYWdpbmdCdXR0b25zIHx8XHJcbiAgICAgICAgdGhpcy5zaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1ByaW50QnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93UHJvcGVydGllc0J1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1JvdGF0ZUJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93U2Nyb2xsaW5nQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93U3ByZWFkQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93U2lkZWJhckJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1pvb21CdXR0b25zO1xyXG5cclxuICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47IC8vIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgfVxyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgaWYgKE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgaWYgKCdzcmMnIGluIGNoYW5nZXMgfHwgJ2Jhc2U2NFNyYycgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICghIXRoaXMuX3NyYykge1xyXG4gICAgICAgICAgaWYgKHRoaXMubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbmNvbXBsZXRlbHlJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5QREYoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMub3BlblBERjIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gIzgwMiBjbGVhciB0aGUgZm9ybSBkYXRhOyBvdGhlcndpc2UgdGhlIFwiZG93bmxvYWRcIiBkaWFsb2dzIG9wZW5zXHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5hbm5vdGF0aW9uU3RvcmFnZS5yZXNldE1vZGlmaWVkKCk7XHJcbiAgICAgICAgICB0aGlzLmZvcm1EYXRhID0ge307XHJcbiAgICAgICAgICB0aGlzLmZvcm1JZFRvRmllbGROYW1lID0ge307XHJcbiAgICAgICAgICB0aGlzLmZvcm1SYWRpb0J1dHRvblZhbHVlVG9JZCA9IHt9O1xyXG5cclxuICAgICAgICAgIGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgnZW5hYmxlRHJhZ0FuZERyb3AnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdlbmFibGVEcmFnQW5kRHJvcCcsIHRoaXMuZW5hYmxlRHJhZ0FuZERyb3ApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ3pvb20nIGluIGNoYW5nZXMpIHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4gYXdhaXQgdGhpcy5zZXRab29tKCkpKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgnbWF4Wm9vbScgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21heFpvb20nLCB0aGlzLm1heFpvb20pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ21pblpvb20nIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdtaW5ab29tJywgdGhpcy5taW5ab29tKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdoYW5kVG9vbCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q3Vyc29yVG9vbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgncGFnZScgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdHJpcGxlLWVxdWFsc1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZSAhPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2UgPSB0aGlzLnBhZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgncGFnZUxhYmVsJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZUxhYmVsKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYWdlTGFiZWwgIT09IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsID0gdGhpcy5wYWdlTGFiZWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ3JvdGF0aW9uJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb24pIHtcclxuICAgICAgICAgIGNvbnN0IHIgPSBOdW1iZXIodGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgICBpZiAociA9PT0gMCB8fCByID09PSA5MCB8fCByID09PSAxODAgfHwgciA9PT0gMjcwKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoJ3Njcm9sbE1vZGUnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zY3JvbGxNb2RlIHx8IHRoaXMuc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUudmVydGljYWwpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zY3JvbGxNb2RlID0gTnVtYmVyKHRoaXMuc2Nyb2xsTW9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgnc2lkZWJhclZpc2libGUnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zaWRlYmFyVmlzaWJsZSkge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmU2lkZWJhci5vcGVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCdmaWxlbmFtZUZvckRvd25sb2FkJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmZpbGVuYW1lRm9yRG93bmxvYWQgPSB0aGlzLmZpbGVuYW1lRm9yRG93bmxvYWQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCduYW1lZGRlc3QnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5uYW1lZGRlc3QpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkxpbmtTZXJ2aWNlLm5hdmlnYXRlVG8odGhpcy5uYW1lZGRlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdzcHJlYWQnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJlYWQgPT09ICdldmVuJykge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc3ByZWFkTW9kZU9uTG9hZCA9IDI7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDI7XHJcbiAgICAgICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdldmVuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwcmVhZCA9PT0gJ29kZCcpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAxO1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAxO1xyXG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2RkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAwO1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAwO1xyXG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2ZmJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ2VuYWJsZVBpbmNoT25Nb2JpbGUnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoIWNoYW5nZXNbJ2VuYWJsZVBpbmNoT25Nb2JpbGUnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICAgIGlmIChjaGFuZ2VzWydlbmFibGVQaW5jaE9uTW9iaWxlJ10uY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzWydlbmFibGVQaW5jaE9uTW9iaWxlJ10ucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVQaW5jaE9uTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5waW5jaE9uTW9iaWxlU3VwcG9ydCA9IG5ldyBQaW5jaE9uTW9iaWxlU3VwcG9ydCh0aGlzLm5nWm9uZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGluY2hPbk1vYmlsZVN1cHBvcnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGluY2hPbk1vYmlsZVN1cHBvcnQuZGVzdHJveVBpbmNoWm9vbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waW5jaE9uTW9iaWxlU3VwcG9ydCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gdGhpcy5zaG93VG9vbGJhcjtcclxuICAgICAgaWYgKCF0aGlzLnNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uIHx8IHRoaXMuaGlkZUtlYmFiTWVudUZvclNlY29uZGFyeVRvb2xiYXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNQcmltYXJ5TWVudVZpc2libGUoKSkge1xyXG4gICAgICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpKTtcclxuICAgIH0gLy8gZW5kIG9mIGlmIChOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKVxyXG4gICAgdGhpcy5vblJlc2l6ZSgpO1xyXG5cclxuICAgIGlmICgncHJpbnRSZXNvbHV0aW9uJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5zZXQoJ3ByaW50UmVzb2x1dGlvbicsIHRoaXMucHJpbnRSZXNvbHV0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdpZ25vcmVLZXlib2FyZCcgaW4gY2hhbmdlcykge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdpZ25vcmVLZXlzJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoJ2FjY2VwdEtleXMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgnc2hvd0JvcmRlcnMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKCFjaGFuZ2VzWydzaG93Qm9yZGVycyddLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgICAgICAgIGNvbnN0IHZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3ZXInKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgIGlmICh0aGlzLnNob3dCb3JkZXJzKSB7XHJcbiAgICAgICAgICAgIHZpZXdlci5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVQYWdlQm9yZGVycycpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlld2VyLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVBhZ2VCb3JkZXJzJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgPSAhdGhpcy5zaG93Qm9yZGVycztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHpvb21FdmVudCA9IHtcclxuICAgICAgICAgICAgc291cmNlOiB2aWV3ZXIsXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXHJcbiAgICAgICAgICAgIHNjYWxlOiAoTnVtYmVyKHRoaXMuem9vbSkgfCAxMDApIC8gMTAwLFxyXG4gICAgICAgICAgICBwcmVzZXRWYWx1ZTogdGhpcy56b29tLFxyXG4gICAgICAgICAgfSBhcyBTY2FsZUNoYW5naW5nRXZlbnQ7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc2NhbGVjaGFuZ2luZycsIHpvb21FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uICYmIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50KSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuX3RyYW5zcG9ydC5tZXNzYWdlSGFuZGxlci5zZW5kKCdzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMnLCB0aGlzLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoJ2Zvcm1EYXRhJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmICghY2hhbmdlc1snZm9ybURhdGEnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZvcm1GaWVsZHModGhpcy5mb3JtRGF0YSwgY2hhbmdlc1snZm9ybURhdGEnXS5wcmV2aW91c1ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgnZW5hYmxlUHJpbnQnIGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKCFjaGFuZ2VzWydlbmFibGVQcmludCddLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmVuYWJsZVByaW50ID0gdGhpcy5lbmFibGVQcmludDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICAoJ2N1c3RvbUZpbmRiYXInIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbUZpbmRiYXInXS5pc0ZpcnN0Q2hhbmdlKCkpIHx8XHJcbiAgICAgICgnY3VzdG9tRmluZGJhckJ1dHRvbnMnIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbUZpbmRiYXJCdXR0b25zJ10uaXNGaXJzdENoYW5nZSgpKSB8fFxyXG4gICAgICAoJ2N1c3RvbUZpbmRiYXJJbnB1dEFyZWEnIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbUZpbmRiYXJJbnB1dEFyZWEnXS5pc0ZpcnN0Q2hhbmdlKCkpIHx8XHJcbiAgICAgICgnY3VzdG9tVG9vbGJhcicgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tVG9vbGJhciddLmlzRmlyc3RDaGFuZ2UoKSlcclxuICAgICkge1xyXG4gICAgICBpZiAodGhpcy5kdW1teUNvbXBvbmVudHMpIHtcclxuICAgICAgICB0aGlzLmR1bW15Q29tcG9uZW50cy5hZGRNaXNzaW5nU3RhbmRhcmRXaWRnZXRzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoJ2hlaWdodCcgaW4gY2hhbmdlcykge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBzZXRab29tKCkge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuXHJcbiAgICBsZXQgem9vbUFzTnVtYmVyID0gdGhpcy56b29tO1xyXG4gICAgaWYgKFN0cmluZyh6b29tQXNOdW1iZXIpLmVuZHNXaXRoKCclJykpIHtcclxuICAgICAgem9vbUFzTnVtYmVyID0gTnVtYmVyKFN0cmluZyh6b29tQXNOdW1iZXIpLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xyXG4gICAgfSBlbHNlIGlmICghaXNOYU4oTnVtYmVyKHpvb21Bc051bWJlcikpKSB7XHJcbiAgICAgIHpvb21Bc051bWJlciA9IE51bWJlcih6b29tQXNOdW1iZXIpIC8gMTAwO1xyXG4gICAgfVxyXG4gICAgaWYgKCF6b29tQXNOdW1iZXIpIHtcclxuICAgICAgaWYgKCFQREZWaWV3ZXJBcHBsaWNhdGlvbi5zdG9yZSkge1xyXG4gICAgICAgIC8vIEl0J3MgZGlmZmljdWx0IHRvIHByZXZlbnQgY2FsbGluZyB0aGlzIG1ldGhvZCB0byBlYXJseSwgc28gd2UgbmVlZCB0aGlzIGNoZWNrLlxyXG4gICAgICAgIC8vIHNldFpvb20oKSBpcyBjYWxsZWQgbGF0ZXIgYWdhaW4sIHdoZW4gdGhlIFBERiBkb2N1bWVudCBoYXMgYmVlbiBsb2FkZWQgYW5kIGl0c1xyXG4gICAgICAgIC8vIGZpbmdlcnByaW50IGhhcyBiZWVuIGNhbGN1bGF0ZWQuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXNlclNldHRpbmcgPSBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zdG9yZS5nZXQoJ3pvb20nKTtcclxuICAgICAgICBpZiAodXNlclNldHRpbmcpIHtcclxuICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKHVzZXJTZXR0aW5nKSkpIHtcclxuICAgICAgICAgICAgem9vbUFzTnVtYmVyID0gTnVtYmVyKHVzZXJTZXR0aW5nKSAvIDEwMDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHpvb21Bc051bWJlciA9IHVzZXJTZXR0aW5nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB6b29tQXNOdW1iZXIgPSAnYXV0byc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uKSB7XHJcbiAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2RlZmF1bHRab29tVmFsdWUnLCB6b29tQXNOdW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNjYWxlRHJvcGRvd25GaWVsZCA9ICh0aGlzLnJvb3QubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcignI3NjYWxlU2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgICBpZiAoc2NhbGVEcm9wZG93bkZpZWxkKSB7XHJcbiAgICAgIGlmICh0aGlzLnpvb20gPT09ICdhdXRvJyB8fCB0aGlzLnpvb20gPT09ICdwYWdlLWZpdCcgfHwgdGhpcy56b29tID09PSAncGFnZS1hY3R1YWwnIHx8IHRoaXMuem9vbSA9PT0gJ3BhZ2Utd2lkdGgnKSB7XHJcbiAgICAgICAgc2NhbGVEcm9wZG93bkZpZWxkLnZhbHVlID0gdGhpcy56b29tO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNjYWxlRHJvcGRvd25GaWVsZC52YWx1ZSA9ICdjdXN0b20nO1xyXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIHNjYWxlRHJvcGRvd25GaWVsZC5vcHRpb25zIGFzIGFueSkge1xyXG4gICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChOdW1iZXIoem9vbUFzTnVtYmVyKSAqIDEwMF8wMDApIC8gMTAwMCArICclJztcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFNjYWxlVmFsdWUgPSB6b29tQXNOdW1iZXIgfHwgJ2F1dG8nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGRmVmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHRtbCcpO1xyXG4gICAgaWYgKHBkZlZpZXdlciAmJiBwZGZWaWV3ZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0ZXJDb250YWluZXInKTtcclxuICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIHRoaXMudG9vbGJhcldpZHRoSW5QaXhlbHMgPSB3aWR0aDtcclxuICAgICAgICBpZiAodGhpcy5zZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQuY2hlY2tWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hlY2tIZWlnaHQoKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHRoaXMucmVtb3ZlU2Nyb2xsYmFySW5Jbml0aXRlU2Nyb2xsTW9kZSgpKTtcclxuICAgICAgY29uc3Qgdmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlcicpO1xyXG4gICAgICBpZiAodmlld2VyKSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh2aWV3ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcclxuICAgICAgY29uc29sZS5sb2coJ1Jlc2l6ZU9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScpXHJcbiAgcHVibGljIG9uQ29udGV4dE1lbnUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0TWVudUFsbG93ZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TZWNvbmRhcnlNZW51SXNFbXB0eShoaWRlS2ViYWJCdXR0b246IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaGlkZUtlYmFiTWVudUZvclNlY29uZGFyeVRvb2xiYXIgPSBoaWRlS2ViYWJCdXR0b247XHJcbiAgICBpZiAoaGlkZUtlYmFiQnV0dG9uKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1ByaW1hcnlNZW51VmlzaWJsZSgpKSB7XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEZvcm1WYWx1ZShrZXk6IHN0cmluZyk6IE9iamVjdCB7XHJcbiAgICByZXR1cm4geyB2YWx1ZTogdGhpcy5mb3JtRGF0YVtrZXldIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Rm9ybVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZm9ybURhdGEpIHtcclxuICAgICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZvcm1JZFRvRmllbGROYW1lW2tleV0pIHtcclxuICAgICAgLy8gcmFkaW9idXR0b25zXHJcbiAgICAgIHRoaXMuZm9ybURhdGFbdGhpcy5mb3JtSWRUb0ZpZWxkTmFtZVtrZXldXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZm9ybURhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZm9ybURhdGFDaGFuZ2UuZW1pdCh0aGlzLmZvcm1EYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3NpZ25Gb3JtSWRBbmRGaWVsZE5hbWUoa2V5OiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nIHwgYm9vbGVhbiwgcmFkaW9CdXR0b25GaWVsZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JtSWRUb0ZpZWxkTmFtZVtrZXldID0gZmllbGROYW1lO1xyXG4gICAgaWYgKHJhZGlvQnV0dG9uRmllbGQpIHtcclxuICAgICAgdGhpcy5mb3JtUmFkaW9CdXR0b25WYWx1ZVRvSWRbcmFkaW9CdXR0b25GaWVsZF0gPSBrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRm9ybUZpZWxkcyhmb3JtRGF0YTogT2JqZWN0LCBwcmV2aW91c0Zvcm1EYXRhOiBPYmplY3QpIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcblxyXG4gICAgaWYgKCFQREZWaWV3ZXJBcHBsaWNhdGlvbiB8fCAhUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQgfHwgIVBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50LmFubm90YXRpb25TdG9yYWdlKSB7XHJcbiAgICAgIC8vIG5nT25DaGFuZ2VzIGNhbGxzIHRoaXMgbWV0aG9kIHRvbyBlYXJseSAtIHNvIGp1c3QgaWdub3JlIGl0XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5hbm5vdGF0aW9uU3RvcmFnZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmb3JtRGF0YSkge1xyXG4gICAgICBpZiAoZm9ybURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIGlmIChmb3JtRGF0YVtrZXldICE9PSBwcmV2aW91c0Zvcm1EYXRhW2tleV0pIHtcclxuICAgICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J1wiICsga2V5ICsgXCInXVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgICAgICAgICBzdG9yYWdlLnNldFZhbHVlKGZpZWxkLmlkLCBrZXksIHsgdmFsdWU6IGZvcm1EYXRhW2tleV0gPT09IGZpZWxkLnZhbHVlLCBlbWl0TWVzc2FnZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J1wiICsga2V5ICsgXCInXVwiKTtcclxuICAgICAgICAgICAgICBjb25zdCBmaWVsZElkVG9BY3RpdmF0ZSA9IHRoaXMuZm9ybVJhZGlvQnV0dG9uVmFsdWVUb0lkW2Zvcm1EYXRhW2tleV1dO1xyXG4gICAgICAgICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZDogSFRNTElucHV0RWxlbWVudCkgID0+IHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLmNoZWNrZWQgPSBmaWVsZC5pZCA9PT0gZmllbGRJZFRvQWN0aXZhdGU7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgc3RvcmFnZS5zZXRWYWx1ZShmaWVsZC5pZCwga2V5LCB7IHZhbHVlOiBmb3JtRGF0YVtrZXldLCBlbWl0TWVzc2FnZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgZmllbGQuY2hlY2tlZCA9IGZvcm1EYXRhW2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc3RvcmFnZS5zZXRWYWx1ZShmaWVsZC5pZCwga2V5LCB7IHZhbHVlOiBmb3JtRGF0YVtrZXldLCBlbWl0TWVzc2FnZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgZmllbGQudmFsdWUgPSBmb3JtRGF0YVtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCFmaWVsZCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVtuYW1lPSdcIiArIGtleSArIFwiJ11cIik7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0VmFsdWUodGV4dGFyZWEuaWQsIGtleSwgeyB2YWx1ZTogZm9ybURhdGFba2V5XSwgZW1pdE1lc3NhZ2U6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgIHRleHRhcmVhLnRleHRDb250ZW50ID0gZm9ybURhdGFba2V5XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RbbmFtZT0nXCIgKyBrZXkgKyBcIiddXCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbDtcclxuICAgICAgICAgICAgICBpZiAoZHJvcGRvd24pIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0VmFsdWUoZHJvcGRvd24uaWQsIGtleSwgeyB2YWx1ZTogZm9ybURhdGFba2V5XSwgZW1pdE1lc3NhZ2U6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmZvcm1EYXRhW2tleV0gYXMgc3RyaW5nW107XHJcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJvcGRvd24ub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duLm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSBvcHRpb25zLmluZGV4T2YoZHJvcGRvd24ub3B0aW9uc1tpXS52YWx1ZSkgPj0gMDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgZHJvcGRvd24udmFsdWUgPSBmb3JtRGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHRoaXMuZm9ybUlkVG9GaWVsZE5hbWVba2V5XTtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcHJldmlvdXNGb3JtRGF0YSkge1xyXG4gICAgICBpZiAocHJldmlvdXNGb3JtRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgaWYgKCFmb3JtRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdcIiArIGtleSArIFwiJ11cIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMgZW50cnkgaGFzIGJlZW4gZGVsZXRlZFxyXG4gICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0VmFsdWUoZmllbGQuaWQsIGtleSwgeyB2YWx1ZTogZmFsc2UsIGVtaXRNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICBmaWVsZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc3RvcmFnZS5zZXRWYWx1ZShmaWVsZC5pZCwga2V5LCB7IHZhbHVlOiB1bmRlZmluZWQsIGVtaXRNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICBmaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCFmaWVsZCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVtuYW1lPSdcIiArIGtleSArIFwiJ11cIik7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0VmFsdWUodGV4dGFyZWEuaWQsIGtleSwgeyB2YWx1ZTogdW5kZWZpbmVkLCBlbWl0TWVzc2FnZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgdGV4dGFyZWEudGV4dENvbnRlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZENvbXBsZXRlKHBkZjogYW55IC8qIFBERkRvY3VtZW50UHJveHkgKi8pOiB2b2lkIHtcclxuICAgIC8qKiBUaGlzIG1ldGhvZCBoYXMgYmVlbiBpbnNwaXJlZCBieSBodHRwczovL21lZGl1bS5jb20vZmFjdG9yeS1taW5kL2FuZ3VsYXItcGRmLWZvcm1zLWZhNzJiMTVjM2ZiZC4gVGhhbmtzLCBKb25ueSBGb3ghICovXHJcbiAgICB0aGlzLmhhc1NpZ25hdHVyZSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uVmFsdWVzID0ge307XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGRmLm51bVBhZ2VzOyBpKyspIHtcclxuICAgICAgLy8gdHJhY2sgdGhlIGN1cnJlbnQgcGFnZVxyXG4gICAgICBsZXQgY3VycmVudFBhZ2U6IGFueSA9IG51bGw7XHJcbiAgICAgIHBkZlxyXG4gICAgICAgIC5nZXRQYWdlKGkpXHJcbiAgICAgICAgLnRoZW4oKHApID0+IHtcclxuICAgICAgICAgIGN1cnJlbnRQYWdlID0gcDtcclxuXHJcbiAgICAgICAgICAvLyBnZXQgdGhlIGFubm90YXRpb25zIG9mIHRoZSBjdXJyZW50IHBhZ2VcclxuICAgICAgICAgIHJldHVybiBwLmdldEFubm90YXRpb25zKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoYW5ub3RhdGlvbnMpID0+IHtcclxuICAgICAgICAgIC8vIHVnbHkgY2FzdCBkdWUgdG8gbWlzc2luZyB0eXBlc2NyaXB0IGRlZmluaXRpb25zXHJcbiAgICAgICAgICAvLyBwbGVhc2UgY29udHJpYnV0ZSB0byBjb21wbGV0ZSBAdHlwZXMvcGRmanMtZGlzdFxyXG5cclxuICAgICAgICAgIGFubm90YXRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGEpID0+IGEuc3VidHlwZSA9PT0gJ1dpZGdldCcpIC8vIGdldCB0aGUgZm9ybSBmaWVsZCBhbm5vdGF0aW9uIG9ubHlcclxuICAgICAgICAgICAgLmZvckVhY2goKGEpID0+IHtcclxuICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IFN0b3JlIHRoZSBleHBvcnRWYWx1ZSBmb3IgdGhlIGNoZWNrIGJveGVzIGFuZCBidXR0b25WYWx1ZSBmb3IgcmFkaW8gYnV0dG9ucyBmb3IgcXVpY2sgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgaWYgKGEuY2hlY2tCb3gpIHRoaXMuYnV0dG9uVmFsdWVzW2EuaWRdID0gYS5leHBvcnRWYWx1ZTtcclxuICAgICAgICAgICAgICBlbHNlIGlmIChhLnJhZGlvQnV0dG9uKSB0aGlzLmJ1dHRvblZhbHVlc1thLmlkXSA9IGEuYnV0dG9uVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChhLmZpZWxkVHlwZSA9PT0gJ1NpZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU2lnbmF0dXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgdmlld2VyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdlckNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5zY3JvbGxCeSgwLCAtMzIpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgIC8vIGdldCB0aGUgcmVjdGFuZ2xlIHRoYXQgcmVwcmVzZW50IHRoZSBzaW5nbGUgZmllbGRcclxuICAgICAgICAgICAgICAvLyBhbmQgcmVzaXplIGl0IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBEUElcclxuICAgICAgICAgICAgICBjb25zdCBmaWVsZFJlY3QgPSBjdXJyZW50UGFnZS5nZXRWaWV3cG9ydChkcGlSYXRpbykuY29udmVydFRvVmlld3BvcnRSZWN0YW5nbGUoYS5yZWN0KTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gYWRkIHRoZSBjb3JyZXNwb25kaW5nIGlucHV0XHJcbiAgICAgICAgICAgICAgdGhpcy5hZGRJbnB1dChhLCBmaWVsZFJlY3QpO1xyXG4gICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHpvb21Ub1BhZ2VXaWR0aChldmVudDogTW91c2VFdmVudCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IGRlc2lyZWRDZW50ZXJZID0gZXZlbnQuY2xpZW50WTtcclxuICAgIGNvbnN0IHByZXZpb3VzU2NhbGUgPSAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyIGFzIGFueSkuY3VycmVudFNjYWxlO1xyXG4gICAgaWYgKHRoaXMuem9vbSAhPT0gcGRmRGVmYXVsdE9wdGlvbnMuZG91YmxlVGFwWm9vbUZhY3RvciAmJiB0aGlzLnpvb20gKyAnJScgIT09IHBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFpvb21GYWN0b3IpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c1pvb20gPSB0aGlzLnpvb207XHJcbiAgICAgIHRoaXMuem9vbSA9IHBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFpvb21GYWN0b3I7IC8vIGJ5IGRlZmF1bHQ6ICdwYWdlLXdpZHRoJztcclxuICAgICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c1pvb20pIHtcclxuICAgICAgICB0aGlzLnpvb20gPSB0aGlzLnByZXZpb3VzWm9vbTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnpvb20gPSAncGFnZS13aWR0aCc7XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudFNjYWxlID0gKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlciBhcyBhbnkpLmN1cnJlbnRTY2FsZTtcclxuICAgIGNvbnN0IHNjYWxlQ29ycmVjdGlvbkZhY3RvciA9IGN1cnJlbnRTY2FsZSAvIHByZXZpb3VzU2NhbGUgLSAxO1xyXG4gICAgY29uc3QgcmVjdCA9IChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIgYXMgYW55KS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBkeSA9IGRlc2lyZWRDZW50ZXJZIC0gcmVjdC50b3A7XHJcbiAgICAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyIGFzIGFueSkuY29udGFpbmVyLnNjcm9sbFRvcCArPSBkeSAqIHNjYWxlQ29ycmVjdGlvbkZhY3RvcjtcclxuICB9XHJcbn1cclxuIiwiPGxpbmsgKm5nSWY9XCJ1c2VCcm93c2VyTG9jYWxlXCIgcmVsPVwicmVzb3VyY2VcIiB0eXBlPVwiYXBwbGljYXRpb24vbDEwblwiIFthdHRyLnhocmVmXT1cImxvY2FsZUZvbGRlclBhdGgrJy9sb2NhbGUucHJvcGVydGllcydcIiBvcmlnaW49XCJuZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlclwiIC8+XHJcbjxwZGYtZGFyay10aGVtZSAqbmdJZj1cInRoZW1lPT09J2RhcmsnXCI+PC9wZGYtZGFyay10aGVtZT5cclxuPHBkZi1saWdodC10aGVtZSAqbmdJZj1cInRoZW1lPT09J2xpZ2h0J1wiPjwvcGRmLWxpZ2h0LXRoZW1lPlxyXG5cclxuPHBkZi1keW5hbWljLWNzcyBbem9vbV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiIFt3aWR0aF09XCJ0b29sYmFyV2lkdGhJblBpeGVsc1wiPjwvcGRmLWR5bmFtaWMtY3NzPlxyXG48ZGl2IGNsYXNzPVwiem9vbVwiIFtzdHlsZS5oZWlnaHRdPVwibWluSGVpZ2h0ID8gbWluSGVpZ2h0IDogaGVpZ2h0XCIgI3Jvb3Q+XHJcbiAgPGRpdiBjbGFzcz1cImh0bWxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nSW5Qcm9ncmVzcyBib2R5XCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIj5cclxuICAgICAgPGRpdiBpZD1cIm91dGVyQ29udGFpbmVyXCIgKHdpbmRvdzpyZXNpemUpPVwib25SZXNpemUoKVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmcmVlLWZsb2F0aW5nLWJhclwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjdXN0b21GcmVlRmxvYXRpbmdCYXIgPyBjdXN0b21GcmVlRmxvYXRpbmdCYXIgOiBkZWZhdWx0RnJlZUZsb2F0aW5nQmFyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwZGYtc2lkZWJhciAjcGRmc2lkZWJhclxyXG4gICAgICAgICAgICAgICAgICAgICBbc2lkZWJhclBvc2l0aW9uVG9wXT1cInNpZGViYXJQb3NpdGlvblRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtzaWRlYmFyVmlzaWJsZV09XCJzaWRlYmFyVmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtzaG93U2lkZWJhckJ1dHRvbl09XCJzaG93U2lkZWJhckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtjdXN0b21TaWRlYmFyXT1cImN1c3RvbVNpZGViYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbY3VzdG9tVGh1bWJuYWlsXT1cImN1c3RvbVRodW1ibmFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICh0aHVtYm5haWxEcmF3bik9XCJ0aHVtYm5haWxEcmF3bi5lbWl0KCRldmVudClcIj5cclxuICAgICAgICA8L3BkZi1zaWRlYmFyPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJtYWluQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8cGRmLWR1bW15LWNvbXBvbmVudHM+PC9wZGYtZHVtbXktY29tcG9uZW50cz5cclxuXHJcbiAgICAgICAgICA8cGRmLXRvb2xiYXJcclxuICAgICAgICAgICAgW2N1c3RvbVRvb2xiYXJdPVwiY3VzdG9tVG9vbGJhclwiXHJcbiAgICAgICAgICAgIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiXHJcbiAgICAgICAgICAgIFtwcmltYXJ5TWVudVZpc2libGVdPVwicHJpbWFyeU1lbnVWaXNpYmxlXCJcclxuICAgICAgICAgICAgW3Nob3dCb29rbWFya0J1dHRvbl09XCJzaG93Qm9va21hcmtCdXR0b25cIlxyXG4gICAgICAgICAgICBbc2hvd0Rvd25sb2FkQnV0dG9uXT1cInNob3dEb3dubG9hZEJ1dHRvblwiXHJcbiAgICAgICAgICAgIFtzaG93RmluZEJ1dHRvbl09XCJzaG93RmluZEJ1dHRvblwiXHJcbiAgICAgICAgICAgIFtzaG93SGFuZFRvb2xCdXR0b25dPVwic2hvd0hhbmRUb29sQnV0dG9uXCJcclxuICAgICAgICAgICAgW3Nob3dPcGVuRmlsZUJ1dHRvbl09XCJzaG93T3BlbkZpbGVCdXR0b25cIlxyXG4gICAgICAgICAgICBbc2hvd1ByaW50QnV0dG9uXT1cInNob3dQcmludEJ1dHRvbiAmJiBlbmFibGVQcmludFwiXHJcbiAgICAgICAgICAgIFtzaG93UGFnaW5nQnV0dG9uc109XCJzaG93UGFnaW5nQnV0dG9uc1wiXHJcbiAgICAgICAgICAgIFtzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbl09XCJzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvblwiXHJcbiAgICAgICAgICAgIFtzaG93Um90YXRlQnV0dG9uXT1cInNob3dSb3RhdGVCdXR0b25cIlxyXG4gICAgICAgICAgICBbc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b25dPVwic2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gJiYgIWhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyXCJcclxuICAgICAgICAgICAgW3Nob3dTaWRlYmFyQnV0dG9uXT1cInNob3dTaWRlYmFyQnV0dG9uXCJcclxuICAgICAgICAgICAgW3Nob3dab29tQnV0dG9uc109XCJzaG93Wm9vbUJ1dHRvbnNcIlxyXG4gICAgICAgICAgICBbdGV4dExheWVyXT1cInRleHRMYXllclwiXHJcbiAgICAgICAgICAgIFt0b29sYmFyTWFyZ2luVG9wXT1cInRvb2xiYXJNYXJnaW5Ub3BcIlxyXG4gICAgICAgICAgICBbdG9vbGJhcldpZHRoXT1cInRvb2xiYXJXaWR0aFwiXHJcbiAgICAgICAgICAgIFt6b29tTGV2ZWxzXT1cInpvb21MZXZlbHNcIlxyXG4gICAgICAgICAgPjwvcGRmLXRvb2xiYXI+XHJcblxyXG4gICAgICAgICAgPHBkZi1zZWNvbmRhcnktdG9vbGJhciAjcGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudFxyXG4gICAgICAgICAgICBbY3VzdG9tU2Vjb25kYXJ5VG9vbGJhcl09XCJjdXN0b21TZWNvbmRhcnlUb29sYmFyXCJcclxuICAgICAgICAgICAgW3NlY29uZGFyeVRvb2xiYXJUb3BdPVwic2Vjb25kYXJ5VG9vbGJhclRvcFwiXHJcbiAgICAgICAgICAgIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiXHJcbiAgICAgICAgICAgIFtzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbl09XCJzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvblwiXHJcbiAgICAgICAgICAgIFtzaG93T3BlbkZpbGVCdXR0b25dPVwic2hvd09wZW5GaWxlQnV0dG9uXCJcclxuICAgICAgICAgICAgW3Nob3dQcmludEJ1dHRvbl09XCJzaG93UHJpbnRCdXR0b24gJiYgZW5hYmxlUHJpbnRcIlxyXG4gICAgICAgICAgICBbc2hvd0Rvd25sb2FkQnV0dG9uXT1cInNob3dEb3dubG9hZEJ1dHRvblwiXHJcbiAgICAgICAgICAgIFtzaG93Qm9va21hcmtCdXR0b25dPVwic2hvd0Jvb2ttYXJrQnV0dG9uXCJcclxuICAgICAgICAgICAgW3Nob3dQYWdpbmdCdXR0b25zXT1cInNob3dQYWdpbmdCdXR0b25zXCJcclxuICAgICAgICAgICAgW3Nob3dSb3RhdGVCdXR0b25dPVwic2hvd1JvdGF0ZUJ1dHRvblwiXHJcbiAgICAgICAgICAgIFtzaG93SGFuZFRvb2xCdXR0b25dPVwic2hvd0hhbmRUb29sQnV0dG9uXCJcclxuICAgICAgICAgICAgW3Nob3dTY3JvbGxpbmdCdXR0b25dPVwic2hvd1Njcm9sbGluZ0J1dHRvblwiXHJcbiAgICAgICAgICAgIFtzaG93U3ByZWFkQnV0dG9uXT1cInNob3dTcHJlYWRCdXR0b25cIlxyXG4gICAgICAgICAgICBbc2hvd1Byb3BlcnRpZXNCdXR0b25dPVwic2hvd1Byb3BlcnRpZXNCdXR0b25cIlxyXG4gICAgICAgICAgICAoc3ByZWFkQ2hhbmdlKT1cIm9uU3ByZWFkQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAoc2Vjb25kYXJ5TWVudUlzRW1wdHkpPVwib25TZWNvbmRhcnlNZW51SXNFbXB0eSgkZXZlbnQpXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvcGRmLXNlY29uZGFyeS10b29sYmFyPlxyXG5cclxuICAgICAgICAgIDxwZGYtZmluZGJhclxyXG4gICAgICAgICAgICBbZmluZGJhckxlZnRdPVwiZmluZGJhckxlZnRcIlxyXG4gICAgICAgICAgICBbZmluZGJhclRvcF09XCJmaW5kYmFyVG9wXCJcclxuICAgICAgICAgICAgW21vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCJcclxuICAgICAgICAgICAgW3Nob3dGaW5kQnV0dG9uXT1cInNob3dGaW5kQnV0dG9uXCJcclxuICAgICAgICAgICAgW2N1c3RvbUZpbmRiYXJJbnB1dEFyZWFdPVwiY3VzdG9tRmluZGJhcklucHV0QXJlYVwiXHJcbiAgICAgICAgICAgIFtjdXN0b21GaW5kYmFyQnV0dG9uc109XCJjdXN0b21GaW5kYmFyQnV0dG9uc1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L3BkZi1maW5kYmFyPlxyXG5cclxuICAgICAgICAgIDxwZGYtY29udGV4dC1tZW51PjwvcGRmLWNvbnRleHQtbWVudT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGlkPVwidmlld2VyQ29udGFpbmVyXCIgW3N0eWxlLnRvcF09XCJ2aWV3ZXJQb3NpdGlvblRvcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW52ZXJpZmllZC1zaWduYXR1cmUtd2FybmluZ1wiICpuZ0lmPVwiaGFzU2lnbmF0dXJlICYmIHNob3dVbnZlcmlmaWVkU2lnbmF0dXJlc1wiPlxyXG4gICAgICAgICAgICAgIHt7ICd1bnZlcmlmaWVkX3NpZ25hdHVyZV93YXJuaW5nJ1xyXG4gICAgICAgICAgICAgICAgICB8IHRyYW5zbGF0ZTogXCJUaGlzIFBERiBmaWxlIGNvbnRhaW5zIGEgZGlnaXRhbCBzaWduYXR1cmUuIFRoZSBQREYgdmlld2VyIGNhbid0IHZlcmlmeSBpZiB0aGUgc2lnbmF0dXJlIGlzIHZhbGlkLiBQbGVhc2UgZG93bmxvYWQgdGhlIGZpbGUgYW5kIG9wZW4gaXQgaW4gQWNyb2JhdCBSZWFkZXIgdG8gdmVyaWZ5IHRoZSBzaWduYXR1cmUgaXMgdmFsaWQuXCJcclxuICAgICAgICAgICAgICAgICAgfCBhc3luY319XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInZpZXdlclwiIGNsYXNzPVwicGRmVmlld2VyXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIiAoZGJsY2xpY2spPVwiem9vbVRvUGFnZVdpZHRoKCRldmVudClcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGlkPVwiZXJyb3JXcmFwcGVyXCIgaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZXJyb3JNZXNzYWdlTGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiZXJyb3JNZXNzYWdlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZXJyb3JTaG93TW9yZVwiIGRhdGEtbDEwbi1pZD1cImVycm9yX21vcmVfaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgTW9yZSBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZXJyb3JTaG93TGVzc1wiIGRhdGEtbDEwbi1pZD1cImVycm9yX2xlc3NfaW5mb1wiIGhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIExlc3MgSW5mb3JtYXRpb25cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlcnJvck1lc3NhZ2VSaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZXJyb3JDbG9zZVwiIGRhdGEtbDEwbi1pZD1cImVycm9yX2Nsb3NlXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhckJvdGhcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZXJyb3JNb3JlSW5mb1wiIGhpZGRlbj1cInRydWVcIiByZWFkb25seT1cInJlYWRvbmx5XCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gbWFpbkNvbnRhaW5lciAtLT5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cIm92ZXJsYXlDb250YWluZXJcIiBjbGFzcz1cImhpZGRlblwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInBhc3N3b3JkT3ZlcmxheVwiIGNsYXNzPVwiY29udGFpbmVyIGhpZGRlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJwYXNzd29yZFRleHRcIiBkYXRhLWwxMG4taWQ9XCJwYXNzd29yZF9sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICBFbnRlciB0aGUgcGFzc3dvcmQgdG8gb3BlbiB0aGlzIFBERiBmaWxlOlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJ0b29sYmFyRmllbGRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25Sb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwicGFzc3dvcmRDYW5jZWxcIiBjbGFzcz1cIm92ZXJsYXlCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwicGFzc3dvcmRfY2FuY2VsXCI+Q2FuY2VsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInBhc3N3b3JkU3VibWl0XCIgY2xhc3M9XCJvdmVybGF5QnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cInBhc3N3b3JkX29rXCI+T0s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwZGYtZG9jdW1lbnQtcHJvcGVydGllcy1vdmVybGF5IGNsYXNzPVwiY29udGFpbmVyIGhpZGRlblwiIGlkPVwiZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheVwiPiA8L3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLW92ZXJsYXk+XHJcblxyXG4gICAgICAgICAgPGRpdiBpZD1cInByaW50U2VydmljZU92ZXJsYXlcIiBjbGFzcz1cImNvbnRhaW5lciBoaWRkZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cInByaW50X3Byb2dyZXNzX21lc3NhZ2VcIj5QcmVwYXJpbmcgZG9jdW1lbnQgZm9yIHByaW50aW5n4oCmPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxwcm9ncmVzcyB2YWx1ZT1cIjBcIiBtYXg9XCIxMDBcIj48L3Byb2dyZXNzPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwicHJpbnRfcHJvZ3Jlc3NfcGVyY2VudFwiIGRhdGEtbDEwbi1hcmdzPSd7IFwicHJvZ3Jlc3NcIjogMCB9JyBjbGFzcz1cInJlbGF0aXZlLXByb2dyZXNzXCI+MCU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvblJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJwcmludENhbmNlbFwiIGNsYXNzPVwib3ZlcmxheUJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJwcmludF9wcm9ncmVzc19jbG9zZVwiPkNhbmNlbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIG92ZXJsYXlDb250YWluZXIgLS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8IS0tIG91dGVyQ29udGFpbmVyIC0tPlxyXG4gICAgICA8ZGl2IGlkPVwicHJpbnRDb250YWluZXJcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdEZyZWVGbG9hdGluZ0Jhcj5cclxuXHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener, TemplateRef, ViewChild, } from '@angular/core';
import { pdfDefaultOptions } from './options/pdf-default-options';
import { VerbosityLevel } from './options/verbosity-level';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import { ElementRef } from '@angular/core';
import { PdfSecondaryToolbarComponent } from './secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component';
import { PdfSidebarComponent } from './sidebar/pdf-sidebar/pdf-sidebar.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./dynamic-css/dynamic-css.component";
import * as i3 from "./pdf-dummy-components/pdf-dummy-components.component";
import * as i4 from "./theme/pdf-dark-theme/pdf-dark-theme.component";
import * as i5 from "./theme/pdf-light-theme/pdf-light-theme.component";
const _c0 = ["root"];
const _c1 = ["pdfSecondaryToolbarComponent"];
const _c2 = ["pdfsidebar"];
function NgxExtendedPdfViewerServerComponent_link_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "link", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("xhref", ctx_r0.localeFolderPath + "/locale.properties");
} }
function NgxExtendedPdfViewerServerComponent_pdf_dark_theme_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-dark-theme");
} }
function NgxExtendedPdfViewerServerComponent_pdf_light_theme_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-light-theme");
} }
function NgxExtendedPdfViewerServerComponent_ng_template_8_Template(rf, ctx) { }
export class NgxExtendedPdfViewerServerComponent {
    constructor() {
        this.customFindbarButtons = undefined;
        this.formData = {};
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
    set src(url) { }
    set base64Src(base64) { }
    set height(h) { }
    get showSidebarButton() {
        return true;
    }
    set showSidebarButton(show) { }
    get page() {
        return this._page;
    }
    set page(p) { }
    get mobileFriendlyZoom() {
        return this._mobileFriendlyZoom;
    }
    /**
     * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     */
    set mobileFriendlyZoom(zoom) { }
    get sidebarPositionTop() {
        return '32px';
    }
    ngOnChanges(changes) { }
    ngOnInit() { }
    ngAfterViewInit() { }
    ngOnDestroy() { }
    onContextMenu() {
        return this.contextMenuAllowed;
    }
}
NgxExtendedPdfViewerServerComponent.ngxExtendedPdfViewerInitialized = false;
/** @nocollapse */ NgxExtendedPdfViewerServerComponent.ɵfac = function NgxExtendedPdfViewerServerComponent_Factory(t) { return new (t || NgxExtendedPdfViewerServerComponent)(); };
/** @nocollapse */ NgxExtendedPdfViewerServerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: NgxExtendedPdfViewerServerComponent, selectors: [["ngx-extended-pdf-viewer"]], viewQuery: function NgxExtendedPdfViewerServerComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, hostBindings: function NgxExtendedPdfViewerServerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("contextmenu", function NgxExtendedPdfViewerServerComponent_contextmenu_HostBindingHandler() { return ctx.onContextMenu(); });
    } }, inputs: { customFindbarInputArea: "customFindbarInputArea", customToolbar: "customToolbar", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", customSecondaryToolbar: "customSecondaryToolbar", customSidebar: "customSidebar", customThumbnail: "customThumbnail", customFreeFloatingBar: "customFreeFloatingBar", formData: "formData", pageViewMode: "pageViewMode", scrollMode: "scrollMode", authorization: "authorization", httpHeaders: "httpHeaders", contextMenuAllowed: "contextMenuAllowed", enablePrint: "enablePrint", delayFirstView: "delayFirstView", logLevel: "logLevel", enablePinchOnMobile: "enablePinchOnMobile", minifiedJSLibraries: "minifiedJSLibraries", printResolution: "printResolution", rotation: "rotation", src: "src", base64Src: "base64Src", height: "height", useBrowserLocale: "useBrowserLocale", backgroundColor: "backgroundColor", filenameForDownload: "filenameForDownload", ignoreKeyboard: "ignoreKeyboard", ignoreKeys: "ignoreKeys", acceptKeys: "acceptKeys", imageResourcesPath: "imageResourcesPath", localeFolderPath: "localeFolderPath", language: "language", listenToURL: "listenToURL", nameddest: "nameddest", password: "password", showUnverifiedSignatures: "showUnverifiedSignatures", startTabindex: "startTabindex", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", showFindButton: "showFindButton", showPagingButtons: "showPagingButtons", showZoomButtons: "showZoomButtons", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", showBookmarkButton: "showBookmarkButton", theme: "theme", showToolbar: "showToolbar", showSecondaryToolbarButton: "showSecondaryToolbarButton", showRotateButton: "showRotateButton", handTool: "handTool", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton", showBorders: "showBorders", spread: "spread", page: "page", pageLabel: "pageLabel", textLayer: "textLayer", zoom: "zoom", zoomLevels: "zoomLevels", maxZoom: "maxZoom", minZoom: "minZoom", _mobileFriendlyZoom: "_mobileFriendlyZoom", mobileFriendlyZoom: "mobileFriendlyZoom" }, outputs: { formDataChange: "formDataChange", progress: "progress", srcChange: "srcChange", scrollModeChange: "scrollModeChange", afterPrint: "afterPrint", beforePrint: "beforePrint", currentZoomFactor: "currentZoomFactor", rotationChange: "rotationChange", sidebarVisibleChange: "sidebarVisibleChange", handToolChange: "handToolChange", spreadChange: "spreadChange", thumbnailDrawn: "thumbnailDrawn", pageChange: "pageChange", pageLabelChange: "pageLabelChange", pagesLoaded: "pagesLoaded", pageRendered: "pageRendered", pdfDownloaded: "pdfDownloaded", pdfLoaded: "pdfLoaded", pdfLoadingFailed: "pdfLoadingFailed", textLayerRendered: "textLayerRendered", updateFindMatchesCount: "updateFindMatchesCount", updateFindState: "updateFindState", zoomChange: "zoomChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 7, consts: [["rel", "resource", "type", "application/l10n", "origin", "ngx-extended-pdf-viewer", 4, "ngIf"], [4, "ngIf"], [3, "zoom", "width"], [1, "zoom"], [1, "html"], ["id", "mainContainer"], ["defaultFreeFloatingBar", ""], ["rel", "resource", "type", "application/l10n", "origin", "ngx-extended-pdf-viewer"]], template: function NgxExtendedPdfViewerServerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxExtendedPdfViewerServerComponent_link_0_Template, 1, 1, "link", 0);
        i0.ɵɵtemplate(1, NgxExtendedPdfViewerServerComponent_pdf_dark_theme_1_Template, 1, 0, "pdf-dark-theme", 1);
        i0.ɵɵtemplate(2, NgxExtendedPdfViewerServerComponent_pdf_light_theme_2_Template, 1, 0, "pdf-light-theme", 1);
        i0.ɵɵelement(3, "pdf-dynamic-css", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelement(7, "pdf-dummy-components");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, NgxExtendedPdfViewerServerComponent_ng_template_8_Template, 0, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.useBrowserLocale);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.theme === "dark");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.theme === "light");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("zoom", ctx.mobileFriendlyZoomScale)("width", ctx.toolbarWidthInPixels);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", ctx.height);
    } }, directives: [i1.NgIf, i2.DynamicCssComponent, i3.PdfDummyComponentsComponent, i4.PdfDarkThemeComponent, i5.PdfLightThemeComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxExtendedPdfViewerServerComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-extended-pdf-viewer',
                templateUrl: './ngx-extended-pdf-viewer-server.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return []; }, { dummyComponents: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixXQUFXLEVBQ1gsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUd6SCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7Ozs7SUMxQmxGLDBCQUE4Sjs7O0lBQXhGLHVFQUFvRDs7O0lBQzFILGlDQUF3RDs7O0lBQ3hELGtDQUEyRDs7O0FEa0MzRCxNQUFNLE9BQU8sbUNBQW1DO0lBNFc5QztRQW5WTyx5QkFBb0IsR0FBaUMsU0FBUyxDQUFDO1FBZS9ELGFBQVEsR0FBaUIsRUFBRSxDQUFDO1FBRzVCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFHbEQsaUJBQVksR0FBdUQsVUFBVSxDQUFDO1FBRzlFLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQVNoRCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUd2QyxlQUFVLEdBQStCLFNBQVMsQ0FBQztRQUduRCxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUd0RCxrQkFBYSxHQUF1QixTQUFTLENBQUM7UUFHOUMsZ0JBQVcsR0FBdUIsU0FBUyxDQUFDO1FBRzVDLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUd0QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFHdkMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUcvQyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUUxQjs7Ozs7V0FLRztRQUVJLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBSzFCO2tIQUMwRztRQUVuRyxhQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUduQyx3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFFbkMsNElBQTRJO1FBRXJJLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUUzQix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFFakM7cUhBQzZHO1FBRXRHLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBTXZCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFhL0Q7Ozs7V0FJRztRQUVJLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUd6QixvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUVuQywrRUFBK0U7UUFFeEUsd0JBQW1CLEdBQUcsY0FBYyxDQUFDO1FBRTVDLGtFQUFrRTtRQUUzRCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUU5Qix5REFBeUQ7UUFFbEQsZUFBVSxHQUFrQixFQUFFLENBQUM7UUFFdEMsZ0lBQWdJO1FBRXpILGVBQVUsR0FBa0IsRUFBRSxDQUFDO1FBRXRDLDhFQUE4RTtRQUV2RSx1QkFBa0IsR0FBRyxJQUFJLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztRQUUvRSwwRUFBMEU7UUFFbkUscUJBQWdCLEdBQUcsSUFBSSxHQUFHLGlCQUFpQixDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFFNUU7V0FDRztRQUVJLGFBQVEsR0FBdUIsU0FBUyxDQUFDO1FBRWhELGtIQUFrSDtRQUUzRyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUUzQixnREFBZ0Q7UUFFekMsY0FBUyxHQUF1QixTQUFTLENBQUM7UUFFakQscUVBQXFFO1FBRTlELGFBQVEsR0FBdUIsU0FBUyxDQUFDO1FBRWhEOztXQUVHO1FBRUksNkJBQXdCLEdBQUcsS0FBSyxDQUFDO1FBWWpDLG1CQUFjLEdBQXdCLFNBQVMsQ0FBQztRQUdoRCx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBR25ELG1CQUFjLEdBQXdCLFNBQVMsQ0FBQztRQUVoRCxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFFekIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsK0JBQTBCLEdBQUcsS0FBSyxDQUFDO1FBRW5DLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUUxQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUV2Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFFMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLFVBQUssR0FBZ0MsT0FBTyxDQUFDO1FBRzdDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR25CLCtCQUEwQixHQUFHLElBQUksQ0FBQztRQUV6Qyw4Q0FBOEM7UUFDdkMscUNBQWdDLEdBQUcsS0FBSyxDQUFDO1FBR3pDLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUV4QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU3Qyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFM0Isd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBRTNCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUV4Qix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFFNUIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFNbkIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUcxRCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRTNELFVBQUssR0FBdUIsU0FBUyxDQUFDO1FBVXZDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUdwRCxjQUFTLEdBQXVCLFNBQVMsQ0FBQztRQUcxQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBR3pELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFHbkQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUdyRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBR3ZELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUcvQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBRzdDLGNBQVMsR0FBd0IsU0FBUyxDQUFDO1FBRzNDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRy9ELDJCQUFzQixHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBR3BFLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUV2RCxrSEFBa0g7UUFFM0csU0FBSSxHQUFnQyxTQUFTLENBQUM7UUFHOUMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUErQixDQUFDO1FBRzdELGVBQVUsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUczRixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR2IsWUFBTyxHQUFHLEdBQUcsQ0FBQztRQUVyQjs7V0FFRztRQUNNLHdCQUFtQixHQUFHLE1BQU0sQ0FBQztRQUUvQiw0QkFBdUIsR0FBRyxDQUFDLENBQUM7UUFFNUIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRXpCLGlCQUFZLEdBQUcsTUFBTSxDQUFDO1FBRXRCLHlCQUFvQixHQUFHLEdBQUcsQ0FBQztRQUUzQix3QkFBbUIsR0FBdUIsU0FBUyxDQUFDO1FBRTNELHVDQUF1QztRQUNoQyxlQUFVLEdBQXVCLFNBQVMsQ0FBQztRQUVsRCx1Q0FBdUM7UUFDaEMsZ0JBQVcsR0FBdUIsU0FBUyxDQUFDO1FBRW5ELHdHQUF3RztRQUNqRyxpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQVl0QixpQkFBWSxHQUFHLEtBQUssQ0FBQztJQU1kLENBQUM7SUE5T2hCLElBQ1csR0FBRyxDQUFDLEdBQThELElBQUcsQ0FBQztJQUVqRixJQUNXLFNBQVMsQ0FBQyxNQUFjLElBQUcsQ0FBQztJQUV2QyxJQUNXLE1BQU0sQ0FBQyxDQUFTLElBQUcsQ0FBQztJQStEL0IsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsSUFDVyxpQkFBaUIsQ0FBQyxJQUFhLElBQUcsQ0FBQztJQWlFOUMsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUNXLElBQUksQ0FBQyxDQUFxQixJQUFHLENBQUM7SUE4RXpDLElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDRDs7O09BR0c7SUFDSCxJQUNXLGtCQUFrQixDQUFDLElBQVksSUFBRyxDQUFDO0lBSTlDLElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFHRCxXQUFXLENBQUMsT0FBc0IsSUFBUyxDQUFDO0lBRTVDLFFBQVEsS0FBSSxDQUFDO0lBRWIsZUFBZSxLQUFJLENBQUM7SUFFYixXQUFXLEtBQVUsQ0FBQztJQUd0QixhQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7O0FBdlhhLG1FQUErQixHQUFHLEtBQUssQ0FBQzt5SUFEM0MsbUNBQW1DO3FIQUFuQyxtQ0FBbUM7dUJBUW5DLDJCQUEyQjs7Ozs7Ozs7Ozs7NEhBUjNCLG1CQUFlOztRQ3BDNUIsc0ZBQThKO1FBQzlKLDBHQUF3RDtRQUN4RCw0R0FBMkQ7UUFFM0QscUNBQW1HO1FBQ25HLDhCQUEwQztRQUN4Qyw4QkFBa0I7UUFDaEIsOEJBQXdCO1FBQ3RCLHVDQUE2QztRQUMvQyxpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07UUFFTixxSUFFYzs7UUFmUCwyQ0FBc0I7UUFDWixlQUFvQjtRQUFwQiwyQ0FBb0I7UUFDbkIsZUFBcUI7UUFBckIsNENBQXFCO1FBRXRCLGVBQWdDO1FBQWhDLGtEQUFnQyxtQ0FBQTtRQUMvQixlQUF1QjtRQUF2QixvQ0FBdUI7O3VGRCtCNUIsbUNBQW1DO2NBTC9DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsaURBQWlEO2dCQUM5RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtzQ0FVUSxlQUFlO2tCQURyQixTQUFTO21CQUFDLDJCQUEyQjtZQUkvQixJQUFJO2tCQURWLFNBQVM7bUJBQUMsTUFBTTtZQUtWLHNCQUFzQjtrQkFENUIsS0FBSztZQUlDLGFBQWE7a0JBRG5CLEtBQUs7WUFJQyxhQUFhO2tCQURuQixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMsc0JBQXNCO2tCQUQ1QixLQUFLO1lBSUMsYUFBYTtrQkFEbkIsS0FBSztZQUlDLGVBQWU7a0JBRHJCLEtBQUs7WUFJQyxxQkFBcUI7a0JBRDNCLEtBQUs7WUFJQyxRQUFRO2tCQURkLEtBQUs7WUFJQyxjQUFjO2tCQURwQixNQUFNO1lBSUEsWUFBWTtrQkFEbEIsS0FBSztZQUlDLFFBQVE7a0JBRGQsTUFBTTtZQUlDLHlCQUF5QjtrQkFEaEMsU0FBUzttQkFBQyw4QkFBOEI7WUFJakMsZ0JBQWdCO2tCQUR2QixTQUFTO21CQUFDLFlBQVk7WUFJaEIsU0FBUztrQkFEZixNQUFNO1lBSUEsVUFBVTtrQkFEaEIsS0FBSztZQUlDLGdCQUFnQjtrQkFEdEIsTUFBTTtZQUlBLGFBQWE7a0JBRG5CLEtBQUs7WUFJQyxXQUFXO2tCQURqQixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixLQUFLO1lBSUMsVUFBVTtrQkFEaEIsTUFBTTtZQUlBLFdBQVc7a0JBRGpCLE1BQU07WUFJQSxpQkFBaUI7a0JBRHZCLE1BQU07WUFJQSxXQUFXO2tCQURqQixLQUFLO1lBVUMsY0FBYztrQkFEcEIsS0FBSztZQVNDLFFBQVE7a0JBRGQsS0FBSztZQUlDLG1CQUFtQjtrQkFEekIsS0FBSztZQUtDLG1CQUFtQjtrQkFEekIsS0FBSztZQVFDLGVBQWU7a0JBRHJCLEtBQUs7WUFJQyxRQUFRO2tCQURkLEtBQUs7WUFJQyxjQUFjO2tCQURwQixNQUFNO1lBTUksR0FBRztrQkFEYixLQUFLO1lBSUssU0FBUztrQkFEbkIsS0FBSztZQUlLLE1BQU07a0JBRGhCLEtBQUs7WUFTQyxnQkFBZ0I7a0JBRHRCLEtBQUs7WUFJQyxlQUFlO2tCQURyQixLQUFLO1lBS0MsbUJBQW1CO2tCQUR6QixLQUFLO1lBS0MsY0FBYztrQkFEcEIsS0FBSztZQUtDLFVBQVU7a0JBRGhCLEtBQUs7WUFLQyxVQUFVO2tCQURoQixLQUFLO1lBS0Msa0JBQWtCO2tCQUR4QixLQUFLO1lBS0MsZ0JBQWdCO2tCQUR0QixLQUFLO1lBTUMsUUFBUTtrQkFEZCxLQUFLO1lBS0MsV0FBVztrQkFEakIsS0FBSztZQUtDLFNBQVM7a0JBRGYsS0FBSztZQUtDLFFBQVE7a0JBRGQsS0FBSztZQU9DLHdCQUF3QjtrQkFEOUIsS0FBSztZQUlDLGFBQWE7a0JBRG5CLEtBQUs7WUFPSyxpQkFBaUI7a0JBRDNCLEtBQUs7WUFJQyxjQUFjO2tCQURwQixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixNQUFNO1lBSUEsY0FBYztrQkFEcEIsS0FBSztZQUdDLGlCQUFpQjtrQkFEdkIsS0FBSztZQUdDLGVBQWU7a0JBRHJCLEtBQUs7WUFHQywwQkFBMEI7a0JBRGhDLEtBQUs7WUFHQyxrQkFBa0I7a0JBRHhCLEtBQUs7WUFHQyxlQUFlO2tCQURyQixLQUFLO1lBR0Msa0JBQWtCO2tCQUR4QixLQUFLO1lBR0Msa0JBQWtCO2tCQUR4QixLQUFLO1lBSUMsS0FBSztrQkFEWCxLQUFLO1lBSUMsV0FBVztrQkFEakIsS0FBSztZQUlDLDBCQUEwQjtrQkFEaEMsS0FBSztZQU9DLGdCQUFnQjtrQkFEdEIsS0FBSztZQUdDLFFBQVE7a0JBRGQsS0FBSztZQUdDLGNBQWM7a0JBRHBCLE1BQU07WUFHQSxrQkFBa0I7a0JBRHhCLEtBQUs7WUFHQyxtQkFBbUI7a0JBRHpCLEtBQUs7WUFHQyxnQkFBZ0I7a0JBRHRCLEtBQUs7WUFHQyxvQkFBb0I7a0JBRDFCLEtBQUs7WUFHQyxXQUFXO2tCQURqQixLQUFLO1lBSUMsTUFBTTtrQkFEWixLQUFLO1lBSUMsWUFBWTtrQkFEbEIsTUFBTTtZQUlBLGNBQWM7a0JBRHBCLE1BQU07WUFVSSxJQUFJO2tCQURkLEtBQUs7WUFJQyxVQUFVO2tCQURoQixNQUFNO1lBSUEsU0FBUztrQkFEZixLQUFLO1lBSUMsZUFBZTtrQkFEckIsTUFBTTtZQUlBLFdBQVc7a0JBRGpCLE1BQU07WUFJQSxZQUFZO2tCQURsQixNQUFNO1lBSUEsYUFBYTtrQkFEbkIsTUFBTTtZQUlBLFNBQVM7a0JBRGYsTUFBTTtZQUlBLGdCQUFnQjtrQkFEdEIsTUFBTTtZQUlBLFNBQVM7a0JBRGYsS0FBSztZQUlDLGlCQUFpQjtrQkFEdkIsTUFBTTtZQUlBLHNCQUFzQjtrQkFENUIsTUFBTTtZQUlBLGVBQWU7a0JBRHJCLE1BQU07WUFLQSxJQUFJO2tCQURWLEtBQUs7WUFJQyxVQUFVO2tCQURoQixNQUFNO1lBSUEsVUFBVTtrQkFEaEIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQU1HLG1CQUFtQjtrQkFBM0IsS0FBSztZQTZCSyxrQkFBa0I7a0JBRDVCLEtBQUs7WUFtQkMsYUFBYTtrQkFEbkIsWUFBWTttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2VzTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlcy1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQYWdlUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtcmVuZGVyZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZEb3dubG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtZG93bmxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBkZkxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IHBkZkRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1kZWZhdWx0LW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBWZXJib3NpdHlMZXZlbCB9IGZyb20gJy4vb3B0aW9ucy92ZXJib3NpdHktbGV2ZWwnO1xyXG5pbXBvcnQgeyBGaW5kU3RhdGUsIEZpbmRSZXN1bHRNYXRjaGVzQ291bnQgfSBmcm9tICcuL2V2ZW50cy9maW5kLXJlc3VsdCc7XHJcbmltcG9ydCB7IFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWR1bW15LWNvbXBvbmVudHMvcGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRleHRMYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy90ZXh0bGF5ZXItcmVuZGVyZWQnO1xyXG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2Nyb2xsTW9kZVR5cGUgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlcic7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wcm9ncmVzcy1iYXItZXZlbnQnO1xyXG5pbXBvcnQgeyBGb3JtRGF0YVR5cGUgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIHN0YXRpYyBuZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkdW1teSBjb21wb25lbnRzIGFyZSBpbnNlcnRlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHVzZXIgY3VzdG9taXplcyB0aGUgdG9vbGJhclxyXG4gICAqIHdpdGhvdXQgYWRkaW5nIGV2ZXJ5IG9yaWdpbmFsIHRvb2xiYXIgaXRlbS4gV2l0aG91dCB0aGUgZHVtbXkgY29tcG9uZW50cywgdGhlXHJcbiAgICogaW5pdGlhbGl6YXRpb24gY29kZSBvZiBwZGYuanMgY3Jhc2hlcyBiZWNhdXNlIGl0IGFzc3VtZSB0aGF0IGV2ZXJ5IHN0YW5kYXJkIHdpZGdldCBpcyB0aGVyZS5cclxuICAgKi9cclxuICBAVmlld0NoaWxkKFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudClcclxuICBwdWJsaWMgZHVtbXlDb21wb25lbnRzOiBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3Jvb3QnKVxyXG4gIHB1YmxpYyByb290OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiBVSSB0ZW1wbGF0ZXMgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFySW5wdXRBcmVhOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21Ub29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyQnV0dG9uczogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tU2Vjb25kYXJ5VG9vbGJhcjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tU2lkZWJhcjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tVGh1bWJuYWlsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GcmVlRmxvYXRpbmdCYXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZvcm1EYXRhOiBGb3JtRGF0YVR5cGUgPSB7fTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGZvcm1EYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtRGF0YVR5cGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHBhZ2VWaWV3TW9kZTogJ3NpbmdsZScgfCAnYm9vaycgfCAnbXVsdGlwbGUnIHwgJ2luZmluaXRlLXNjcm9sbCcgPSAnbXVsdGlwbGUnO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcHJvZ3Jlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPFByb2dyZXNzQmFyRXZlbnQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQnKVxyXG4gIHByaXZhdGUgc2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudDogUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudDtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGRmc2lkZWJhcicpXHJcbiAgcHJpdmF0ZSBzaWRlYmFyQ29tcG9uZW50OiBQZGZTaWRlYmFyQ29tcG9uZW50O1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3JjQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNjcm9sbE1vZGU6IFNjcm9sbE1vZGVUeXBlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc2Nyb2xsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2Nyb2xsTW9kZVR5cGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGF1dGhvcml6YXRpb246IE9iamVjdCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaHR0cEhlYWRlcnM6IE9iamVjdCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY29udGV4dE1lbnVBbGxvd2VkID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFmdGVyUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBiZWZvcmVQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGN1cnJlbnRab29tRmFjdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGVuYWJsZVByaW50ID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJldHdlZW4gaW5pdGlhbGl6aW5nIHRoZSBQREYgdmlld2VyIGFuZCBsb2FkaW5nIHRoZSBQREYgZmlsZS5cclxuICAgKiBNb3N0IHVzZXJzIGNhbiBsZXQgdGhpcyBwYXJhbWV0ZXIgc2FmZWx5IGF0IGl0J3MgZGVmYXVsdCB2YWx1ZSBvZiB6ZXJvLlxyXG4gICAqIFNldCB0aGlzIHRvIDEwMDAgb3IgaGlnaGVyIGlmIHlvdSBydW4gaW50byB0aW1pbmcgcHJvYmxlbXMgKHR5cGljYWxseSBjYXVzZWQgYnkgbG9hZGluZyB0aGUgbG9jYWxlIGZpbGVzXHJcbiAgICogYWZ0ZXIgdGhlIFBERiBmaWxlcywgc28gdGhleSBhcmUgbm90IGF2YWlsYWJsZSB3aGVuIHRoZSBQREYgdmlld2VyIGlzIGluaXRpYWxpemVkKS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBkZWxheUZpcnN0VmlldyA9IDA7XHJcblxyXG4gIC8qKiBzdG9yZSB0aGUgdGltZW91dCBpZCBzbyBpdCBjYW4gYmUgY2FuY2VsZWQgaWYgdXNlciBsZWF2ZXMgdGhlIHBhZ2UgYmVmb3JlIHRoZSBQREYgaXMgc2hvd24gKi9cclxuICBwcml2YXRlIGluaXRUaW1lb3V0OiBhbnk7XHJcblxyXG4gIC8qKiBIb3cgbWFueSBsb2cgbWVzc2FnZXMgc2hvdWxkIGJlIHByaW50ZWQ/XHJcbiAgICogTGVnYWwgdmFsdWVzOiBWZXJib3NpdHlMZXZlbC5JTkZPUyAoPSA1KSwgVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MgKD0gMSksIFZlcmJvc2l0eUxldmVsLkVSUk9SUyAoPSAwKSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxvZ0xldmVsID0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1M7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGVuYWJsZVBpbmNoT25Nb2JpbGUgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFVzZSB0aGUgbWluaWZpZWQgKG1pbmlmaWVkSlNMaWJyYXJpZXM9XCJ0cnVlXCIsIHdoaWNoIGlzIHRoZSBkZWZhdWx0KSBvciB0aGUgdXNlci1yZWFkYWJsZSBwZGYuanMgbGlicmFyeSAobWluaWZpZWRKU0xpYnJhcmllcz1cImZhbHNlXCIpICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbWluaWZpZWRKU0xpYnJhcmllcyA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBwcmltYXJ5TWVudVZpc2libGUgPSB0cnVlO1xyXG5cclxuICAvKiogb3B0aW9uIHRvIGluY3JlYXNlIChvciByZWR1Y2UpIHByaW50IHJlc29sdXRpb24uIERlZmF1bHQgaXMgMTUwIChkcGkpLiBTZW5zaWJsZSB2YWx1ZXNcclxuICAgKiBhcmUgMzAwLCA2MDAsIGFuZCAxMjAwLiBOb3RlIHRoZSBpbmNyZWFzZSBtZW1vcnkgY29uc3VtcHRpb24sIHdoaWNoIG1heSBldmVuIHJlc3VsdCBpbiBhIGJyb3dzZXIgY3Jhc2guICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcHJpbnRSZXNvbHV0aW9uID0gbnVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcm90YXRpb246IDAgfCA5MCB8IDE4MCB8IDI3MDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHJvdGF0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwwIHwgOTAgfCAxODAgfCAyNzA+KCk7XHJcblxyXG4gIHB1YmxpYyBoYXNTaWduYXR1cmU6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzcmModXJsOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IEJsb2IgfCBVaW50OEFycmF5IHwgeyByYW5nZTogYW55IH0pIHt9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBiYXNlNjRTcmMoYmFzZTY0OiBzdHJpbmcpIHt9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBoZWlnaHQoaDogc3RyaW5nKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBJZiB0aGlzIGZsYWcgaXMgdHJ1ZSwgdGhpcyBjb21wb25lbnRzIGFkZHMgYSBsaW5rIHRvIHRoZSBsb2NhbGUgYXNzZXRzLiBUaGUgcGRmIHZpZXdlclxyXG4gICAqIHNlZXMgdGhpcyBsaW5rIGFuZCB1c2VzIGl0IHRvIGxvYWQgdGhlIGxvY2FsZSBmaWxlcyBhdXRvbWF0aWNhbGx5LlxyXG4gICAqIEBwYXJhbSB1c2VCcm93c2VyTG9jYWxlIGJvb2xlYW5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB1c2VCcm93c2VyTG9jYWxlID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGJhY2tncm91bmRDb2xvciA9ICcjZThlOGViJztcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGZpbGUgYWZ0ZXIgY2xpY2tpbmcgXCJkb3dubG9hZFwiICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZmlsZW5hbWVGb3JEb3dubG9hZCA9ICdkb2N1bWVudC5wZGYnO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRpc2FibGUgdGhlIGtleWJvYXJkIGJpbmRpbmdzIGNvbXBsZXRlbHkgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpZ25vcmVLZXlib2FyZCA9IGZhbHNlO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRpc2FibGUgYSBsaXN0IG9mIGtleSBiaW5kaW5ncy4gKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpZ25vcmVLZXlzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZW5hYmxlIGEgbGlzdCBvZiBrZXkgYmluZGluZ3MgZXhwbGljaXRseS4gSWYgdGhpcyBwcm9wZXJ0eSBpcyBzZXQsIGV2ZXJ5IG90aGVyIGtleSBiaW5kaW5nIGlzIGlnbm9yZWQuICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYWNjZXB0S2V5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIHB1dCB0aGUgdmlld2VyJ3Mgc3ZnIGltYWdlcyBpbnRvIGFuIGFyYml0cmFyeSBmb2xkZXIgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpbWFnZVJlc291cmNlc1BhdGggPSAnLi8nICsgcGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyICsgJy9pbWFnZXMvJztcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBwdXQgdGhlaXIgbG9jYWxlIGZvbGRlciBpbnRvIGFuIGFyYml0cmFyeSBmb2xkZXIgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsb2NhbGVGb2xkZXJQYXRoID0gJy4vJyArIHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlciArICcvbG9jYWxlJztcclxuXHJcbiAgLyoqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGxvY2FsZS4gVGhpcyBtdXN0IGJlIHRoZSBjb21wbGV0ZSBsb2NhbGUgbmFtZSwgc3VjaCBhcyBcImVzLUVTXCIuIFRoZSBzdHJpbmcgaXMgYWxsb3dlZCB0byBiZSBhbGwgbG93ZXJjYXNlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKiBCeSBkZWZhdWx0LCBsaXN0ZW5pbmcgdG8gdGhlIFVSTCBpcyBkZWFjdGl2YXRlZCBiZWNhdXNlIG9mdGVuIHRoZSBhbmNob3IgdGFnIGlzIHVzZWQgZm9yIHRoZSBBbmd1bGFyIHJvdXRlciAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxpc3RlblRvVVJMID0gZmFsc2U7XHJcblxyXG4gIC8qKiBOYXZpZ2F0ZSB0byBhIGNlcnRhaW4gXCJuYW1lZCBkZXN0aW5hdGlvblwiICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbmFtZWRkZXN0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKiBhbGxvd3MgeW91IHRvIHBhc3MgYSBwYXNzd29yZCB0byByZWFkIHBhc3N3b3JkLXByb3RlY3RlZCBmaWxlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKiBwZGYuanMgY2FuIHNob3cgc2lnbmF0dXJlcywgYnV0IGZhaWxzIHRvIHZlcmlmeSB0aGVtLiBTbyB0aGV5IGFyZSBzd2l0Y2hlZCBvZmYgYnkgZGVmYXVsdC5cclxuICAgKiBTZXQgXCJbc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzXVwiPVwidHJ1ZVwiIHRvIGRpc3BsYXkgZS1zaWduYXR1cmVzIG5vbmV0aGVsZXNzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzdGFydFRhYmluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBnZXQgc2hvd1NpZGViYXJCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNob3dTaWRlYmFyQnV0dG9uKHNob3c6IGJvb2xlYW4pIHt9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNpZGViYXJWaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc2lkZWJhclZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kQnV0dG9uOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQYWdpbmdCdXR0b25zID0gdHJ1ZTtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Wm9vbUJ1dHRvbnMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd09wZW5GaWxlQnV0dG9uID0gdHJ1ZTtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJpbnRCdXR0b24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbiA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0Jvb2ttYXJrQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdGhlbWU6ICdkYXJrJyB8ICdsaWdodCcgfCAnY3VzdG9tJyA9ICdsaWdodCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dUb29sYmFyID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gPSB0cnVlO1xyXG5cclxuICAvKiogU2V0IGJ5IHRoZSBldmVudCAoc2Vjb25kYXJ5TWVudUlzRW1wdHkpICovXHJcbiAgcHVibGljIGhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dSb3RhdGVCdXR0b24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGhhbmRUb29sID0gdHJ1ZTtcclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgaGFuZFRvb2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0hhbmRUb29sQnV0dG9uID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1Njcm9sbGluZ0J1dHRvbiA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NwcmVhZEJ1dHRvbiA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1Byb3BlcnRpZXNCdXR0b24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dCb3JkZXJzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc3ByZWFkOiAnb2ZmJyB8ICdldmVuJyB8ICdvZGQnO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3ByZWFkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwnb2ZmJyB8ICdldmVuJyB8ICdvZGQnPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdGh1bWJuYWlsRHJhd24gPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlRodW1ibmFpbERyYXduRXZlbnQ+KCk7XHJcblxyXG4gIHByaXZhdGUgX3BhZ2U6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBwYWdlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBwYWdlKHA6IG51bWJlciB8IHVuZGVmaW5lZCkge31cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHVuZGVmaW5lZD4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGFnZUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlTGFiZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IHVuZGVmaW5lZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VzTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlc0xvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZVJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkRvd25sb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkRvd25sb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmTG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwZGZMb2FkaW5nRmFpbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdGV4dExheWVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdGV4dExheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRleHRMYXllclJlbmRlcmVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB1cGRhdGVGaW5kTWF0Y2hlc0NvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjxGaW5kUmVzdWx0TWF0Y2hlc0NvdW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdXBkYXRlRmluZFN0YXRlID0gbmV3IEV2ZW50RW1pdHRlcjxGaW5kU3RhdGU+KCk7XHJcblxyXG4gIC8qKiBMZWdhbCB2YWx1ZXM6IHVuZGVmaW5lZCwgJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZS1maXQnLCAncGFnZS13aWR0aCcsIG9yICc1MCcgKG9yIGFueSBvdGhlciBwZXJjZW50YWdlKSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHpvb206IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHpvb21DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZD4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgem9vbUxldmVscyA9IFsnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgMC41LCAxLCAxLjI1LCAxLjUsIDIsIDMsIDRdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtYXhab29tID0gMTA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1pblpvb20gPSAwLjE7XHJcblxyXG4gIC8qKiBUaGlzIGF0dHJpYnV0ZXMgYWxsb3dzIHlvdSB0byBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgVUkgZWxlbWVudHMgc28geW91IGNhbiB1c2UgdGhlbSBvbiBzbWFsbCBtb2JpbGUgZGV2aWNlcy5cclxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpcyBhIHN0cmluZyB3aXRoIGEgcGVyY2VudCBjaGFyYWN0ZXIgYXQgdGhlIGVuZCAoZS5nLiBcIjE1MCVcIikuXHJcbiAgICovXHJcbiAgQElucHV0KCkgX21vYmlsZUZyaWVuZGx5Wm9vbSA9ICcxMDAlJztcclxuXHJcbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gMTtcclxuXHJcbiAgcHVibGljIHRvb2xiYXJNYXJnaW5Ub3AgPSAnMHB4JztcclxuXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aCA9ICcxMDAlJztcclxuXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aEluUGl4ZWxzID0gMTAwO1xyXG5cclxuICBwdWJsaWMgc2Vjb25kYXJ5VG9vbGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvLyBkaXJ0eSBJRTExIGhhY2sgLSB0ZW1wb3Jhcnkgc29sdXRpb25cclxuICBwdWJsaWMgZmluZGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvLyBkaXJ0eSBJRTExIGhhY2sgLSB0ZW1wb3Jhcnkgc29sdXRpb25cclxuICBwdWJsaWMgZmluZGJhckxlZnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLy8gQWRkaXRpb25hbCBQREYgRm9ybSBGaWVsZCBUeXBlcyAjNTY3OiBVc2VkIHRvIHN0b3JlIHRoZSBleHBvcnRlZCB2YWx1ZXMgb2YgcmFkaW8gYW5kIGNoZWNrYm94IGJ1dHRvbnNcclxuICBwdWJsaWMgYnV0dG9uVmFsdWVzOiBhbnkgPSB7fTtcclxuXHJcbiAgcHVibGljIGdldCBtb2JpbGVGcmllbmRseVpvb20oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbW9iaWxlRnJpZW5kbHlab29tO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBUaGlzIGF0dHJpYnV0ZXMgYWxsb3dzIHlvdSB0byBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgVUkgZWxlbWVudHMgc28geW91IGNhbiB1c2UgdGhlbSBvbiBzbWFsbCBtb2JpbGUgZGV2aWNlcy5cclxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpcyBhIHN0cmluZyB3aXRoIGEgcGVyY2VudCBjaGFyYWN0ZXIgYXQgdGhlIGVuZCAoZS5nLiBcIjE1MCVcIikuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IG1vYmlsZUZyaWVuZGx5Wm9vbSh6b29tOiBzdHJpbmcpIHt9XHJcblxyXG4gIHByaXZhdGUgc2h1dHRpbmdEb3duID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBnZXQgc2lkZWJhclBvc2l0aW9uVG9wKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJzMycHgnO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge31cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge31cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnKVxyXG4gIHB1YmxpYyBvbkNvbnRleHRNZW51KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGV4dE1lbnVBbGxvd2VkO1xyXG4gIH1cclxufVxyXG4iLCI8bGluayAqbmdJZj1cInVzZUJyb3dzZXJMb2NhbGVcIiByZWw9XCJyZXNvdXJjZVwiIHR5cGU9XCJhcHBsaWNhdGlvbi9sMTBuXCIgW2F0dHIueGhyZWZdPVwibG9jYWxlRm9sZGVyUGF0aCsnL2xvY2FsZS5wcm9wZXJ0aWVzJ1wiIG9yaWdpbj1cIm5neC1leHRlbmRlZC1wZGYtdmlld2VyXCIgLz5cclxuPHBkZi1kYXJrLXRoZW1lICpuZ0lmPVwidGhlbWU9PT0nZGFyaydcIj48L3BkZi1kYXJrLXRoZW1lPlxyXG48cGRmLWxpZ2h0LXRoZW1lICpuZ0lmPVwidGhlbWU9PT0nbGlnaHQnXCI+PC9wZGYtbGlnaHQtdGhlbWU+XHJcblxyXG48cGRmLWR5bmFtaWMtY3NzIFt6b29tXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCIgW3dpZHRoXT1cInRvb2xiYXJXaWR0aEluUGl4ZWxzXCI+PC9wZGYtZHluYW1pYy1jc3M+XHJcbjxkaXYgY2xhc3M9XCJ6b29tXCIgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIj5cclxuICA8ZGl2IGNsYXNzPVwiaHRtbFwiPlxyXG4gICAgPGRpdiBpZD1cIm1haW5Db250YWluZXJcIj5cclxuICAgICAgPHBkZi1kdW1teS1jb21wb25lbnRzPjwvcGRmLWR1bW15LWNvbXBvbmVudHM+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRGcmVlRmxvYXRpbmdCYXI+XHJcblxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
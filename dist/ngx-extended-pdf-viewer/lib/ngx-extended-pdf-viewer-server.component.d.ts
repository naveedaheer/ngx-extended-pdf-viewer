import { OnChanges, OnDestroy, EventEmitter, TemplateRef, OnInit, SimpleChanges } from '@angular/core';
import { PagesLoadedEvent } from './events/pages-loaded-event';
import { PageRenderedEvent } from './events/page-rendered-event';
import { PdfDownloadedEvent } from './events/pdf-downloaded-event';
import { PdfLoadedEvent } from './events/pdf-loaded-event';
import { VerbosityLevel } from './options/verbosity-level';
import { FindState, FindResultMatchesCount } from './events/find-result';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import { AfterViewInit, ElementRef } from '@angular/core';
import { TextLayerRenderedEvent } from './events/textlayer-rendered';
import { PdfThumbnailDrawnEvent } from './events/pdf-thumbnail-drawn-event';
import { ScrollModeType } from './options/pdf-viewer';
import { ProgressBarEvent } from './events/progress-bar-event';
import { FormDataType } from './ngx-extended-pdf-viewer.component';
import * as i0 from "@angular/core";
export declare class NgxExtendedPdfViewerServerComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    static ngxExtendedPdfViewerInitialized: boolean;
    /**
     * The dummy components are inserted automatically when the user customizes the toolbar
     * without adding every original toolbar item. Without the dummy components, the
     * initialization code of pdf.js crashes because it assume that every standard widget is there.
     */
    dummyComponents: PdfDummyComponentsComponent;
    root: ElementRef;
    customFindbarInputArea: TemplateRef<any>;
    customToolbar: TemplateRef<any>;
    customFindbar: TemplateRef<any>;
    customFindbarButtons: TemplateRef<any> | undefined;
    customSecondaryToolbar: TemplateRef<any>;
    customSidebar: TemplateRef<any>;
    customThumbnail: TemplateRef<any>;
    customFreeFloatingBar: TemplateRef<any>;
    formData: FormDataType;
    formDataChange: EventEmitter<FormDataType>;
    pageViewMode: 'single' | 'book' | 'multiple' | 'infinite-scroll';
    progress: EventEmitter<ProgressBarEvent>;
    private secondaryToolbarComponent;
    private sidebarComponent;
    srcChange: EventEmitter<string>;
    scrollMode: ScrollModeType | undefined;
    scrollModeChange: EventEmitter<ScrollModeType>;
    authorization: Object | undefined;
    httpHeaders: Object | undefined;
    contextMenuAllowed: boolean;
    afterPrint: EventEmitter<void>;
    beforePrint: EventEmitter<void>;
    currentZoomFactor: EventEmitter<number>;
    enablePrint: boolean;
    /**
     * Number of milliseconds to wait between initializing the PDF viewer and loading the PDF file.
     * Most users can let this parameter safely at it's default value of zero.
     * Set this to 1000 or higher if you run into timing problems (typically caused by loading the locale files
     * after the PDF files, so they are not available when the PDF viewer is initialized).
     */
    delayFirstView: number;
    /** store the timeout id so it can be canceled if user leaves the page before the PDF is shown */
    private initTimeout;
    /** How many log messages should be printed?
     * Legal values: VerbosityLevel.INFOS (= 5), VerbosityLevel.WARNINGS (= 1), VerbosityLevel.ERRORS (= 0) */
    logLevel: VerbosityLevel;
    enablePinchOnMobile: boolean;
    /** Use the minified (minifiedJSLibraries="true", which is the default) or the user-readable pdf.js library (minifiedJSLibraries="false") */
    minifiedJSLibraries: boolean;
    primaryMenuVisible: boolean;
    /** option to increase (or reduce) print resolution. Default is 150 (dpi). Sensible values
     * are 300, 600, and 1200. Note the increase memory consumption, which may even result in a browser crash. */
    printResolution: null;
    rotation: 0 | 90 | 180 | 270;
    rotationChange: EventEmitter<0 | 90 | 180 | 270>;
    hasSignature: boolean;
    set src(url: string | ArrayBuffer | Blob | Uint8Array | {
        range: any;
    });
    set base64Src(base64: string);
    set height(h: string);
    /**
     * If this flag is true, this components adds a link to the locale assets. The pdf viewer
     * sees this link and uses it to load the locale files automatically.
     * @param useBrowserLocale boolean
     */
    useBrowserLocale: boolean;
    backgroundColor: string;
    /** Allows the user to define the name of the file after clicking "download" */
    filenameForDownload: string;
    /** Allows the user to disable the keyboard bindings completely */
    ignoreKeyboard: boolean;
    /** Allows the user to disable a list of key bindings. */
    ignoreKeys: Array<string>;
    /** Allows the user to enable a list of key bindings explicitly. If this property is set, every other key binding is ignored. */
    acceptKeys: Array<string>;
    /** Allows the user to put the viewer's svg images into an arbitrary folder */
    imageResourcesPath: string;
    /** Allows the user to put their locale folder into an arbitrary folder */
    localeFolderPath: string;
    /** Override the default locale. This must be the complete locale name, such as "es-ES". The string is allowed to be all lowercase.
     */
    language: string | undefined;
    /** By default, listening to the URL is deactivated because often the anchor tag is used for the Angular router */
    listenToURL: boolean;
    /** Navigate to a certain "named destination" */
    nameddest: string | undefined;
    /** allows you to pass a password to read password-protected files */
    password: string | undefined;
    /** pdf.js can show signatures, but fails to verify them. So they are switched off by default.
     * Set "[showUnverifiedSignatures]"="true" to display e-signatures nonetheless.
     */
    showUnverifiedSignatures: boolean;
    startTabindex: number | undefined;
    get showSidebarButton(): boolean;
    set showSidebarButton(show: boolean);
    sidebarVisible: boolean | undefined;
    sidebarVisibleChange: EventEmitter<boolean>;
    showFindButton: boolean | undefined;
    showPagingButtons: boolean;
    showZoomButtons: boolean;
    showPresentationModeButton: boolean;
    showOpenFileButton: boolean;
    showPrintButton: boolean;
    showDownloadButton: boolean;
    showBookmarkButton: boolean;
    theme: 'dark' | 'light' | 'custom';
    showToolbar: boolean;
    showSecondaryToolbarButton: boolean;
    /** Set by the event (secondaryMenuIsEmpty) */
    hideKebabMenuForSecondaryToolbar: boolean;
    showRotateButton: boolean;
    handTool: boolean;
    handToolChange: EventEmitter<boolean>;
    showHandToolButton: boolean;
    showScrollingButton: boolean;
    showSpreadButton: boolean;
    showPropertiesButton: boolean;
    showBorders: boolean;
    spread: 'off' | 'even' | 'odd';
    spreadChange: EventEmitter<"off" | "even" | "odd">;
    thumbnailDrawn: EventEmitter<PdfThumbnailDrawnEvent>;
    private _page;
    get page(): number | undefined;
    set page(p: number | undefined);
    pageChange: EventEmitter<number | undefined>;
    pageLabel: string | undefined;
    pageLabelChange: EventEmitter<string | undefined>;
    pagesLoaded: EventEmitter<PagesLoadedEvent>;
    pageRendered: EventEmitter<PageRenderedEvent>;
    pdfDownloaded: EventEmitter<PdfDownloadedEvent>;
    pdfLoaded: EventEmitter<PdfLoadedEvent>;
    pdfLoadingFailed: EventEmitter<Error>;
    textLayer: boolean | undefined;
    textLayerRendered: EventEmitter<TextLayerRenderedEvent>;
    updateFindMatchesCount: EventEmitter<FindResultMatchesCount>;
    updateFindState: EventEmitter<FindState>;
    /** Legal values: undefined, 'auto', 'page-actual', 'page-fit', 'page-width', or '50' (or any other percentage) */
    zoom: string | number | undefined;
    zoomChange: EventEmitter<string | number | undefined>;
    zoomLevels: (string | number)[];
    maxZoom: number;
    minZoom: number;
    /** This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     */
    _mobileFriendlyZoom: string;
    mobileFriendlyZoomScale: number;
    toolbarMarginTop: string;
    toolbarWidth: string;
    toolbarWidthInPixels: number;
    secondaryToolbarTop: string | undefined;
    findbarTop: string | undefined;
    findbarLeft: string | undefined;
    buttonValues: any;
    get mobileFriendlyZoom(): string;
    /**
     * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     */
    set mobileFriendlyZoom(zoom: string);
    private shuttingDown;
    get sidebarPositionTop(): string;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onContextMenu(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxExtendedPdfViewerServerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxExtendedPdfViewerServerComponent, "ngx-extended-pdf-viewer", never, { "customFindbarInputArea": "customFindbarInputArea"; "customToolbar": "customToolbar"; "customFindbar": "customFindbar"; "customFindbarButtons": "customFindbarButtons"; "customSecondaryToolbar": "customSecondaryToolbar"; "customSidebar": "customSidebar"; "customThumbnail": "customThumbnail"; "customFreeFloatingBar": "customFreeFloatingBar"; "formData": "formData"; "pageViewMode": "pageViewMode"; "scrollMode": "scrollMode"; "authorization": "authorization"; "httpHeaders": "httpHeaders"; "contextMenuAllowed": "contextMenuAllowed"; "enablePrint": "enablePrint"; "delayFirstView": "delayFirstView"; "logLevel": "logLevel"; "enablePinchOnMobile": "enablePinchOnMobile"; "minifiedJSLibraries": "minifiedJSLibraries"; "printResolution": "printResolution"; "rotation": "rotation"; "src": "src"; "base64Src": "base64Src"; "height": "height"; "useBrowserLocale": "useBrowserLocale"; "backgroundColor": "backgroundColor"; "filenameForDownload": "filenameForDownload"; "ignoreKeyboard": "ignoreKeyboard"; "ignoreKeys": "ignoreKeys"; "acceptKeys": "acceptKeys"; "imageResourcesPath": "imageResourcesPath"; "localeFolderPath": "localeFolderPath"; "language": "language"; "listenToURL": "listenToURL"; "nameddest": "nameddest"; "password": "password"; "showUnverifiedSignatures": "showUnverifiedSignatures"; "startTabindex": "startTabindex"; "showSidebarButton": "showSidebarButton"; "sidebarVisible": "sidebarVisible"; "showFindButton": "showFindButton"; "showPagingButtons": "showPagingButtons"; "showZoomButtons": "showZoomButtons"; "showPresentationModeButton": "showPresentationModeButton"; "showOpenFileButton": "showOpenFileButton"; "showPrintButton": "showPrintButton"; "showDownloadButton": "showDownloadButton"; "showBookmarkButton": "showBookmarkButton"; "theme": "theme"; "showToolbar": "showToolbar"; "showSecondaryToolbarButton": "showSecondaryToolbarButton"; "showRotateButton": "showRotateButton"; "handTool": "handTool"; "showHandToolButton": "showHandToolButton"; "showScrollingButton": "showScrollingButton"; "showSpreadButton": "showSpreadButton"; "showPropertiesButton": "showPropertiesButton"; "showBorders": "showBorders"; "spread": "spread"; "page": "page"; "pageLabel": "pageLabel"; "textLayer": "textLayer"; "zoom": "zoom"; "zoomLevels": "zoomLevels"; "maxZoom": "maxZoom"; "minZoom": "minZoom"; "_mobileFriendlyZoom": "_mobileFriendlyZoom"; "mobileFriendlyZoom": "mobileFriendlyZoom"; }, { "formDataChange": "formDataChange"; "progress": "progress"; "srcChange": "srcChange"; "scrollModeChange": "scrollModeChange"; "afterPrint": "afterPrint"; "beforePrint": "beforePrint"; "currentZoomFactor": "currentZoomFactor"; "rotationChange": "rotationChange"; "sidebarVisibleChange": "sidebarVisibleChange"; "handToolChange": "handToolChange"; "spreadChange": "spreadChange"; "thumbnailDrawn": "thumbnailDrawn"; "pageChange": "pageChange"; "pageLabelChange": "pageLabelChange"; "pagesLoaded": "pagesLoaded"; "pageRendered": "pageRendered"; "pdfDownloaded": "pdfDownloaded"; "pdfLoaded": "pdfLoaded"; "pdfLoadingFailed": "pdfLoadingFailed"; "textLayerRendered": "textLayerRendered"; "updateFindMatchesCount": "updateFindMatchesCount"; "updateFindState": "updateFindState"; "zoomChange": "zoomChange"; }, never, never>;
}

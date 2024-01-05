import { OnChanges, SimpleChanges, OnDestroy, EventEmitter, NgZone, TemplateRef, OnInit } from '@angular/core';
import { PagesLoadedEvent } from './events/pages-loaded-event';
import { PageRenderedEvent } from './events/page-rendered-event';
import { PdfDownloadedEvent } from './events/pdf-downloaded-event';
import { PdfLoadedEvent } from './events/pdf-loaded-event';
import { VerbosityLevel } from './options/verbosity-level';
import { FindState, FindResultMatchesCount } from './events/find-result';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import { AfterViewInit, ElementRef } from '@angular/core';
import { PDFNotificationService } from './pdf-notification-service';
import { TextLayerRenderedEvent } from './events/textlayer-rendered';
import { Location } from '@angular/common';
import { PdfThumbnailDrawnEvent } from './events/pdf-thumbnail-drawn-event';
import { ScrollModeType } from './options/pdf-viewer';
import { ProgressBarEvent } from './events/progress-bar-event';
import { PageRenderEvent } from './events/page-render-event';
import * as i0 from "@angular/core";
export interface FormDataType {
    [fieldName: string]: string | number | boolean | string[];
}
export declare class NgxExtendedPdfViewerComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    private ngZone;
    private platformId;
    private notificationService;
    private location;
    private elementRef;
    static ngxExtendedPdfViewerInitialized: boolean;
    ngxExtendedPdfViewerIncompletelyInitialized: boolean;
    /**
     * The dummy components are inserted automatically when the user customizes the toolbar
     * without adding every original toolbar item. Without the dummy components, the
     * initialization code of pdf.js crashes because it assume that every standard widget is there.
     */
    dummyComponents: PdfDummyComponentsComponent;
    root: ElementRef;
    private pinchOnMobileSupport;
    customFindbarInputArea: TemplateRef<any> | undefined;
    customToolbar: TemplateRef<any> | undefined;
    customFindbar: TemplateRef<any> | undefined;
    customFindbarButtons: TemplateRef<any> | undefined;
    customSecondaryToolbar: TemplateRef<any> | undefined;
    customSidebar: TemplateRef<any> | undefined;
    customThumbnail: TemplateRef<any> | undefined;
    customFreeFloatingBar: TemplateRef<any> | undefined;
    enableDragAndDrop: boolean;
    formData: FormDataType;
    /** Maps the internal ids of the annotations of pdf.js to their field name */
    private formIdToFieldName;
    private formRadioButtonValueToId;
    formDataChange: EventEmitter<FormDataType>;
    pageViewMode: 'single' | 'book' | 'multiple' | 'infinite-scroll' | string;
    progress: EventEmitter<ProgressBarEvent>;
    private secondaryToolbarComponent;
    private sidebarComponent;
    private _src;
    srcChange: EventEmitter<string>;
    scrollMode: ScrollModeType | undefined;
    scrollModeChange: EventEmitter<ScrollModeType>;
    authorization: Object | undefined;
    httpHeaders: Object | undefined;
    contextMenuAllowed: boolean;
    afterPrint: EventEmitter<void>;
    beforePrint: EventEmitter<void>;
    currentZoomFactor: EventEmitter<number>;
    /** This field stores the previous zoom level if the page is enlarged with a double-tap or double-click */
    private previousZoom;
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
    set src(url: string | ArrayBuffer | Blob | Uint8Array | URL | {
        range: any;
    });
    set base64Src(base64: string | null | undefined);
    /**
     * The combination of height, minHeight, and autoHeight ensures the PDF height of the PDF viewer is calculated correctly when the height is a percentage.
     * By default, many CSS frameworks make a div with 100% have a height or zero pixels. checkHeigth() fixes this.
     */
    private autoHeight;
    minHeight: string | undefined;
    private _height;
    set height(h: string);
    get height(): string;
    /**
     * If this flag is true, this components adds a link to the locale assets. The pdf viewer
     * sees this link and uses it to load the locale files automatically.
     * @param useBrowserLocale boolean
     */
    useBrowserLocale: boolean;
    backgroundColor: string;
    /** Allows the user to define the name of the file after clicking "download" */
    filenameForDownload: string | undefined;
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
    _showSidebarButton: boolean;
    viewerPositionTop: string;
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
    theme: 'dark' | 'light' | 'custom' | string;
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
    pageRender: EventEmitter<PageRenderEvent>;
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
    /** This attribute allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     */
    _mobileFriendlyZoom: string;
    mobileFriendlyZoomScale: number;
    toolbarMarginTop: string;
    toolbarWidth: string;
    toolbarWidthInPixels: number;
    secondaryToolbarTop: string | undefined;
    sidebarPositionTop: string | undefined;
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
    calcViewerPositionTop(): void;
    constructor(ngZone: NgZone, platformId: any, notificationService: PDFNotificationService, location: Location, elementRef: ElementRef);
    private iOSVersionRequiresES5;
    private needsES5;
    private ngxBrowserSupportsNullSafeChaining;
    private loadViewer;
    ngOnInit(): void;
    private loadPdfJs;
    ngAfterViewInit(): void;
    private assignTabindexes;
    private showElementsRecursively;
    private collectElementPositions;
    private doInitPDFViewer;
    /** Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available */
    private afterLibraryInit;
    checkHeight(): void;
    private calculateBorderMarging;
    onSpreadChange(newSpread: 'off' | 'even' | 'odd'): void;
    private activateTextlayerIfNecessary;
    private overrideDefaultSettings;
    private openPDF;
    private removeScrollbarInInititeScrollMode;
    openPDF2(): Promise<void>;
    private selectCursorTool;
    ngOnDestroy(): Promise<void>;
    private isPrimaryMenuVisible;
    ngOnChanges(changes: SimpleChanges): Promise<void>;
    private setZoom;
    onResize(): void;
    onContextMenu(): boolean;
    onSecondaryMenuIsEmpty(hideKebabButton: boolean): void;
    getFormValue(key: string): Object;
    setFormValue(key: string, value: string): void;
    assignFormIdAndFieldName(key: string, fieldName: string | boolean, radioButtonField?: string): void;
    updateFormFields(formData: Object, previousFormData: Object): void;
    loadComplete(pdf: any): void;
    zoomToPageWidth(event: MouseEvent): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxExtendedPdfViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxExtendedPdfViewerComponent, "ngx-extended-pdf-viewer", never, { "customFindbarInputArea": "customFindbarInputArea"; "customToolbar": "customToolbar"; "customFindbar": "customFindbar"; "customFindbarButtons": "customFindbarButtons"; "customSecondaryToolbar": "customSecondaryToolbar"; "customSidebar": "customSidebar"; "customThumbnail": "customThumbnail"; "customFreeFloatingBar": "customFreeFloatingBar"; "enableDragAndDrop": "enableDragAndDrop"; "formData": "formData"; "pageViewMode": "pageViewMode"; "scrollMode": "scrollMode"; "authorization": "authorization"; "httpHeaders": "httpHeaders"; "contextMenuAllowed": "contextMenuAllowed"; "enablePrint": "enablePrint"; "delayFirstView": "delayFirstView"; "logLevel": "logLevel"; "enablePinchOnMobile": "enablePinchOnMobile"; "minifiedJSLibraries": "minifiedJSLibraries"; "printResolution": "printResolution"; "rotation": "rotation"; "src": "src"; "base64Src": "base64Src"; "height": "height"; "useBrowserLocale": "useBrowserLocale"; "backgroundColor": "backgroundColor"; "filenameForDownload": "filenameForDownload"; "ignoreKeyboard": "ignoreKeyboard"; "ignoreKeys": "ignoreKeys"; "acceptKeys": "acceptKeys"; "imageResourcesPath": "imageResourcesPath"; "localeFolderPath": "localeFolderPath"; "language": "language"; "listenToURL": "listenToURL"; "nameddest": "nameddest"; "password": "password"; "showUnverifiedSignatures": "showUnverifiedSignatures"; "startTabindex": "startTabindex"; "showSidebarButton": "showSidebarButton"; "sidebarVisible": "sidebarVisible"; "showFindButton": "showFindButton"; "showPagingButtons": "showPagingButtons"; "showZoomButtons": "showZoomButtons"; "showPresentationModeButton": "showPresentationModeButton"; "showOpenFileButton": "showOpenFileButton"; "showPrintButton": "showPrintButton"; "showDownloadButton": "showDownloadButton"; "showBookmarkButton": "showBookmarkButton"; "theme": "theme"; "showToolbar": "showToolbar"; "showSecondaryToolbarButton": "showSecondaryToolbarButton"; "showRotateButton": "showRotateButton"; "handTool": "handTool"; "showHandToolButton": "showHandToolButton"; "showScrollingButton": "showScrollingButton"; "showSpreadButton": "showSpreadButton"; "showPropertiesButton": "showPropertiesButton"; "showBorders": "showBorders"; "spread": "spread"; "page": "page"; "pageLabel": "pageLabel"; "textLayer": "textLayer"; "zoom": "zoom"; "zoomLevels": "zoomLevels"; "maxZoom": "maxZoom"; "minZoom": "minZoom"; "_mobileFriendlyZoom": "_mobileFriendlyZoom"; "mobileFriendlyZoom": "mobileFriendlyZoom"; }, { "formDataChange": "formDataChange"; "progress": "progress"; "srcChange": "srcChange"; "scrollModeChange": "scrollModeChange"; "afterPrint": "afterPrint"; "beforePrint": "beforePrint"; "currentZoomFactor": "currentZoomFactor"; "rotationChange": "rotationChange"; "sidebarVisibleChange": "sidebarVisibleChange"; "handToolChange": "handToolChange"; "spreadChange": "spreadChange"; "thumbnailDrawn": "thumbnailDrawn"; "pageChange": "pageChange"; "pageLabelChange": "pageLabelChange"; "pagesLoaded": "pagesLoaded"; "pageRender": "pageRender"; "pageRendered": "pageRendered"; "pdfDownloaded": "pdfDownloaded"; "pdfLoaded": "pdfLoaded"; "pdfLoadingFailed": "pdfLoadingFailed"; "textLayerRendered": "textLayerRendered"; "updateFindMatchesCount": "updateFindMatchesCount"; "updateFindState": "updateFindState"; "zoomChange": "zoomChange"; }, never, ["*"]>;
}

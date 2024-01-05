import { Component, Input, Output, EventEmitter, TemplateRef, ElementRef, HostListener, } from '@angular/core';
import { PDFNotificationService } from './../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "./../../pdf-notification-service";
import * as i2 from "@angular/common";
function PdfSecondaryToolbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "button", 4);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 5);
    i0.ɵɵelement(4, "path", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "span", 7);
    i0.ɵɵtext(6, "Presentation Mode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 8);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(8, "svg", 5);
    i0.ɵɵelement(9, "path", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(10, "span", 10);
    i0.ɵɵtext(11, "Open");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 11);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(13, "svg", 5);
    i0.ɵɵelement(14, "path", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "span", 13);
    i0.ɵɵtext(16, "Print");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 14);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(18, "svg", 5);
    i0.ɵɵelement(19, "path", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(20, "span", 16);
    i0.ɵɵtext(21, "Download");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "a", 17);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(23, "svg", 5);
    i0.ɵɵelement(24, "path", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(25, "span", 19);
    i0.ɵɵtext(26, "Current View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "button", 20);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(28, "svg", 21);
    i0.ɵɵelement(29, "path", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(30, "span", 23);
    i0.ɵɵtext(31, "Go to First Page");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "button", 24);
    i0.ɵɵlistener("click", function PdfSecondaryToolbarComponent_ng_template_1_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.previousPage(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(33, "svg", 21);
    i0.ɵɵelement(34, "path", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(35, "span", 26);
    i0.ɵɵtext(36, "Go to Previous Page");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "button", 27);
    i0.ɵɵlistener("click", function PdfSecondaryToolbarComponent_ng_template_1_Template_button_click_37_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.nextPage(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(38, "svg", 21);
    i0.ɵɵelement(39, "path", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(40, "span", 29);
    i0.ɵɵtext(41, "Go to Next Page");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "button", 30);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(43, "svg", 21);
    i0.ɵɵelement(44, "path", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(45, "span", 32);
    i0.ɵɵtext(46, "Go to Last Page");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "button", 33);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(48, "svg", 5);
    i0.ɵɵelement(49, "path", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(50, "span", 35);
    i0.ɵɵtext(51, "Rotate Clockwise");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "button", 36);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(53, "svg", 5);
    i0.ɵɵelement(54, "path", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(55, "span", 38);
    i0.ɵɵtext(56, "Rotate Counterclockwise");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "button", 39);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(58, "svg", 5);
    i0.ɵɵelement(59, "path", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(60, "span", 41);
    i0.ɵɵtext(61, "Text Selection Tool");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "button", 42);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(63, "svg", 5);
    i0.ɵɵelement(64, "path", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(65, "span", 44);
    i0.ɵɵtext(66, "Hand Tool");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "button", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(68, "svg", 46);
    i0.ɵɵelement(69, "path", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(70, "span", 48);
    i0.ɵɵtext(71, "Vertical Scrolling");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "button", 49);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(73, "svg", 46);
    i0.ɵɵelement(74, "path", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(75, "span", 51);
    i0.ɵɵtext(76, "Horizontal Scrolling");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "button", 52);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(78, "svg", 46);
    i0.ɵɵelement(79, "path", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(80, "span", 54);
    i0.ɵɵtext(81, "Wrapped Scrolling");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "button", 55);
    i0.ɵɵlistener("click", function PdfSecondaryToolbarComponent_ng_template_1_Template_button_click_82_listener() { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onSpreadChange("off"); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(83, "svg", 56);
    i0.ɵɵelement(84, "path", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(85, "span", 58);
    i0.ɵɵtext(86, "No Spreads");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "button", 59);
    i0.ɵɵlistener("click", function PdfSecondaryToolbarComponent_ng_template_1_Template_button_click_87_listener() { i0.ɵɵrestoreView(_r3); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onSpreadChange("odd"); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(88, "svg", 46);
    i0.ɵɵelement(89, "path", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(90, "span", 61);
    i0.ɵɵtext(91, "Odd Spreads");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "button", 62);
    i0.ɵɵlistener("click", function PdfSecondaryToolbarComponent_ng_template_1_Template_button_click_92_listener() { i0.ɵɵrestoreView(_r3); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onSpreadChange("even"); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(93, "svg", 46);
    i0.ɵɵelement(94, "path", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(95, "span", 64);
    i0.ɵɵtext(96, "Even Spreads");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(97, "button", 65);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(98, "svg", 66);
    i0.ɵɵelement(99, "path", 67);
    i0.ɵɵelement(100, "path", 68);
    i0.ɵɵelement(101, "circle", 69);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(102, "span", 70);
    i0.ɵɵtext(103, "Document Properties\u2026");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("top", ctx_r1.secondaryToolbarTop)("transform", "scale(" + ctx_r1.mobileFriendlyZoomScale + ")")("transform-origin", "right top");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("invisible", !ctx_r1.showPresentationModeButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showOpenFileButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showPrintButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showDownloadButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showBookmarkButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showPagingButtons);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showPagingButtons);
    i0.ɵɵproperty("disabled", ctx_r1.disablePreviousPage);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showPagingButtons);
    i0.ɵɵproperty("disabled", ctx_r1.disableNextPage);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showPagingButtons);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showRotateButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showRotateButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showHandToolButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showHandToolButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showScrollingButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showScrollingButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showScrollingButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showSpreadButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showSpreadButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showSpreadButton);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("invisible", !ctx_r1.showPropertiesButton);
} }
export class PdfSecondaryToolbarComponent {
    constructor(element, notificationService) {
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
        this.spreadChange = new EventEmitter();
        this.secondaryMenuIsEmpty = new EventEmitter();
        this.disablePreviousPage = true;
        this.disableNextPage = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('pagechanging', () => {
            this.updateUIState();
        });
        PDFViewerApplication.eventBus.on('pagerendered', () => {
            this.updateUIState();
        });
    }
    updateUIState() {
        setTimeout(() => {
            const PDFViewerApplication = window.PDFViewerApplication;
            const currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
            const previousButton = document.getElementById('previousPage');
            if (previousButton) {
                this.disablePreviousPage = Number(currentPage) <= 1;
                previousButton.disabled = this.disablePreviousPage;
            }
            const nextButton = document.getElementById('nextPage');
            if (nextButton) {
                this.disableNextPage = currentPage === PDFViewerApplication.pagesCount;
                nextButton.disabled = this.disableNextPage;
            }
        });
    }
    onSpreadChange(newSpread) {
        this.spreadChange.emit(newSpread);
    }
    ngOnChanges(changes) {
        setTimeout(() => this.checkVisibility());
    }
    onResize() {
        setTimeout(() => this.checkVisibility());
    }
    ngAfterViewInit() {
        setTimeout(() => this.checkVisibility());
    }
    ngOnInit() {
        setTimeout(() => this.checkVisibility());
    }
    checkVisibility() {
        let visibleButtons = 0;
        const e = this.element.nativeElement;
        const f = e.children.item(0);
        if (f) {
            const g = f.children.item(0);
            if (g && g instanceof HTMLElement) {
                visibleButtons = this.checkVisibilityRecursively(g);
            }
        }
        this.secondaryMenuIsEmpty.emit(visibleButtons === 0);
    }
    checkVisibilityRecursively(e) {
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
        const style = window.getComputedStyle(e);
        if (style.display === 'none') {
            return 0;
        }
        if (e instanceof HTMLButtonElement || e instanceof HTMLAnchorElement) {
            return 1;
        }
        let count = 0;
        const children = e.children;
        if (children && children.length) {
            for (let i = 0; i < children.length && count === 0; i++) {
                const child = children.item(i);
                if (child && child instanceof HTMLElement) {
                    count += this.checkVisibilityRecursively(child);
                }
            }
        }
        return count;
    }
    previousPage() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('previouspage');
    }
    nextPage() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('nextpage');
    }
}
/** @nocollapse */ PdfSecondaryToolbarComponent.ɵfac = function PdfSecondaryToolbarComponent_Factory(t) { return new (t || PdfSecondaryToolbarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.PDFNotificationService)); };
/** @nocollapse */ PdfSecondaryToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSecondaryToolbarComponent, selectors: [["pdf-secondary-toolbar"]], hostBindings: function PdfSecondaryToolbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function PdfSecondaryToolbarComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { customSecondaryToolbar: "customSecondaryToolbar", secondaryToolbarTop: "secondaryToolbarTop", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", showBookmarkButton: "showBookmarkButton", showPagingButtons: "showPagingButtons", showRotateButton: "showRotateButton", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton" }, outputs: { spreadChange: "spreadChange", secondaryMenuIsEmpty: "secondaryMenuIsEmpty" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 1, consts: [[3, "ngTemplateOutlet"], ["defaultSecondaryToolbar", ""], ["id", "secondaryToolbar", 1, "secondaryToolbar", "hidden", "doorHangerRight"], ["id", "secondaryToolbarButtonContainer"], ["type", "button", "id", "secondaryPresentationMode", "title", "Switch to Presentation Mode", "data-l10n-id", "presentation_mode", 1, "secondaryToolbarButton", "visibleLargeView"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"], ["data-l10n-id", "presentation_mode_label"], ["type", "button", "id", "secondaryOpenFile", "title", "Open File", "data-l10n-id", "open_file", 1, "secondaryToolbarButton", "visibleMediumView"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z"], ["data-l10n-id", "open_file_label"], ["type", "button", "id", "secondaryPrint", "title", "Print", "data-l10n-id", "print", 1, "secondaryToolbarButton", "visibleSmallView"], ["fill", "currentColor", "d", "M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"], ["data-l10n-id", "print_label"], ["type", "button", "id", "secondaryDownload", "title", "Download", "data-l10n-id", "download", 1, "secondaryToolbarButton", "visibleSmallView"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z"], ["data-l10n-id", "download_label"], ["href", "#", "id", "secondaryViewBookmark", "title", "Current view (copy or open in new window)", "data-l10n-id", "bookmark", 1, "secondaryToolbarButton", "bookmark", "visibleTinyView"], ["fill", "currentColor", "d", "M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"], ["data-l10n-id", "bookmark_label"], ["type", "button", "id", "firstPage", "title", "Go to First Page", "data-l10n-id", "first_page", 1, "secondaryToolbarButton", "firstPage", "visibleLargeView"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z"], ["data-l10n-id", "first_page_label"], ["type", "button", "id", "previousPage", "title", "Go to Previous Page", "data-l10n-id", "previous", 1, "secondaryToolbarButton", "previousPage", "visibleTinyView", 3, "disabled", "click"], ["fill", "currentColor", "d", "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"], ["data-l10n-id", "previous_label"], ["type", "button", "id", "nextPage", "title", "Go to Next Page", "data-l10n-id", "next", 1, "secondaryToolbarButton", "nextPage", "visibleTinyView", 3, "disabled", "click"], ["fill", "currentColor", "d", "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"], ["data-l10n-id", "next_label"], ["type", "button", "id", "lastPage", "title", "Go to Last Page", "data-l10n-id", "last_page", 1, "secondaryToolbarButton", "lastPage", "visibleLargeView"], ["fill", "currentColor", "d", "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z"], ["data-l10n-id", "last_page_label"], ["type", "button", "id", "pageRotateCw", "title", "Rotate Clockwise", "data-l10n-id", "page_rotate_cw", 1, "secondaryToolbarButton", "rotateCw", "visibleXLView"], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3"], ["data-l10n-id", "page_rotate_cw_label"], ["type", "button", "id", "pageRotateCcw", "title", "Rotate Counterclockwise", "data-l10n-id", "page_rotate_ccw", 1, "secondaryToolbarButton", "rotateCcw", "visibleXLView"], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3"], ["data-l10n-id", "page_rotate_ccw_label"], ["type", "button", "id", "cursorSelectTool", "title", "Enable Text Selection Tool", "data-l10n-id", "cursor_text_select_tool", 1, "secondaryToolbarButton", "toggled", "visibleXXLView"], ["fill", "currentColor", "d", "M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z"], ["data-l10n-id", "cursor_text_select_tool_label"], ["type", "button", "id", "cursorHandTool", "title", "Enable Hand Tool", "data-l10n-id", "cursor_hand_tool", 1, "secondaryToolbarButton", "visibleXXLView"], ["fill", "currentColor", "d", "M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"], ["data-l10n-id", "cursor_hand_tool_label"], ["type", "button", "id", "scrollVertical", "title", "Use Vertical Scrolling", "data-l10n-id", "scroll_vertical", 1, "secondaryToolbarButton", "scrollVertical", "toggled"], [2, "width", "24px", "height", "24px", "margin-top", "3px"], ["fill", "currentColor", "d", "M9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM11 0v.5c0 1-.5 1.5-1.5 1.5h-3C5.5 2 5 1.5 5 .5V0h6zM11 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6z"], ["data-l10n-id", "scroll_vertical_label"], ["type", "button", "id", "scrollHorizontal", "title", "Use Horizontal Scrolling", "data-l10n-id", "scroll_horizontal", 1, "secondaryToolbarButton", "scrollHorizontal"], ["fill", "currentColor", "d", "M0 4h1.5c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5H0zM9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM16 4h-1.5c-1 0-1.5.5-1.5 1.5v5c0 1 .5 1.5 1.5 1.5H16z"], ["data-l10n-id", "scroll_horizontal_label"], ["type", "button", "id", "scrollWrapped", "title", "Use Wrapped Scrolling", "data-l10n-id", "scroll_wrapped", 1, "secondaryToolbarButton", "scrollWrapped"], ["fill", "currentColor", "d", "M5.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C1 4.5 1.5 4 2.5 4zM7 0v.5C7 1.5 6.5 2 5.5 2h-3C1.5 2 1 1.5 1 .5V0h6zM7 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6zM13.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5zM15 0v.5c0 1-.5 1.5-1.5 1.5h-3C9.5 2 9 1.5 9 .5V0h6zM15 16v-.507c0-1-.5-1.5-1.5-1.5h-3C9.5 14 9 14.5 9 15.5v.5h6z"], ["data-l10n-id", "scroll_wrapped_label"], ["type", "button", "id", "spreadNone", "title", "Do not join page spreads", "data-l10n-id", "spread_none", 1, "secondaryToolbarButton", "spreadNone", "toggled", 3, "click"], ["height", "16", "width", "16"], ["fill", "currentColor", "d", "M6 3c-1 0-1.5.5-1.5 1.5v7c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5v-7c0-1-.5-1.5-1.5-1.5z"], ["data-l10n-id", "spread_none_label"], ["type", "button", "id", "spreadOdd", "title", "Join page spreads starting with odd-numbered pages", "data-l10n-id", "spread_odd", 1, "secondaryToolbarButton", "spreadOdd", 3, "click"], ["fill", "currentColor", "d", "M10.56 3.5C9.56 3.5 9 4 9 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.93 1.2c.8 0 1.4.2 1.8.64.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.44-.2.3-.6.6-1 .93l-.6.4c-.4.3-.6.4-.7.55-.1.1-.2.2-.3.4h3.2v1.27h-5c0-.5.1-1 .3-1.43.2-.49.7-1 1.5-1.54.7-.5 1.1-.8 1.3-1.02.3-.3.4-.7.4-1.05 0-.3-.1-.6-.3-.77-.2-.2-.4-.3-.7-.3-.4 0-.7.2-.9.5-.1.2-.1.5-.2.9h-1.4c0-.6.2-1.1.3-1.5.4-.7 1.1-1.1 2-1.1zM1.54 3.5C.54 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.54 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.8 1.125H4.5V12H3V6.9H1.3v-1c.5 0 .8 0 .97-.03.33-.07.53-.17.73-.37.1-.2.2-.3.25-.5.05-.2.05-.3.05-.3z"], ["data-l10n-id", "spread_odd_label"], ["type", "button", "id", "spreadEven", "title", "Join page spreads starting with even-numbered pages", "data-l10n-id", "spread_even", 1, "secondaryToolbarButton", "spreadEven", 3, "click"], ["fill", "currentColor", "d", "M1.5 3.5C.5 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm2 1.2c.8 0 1.4.2 1.8.6.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.4-.2.3-.5.7-1 1l-.6.4c-.4.3-.6.4-.75.56-.15.14-.25.24-.35.44H6v1.3H1c0-.6.1-1.1.3-1.5.3-.6.7-1 1.5-1.6.7-.4 1.1-.8 1.28-1 .32-.3.42-.6.42-1 0-.3-.1-.6-.23-.8-.17-.2-.37-.3-.77-.3s-.7.1-.9.5c-.04.2-.1.5-.1.9H1.1c0-.6.1-1.1.3-1.5.4-.7 1.1-1.1 2.1-1.1zM10.54 3.54C9.5 3.54 9 4 9 5v6.5c0 1 .5 1.5 1.54 1.5h4c.96 0 1.46-.5 1.46-1.5V5c0-1-.5-1.46-1.5-1.46zm1.9.95c.7 0 1.3.2 1.7.5.4.4.6.8.6 1.4 0 .4-.1.8-.4 1.1-.2.2-.3.3-.5.4.1 0 .3.1.6.3.4.3.5.8.5 1.4 0 .6-.2 1.2-.6 1.6-.4.5-1.1.7-1.9.7-1 0-1.8-.3-2.2-1-.14-.29-.24-.69-.24-1.29h1.4c0 .3 0 .5.1.7.2.4.5.5 1 .5.3 0 .5-.1.7-.3.2-.2.3-.5.3-.8 0-.5-.2-.8-.6-.95-.2-.05-.5-.15-1-.15v-1c.5 0 .8-.1 1-.14.3-.1.5-.4.5-.9 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.7-.3-.3 0-.6.1-.75.3-.2.2-.2.5-.2.86h-1.34c0-.4.1-.7.19-1.1 0-.12.2-.32.4-.62.2-.2.4-.3.7-.4.3-.1.6-.1 1-.1z"], ["data-l10n-id", "spread_even_label"], ["type", "button", "id", "documentProperties", "title", "Document Properties\u2026", "data-l10n-id", "document_properties", 1, "secondaryToolbarButton", "documentProperties"], ["viewBox", "0 0 16 16", 2, "width", "16px", "height", "16px", "margin-top", "3px"], ["fill", "currentColor", "d", "M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM8 2a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6z"], ["fill", "currentColor", "d", "M8 7a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z"], ["fill", "currentColor", "cx", "8", "cy", "5", "r", "1.188"], ["data-l10n-id", "document_properties_label"]], template: function PdfSecondaryToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, 0);
        i0.ɵɵtemplate(1, PdfSecondaryToolbarComponent_ng_template_1_Template, 104, 48, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customSecondaryToolbar ? ctx.customSecondaryToolbar : _r0);
    } }, directives: [i2.NgTemplateOutlet], styles: ["svg[_ngcontent-%COMP%]{position:absolute;display:inline-block;top:0;left:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSecondaryToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-secondary-toolbar',
                templateUrl: './pdf-secondary-toolbar.component.html',
                styleUrls: ['./pdf-secondary-toolbar.component.css'],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.PDFNotificationService }]; }, { customSecondaryToolbar: [{
            type: Input
        }], secondaryToolbarTop: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
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
        }], showPagingButtons: [{
            type: Input
        }], showRotateButton: [{
            type: Input
        }], showHandToolButton: [{
            type: Input
        }], showScrollingButton: [{
            type: Input
        }], showSpreadButton: [{
            type: Input
        }], showPropertiesButton: [{
            type: Input
        }], spreadChange: [{
            type: Output
        }], secondaryMenuIsEmpty: [{
            type: Output
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWixXQUFXLEVBQ1gsVUFBVSxFQUNWLFlBQVksR0FFYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7O0lDWHhFLDhCQU1DO0lBQ0MsOEJBQTBDO0lBQ3hDLGlDQU9DO0lBQ0MsbUJBQXdEO0lBQXhELDhCQUF3RDtJQUN0RCwwQkFBdUg7SUFDekgsaUJBQU07SUFDTixvQkFBNkM7SUFBN0MsK0JBQTZDO0lBQUEsaUNBQWlCO0lBQUEsaUJBQU87SUFDdkUsaUJBQVM7SUFFVCxpQ0FPQztJQUNDLG1CQUF3RDtJQUF4RCw4QkFBd0Q7SUFDdEQsMEJBQTRKO0lBQzlKLGlCQUFNO0lBQ04sb0JBQXFDO0lBQXJDLGlDQUFxQztJQUFBLHFCQUFJO0lBQUEsaUJBQU87SUFDbEQsaUJBQVM7SUFFVCxtQ0FPQztJQUNDLG1CQUF3RDtJQUF4RCwrQkFBd0Q7SUFDdEQsNEJBQTJMO0lBQzdMLGlCQUFNO0lBQ04sb0JBQWlDO0lBQWpDLGlDQUFpQztJQUFBLHNCQUFLO0lBQUEs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Q0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7MkhBcEtVLDRCQUE0Qjs4R0FBNUIsNEJBQTRCOzJHQUE1QixjQUFVOztRQ3JCdkIsMkJBQTZIO1FBRTdILGlJQWtTYzs7O1FBcFNBLGdHQUE4Rjs7dUZEcUIvRiw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2FBQ3JEO2tHQUdRLHNCQUFzQjtrQkFENUIsS0FBSztZQUlDLG1CQUFtQjtrQkFEekIsS0FBSztZQUlDLHVCQUF1QjtrQkFEN0IsS0FBSztZQUlDLDBCQUEwQjtrQkFEaEMsS0FBSztZQUlDLGtCQUFrQjtrQkFEeEIsS0FBSztZQUlDLGVBQWU7a0JBRHJCLEtBQUs7WUFJQyxrQkFBa0I7a0JBRHhCLEtBQUs7WUFJQyxrQkFBa0I7a0JBRHhCLEtBQUs7WUFJQyxpQkFBaUI7a0JBRHZCLEtBQUs7WUFJQyxnQkFBZ0I7a0JBRHRCLEtBQUs7WUFJQyxrQkFBa0I7a0JBRHhCLEtBQUs7WUFJQyxtQkFBbUI7a0JBRHpCLEtBQUs7WUFJQyxnQkFBZ0I7a0JBRHRCLEtBQUs7WUFJQyxvQkFBb0I7a0JBRDFCLEtBQUs7WUFJQyxZQUFZO2tCQURsQixNQUFNO1lBSUEsb0JBQW9CO2tCQUQxQixNQUFNO1lBa0RBLFFBQVE7a0JBRGQsWUFBWTttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXNlY29uZGFyeS10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21TZWNvbmRhcnlUb29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZWNvbmRhcnlUb29sYmFyVG9wO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtb2JpbGVGcmllbmRseVpvb21TY2FsZTogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dPcGVuRmlsZUJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmludEJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dCb29rbWFya0J1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQYWdpbmdCdXR0b25zID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1JvdGF0ZUJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dIYW5kVG9vbEJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTY3JvbGxpbmdCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U3ByZWFkQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1Byb3BlcnRpZXNCdXR0b24gPSB0cnVlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3ByZWFkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzZWNvbmRhcnlNZW51SXNFbXB0eSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHVibGljIGRpc2FibGVQcmV2aW91c1BhZ2UgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgZGlzYWJsZU5leHRQYWdlID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UpIHtcclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XHJcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25QZGZKc0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VjaGFuZ2luZycsICgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVVSVN0YXRlKCk7XHJcbiAgICB9KTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlcmVuZGVyZWQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlVUlTdGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlVUlTdGF0ZSgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgICBjb25zdCBjdXJyZW50UGFnZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlcjtcclxuICAgICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlvdXNQYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGlmIChwcmV2aW91c0J1dHRvbikge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVByZXZpb3VzUGFnZSA9IE51bWJlcihjdXJyZW50UGFnZSkgPD0gMTtcclxuICAgICAgICBwcmV2aW91c0J1dHRvbi5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZVByZXZpb3VzUGFnZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRQYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGlmIChuZXh0QnV0dG9uKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlTmV4dFBhZ2UgPSBjdXJyZW50UGFnZSA9PT0gUERGVmlld2VyQXBwbGljYXRpb24ucGFnZXNDb3VudDtcclxuICAgICAgICBuZXh0QnV0dG9uLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlTmV4dFBhZ2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uU3ByZWFkQ2hhbmdlKG5ld1NwcmVhZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNwcmVhZENoYW5nZS5lbWl0KG5ld1NwcmVhZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrVmlzaWJpbGl0eSgpKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxyXG4gIHB1YmxpYyBvblJlc2l6ZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1Zpc2liaWxpdHkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrVmlzaWJpbGl0eSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1Zpc2liaWxpdHkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tWaXNpYmlsaXR5KCk6IHZvaWQge1xyXG4gICAgbGV0IHZpc2libGVCdXR0b25zID0gMDtcclxuICAgIGNvbnN0IGUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGYgPSBlLmNoaWxkcmVuLml0ZW0oMCk7XHJcbiAgICBpZiAoZikge1xyXG4gICAgICBjb25zdCBnID0gZi5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgICBpZiAoZyAmJiBnIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB2aXNpYmxlQnV0dG9ucyA9IHRoaXMuY2hlY2tWaXNpYmlsaXR5UmVjdXJzaXZlbHkoZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2Vjb25kYXJ5TWVudUlzRW1wdHkuZW1pdCh2aXNpYmxlQnV0dG9ucyA9PT0gMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrVmlzaWJpbGl0eVJlY3Vyc2l2ZWx5KGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGlmIChlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGlmIChlLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmlzaWJsZScpKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZSk7XHJcbiAgICBpZiAoc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlIGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgfHwgZSBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gZS5jaGlsZHJlbjtcclxuICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGggJiYgY291bnQgPT09IDA7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW4uaXRlbShpKTtcclxuICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgY291bnQgKz0gdGhpcy5jaGVja1Zpc2liaWxpdHlSZWN1cnNpdmVseShjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJldmlvdXNQYWdlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdwcmV2aW91c3BhZ2UnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZXh0UGFnZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnbmV4dHBhZ2UnKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21TZWNvbmRhcnlUb29sYmFyID8gY3VzdG9tU2Vjb25kYXJ5VG9vbGJhciA6IGRlZmF1bHRTZWNvbmRhcnlUb29sYmFyXCI+IDwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0U2Vjb25kYXJ5VG9vbGJhcj5cclxuICA8ZGl2XHJcbiAgICBpZD1cInNlY29uZGFyeVRvb2xiYXJcIlxyXG4gICAgY2xhc3M9XCJzZWNvbmRhcnlUb29sYmFyIGhpZGRlbiBkb29ySGFuZ2VyUmlnaHRcIlxyXG4gICAgW3N0eWxlLnRvcF09XCJzZWNvbmRhcnlUb29sYmFyVG9wXCJcclxuICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3NjYWxlKCcgKyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSArICcpJ1wiXHJcbiAgICBbc3R5bGUudHJhbnNmb3JtT3JpZ2luXT1cIidyaWdodCB0b3AnXCJcclxuICA+XHJcbiAgICA8ZGl2IGlkPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgaWQ9XCJzZWNvbmRhcnlQcmVzZW50YXRpb25Nb2RlXCJcclxuICAgICAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvblwiXHJcbiAgICAgICAgY2xhc3M9XCJzZWNvbmRhcnlUb29sYmFyQnV0dG9uIHZpc2libGVMYXJnZVZpZXdcIlxyXG4gICAgICAgIHRpdGxlPVwiU3dpdGNoIHRvIFByZXNlbnRhdGlvbiBNb2RlXCJcclxuICAgICAgICBkYXRhLWwxMG4taWQ9XCJwcmVzZW50YXRpb25fbW9kZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6MjJweDtoZWlnaHQ6MjJweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUsNUgxMFY3SDdWMTBINVY1TTE0LDVIMTlWMTBIMTdWN0gxNFY1TTE3LDE0SDE5VjE5SDE0VjE3SDE3VjE0TTEwLDE3VjE5SDVWMTRIN1YxN0gxMFpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cInByZXNlbnRhdGlvbl9tb2RlX2xhYmVsXCI+UHJlc2VudGF0aW9uIE1vZGU8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGlkPVwic2Vjb25kYXJ5T3BlbkZpbGVcIlxyXG4gICAgICAgIFtjbGFzcy5pbnZpc2libGVdPVwiIXNob3dPcGVuRmlsZUJ1dHRvblwiXHJcbiAgICAgICAgY2xhc3M9XCJzZWNvbmRhcnlUb29sYmFyQnV0dG9uIHZpc2libGVNZWRpdW1WaWV3XCJcclxuICAgICAgICB0aXRsZT1cIk9wZW4gRmlsZVwiXHJcbiAgICAgICAgZGF0YS1sMTBuLWlkPVwib3Blbl9maWxlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDoyMnB4O2hlaWdodDoyMnB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQsMkwyMCw4VjIwQTIsMiAwIDAsMSAxOCwyMkg2QTIsMiAwIDAsMSA0LDIwVjRBMiwyIDAgMCwxIDYsMkgxNE0xOCwyMFY5SDEzVjRINlYyMEgxOE0xMiwxMkwxNiwxNkgxMy41VjE5SDEwLjVWMTZIOEwxMiwxMlpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cIm9wZW5fZmlsZV9sYWJlbFwiPk9wZW48L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGlkPVwic2Vjb25kYXJ5UHJpbnRcIlxyXG4gICAgICAgIGNsYXNzPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB2aXNpYmxlU21hbGxWaWV3XCJcclxuICAgICAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93UHJpbnRCdXR0b25cIlxyXG4gICAgICAgIHRpdGxlPVwiUHJpbnRcIlxyXG4gICAgICAgIGRhdGEtbDEwbi1pZD1cInByaW50XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDoyMnB4O2hlaWdodDoyMnB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTgsM0g2VjdIMThNMTksMTJBMSwxIDAgMCwxIDE4LDExQTEsMSAwIDAsMSAxOSwxMEExLDEgMCAwLDEgMjAsMTFBMSwxIDAgMCwxIDE5LDEyTTE2LDE5SDhWMTRIMTZNMTksOEg1QTMsMyAwIDAsMCAyLDExVjE3SDZWMjFIMThWMTdIMjJWMTFBMywzIDAgMCwwIDE5LDhaXCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJwcmludF9sYWJlbFwiPlByaW50PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBpZD1cInNlY29uZGFyeURvd25sb2FkXCJcclxuICAgICAgICBjbGFzcz1cInNlY29uZGFyeVRvb2xiYXJCdXR0b24gdmlzaWJsZVNtYWxsVmlld1wiXHJcbiAgICAgICAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd0Rvd25sb2FkQnV0dG9uXCJcclxuICAgICAgICB0aXRsZT1cIkRvd25sb2FkXCJcclxuICAgICAgICBkYXRhLWwxMG4taWQ9XCJkb3dubG9hZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6MjJweDtoZWlnaHQ6MjJweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE0LDJMMjAsOFYyMEEyLDIgMCAwLDEgMTgsMjJINkEyLDIgMCAwLDEgNCwyMFY0QTIsMiAwIDAsMSA2LDJIMTRNMTgsMjBWOUgxM1Y0SDZWMjBIMThNMTIsMTlMOCwxNUgxMC41VjEySDEzLjVWMTVIMTZMMTIsMTlaXCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJkb3dubG9hZF9sYWJlbFwiPkRvd25sb2FkPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgIGlkPVwic2Vjb25kYXJ5Vmlld0Jvb2ttYXJrXCJcclxuICAgICAgICBjbGFzcz1cInNlY29uZGFyeVRvb2xiYXJCdXR0b24gYm9va21hcmsgdmlzaWJsZVRpbnlWaWV3XCJcclxuICAgICAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93Qm9va21hcmtCdXR0b25cIlxyXG4gICAgICAgIHRpdGxlPVwiQ3VycmVudCB2aWV3IChjb3B5IG9yIG9wZW4gaW4gbmV3IHdpbmRvdylcIlxyXG4gICAgICAgIGRhdGEtbDEwbi1pZD1cImJvb2ttYXJrXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDoyMnB4O2hlaWdodDoyMnB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTcsMThMMTIsMTUuODJMNywxOFY1SDE3TTE3LDNIN0EyLDIgMCAwLDAgNSw1VjIxTDEyLDE4TDE5LDIxVjVDMTksMy44OSAxOC4xLDMgMTcsM1pcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cImJvb2ttYXJrX2xhYmVsXCI+Q3VycmVudCBWaWV3PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1BhZ2luZ0J1dHRvbnNcIlxyXG4gICAgICAgIGlkPVwiZmlyc3RQYWdlXCJcclxuICAgICAgICBjbGFzcz1cInNlY29uZGFyeVRvb2xiYXJCdXR0b24gZmlyc3RQYWdlIHZpc2libGVMYXJnZVZpZXdcIlxyXG4gICAgICAgIHRpdGxlPVwiR28gdG8gRmlyc3QgUGFnZVwiXHJcbiAgICAgICAgZGF0YS1sMTBuLWlkPVwiZmlyc3RfcGFnZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE4LjQxLDE2LjU5TDEzLjgyLDEyTDE4LjQxLDcuNDFMMTcsNkwxMSwxMkwxNywxOEwxOC40MSwxNi41OU02LDZIOFYxOEg2VjZaXCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJmaXJzdF9wYWdlX2xhYmVsXCI+R28gdG8gRmlyc3QgUGFnZTwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93UGFnaW5nQnV0dG9uc1wiXHJcbiAgICAgICAgaWQ9XCJwcmV2aW91c1BhZ2VcIlxyXG4gICAgICAgIGNsYXNzPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiBwcmV2aW91c1BhZ2UgdmlzaWJsZVRpbnlWaWV3XCJcclxuICAgICAgICB0aXRsZT1cIkdvIHRvIFByZXZpb3VzIFBhZ2VcIlxyXG4gICAgICAgIGRhdGEtbDEwbi1pZD1cInByZXZpb3VzXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZVByZXZpb3VzUGFnZVwiXHJcbiAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzUGFnZSgpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTUuNDEsMTYuNThMMTAuODMsMTJMMTUuNDEsNy40MUwxNCw2TDgsMTJMMTQsMThMMTUuNDEsMTYuNThaXCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJwcmV2aW91c19sYWJlbFwiPkdvIHRvIFByZXZpb3VzIFBhZ2U8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1BhZ2luZ0J1dHRvbnNcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlTmV4dFBhZ2VcIlxyXG4gICAgICAgIGlkPVwibmV4dFBhZ2VcIlxyXG4gICAgICAgIGNsYXNzPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiBuZXh0UGFnZSB2aXNpYmxlVGlueVZpZXdcIlxyXG4gICAgICAgIHRpdGxlPVwiR28gdG8gTmV4dCBQYWdlXCJcclxuICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXh0XCJcclxuICAgICAgICAoY2xpY2spPVwibmV4dFBhZ2UoKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTguNTksMTYuNThMMTMuMTcsMTJMOC41OSw3LjQxTDEwLDZMMTYsMTJMMTAsMThMOC41OSwxNi41OFpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cIm5leHRfbGFiZWxcIj5HbyB0byBOZXh0IFBhZ2U8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1BhZ2luZ0J1dHRvbnNcIlxyXG4gICAgICAgIGlkPVwibGFzdFBhZ2VcIlxyXG4gICAgICAgIGNsYXNzPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiBsYXN0UGFnZSB2aXNpYmxlTGFyZ2VWaWV3XCJcclxuICAgICAgICB0aXRsZT1cIkdvIHRvIExhc3QgUGFnZVwiXHJcbiAgICAgICAgZGF0YS1sMTBuLWlkPVwibGFzdF9wYWdlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNS41OSw3LjQxTDEwLjE4LDEyTDUuNTksMTYuNTlMNywxOEwxMywxMkw3LDZMNS41OSw3LjQxTTE2LDZIMThWMThIMTZWNlpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cImxhc3RfcGFnZV9sYWJlbFwiPkdvIHRvIExhc3QgUGFnZTwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1JvdGF0ZUJ1dHRvblwiXHJcbiAgICAgICAgaWQ9XCJwYWdlUm90YXRlQ3dcIlxyXG4gICAgICAgIGNsYXNzPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiByb3RhdGVDdyB2aXNpYmxlWExWaWV3XCJcclxuICAgICAgICB0aXRsZT1cIlJvdGF0ZSBDbG9ja3dpc2VcIlxyXG4gICAgICAgIGRhdGEtbDEwbi1pZD1cInBhZ2Vfcm90YXRlX2N3XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDoyMnB4O2hlaWdodDoyMnB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIgM0M3LjAzIDMgMyA3LjAzIDMgMTJTNy4wMyAyMSAxMiAyMUMxNCAyMSAxNS45MiAyMC4zNCAxNy41IDE5LjE0TDE2LjA2IDE3LjdDMTQuODcgMTguNTQgMTMuNDUgMTkgMTIgMTlDOC4xMyAxOSA1IDE1Ljg3IDUgMTJTOC4xMyA1IDEyIDUgMTkgOC4xMyAxOSAxMkgxNkwyMCAxNkwyNCAxMkgyMUMyMSA3LjAzIDE2Ljk3IDMgMTIgM1wiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwicGFnZV9yb3RhdGVfY3dfbGFiZWxcIj5Sb3RhdGUgQ2xvY2t3aXNlPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIFtjbGFzcy5pbnZpc2libGVdPVwiIXNob3dSb3RhdGVCdXR0b25cIlxyXG4gICAgICAgIGlkPVwicGFnZVJvdGF0ZUNjd1wiXHJcbiAgICAgICAgY2xhc3M9XCJzZWNvbmRhcnlUb29sYmFyQnV0dG9uIHJvdGF0ZUNjdyB2aXNpYmxlWExWaWV3XCJcclxuICAgICAgICB0aXRsZT1cIlJvdGF0ZSBDb3VudGVyY2xvY2t3aXNlXCJcclxuICAgICAgICBkYXRhLWwxMG4taWQ9XCJwYWdlX3JvdGF0ZV9jY3dcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOjIycHg7aGVpZ2h0OjIycHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMiAzQzcuMDMgMyAzIDcuMDMgMyAxMkgwTDQgMTZMOCAxMkg1QzUgOC4xMyA4LjEzIDUgMTIgNVMxOSA4LjEzIDE5IDEyIDE1Ljg3IDE5IDEyIDE5QzEwLjU1IDE5IDkuMTMgMTguNTQgNy45NCAxNy43TDYuNSAxOS4xNEM4LjA4IDIwLjM0IDEwIDIxIDEyIDIxQzE2Ljk3IDIxIDIxIDE2Ljk3IDIxIDEyUzE2Ljk3IDMgMTIgM1wiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwicGFnZV9yb3RhdGVfY2N3X2xhYmVsXCI+Um90YXRlIENvdW50ZXJjbG9ja3dpc2U8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIFtjbGFzcy5pbnZpc2libGVdPVwiIXNob3dIYW5kVG9vbEJ1dHRvblwiXHJcbiAgICAgICAgaWQ9XCJjdXJzb3JTZWxlY3RUb29sXCJcclxuICAgICAgICBjbGFzcz1cInNlY29uZGFyeVRvb2xiYXJCdXR0b24gdG9nZ2xlZCB2aXNpYmxlWFhMVmlld1wiXHJcbiAgICAgICAgdGl0bGU9XCJFbmFibGUgVGV4dCBTZWxlY3Rpb24gVG9vbFwiXHJcbiAgICAgICAgZGF0YS1sMTBuLWlkPVwiY3Vyc29yX3RleHRfc2VsZWN0X3Rvb2xcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOjIycHg7aGVpZ2h0OjIycHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yIDRDMiAyLjg5IDIuOSAyIDQgMkg3VjRINFY3SDJWNE0yMiA0VjdIMjBWNEgxN1YySDIwQzIxLjEgMiAyMiAyLjg5IDIyIDRNMiAyMFYxN0g0VjIwSDdWMjJINEMyLjkgMjIgMiAyMS4xMSAyIDIwTTEwIDJIMTRWNEgxMFYyTTEwIDIwSDE0VjIySDEwVjIwTTIgMTBINFYxNEgyVjEwTTE4LjUgMTNDMjAuNCAxMyAyMiAxNC42IDIyIDE2LjVDMjIgMTkuMSAxOC41IDIzIDE4LjUgMjNDMTguNSAyMyAxNSAxOS4xIDE1IDE2LjVDMTUgMTQuNiAxNi42IDEzIDE4LjUgMTNNMTguNSAxNy44QzE5LjIgMTcuOCAxOS44IDE3LjIgMTkuNyAxNi42QzE5LjcgMTYgMTkuMSAxNS40IDE4LjUgMTUuNEMxNy45IDE1LjQgMTcuMyAxNS45IDE3LjMgMTYuNkMxNy4zIDE3LjIgMTcuOCAxNy44IDE4LjUgMTcuOE0yMCAxMEgyMlYxMi4zNEMyMS40MiAxMS44NCAyMC43NCAxMS40NSAyMCAxMS4yM1YxMFpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cImN1cnNvcl90ZXh0X3NlbGVjdF90b29sX2xhYmVsXCI+VGV4dCBTZWxlY3Rpb24gVG9vbDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93SGFuZFRvb2xCdXR0b25cIlxyXG4gICAgICAgIGlkPVwiY3Vyc29ySGFuZFRvb2xcIlxyXG4gICAgICAgIGNsYXNzPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB2aXNpYmxlWFhMVmlld1wiXHJcbiAgICAgICAgdGl0bGU9XCJFbmFibGUgSGFuZCBUb29sXCJcclxuICAgICAgICBkYXRhLWwxMG4taWQ9XCJjdXJzb3JfaGFuZF90b29sXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDoyMnB4O2hlaWdodDoyMnB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTMsNlYxMUgxOFY3Ljc1TDIyLjI1LDEyTDE4LDE2LjI1VjEzSDEzVjE4SDE2LjI1TDEyLDIyLjI1TDcuNzUsMThIMTFWMTNINlYxNi4yNUwxLjc1LDEyTDYsNy43NVYxMUgxMVY2SDcuNzVMMTIsMS43NUwxNi4yNSw2SDEzWlwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwiY3Vyc29yX2hhbmRfdG9vbF9sYWJlbFwiPkhhbmQgVG9vbDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1Njcm9sbGluZ0J1dHRvblwiXHJcbiAgICAgICAgaWQ9XCJzY3JvbGxWZXJ0aWNhbFwiXHJcbiAgICAgICAgY2xhc3M9XCJzZWNvbmRhcnlUb29sYmFyQnV0dG9uIHNjcm9sbFZlcnRpY2FsIHRvZ2dsZWRcIlxyXG4gICAgICAgIHRpdGxlPVwiVXNlIFZlcnRpY2FsIFNjcm9sbGluZ1wiXHJcbiAgICAgICAgZGF0YS1sMTBuLWlkPVwic2Nyb2xsX3ZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyBtYXJnaW4tdG9wOiAzcHhcIj5cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTkuNSA0YzEgMCAxLjUuNSAxLjUgMS41djVjMCAxLS41IDEuNS0xLjUgMS41aC0zYy0xIDAtMS41LS41LTEuNS0xLjV2LTVDNSA0LjUgNS41IDQgNi41IDR6TTExIDB2LjVjMCAxLS41IDEuNS0xLjUgMS41aC0zQzUuNSAyIDUgMS41IDUgLjVWMGg2ek0xMSAxNnYtLjVjMC0xLS41LTEuNS0xLjUtMS41aC0zYy0xIDAtMS41LjUtMS41IDEuNXYuNWg2elwiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJzY3JvbGxfdmVydGljYWxfbGFiZWxcIj5WZXJ0aWNhbCBTY3JvbGxpbmc8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1Njcm9sbGluZ0J1dHRvblwiXHJcbiAgICAgICAgaWQ9XCJzY3JvbGxIb3Jpem9udGFsXCJcclxuICAgICAgICBjbGFzcz1cInNlY29uZGFyeVRvb2xiYXJCdXR0b24gc2Nyb2xsSG9yaXpvbnRhbFwiXHJcbiAgICAgICAgdGl0bGU9XCJVc2UgSG9yaXpvbnRhbCBTY3JvbGxpbmdcIlxyXG4gICAgICAgIGRhdGEtbDEwbi1pZD1cInNjcm9sbF9ob3Jpem9udGFsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyBtYXJnaW4tdG9wOiAzcHhcIj5cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTAgNGgxLjVjMSAwIDEuNS41IDEuNSAxLjV2NWMwIDEtLjUgMS41LTEuNSAxLjVIMHpNOS41IDRjMSAwIDEuNS41IDEuNSAxLjV2NWMwIDEtLjUgMS41LTEuNSAxLjVoLTNjLTEgMC0xLjUtLjUtMS41LTEuNXYtNUM1IDQuNSA1LjUgNCA2LjUgNHpNMTYgNGgtMS41Yy0xIDAtMS41LjUtMS41IDEuNXY1YzAgMSAuNSAxLjUgMS41IDEuNUgxNnpcIi8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwic2Nyb2xsX2hvcml6b250YWxfbGFiZWxcIj5Ib3Jpem9udGFsIFNjcm9sbGluZzwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93U2Nyb2xsaW5nQnV0dG9uXCJcclxuICAgICAgICBpZD1cInNjcm9sbFdyYXBwZWRcIlxyXG4gICAgICAgIGNsYXNzPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiBzY3JvbGxXcmFwcGVkXCJcclxuICAgICAgICB0aXRsZT1cIlVzZSBXcmFwcGVkIFNjcm9sbGluZ1wiXHJcbiAgICAgICAgZGF0YS1sMTBuLWlkPVwic2Nyb2xsX3dyYXBwZWRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7IG1hcmdpbi10b3A6IDNweFwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNS41IDRjMSAwIDEuNS41IDEuNSAxLjV2NWMwIDEtLjUgMS41LTEuNSAxLjVoLTNjLTEgMC0xLjUtLjUtMS41LTEuNXYtNUMxIDQuNSAxLjUgNCAyLjUgNHpNNyAwdi41QzcgMS41IDYuNSAyIDUuNSAyaC0zQzEuNSAyIDEgMS41IDEgLjVWMGg2ek03IDE2di0uNWMwLTEtLjUtMS41LTEuNS0xLjVoLTNjLTEgMC0xLjUuNS0xLjUgMS41di41aDZ6TTEzLjUgNGMxIDAgMS41LjUgMS41IDEuNXY1YzAgMS0uNSAxLjUtMS41IDEuNWgtM2MtMSAwLTEuNS0uNS0xLjUtMS41di01YzAtMSAuNS0xLjUgMS41LTEuNXpNMTUgMHYuNWMwIDEtLjUgMS41LTEuNSAxLjVoLTNDOS41IDIgOSAxLjUgOSAuNVYwaDZ6TTE1IDE2di0uNTA3YzAtMS0uNS0xLjUtMS41LTEuNWgtM0M5LjUgMTQgOSAxNC41IDkgMTUuNXYuNWg2elwiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJzY3JvbGxfd3JhcHBlZF9sYWJlbFwiPldyYXBwZWQgU2Nyb2xsaW5nPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93U3ByZWFkQnV0dG9uXCJcclxuICAgICAgICBpZD1cInNwcmVhZE5vbmVcIlxyXG4gICAgICAgIGNsYXNzPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiBzcHJlYWROb25lIHRvZ2dsZWRcIlxyXG4gICAgICAgIHRpdGxlPVwiRG8gbm90IGpvaW4gcGFnZSBzcHJlYWRzXCJcclxuICAgICAgICBkYXRhLWwxMG4taWQ9XCJzcHJlYWRfbm9uZVwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9uU3ByZWFkQ2hhbmdlKCdvZmYnKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnIGhlaWdodD1cIjE2XCIgd2lkdGg9XCIxNlwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNiAzYy0xIDAtMS41LjUtMS41IDEuNXY3YzAgMSAuNSAxLjUgMS41IDEuNWg0YzEgMCAxLjUtLjUgMS41LTEuNXYtN2MwLTEtLjUtMS41LTEuNS0xLjV6XCIvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cInNwcmVhZF9ub25lX2xhYmVsXCI+Tm8gU3ByZWFkczwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93U3ByZWFkQnV0dG9uXCJcclxuICAgICAgICBpZD1cInNwcmVhZE9kZFwiXHJcbiAgICAgICAgY2xhc3M9XCJzZWNvbmRhcnlUb29sYmFyQnV0dG9uIHNwcmVhZE9kZFwiXHJcbiAgICAgICAgdGl0bGU9XCJKb2luIHBhZ2Ugc3ByZWFkcyBzdGFydGluZyB3aXRoIG9kZC1udW1iZXJlZCBwYWdlc1wiXHJcbiAgICAgICAgZGF0YS1sMTBuLWlkPVwic3ByZWFkX29kZFwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9uU3ByZWFkQ2hhbmdlKCdvZGQnKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDsgbWFyZ2luLXRvcDogM3B4XCI+XHJcbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMC41NiAzLjVDOS41NiAzLjUgOSA0IDkgNXY2LjVjMCAxIC41IDEuNSAxLjUgMS41aDRjMSAwIDEuNS0uNSAxLjUtMS41VjVjMC0xLS41LTEuNS0xLjUtMS41em0xLjkzIDEuMmMuOCAwIDEuNC4yIDEuOC42NC41LjQuNyAxIC43IDEuNyAwIC41LS4yIDEtLjUgMS40NC0uMi4zLS42LjYtMSAuOTNsLS42LjRjLS40LjMtLjYuNC0uNy41NS0uMS4xLS4yLjItLjMuNGgzLjJ2MS4yN2gtNWMwLS41LjEtMSAuMy0xLjQzLjItLjQ5LjctMSAxLjUtMS41NC43LS41IDEuMS0uOCAxLjMtMS4wMi4zLS4zLjQtLjcuNC0xLjA1IDAtLjMtLjEtLjYtLjMtLjc3LS4yLS4yLS40LS4zLS43LS4zLS40IDAtLjcuMi0uOS41LS4xLjItLjEuNS0uMi45aC0xLjRjMC0uNi4yLTEuMS4zLTEuNS40LS43IDEuMS0xLjEgMi0xLjF6TTEuNTQgMy41Qy41NCAzLjUgMCA0IDAgNXY2LjVjMCAxIC41IDEuNSAxLjU0IDEuNWg0YzEgMCAxLjUtLjUgMS41LTEuNVY1YzAtMS0uNS0xLjUtMS41LTEuNXptMS44IDEuMTI1SDQuNVYxMkgzVjYuOUgxLjN2LTFjLjUgMCAuOCAwIC45Ny0uMDMuMzMtLjA3LjUzLS4xNy43My0uMzcuMS0uMi4yLS4zLjI1LS41LjA1LS4yLjA1LS4zLjA1LS4zelwiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJzcHJlYWRfb2RkX2xhYmVsXCI+T2RkIFNwcmVhZHM8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1NwcmVhZEJ1dHRvblwiXHJcbiAgICAgICAgaWQ9XCJzcHJlYWRFdmVuXCJcclxuICAgICAgICBjbGFzcz1cInNlY29uZGFyeVRvb2xiYXJCdXR0b24gc3ByZWFkRXZlblwiXHJcbiAgICAgICAgdGl0bGU9XCJKb2luIHBhZ2Ugc3ByZWFkcyBzdGFydGluZyB3aXRoIGV2ZW4tbnVtYmVyZWQgcGFnZXNcIlxyXG4gICAgICAgIGRhdGEtbDEwbi1pZD1cInNwcmVhZF9ldmVuXCJcclxuICAgICAgICAoY2xpY2spPVwib25TcHJlYWRDaGFuZ2UoJ2V2ZW4nKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDsgbWFyZ2luLXRvcDogM3B4XCI+XHJcbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xLjUgMy41Qy41IDMuNSAwIDQgMCA1djYuNWMwIDEgLjUgMS41IDEuNSAxLjVoNGMxIDAgMS41LS41IDEuNS0xLjVWNWMwLTEtLjUtMS41LTEuNS0xLjV6bTIgMS4yYy44IDAgMS40LjIgMS44LjYuNS40LjcgMSAuNyAxLjcgMCAuNS0uMiAxLS41IDEuNC0uMi4zLS41LjctMSAxbC0uNi40Yy0uNC4zLS42LjQtLjc1LjU2LS4xNS4xNC0uMjUuMjQtLjM1LjQ0SDZ2MS4zSDFjMC0uNi4xLTEuMS4zLTEuNS4zLS42LjctMSAxLjUtMS42LjctLjQgMS4xLS44IDEuMjgtMSAuMzItLjMuNDItLjYuNDItMSAwLS4zLS4xLS42LS4yMy0uOC0uMTctLjItLjM3LS4zLS43Ny0uM3MtLjcuMS0uOS41Yy0uMDQuMi0uMS41LS4xLjlIMS4xYzAtLjYuMS0xLjEuMy0xLjUuNC0uNyAxLjEtMS4xIDIuMS0xLjF6TTEwLjU0IDMuNTRDOS41IDMuNTQgOSA0IDkgNXY2LjVjMCAxIC41IDEuNSAxLjU0IDEuNWg0Yy45NiAwIDEuNDYtLjUgMS40Ni0xLjVWNWMwLTEtLjUtMS40Ni0xLjUtMS40NnptMS45Ljk1Yy43IDAgMS4zLjIgMS43LjUuNC40LjYuOC42IDEuNCAwIC40LS4xLjgtLjQgMS4xLS4yLjItLjMuMy0uNS40LjEgMCAuMy4xLjYuMy40LjMuNS44LjUgMS40IDAgLjYtLjIgMS4yLS42IDEuNi0uNC41LTEuMS43LTEuOS43LTEgMC0xLjgtLjMtMi4yLTEtLjE0LS4yOS0uMjQtLjY5LS4yNC0xLjI5aDEuNGMwIC4zIDAgLjUuMS43LjIuNC41LjUgMSAuNS4zIDAgLjUtLjEuNy0uMy4yLS4yLjMtLjUuMy0uOCAwLS41LS4yLS44LS42LS45NS0uMi0uMDUtLjUtLjE1LTEtLjE1di0xYy41IDAgLjgtLjEgMS0uMTQuMy0uMS41LS40LjUtLjkgMC0uMy0uMS0uNS0uMi0uNy0uMi0uMi0uNC0uMy0uNy0uMy0uMyAwLS42LjEtLjc1LjMtLjIuMi0uMi41LS4yLjg2aC0xLjM0YzAtLjQuMS0uNy4xOS0xLjEgMC0uMTIuMi0uMzIuNC0uNjIuMi0uMi40LS4zLjctLjQuMy0uMS42LS4xIDEtLjF6XCIvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cInNwcmVhZF9ldmVuX2xhYmVsXCI+RXZlbiBTcHJlYWRzPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93UHJvcGVydGllc0J1dHRvblwiXHJcbiAgICAgICAgaWQ9XCJkb2N1bWVudFByb3BlcnRpZXNcIlxyXG4gICAgICAgIGNsYXNzPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiBkb2N1bWVudFByb3BlcnRpZXNcIlxyXG4gICAgICAgIHRpdGxlPVwiRG9jdW1lbnQgUHJvcGVydGllc+KAplwiXHJcbiAgICAgICAgZGF0YS1sMTBuLWlkPVwiZG9jdW1lbnRfcHJvcGVydGllc1wiXHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgbWFyZ2luLXRvcDogM3B4XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNOCAxNmE4IDggMCAxIDEgOC04IDguMDA5IDguMDA5IDAgMCAxLTggOHpNOCAyYTYgNiAwIDEgMCA2IDYgNi4wMDYgNi4wMDYgMCAwIDAtNi02elwiLz5cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTggN2ExIDEgMCAwIDAtMSAxdjNhMSAxIDAgMCAwIDIgMFY4YTEgMSAwIDAgMC0xLTF6XCIvPlxyXG4gICAgICAgICAgPGNpcmNsZSBmaWxsPVwiY3VycmVudENvbG9yXCIgY3g9XCI4XCIgY3k9XCI1XCIgcj1cIjEuMTg4XCIvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cImRvY3VtZW50X3Byb3BlcnRpZXNfbGFiZWxcIj5Eb2N1bWVudCBQcm9wZXJ0aWVz4oCmPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
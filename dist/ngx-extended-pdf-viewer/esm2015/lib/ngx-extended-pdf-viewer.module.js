import { NgxExtendedPdfViewerCommonModule } from './ngx-extended-pdf-viewer-common.module';
import { PdfHandToolComponent } from './toolbar/pdf-hand-tool/pdf-hand-tool.component';
// tslint:disable:max-line-length
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxExtendedPdfViewerComponent } from './ngx-extended-pdf-viewer.component';
import { PdfBookmarkComponent } from './toolbar/pdf-bookmark/pdf-bookmark.component';
import { PdfContextMenuComponent } from './toolbar/pdf-context-menu/pdf-context-menu.component';
import { PdfDocumentPropertiesOverlayComponent } from './document-properties/pdf-document-properties-overlay/pdf-document-properties-overlay.component';
import { PdfDownloadComponent } from './toolbar/pdf-download/pdf-download.component';
import { PdfFindbarComponent } from './toolbar/pdf-findbar/pdf-findbar.component';
import { PdfFindbarMessageContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-message-container/pdf-findbar-message-container.component';
import { PdfFindbarOptionsOneContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-findbar-options-one-container.component';
import { PdfFindbarOptionsThreeContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-findbar-options-three-container.component';
import { PdfFindbarOptionsTwoContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-findbar-options-two-container.component';
import { PdfFindButtonComponent } from './toolbar/pdf-find-button/pdf-find-button.component';
import { PdfFindEntireWordComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-find-entire-word/pdf-find-entire-word.component';
import { PdfFindHighlightAllComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-find-highlight-all/pdf-find-highlight-all.component';
import { PdfFindIgnoreAccentsComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-ignore-accents/pdf-find-ignore-accents.component';
import { PdfFindInputAreaComponent } from './toolbar/pdf-findbar/pdf-find-input-area/pdf-find-input-area.component';
import { PdfFindMatchCaseComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-find-match-case/pdf-find-match-case.component';
import { PdfFindMultipleSearchTextsComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-find-entire-phrase/pdf-find-entire-phrase.component';
import { PdfFindNextComponent } from './toolbar/pdf-findbar/pdf-find-next/pdf-find-next.component';
import { PdfFindPreviousComponent } from './toolbar/pdf-findbar/pdf-find-previous/pdf-find-previous.component';
import { PdfFindResultsCountComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-results-count/pdf-find-results-count.component';
import { PdfFirstPageComponent } from './toolbar/pdf-paging-area/pdf-first-page/pdf-first-page.component';
import { PdfLastPageComponent } from './toolbar/pdf-paging-area/pdf-last-page/pdf-last-page.component';
import { PdfNextPageComponent } from './toolbar/pdf-paging-area/pdf-next-page/pdf-next-page.component';
import { PdfOpenFileComponent } from './toolbar/pdf-open-file/pdf-open-file.component';
import { PdfPageNumberComponent } from './toolbar/pdf-paging-area/pdf-page-number/pdf-page-number.component';
import { PdfPagingAreaComponent } from './toolbar/pdf-paging-area/pdf-paging-area.component';
import { PdfPresentationModeComponent } from './toolbar/pdf-presentation-mode/pdf-presentation-mode.component';
import { PdfPreviousPageComponent } from './toolbar/pdf-paging-area/pdf-previous-page/pdf-previous-page.component';
import { PdfPrintComponent } from './toolbar/pdf-print/pdf-print.component';
import { PdfRotatePageComponent } from './toolbar/pdf-rotate-page/pdf-rotate-page.component';
import { PdfSearchInputFieldComponent } from './toolbar/pdf-findbar/pdf-search-input-field/pdf-search-input-field.component';
import { PdfSecondaryToolbarComponent } from './secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component';
import { PdfSidebarComponent } from './sidebar/pdf-sidebar/pdf-sidebar.component';
import { PdfToggleSecondaryToolbarComponent } from './toolbar/pdf-toggle-secondary-toolbar/pdf-toggle-secondary-toolbar.component';
import { PdfToggleSidebarComponent } from './toolbar/pdf-toggle-sidebar/pdf-toggle-sidebar.component';
import { PdfToolbarComponent } from './toolbar/pdf-toolbar/pdf-toolbar.component';
import { PdfZoomDropdownComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-dropdown/pdf-zoom-dropdown.component';
import { PdfZoomInComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-in/pdf-zoom-in.component';
import { PdfZoomOutComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-out/pdf-zoom-out.component';
import { PdfZoomToolbarComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-toolbar.component';
import { PdfSelectToolComponent } from './toolbar/pdf-select-tool/pdf-select-tool.component';
import { PdfSidebarContentComponent } from './sidebar/pdf-sidebar/pdf-sidebar-content/pdf-sidebar-content.component';
import { PdfSidebarToolbarComponent } from './sidebar/pdf-sidebar/pdf-sidebar-toolbar/pdf-sidebar-toolbar.component';
import * as i0 from "@angular/core";
if (!Promise['allSettled']) {
    if (!!window['Zone'] && !window['__zone_symbol__Promise.allSettled']) {
        console.error("Please update zone.js to version 0.10.3 or higher. Otherwise, you'll run the slow ECMAScript 5 version even on modern browser that can run the fast ESMAScript 2015 version.");
    }
}
function isKeyIgnored(cmd, keycode) {
    const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
    const ignoreKeys = PDFViewerApplicationOptions.get('ignoreKeys');
    const acceptKeys = PDFViewerApplicationOptions.get('acceptKeys');
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
    const ignoreKeyboard = PDFViewerApplicationOptions.get('ignoreKeyboard');
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
    return settings.some((keyDef) => isKey(keyDef, cmd, keycode));
}
function isKey(keyDef, cmd, keycode) {
    let cmdDef = 0;
    let key = 0;
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
export class NgxExtendedPdfViewerModule {
    constructor() { }
}
/** @nocollapse */ NgxExtendedPdfViewerModule.ɵfac = function NgxExtendedPdfViewerModule_Factory(t) { return new (t || NgxExtendedPdfViewerModule)(); };
/** @nocollapse */ NgxExtendedPdfViewerModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: NgxExtendedPdfViewerModule });
/** @nocollapse */ NgxExtendedPdfViewerModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ providers: [], imports: [[NgxExtendedPdfViewerCommonModule, CommonModule, FormsModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxExtendedPdfViewerModule, [{
        type: NgModule,
        args: [{
                imports: [NgxExtendedPdfViewerCommonModule, CommonModule, FormsModule],
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
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxExtendedPdfViewerModule, { declarations: [NgxExtendedPdfViewerComponent], imports: [NgxExtendedPdfViewerCommonModule, CommonModule, FormsModule], exports: [PdfZoomDropdownComponent,
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
        NgxExtendedPdfViewerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsaUNBQWlDO0FBRWpDLE9BQU8sRUFBRSxZQUFZLEVBQW9ELE1BQU0saUJBQWlCLENBQUM7QUFDakcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0saUdBQWlHLENBQUM7QUFDeEosT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkZBQTZGLENBQUM7QUFDbEosT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0scUdBQXFHLENBQUM7QUFDN0osT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0seUdBQXlHLENBQUM7QUFDbkssT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0scUdBQXFHLENBQUM7QUFDN0osT0FBTyxFQUFFLHNCQUFzQixF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O1FBQzFCLG1DQUFtQztRQUNuQyw2QkFBNkI7UUFDN0Isd0NBQXdDO1FBQ3hDLDRCQUE0QjtRQUM1QixtQ0FBbUM7UUFDbkMsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsa0NBQWtDO1FBQ2xDLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQiw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbW1vbk1vZHVsZSB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItY29tbW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBkZkhhbmRUb29sQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1oYW5kLXRvb2wvcGRmLWhhbmQtdG9vbC5jb21wb25lbnQnO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgTG9jYXRpb24sIExvY2F0aW9uU3RyYXRlZ3ksIFBhdGhMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbi1vcHRpb25zJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkJvb2ttYXJrQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1ib29rbWFyay9wZGYtYm9va21hcmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWNvbnRleHQtbWVudS9wZGYtY29udGV4dC1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkRvY3VtZW50UHJvcGVydGllc092ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL2RvY3VtZW50LXByb3BlcnRpZXMvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMtb3ZlcmxheS9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1vdmVybGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkRvd25sb2FkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1kb3dubG9hZC9wZGYtZG93bmxvYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kYmFyTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lci9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kYmFyT3B0aW9uc09uZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRiYXJPcHRpb25zVGhyZWVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZGJhck9wdGlvbnNUd29Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kYmFyLW9wdGlvbnMtdHdvLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kLWJ1dHRvbi9wZGYtZmluZC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS13b3JkL3BkZi1maW5kLWVudGlyZS13b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRIaWdobGlnaHRBbGxDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyL3BkZi1maW5kLWhpZ2hsaWdodC1hbGwvcGRmLWZpbmQtaGlnaGxpZ2h0LWFsbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kSWdub3JlQWNjZW50c0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXRocmVlLWNvbnRhaW5lci9wZGYtZmluZC1pZ25vcmUtYWNjZW50cy9wZGYtZmluZC1pZ25vcmUtYWNjZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLWlucHV0LWFyZWEvcGRmLWZpbmQtaW5wdXQtYXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kTWF0Y2hDYXNlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtb25lLWNvbnRhaW5lci9wZGYtZmluZC1tYXRjaC1jYXNlL3BkZi1maW5kLW1hdGNoLWNhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZE11bHRpcGxlU2VhcmNoVGV4dHNDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS1waHJhc2UvcGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kTmV4dENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1uZXh0L3BkZi1maW5kLW5leHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLXByZXZpb3VzL3BkZi1maW5kLXByZXZpb3VzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmQtcmVzdWx0cy1jb3VudC9wZGYtZmluZC1yZXN1bHRzLWNvdW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpcnN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLWZpcnN0LXBhZ2UvcGRmLWZpcnN0LXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmTGFzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1sYXN0LXBhZ2UvcGRmLWxhc3QtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZOZXh0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLW5leHQtcGFnZS9wZGYtbmV4dC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZk9wZW5GaWxlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1vcGVuLWZpbGUvcGRmLW9wZW4tZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQYWdlTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcGFnZS1udW1iZXIvcGRmLXBhZ2UtbnVtYmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlBhZ2luZ0FyZWFDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdpbmctYXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQcmVzZW50YXRpb25Nb2RlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wcmVzZW50YXRpb24tbW9kZS9wZGYtcHJlc2VudGF0aW9uLW1vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcHJldmlvdXMtcGFnZS9wZGYtcHJldmlvdXMtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQcmludENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcHJpbnQvcGRmLXByaW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlJvdGF0ZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXJvdGF0ZS1wYWdlL3BkZi1yb3RhdGUtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1zZWFyY2gtaW5wdXQtZmllbGQvcGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmVG9nZ2xlU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9nZ2xlLXNpZGViYXIvcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXRvb2xiYXIvcGRmLXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbUluQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20taW4vcGRmLXpvb20taW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbU91dENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLW91dC9wZGYtem9vbS1vdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNlbGVjdFRvb2xDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXNlbGVjdC10b29sL3BkZi1zZWxlY3QtdG9vbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci1jb250ZW50L3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2lkZWJhclRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItdG9vbGJhci9wZGYtc2lkZWJhci10b29sYmFyLmNvbXBvbmVudCc7XHJcbmlmICghUHJvbWlzZVsnYWxsU2V0dGxlZCddKSB7XHJcbiAgaWYgKCEhd2luZG93Wydab25lJ10gJiYgIXdpbmRvd1snX196b25lX3N5bWJvbF9fUHJvbWlzZS5hbGxTZXR0bGVkJ10pIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiUGxlYXNlIHVwZGF0ZSB6b25lLmpzIHRvIHZlcnNpb24gMC4xMC4zIG9yIGhpZ2hlci4gT3RoZXJ3aXNlLCB5b3UnbGwgcnVuIHRoZSBzbG93IEVDTUFTY3JpcHQgNSB2ZXJzaW9uIGV2ZW4gb24gbW9kZXJuIGJyb3dzZXIgdGhhdCBjYW4gcnVuIHRoZSBmYXN0IEVTTUFTY3JpcHQgMjAxNSB2ZXJzaW9uLlwiXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNLZXlJZ25vcmVkKGNtZDogbnVtYmVyLCBrZXljb2RlOiBudW1iZXIgfCAnV0hFRUwnKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuXHJcbiAgY29uc3QgaWdub3JlS2V5czogQXJyYXk8c3RyaW5nPiA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2lnbm9yZUtleXMnKTtcclxuICBjb25zdCBhY2NlcHRLZXlzOiBBcnJheTxzdHJpbmc+ID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnYWNjZXB0S2V5cycpO1xyXG4gIGlmIChrZXljb2RlID09PSAnV0hFRUwnKSB7XHJcbiAgICBpZiAoaXNLZXlJbkxpc3QoaWdub3JlS2V5cywgY21kLCAnV0hFRUwnKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICghIWFjY2VwdEtleXMgJiYgYWNjZXB0S2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiAhaXNLZXlJbkxpc3QoYWNjZXB0S2V5cywgY21kLCAnV0hFRUwnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoa2V5Y29kZSA9PT0gMTYgfHwga2V5Y29kZSA9PT0gMTcgfHwga2V5Y29kZSA9PT0gMTggfHwga2V5Y29kZSA9PT0gMjI0KSB7XHJcbiAgICAvLyBpZ25vcmUgc29saXRhcnkgU0hJRlQsIEFMVCwgQ01ELCBhbmQgQ1RSTCBiZWNhdXNlIHRoZXkgb25seSBtYWtlIHNlbnNlIGFzIHR3by1rZXktY29tYmluYXRpb25zXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLy8gY21kIGlzIGEgYml0LWFycmF5OlxyXG4gIC8vIDEgPT0gQ1RSTFxyXG4gIC8vIDIgPT0gQUxUXHJcbiAgLy8gNCA9PSBTSElGVFxyXG4gIC8vIDggPT0gTUVUQVxyXG4gIGNvbnN0IGlnbm9yZUtleWJvYXJkID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnaWdub3JlS2V5Ym9hcmQnKTtcclxuICBpZiAoISFpZ25vcmVLZXlib2FyZCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoISFpZ25vcmVLZXlzICYmIGlnbm9yZUtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKGlzS2V5SW5MaXN0KGlnbm9yZUtleXMsIGNtZCwga2V5Y29kZSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoISFhY2NlcHRLZXlzICYmIGFjY2VwdEtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuICFpc0tleUluTGlzdChhY2NlcHRLZXlzLCBjbWQsIGtleWNvZGUpO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzS2V5SW5MaXN0KHNldHRpbmdzOiBBcnJheTxzdHJpbmc+LCBjbWQ6IG51bWJlciwga2V5Y29kZTogbnVtYmVyIHwgJ1dIRUVMJyk6IGJvb2xlYW4ge1xyXG4gIGlmICghc2V0dGluZ3MpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gc2V0dGluZ3Muc29tZSgoa2V5RGVmKSA9PiBpc0tleShrZXlEZWYsIGNtZCwga2V5Y29kZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0tleShrZXlEZWY6IHN0cmluZywgY21kOiBudW1iZXIsIGtleWNvZGU6IG51bWJlciB8ICdXSEVFTCcpOiBib29sZWFuIHtcclxuICBsZXQgY21kRGVmID0gMDtcclxuICBsZXQga2V5ID0gMDtcclxuICBrZXlEZWYgPSBrZXlEZWYudG9Mb3dlckNhc2UoKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tYml0d2lzZVxyXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2N0cmwrJykpIHtcclxuICAgIGNtZERlZiB8PSAxO1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2N0cmwrJywgJycpO1xyXG4gIH1cclxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdjbWQrJykpIHtcclxuICAgIGNtZERlZiB8PSA4O1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2NtZCsnLCAnJyk7XHJcbiAgfVxyXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2FsdCsnKSkge1xyXG4gICAgY21kRGVmIHw9IDI7XHJcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnYWx0KycsICcnKTtcclxuICB9XHJcbiAgaWYgKGtleURlZi5pbmNsdWRlcygnc2hpZnQrJykpIHtcclxuICAgIGNtZERlZiB8PSA0O1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ3NoaWZ0KycsICcnKTtcclxuICB9XHJcbiAgaWYgKGtleURlZi5pbmNsdWRlcygnbWV0YSsnKSkge1xyXG4gICAgY21kRGVmIHw9IDg7XHJcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnbWV0YSsnLCAnJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoa2V5RGVmID09PSAndXAnKSB7XHJcbiAgICBrZXkgPSAzODtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2Rvd24nKSB7XHJcbiAgICBrZXkgPSA0MDtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJysnIHx8IGtleURlZiA9PT0gJ1wiK1wiJykge1xyXG4gICAga2V5ID0gMTcxO1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnLScgfHwga2V5RGVmID09PSAnXCItXCInKSB7XHJcbiAgICBrZXkgPSAxNzM7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlc2MnKSB7XHJcbiAgICBrZXkgPSAyNztcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2VudGVyJykge1xyXG4gICAga2V5ID0gMTM7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdzcGFjZScpIHtcclxuICAgIGtleSA9IDMyO1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZjQnKSB7XHJcbiAgICBrZXkgPSAxMTU7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdiYWNrc3BhY2UnKSB7XHJcbiAgICBrZXkgPSA4O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnaG9tZScpIHtcclxuICAgIGtleSA9IDM2O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZW5kJykge1xyXG4gICAga2V5ID0gMzU7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdsZWZ0Jykge1xyXG4gICAga2V5ID0gMzc7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdyaWdodCcpIHtcclxuICAgIGtleSA9IDM5O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAncGFnZWRvd24nKSB7XHJcbiAgICBrZXkgPSAzNDtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ3BhZ2V1cCcpIHtcclxuICAgIGtleSA9IDMzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBrZXkgPSBrZXlEZWYudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xyXG4gIH1cclxuICBpZiAoa2V5Y29kZSA9PT0gJ1dIRUVMJykge1xyXG4gICAgcmV0dXJuIGtleURlZiA9PT0gJ3doZWVsJyAmJiBjbWQgPT09IGNtZERlZjtcclxuICB9XHJcbiAgcmV0dXJuIGtleSA9PT0ga2V5Y29kZSAmJiBjbWQgPT09IGNtZERlZjtcclxufVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgKHdpbmRvdyBhcyBhbnkpLmlzS2V5SWdub3JlZCA9IGlzS2V5SWdub3JlZDtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21tb25Nb2R1bGUsIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFBkZlpvb21Ecm9wZG93bkNvbXBvbmVudCxcclxuICAgIFBkZkNvbnRleHRNZW51Q29tcG9uZW50LFxyXG4gICAgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZk9wZW5GaWxlQ29tcG9uZW50LFxyXG4gICAgUGRmUHJpbnRDb21wb25lbnQsXHJcbiAgICBQZGZEb3dubG9hZENvbXBvbmVudCxcclxuICAgIFBkZkJvb2ttYXJrQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZQYWdpbmdBcmVhQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhckNvbXBvbmVudCxcclxuICAgIFBkZlNpZGViYXJDb21wb25lbnQsXHJcbiAgICBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCxcclxuICAgIFBkZlNpZGViYXJUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCxcclxuICAgIFBkZkRvY3VtZW50UHJvcGVydGllc092ZXJsYXlDb21wb25lbnQsXHJcbiAgICBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZE5leHRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhck9wdGlvbnNUd29Db250YWluZXJDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kYmFyT3B0aW9uc09uZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kSGlnaGxpZ2h0QWxsQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kTXVsdGlwbGVTZWFyY2hUZXh0c0NvbXBvbmVudCxcclxuICAgIFBkZkZpbmRJZ25vcmVBY2NlbnRzQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhck9wdGlvbnNUaHJlZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kYmFyTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFBkZkhhbmRUb29sQ29tcG9uZW50LFxyXG4gICAgUGRmUm90YXRlUGFnZUNvbXBvbmVudCxcclxuICAgIFBkZlNlbGVjdFRvb2xDb21wb25lbnQsXHJcbiAgICBQZGZUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQsXHJcbiAgICBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmTGFzdFBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZGaXJzdFBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZOZXh0UGFnZUNvbXBvbmVudCxcclxuICAgIFBkZlByZXZpb3VzUGFnZUNvbXBvbmVudCxcclxuICAgIFBkZlBhZ2VOdW1iZXJDb21wb25lbnQsXHJcbiAgICBQZGZab29tSW5Db21wb25lbnQsXHJcbiAgICBQZGZab29tT3V0Q29tcG9uZW50LFxyXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEV4dGVuZGVkUGRmVmlld2VyTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19
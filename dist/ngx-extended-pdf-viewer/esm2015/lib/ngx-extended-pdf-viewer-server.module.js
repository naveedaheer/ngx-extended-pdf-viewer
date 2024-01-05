import { NgxExtendedPdfViewerCommonModule } from './ngx-extended-pdf-viewer-common.module';
import { NgxExtendedPdfViewerServerComponent } from './ngx-extended-pdf-viewer-server.component';
import { PdfHandToolComponent } from './toolbar/pdf-hand-tool/pdf-hand-tool.component';
// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
export class NgxExtendedPdfViewerServerModule {
    constructor() { }
}
/** @nocollapse */ NgxExtendedPdfViewerServerModule.ɵfac = function NgxExtendedPdfViewerServerModule_Factory(t) { return new (t || NgxExtendedPdfViewerServerModule)(); };
/** @nocollapse */ NgxExtendedPdfViewerServerModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: NgxExtendedPdfViewerServerModule });
/** @nocollapse */ NgxExtendedPdfViewerServerModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ providers: [], imports: [[NgxExtendedPdfViewerCommonModule, CommonModule, FormsModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxExtendedPdfViewerServerModule, [{
        type: NgModule,
        args: [{
                imports: [NgxExtendedPdfViewerCommonModule, CommonModule, FormsModule],
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
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxExtendedPdfViewerServerModule, { declarations: [NgxExtendedPdfViewerServerComponent], imports: [NgxExtendedPdfViewerCommonModule, CommonModule, FormsModule], exports: [PdfZoomDropdownComponent,
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
        NgxExtendedPdfViewerServerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixpQ0FBaUM7QUFFakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxpR0FBaUcsQ0FBQztBQUN4SixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2RkFBNkYsQ0FBQztBQUNsSixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxxR0FBcUcsQ0FBQztBQUM3SixPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSx5R0FBeUcsQ0FBQztBQUNuSyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxxR0FBcUcsQ0FBQztBQUM3SixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2R0FBNkcsQ0FBQztBQUN6SixP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c0NBQXNDO1FBQ3RDLHNDQUFzQztRQUN0Qyx5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFDbkMsNkJBQTZCO1FBQzdCLHdDQUF3QztRQUN4Qyw0QkFBNEI7UUFDNUIsbUNBQW1DO1FBQ25DLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLGtDQUFrQztRQUNsQyxvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21tb25Nb2R1bGUgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLWNvbW1vbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItc2VydmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkhhbmRUb29sQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1oYW5kLXRvb2wvcGRmLWhhbmQtdG9vbC5jb21wb25lbnQnO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBkZkJvb2ttYXJrQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1ib29rbWFyay9wZGYtYm9va21hcmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWNvbnRleHQtbWVudS9wZGYtY29udGV4dC1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkRvY3VtZW50UHJvcGVydGllc092ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL2RvY3VtZW50LXByb3BlcnRpZXMvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMtb3ZlcmxheS9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1vdmVybGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkRvd25sb2FkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1kb3dubG9hZC9wZGYtZG93bmxvYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kYmFyTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lci9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kYmFyT3B0aW9uc09uZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRiYXJPcHRpb25zVGhyZWVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZGJhck9wdGlvbnNUd29Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kYmFyLW9wdGlvbnMtdHdvLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kLWJ1dHRvbi9wZGYtZmluZC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS13b3JkL3BkZi1maW5kLWVudGlyZS13b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRIaWdobGlnaHRBbGxDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyL3BkZi1maW5kLWhpZ2hsaWdodC1hbGwvcGRmLWZpbmQtaGlnaGxpZ2h0LWFsbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kSWdub3JlQWNjZW50c0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXRocmVlLWNvbnRhaW5lci9wZGYtZmluZC1pZ25vcmUtYWNjZW50cy9wZGYtZmluZC1pZ25vcmUtYWNjZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLWlucHV0LWFyZWEvcGRmLWZpbmQtaW5wdXQtYXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kTWF0Y2hDYXNlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtb25lLWNvbnRhaW5lci9wZGYtZmluZC1tYXRjaC1jYXNlL3BkZi1maW5kLW1hdGNoLWNhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZE11bHRpcGxlU2VhcmNoVGV4dHNDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS1waHJhc2UvcGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kTmV4dENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1uZXh0L3BkZi1maW5kLW5leHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLXByZXZpb3VzL3BkZi1maW5kLXByZXZpb3VzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmQtcmVzdWx0cy1jb3VudC9wZGYtZmluZC1yZXN1bHRzLWNvdW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpcnN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLWZpcnN0LXBhZ2UvcGRmLWZpcnN0LXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmTGFzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1sYXN0LXBhZ2UvcGRmLWxhc3QtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZOZXh0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLW5leHQtcGFnZS9wZGYtbmV4dC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZk9wZW5GaWxlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1vcGVuLWZpbGUvcGRmLW9wZW4tZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQYWdlTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcGFnZS1udW1iZXIvcGRmLXBhZ2UtbnVtYmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlBhZ2luZ0FyZWFDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdpbmctYXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQcmVzZW50YXRpb25Nb2RlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wcmVzZW50YXRpb24tbW9kZS9wZGYtcHJlc2VudGF0aW9uLW1vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcHJldmlvdXMtcGFnZS9wZGYtcHJldmlvdXMtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQcmludENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcHJpbnQvcGRmLXByaW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlJvdGF0ZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXJvdGF0ZS1wYWdlL3BkZi1yb3RhdGUtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1zZWFyY2gtaW5wdXQtZmllbGQvcGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmVG9nZ2xlU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9nZ2xlLXNpZGViYXIvcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXRvb2xiYXIvcGRmLXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbUluQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20taW4vcGRmLXpvb20taW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbU91dENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLW91dC9wZGYtem9vbS1vdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNlbGVjdFRvb2xDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXNlbGVjdC10b29sL3BkZi1zZWxlY3QtdG9vbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci1jb250ZW50L3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2lkZWJhclRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItdG9vbGJhci9wZGYtc2lkZWJhci10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21tb25Nb2R1bGUsIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2ZXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFBkZlpvb21Ecm9wZG93bkNvbXBvbmVudCxcclxuICAgIFBkZkNvbnRleHRNZW51Q29tcG9uZW50LFxyXG4gICAgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZk9wZW5GaWxlQ29tcG9uZW50LFxyXG4gICAgUGRmUHJpbnRDb21wb25lbnQsXHJcbiAgICBQZGZEb3dubG9hZENvbXBvbmVudCxcclxuICAgIFBkZkJvb2ttYXJrQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZQYWdpbmdBcmVhQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhckNvbXBvbmVudCxcclxuICAgIFBkZlNpZGViYXJDb21wb25lbnQsXHJcbiAgICBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCxcclxuICAgIFBkZlNpZGViYXJUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCxcclxuICAgIFBkZkRvY3VtZW50UHJvcGVydGllc092ZXJsYXlDb21wb25lbnQsXHJcbiAgICBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZE5leHRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhck9wdGlvbnNUd29Db250YWluZXJDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kYmFyT3B0aW9uc09uZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kSGlnaGxpZ2h0QWxsQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kTXVsdGlwbGVTZWFyY2hUZXh0c0NvbXBvbmVudCxcclxuICAgIFBkZkZpbmRJZ25vcmVBY2NlbnRzQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhck9wdGlvbnNUaHJlZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kYmFyTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFBkZkhhbmRUb29sQ29tcG9uZW50LFxyXG4gICAgUGRmUm90YXRlUGFnZUNvbXBvbmVudCxcclxuICAgIFBkZlNlbGVjdFRvb2xDb21wb25lbnQsXHJcbiAgICBQZGZUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQsXHJcbiAgICBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmTGFzdFBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZGaXJzdFBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZOZXh0UGFnZUNvbXBvbmVudCxcclxuICAgIFBkZlByZXZpb3VzUGFnZUNvbXBvbmVudCxcclxuICAgIFBkZlBhZ2VOdW1iZXJDb21wb25lbnQsXHJcbiAgICBQZGZab29tSW5Db21wb25lbnQsXHJcbiAgICBQZGZab29tT3V0Q29tcG9uZW50LFxyXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2ZXJDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmVyTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19
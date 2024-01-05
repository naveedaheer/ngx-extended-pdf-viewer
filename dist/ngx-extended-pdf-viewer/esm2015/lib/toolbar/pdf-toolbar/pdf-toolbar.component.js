import { Component, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pdf-toggle-sidebar/pdf-toggle-sidebar.component";
import * as i3 from "../pdf-find-button/pdf-find-button.component";
import * as i4 from "../pdf-paging-area/pdf-paging-area.component";
import * as i5 from "../pdf-zoom-toolbar/pdf-zoom-toolbar.component";
import * as i6 from "../pdf-hand-tool/pdf-hand-tool.component";
import * as i7 from "../pdf-select-tool/pdf-select-tool.component";
import * as i8 from "../pdf-rotate-page/pdf-rotate-page.component";
import * as i9 from "../pdf-presentation-mode/pdf-presentation-mode.component";
import * as i10 from "../pdf-open-file/pdf-open-file.component";
import * as i11 from "../pdf-print/pdf-print.component";
import * as i12 from "../pdf-download/pdf-download.component";
import * as i13 from "../pdf-bookmark/pdf-bookmark.component";
import * as i14 from "../pdf-toggle-secondary-toolbar/pdf-toggle-secondary-toolbar.component";
function PdfToolbarComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customToolbar ? customToolbar : defaultToolbar"]);
} }
function PdfToolbarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelement(2, "pdf-toggle-sidebar", 9);
    i0.ɵɵelement(3, "pdf-find-button", 10);
    i0.ɵɵelement(4, "pdf-paging-area", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "pdf-zoom-toolbar", 12);
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵelement(7, "pdf-hand-tool", 14);
    i0.ɵɵelement(8, "pdf-select-tool", 15);
    i0.ɵɵelement(9, "pdf-rotate-page", 16);
    i0.ɵɵelement(10, "pdf-rotate-page", 16);
    i0.ɵɵelement(11, "pdf-presentation-mode", 17);
    i0.ɵɵelement(12, "pdf-open-file", 18);
    i0.ɵɵelement(13, "pdf-print", 19);
    i0.ɵɵelement(14, "pdf-download", 20);
    i0.ɵɵelement(15, "pdf-bookmark", 21);
    i0.ɵɵelement(16, "pdf-toggle-secondary-toolbar", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("showSidebarButton", ctx_r2.showSidebarButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showFindButton", ctx_r2.showFindButton)("textLayer", ctx_r2.textLayer);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showPagingButtons", ctx_r2.showPagingButtons);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showZoomButtons", ctx_r2.showZoomButtons)("zoomLevels", ctx_r2.zoomLevels);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("showHandToolButton", ctx_r2.showHandToolButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showSelectToolButton", ctx_r2.showHandToolButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showRotateButton", ctx_r2.showRotateButton)("clockwise", true)("counterClockwise", false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showRotateButton", ctx_r2.showRotateButton)("clockwise", false)("counterClockwise", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showPresentationModeButton", ctx_r2.showPresentationModeButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showOpenFileButton", ctx_r2.showOpenFileButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showPrintButton", ctx_r2.showPrintButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showDownloadButton", ctx_r2.showDownloadButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showBookmarkButton", ctx_r2.showBookmarkButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showSecondaryToolbarButton", ctx_r2.showSecondaryToolbarButton);
} }
const _c0 = ["*"];
export class PdfToolbarComponent {
    constructor() {
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
}
/** @nocollapse */ PdfToolbarComponent.ɵfac = function PdfToolbarComponent_Factory(t) { return new (t || PdfToolbarComponent)(); };
/** @nocollapse */ PdfToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfToolbarComponent, selectors: [["pdf-toolbar"]], inputs: { customToolbar: "customToolbar", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", primaryMenuVisible: "primaryMenuVisible", showBookmarkButton: "showBookmarkButton", showDownloadButton: "showDownloadButton", showFindButton: "showFindButton", showHandToolButton: "showHandToolButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showPagingButtons: "showPagingButtons", showPresentationModeButton: "showPresentationModeButton", showRotateButton: "showRotateButton", showSecondaryToolbarButton: "showSecondaryToolbarButton", showSidebarButton: "showSidebarButton", showZoomButtons: "showZoomButtons", textLayer: "textLayer", toolbarMarginTop: "toolbarMarginTop", toolbarWidth: "toolbarWidth", zoomLevels: "zoomLevels" }, ngContentSelectors: _c0, decls: 8, vars: 11, consts: [[1, "toolbar"], ["id", "toolbarContainer"], [4, "ngTemplateOutlet"], ["id", "loadingBar"], [1, "progress"], [1, "glimmer"], ["defaultToolbar", ""], ["id", "toolbarViewer"], ["id", "toolbarViewerLeft"], [3, "showSidebarButton"], [3, "showFindButton", "textLayer"], [3, "showPagingButtons"], [3, "showZoomButtons", "zoomLevels"], ["id", "toolbarViewerRight"], [3, "showHandToolButton"], [3, "showSelectToolButton"], [3, "showRotateButton", "clockwise", "counterClockwise"], [3, "showPresentationModeButton"], [3, "showOpenFileButton"], [3, "showPrintButton"], [3, "showDownloadButton"], [3, "showBookmarkButton"], [3, "showSecondaryToolbarButton"]], template: function PdfToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, PdfToolbarComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelement(5, "div", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, PdfToolbarComponent_ng_template_6_Template, 17, 20, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(7);
        i0.ɵɵstyleProp("transform", "scale(" + ctx.mobileFriendlyZoomScale + ")")("transform-origin", "left center")("width", ctx.toolbarWidth)("margin-top", ctx.toolbarMarginTop);
        i0.ɵɵclassProp("invisible", !ctx.primaryMenuVisible);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customToolbar ? ctx.customToolbar : _r1);
    } }, directives: [i1.NgTemplateOutlet, i2.PdfToggleSidebarComponent, i3.PdfFindButtonComponent, i4.PdfPagingAreaComponent, i5.PdfZoomToolbarComponent, i6.PdfHandToolComponent, i7.PdfSelectToolComponent, i8.PdfRotatePageComponent, i9.PdfPresentationModeComponent, i10.PdfOpenFileComponent, i11.PdfPrintComponent, i12.PdfDownloadComponent, i13.PdfBookmarkComponent, i14.PdfToggleSecondaryToolbarComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-toolbar',
                templateUrl: './pdf-toolbar.component.html',
                styleUrls: ['./pdf-toolbar.component.css']
            }]
    }], function () { return []; }, { customToolbar: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
            type: Input
        }], primaryMenuVisible: [{
            type: Input
        }], showBookmarkButton: [{
            type: Input
        }], showDownloadButton: [{
            type: Input
        }], showFindButton: [{
            type: Input
        }], showHandToolButton: [{
            type: Input
        }], showOpenFileButton: [{
            type: Input
        }], showPrintButton: [{
            type: Input
        }], showPagingButtons: [{
            type: Input
        }], showPresentationModeButton: [{
            type: Input
        }], showRotateButton: [{
            type: Input
        }], showSecondaryToolbarButton: [{
            type: Input
        }], showSidebarButton: [{
            type: Input
        }], showZoomButtons: [{
            type: Input
        }], textLayer: [{
            type: Input
        }], toolbarMarginTop: [{
            type: Input
        }], toolbarWidth: [{
            type: Input
        }], zoomLevels: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi10b29sYmFyL3BkZi10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9vbGJhci9wZGYtdG9vbGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQXdCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ094Riw4RkFBNEY7OztJQVE5Riw4QkFBd0I7SUFDdEIsOEJBQTRCO0lBQzFCLHdDQUFpRjtJQUNqRixzQ0FBNkY7SUFDN0Ysc0NBQTJFO0lBQzdFLGlCQUFNO0lBQ04sdUNBQW1HO0lBQ25HLCtCQUE2QjtJQUMzQixvQ0FBeUU7SUFDekUsc0NBQStFO0lBQy9FLHNDQUF1SDtJQUN2SCx1Q0FBdUg7SUFDdkgsNkNBQXlHO0lBQ3pHLHFDQUF5RTtJQUN6RSxpQ0FBMkQ7SUFDM0Qsb0NBQXVFO0lBQ3ZFLG9DQUF1RTtJQUN2RSxvREFBdUg7SUFDekgsaUJBQU07SUFDUCxpQkFBTTs7O0lBakJpQixlQUF1QztJQUF2Qyw0REFBdUM7SUFDMUMsZUFBaUM7SUFBakMsc0RBQWlDLCtCQUFBO0lBQ2pDLGVBQXVDO0lBQXZDLDREQUF1QztJQUV4QyxlQUFtQztJQUFuQyx3REFBbUMsaUNBQUE7SUFFcEMsZUFBeUM7SUFBekMsOERBQXlDO0lBQ3ZDLGVBQTJDO0lBQTNDLGdFQUEyQztJQUMzQyxlQUFxQztJQUFyQywwREFBcUMsbUJBQUEsMkJBQUE7SUFDckMsZUFBcUM7SUFBckMsMERBQXFDLG9CQUFBLDBCQUFBO0lBQy9CLGVBQXlEO0lBQXpELDhFQUF5RDtJQUNqRSxlQUF5QztJQUF6Qyw4REFBeUM7SUFDN0MsZUFBbUM7SUFBbkMsd0RBQW1DO0lBQ2hDLGVBQXlDO0lBQXpDLDhEQUF5QztJQUN6QyxlQUF5QztJQUF6Qyw4REFBeUM7SUFDekIsZUFBeUQ7SUFBekQsOEVBQXlEOzs7QUR6QjdGLE1BQU0sT0FBTyxtQkFBbUI7SUEwRDlCO1FBckRPLDRCQUF1QixHQUFHLENBQUMsQ0FBQztRQUc1Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFHMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQixtQkFBYyxHQUF3QixTQUFTLENBQUM7UUFHaEQsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUd2QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHekIsK0JBQTBCLEdBQUcsS0FBSyxDQUFDO1FBR25DLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUd4QiwrQkFBMEIsR0FBRyxJQUFJLENBQUM7UUFHbEMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBR3pCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBR3ZCLGNBQVMsR0FBd0IsU0FBUyxDQUFDO1FBRzNDLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUd6QixpQkFBWSxHQUFHLE1BQU0sQ0FBQztRQUd0QixlQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXpGLENBQUM7O3lHQTFETCxtQkFBbUI7cUdBQW5CLG1CQUFtQjs7UUNQaEMsOEJBS0M7UUFDQyw4QkFBMkI7UUFDekIsa0ZBQTRGO1FBQzVGLDhCQUFxQjtRQUNuQiw4QkFBc0I7UUFBQSx5QkFBMkI7UUFBQSxpQkFBTTtRQUN6RCxpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07UUFFTix1SEFxQmM7OztRQWxDVix5RUFBNEQsbUNBQUEsMkJBQUEsb0NBQUE7UUFEM0Msb0RBQXVDO1FBTzNDLGVBQWdFO1FBQWhFLDhFQUFnRTs7dUZEQXBFLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDO3NDQUdRLGFBQWE7a0JBRG5CLEtBQUs7WUFJQyx1QkFBdUI7a0JBRDdCLEtBQUs7WUFJQyxrQkFBa0I7a0JBRHhCLEtBQUs7WUFJQyxrQkFBa0I7a0JBRHhCLEtBQUs7WUFJQyxrQkFBa0I7a0JBRHhCLEtBQUs7WUFJQyxjQUFjO2tCQURwQixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixLQUFLO1lBSUMsZUFBZTtrQkFEckIsS0FBSztZQUlDLGlCQUFpQjtrQkFEdkIsS0FBSztZQUlDLDBCQUEwQjtrQkFEaEMsS0FBSztZQUlDLGdCQUFnQjtrQkFEdEIsS0FBSztZQUlDLDBCQUEwQjtrQkFEaEMsS0FBSztZQUlDLGlCQUFpQjtrQkFEdkIsS0FBSztZQUlDLGVBQWU7a0JBRHJCLEtBQUs7WUFJQyxTQUFTO2tCQURmLEtBQUs7WUFJQyxnQkFBZ0I7a0JBRHRCLEtBQUs7WUFJQyxZQUFZO2tCQURsQixLQUFLO1lBSUMsVUFBVTtrQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi10b29sYmFyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmVG9vbGJhckNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tVG9vbGJhcjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSAxO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwcmltYXJ5TWVudVZpc2libGUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Qm9va21hcmtCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RG93bmxvYWRCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEJ1dHRvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0hhbmRUb29sQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd09wZW5GaWxlQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1ByaW50QnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnMgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Um90YXRlQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2lkZWJhckJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dab29tQnV0dG9ucyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHRleHRMYXllcjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdG9vbGJhck1hcmdpblRvcCA9ICcwcHgnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0b29sYmFyV2lkdGggPSAnMTAwJSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHpvb21MZXZlbHMgPSBbJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZS1maXQnLCAncGFnZS13aWR0aCcsIDAuNSwgMC43NSwgMSwgMS4yNSwgMS41LCAyLCAzLCA0XTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJ0b29sYmFyXCIgW2NsYXNzLmludmlzaWJsZV09XCIhcHJpbWFyeU1lbnVWaXNpYmxlXCJcclxuICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3NjYWxlKCcgKyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSArICcpJ1wiXHJcbiAgICBbc3R5bGUudHJhbnNmb3JtT3JpZ2luXT1cIidsZWZ0IGNlbnRlcidcIlxyXG4gICAgW3N0eWxlLndpZHRoXT1cInRvb2xiYXJXaWR0aFwiXHJcbiAgICBbc3R5bGUubWFyZ2luVG9wXT1cInRvb2xiYXJNYXJnaW5Ub3BcIlxyXG4+XHJcbiAgPGRpdiBpZD1cInRvb2xiYXJDb250YWluZXJcIj5cclxuICAgIDxuZy1jb250ZW50ICpuZ1RlbXBsYXRlT3V0bGV0PVwiY3VzdG9tVG9vbGJhciA/IGN1c3RvbVRvb2xiYXIgOiBkZWZhdWx0VG9vbGJhclwiPjwvbmctY29udGVudD5cclxuICAgIDxkaXYgaWQ9XCJsb2FkaW5nQmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPjxkaXYgY2xhc3M9XCJnbGltbWVyXCI+PC9kaXY+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRUb29sYmFyPlxyXG4gIDxkaXYgaWQ9XCJ0b29sYmFyVmlld2VyXCI+XHJcbiAgICA8ZGl2IGlkPVwidG9vbGJhclZpZXdlckxlZnRcIj5cclxuICAgICAgPHBkZi10b2dnbGUtc2lkZWJhciBbc2hvd1NpZGViYXJCdXR0b25dPVwic2hvd1NpZGViYXJCdXR0b25cIj48L3BkZi10b2dnbGUtc2lkZWJhcj5cclxuICAgICAgPHBkZi1maW5kLWJ1dHRvbiBbc2hvd0ZpbmRCdXR0b25dPVwic2hvd0ZpbmRCdXR0b25cIiBbdGV4dExheWVyXT1cInRleHRMYXllclwiPjwvcGRmLWZpbmQtYnV0dG9uPlxyXG4gICAgICA8cGRmLXBhZ2luZy1hcmVhIFtzaG93UGFnaW5nQnV0dG9uc109XCJzaG93UGFnaW5nQnV0dG9uc1wiPjwvcGRmLXBhZ2luZy1hcmVhPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cGRmLXpvb20tdG9vbGJhciBbc2hvd1pvb21CdXR0b25zXT1cInNob3dab29tQnV0dG9uc1wiIFt6b29tTGV2ZWxzXT1cInpvb21MZXZlbHNcIj48L3BkZi16b29tLXRvb2xiYXI+XHJcbiAgICA8ZGl2IGlkPVwidG9vbGJhclZpZXdlclJpZ2h0XCI+XHJcbiAgICAgIDxwZGYtaGFuZC10b29sIFtzaG93SGFuZFRvb2xCdXR0b25dPVwic2hvd0hhbmRUb29sQnV0dG9uXCI+PC9wZGYtaGFuZC10b29sPlxyXG4gICAgICA8cGRmLXNlbGVjdC10b29sIFtzaG93U2VsZWN0VG9vbEJ1dHRvbl09XCJzaG93SGFuZFRvb2xCdXR0b25cIj48L3BkZi1zZWxlY3QtdG9vbD5cclxuICAgICAgPHBkZi1yb3RhdGUtcGFnZSBbc2hvd1JvdGF0ZUJ1dHRvbl09XCJzaG93Um90YXRlQnV0dG9uXCIgW2Nsb2Nrd2lzZV09XCJ0cnVlXCIgW2NvdW50ZXJDbG9ja3dpc2VdPVwiZmFsc2VcIj48L3BkZi1yb3RhdGUtcGFnZT5cclxuICAgICAgPHBkZi1yb3RhdGUtcGFnZSBbc2hvd1JvdGF0ZUJ1dHRvbl09XCJzaG93Um90YXRlQnV0dG9uXCIgW2Nsb2Nrd2lzZV09XCJmYWxzZVwiIFtjb3VudGVyQ2xvY2t3aXNlXT1cInRydWVcIj48L3BkZi1yb3RhdGUtcGFnZT5cclxuICAgICAgPHBkZi1wcmVzZW50YXRpb24tbW9kZSBbc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b25dPVwic2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b25cIj48L3BkZi1wcmVzZW50YXRpb24tbW9kZT5cclxuICAgICAgPHBkZi1vcGVuLWZpbGUgW3Nob3dPcGVuRmlsZUJ1dHRvbl09XCJzaG93T3BlbkZpbGVCdXR0b25cIj48L3BkZi1vcGVuLWZpbGU+XHJcbiAgICAgIDxwZGYtcHJpbnQgW3Nob3dQcmludEJ1dHRvbl09XCJzaG93UHJpbnRCdXR0b25cIj48L3BkZi1wcmludD5cclxuICAgICAgPHBkZi1kb3dubG9hZCBbc2hvd0Rvd25sb2FkQnV0dG9uXT1cInNob3dEb3dubG9hZEJ1dHRvblwiPjwvcGRmLWRvd25sb2FkPlxyXG4gICAgICA8cGRmLWJvb2ttYXJrIFtzaG93Qm9va21hcmtCdXR0b25dPVwic2hvd0Jvb2ttYXJrQnV0dG9uXCI+PC9wZGYtYm9va21hcms+XHJcbiAgICAgIDxwZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyIFtzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbl09XCJzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvblwiPjwvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhcj5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19
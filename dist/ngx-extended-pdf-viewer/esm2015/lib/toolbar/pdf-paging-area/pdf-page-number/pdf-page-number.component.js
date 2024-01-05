import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfPageNumberComponent {
    constructor() {
        this.showPagingButtons = true;
    }
    ngOnInit() { }
}
/** @nocollapse */ PdfPageNumberComponent.ɵfac = function PdfPageNumberComponent_Factory(t) { return new (t || PdfPageNumberComponent)(); };
/** @nocollapse */ PdfPageNumberComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPageNumberComponent, selectors: [["pdf-page-number"]], inputs: { showPagingButtons: "showPagingButtons" }, decls: 2, vars: 4, consts: [["type", "number", "id", "pageNumber", "title", "Page", "value", "1", "size", "4", "min", "1", "data-l10n-id", "page", 1, "toolbarField", "pageNumber"], ["id", "numPages", 1, "toolbarLabel", "hiddenXLView"]], template: function PdfPageNumberComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "input", 0);
        i0.ɵɵelement(1, "span", 1);
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showPagingButtons);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("invisible", !ctx.showPagingButtons);
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPageNumberComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-page-number',
                templateUrl: './pdf-page-number.component.html',
                styleUrls: ['./pdf-page-number.component.css']
            }]
    }], function () { return []; }, { showPagingButtons: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXBhZ2UtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2UtbnVtYmVyL3BkZi1wYWdlLW51bWJlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdlLW51bWJlci9wZGYtcGFnZS1udW1iZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT3pELE1BQU0sT0FBTyxzQkFBc0I7SUFJakM7UUFGTyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFFakIsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQzs7K0dBTkYsc0JBQXNCO3dHQUF0QixzQkFBc0I7UUNQbkMsMkJBVUU7UUFDRiwwQkFBb0c7O1FBVmxHLG1EQUFzQztRQVVsQyxlQUFzQztRQUF0QyxtREFBc0M7O3VGREovQixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DO3NDQUdRLGlCQUFpQjtrQkFEdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtcGFnZS1udW1iZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtcGFnZS1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1wYWdlLW51bWJlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlBhZ2VOdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQYWdpbmdCdXR0b25zID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiPGlucHV0XHJcbiAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1BhZ2luZ0J1dHRvbnNcIlxyXG4gIHR5cGU9XCJudW1iZXJcIlxyXG4gIGlkPVwicGFnZU51bWJlclwiXHJcbiAgY2xhc3M9XCJ0b29sYmFyRmllbGQgcGFnZU51bWJlclwiXHJcbiAgdGl0bGU9XCJQYWdlXCJcclxuICB2YWx1ZT1cIjFcIlxyXG4gIHNpemU9XCI0XCJcclxuICBtaW49XCIxXCJcclxuICBkYXRhLWwxMG4taWQ9XCJwYWdlXCJcclxuLz5cclxuPHNwYW4gW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1BhZ2luZ0J1dHRvbnNcIiBpZD1cIm51bVBhZ2VzXCIgY2xhc3M9XCJ0b29sYmFyTGFiZWwgaGlkZGVuWExWaWV3XCI+PC9zcGFuPlxyXG4iXX0=
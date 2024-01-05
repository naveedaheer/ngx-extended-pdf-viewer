import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-first-page/pdf-first-page.component";
import * as i2 from "./pdf-previous-page/pdf-previous-page.component";
import * as i3 from "./pdf-page-number/pdf-page-number.component";
import * as i4 from "./pdf-next-page/pdf-next-page.component";
import * as i5 from "./pdf-last-page/pdf-last-page.component";
export class PdfPagingAreaComponent {
    constructor() {
        this.showPagingButtons = true;
    }
}
/** @nocollapse */ PdfPagingAreaComponent.ɵfac = function PdfPagingAreaComponent_Factory(t) { return new (t || PdfPagingAreaComponent)(); };
/** @nocollapse */ PdfPagingAreaComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPagingAreaComponent, selectors: [["pdf-paging-area"]], inputs: { showPagingButtons: "showPagingButtons" }, decls: 7, vars: 5, consts: [[1, "paging-left", "hiddenTinyView"], [2, "margin-right", "-3px"], [2, "margin-left", "-3px"], [3, "showPagingButtons"], [1, "paging-right", "hiddenTinyView"], [2, "margin-right", "-3px", "margin-left", "-3px"]], template: function PdfPagingAreaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "pdf-first-page", 1);
        i0.ɵɵelement(2, "pdf-previous-page", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "pdf-page-number", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelement(5, "pdf-next-page", 5);
        i0.ɵɵelement(6, "pdf-last-page", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showPagingButtons);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("showPagingButtons", ctx.showPagingButtons);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("invisible", !ctx.showPagingButtons);
    } }, directives: [i1.PdfFirstPageComponent, i2.PdfPreviousPageComponent, i3.PdfPageNumberComponent, i4.PdfNextPageComponent, i5.PdfLastPageComponent], styles: [".paging-right[_ngcontent-%COMP%]{float:right}.paging-left[_ngcontent-%COMP%], .paging-right[_ngcontent-%COMP%]{display:block;margin-top:-2px}.paging-left[_ngcontent-%COMP%]{float:left}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPagingAreaComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-paging-area',
                templateUrl: './pdf-paging-area.component.html',
                styleUrls: ['./pdf-paging-area.component.css']
            }]
    }], null, { showPagingButtons: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBT2pELE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFRUyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7S0FDakM7OytHQUpZLHNCQUFzQjt3R0FBdEIsc0JBQXNCO1FDUG5DLDhCQUdDO1FBQ0Qsb0NBQTZEO1FBQzdELHVDQUFrRTtRQUNsRSxpQkFBTTtRQUNOLHFDQUEyRTtRQUMzRSw4QkFHQztRQUNELG1DQUE2RTtRQUM3RSxtQ0FBMEQ7UUFDMUQsaUJBQU07O1FBYk4sbURBQXNDO1FBTXJCLGVBQXVDO1FBQXZDLHlEQUF1QztRQUV4RCxlQUFzQztRQUF0QyxtREFBc0M7O3VGREZ6QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DO2dCQUlRLGlCQUFpQjtrQkFEdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXBhZ2luZy1hcmVhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtcGFnaW5nLWFyZWEuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZQYWdpbmdBcmVhQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnMgPSB0cnVlO1xyXG59XHJcbiIsIjxkaXZcclxuW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1BhZ2luZ0J1dHRvbnNcIlxyXG5jbGFzcz1cInBhZ2luZy1sZWZ0IGhpZGRlblRpbnlWaWV3XCJcclxuPlxyXG48cGRmLWZpcnN0LXBhZ2Ugc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IC0zcHg7XCI+PC9wZGYtZmlyc3QtcGFnZT5cclxuPHBkZi1wcmV2aW91cy1wYWdlIHN0eWxlPVwibWFyZ2luLWxlZnQ6IC0zcHg7XCI+PC9wZGYtcHJldmlvdXMtcGFnZT5cclxuPC9kaXY+XHJcbjxwZGYtcGFnZS1udW1iZXIgW3Nob3dQYWdpbmdCdXR0b25zXT1cInNob3dQYWdpbmdCdXR0b25zXCI+PC9wZGYtcGFnZS1udW1iZXI+XHJcbjxkaXZcclxuW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1BhZ2luZ0J1dHRvbnNcIlxyXG5jbGFzcz1cInBhZ2luZy1yaWdodCBoaWRkZW5UaW55Vmlld1wiXHJcbj5cclxuPHBkZi1uZXh0LXBhZ2Ugc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IC0zcHg7bWFyZ2luLWxlZnQ6IC0zcHg7XCI+PC9wZGYtbmV4dC1wYWdlPlxyXG48cGRmLWxhc3QtcGFnZSBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtM3B4O1wiPjwvcGRmLWxhc3QtcGFnZT5cclxuPC9kaXY+XHJcbiJdfQ==
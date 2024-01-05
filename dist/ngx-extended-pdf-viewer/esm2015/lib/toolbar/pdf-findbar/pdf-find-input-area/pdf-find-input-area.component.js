import { Component, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pdf-search-input-field/pdf-search-input-field.component";
import * as i3 from "../pdf-find-previous/pdf-find-previous.component";
import * as i4 from "../pdf-find-next/pdf-find-next.component";
function PdfFindInputAreaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "pdf-search-input-field");
    i0.ɵɵelement(2, "pdf-find-previous");
    i0.ɵɵelement(3, "pdf-find-next");
    i0.ɵɵelementEnd();
} }
export class PdfFindInputAreaComponent {
    constructor() { }
}
/** @nocollapse */ PdfFindInputAreaComponent.ɵfac = function PdfFindInputAreaComponent_Factory(t) { return new (t || PdfFindInputAreaComponent)(); };
/** @nocollapse */ PdfFindInputAreaComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFindInputAreaComponent, selectors: [["pdf-find-input-area"]], inputs: { customFindbarInputArea: "customFindbarInputArea" }, decls: 2, vars: 2, consts: [["id", "findbarInputContainer", 4, "ngIf"], [3, "ngTemplateOutlet"], ["id", "findbarInputContainer"]], template: function PdfFindInputAreaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PdfFindInputAreaComponent_div_0_Template, 4, 0, "div", 0);
        i0.ɵɵelementContainer(1, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.customFindbarInputArea);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customFindbarInputArea);
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet, i2.PdfSearchInputFieldComponent, i3.PdfFindPreviousComponent, i4.PdfFindNextComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFindInputAreaComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-find-input-area',
                templateUrl: './pdf-find-input-area.component.html',
                styleUrls: ['./pdf-find-input-area.component.css']
            }]
    }], function () { return []; }, { customFindbarInputArea: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmQtaW5wdXQtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtaW5wdXQtYXJlYS9wZGYtZmluZC1pbnB1dC1hcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1pbnB1dC1hcmVhL3BkZi1maW5kLWlucHV0LWFyZWEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDQTlELDhCQUFnRTtJQUM5RCx5Q0FBaUQ7SUFDakQsb0NBQXVDO0lBQ3ZDLGdDQUErQjtJQUNqQyxpQkFBTTs7QURHTixNQUFNLE9BQU8seUJBQXlCO0lBSXBDLGdCQUFlLENBQUM7O3FIQUpMLHlCQUF5QjsyR0FBekIseUJBQXlCO1FDUHRDLDBFQUlNO1FBRU4sMkJBQTBFOztRQU56QyxrREFBNkI7UUFNaEQsZUFBMkM7UUFBM0MsNkRBQTJDOzt1RkRDNUMseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRDtzQ0FHUSxzQkFBc0I7a0JBRDVCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZmluZC1pbnB1dC1hcmVhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWZpbmQtaW5wdXQtYXJlYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWZpbmQtaW5wdXQtYXJlYS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkZpbmRJbnB1dEFyZWFDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJJbnB1dEFyZWE6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCI8ZGl2IGlkPVwiZmluZGJhcklucHV0Q29udGFpbmVyXCIgKm5nSWY9XCIhY3VzdG9tRmluZGJhcklucHV0QXJlYVwiPlxyXG4gIDxwZGYtc2VhcmNoLWlucHV0LWZpZWxkPjwvcGRmLXNlYXJjaC1pbnB1dC1maWVsZD5cclxuICA8cGRmLWZpbmQtcHJldmlvdXM+PC9wZGYtZmluZC1wcmV2aW91cz5cclxuICA8cGRmLWZpbmQtbmV4dD48L3BkZi1maW5kLW5leHQ+XHJcbjwvZGl2PlxyXG5cclxuPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21GaW5kYmFySW5wdXRBcmVhXCI+IDwvbmctY29udGFpbmVyPlxyXG4iXX0=
import { Component, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pdf-find-input-area/pdf-find-input-area.component";
import * as i3 from "./pdf-findbar-options-one-container/pdf-findbar-options-one-container.component";
import * as i4 from "./pdf-findbar-options-two-container/pdf-findbar-options-two-container.component";
import * as i5 from "./pdf-findbar-options-three-container/pdf-findbar-options-three-container.component";
import * as i6 from "./pdf-findbar-message-container/pdf-findbar-message-container.component";
function PdfFindbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementContainer(1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(4);
    i0.ɵɵstyleProp("transform", "scale(" + ctx_r1.mobileFriendlyZoomScale + ")")("transform-origin", "left center")("left", ctx_r1.findbarLeft)("top", ctx_r1.findbarTop);
    i0.ɵɵclassProp("invisible", !ctx_r1.showFindButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.customFindbarButtons ? ctx_r1.customFindbarButtons : _r2);
} }
function PdfFindbarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-find-input-area", 4);
    i0.ɵɵelement(1, "pdf-findbar-options-one-container");
    i0.ɵɵelement(2, "pdf-findbar-options-two-container");
    i0.ɵɵelement(3, "pdf-findbar-options-three-container");
    i0.ɵɵelement(4, "pdf-findbar-message-container");
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("customFindbarInputArea", ctx_r3.customFindbarInputArea);
} }
export class PdfFindbarComponent {
    constructor() {
        this.showFindButton = true;
    }
}
/** @nocollapse */ PdfFindbarComponent.ɵfac = function PdfFindbarComponent_Factory(t) { return new (t || PdfFindbarComponent)(); };
/** @nocollapse */ PdfFindbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFindbarComponent, selectors: [["pdf-findbar"]], inputs: { showFindButton: "showFindButton", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", findbarLeft: "findbarLeft", findbarTop: "findbarTop", customFindbarInputArea: "customFindbarInputArea", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons" }, decls: 5, vars: 1, consts: [[3, "ngTemplateOutlet"], ["defaultFindbar", ""], ["defaultFindbarButtons", ""], ["id", "findbar", 1, "findbar", "hidden", "doorHanger"], [3, "customFindbarInputArea"]], template: function PdfFindbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, 0);
        i0.ɵɵtemplate(1, PdfFindbarComponent_ng_template_1_Template, 2, 11, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PdfFindbarComponent_ng_template_3_Template, 5, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customFindbar ? ctx.customFindbar : _r0);
    } }, directives: [i1.NgTemplateOutlet, i2.PdfFindInputAreaComponent, i3.PdfFindbarOptionsOneContainerComponent, i4.PdfFindbarOptionsTwoContainerComponent, i5.PdfFindbarOptionsThreeContainerComponent, i6.PdfFindbarMessageContainerComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFindbarComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-findbar',
                templateUrl: './pdf-findbar.component.html',
                styleUrls: ['./pdf-findbar.component.css']
            }]
    }], null, { showFindButton: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
            type: Input
        }], findbarLeft: [{
            type: Input
        }], findbarTop: [{
            type: Input
        }], customFindbarInputArea: [{
            type: Input
        }], customFindbar: [{
            type: Input
        }], customFindbarButtons: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmRiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0k1RCw4QkFRQztJQUNDLDJCQUF1SDtJQUN2SCxpQkFBTTs7OztJQU5OLDRFQUE0RCxtQ0FBQSw0QkFBQSwwQkFBQTtJQUY1RCxtREFBbUM7SUFPckIsZUFBd0Y7SUFBeEYsa0dBQXdGOzs7SUFLeEcseUNBQTZGO0lBQzdGLG9EQUF1RTtJQUN2RSxvREFBdUU7SUFDdkUsc0RBQTJFO0lBQzNFLGdEQUErRDs7O0lBSjFDLHNFQUFpRDs7QURYeEUsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU9TLG1CQUFjLEdBQUcsSUFBSSxDQUFDO0tBb0I5Qjs7eUdBdEJZLG1CQUFtQjtxR0FBbkIsbUJBQW1CO1FDUGhDLDJCQUNlO1FBRWYsc0hBWWM7UUFFZCxxSEFNYzs7O1FBdkJBLDhFQUFtRTs7dUZET3BFLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDO2dCQUdRLGNBQWM7a0JBRHBCLEtBQUs7WUFJQyx1QkFBdUI7a0JBRDdCLEtBQUs7WUFJQyxXQUFXO2tCQURqQixLQUFLO1lBSUMsVUFBVTtrQkFEaEIsS0FBSztZQUtDLHNCQUFzQjtrQkFENUIsS0FBSztZQUlDLGFBQWE7a0JBRG5CLEtBQUs7WUFJQyxvQkFBb0I7a0JBRDFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZmluZGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1maW5kYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtZmluZGJhci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkZpbmRiYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGU6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZmluZGJhckxlZnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZmluZGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICAvKiBVSSB0ZW1wbGF0ZXMgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFySW5wdXRBcmVhOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyQnV0dG9uczogVGVtcGxhdGVSZWY8YW55PjtcclxufVxyXG4iLCI8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbUZpbmRiYXIgPyBjdXN0b21GaW5kYmFyIDogZGVmYXVsdEZpbmRiYXJcIj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRGaW5kYmFyPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiZmluZGJhciBoaWRkZW4gZG9vckhhbmdlclwiXHJcbiAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93RmluZEJ1dHRvblwiXHJcbiAgICBpZD1cImZpbmRiYXJcIlxyXG4gICAgW3N0eWxlLnRyYW5zZm9ybV09XCInc2NhbGUoJyArIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlICsgJyknXCJcclxuICAgIFtzdHlsZS50cmFuc2Zvcm1PcmlnaW5dPVwiJ2xlZnQgY2VudGVyJ1wiXHJcbiAgICBbc3R5bGUubGVmdF09XCJmaW5kYmFyTGVmdFwiXHJcbiAgICBbc3R5bGUudG9wXT1cImZpbmRiYXJUb3BcIlxyXG4gID5cclxuICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tRmluZGJhckJ1dHRvbnMgPyBjdXN0b21GaW5kYmFyQnV0dG9ucyA6IGRlZmF1bHRGaW5kYmFyQnV0dG9uc1wiPiA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0RmluZGJhckJ1dHRvbnM+XHJcbiAgPHBkZi1maW5kLWlucHV0LWFyZWEgW2N1c3RvbUZpbmRiYXJJbnB1dEFyZWFdPVwiY3VzdG9tRmluZGJhcklucHV0QXJlYVwiPjwvcGRmLWZpbmQtaW5wdXQtYXJlYT5cclxuICA8cGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyPjwvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyPlxyXG4gIDxwZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXI+PC9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXI+XHJcbiAgPHBkZi1maW5kYmFyLW9wdGlvbnMtdGhyZWUtY29udGFpbmVyPjwvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXI+XHJcbiAgPHBkZi1maW5kYmFyLW1lc3NhZ2UtY29udGFpbmVyPjwvcGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
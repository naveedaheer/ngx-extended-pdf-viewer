import { Component } from '@angular/core';
import { PdfFindbarService } from '../../pdf-findbar-service';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-findbar-service";
import * as i2 from "@angular/forms";
export class PdfFindMultipleSearchTextsComponent {
    constructor(pdfFindbarService) {
        this.pdfFindbarService = pdfFindbarService;
    }
    ngOnInit() { }
}
/** @nocollapse */ PdfFindMultipleSearchTextsComponent.ɵfac = function PdfFindMultipleSearchTextsComponent_Factory(t) { return new (t || PdfFindMultipleSearchTextsComponent)(i0.ɵɵdirectiveInject(i1.PdfFindbarService)); };
/** @nocollapse */ PdfFindMultipleSearchTextsComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFindMultipleSearchTextsComponent, selectors: [["pdf-find-entire-phrase"]], decls: 6, vars: 6, consts: [["type", "checkbox", "id", "findMultipleSearchTexts", 1, "toolbarField", 3, "ngModel", "ngModelChange"], ["for", "findMultipleSearchTexts", "data-l10n-id", "find_multiple_texts_label", 1, "toolbarLabel"], ["type", "checkbox", "id", "individualWordsMode", 1, "toolbarField", 3, "ngModel", "ngModelChange"], ["for", "individualWordsMode", "id", "individualWordsModeLabel", "data-l10n-id", "find_individual_words_label", 1, "toolbarLabel"]], template: function PdfFindMultipleSearchTextsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0);
        i0.ɵɵlistener("ngModelChange", function PdfFindMultipleSearchTextsComponent_Template_input_ngModelChange_0_listener($event) { return ctx.pdfFindbarService.multipleSearchTexts = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵtext(2, " multiple search texts\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 2);
        i0.ɵɵlistener("ngModelChange", function PdfFindMultipleSearchTextsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.pdfFindbarService.individualWordsMode = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "label", 3);
        i0.ɵɵtext(5, " separated by word boundaries\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngModel", ctx.pdfFindbarService.multipleSearchTexts);
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("hidden", !ctx.pdfFindbarService.multipleSearchTexts);
        i0.ɵɵproperty("ngModel", ctx.pdfFindbarService.individualWordsMode);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", !ctx.pdfFindbarService.multipleSearchTexts);
    } }, directives: [i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFindMultipleSearchTextsComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-find-entire-phrase',
                templateUrl: './pdf-find-entire-phrase.component.html',
                styleUrls: ['./pdf-find-entire-phrase.component.css']
            }]
    }], function () { return [{ type: i1.PdfFindbarService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS1waHJhc2UvcGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS1waHJhc2UvcGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBTzlELE1BQU0sT0FBTyxtQ0FBbUM7SUFFOUMsWUFBbUIsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBRTNELFFBQVEsS0FBSSxDQUFDOzt5SUFKRixtQ0FBbUM7cUhBQW5DLG1DQUFtQztRQ1JoRCxnQ0FLRTtRQURBLDJMQUFtRDtRQUpyRCxpQkFLRTtRQUVGLGdDQUcyQztRQUN6Qyx3Q0FDRjtRQUFBLGlCQUFRO1FBRVIsZ0NBS0U7UUFEQSwyTEFBbUQ7UUFKckQsaUJBS0U7UUFFRixnQ0FJNkM7UUFDM0MsK0NBQ0Y7UUFBQSxpQkFBUTs7UUF2Qk4sbUVBQW1EO1FBVTlDLGVBQXVEO1FBQXZELG9FQUF1RDtRQUk1RCxtRUFBbUQ7UUFHOUMsZUFBdUQ7UUFBdkQsb0VBQXVEOzt1RkRiakQsbUNBQW1DO2NBTC9DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQzthQUN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBkZkZpbmRiYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcGRmLWZpbmRiYXItc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1maW5kLWVudGlyZS1waHJhc2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtZmluZC1lbnRpcmUtcGhyYXNlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtZmluZC1lbnRpcmUtcGhyYXNlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmRmluZE11bHRpcGxlU2VhcmNoVGV4dHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGRmRmluZGJhclNlcnZpY2U6IFBkZkZpbmRiYXJTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiPGlucHV0XHJcbiAgdHlwZT1cImNoZWNrYm94XCJcclxuICBpZD1cImZpbmRNdWx0aXBsZVNlYXJjaFRleHRzXCJcclxuICBjbGFzcz1cInRvb2xiYXJGaWVsZFwiXHJcbiAgWyhuZ01vZGVsKV09XCJwZGZGaW5kYmFyU2VydmljZS5tdWx0aXBsZVNlYXJjaFRleHRzXCJcclxuLz5cclxuXHJcbjxsYWJlbFxyXG4gIGZvcj1cImZpbmRNdWx0aXBsZVNlYXJjaFRleHRzXCJcclxuICBjbGFzcz1cInRvb2xiYXJMYWJlbFwiXHJcbiAgZGF0YS1sMTBuLWlkPVwiZmluZF9tdWx0aXBsZV90ZXh0c19sYWJlbFwiPlxyXG4gIG11bHRpcGxlIHNlYXJjaCB0ZXh0c1xyXG48L2xhYmVsPlxyXG5cclxuPGlucHV0IFtjbGFzcy5oaWRkZW5dPVwiIXBkZkZpbmRiYXJTZXJ2aWNlLm11bHRpcGxlU2VhcmNoVGV4dHNcIlxyXG4gIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgaWQ9XCJpbmRpdmlkdWFsV29yZHNNb2RlXCJcclxuICBjbGFzcz1cInRvb2xiYXJGaWVsZFwiXHJcbiAgWyhuZ01vZGVsKV09XCJwZGZGaW5kYmFyU2VydmljZS5pbmRpdmlkdWFsV29yZHNNb2RlXCJcclxuLz5cclxuXHJcbjxsYWJlbCBbY2xhc3MuaGlkZGVuXT1cIiFwZGZGaW5kYmFyU2VydmljZS5tdWx0aXBsZVNlYXJjaFRleHRzXCJcclxuICBmb3I9XCJpbmRpdmlkdWFsV29yZHNNb2RlXCJcclxuICBpZD1cImluZGl2aWR1YWxXb3Jkc01vZGVMYWJlbFwiXHJcbiAgY2xhc3M9XCJ0b29sYmFyTGFiZWxcIlxyXG4gIGRhdGEtbDEwbi1pZD1cImZpbmRfaW5kaXZpZHVhbF93b3Jkc19sYWJlbFwiPlxyXG4gIHNlcGFyYXRlZCBieSB3b3JkIGJvdW5kYXJpZXNcclxuPC9sYWJlbD5cclxuIl19
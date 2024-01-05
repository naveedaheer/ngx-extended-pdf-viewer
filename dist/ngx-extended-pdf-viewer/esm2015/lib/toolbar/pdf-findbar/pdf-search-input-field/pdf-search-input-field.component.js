import { PdfFindbarService } from './../pdf-findbar-service';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../pdf-findbar-service";
export class PdfSearchInputFieldComponent {
    constructor(pdfFindbarService) {
        this.pdfFindbarService = pdfFindbarService;
    }
}
/** @nocollapse */ PdfSearchInputFieldComponent.ɵfac = function PdfSearchInputFieldComponent_Factory(t) { return new (t || PdfSearchInputFieldComponent)(i0.ɵɵdirectiveInject(i1.PdfFindbarService)); };
/** @nocollapse */ PdfSearchInputFieldComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSearchInputFieldComponent, selectors: [["pdf-search-input-field"]], decls: 2, vars: 5, consts: [["autocomplete", "search-input-field", "id", "findInput", "title", "Find", "data-l10n-id", "find_input", "name", "search-input-field", 1, "toolbarField", 3, "placeholder"], ["id", "findInputMultiline", "type", "checkbox", "placeholder", "Multiple search terms. Each line is a search term.", "data-l10n-id", "find_input_line_by_line", "lines", "3", 1, "toolbarField"]], template: function PdfSearchInputFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "input", 0);
        i0.ɵɵelement(1, "textarea", 1);
    } if (rf & 2) {
        i0.ɵɵclassProp("hidden", !ctx.pdfFindbarService.individualWordsMode);
        i0.ɵɵproperty("placeholder", "Find in document\u2026");
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", ctx.pdfFindbarService.individualWordsMode);
    } }, styles: ["textarea[_ngcontent-%COMP%]{width:200px;height:3.5em}textarea[_ngcontent-%COMP%]::-moz-placeholder{font-style:italic}textarea[_ngcontent-%COMP%]:-ms-input-placeholder{font-style:italic}textarea[_ngcontent-%COMP%]::placeholder{font-style:italic}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSearchInputFieldComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-search-input-field',
                templateUrl: './pdf-search-input-field.component.html',
                styleUrls: ['./pdf-search-input-field.component.css'],
            }]
    }], function () { return [{ type: i1.PdfFindbarService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLXNlYXJjaC1pbnB1dC1maWVsZC9wZGYtc2VhcmNoLWlucHV0LWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZGJhci9wZGYtc2VhcmNoLWlucHV0LWZpZWxkL3BkZi1zZWFyY2gtaW5wdXQtZmllbGQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBT2xELE1BQU0sT0FBTyw0QkFBNEI7SUFDdkMsWUFBbUIsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDOzsySEFEaEQsNEJBQTRCOzhHQUE1Qiw0QkFBNEI7UUNSekMsMkJBUUU7UUFDRiw4QkFRWTs7UUFqQkwsb0VBQXVEO1FBSzVELHNEQUFtQztRQUtuQyxlQUFzRDtRQUF0RCxtRUFBc0Q7O3VGREYzQyw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2FBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGRmRmluZGJhclNlcnZpY2UgfSBmcm9tICcuLy4uL3BkZi1maW5kYmFyLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtc2VhcmNoLWlucHV0LWZpZWxkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGRmRmluZGJhclNlcnZpY2U6IFBkZkZpbmRiYXJTZXJ2aWNlKSB7fVxyXG59XHJcbiIsIjxpbnB1dCBbY2xhc3MuaGlkZGVuXT1cIiFwZGZGaW5kYmFyU2VydmljZS5pbmRpdmlkdWFsV29yZHNNb2RlXCJcclxuICBhdXRvY29tcGxldGU9XCJzZWFyY2gtaW5wdXQtZmllbGRcIlxyXG4gIGlkPVwiZmluZElucHV0XCJcclxuICBjbGFzcz1cInRvb2xiYXJGaWVsZFwiXHJcbiAgdGl0bGU9XCJGaW5kXCJcclxuICBbcGxhY2Vob2xkZXJdPVwiJ0ZpbmQgaW4gZG9jdW1lbnTigKYnXCJcclxuICBkYXRhLWwxMG4taWQ9XCJmaW5kX2lucHV0XCJcclxuICBuYW1lPVwic2VhcmNoLWlucHV0LWZpZWxkXCJcclxuLz5cclxuPHRleHRhcmVhXHJcbiAgW2NsYXNzLmhpZGRlbl09XCJwZGZGaW5kYmFyU2VydmljZS5pbmRpdmlkdWFsV29yZHNNb2RlXCJcclxuICBpZD1cImZpbmRJbnB1dE11bHRpbGluZVwiXHJcbiAgdHlwZT1cImNoZWNrYm94XCJcclxuICBjbGFzcz1cInRvb2xiYXJGaWVsZFwiXHJcbiAgcGxhY2Vob2xkZXI9XCJNdWx0aXBsZSBzZWFyY2ggdGVybXMuIEVhY2ggbGluZSBpcyBhIHNlYXJjaCB0ZXJtLlwiXHJcbiAgZGF0YS1sMTBuLWlkPVwiZmluZF9pbnB1dF9saW5lX2J5X2xpbmVcIlxyXG4gIGxpbmVzPVwiM1wiXHJcbj48L3RleHRhcmVhPlxyXG4iXX0=
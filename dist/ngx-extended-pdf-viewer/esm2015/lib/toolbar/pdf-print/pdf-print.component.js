import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfPrintComponent {
    constructor() {
        this.showPrintButton = true;
    }
}
/** @nocollapse */ PdfPrintComponent.ɵfac = function PdfPrintComponent_Factory(t) { return new (t || PdfPrintComponent)(); };
/** @nocollapse */ PdfPrintComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPrintComponent, selectors: [["pdf-print"]], inputs: { showPrintButton: "showPrintButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "print", "title", "Print", "data-l10n-id", "print", 1, "toolbarButton", "hiddenSmallView"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"], ["data-l10n-id", "print_label"]], template: function PdfPrintComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Print");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showPrintButton);
    } }, styles: ["[_nghost-%COMP%]{margin-top:-1px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPrintComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-print',
                templateUrl: './pdf-print.component.html',
                styleUrls: ['./pdf-print.component.css']
            }]
    }], null, { showPrintButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXByaW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcHJpbnQvcGRmLXByaW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcHJpbnQvcGRmLXByaW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8saUJBQWlCO0lBTDlCO1FBT1Msb0JBQWUsR0FBRyxJQUFJLENBQUM7S0FDL0I7O3FHQUhZLGlCQUFpQjttR0FBakIsaUJBQWlCO1FDUDlCLGlDQU1LO1FBQ0QsbUJBQXdEO1FBQXhELDhCQUF3RDtRQUNwRCwwQkFBMkw7UUFDL0wsaUJBQU07UUFDTixvQkFBaUM7UUFBakMsK0JBQWlDO1FBQUEscUJBQUs7UUFBQSxpQkFBTztRQUNqRCxpQkFBUzs7UUFWTCxpREFBb0M7O3VGRE0zQixpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6QztnQkFHUSxlQUFlO2tCQURyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtcHJpbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtcHJpbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1wcmludC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlByaW50Q29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJpbnRCdXR0b24gPSB0cnVlO1xyXG59XHJcbiIsIjxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93UHJpbnRCdXR0b25cIlxyXG4gICAgaWQ9XCJwcmludFwiXHJcbiAgICBjbGFzcz1cInRvb2xiYXJCdXR0b24gaGlkZGVuU21hbGxWaWV3XCJcclxuICAgIHRpdGxlPVwiUHJpbnRcIlxyXG4gICAgZGF0YS1sMTBuLWlkPVwicHJpbnRcIlxyXG4gICAgPlxyXG4gICAgPHN2ZyBzdHlsZT1cIndpZHRoOjIycHg7aGVpZ2h0OjIycHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTgsM0g2VjdIMThNMTksMTJBMSwxIDAgMCwxIDE4LDExQTEsMSAwIDAsMSAxOSwxMEExLDEgMCAwLDEgMjAsMTFBMSwxIDAgMCwxIDE5LDEyTTE2LDE5SDhWMTRIMTZNMTksOEg1QTMsMyAwIDAsMCAyLDExVjE3SDZWMjFIMThWMTdIMjJWMTFBMywzIDAgMCwwIDE5LDhaXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwicHJpbnRfbGFiZWxcIj5QcmludDwvc3Bhbj5cclxuPC9idXR0b24+XHJcbiJdfQ==
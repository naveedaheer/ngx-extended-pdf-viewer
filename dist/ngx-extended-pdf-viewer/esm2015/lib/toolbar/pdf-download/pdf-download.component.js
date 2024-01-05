import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfDownloadComponent {
    constructor() {
        this.showDownloadButton = true;
    }
}
/** @nocollapse */ PdfDownloadComponent.ɵfac = function PdfDownloadComponent_Factory(t) { return new (t || PdfDownloadComponent)(); };
/** @nocollapse */ PdfDownloadComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfDownloadComponent, selectors: [["pdf-download"]], inputs: { showDownloadButton: "showDownloadButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "download", "title", "Download", "data-l10n-id", "download", 1, "toolbarButton", "hiddenSmallView"], ["viewBox", "0 0 24 24", 2, "width", "20px", "height", "20px"], ["fill", "currentColor", "d", "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z"], ["data-l10n-id", "download_label"]], template: function PdfDownloadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Download");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showDownloadButton);
    } }, styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfDownloadComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-download',
                templateUrl: './pdf-download.component.html',
                styleUrls: ['./pdf-download.component.css']
            }]
    }], null, { showDownloadButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWRvd25sb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBT1MsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO0tBQ2xDOzsyR0FIWSxvQkFBb0I7c0dBQXBCLG9CQUFvQjtRQ1BqQyxpQ0FPQztRQUNDLG1CQUF3RDtRQUF4RCw4QkFBd0Q7UUFDdEQsMEJBQTRKO1FBQzlKLGlCQUFNO1FBQ04sb0JBQW9DO1FBQXBDLCtCQUFvQztRQUFBLHdCQUFRO1FBQUEsaUJBQU87UUFDckQsaUJBQVM7O1FBUlAsb0RBQXVDOzt1RkRHNUIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Z0JBR1Esa0JBQWtCO2tCQUR4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZG93bmxvYWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtZG93bmxvYWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1kb3dubG9hZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkRvd25sb2FkQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RG93bmxvYWRCdXR0b24gPSB0cnVlO1xyXG59XHJcbiIsIjxidXR0b25cclxuICB0eXBlPVwiYnV0dG9uXCJcclxuICBpZD1cImRvd25sb2FkXCJcclxuICBjbGFzcz1cInRvb2xiYXJCdXR0b24gaGlkZGVuU21hbGxWaWV3XCJcclxuICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93RG93bmxvYWRCdXR0b25cIlxyXG4gIHRpdGxlPVwiRG93bmxvYWRcIlxyXG4gIGRhdGEtbDEwbi1pZD1cImRvd25sb2FkXCJcclxuPlxyXG4gIDxzdmcgc3R5bGU9XCJ3aWR0aDoyMHB4O2hlaWdodDoyMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQsMkwyMCw4VjIwQTIsMiAwIDAsMSAxOCwyMkg2QTIsMiAwIDAsMSA0LDIwVjRBMiwyIDAgMCwxIDYsMkgxNE0xOCwyMFY5SDEzVjRINlYyMEgxOE0xMiwxOUw4LDE1SDEwLjVWMTJIMTMuNVYxNUgxNkwxMiwxOVpcIiAvPlxyXG4gIDwvc3ZnPlxyXG4gIDxzcGFuIGRhdGEtbDEwbi1pZD1cImRvd25sb2FkX2xhYmVsXCI+RG93bmxvYWQ8L3NwYW4+XHJcbjwvYnV0dG9uPlxyXG4iXX0=
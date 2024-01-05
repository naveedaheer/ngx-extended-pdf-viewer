import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfToggleSidebarComponent {
    constructor() {
        this.showSidebarButton = true;
    }
    ngOnInit() { }
}
/** @nocollapse */ PdfToggleSidebarComponent.ɵfac = function PdfToggleSidebarComponent_Factory(t) { return new (t || PdfToggleSidebarComponent)(); };
/** @nocollapse */ PdfToggleSidebarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfToggleSidebarComponent, selectors: [["pdf-toggle-sidebar"]], inputs: { showSidebarButton: "showSidebarButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "sidebarToggle", "title", "Toggle Sidebar", "data-l10n-id", "toggle_sidebar", 1, "toolbarButton"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z"], ["data-l10n-id", "toggle_sidebar_label"]], template: function PdfToggleSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Toggle Sidebar");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showSidebarButton);
    } }, styles: ["button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-top:-2px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfToggleSidebarComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-toggle-sidebar',
                templateUrl: './pdf-toggle-sidebar.component.html',
                styleUrls: ['./pdf-toggle-sidebar.component.css']
            }]
    }], function () { return []; }, { showSidebarButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9nZ2xlLXNpZGViYXIvcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9nZ2xlLXNpZGViYXIvcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU96RCxNQUFNLE9BQU8seUJBQXlCO0lBSXBDO1FBRk8sc0JBQWlCLEdBQUcsSUFBSSxDQUFDO0lBRWpCLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7O3FIQU5GLHlCQUF5QjsyR0FBekIseUJBQXlCO1FDUHRDLGlDQU9DO1FBQ0MsbUJBQXdEO1FBQXhELDhCQUF3RDtRQUN0RCwwQkFBa0k7UUFDcEksaUJBQU07UUFDTixvQkFBMEM7UUFBMUMsK0JBQTBDO1FBQUEsOEJBQWM7UUFBQSxpQkFBTztRQUNqRSxpQkFBUzs7UUFWUCxtREFBc0M7O3VGREszQix5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEO3NDQUdRLGlCQUFpQjtrQkFEdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtdG9nZ2xlLXNpZGViYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtdG9nZ2xlLXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi10b2dnbGUtc2lkZWJhci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTaWRlYmFyQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gIHR5cGU9XCJidXR0b25cIlxyXG4gIFtjbGFzcy5pbnZpc2libGVdPVwiIXNob3dTaWRlYmFyQnV0dG9uXCJcclxuICBpZD1cInNpZGViYXJUb2dnbGVcIlxyXG4gIHRpdGxlPVwiVG9nZ2xlIFNpZGViYXJcIlxyXG4gIGNsYXNzPVwidG9vbGJhckJ1dHRvblwiXHJcbiAgZGF0YS1sMTBuLWlkPVwidG9nZ2xlX3NpZGViYXJcIlxyXG4+XHJcbiAgPHN2ZyBzdHlsZT1cIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zLDlIMTdWN0gzVjlNMywxM0gxN1YxMUgzVjEzTTMsMTdIMTdWMTVIM1YxN00xOSwxN0gyMVYxNUgxOVYxN00xOSw3VjlIMjFWN0gxOU0xOSwxM0gyMVYxMUgxOVYxM1pcIiAvPlxyXG4gIDwvc3ZnPlxyXG4gIDxzcGFuIGRhdGEtbDEwbi1pZD1cInRvZ2dsZV9zaWRlYmFyX2xhYmVsXCI+VG9nZ2xlIFNpZGViYXI8L3NwYW4+XHJcbjwvYnV0dG9uPlxyXG4iXX0=
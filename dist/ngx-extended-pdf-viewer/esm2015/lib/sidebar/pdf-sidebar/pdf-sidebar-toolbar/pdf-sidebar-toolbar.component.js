import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfSidebarToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
/** @nocollapse */ PdfSidebarToolbarComponent.ɵfac = function PdfSidebarToolbarComponent_Factory(t) { return new (t || PdfSidebarToolbarComponent)(); };
/** @nocollapse */ PdfSidebarToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSidebarToolbarComponent, selectors: [["pdf-sidebar-toolbar"]], decls: 31, vars: 0, consts: [["id", "toolbarSidebar"], ["id", "toolbarSidebarLeft"], ["type", "button", "id", "viewThumbnail", "title", "Show Thumbnails", "data-l10n-id", "thumbs", 1, "toolbarButton", "toggled"], ["data-l10n-id", "thumbs_label"], ["viewBox", "0 0 24 24", 2, "width", "20px", "height", "20px"], ["fill", "currentColor", "d", "M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"], ["type", "button", "id", "viewOutline", "title", "Show Document Outline (double-click to expand/collapse all items)", "data-l10n-id", "document_outline", "hidden", "true", 1, "toolbarButton"], ["data-l10n-id", "document_outline_label"], ["fill", "currentColor", "d", "M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z"], ["type", "button", "id", "viewAttachments", "title", "Show Attachments", "data-l10n-id", "attachments", "hidden", "true", 1, "toolbarButton"], ["data-l10n-id", "attachments_label"], ["fill", "currentColor", "d", "M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z"], ["id", "viewLayers", "title", "Show Layers (double-click to reset all layers to the default state)", "data-l10n-id", "layers", "hidden", "true", 1, "toolbarButton"], ["data-l10n-id", "layers_label"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 4.233 4.233", 2, "width", "20px", "height", "20px"], ["d", "M.15 2.992c-.198.1-.2.266-.002.365l1.604.802a.93.93 0 00.729-.001l1.602-.801c.198-.1.197-.264 0-.364l-.695-.348c-1.306.595-2.542 0-2.542 0m-.264.53l.658-.329c.6.252 1.238.244 1.754 0l.659.329-1.536.768zM.15 1.935c-.198.1-.198.265 0 .364l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363l-.694-.35c-1.14.56-2.546.001-2.546.001m-.264.53l.664-.332c.52.266 1.261.235 1.75.002l.659.33-1.537.768zM.15.877c-.198.099-.198.264 0 .363l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363L2.481.075a.926.926 0 00-.727 0zm.43.182L2.117.29l1.538.769-1.538.768z"], ["id", "toolbarSidebarRight"], ["id", "outlineOptionsContainer", 1, "hidden"], [1, "verticalToolbarSeparator"], ["id", "currentOutlineItem", "disabled", "disabled", "title", "Find Current Outline Item", "tabindex", "6", "data-l10n-id", "current_outline_item", 1, "toolbarButton"], ["data-l10n-id", "current_outline_item_label"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", 2, "width", "20px", "height", "20px"], ["d", "m14 9h-6c-1.3 0-1.3 2 0 2h6c1.3 0 1.3-2 0-2zm-5.2-8h-3.8c-1.3 0-1.3 2 0 2h1.7zm-6.8 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.3 1.7-0.7 0-0.5-0.4-1-1-1zm3 8c-1 0-1.3 1-0.7 1.7 0.6 0.6 1.7 0.2 1.7-0.7 0-0.5-0.4-1-1-1zm0.3-4h-0.3c-1.4 0-1.4 2 0 2h2.3zm-3.3 0c-0.9 0-1.4 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.7 0-0.6-0.5-1-1-1zm12 8h-9c-1.3 0-1.3 2 0 2h9c1.3 0 1.3-2 0-2zm-12 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.712 0-0.5-0.4-1-1-1z"], ["d", "m7.37 4.838 3.93-3.911v2.138h3.629v3.546h-3.629v2.138l-3.93-3.911"]], template: function PdfSidebarToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Thumbnails");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(5, "svg", 4);
        i0.ɵɵelement(6, "path", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(7, "button", 6);
        i0.ɵɵelementStart(8, "span", 7);
        i0.ɵɵtext(9, "Document Outline");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(10, "svg", 4);
        i0.ɵɵelement(11, "path", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(12, "button", 9);
        i0.ɵɵelementStart(13, "span", 10);
        i0.ɵɵtext(14, "Attachments");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(15, "svg", 4);
        i0.ɵɵelement(16, "path", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(17, "button", 12);
        i0.ɵɵelementStart(18, "span", 13);
        i0.ɵɵtext(19, "Layers");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(20, "svg", 14);
        i0.ɵɵelement(21, "path", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(22, "div", 16);
        i0.ɵɵelementStart(23, "div", 17);
        i0.ɵɵelement(24, "div", 18);
        i0.ɵɵelementStart(25, "button", 19);
        i0.ɵɵelementStart(26, "span", 20);
        i0.ɵɵtext(27, "Current Outline Item");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(28, "svg", 21);
        i0.ɵɵelement(29, "path", 22);
        i0.ɵɵelement(30, "path", 23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, styles: ["button[_ngcontent-%COMP%]{margin-right:4px!important}div#toolbarSidebar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-child{margin-left:4px!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSidebarToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-sidebar-toolbar',
                templateUrl: './pdf-sidebar-toolbar.component.html',
                styleUrls: ['./pdf-sidebar-toolbar.component.css']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXItdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItdG9vbGJhci9wZGYtc2lkZWJhci10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci10b29sYmFyL3BkZi1zaWRlYmFyLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFPbEQsTUFBTSxPQUFPLDBCQUEwQjtJQUVyQyxnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7dUhBTFUsMEJBQTBCOzRHQUExQiwwQkFBMEI7UUNQdkMsOEJBQXlCO1FBQ3ZCLDhCQUE2QjtRQUMzQixpQ0FBcUg7UUFDbkgsK0JBQWtDO1FBQUEsMEJBQVU7UUFBQSxpQkFBTztRQUNuRCxtQkFBMkQ7UUFBM0QsOEJBQTJEO1FBQ3pELDBCQUdFO1FBQ0osaUJBQU07UUFDUixpQkFBUztRQUVULG9CQU9DO1FBUEQsaUNBT0M7UUFDQywrQkFBNEM7UUFBQSxnQ0FBZ0I7UUFBQSxpQkFBTztRQUNuRSxtQkFBMkQ7UUFBM0QsK0JBQTJEO1FBQ3pELDJCQUFrSTtRQUNwSSxpQkFBTTtRQUNSLGlCQUFTO1FBRVQsb0JBQW1JO1FBQW5JLGtDQUFtSTtRQUNqSSxpQ0FBdUM7UUFBQSw0QkFBVztRQUFBLGlCQUFPO1FBQ3pELG1CQUEyRDtRQUEzRCwrQkFBMkQ7UUFDekQsNEJBR0U7UUFDSixpQkFBTTtRQUNSLGlCQUFTO1FBQ1Qsb0JBTUM7UUFORCxtQ0FNQztRQUNDLGlDQUFrQztRQUFBLHVCQUFNO1FBQUEsaUJBQU87UUFDL0MsbUJBQXdIO1FBQXhILGdDQUF3SDtRQUN0SCw0QkFFRTtRQUNKLGlCQUFNO1FBQ1IsaUJBQVM7UUFDWCxpQkFBTTtRQUVOLG9CQUE4QjtRQUE5QixnQ0FBOEI7UUFDNUIsZ0NBQWlEO1FBQy9DLDJCQUE0QztRQUU1QyxtQ0FPQztRQUNDLGlDQUFnRDtRQUFBLHFDQUFvQjtRQUFBLGlCQUFPO1FBQzNFLG1CQUE4RjtRQUE5RixnQ0FBOEY7UUFDNUYsNEJBQW1iO1FBQUEsNEJBQTZFO1FBQ2xnQixpQkFBTTtRQUNSLGlCQUFTO1FBQ1gsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOzt1RkQvRE8sMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1zaWRlYmFyLXRvb2xiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtc2lkZWJhci10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtc2lkZWJhci10b29sYmFyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmU2lkZWJhclRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgaWQ9XCJ0b29sYmFyU2lkZWJhclwiPlxyXG4gIDxkaXYgaWQ9XCJ0b29sYmFyU2lkZWJhckxlZnRcIj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwidmlld1RodW1ibmFpbFwiIGNsYXNzPVwidG9vbGJhckJ1dHRvbiB0b2dnbGVkXCIgdGl0bGU9XCJTaG93IFRodW1ibmFpbHNcIiBkYXRhLWwxMG4taWQ9XCJ0aHVtYnNcIj5cclxuICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwidGh1bWJzX2xhYmVsXCI+VGh1bWJuYWlsczwvc3Bhbj5cclxuICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgZD1cIk0xOSwxOUg1VjVIMTlNMTksM0g1QTIsMiAwIDAsMCAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjVBMiwyIDAgMCwwIDE5LDNNMTMuOTYsMTIuMjlMMTEuMjEsMTUuODNMOS4yNSwxMy40N0w2LjUsMTdIMTcuNUwxMy45NiwxMi4yOVpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgaWQ9XCJ2aWV3T3V0bGluZVwiXHJcbiAgICAgIGNsYXNzPVwidG9vbGJhckJ1dHRvblwiXHJcbiAgICAgIHRpdGxlPVwiU2hvdyBEb2N1bWVudCBPdXRsaW5lIChkb3VibGUtY2xpY2sgdG8gZXhwYW5kL2NvbGxhcHNlIGFsbCBpdGVtcylcIlxyXG4gICAgICBkYXRhLWwxMG4taWQ9XCJkb2N1bWVudF9vdXRsaW5lXCJcclxuICAgICAgaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cImRvY3VtZW50X291dGxpbmVfbGFiZWxcIj5Eb2N1bWVudCBPdXRsaW5lPC9zcGFuPlxyXG4gICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6IDIwcHg7IGhlaWdodDogMjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zLDlIMTdWN0gzVjlNMywxM0gxN1YxMUgzVjEzTTMsMTdIMTdWMTVIM1YxN00xOSwxN0gyMVYxNUgxOVYxN00xOSw3VjlIMjFWN0gxOU0xOSwxM0gyMVYxMUgxOVYxM1pcIiAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwidmlld0F0dGFjaG1lbnRzXCIgY2xhc3M9XCJ0b29sYmFyQnV0dG9uXCIgdGl0bGU9XCJTaG93IEF0dGFjaG1lbnRzXCIgZGF0YS1sMTBuLWlkPVwiYXR0YWNobWVudHNcIiBoaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cImF0dGFjaG1lbnRzX2xhYmVsXCI+QXR0YWNobWVudHM8L3NwYW4+XHJcbiAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgIGQ9XCJNMTYuNSw2VjE3LjVBNCw0IDAgMCwxIDEyLjUsMjEuNUE0LDQgMCAwLDEgOC41LDE3LjVWNUEyLjUsMi41IDAgMCwxIDExLDIuNUEyLjUsMi41IDAgMCwxIDEzLjUsNVYxNS41QTEsMSAwIDAsMSAxMi41LDE2LjVBMSwxIDAgMCwxIDExLjUsMTUuNVY2SDEwVjE1LjVBMi41LDIuNSAwIDAsMCAxMi41LDE4QTIuNSwyLjUgMCAwLDAgMTUsMTUuNVY1QTQsNCAwIDAsMCAxMSwxQTQsNCAwIDAsMCA3LDVWMTcuNUE1LjUsNS41IDAgMCwwIDEyLjUsMjNBNS41LDUuNSAwIDAsMCAxOCwxNy41VjZIMTYuNVpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGlkPVwidmlld0xheWVyc1wiXHJcbiAgICAgIGNsYXNzPVwidG9vbGJhckJ1dHRvblwiXHJcbiAgICAgIHRpdGxlPVwiU2hvdyBMYXllcnMgKGRvdWJsZS1jbGljayB0byByZXNldCBhbGwgbGF5ZXJzIHRvIHRoZSBkZWZhdWx0IHN0YXRlKVwiXHJcbiAgICAgIGRhdGEtbDEwbi1pZD1cImxheWVyc1wiXHJcbiAgICAgIGhpZGRlbj1cInRydWVcIlxyXG4gICAgPlxyXG4gICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJsYXllcnNfbGFiZWxcIj5MYXllcnM8L3NwYW4+XHJcbiAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDQuMjMzIDQuMjMzXCI+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNLjE1IDIuOTkyYy0uMTk4LjEtLjIuMjY2LS4wMDIuMzY1bDEuNjA0LjgwMmEuOTMuOTMgMCAwMC43MjktLjAwMWwxLjYwMi0uODAxYy4xOTgtLjEuMTk3LS4yNjQgMC0uMzY0bC0uNjk1LS4zNDhjLTEuMzA2LjU5NS0yLjU0MiAwLTIuNTQyIDBtLS4yNjQuNTNsLjY1OC0uMzI5Yy42LjI1MiAxLjIzOC4yNDQgMS43NTQgMGwuNjU5LjMyOS0xLjUzNi43Njh6TS4xNSAxLjkzNWMtLjE5OC4xLS4xOTguMjY1IDAgLjM2NGwxLjYwNC44MDJhLjkyNi45MjYgMCAwMC43MjcgMGwxLjYwMy0uODAyYy4xOTgtLjA5OS4xOTgtLjI2NCAwLS4zNjNsLS42OTQtLjM1Yy0xLjE0LjU2LTIuNTQ2LjAwMS0yLjU0Ni4wMDFtLS4yNjQuNTNsLjY2NC0uMzMyYy41Mi4yNjYgMS4yNjEuMjM1IDEuNzUuMDAybC42NTkuMzMtMS41MzcuNzY4ek0uMTUuODc3Yy0uMTk4LjA5OS0uMTk4LjI2NCAwIC4zNjNsMS42MDQuODAyYS45MjYuOTI2IDAgMDAuNzI3IDBsMS42MDMtLjgwMmMuMTk4LS4wOTkuMTk4LS4yNjQgMC0uMzYzTDIuNDgxLjA3NWEuOTI2LjkyNiAwIDAwLS43MjcgMHptLjQzLjE4MkwyLjExNy4yOWwxLjUzOC43NjktMS41MzguNzY4elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBpZD1cInRvb2xiYXJTaWRlYmFyUmlnaHRcIj5cclxuICAgIDxkaXYgaWQ9XCJvdXRsaW5lT3B0aW9uc0NvbnRhaW5lclwiIGNsYXNzPVwiaGlkZGVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ2ZXJ0aWNhbFRvb2xiYXJTZXBhcmF0b3JcIj48L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBpZD1cImN1cnJlbnRPdXRsaW5lSXRlbVwiXHJcbiAgICAgICAgY2xhc3M9XCJ0b29sYmFyQnV0dG9uXCJcclxuICAgICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuICAgICAgICB0aXRsZT1cIkZpbmQgQ3VycmVudCBPdXRsaW5lIEl0ZW1cIlxyXG4gICAgICAgIHRhYmluZGV4PVwiNlwiXHJcbiAgICAgICAgZGF0YS1sMTBuLWlkPVwiY3VycmVudF9vdXRsaW5lX2l0ZW1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwiY3VycmVudF9vdXRsaW5lX2l0ZW1fbGFiZWxcIj5DdXJyZW50IE91dGxpbmUgSXRlbTwvc3Bhbj5cclxuICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6IDIwcHg7IGhlaWdodDogMjBweFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwibTE0IDloLTZjLTEuMyAwLTEuMyAyIDAgMmg2YzEuMyAwIDEuMy0yIDAtMnptLTUuMi04aC0zLjhjLTEuMyAwLTEuMyAyIDAgMmgxLjd6bS02LjggMGMtMSAwLTEuMyAxLTAuNyAxLjcgMC43IDAuNiAxLjcgMC4zIDEuNy0wLjcgMC0wLjUtMC40LTEtMS0xem0zIDhjLTEgMC0xLjMgMS0wLjcgMS43IDAuNiAwLjYgMS43IDAuMiAxLjctMC43IDAtMC41LTAuNC0xLTEtMXptMC4zLTRoLTAuM2MtMS40IDAtMS40IDIgMCAyaDIuM3ptLTMuMyAwYy0wLjkgMC0xLjQgMS0wLjcgMS43IDAuNyAwLjYgMS43IDAuMiAxLjctMC43IDAtMC42LTAuNS0xLTEtMXptMTIgOGgtOWMtMS4zIDAtMS4zIDIgMCAyaDljMS4zIDAgMS4zLTIgMC0yem0tMTIgMGMtMSAwLTEuMyAxLTAuNyAxLjcgMC43IDAuNiAxLjcgMC4yIDEuNy0wLjcxMiAwLTAuNS0wLjQtMS0xLTF6XCIvPjxwYXRoIGQ9XCJtNy4zNyA0LjgzOCAzLjkzLTMuOTExdjIuMTM4aDMuNjI5djMuNTQ2aC0zLjYyOXYyLjEzOGwtMy45My0zLjkxMVwiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-zoom-out/pdf-zoom-out.component";
import * as i2 from "./pdf-zoom-in/pdf-zoom-in.component";
import * as i3 from "./pdf-zoom-dropdown/pdf-zoom-dropdown.component";
export class PdfZoomToolbarComponent {
    constructor() {
        this.showZoomButtons = true;
        this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
    }
}
/** @nocollapse */ PdfZoomToolbarComponent.ɵfac = function PdfZoomToolbarComponent_Factory(t) { return new (t || PdfZoomToolbarComponent)(); };
/** @nocollapse */ PdfZoomToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfZoomToolbarComponent, selectors: [["pdf-zoom-toolbar"]], inputs: { showZoomButtons: "showZoomButtons", zoomLevels: "zoomLevels" }, decls: 4, vars: 3, consts: [["id", "toolbarViewerMiddle"], [2, "width", "unset", "max-width", "unset", "padding-top", "3px", 3, "zoomLevels"]], template: function PdfZoomToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "pdf-zoom-out");
        i0.ɵɵelement(2, "pdf-zoom-in");
        i0.ɵɵelement(3, "pdf-zoom-dropdown", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showZoomButtons);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("zoomLevels", ctx.zoomLevels);
    } }, directives: [i1.PdfZoomOutComponent, i2.PdfZoomInComponent, i3.PdfZoomDropdownComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfZoomToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-zoom-toolbar',
                templateUrl: './pdf-zoom-toolbar.component.html',
                styleUrls: ['./pdf-zoom-toolbar.component.css']
            }]
    }], null, { showZoomButtons: [{
            type: Input
        }], zoomLevels: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDOzs7OztBQU8vRSxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBUVMsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFHdkIsZUFBVSxHQUFHLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN6Rzs7aUhBUFksdUJBQXVCO3lHQUF2Qix1QkFBdUI7UUNQcEMsOEJBQW1FO1FBQ2pFLCtCQUE2QjtRQUM3Qiw4QkFBMkI7UUFDM0IsdUNBRW9CO1FBQ3RCLGlCQUFNOztRQU5ELGlEQUFvQztRQUlvQixlQUF5QjtRQUF6QiwyQ0FBeUI7O3VGREd6RSx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEO2dCQUlRLGVBQWU7a0JBRHJCLEtBQUs7WUFJQyxVQUFVO2tCQURoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtem9vbS10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXpvb20tdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXpvb20tdG9vbGJhci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlpvb21Ub29sYmFyQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1pvb21CdXR0b25zID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgem9vbUxldmVscyA9IFsnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgMC41LCAwLjc1LCAxLCAxLjI1LCAxLjUsIDIsIDMsIDRdO1xyXG59XHJcbiIsIjxkaXYgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1pvb21CdXR0b25zXCIgaWQ9XCJ0b29sYmFyVmlld2VyTWlkZGxlXCI+XHJcbiAgPHBkZi16b29tLW91dD48L3BkZi16b29tLW91dD5cclxuICA8cGRmLXpvb20taW4+PC9wZGYtem9vbS1pbj5cclxuICA8cGRmLXpvb20tZHJvcGRvd25cclxuICAgICAgc3R5bGU9XCJ3aWR0aDogdW5zZXQ7IG1heC13aWR0aDogdW5zZXQ7cGFkZGluZy10b3A6M3B4XCIgW3pvb21MZXZlbHNdPVwiem9vbUxldmVsc1wiPlxyXG4gIDwvcGRmLXpvb20tZHJvcGRvd24+XHJcbjwvZGl2PlxyXG4iXX0=
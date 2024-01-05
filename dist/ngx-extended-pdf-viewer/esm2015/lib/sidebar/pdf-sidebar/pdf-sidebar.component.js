import { Component, Input, TemplateRef, ElementRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pdf-sidebar-toolbar/pdf-sidebar-toolbar.component";
import * as i3 from "./pdf-sidebar-content/pdf-sidebar-content.component";
function PdfSidebarComponent_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customSidebar ? customSidebar : defaultSidebar"]);
} }
function PdfSidebarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "pdf-sidebar-toolbar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "pdf-sidebar-content", 4);
    i0.ɵɵlistener("thumbnailDrawn", function PdfSidebarComponent_ng_template_2_Template_pdf_sidebar_content_thumbnailDrawn_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.thumbnailDrawn.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("top", ctx_r2.sidebarPositionTop);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("display", ctx_r2.hideSidebarToolbar ? "none" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("customThumbnail", ctx_r2.customThumbnail)("hideSidebarToolbar", ctx_r2.hideSidebarToolbar);
} }
const _c0 = ["*"];
export class PdfSidebarComponent {
    constructor(elementRef, ref) {
        this.elementRef = elementRef;
        this.ref = ref;
        this.sidebarVisible = true;
        this.showSidebarButton = true;
        this.thumbnailDrawn = new EventEmitter();
        this.hideSidebarToolbar = true;
    }
    showToolbarWhenNecessary() {
        const element = this.elementRef.nativeElement;
        const buttons = element.querySelectorAll('button');
        let visible = 0;
        for (let index = 0; index < buttons.length; index++) {
            const b = buttons.item(index);
            if (!b.hidden) {
                visible++;
            }
        }
        this.hideSidebarToolbar = visible <= 1;
        this.ref.markForCheck();
    }
}
/** @nocollapse */ PdfSidebarComponent.ɵfac = function PdfSidebarComponent_Factory(t) { return new (t || PdfSidebarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ PdfSidebarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSidebarComponent, selectors: [["pdf-sidebar"]], inputs: { sidebarPositionTop: "sidebarPositionTop", sidebarVisible: "sidebarVisible", showSidebarButton: "showSidebarButton", customSidebar: "customSidebar", customThumbnail: "customThumbnail" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[4, "ngTemplateOutlet"], ["defaultSidebar", ""], ["id", "sidebarContainer"], ["id", "additionalSidebarContainer"], [3, "customThumbnail", "hideSidebarToolbar", "thumbnailDrawn"], ["id", "sidebarResizer", 1, "hidden"]], template: function PdfSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, PdfSidebarComponent_ng_content_1_Template, 1, 0, "ng-content", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PdfSidebarComponent_ng_template_2_Template, 5, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customSidebar ? ctx.customSidebar : _r1);
    } }, directives: [i1.NgTemplateOutlet, i2.PdfSidebarToolbarComponent, i3.PdfSidebarContentComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSidebarComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-sidebar',
                templateUrl: './pdf-sidebar.component.html',
                styleUrls: ['./pdf-sidebar.component.css'],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { sidebarPositionTop: [{
            type: Input
        }], sidebarVisible: [{
            type: Input
        }], showSidebarButton: [{
            type: Input
        }], customSidebar: [{
            type: Input
        }], customThumbnail: [{
            type: Input
        }], thumbnailDrawn: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQThDLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE2QixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDQ3hMLDhGQUE0Rjs7OztJQUk1Riw4QkFBNEQ7SUFDMUQsOEJBQXdGO0lBQ3RGLHNDQUEyQztJQUM3QyxpQkFBTTtJQUNOLDhDQUlDO0lBRkMsNk1BQWtCLGtDQUEyQixJQUFDO0lBRS9DLGlCQUFzQjtJQUN2Qix5QkFBOEM7SUFDaEQsaUJBQU07OztJQVZxQixnREFBZ0M7SUFDcEIsZUFBa0Q7SUFBbEQsa0VBQWtEO0lBSXJGLGVBQW1DO0lBQW5DLHdEQUFtQyxpREFBQTs7O0FERnpDLE1BQU0sT0FBTyxtQkFBbUI7SUFxQjlCLFlBQW9CLFVBQXNCLEVBQVUsR0FBc0I7UUFBdEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBaEJuRSxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUd0QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFTekIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUU1RCx1QkFBa0IsR0FBRyxJQUFJLENBQUM7SUFFNEMsQ0FBQztJQUV2RSx3QkFBd0I7UUFDN0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUE0QixDQUFDO1FBQzdELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDbkQsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7O3lHQW5DVSxtQkFBbUI7cUdBQW5CLG1CQUFtQjs7UUNSaEMsMkJBQUs7UUFDSCxrRkFBNEY7UUFDOUYsaUJBQU07UUFFTixxSEFZYzs7O1FBZkMsZUFBZ0U7UUFBaEUsOEVBQWdFOzt1RkRPbEUsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7NkZBR1Esa0JBQWtCO2tCQUR4QixLQUFLO1lBSUMsY0FBYztrQkFEcEIsS0FBSztZQUlDLGlCQUFpQjtrQkFEdkIsS0FBSztZQUlDLGFBQWE7a0JBRG5CLEtBQUs7WUFJQyxlQUFlO2tCQURyQixLQUFLO1lBSUMsY0FBYztrQkFEcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3RW5jYXBzdWxhdGlvbiwgTmdab25lLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi4vLi4vZXZlbnRzL3BkZi10aHVtYm5haWwtZHJhd24tZXZlbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtc2lkZWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtc2lkZWJhci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZTaWRlYmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaWRlYmFyUG9zaXRpb25Ub3A6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2lkZWJhclZpc2libGUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2lkZWJhckJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNpZGViYXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRodW1ibmFpbDogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHRodW1ibmFpbERyYXduID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZUaHVtYm5haWxEcmF3bkV2ZW50PigpO1xyXG5cclxuICBwdWJsaWMgaGlkZVNpZGViYXJUb29sYmFyID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIHB1YmxpYyBzaG93VG9vbGJhcldoZW5OZWNlc3NhcnkoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBidXR0b25zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICAgIGxldCB2aXNpYmxlID0gMDtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBidXR0b25zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBiID0gYnV0dG9ucy5pdGVtKGluZGV4KTtcclxuICAgICAgaWYgKCFiLmhpZGRlbikge1xyXG4gICAgICAgIHZpc2libGUrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5oaWRlU2lkZWJhclRvb2xiYXIgPSB2aXNpYmxlIDw9IDE7XHJcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdj5cclxuICA8bmctY29udGVudCAqbmdUZW1wbGF0ZU91dGxldD1cImN1c3RvbVNpZGViYXIgPyBjdXN0b21TaWRlYmFyIDogZGVmYXVsdFNpZGViYXJcIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0U2lkZWJhcj5cclxuICA8ZGl2IGlkPVwic2lkZWJhckNvbnRhaW5lclwiIFtzdHlsZS50b3BdPVwic2lkZWJhclBvc2l0aW9uVG9wXCI+XHJcbiAgICA8ZGl2IGlkPVwiYWRkaXRpb25hbFNpZGViYXJDb250YWluZXJcIiBbc3R5bGUuZGlzcGxheV09XCJoaWRlU2lkZWJhclRvb2xiYXIgPyAnbm9uZScgOiAnJ1wiPlxyXG4gICAgICA8cGRmLXNpZGViYXItdG9vbGJhcj48L3BkZi1zaWRlYmFyLXRvb2xiYXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwZGYtc2lkZWJhci1jb250ZW50XHJcbiAgICAgIFtjdXN0b21UaHVtYm5haWxdPVwiY3VzdG9tVGh1bWJuYWlsXCJcclxuICAgICAgKHRodW1ibmFpbERyYXduKT1cInRodW1ibmFpbERyYXduLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgIFtoaWRlU2lkZWJhclRvb2xiYXJdPVwiaGlkZVNpZGViYXJUb29sYmFyXCJcclxuICAgID48L3BkZi1zaWRlYmFyLWNvbnRlbnQ+XHJcbiAgICA8ZGl2IGlkPVwic2lkZWJhclJlc2l6ZXJcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
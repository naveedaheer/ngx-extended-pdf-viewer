import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfBookmarkComponent {
    constructor() {
        this.showBookmarkButton = true;
    }
}
/** @nocollapse */ PdfBookmarkComponent.ɵfac = function PdfBookmarkComponent_Factory(t) { return new (t || PdfBookmarkComponent)(); };
/** @nocollapse */ PdfBookmarkComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfBookmarkComponent, selectors: [["pdf-bookmark"]], inputs: { showBookmarkButton: "showBookmarkButton" }, decls: 5, vars: 2, consts: [["href", "#", "id", "viewBookmark", "title", "Current view (copy or open in new window)", "data-l10n-id", "bookmark", 1, "toolbarButton", "hiddenTinyView"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"], ["data-l10n-id", "bookmark_label"]], template: function PdfBookmarkComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Current View");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showBookmarkButton);
    } }, styles: ["[_nghost-%COMP%]   a.toolbarButton[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-top:4px}[_nghost-%COMP%]:focus{outline:none}a[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfBookmarkComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-bookmark',
                templateUrl: './pdf-bookmark.component.html',
                styleUrls: ['./pdf-bookmark.component.css']
            }]
    }], null, { showBookmarkButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWJvb2ttYXJrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtYm9va21hcmsvcGRmLWJvb2ttYXJrLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtYm9va21hcmsvcGRmLWJvb2ttYXJrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9qRCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBUVMsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO0tBQ2xDOzsyR0FKWSxvQkFBb0I7c0dBQXBCLG9CQUFvQjtRQ1BqQyw0QkFPQztRQUNDLG1CQUF3RDtRQUF4RCw4QkFBd0Q7UUFDdEQsMEJBQXFIO1FBQ3ZILGlCQUFNO1FBQ04sb0JBQW9DO1FBQXBDLCtCQUFvQztRQUFBLDRCQUFZO1FBQUEsaUJBQU87UUFDekQsaUJBQUk7O1FBVkYsb0RBQXVDOzt1RkRLNUIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Z0JBSVEsa0JBQWtCO2tCQUR4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtYm9va21hcmsnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtYm9va21hcmsuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1ib29rbWFyay5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkJvb2ttYXJrQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0Jvb2ttYXJrQnV0dG9uID0gdHJ1ZTtcclxufVxyXG4iLCI8YVxyXG4gIGhyZWY9XCIjXCJcclxuICBbY2xhc3MuaW52aXNpYmxlXT1cIiFzaG93Qm9va21hcmtCdXR0b25cIlxyXG4gIGlkPVwidmlld0Jvb2ttYXJrXCJcclxuICBjbGFzcz1cInRvb2xiYXJCdXR0b24gaGlkZGVuVGlueVZpZXdcIlxyXG4gIHRpdGxlPVwiQ3VycmVudCB2aWV3IChjb3B5IG9yIG9wZW4gaW4gbmV3IHdpbmRvdylcIlxyXG4gIGRhdGEtbDEwbi1pZD1cImJvb2ttYXJrXCJcclxuPlxyXG4gIDxzdmcgc3R5bGU9XCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTcsMThMMTIsMTUuODJMNywxOFY1SDE3TTE3LDNIN0EyLDIgMCAwLDAgNSw1VjIxTDEyLDE4TDE5LDIxVjVDMTksMy44OSAxOC4xLDMgMTcsM1pcIiAvPlxyXG4gIDwvc3ZnPlxyXG4gIDxzcGFuIGRhdGEtbDEwbi1pZD1cImJvb2ttYXJrX2xhYmVsXCI+Q3VycmVudCBWaWV3PC9zcGFuPlxyXG48L2E+XHJcbiJdfQ==
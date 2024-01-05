import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfToggleSecondaryToolbarComponent {
    constructor() {
        this.showSecondaryToolbarButton = true;
    }
    ngOnInit() { }
}
/** @nocollapse */ PdfToggleSecondaryToolbarComponent.ɵfac = function PdfToggleSecondaryToolbarComponent_Factory(t) { return new (t || PdfToggleSecondaryToolbarComponent)(); };
/** @nocollapse */ PdfToggleSecondaryToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfToggleSecondaryToolbarComponent, selectors: [["pdf-toggle-secondary-toolbar"]], inputs: { showSecondaryToolbarButton: "showSecondaryToolbarButton" }, decls: 5, vars: 2, consts: [["type", "button", "id", "secondaryToolbarToggle", "title", "Tools", "data-l10n-id", "tools", 1, "toolbarButton"], ["viewBox", "0 0 24 24", "onclick", "event.preventDefault(); return false;", 2, "width", "27px", "height", "27px"], ["fill", "currentColor", "d", "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"], ["data-l10n-id", "tools_label"]], template: function PdfToggleSecondaryToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Tools");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showSecondaryToolbarButton);
    } }, styles: ["svg[_ngcontent-%COMP%]{margin-top:-3px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfToggleSecondaryToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-toggle-secondary-toolbar',
                templateUrl: './pdf-toggle-secondary-toolbar.component.html',
                styleUrls: ['./pdf-toggle-secondary-toolbar.component.css']
            }]
    }], function () { return []; }, { showSecondaryToolbarButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT3pELE1BQU0sT0FBTyxrQ0FBa0M7SUFJN0M7UUFGTywrQkFBMEIsR0FBRyxJQUFJLENBQUM7SUFFMUIsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQzs7dUlBTkYsa0NBQWtDO29IQUFsQyxrQ0FBa0M7UUNQL0MsaUNBT0M7UUFDQyxtQkFBd0c7UUFBeEcsOEJBQXdHO1FBQ3RHLDBCQUErRTtRQUNqRixpQkFBTTtRQUNOLG9CQUFpQztRQUFqQywrQkFBaUM7UUFBQSxxQkFBSztRQUFBLGlCQUFPO1FBQy9DLGlCQUFTOztRQVZQLDREQUErQzs7dUZES3BDLGtDQUFrQztjQUw5QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLCtDQUErQztnQkFDNUQsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7YUFDNUQ7c0NBR1EsMEJBQTBCO2tCQURoQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmVG9nZ2xlU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxufVxyXG4iLCI8YnV0dG9uXHJcbiAgdHlwZT1cImJ1dHRvblwiXHJcbiAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b25cIlxyXG4gIGlkPVwic2Vjb25kYXJ5VG9vbGJhclRvZ2dsZVwiXHJcbiAgY2xhc3M9XCJ0b29sYmFyQnV0dG9uXCJcclxuICB0aXRsZT1cIlRvb2xzXCJcclxuICBkYXRhLWwxMG4taWQ9XCJ0b29sc1wiXHJcbj5cclxuICA8c3ZnIHN0eWxlPVwid2lkdGg6MjdweDtoZWlnaHQ6MjdweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBvbmNsaWNrPVwiZXZlbnQucHJldmVudERlZmF1bHQoKTsgcmV0dXJuIGZhbHNlO1wiPlxyXG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMyw2SDIxVjhIM1Y2TTMsMTFIMjFWMTNIM1YxMU0zLDE2SDIxVjE4SDNWMTZaXCIgLz5cclxuICA8L3N2Zz5cclxuICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJ0b29sc19sYWJlbFwiPlRvb2xzPC9zcGFuPlxyXG48L2J1dHRvbj5cclxuIl19
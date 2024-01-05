import { PDFNotificationService } from './../../../pdf-notification-service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../../../pdf-notification-service";
const _c0 = ["button"];
export class PdfLastPageComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.disableLastPage = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    firstPage() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('firstpage');
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', event => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disableLastPage = event.pageNumber === event.pagesCount;
        this.button.nativeElement.disabled = this.disableLastPage;
    }
    lastPage() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('lastpage');
    }
}
/** @nocollapse */ PdfLastPageComponent.ɵfac = function PdfLastPageComponent_Factory(t) { return new (t || PdfLastPageComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService)); };
/** @nocollapse */ PdfLastPageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfLastPageComponent, selectors: [["pdf-last-page"]], viewQuery: function PdfLastPageComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.button = _t.first);
    } }, decls: 6, vars: 1, consts: [["type", "button", "title", "Last page", "id", "primaryLastPage", "data-l10n-id", "last_page", 1, "toolbarButton", "hiddenLargeView", 3, "disabled", "click"], ["button", ""], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z"], ["data-l10n-id", "last_page_label"]], template: function PdfLastPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵlistener("click", function PdfLastPageComponent_Template_button_click_0_listener() { return ctx.lastPage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 2);
        i0.ɵɵelement(3, "path", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(4, "span", 4);
        i0.ɵɵtext(5, "Last page");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disableLastPage);
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfLastPageComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-last-page',
                templateUrl: './pdf-last-page.component.html',
                styleUrls: ['./pdf-last-page.component.css']
            }]
    }], function () { return [{ type: i1.PDFNotificationService }]; }, { button: [{
            type: ViewChild,
            args: ['button']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWxhc3QtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1sYXN0LXBhZ2UvcGRmLWxhc3QtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1sYXN0LXBhZ2UvcGRmLWxhc3QtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTakUsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQixZQUFvQixtQkFBMkM7UUFBM0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF3QjtRQUx4RCxvQkFBZSxHQUFHLElBQUksQ0FBQztRQU01QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxTQUFTO1FBQ2QsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBeUI7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDNUQsQ0FBQztJQUVNLFFBQVE7UUFDYixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyRCxDQUFDOzsyR0EvQlUsb0JBQW9CO3NHQUFwQixvQkFBb0I7Ozs7OztRQ1ZqQyxvQ0FRRztRQUhELGlHQUFTLGNBQVUsSUFBQztRQUlwQixtQkFBd0Q7UUFBeEQsOEJBQXdEO1FBQ3RELDBCQUF5RztRQUMzRyxpQkFBTTtRQUNOLG9CQUFxQztRQUFyQywrQkFBcUM7UUFBQSx5QkFBUztRQUFBLGlCQUFPO1FBQ3ZELGlCQUFTOztRQVBQLDhDQUE0Qjs7dUZESWpCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDO3lFQUtTLE1BQU07a0JBRGIsU0FBUzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgVXBkYXRlVUlTdGF0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZXZlbnRzL3VwZGF0ZS11aS1zdGF0ZS1ldmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1sYXN0LXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtbGFzdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtbGFzdC1wYWdlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmTGFzdFBhZ2VDb21wb25lbnQge1xyXG4gIHB1YmxpYyBkaXNhYmxlTGFzdFBhZ2UgPSB0cnVlO1xyXG5cclxuICBAVmlld0NoaWxkKCdidXR0b24nKVxyXG4gIHByaXZhdGUgYnV0dG9uOiBFbGVtZW50UmVmPEhUTUxCdXR0b25FbGVtZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5vblBkZkpzSW5pdCgpO1xyXG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpcnN0UGFnZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnZmlyc3RwYWdlJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25QZGZKc0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZXVpc3RhdGUnLCBldmVudCA9PiB0aGlzLnVwZGF0ZVVJU3RhdGUoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVVSVN0YXRlKGV2ZW50OiBVcGRhdGVVSVN0YXRlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZUxhc3RQYWdlID0gZXZlbnQucGFnZU51bWJlciA9PT0gZXZlbnQucGFnZXNDb3VudDtcclxuICAgIHRoaXMuYnV0dG9uLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVMYXN0UGFnZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsYXN0UGFnZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnbGFzdHBhZ2UnKTtcclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICBjbGFzcz1cInRvb2xiYXJCdXR0b24gaGlkZGVuTGFyZ2VWaWV3XCJcclxuICB0aXRsZT1cIkxhc3QgcGFnZVwiXHJcbiAgaWQ9XCJwcmltYXJ5TGFzdFBhZ2VcIlxyXG4gIGRhdGEtbDEwbi1pZD1cImxhc3RfcGFnZVwiXHJcbiAgKGNsaWNrKT1cImxhc3RQYWdlKClcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlTGFzdFBhZ2VcIlxyXG4gICNidXR0b25cclxuICA+XHJcbiAgPHN2ZyBzdHlsZT1cIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01LjU5LDcuNDFMMTAuMTgsMTJMNS41OSwxNi41OUw3LDE4TDEzLDEyTDcsNkw1LjU5LDcuNDFNMTYsNkgxOFYxOEgxNlY2WlwiIC8+XHJcbiAgPC9zdmc+XHJcbiAgPHNwYW4gZGF0YS1sMTBuLWlkPVwibGFzdF9wYWdlX2xhYmVsXCI+TGFzdCBwYWdlPC9zcGFuPlxyXG48L2J1dHRvbj5cclxuIl19
import { PDFNotificationService } from './../../pdf-notification-service';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../../pdf-notification-service";
import * as i2 from "@angular/common";
const _c0 = ["button1"];
const _c1 = ["button2"];
function PdfRotatePageComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2, 3);
    i0.ɵɵlistener("click", function PdfRotatePageComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.rotateCW(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 4);
    i0.ɵɵelement(3, "path", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("invisible", !ctx_r0.showRotateButton);
    i0.ɵɵproperty("disabled", ctx_r0.disableRotate);
} }
function PdfRotatePageComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6, 7);
    i0.ɵɵlistener("click", function PdfRotatePageComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.rotateCCW(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 4);
    i0.ɵɵelement(3, "path", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("invisible", !ctx_r1.showRotateButton);
    i0.ɵɵproperty("disabled", ctx_r1.disableRotate);
} }
export class PdfRotatePageComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.showRotateButton = true;
        this.disableRotate = true;
        this.clockwise = true;
        this.counterClockwise = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    rotateCW() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotatecw');
    }
    rotateCCW() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotateccw');
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disableRotate = event.pagesCount === 0;
        if (this.button1) {
            this.button1.nativeElement.disabled = this.disableRotate;
        }
        if (this.button2) {
            this.button2.nativeElement.disabled = this.disableRotate;
        }
    }
}
/** @nocollapse */ PdfRotatePageComponent.ɵfac = function PdfRotatePageComponent_Factory(t) { return new (t || PdfRotatePageComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService)); };
/** @nocollapse */ PdfRotatePageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfRotatePageComponent, selectors: [["pdf-rotate-page"]], viewQuery: function PdfRotatePageComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.button1 = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.button2 = _t.first);
    } }, inputs: { showRotateButton: "showRotateButton", clockwise: "clockwise", counterClockwise: "counterClockwise" }, decls: 2, vars: 2, consts: [["type", "button", "id", "primaryPageRotateCw", "class", "toolbarButton hiddenXLView rotateCw", "title", "Rotate Clockwise", "data-l10n-id", "page_rotate_cw", 3, "invisible", "disabled", "click", 4, "ngIf"], ["type", "button", "id", "primaryPageRotateCcw", "class", "toolbarButton hiddenXLView rotateCcw", "title", "Rotate Counterclockwise", "data-l10n-id", "page_rotate_ccw", 3, "invisible", "disabled", "click", 4, "ngIf"], ["type", "button", "id", "primaryPageRotateCw", "title", "Rotate Clockwise", "data-l10n-id", "page_rotate_cw", 1, "toolbarButton", "hiddenXLView", "rotateCw", 3, "disabled", "click"], ["button1", ""], ["viewBox", "0 0 24 24", 2, "width", "23px", "height", "23px"], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3"], ["type", "button", "id", "primaryPageRotateCcw", "title", "Rotate Counterclockwise", "data-l10n-id", "page_rotate_ccw", 1, "toolbarButton", "hiddenXLView", "rotateCcw", 3, "disabled", "click"], ["button2", ""], ["fill", "currentColor", "d", "M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3"]], template: function PdfRotatePageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PdfRotatePageComponent_button_0_Template, 4, 3, "button", 0);
        i0.ɵɵtemplate(1, PdfRotatePageComponent_button_1_Template, 4, 3, "button", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.clockwise);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.counterClockwise);
    } }, directives: [i2.NgIf], styles: ["[_nghost-%COMP%]{margin-top:-1px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfRotatePageComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-rotate-page',
                templateUrl: './pdf-rotate-page.component.html',
                styleUrls: ['./pdf-rotate-page.component.css']
            }]
    }], function () { return [{ type: i1.PDFNotificationService }]; }, { showRotateButton: [{
            type: Input
        }], clockwise: [{
            type: Input
        }], counterClockwise: [{
            type: Input
        }], button1: [{
            type: ViewChild,
            args: ['button1']
        }], button2: [{
            type: ViewChild,
            args: ['button2']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcm90YXRlLXBhZ2UvcGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcm90YXRlLXBhZ2UvcGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDRHhFLG9DQVVXO0lBUlQsMkxBQW9CO0lBU2xCLG1CQUF3RDtJQUF4RCw4QkFBd0Q7SUFDdEQsMEJBQWdPO0lBQ2xPLGlCQUFNO0lBQ1YsaUJBQVM7OztJQVZQLHFEQUFxQztJQUtyQywrQ0FBMEI7Ozs7SUFNNUIsb0NBVVc7SUFSVCw0TEFBcUI7SUFTbkIsbUJBQXdEO0lBQXhELDhCQUF3RDtJQUN0RCwwQkFBMk47SUFDN04saUJBQU07SUFDVixpQkFBUzs7O0lBVlAscURBQXFDO0lBS3JDLCtDQUEwQjs7QURkNUIsTUFBTSxPQUFPLHNCQUFzQjtJQWtCakMsWUFBb0IsbUJBQTJDO1FBQTNDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFoQnhELHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUV4QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUdyQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBR2pCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQVM3QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxRQUFRO1FBQ2IsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLFNBQVM7UUFDZCxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBR00sV0FBVztRQUNoQixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQXlCO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7K0dBakRVLHNCQUFzQjt3R0FBdEIsc0JBQXNCOzs7Ozs7OztRQ1ZuQyw2RUFjUztRQUNULDZFQWNTOztRQTVCTixvQ0FBZTtRQWVmLGVBQXNCO1FBQXRCLDJDQUFzQjs7dUZETlosc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQzt5RUFHUSxnQkFBZ0I7a0JBRHRCLEtBQUs7WUFNQyxTQUFTO2tCQURmLEtBQUs7WUFJQyxnQkFBZ0I7a0JBRHRCLEtBQUs7WUFJRSxPQUFPO2tCQURkLFNBQVM7bUJBQUMsU0FBUztZQUlaLE9BQU87a0JBRGQsU0FBUzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IFVwZGF0ZVVJU3RhdGVFdmVudCB9IGZyb20gJy4uLy4uL2V2ZW50cy91cGRhdGUtdWktc3RhdGUtZXZlbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtcm90YXRlLXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtcm90YXRlLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1yb3RhdGUtcGFnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlJvdGF0ZVBhZ2VDb21wb25lbnQgIHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Um90YXRlQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGRpc2FibGVSb3RhdGUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjbG9ja3dpc2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjb3VudGVyQ2xvY2t3aXNlID0gdHJ1ZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYnV0dG9uMScpXHJcbiAgcHJpdmF0ZSBidXR0b24xOiBFbGVtZW50UmVmPEhUTUxCdXR0b25FbGVtZW50PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYnV0dG9uMicpXHJcbiAgcHJpdmF0ZSBidXR0b24yOiBFbGVtZW50UmVmPEhUTUxCdXR0b25FbGVtZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5vblBkZkpzSW5pdCgpO1xyXG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJvdGF0ZUNXKCk6IHZvaWQge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdyb3RhdGVjdycpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJvdGF0ZUNDVygpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgncm90YXRlY2N3Jyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIG9uUGRmSnNJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd1cGRhdGV1aXN0YXRlJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZVVJU3RhdGUoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVVSVN0YXRlKGV2ZW50OiBVcGRhdGVVSVN0YXRlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZVJvdGF0ZSA9IGV2ZW50LnBhZ2VzQ291bnQgPT09IDA7XHJcbiAgICBpZiAodGhpcy5idXR0b24xKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uMS5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlUm90YXRlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYnV0dG9uMikge1xyXG4gICAgICB0aGlzLmJ1dHRvbjIubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZVJvdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gICpuZ0lmPVwiY2xvY2t3aXNlXCJcclxuICAoY2xpY2spPVwicm90YXRlQ1coKVwiXHJcbiAgdHlwZT1cImJ1dHRvblwiXHJcbiAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1JvdGF0ZUJ1dHRvblwiXHJcbiAgaWQ9XCJwcmltYXJ5UGFnZVJvdGF0ZUN3XCJcclxuICBjbGFzcz1cInRvb2xiYXJCdXR0b24gaGlkZGVuWExWaWV3IHJvdGF0ZUN3XCJcclxuICB0aXRsZT1cIlJvdGF0ZSBDbG9ja3dpc2VcIlxyXG4gIGRhdGEtbDEwbi1pZD1cInBhZ2Vfcm90YXRlX2N3XCJcclxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZVJvdGF0ZVwiXHJcbiAgI2J1dHRvbjE+XHJcbiAgICA8c3ZnIHN0eWxlPVwid2lkdGg6MjNweDtoZWlnaHQ6MjNweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIgM0M3LjAzIDMgMyA3LjAzIDMgMTJTNy4wMyAyMSAxMiAyMUMxNCAyMSAxNS45MiAyMC4zNCAxNy41IDE5LjE0TDE2LjA2IDE3LjdDMTQuODcgMTguNTQgMTMuNDUgMTkgMTIgMTlDOC4xMyAxOSA1IDE1Ljg3IDUgMTJTOC4xMyA1IDEyIDUgMTkgOC4xMyAxOSAxMkgxNkwyMCAxNkwyNCAxMkgyMUMyMSA3LjAzIDE2Ljk3IDMgMTIgM1wiIC8+XHJcbiAgICA8L3N2Zz5cclxuPC9idXR0b24+XHJcbjxidXR0b25cclxuICAqbmdJZj1cImNvdW50ZXJDbG9ja3dpc2VcIlxyXG4gIChjbGljayk9XCJyb3RhdGVDQ1coKVwiXHJcbiAgdHlwZT1cImJ1dHRvblwiXHJcbiAgW2NsYXNzLmludmlzaWJsZV09XCIhc2hvd1JvdGF0ZUJ1dHRvblwiXHJcbiAgaWQ9XCJwcmltYXJ5UGFnZVJvdGF0ZUNjd1wiXHJcbiAgY2xhc3M9XCJ0b29sYmFyQnV0dG9uIGhpZGRlblhMVmlldyByb3RhdGVDY3dcIlxyXG4gIHRpdGxlPVwiUm90YXRlIENvdW50ZXJjbG9ja3dpc2VcIlxyXG4gIGRhdGEtbDEwbi1pZD1cInBhZ2Vfcm90YXRlX2Njd1wiXHJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVSb3RhdGVcIlxyXG4gICNidXR0b24yPlxyXG4gICAgPHN2ZyBzdHlsZT1cIndpZHRoOjIzcHg7aGVpZ2h0OjIzcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyIDNDNy4wMyAzIDMgNy4wMyAzIDEySDBMNCAxNkw4IDEySDVDNSA4LjEzIDguMTMgNSAxMiA1UzE5IDguMTMgMTkgMTIgMTUuODcgMTkgMTIgMTlDMTAuNTUgMTkgOS4xMyAxOC41NCA3Ljk0IDE3LjdMNi41IDE5LjE0QzguMDggMjAuMzQgMTAgMjEgMTIgMjFDMTYuOTcgMjEgMjEgMTYuOTcgMjEgMTJTMTYuOTcgMyAxMiAzXCIgLz5cclxuICAgIDwvc3ZnPlxyXG48L2J1dHRvbj5cclxuIl19
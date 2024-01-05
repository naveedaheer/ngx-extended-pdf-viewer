import { PdfCursorTools } from './../../options/pdf-cursor-tools';
import { Component, Input } from '@angular/core';
import { PDFNotificationService } from '../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
export class PdfSelectToolComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.showSelectToolButton = true;
        this.isSelected = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('cursortoolchanged', ({ tool }) => (this.isSelected = tool === PdfCursorTools.SELECT));
    }
    onClick() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: PdfCursorTools.SELECT });
    }
}
/** @nocollapse */ PdfSelectToolComponent.ɵfac = function PdfSelectToolComponent_Factory(t) { return new (t || PdfSelectToolComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService)); };
/** @nocollapse */ PdfSelectToolComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSelectToolComponent, selectors: [["pdf-select-tool"]], inputs: { showSelectToolButton: "showSelectToolButton" }, decls: 5, vars: 4, consts: [["type", "button", "id", "primaryCursorSelectTool", "title", "Enable text selection tool", "data-l10n-id", "cursor_text_select_tool", 1, "toolbarButton", "hiddenXXLView", 3, "click"], ["viewBox", "0 0 24 24", 2, "width", "22px", "height", "22px"], ["fill", "currentColor", "d", "M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z"], ["data-l10n-id", "cursor_text_select_tool_label"]], template: function PdfSelectToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function PdfSelectToolComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "Text selection tool");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("invisible", !ctx.showSelectToolButton)("toggled", ctx.isSelected);
    } }, styles: ["[_nghost-%COMP%]{margin-top:0;margin-right:-3px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus, svg[_ngcontent-%COMP%]:focus{outline:none}.toggled[_ngcontent-%COMP%]{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:inset 0 1px 1px rgba(0,0,0,.1),inset 0 0 1px rgba(0,0,0,.2),0 1px 0 rgba(255,255,255,.05)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSelectToolComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-select-tool',
                templateUrl: './pdf-select-tool.component.html',
                styleUrls: ['./pdf-select-tool.component.css']
            }]
    }], function () { return [{ type: i1.PDFNotificationService }]; }, { showSelectToolButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlbGVjdC10b29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2VsZWN0LXRvb2wvcGRmLXNlbGVjdC10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2VsZWN0LXRvb2wvcGRmLXNlbGVjdC10b29sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBUXhFLE1BQU0sT0FBTyxzQkFBc0I7SUFNakMsWUFBb0IsbUJBQTJDO1FBQTNDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFKeEQseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRTVCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFHdkIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sV0FBVztRQUNqQixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFDbEQsQ0FBQyxFQUFFLElBQUksRUFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRU0sT0FBTztRQUNaLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlGLENBQUM7OytHQXRCVSxzQkFBc0I7d0dBQXRCLHNCQUFzQjtRQ1huQyxpQ0FReUM7UUFQdkMsbUdBQVMsYUFBUyxJQUFDO1FBUW5CLG1CQUF3RDtRQUF4RCw4QkFBd0Q7UUFDdEQsMEJBQThkO1FBQ2hlLGlCQUFNO1FBQ04sb0JBQW1EO1FBQW5ELCtCQUFtRDtRQUFBLG1DQUFtQjtRQUFBLGlCQUFPO1FBQy9FLGlCQUFTOztRQVZQLHNEQUF5QywyQkFBQTs7dUZEUTlCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7eUVBR1Esb0JBQW9CO2tCQUQxQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGRmQ3Vyc29yVG9vbHMgfSBmcm9tICcuLy4uLy4uL29wdGlvbnMvcGRmLWN1cnNvci10b29scyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCB7IEhhbmR0b29sQ2hhbmdlZCB9IGZyb20gJy4uLy4uL2V2ZW50cy9oYW5kdG9vbC1jaGFuZ2VkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXNlbGVjdC10b29sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNlbGVjdC10b29sLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtc2VsZWN0LXRvb2wuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZTZWxlY3RUb29sQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2VsZWN0VG9vbEJ1dHRvbiA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBpc1NlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5vblBkZkpzSW5pdCgpO1xyXG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblBkZkpzSW5pdCgpIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignY3Vyc29ydG9vbGNoYW5nZWQnLFxyXG4gICAgICAoeyB0b29sIH06IEhhbmR0b29sQ2hhbmdlZCkgPT4gKHRoaXMuaXNTZWxlY3RlZCA9IHRvb2wgPT09IFBkZkN1cnNvclRvb2xzLlNFTEVDVCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaGN1cnNvcnRvb2wnLCB7IHRvb2w6IFBkZkN1cnNvclRvb2xzLlNFTEVDVCB9KTtcclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gIChjbGljayk9XCJvbkNsaWNrKClcIlxyXG4gIHR5cGU9XCJidXR0b25cIlxyXG4gIFtjbGFzcy5pbnZpc2libGVdPVwiIXNob3dTZWxlY3RUb29sQnV0dG9uXCJcclxuICBbY2xhc3MudG9nZ2xlZF09XCJpc1NlbGVjdGVkXCJcclxuICBpZD1cInByaW1hcnlDdXJzb3JTZWxlY3RUb29sXCJcclxuICBjbGFzcz1cInRvb2xiYXJCdXR0b24gaGlkZGVuWFhMVmlld1wiXHJcbiAgdGl0bGU9XCJFbmFibGUgdGV4dCBzZWxlY3Rpb24gdG9vbFwiXHJcbiAgZGF0YS1sMTBuLWlkPVwiY3Vyc29yX3RleHRfc2VsZWN0X3Rvb2xcIj5cclxuICA8c3ZnIHN0eWxlPVwid2lkdGg6MjJweDtoZWlnaHQ6MjJweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIgNEMyIDIuODkgMi45IDIgNCAySDdWNEg0VjdIMlY0TTIyIDRWN0gyMFY0SDE3VjJIMjBDMjEuMSAyIDIyIDIuODkgMjIgNE0yIDIwVjE3SDRWMjBIN1YyMkg0QzIuOSAyMiAyIDIxLjExIDIgMjBNMTAgMkgxNFY0SDEwVjJNMTAgMjBIMTRWMjJIMTBWMjBNMiAxMEg0VjE0SDJWMTBNMTguNSAxM0MyMC40IDEzIDIyIDE0LjYgMjIgMTYuNUMyMiAxOS4xIDE4LjUgMjMgMTguNSAyM0MxOC41IDIzIDE1IDE5LjEgMTUgMTYuNUMxNSAxNC42IDE2LjYgMTMgMTguNSAxM00xOC41IDE3LjhDMTkuMiAxNy44IDE5LjggMTcuMiAxOS43IDE2LjZDMTkuNyAxNiAxOS4xIDE1LjQgMTguNSAxNS40QzE3LjkgMTUuNCAxNy4zIDE1LjkgMTcuMyAxNi42QzE3LjMgMTcuMiAxNy44IDE3LjggMTguNSAxNy44TTIwIDEwSDIyVjEyLjM0QzIxLjQyIDExLjg0IDIwLjc0IDExLjQ1IDIwIDExLjIzVjEwWlwiIC8+XHJcbiAgPC9zdmc+XHJcbiAgPHNwYW4gZGF0YS1sMTBuLWlkPVwiY3Vyc29yX3RleHRfc2VsZWN0X3Rvb2xfbGFiZWxcIj5UZXh0IHNlbGVjdGlvbiB0b29sPC9zcGFuPlxyXG48L2J1dHRvbj5cclxuIl19
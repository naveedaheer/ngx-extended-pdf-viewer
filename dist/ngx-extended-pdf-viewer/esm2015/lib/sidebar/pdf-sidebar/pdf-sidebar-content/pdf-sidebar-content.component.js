import { Component, Input, TemplateRef, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["thumbnailViewTemplate"];
function PdfSidebarContentComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customThumbnail ? customThumbnail : defaultThumbnail"]);
} }
function PdfSidebarContentComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵelement(2, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c1 = ["*"];
const THUMBNAIL_CANVAS_BORDER_WIDTH = 1; // px
export class PdfSidebarContentComponent {
    constructor() {
        this.thumbnailDrawn = new EventEmitter();
        this.top = '32px';
        this._hideSidebarToolbar = false;
        if (typeof window !== 'undefined') {
            window.pdfThumbnailGeneratorReady = () => this.pdfThumbnailGeneratorReady();
            window.pdfThumbnailGenerator = (pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) => this.createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise);
        }
    }
    ngOnDestroy() {
        this.linkService = undefined;
    }
    pdfThumbnailGeneratorReady() {
        if (!this.thumbnailViewTemplate) {
            return false;
        }
        const t = this.thumbnailViewTemplate.nativeElement;
        return !!t && !!t.innerHTML && t.innerHTML.length > 0;
    }
    createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) {
        this.linkService = linkService;
        const template = this.thumbnailViewTemplate;
        // get the inner HTML without the attributes and classes added by Angular
        const inner = template.nativeElement.innerHTML
            .split(/_ng\w+-\w+-\w+=""/g)
            .join('')
            .split(/ng-\w+-\w+/g)
            .join('')
            .split(/<!--[\s\S]*?-->/g)
            .join('');
        const borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
        const widthOfRing = pdfThumbnailView.canvasWidth + borderAdjustment + 'px';
        const heightOfRing = pdfThumbnailView.canvasHeight + borderAdjustment + 'px';
        const newHtml = inner.split('WIDTH_OF_RING').join(widthOfRing).split('HEIGHT_OF_RING').join(heightOfRing).split('PAGE_NUMBER').join(id);
        const newElement = this.createElementFromHTML(newHtml);
        newElement.classList.remove('pdf-viewer-template');
        const anchor = newElement;
        anchor.href = linkService.getAnchorUrl('#page=' + id);
        thumbPageTitlePromise.then((msg) => {
            anchor.title = msg;
        });
        anchor.onclick = function () {
            linkService.page = id;
            return false;
        };
        pdfThumbnailView.anchor = anchor;
        const ring = newElement.getElementsByClassName('image-container')[0];
        pdfThumbnailView.ring = ring;
        pdfThumbnailView.div = newElement.getElementsByClassName('thumbnail')[0];
        container.appendChild(newElement);
        const thumbnailDrawnEvent = {
            thumbnail: newElement,
            container: container,
            pageId: id,
        };
        this.thumbnailDrawn.emit(thumbnailDrawnEvent);
    }
    createElementFromHTML(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }
    onKeyDown(event) {
        if (event.code === 'ArrowDown') {
            if (this.linkService) {
                if (event.ctrlKey || event.metaKey) {
                    this.linkService.page = this.linkService.pagesCount;
                }
                else if (this.linkService.page < this.linkService.pagesCount) {
                    this.linkService.page = this.linkService.page + 1;
                }
                event.preventDefault();
            }
        }
        else if (event.code === 'ArrowUp') {
            if (this.linkService) {
                if (event.ctrlKey || event.metaKey) {
                    this.linkService.page = 1;
                }
                else if (this.linkService.page > 1) {
                    this.linkService.page = this.linkService.page - 1;
                }
                event.preventDefault();
            }
        }
    }
    set hideSidebarToolbar(h) {
        this._hideSidebarToolbar = h;
        if (this._hideSidebarToolbar) {
            this.top = '0';
        }
        else {
            this.top = '32px';
        }
    }
}
/** @nocollapse */ PdfSidebarContentComponent.ɵfac = function PdfSidebarContentComponent_Factory(t) { return new (t || PdfSidebarContentComponent)(); };
/** @nocollapse */ PdfSidebarContentComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSidebarContentComponent, selectors: [["pdf-sidebar-content"]], viewQuery: function PdfSidebarContentComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.thumbnailViewTemplate = _t.first);
    } }, inputs: { customThumbnail: "customThumbnail", hideSidebarToolbar: "hideSidebarToolbar" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, ngContentSelectors: _c1, decls: 10, vars: 3, consts: [["id", "sidebarContent"], ["thumbnailViewTemplate", ""], [4, "ngTemplateOutlet"], ["id", "thumbnailView", 3, "keydown"], ["id", "outlineView", 1, "hidden"], ["id", "attachmentsView", 1, "hidden"], ["id", "layersView", 1, "hidden"], ["defaultThumbnail", ""], [1, "pdf-viewer-template"], ["data-page-number", "$page", 1, "thumbnail"], [1, "thumbnailSelectionRing", "image-container", 2, "width", "WIDTH_OF_RING", "height", "HEIGHT_OF_RING"]], template: function PdfSidebarContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", null, 1);
        i0.ɵɵtemplate(3, PdfSidebarContentComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵlistener("keydown", function PdfSidebarContentComponent_Template_div_keydown_4_listener($event) { return ctx.onKeyDown($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "div", 4);
        i0.ɵɵelement(6, "div", 5);
        i0.ɵɵelement(7, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, PdfSidebarContentComponent_ng_template_8_Template, 3, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(9);
        i0.ɵɵstyleProp("top", ctx.top);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customThumbnail ? ctx.customThumbnail : _r2);
    } }, directives: [i1.NgTemplateOutlet], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSidebarContentComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-sidebar-content',
                templateUrl: './pdf-sidebar-content.component.html',
                styleUrls: ['./pdf-sidebar-content.component.css'],
            }]
    }], function () { return []; }, { customThumbnail: [{
            type: Input
        }], thumbnailViewTemplate: [{
            type: ViewChild,
            args: ['thumbnailViewTemplate']
        }], thumbnailDrawn: [{
            type: Output
        }], hideSidebarToolbar: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItY29udGVudC9wZGYtc2lkZWJhci1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci1jb250ZW50L3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWEsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNFbEgsb0dBQWtHOzs7SUFTcEcsNEJBQStCO0lBQzdCLDhCQUFnRDtJQUM5QywwQkFHTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQUk7OztBREROLE1BQU0sNkJBQTZCLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztBQU85QyxNQUFNLE9BQU8sMEJBQTBCO0lBZ0JyQztRQU5PLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFFNUQsUUFBRyxHQUFHLE1BQU0sQ0FBQztRQUViLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQUdqQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNoQyxNQUFjLENBQUMsMEJBQTBCLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDcEYsTUFBYyxDQUFDLHFCQUFxQixHQUFHLENBQ3RDLGdCQUFrQyxFQUNsQyxXQUFnQixFQUNoQixFQUFVLEVBQ1Ys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QU07WUFtSEksa0JBQWtCO2tCQUQ1QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZXZlbnRzL3BkZi10aHVtYm5haWwtZHJhd24tZXZlbnQnO1xyXG5cclxuZGVjbGFyZSBjbGFzcyBQREZUaHVtYm5haWxWaWV3IHtcclxuICBhbmNob3I6IEhUTUxBbmNob3JFbGVtZW50O1xyXG4gIGRpdjogSFRNTEVsZW1lbnQ7XHJcbiAgcmluZzogSFRNTEVsZW1lbnQ7XHJcbiAgY2FudmFzV2lkdGg6IG51bWJlcjtcclxuICBjYW52YXNIZWlnaHQ6IG51bWJlcjtcclxufVxyXG5cclxuZGVjbGFyZSBjbGFzcyBQREZMaW5rU2VydmljZSB7XHJcbiAgcHVibGljIHBhZ2U6IG51bWJlcjtcclxuICBwdWJsaWMgcGFnZXNDb3VudDogbnVtYmVyO1xyXG4gIHB1YmxpYyBnZXRBbmNob3JVcmwodGFyZ2V0VXJsOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFRIVU1CTkFJTF9DQU5WQVNfQk9SREVSX1dJRFRIID0gMTsgLy8gcHhcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXNpZGViYXItY29udGVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmU2lkZWJhckNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRodW1ibmFpbDogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgndGh1bWJuYWlsVmlld1RlbXBsYXRlJylcclxuICBwdWJsaWMgdGh1bWJuYWlsVmlld1RlbXBsYXRlOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIGxpbmtTZXJ2aWNlOiBQREZMaW5rU2VydmljZSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHRodW1ibmFpbERyYXduID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZUaHVtYm5haWxEcmF3bkV2ZW50PigpO1xyXG5cclxuICBwdWJsaWMgdG9wID0gJzMycHgnO1xyXG5cclxuICBwdWJsaWMgX2hpZGVTaWRlYmFyVG9vbGJhciA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAod2luZG93IGFzIGFueSkucGRmVGh1bWJuYWlsR2VuZXJhdG9yUmVhZHkgPSAoKSA9PiB0aGlzLnBkZlRodW1ibmFpbEdlbmVyYXRvclJlYWR5KCk7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5wZGZUaHVtYm5haWxHZW5lcmF0b3IgPSAoXHJcbiAgICAgICAgcGRmVGh1bWJuYWlsVmlldzogUERGVGh1bWJuYWlsVmlldyxcclxuICAgICAgICBsaW5rU2VydmljZTogYW55LFxyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCxcclxuICAgICAgICB0aHVtYlBhZ2VUaXRsZVByb21pc2U6IFByb21pc2U8c3RyaW5nPlxyXG4gICAgICApID0+IHRoaXMuY3JlYXRlVGh1bWJuYWlsKHBkZlRodW1ibmFpbFZpZXcsIGxpbmtTZXJ2aWNlLCBpZCwgY29udGFpbmVyLCB0aHVtYlBhZ2VUaXRsZVByb21pc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saW5rU2VydmljZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwZGZUaHVtYm5haWxHZW5lcmF0b3JSZWFkeSgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy50aHVtYm5haWxWaWV3VGVtcGxhdGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdCA9IHRoaXMudGh1bWJuYWlsVmlld1RlbXBsYXRlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICByZXR1cm4gISF0ICYmICEhdC5pbm5lckhUTUwgJiYgdC5pbm5lckhUTUwubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVGh1bWJuYWlsKFxyXG4gICAgcGRmVGh1bWJuYWlsVmlldzogUERGVGh1bWJuYWlsVmlldyxcclxuICAgIGxpbmtTZXJ2aWNlOiBQREZMaW5rU2VydmljZSxcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgdGh1bWJQYWdlVGl0bGVQcm9taXNlOiBQcm9taXNlPHN0cmluZz5cclxuICApIHtcclxuICAgIHRoaXMubGlua1NlcnZpY2UgPSBsaW5rU2VydmljZTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50aHVtYm5haWxWaWV3VGVtcGxhdGU7XHJcbiAgICAvLyBnZXQgdGhlIGlubmVyIEhUTUwgd2l0aG91dCB0aGUgYXR0cmlidXRlcyBhbmQgY2xhc3NlcyBhZGRlZCBieSBBbmd1bGFyXHJcbiAgICBjb25zdCBpbm5lciA9IHRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MXHJcbiAgICAgIC5zcGxpdCgvX25nXFx3Ky1cXHcrLVxcdys9XCJcIi9nKVxyXG4gICAgICAuam9pbignJylcclxuICAgICAgLnNwbGl0KC9uZy1cXHcrLVxcdysvZylcclxuICAgICAgLmpvaW4oJycpXHJcbiAgICAgIC5zcGxpdCgvPCEtLVtcXHNcXFNdKj8tLT4vZylcclxuICAgICAgLmpvaW4oJycpO1xyXG5cclxuICAgIGNvbnN0IGJvcmRlckFkanVzdG1lbnQgPSAyICogVEhVTUJOQUlMX0NBTlZBU19CT1JERVJfV0lEVEg7XHJcblxyXG4gICAgY29uc3Qgd2lkdGhPZlJpbmcgPSBwZGZUaHVtYm5haWxWaWV3LmNhbnZhc1dpZHRoICsgYm9yZGVyQWRqdXN0bWVudCArICdweCc7XHJcbiAgICBjb25zdCBoZWlnaHRPZlJpbmcgPSBwZGZUaHVtYm5haWxWaWV3LmNhbnZhc0hlaWdodCArIGJvcmRlckFkanVzdG1lbnQgKyAncHgnO1xyXG5cclxuICAgIGNvbnN0IG5ld0h0bWwgPSBpbm5lci5zcGxpdCgnV0lEVEhfT0ZfUklORycpLmpvaW4od2lkdGhPZlJpbmcpLnNwbGl0KCdIRUlHSFRfT0ZfUklORycpLmpvaW4oaGVpZ2h0T2ZSaW5nKS5zcGxpdCgnUEFHRV9OVU1CRVInKS5qb2luKGlkKTtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnRGcm9tSFRNTChuZXdIdG1sKTtcclxuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGRmLXZpZXdlci10ZW1wbGF0ZScpO1xyXG5cclxuICAgIGNvbnN0IGFuY2hvciA9IG5ld0VsZW1lbnQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XHJcbiAgICBhbmNob3IuaHJlZiA9IGxpbmtTZXJ2aWNlLmdldEFuY2hvclVybCgnI3BhZ2U9JyArIGlkKTtcclxuICAgIHRodW1iUGFnZVRpdGxlUHJvbWlzZS50aGVuKChtc2cpID0+IHtcclxuICAgICAgYW5jaG9yLnRpdGxlID0gbXNnO1xyXG4gICAgfSk7XHJcbiAgICBhbmNob3Iub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGlua1NlcnZpY2UucGFnZSA9IGlkO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgcGRmVGh1bWJuYWlsVmlldy5hbmNob3IgPSBhbmNob3I7XHJcblxyXG4gICAgY29uc3QgcmluZyA9IG5ld0VsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1hZ2UtY29udGFpbmVyJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBwZGZUaHVtYm5haWxWaWV3LnJpbmcgPSByaW5nO1xyXG4gICAgcGRmVGh1bWJuYWlsVmlldy5kaXYgPSBuZXdFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RodW1ibmFpbCcpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCB0aHVtYm5haWxEcmF3bkV2ZW50OiBQZGZUaHVtYm5haWxEcmF3bkV2ZW50ID0ge1xyXG4gICAgICB0aHVtYm5haWw6IG5ld0VsZW1lbnQsXHJcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxyXG4gICAgICBwYWdlSWQ6IGlkLFxyXG4gICAgfTtcclxuICAgIHRoaXMudGh1bWJuYWlsRHJhd24uZW1pdCh0aHVtYm5haWxEcmF3bkV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudEZyb21IVE1MKGh0bWxTdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyaW5nLnRyaW0oKTtcclxuXHJcbiAgICAvLyBDaGFuZ2UgdGhpcyB0byBkaXYuY2hpbGROb2RlcyB0byBzdXBwb3J0IG11bHRpcGxlIHRvcC1sZXZlbCBub2Rlc1xyXG4gICAgcmV0dXJuIGRpdi5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpbmtTZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xyXG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gdGhpcy5saW5rU2VydmljZS5wYWdlc0NvdW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5saW5rU2VydmljZS5wYWdlIDwgdGhpcy5saW5rU2VydmljZS5wYWdlc0NvdW50KSB7XHJcbiAgICAgICAgICB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPSB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICBpZiAodGhpcy5saW5rU2VydmljZSkge1xyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcclxuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPSB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgaGlkZVNpZGViYXJUb29sYmFyKGg6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hpZGVTaWRlYmFyVG9vbGJhciA9IGg7XHJcbiAgICBpZiAodGhpcy5faGlkZVNpZGViYXJUb29sYmFyKSB7XHJcbiAgICAgIHRoaXMudG9wID0gJzAnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b3AgPSAnMzJweCc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgaWQ9XCJzaWRlYmFyQ29udGVudFwiIFtzdHlsZS50b3BdPVwidG9wXCI+XHJcbiAgPGRpdiAjdGh1bWJuYWlsVmlld1RlbXBsYXRlPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjdXN0b21UaHVtYm5haWwgPyBjdXN0b21UaHVtYm5haWwgOiBkZWZhdWx0VGh1bWJuYWlsXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgaWQ9XCJ0aHVtYm5haWxWaWV3XCIgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIj48L2Rpdj5cclxuICA8ZGl2IGlkPVwib3V0bGluZVZpZXdcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxyXG4gIDxkaXYgaWQ9XCJhdHRhY2htZW50c1ZpZXdcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxyXG4gIDxkaXYgaWQ9XCJsYXllcnNWaWV3XCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRUaHVtYm5haWw+XHJcbiAgPGEgY2xhc3M9XCJwZGYtdmlld2VyLXRlbXBsYXRlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGh1bWJuYWlsXCIgZGF0YS1wYWdlLW51bWJlcj1cIiRwYWdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aHVtYm5haWxTZWxlY3Rpb25SaW5nIGltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwid2lkdGg6IFdJRFRIX09GX1JJTkc7IGhlaWdodDogSEVJR0hUX09GX1JJTkdcIj5cclxuICAgICAgICA8IS0tIGltYWdlIGlzIGF1dG9tYXRpY2FsbHkgaW5zZXJ0ZWQgaGVyZSAtLT5cclxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XCJ0aHVtYm5haWxJbWFnZVwiIHN0eWxlPVwid2lkdGg6IDk4cHg7IGhlaWdodDogNzNweDtcIiAvPiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2E+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
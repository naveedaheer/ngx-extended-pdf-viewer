import { Component } from '@angular/core';
import * as i0 from "@angular/core";
/** List of all field that can be customized */
const requiredIds = [
    'toolbarViewer',
    'numPages',
    'pageNumber',
    'scaleSelectContainer',
    'customScaleOption',
    'previous',
    'next',
    'zoomIn',
    'zoomOut',
    'viewFind',
    'openFile',
    'print',
    'presentationMode',
    'download',
    'viewBookmark',
    'secondaryToolbar',
    'secondaryToolbarToggle',
    'secondaryToolbarButtonContainer',
    'secondaryPresentationMode',
    'secondaryOpenFile',
    'secondaryPrint',
    'secondaryDownload',
    'secondaryViewBookmark',
    'firstPage',
    'lastPage',
    'pageRotateCw',
    'pageRotateCcw',
    'cursorSelectTool',
    'cursorHandTool',
    'scrollVertical',
    'scrollHorizontal',
    'scrollWrapped',
    'spreadNone',
    'spreadOdd',
    'spreadEven',
    'documentProperties',
    'contextFirstPage',
    'contextLastPage',
    'contextPageRotateCw',
    'contextPageRotateCcw',
    'currentOutlineItem',
    'outerContainer',
    'viewerContainer',
    'sidebarToggle',
    'viewThumbnail',
    'viewOutline',
    'viewAttachments',
    'thumbnailView',
    'outlineView',
    'attachmentsView',
    'outerContainer',
    'sidebarResizer',
    'outlineOptionsContainer',
    'findbar',
    'viewFind',
    'findInput',
    'findInputMultiline',
    'findHighlightAll',
    'findMatchCase',
    'findEntireWord',
    'findMultipleSearchTexts',
    'findIgnoreAccents',
    'findMsg',
    'findResultsCount',
    'findPrevious',
    'findNext',
    'findFuzzy',
    'passwordOverlay',
    'passwordText',
    'password',
    'passwordSubmit',
    'passwordCancel',
    'documentPropertiesOverlay',
    'documentPropertiesClose',
    'fileNameField',
    'fileSizeField',
    'titleField',
    'authorField',
    'subjectField',
    'keywordsField',
    'creationDateField',
    'modificationDateField',
    'creatorField',
    'producerField',
    'versionField',
    'pageCountField',
    'pageSizeField',
    'linearizedField',
    'errorWrapper',
    'errorMessage',
    'errorClose',
    'errorMoreInfo',
    'errorShowMore',
    'errorShowLess',
    'scaleSelectContainer',
    'viewAttachments',
    'viewLayers',
    'viewThumbnail',
    'viewOutline',
];
export class PdfDummyComponentsComponent {
    addMissingStandardWidgets() {
        this.dummyComponentsContainer = document.getElementsByClassName('dummy-pdf-viewer-components')[0];
        const container = this.dummyComponentsContainer;
        if (container) {
            for (let i = 0; i < container.children.length; i++) {
                const child = container.firstChild;
                if (child) {
                    container.removeChild(child);
                }
            }
        }
        requiredIds.forEach(id => {
            if (this.needsDummyWidget(id)) {
                const dummy = document.createElement('span');
                dummy.id = id;
                dummy.className = 'invisible dummy-component';
                this.dummyComponentsContainer.appendChild(dummy);
            }
        });
        if (this.needsDummyWidget('scaleSelect')) {
            const dummy = document.createElement('select');
            dummy.id = 'scaleSelect';
            dummy.className = 'invisible dummy-component';
            this.dummyComponentsContainer.appendChild(dummy);
        }
    }
    needsDummyWidget(id) {
        const widget = document.getElementById(id);
        if (!widget) {
            return true;
        }
        return false;
    }
}
/** @nocollapse */ PdfDummyComponentsComponent.ɵfac = function PdfDummyComponentsComponent_Factory(t) { return new (t || PdfDummyComponentsComponent)(); };
/** @nocollapse */ PdfDummyComponentsComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfDummyComponentsComponent, selectors: [["pdf-dummy-components"]], decls: 1, vars: 0, consts: [[1, "invisible", "dummy-pdf-viewer-components"]], template: function PdfDummyComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", 0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfDummyComponentsComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-dummy-components',
                templateUrl: './pdf-dummy-components.component.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLCtDQUErQztBQUMvQyxNQUFNLFdBQVcsR0FBRztJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtJQUNWLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNo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O2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsdUNBQXVDO2FBQ3JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKiogTGlzdCBvZiBhbGwgZmllbGQgdGhhdCBjYW4gYmUgY3VzdG9taXplZCAqL1xyXG5jb25zdCByZXF1aXJlZElkcyA9IFtcclxuICAndG9vbGJhclZpZXdlcicsXHJcbiAgJ251bVBhZ2VzJyxcclxuICAncGFnZU51bWJlcicsXHJcbiAgJ3NjYWxlU2VsZWN0Q29udGFpbmVyJyxcclxuICAnY3VzdG9tU2NhbGVPcHRpb24nLFxyXG4gICdwcmV2aW91cycsXHJcbiAgJ25leHQnLFxyXG4gICd6b29tSW4nLFxyXG4gICd6b29tT3V0JyxcclxuICAndmlld0ZpbmQnLFxyXG4gICdvcGVuRmlsZScsXHJcbiAgJ3ByaW50JyxcclxuICAncHJlc2VudGF0aW9uTW9kZScsXHJcbiAgJ2Rvd25sb2FkJyxcclxuICAndmlld0Jvb2ttYXJrJyxcclxuICAnc2Vjb25kYXJ5VG9vbGJhcicsXHJcbiAgJ3NlY29uZGFyeVRvb2xiYXJUb2dnbGUnLFxyXG4gICdzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyJyxcclxuICAnc2Vjb25kYXJ5UHJlc2VudGF0aW9uTW9kZScsXHJcbiAgJ3NlY29uZGFyeU9wZW5GaWxlJyxcclxuICAnc2Vjb25kYXJ5UHJpbnQnLFxyXG4gICdzZWNvbmRhcnlEb3dubG9hZCcsXHJcbiAgJ3NlY29uZGFyeVZpZXdCb29rbWFyaycsXHJcbiAgJ2ZpcnN0UGFnZScsXHJcbiAgJ2xhc3RQYWdlJyxcclxuICAncGFnZVJvdGF0ZUN3JyxcclxuICAncGFnZVJvdGF0ZUNjdycsXHJcbiAgJ2N1cnNvclNlbGVjdFRvb2wnLFxyXG4gICdjdXJzb3JIYW5kVG9vbCcsXHJcbiAgJ3Njcm9sbFZlcnRpY2FsJyxcclxuICAnc2Nyb2xsSG9yaXpvbnRhbCcsXHJcbiAgJ3Njcm9sbFdyYXBwZWQnLFxyXG4gICdzcHJlYWROb25lJyxcclxuICAnc3ByZWFkT2RkJyxcclxuICAnc3ByZWFkRXZlbicsXHJcbiAgJ2RvY3VtZW50UHJvcGVydGllcycsXHJcbiAgJ2NvbnRleHRGaXJzdFBhZ2UnLFxyXG4gICdjb250ZXh0TGFzdFBhZ2UnLFxyXG4gICdjb250ZXh0UGFnZVJvdGF0ZUN3JyxcclxuICAnY29udGV4dFBhZ2VSb3RhdGVDY3cnLFxyXG4gICdjdXJyZW50T3V0bGluZUl0ZW0nLFxyXG4gICdvdXRlckNvbnRhaW5lcicsXHJcbiAgJ3ZpZXdlckNvbnRhaW5lcicsXHJcbiAgJ3NpZGViYXJUb2dnbGUnLFxyXG4gICd2aWV3VGh1bWJuYWlsJyxcclxuICAndmlld091dGxpbmUnLFxyXG4gICd2aWV3QXR0YWNobWVudHMnLFxyXG4gICd0aHVtYm5haWxWaWV3JyxcclxuICAnb3V0bGluZVZpZXcnLFxyXG4gICdhdHRhY2htZW50c1ZpZXcnLFxyXG4gICdvdXRlckNvbnRhaW5lcicsXHJcbiAgJ3NpZGViYXJSZXNpemVyJyxcclxuICAnb3V0bGluZU9wdGlvbnNDb250YWluZXInLFxyXG4gICdmaW5kYmFyJyxcclxuICAndmlld0ZpbmQnLFxyXG4gICdmaW5kSW5wdXQnLFxyXG4gICdmaW5kSW5wdXRNdWx0aWxpbmUnLFxyXG4gICdmaW5kSGlnaGxpZ2h0QWxsJyxcclxuICAnZmluZE1hdGNoQ2FzZScsXHJcbiAgJ2ZpbmRFbnRpcmVXb3JkJyxcclxuICAnZmluZE11bHRpcGxlU2VhcmNoVGV4dHMnLFxyXG4gICdmaW5kSWdub3JlQWNjZW50cycsXHJcbiAgJ2ZpbmRNc2cnLFxyXG4gICdmaW5kUmVzdWx0c0NvdW50JyxcclxuICAnZmluZFByZXZpb3VzJyxcclxuICAnZmluZE5leHQnLFxyXG4gICdmaW5kRnV6enknLFxyXG4gICdwYXNzd29yZE92ZXJsYXknLFxyXG4gICdwYXNzd29yZFRleHQnLFxyXG4gICdwYXNzd29yZCcsXHJcbiAgJ3Bhc3N3b3JkU3VibWl0JyxcclxuICAncGFzc3dvcmRDYW5jZWwnLFxyXG4gICdkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5JyxcclxuICAnZG9jdW1lbnRQcm9wZXJ0aWVzQ2xvc2UnLFxyXG4gICdmaWxlTmFtZUZpZWxkJyxcclxuICAnZmlsZVNpemVGaWVsZCcsXHJcbiAgJ3RpdGxlRmllbGQnLFxyXG4gICdhdXRob3JGaWVsZCcsXHJcbiAgJ3N1YmplY3RGaWVsZCcsXHJcbiAgJ2tleXdvcmRzRmllbGQnLFxyXG4gICdjcmVhdGlvbkRhdGVGaWVsZCcsXHJcbiAgJ21vZGlmaWNhdGlvbkRhdGVGaWVsZCcsXHJcbiAgJ2NyZWF0b3JGaWVsZCcsXHJcbiAgJ3Byb2R1Y2VyRmllbGQnLFxyXG4gICd2ZXJzaW9uRmllbGQnLFxyXG4gICdwYWdlQ291bnRGaWVsZCcsXHJcbiAgJ3BhZ2VTaXplRmllbGQnLFxyXG4gICdsaW5lYXJpemVkRmllbGQnLFxyXG4gICdlcnJvcldyYXBwZXInLFxyXG4gICdlcnJvck1lc3NhZ2UnLFxyXG4gICdlcnJvckNsb3NlJyxcclxuICAnZXJyb3JNb3JlSW5mbycsXHJcbiAgJ2Vycm9yU2hvd01vcmUnLFxyXG4gICdlcnJvclNob3dMZXNzJyxcclxuICAnc2NhbGVTZWxlY3RDb250YWluZXInLFxyXG4gICd2aWV3QXR0YWNobWVudHMnLFxyXG4gICd2aWV3TGF5ZXJzJyxcclxuICAndmlld1RodW1ibmFpbCcsXHJcbiAgJ3ZpZXdPdXRsaW5lJyxcclxuXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLWR1bW15LWNvbXBvbmVudHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBkdW1teUNvbXBvbmVudHNDb250YWluZXI6IEVsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBhZGRNaXNzaW5nU3RhbmRhcmRXaWRnZXRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kdW1teUNvbXBvbmVudHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkdW1teS1wZGYtdmlld2VyLWNvbXBvbmVudHMnKVswXTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gY29udGFpbmVyLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVpcmVkSWRzLmZvckVhY2goaWQgPT4ge1xyXG4gICAgICBpZiAodGhpcy5uZWVkc0R1bW15V2lkZ2V0KGlkKSkge1xyXG4gICAgICAgIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGR1bW15LmlkID0gaWQ7XHJcbiAgICAgICAgZHVtbXkuY2xhc3NOYW1lID0gJ2ludmlzaWJsZSBkdW1teS1jb21wb25lbnQnO1xyXG4gICAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1bW15KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMubmVlZHNEdW1teVdpZGdldCgnc2NhbGVTZWxlY3QnKSkge1xyXG4gICAgICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICBkdW1teS5pZCA9ICdzY2FsZVNlbGVjdCc7XHJcbiAgICAgIGR1bW15LmNsYXNzTmFtZSA9ICdpbnZpc2libGUgZHVtbXktY29tcG9uZW50JztcclxuICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVtbXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBuZWVkc0R1bW15V2lkZ2V0KGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHdpZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmICghd2lkZ2V0KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCI8c3BhbiBjbGFzcz1cImludmlzaWJsZSBkdW1teS1wZGYtdmlld2VyLWNvbXBvbmVudHNcIj5cclxuPC9zcGFuPlxyXG4iXX0=
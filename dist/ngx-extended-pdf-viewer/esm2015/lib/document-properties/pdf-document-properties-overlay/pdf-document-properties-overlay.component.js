import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfDocumentPropertiesOverlayComponent {
    constructor() { }
    ngOnInit() {
    }
}
/** @nocollapse */ PdfDocumentPropertiesOverlayComponent.ɵfac = function PdfDocumentPropertiesOverlayComponent_Factory(t) { return new (t || PdfDocumentPropertiesOverlayComponent)(); };
/** @nocollapse */ PdfDocumentPropertiesOverlayComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfDocumentPropertiesOverlayComponent, selectors: [["pdf-document-properties-overlay"]], decls: 77, vars: 0, consts: [[1, "dialog"], [1, "row"], ["data-l10n-id", "document_properties_file_name"], ["id", "fileNameField"], ["data-l10n-id", "document_properties_file_size"], ["id", "fileSizeField"], ["data-l10n-id", "document_properties_title"], ["id", "titleField"], ["data-l10n-id", "document_properties_author"], ["id", "authorField"], ["data-l10n-id", "document_properties_subject"], ["id", "subjectField"], ["data-l10n-id", "document_properties_keywords"], ["id", "keywordsField"], ["data-l10n-id", "document_properties_creation_date"], ["id", "creationDateField"], ["data-l10n-id", "document_properties_modification_date"], ["id", "modificationDateField"], ["data-l10n-id", "document_properties_creator"], ["id", "creatorField"], ["data-l10n-id", "document_properties_producer"], ["id", "producerField"], ["data-l10n-id", "document_properties_version"], ["id", "versionField"], ["data-l10n-id", "document_properties_page_count"], ["id", "pageCountField"], ["data-l10n-id", "document_properties_page_size"], ["id", "pageSizeField"], [1, "separator"], ["data-l10n-id", "document_properties_linearized"], ["id", "linearizedField"], [1, "buttonRow"], ["type", "button", "id", "documentPropertiesClose", 1, "overlayButton"], ["data-l10n-id", "document_properties_close"]], template: function PdfDocumentPropertiesOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "span", 2);
        i0.ɵɵtext(4, "File name:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p", 3);
        i0.ɵɵtext(6, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 1);
        i0.ɵɵelementStart(8, "span", 4);
        i0.ɵɵtext(9, "File size:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p", 5);
        i0.ɵɵtext(11, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 1);
        i0.ɵɵelementStart(13, "span", 6);
        i0.ɵɵtext(14, "Title:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "p", 7);
        i0.ɵɵtext(16, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 1);
        i0.ɵɵelementStart(18, "span", 8);
        i0.ɵɵtext(19, "Author:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "p", 9);
        i0.ɵɵtext(21, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 1);
        i0.ɵɵelementStart(23, "span", 10);
        i0.ɵɵtext(24, "Subject:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "p", 11);
        i0.ɵɵtext(26, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 1);
        i0.ɵɵelementStart(28, "span", 12);
        i0.ɵɵtext(29, "Keywords:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "p", 13);
        i0.ɵɵtext(31, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "div", 1);
        i0.ɵɵelementStart(33, "span", 14);
        i0.ɵɵtext(34, "Creation Date:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "p", 15);
        i0.ɵɵtext(36, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "div", 1);
        i0.ɵɵelementStart(38, "span", 16);
        i0.ɵɵtext(39, "Modification Date:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "p", 17);
        i0.ɵɵtext(41, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "div", 1);
        i0.ɵɵelementStart(43, "span", 18);
        i0.ɵɵtext(44, "Creator:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "p", 19);
        i0.ɵɵtext(46, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "div", 1);
        i0.ɵɵelementStart(48, "span", 20);
        i0.ɵɵtext(49, "PDF Producer:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "p", 21);
        i0.ɵɵtext(51, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "div", 1);
        i0.ɵɵelementStart(53, "span", 22);
        i0.ɵɵtext(54, "PDF Version:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(55, "p", 23);
        i0.ɵɵtext(56, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "div", 1);
        i0.ɵɵelementStart(58, "span", 24);
        i0.ɵɵtext(59, "Page Count:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(60, "p", 25);
        i0.ɵɵtext(61, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(62, "div", 1);
        i0.ɵɵelementStart(63, "span", 26);
        i0.ɵɵtext(64, "Page Size:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "p", 27);
        i0.ɵɵtext(66, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(67, "div", 28);
        i0.ɵɵelementStart(68, "div", 1);
        i0.ɵɵelementStart(69, "span", 29);
        i0.ɵɵtext(70, "Fast Web View:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(71, "p", 30);
        i0.ɵɵtext(72, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(73, "div", 31);
        i0.ɵɵelementStart(74, "button", 32);
        i0.ɵɵelementStart(75, "span", 33);
        i0.ɵɵtext(76, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfDocumentPropertiesOverlayComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-document-properties-overlay',
                templateUrl: './pdf-document-properties-overlay.component.html',
                styleUrls: ['./pdf-document-properties-overlay.component.css']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWRvY3VtZW50LXByb3BlcnRpZXMtb3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL2RvY3VtZW50LXByb3BlcnRpZXMvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMtb3ZlcmxheS9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1vdmVybGF5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvZG9jdW1lbnQtcHJvcGVydGllcy9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1vdmVybGF5L3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLW92ZXJsYXkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFPbEQsTUFBTSxPQUFPLHFDQUFxQztJQUVoRCxnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7NklBTFUscUNBQXFDO3VIQUFyQyxxQ0FBcUM7UUNQbEQsMkJBQUs7UUFDSCw4QkFBb0I7UUFDbEIsOEJBQWlCO1FBQ2YsK0JBQ0c7UUFBQSwwQkFBVTtRQUFBLGlCQUNaO1FBQ0QsNEJBQXNCO1FBQUEsaUJBQUM7UUFBQSxpQkFBSTtRQUM3QixpQkFBTTtRQUNOLDhCQUFpQjtRQUNmLCtCQUNHO1FBQUEsMEJBQVU7UUFBQSxpQkFDWjtRQUNELDZCQUFzQjtRQUFBLGtCQUFDO1FBQUEsaUJBQUk7UUFDN0IsaUJBQU07UUFDTiwrQkFBaUI7UUFDZixnQ0FBK0M7UUFBQSx1QkFBTTtRQUFBLGlCQUFPO1FBQzVELDZCQUFtQjtRQUFBLGtCQUFDO1FBQUEsaUJBQUk7UUFDMUIsaUJBQU07UUFDTiwrQkFBaUI7UUFDZixnQ0FBZ0Q7UUFBQSx3QkFBTztRQUFBLGlCQUFPO1FBQzlELDZCQUFvQjtRQUFBLGtCQUFDO1FBQUEsaUJBQUk7UUFDM0IsaUJBQU07UUFDTiwrQkFBaUI7UUFDZixpQ0FBaUQ7UUFBQSx5QkFBUTtRQUFBLGlCQUFPO1FBQ2hFLDhCQUFxQjtRQUFBLGtCQUFDO1FBQUEsaUJBQUk7UUFDNUIsaUJBQU07UUFDTiwrQkFBaUI7UUFDZixpQ0FDRztRQUFBLDBCQUFTO1FBQUEsaUJBQ1g7UUFDRCw4QkFBc0I7UUFBQSxrQkFBQztRQUFBLGlCQUFJO1FBQzdCLGlCQUFNO1FBQ04sK0JBQWlCO1FBQ2YsaUNBQ0c7UUFBQSwrQkFBYztRQUFBLGlCQUNoQjtRQUNELDhCQUEwQjtRQUFBLGtCQUFDO1FBQUEsaUJBQUk7UUFDakMsaUJBQU07UUFDTiwrQkFBaUI7UUFDZixpQ0FDRztRQUFBLG1DQUFrQjtRQUFBLGlCQUNwQjtRQUNELDhCQUE4QjtRQUFBLGtCQUFDO1FBQUEsaUJBQUk7UUFDckMsaUJBQU07UUFDTiwrQkFBaUI7UUFDZixpQ0FBaUQ7UUFBQSx5QkFBUTtRQUFBLGlCQUFPO1FBQ2hFLDhCQUFxQjtRQUFBLGtCQUFDO1FBQUEsaUJBQUk7UUFDNUIsaUJBQU07UUFDTiwrQkFBaUI7UUFDZixpQ0FDRztRQUFBLDhCQUFhO1FBQUEsaUJBQ2Y7UUFDRCw4QkFBc0I7UUFBQSxrQkFBQztRQUFBLGlCQUFJO1FBQzdCLGlCQUFNO1FBQ04sK0JBQWlCO1FBQ2YsaUNBQ0c7UUFBQSw2QkFBWTtRQUFBLGlCQUNkO1FBQ0QsOEJBQXFCO1FBQUEsa0JBQUM7UUFBQSxpQkFBSTtRQUM1QixpQkFBTTtRQUNOLCtCQUFpQjtRQUNmLGlDQUNHO1FBQUEsNEJBQVc7UUFBQSxpQkFDYjtRQUNELDhCQUF1QjtRQUFBLGtCQUFDO1FBQUEsaUJBQUk7UUFDOUIsaUJBQU07UUFDTiwrQkFBaUI7UUFDZixpQ0FDRztRQUFBLDJCQUFVO1FBQUEsaUJBQ1o7UUFDRCw4QkFBc0I7UUFBQSxrQkFBQztRQUFBLGlCQUFJO1FBQzdCLGlCQUFNO1FBQ04sMkJBQTZCO1FBQzdCLCtCQUFpQjtRQUNmLGlDQUNHO1FBQUEsK0JBQWM7UUFBQSxpQkFDaEI7UUFDRCw4QkFBd0I7UUFBQSxrQkFBQztRQUFBLGlCQUFJO1FBQy9CLGlCQUFNO1FBQ04sZ0NBQXVCO1FBQ3JCLG1DQUF5RTtRQUN2RSxpQ0FBK0M7UUFBQSxzQkFBSztRQUFBLGlCQUFPO1FBQzdELGlCQUFTO1FBQ1gsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOzt1RkQ5RU8scUNBQXFDO2NBTGpELFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsa0RBQWtEO2dCQUMvRCxTQUFTLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQzthQUMvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLW92ZXJsYXknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1vdmVybGF5LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdj5cclxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cImRvY3VtZW50X3Byb3BlcnRpZXNfZmlsZV9uYW1lXCJcclxuICAgICAgICA+RmlsZSBuYW1lOjwvc3BhblxyXG4gICAgICA+XHJcbiAgICAgIDxwIGlkPVwiZmlsZU5hbWVGaWVsZFwiPi08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwiZG9jdW1lbnRfcHJvcGVydGllc19maWxlX3NpemVcIlxyXG4gICAgICAgID5GaWxlIHNpemU6PC9zcGFuXHJcbiAgICAgID5cclxuICAgICAgPHAgaWQ9XCJmaWxlU2l6ZUZpZWxkXCI+LTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJkb2N1bWVudF9wcm9wZXJ0aWVzX3RpdGxlXCI+VGl0bGU6PC9zcGFuPlxyXG4gICAgICA8cCBpZD1cInRpdGxlRmllbGRcIj4tPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cImRvY3VtZW50X3Byb3BlcnRpZXNfYXV0aG9yXCI+QXV0aG9yOjwvc3Bhbj5cclxuICAgICAgPHAgaWQ9XCJhdXRob3JGaWVsZFwiPi08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwiZG9jdW1lbnRfcHJvcGVydGllc19zdWJqZWN0XCI+U3ViamVjdDo8L3NwYW4+XHJcbiAgICAgIDxwIGlkPVwic3ViamVjdEZpZWxkXCI+LTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJkb2N1bWVudF9wcm9wZXJ0aWVzX2tleXdvcmRzXCJcclxuICAgICAgICA+S2V5d29yZHM6PC9zcGFuXHJcbiAgICAgID5cclxuICAgICAgPHAgaWQ9XCJrZXl3b3Jkc0ZpZWxkXCI+LTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJkb2N1bWVudF9wcm9wZXJ0aWVzX2NyZWF0aW9uX2RhdGVcIlxyXG4gICAgICAgID5DcmVhdGlvbiBEYXRlOjwvc3BhblxyXG4gICAgICA+XHJcbiAgICAgIDxwIGlkPVwiY3JlYXRpb25EYXRlRmllbGRcIj4tPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cImRvY3VtZW50X3Byb3BlcnRpZXNfbW9kaWZpY2F0aW9uX2RhdGVcIlxyXG4gICAgICAgID5Nb2RpZmljYXRpb24gRGF0ZTo8L3NwYW5cclxuICAgICAgPlxyXG4gICAgICA8cCBpZD1cIm1vZGlmaWNhdGlvbkRhdGVGaWVsZFwiPi08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwiZG9jdW1lbnRfcHJvcGVydGllc19jcmVhdG9yXCI+Q3JlYXRvcjo8L3NwYW4+XHJcbiAgICAgIDxwIGlkPVwiY3JlYXRvckZpZWxkXCI+LTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJkb2N1bWVudF9wcm9wZXJ0aWVzX3Byb2R1Y2VyXCJcclxuICAgICAgICA+UERGIFByb2R1Y2VyOjwvc3BhblxyXG4gICAgICA+XHJcbiAgICAgIDxwIGlkPVwicHJvZHVjZXJGaWVsZFwiPi08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwiZG9jdW1lbnRfcHJvcGVydGllc192ZXJzaW9uXCJcclxuICAgICAgICA+UERGIFZlcnNpb246PC9zcGFuXHJcbiAgICAgID5cclxuICAgICAgPHAgaWQ9XCJ2ZXJzaW9uRmllbGRcIj4tPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxzcGFuIGRhdGEtbDEwbi1pZD1cImRvY3VtZW50X3Byb3BlcnRpZXNfcGFnZV9jb3VudFwiXHJcbiAgICAgICAgPlBhZ2UgQ291bnQ6PC9zcGFuXHJcbiAgICAgID5cclxuICAgICAgPHAgaWQ9XCJwYWdlQ291bnRGaWVsZFwiPi08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwiZG9jdW1lbnRfcHJvcGVydGllc19wYWdlX3NpemVcIlxyXG4gICAgICAgID5QYWdlIFNpemU6PC9zcGFuXHJcbiAgICAgID5cclxuICAgICAgPHAgaWQ9XCJwYWdlU2l6ZUZpZWxkXCI+LTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJkb2N1bWVudF9wcm9wZXJ0aWVzX2xpbmVhcml6ZWRcIlxyXG4gICAgICAgID5GYXN0IFdlYiBWaWV3Ojwvc3BhblxyXG4gICAgICA+XHJcbiAgICAgIDxwIGlkPVwibGluZWFyaXplZEZpZWxkXCI+LTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvblJvd1wiPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImRvY3VtZW50UHJvcGVydGllc0Nsb3NlXCIgY2xhc3M9XCJvdmVybGF5QnV0dG9uXCI+XHJcbiAgICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwiZG9jdW1lbnRfcHJvcGVydGllc19jbG9zZVwiPkNsb3NlPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19
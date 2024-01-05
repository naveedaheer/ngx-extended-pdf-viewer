import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = ["sizeSelector"];
function PdfZoomDropdownComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const level_r2 = ctx.$implicit;
    i0.ɵɵproperty("id", level_r2.id);
    i0.ɵɵattribute("value", level_r2.value)("data-l10n-id", level_r2.dataL10nId)("data-l10n-args", level_r2.dataL10nArgs);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", level_r2.displayValue, " ");
} }
export class PdfZoomDropdownComponent {
    constructor(element) {
        this.element = element;
        this._zoomLevels = [];
    }
    // ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
    set zoomLevels(levels) {
        this._zoomLevels = levels.map((l) => this.valueToZoomLevel(l));
    }
    ngOnInit() {
        if (typeof document !== 'undefined') {
            const callback = (e) => {
                document.removeEventListener('localized', callback);
            };
            document.addEventListener('localized', callback);
        }
    }
    valueToZoomLevel(value) {
        if (value.toString().endsWith('%')) {
            value = value.toString().replace('%', '');
            value = Number(value) / 100;
        }
        const numericalValue = Number(value);
        if (!numericalValue) {
            const v = String(value);
            return {
                id: this.snakeToCamel(value + 'Option'),
                value: v,
                dataL10nId: 'page_scale_' + v.replace('page-', ''),
                dataL10nArgs: undefined,
                displayValue: v,
            };
        }
        const percentage = Math.round(numericalValue * 100);
        return {
            id: `scale_${percentage}`,
            value: String(numericalValue),
            dataL10nId: 'page_scale_percent',
            dataL10nArgs: `{ "scale": ${percentage} }`,
            displayValue: String(percentage) + '%',
        };
    }
    snakeToCamel(str) {
        // idea found here: https://hisk.io/javascript-snake-to-camel/
        return str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
    }
}
/** @nocollapse */ PdfZoomDropdownComponent.ɵfac = function PdfZoomDropdownComponent_Factory(t) { return new (t || PdfZoomDropdownComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ PdfZoomDropdownComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfZoomDropdownComponent, selectors: [["pdf-zoom-dropdown"]], viewQuery: function PdfZoomDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sizeSelector = _t.first);
    } }, inputs: { zoomLevels: "zoomLevels" }, decls: 5, vars: 1, consts: [["id", "scaleSelectContainer"], ["id", "scaleSelect", "title", "Zoom", "data-l10n-id", "zoom"], ["sizeSelector", ""], [3, "id", 4, "ngFor", "ngForOf"], ["id", "customScaleOption", "title", "", "value", "custom", "disabled", "disabled", "hidden", "true"], [3, "id"]], template: function PdfZoomDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelementStart(1, "select", 1, 2);
        i0.ɵɵtemplate(3, PdfZoomDropdownComponent_option_3_Template, 2, 5, "option", 3);
        i0.ɵɵelement(4, "option", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx._zoomLevels);
    } }, directives: [i1.NgForOf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption], styles: ["select[_ngcontent-%COMP%]{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid}#customScaleOption[_ngcontent-%COMP%]{display:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfZoomDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-zoom-dropdown',
                templateUrl: './pdf-zoom-dropdown.component.html',
                styleUrls: ['./pdf-zoom-dropdown.component.css'],
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { zoomLevels: [{
            type: Input
        }], sizeSelector: [{
            type: ViewChild,
            args: ['sizeSelector']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQXdCLEtBQUssRUFBaUIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNPakgsaUNBSTZDO0lBQzNDLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBTFAsZ0NBQWU7SUFDZix1Q0FBMEIscUNBQUEseUNBQUE7SUFHMUIsZUFDRjtJQURFLHNEQUNGOztBRENKLE1BQU0sT0FBTyx3QkFBd0I7SUFhbkMsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQVhoQyxnQkFBVyxHQUFxQixFQUFFLENBQUM7SUFXQSxDQUFDO0lBVjNDLHVGQUF1RjtJQUV2RixJQUNXLFVBQVUsQ0FBQyxNQUE4QjtRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFPRCxRQUFRO1FBQ04sSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDbkMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDckIsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUM7WUFFRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQXNCO1FBQzdDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDMUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDN0I7UUFDRCxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNuQixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsT0FBTztnQkFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUN2QyxLQUFLLEVBQUUsQ0FBQztnQkFDUixVQUFVLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDO2FBQ2hCLENBQUM7U0FDSDtRQUNELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELE9BQU87WUFDTCxFQUFFLEVBQUUsU0FBUyxVQUFVLEVBQUU7WUFDekIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDN0IsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxZQUFZLEVBQUUsY0FBYyxVQUFVLElBQUk7WUFDMUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHO1NBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLEdBQVc7UUFDOUIsOERBQThEO1FBQzlELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDOzttSEF0RFUsd0JBQXdCOzBHQUF4Qix3QkFBd0I7Ozs7OztRQ2RyQywrQkFBZ0M7UUFDOUIsb0NBS0M7UUFDQywrRUFNUztRQUNULDRCQU1RO1FBRVYsaUJBQVM7UUFDWCxpQkFBTzs7UUFoQnVCLGVBQWM7UUFBZCx5Q0FBYzs7dUZETy9CLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7NkRBT1ksVUFBVTtrQkFEcEIsS0FBSztZQU1xQixZQUFZO2tCQUF0QyxTQUFTO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmludGVyZmFjZSBab29tTGV2ZWwge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZGF0YUwxMG5JZDogc3RyaW5nO1xyXG4gIGRhdGFMMTBuQXJnczogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmc7XHJcbn1cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtem9vbS1kcm9wZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi16b29tLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtem9vbS1kcm9wZG93bi5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZab29tRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgX3pvb21MZXZlbHM6IEFycmF5PFpvb21MZXZlbD4gPSBbXTtcclxuICAvLyBbJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZS1maXQnLCAncGFnZS13aWR0aCcsIDAuNSwgMC43NSwgMSwgMS4yNSwgMS41LCAyLCAzLCA0XTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHpvb21MZXZlbHMobGV2ZWxzOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+KSB7XHJcbiAgICB0aGlzLl96b29tTGV2ZWxzID0gbGV2ZWxzLm1hcCgobCkgPT4gdGhpcy52YWx1ZVRvWm9vbUxldmVsKGwpKTtcclxuICB9XHJcblxyXG5cclxuICBAVmlld0NoaWxkKCdzaXplU2VsZWN0b3InKSBzaXplU2VsZWN0b3I6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gKGUpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2NhbGl6ZWQnLCBjYWxsYmFjayk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2NhbGl6ZWQnLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbHVlVG9ab29tTGV2ZWwodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFpvb21MZXZlbCB7XHJcbiAgICBpZiAodmFsdWUudG9TdHJpbmcoKS5lbmRzV2l0aCgnJScpKSB7XHJcbiAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKCclJywgJycpO1xyXG4gICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgLyAxMDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBudW1lcmljYWxWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBpZiAoIW51bWVyaWNhbFZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHYgPSBTdHJpbmcodmFsdWUpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiB0aGlzLnNuYWtlVG9DYW1lbCh2YWx1ZSArICdPcHRpb24nKSxcclxuICAgICAgICB2YWx1ZTogdixcclxuICAgICAgICBkYXRhTDEwbklkOiAncGFnZV9zY2FsZV8nICsgdi5yZXBsYWNlKCdwYWdlLScsICcnKSxcclxuICAgICAgICBkYXRhTDEwbkFyZ3M6IHVuZGVmaW5lZCxcclxuICAgICAgICBkaXNwbGF5VmFsdWU6IHYsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBwZXJjZW50YWdlID0gTWF0aC5yb3VuZChudW1lcmljYWxWYWx1ZSAqIDEwMCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogYHNjYWxlXyR7cGVyY2VudGFnZX1gLFxyXG4gICAgICB2YWx1ZTogU3RyaW5nKG51bWVyaWNhbFZhbHVlKSxcclxuICAgICAgZGF0YUwxMG5JZDogJ3BhZ2Vfc2NhbGVfcGVyY2VudCcsXHJcbiAgICAgIGRhdGFMMTBuQXJnczogYHsgXCJzY2FsZVwiOiAke3BlcmNlbnRhZ2V9IH1gLFxyXG4gICAgICBkaXNwbGF5VmFsdWU6IFN0cmluZyhwZXJjZW50YWdlKSArICclJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNuYWtlVG9DYW1lbChzdHI6IHN0cmluZykge1xyXG4gICAgLy8gaWRlYSBmb3VuZCBoZXJlOiBodHRwczovL2hpc2suaW8vamF2YXNjcmlwdC1zbmFrZS10by1jYW1lbC9cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFstX11bYS16XSkvZywgKGdyb3VwKSA9PiBncm91cC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoJy0nLCAnJykucmVwbGFjZSgnXycsICcnKSk7XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuIGlkPVwic2NhbGVTZWxlY3RDb250YWluZXJcIj5cclxuICA8c2VsZWN0XHJcbiAgICBpZD1cInNjYWxlU2VsZWN0XCJcclxuICAgIHRpdGxlPVwiWm9vbVwiXHJcbiAgICBkYXRhLWwxMG4taWQ9XCJ6b29tXCJcclxuICAgICNzaXplU2VsZWN0b3JcclxuICA+XHJcbiAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBfem9vbUxldmVsc1wiXHJcbiAgICAgIFtpZF09XCJsZXZlbC5pZFwiXHJcbiAgICAgIFthdHRyLnZhbHVlXT1cImxldmVsLnZhbHVlXCJcclxuICAgICAgW2F0dHIuZGF0YS1sMTBuLWlkXT1cImxldmVsLmRhdGFMMTBuSWRcIlxyXG4gICAgICBbYXR0ci5kYXRhLWwxMG4tYXJnc109XCJsZXZlbC5kYXRhTDEwbkFyZ3NcIj5cclxuICAgICAge3tsZXZlbC5kaXNwbGF5VmFsdWV9fVxyXG4gICAgPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uXHJcbiAgICBpZD1cImN1c3RvbVNjYWxlT3B0aW9uXCJcclxuICAgIHRpdGxlPVwiXCJcclxuICAgIHZhbHVlPVwiY3VzdG9tXCJcclxuICAgIGRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG4gICAgaGlkZGVuPVwidHJ1ZVwiXHJcbiAgPjwvb3B0aW9uPlxyXG5cclxuICA8L3NlbGVjdD5cclxuPC9zcGFuPlxyXG4iXX0=
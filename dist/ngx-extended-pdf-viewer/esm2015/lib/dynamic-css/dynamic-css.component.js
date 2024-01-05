import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export class DynamicCssComponent {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
        this.zoom = 1.0;
        this.width = 100;
        this.xs = 490;
        this.sm = 560;
        this.md = 610;
        this.lg = 660;
        this.xl = 740;
        this.xxl = 830;
    }
    get style() {
        return `
@media all and (max-width: ${this.xl}px) {
  #toolbarViewerMiddle {
    display: table;
    margin: auto;
    left: auto;
    position: inherit;
    transform: none;
  }
}

@media all and (max-width: 840px) {
  #sidebarContent {
    background-color: rgba(0, 0, 0, 0.7);
  }

  html[dir='ltr'] #outerContainer.sidebarOpen #viewerContainer {
    left: 0px !important;
  }
  html[dir='rtl'] #outerContainer.sidebarOpen #viewerContainer {
    right: 0px !important;
  }

  #outerContainer .hiddenLargeView,
  #outerContainer .hiddenMediumView {
    display: inherit;
  }
  #outerContainer .visibleLargeView,
  #outerContainer .visibleMediumView {
    display: none;
  }
}

@media all and (max-width: ${this.lg}px) {
  .toolbarButtonSpacer {
    width: 15px;
  }

  #outerContainer .hiddenLargeView {
    display: none;
  }
  #outerContainer .visibleLargeView {
    display: inherit;
  }
}

@media all and (max-width: ${this.md}px) {
  .toolbarButtonSpacer {
    display: none;
  }
  #outerContainer .hiddenMediumView {
    display: none;
  }
  #outerContainer .visibleMediumView {
    display: inherit;
  }
}

@media all and (max-width: ${this.sm}px) {
  #outerContainer .hiddenSmallView,
  #outerContainer .hiddenSmallView * {
    display: none;
  }
  #outerContainer .visibleSmallView {
    display: inherit;
  }
  .toolbarButtonSpacer {
    width: 0;
  }
  html[dir='ltr'] .findbar {
    left: 38px;
  }
  html[dir='rtl'] .findbar {
    right: 38px;
  }
}

@media all and (max-width: ${this.xs}px) {
  #scaleSelectContainer {
    display: none;
  }
}

#outerContainer .visibleXLView,
#outerContainer .visibleXXLView,
#outerContainer .visibleTinyView {
  display: none;
}

#outerContainer .hiddenXLView,
#outerContainer .hiddenXXLView {
  display: unset;
}

@media all and (max-width: ${this.xl}px) {
  #outerContainer .hiddenXLView {
    display: none;
  }
  #outerContainer .visibleXLView {
    display: inherit;
  }

  #toolbarViewerMiddle {
    -webkit-transform: translateX(-36%);
    transform: translateX(-36%);
    display: unset;
    margin: unset;
    left: 50%;
    position: absolute;
  }
}

@media all and (max-width: ${this.xxl}px) {
  #outerContainer .hiddenXXLView {
    display: none;
  }
  #outerContainer .visibleXXLView {
    display: inherit;
  }
}

@media all and (max-width: ${this.md}px) {
  #toolbarViewerMiddle {
    -webkit-transform: translateX(-26%);
    transform: translateX(-26%);
  }
}

@media all and (max-width: ${this.xs}px) {
  #outerContainer .hiddenTinyView,
  #outerContainer .hiddenTinyView * {
    display: none;
  }
  #outerContainer .visibleTinyView {
    display: inherit;
  }
}
  `;
    }
    ngOnInit() {
        this.injectStyle();
    }
    ngOnChanges() {
        const fullWith = this.document.body.clientWidth;
        const partialViewScale = fullWith / this.width;
        const scaleFactor = partialViewScale * (this.zoom ? this.zoom : 1);
        this.xs = scaleFactor * 490;
        this.sm = scaleFactor * 560;
        this.md = scaleFactor * 610;
        this.lg = scaleFactor * 660;
        this.xl = scaleFactor * 740;
        this.xxl = scaleFactor * 830;
        const styles = this.document.getElementById('pdf-dynamic-css');
        if (styles) {
            styles.innerHTML = this.style;
        }
    }
    injectStyle() {
        const styles = this.document.createElement('STYLE');
        styles.id = 'pdf-dynamic-css';
        styles.innerHTML = this.style;
        this.renderer.appendChild(this.document.head, styles);
    }
    ngOnDestroy() {
        const styles = this.document.getElementById('pdf-dynamic-css');
        if (styles && styles.parentElement) {
            styles.parentElement.removeChild(styles);
        }
    }
}
/** @nocollapse */ DynamicCssComponent.ɵfac = function DynamicCssComponent_Factory(t) { return new (t || DynamicCssComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ DynamicCssComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: DynamicCssComponent, selectors: [["pdf-dynamic-css"]], inputs: { zoom: "zoom", width: "width" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function DynamicCssComponent_Template(rf, ctx) { }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicCssComponent, [{
        type: Component,
        args: [{
                selector: 'pdf-dynamic-css',
                templateUrl: './dynamic-css.component.html',
                styleUrls: ['./dynamic-css.component.css']
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { zoom: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9keW5hbWljLWNzcy9keW5hbWljLWNzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBZ0MsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9sRyxNQUFNLE9BQU8sbUJBQW1CO0lBZ0s5QixZQUFvQixRQUFtQixFQUE0QixRQUFhO1FBQTVELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBNEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQTlKekUsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUdYLFVBQUssR0FBRyxHQUFHLENBQUM7UUFFWixPQUFFLEdBQUcsR0FBRyxDQUFDO1FBRVQsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVULE9BQUUsR0FBRyxHQUFHLENBQUM7UUFFVCxPQUFFLEdBQUcsR0FBRyxDQUFDO1FBRVQsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVULFFBQUcsR0FBRyxHQUFHLENBQUM7SUErSWtFLENBQUM7SUE3SXBGLElBQVcsS0FBSztRQUNkLE9BQU87NkJBQ2tCLElBQUksQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFnQ1AsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7NkJBYVAsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs2QkFZUCxJQUFJLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFtQlAsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWlCUCxJQUFJLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWtCUCxJQUFJLENBQUMsR0FBRzs7Ozs7Ozs7OzZCQVNSLElBQUksQ0FBQyxFQUFFOzs7Ozs7OzZCQU9QLElBQUksQ0FBQyxFQUFFOzs7Ozs7Ozs7R0FTakMsQ0FBQztJQUNKLENBQUM7SUFJQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2hELE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0MsTUFBTSxXQUFXLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUU3QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9ELElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVPLFdBQVc7UUFDakIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsaUJBQWlCLENBQUM7UUFDOUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxXQUFXO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFnQixDQUFDO1FBQzlFLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDakMsTUFBTSxDQUFDLGFBQXFCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7eUdBcE1VLG1CQUFtQiwyREFnS21CLFFBQVE7cUdBaEs5QyxtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7O3NCQWlLMkMsTUFBTTt1QkFBQyxRQUFRO3dCQTlKbEQsSUFBSTtrQkFEVixLQUFLO1lBSUMsS0FBSztrQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZHluYW1pYy1jc3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWNzcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1jc3MuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ3NzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgem9vbSA9IDEuMDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgd2lkdGggPSAxMDA7XHJcblxyXG4gIHB1YmxpYyB4cyA9IDQ5MDtcclxuXHJcbiAgcHVibGljIHNtID0gNTYwO1xyXG5cclxuICBwdWJsaWMgbWQgPSA2MTA7XHJcblxyXG4gIHB1YmxpYyBsZyA9IDY2MDtcclxuXHJcbiAgcHVibGljIHhsID0gNzQwO1xyXG5cclxuICBwdWJsaWMgeHhsID0gODMwO1xyXG5cclxuICBwdWJsaWMgZ2V0IHN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMueGx9cHgpIHtcclxuICAjdG9vbGJhclZpZXdlck1pZGRsZSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgI3NpZGViYXJDb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB9XHJcblxyXG4gIGh0bWxbZGlyPSdsdHInXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3ZpZXdlckNvbnRhaW5lciB7XHJcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgaHRtbFtkaXI9J3J0bCddICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjdmlld2VyQ29udGFpbmVyIHtcclxuICAgIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTGFyZ2VWaWV3LFxyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTWVkaXVtVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVMYXJnZVZpZXcsXHJcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlTWVkaXVtVmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLmxnfXB4KSB7XHJcbiAgLnRvb2xiYXJCdXR0b25TcGFjZXIge1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbkxhcmdlVmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVMYXJnZVZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy5tZH1weCkge1xyXG4gIC50b29sYmFyQnV0dG9uU3BhY2VyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTWVkaXVtVmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMuc219cHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblNtYWxsVmlldyxcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblNtYWxsVmlldyAqIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZVNtYWxsVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxuICAudG9vbGJhckJ1dHRvblNwYWNlciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbiAgaHRtbFtkaXI9J2x0ciddIC5maW5kYmFyIHtcclxuICAgIGxlZnQ6IDM4cHg7XHJcbiAgfVxyXG4gIGh0bWxbZGlyPSdydGwnXSAuZmluZGJhciB7XHJcbiAgICByaWdodDogMzhweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy54c31weCkge1xyXG4gICNzY2FsZVNlbGVjdENvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuI291dGVyQ29udGFpbmVyIC52aXNpYmxlWExWaWV3LFxyXG4jb3V0ZXJDb250YWluZXIgLnZpc2libGVYWExWaWV3LFxyXG4jb3V0ZXJDb250YWluZXIgLnZpc2libGVUaW55VmlldyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI291dGVyQ29udGFpbmVyIC5oaWRkZW5YTFZpZXcsXHJcbiNvdXRlckNvbnRhaW5lciAuaGlkZGVuWFhMVmlldyB7XHJcbiAgZGlzcGxheTogdW5zZXQ7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy54bH1weCkge1xyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuWExWaWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZVhMVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbiAgI3Rvb2xiYXJWaWV3ZXJNaWRkbGUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM2JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM2JSk7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMueHhsfXB4KSB7XHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5YWExWaWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZVhYTFZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy5tZH1weCkge1xyXG4gICN0b29sYmFyVmlld2VyTWlkZGxlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNiUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNiUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnhzfXB4KSB7XHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5UaW55VmlldyxcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblRpbnlWaWV3ICoge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlVGlueVZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuICBgO1xyXG59XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5qZWN0U3R5bGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgY29uc3QgZnVsbFdpdGggPSB0aGlzLmRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCBwYXJ0aWFsVmlld1NjYWxlID0gZnVsbFdpdGggLyB0aGlzLndpZHRoO1xyXG4gICAgY29uc3Qgc2NhbGVGYWN0b3IgPSBwYXJ0aWFsVmlld1NjYWxlICogKHRoaXMuem9vbSA/IHRoaXMuem9vbSA6IDEpO1xyXG5cclxuICAgIHRoaXMueHMgPSBzY2FsZUZhY3RvciAqIDQ5MDtcclxuICAgIHRoaXMuc20gPSBzY2FsZUZhY3RvciAqIDU2MDtcclxuICAgIHRoaXMubWQgPSBzY2FsZUZhY3RvciAqIDYxMDtcclxuICAgIHRoaXMubGcgPSBzY2FsZUZhY3RvciAqIDY2MDtcclxuICAgIHRoaXMueGwgPSBzY2FsZUZhY3RvciAqIDc0MDtcclxuICAgIHRoaXMueHhsID0gc2NhbGVGYWN0b3IgKiA4MzA7XHJcblxyXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmLWR5bmFtaWMtY3NzJyk7XHJcbiAgICBpZiAoc3R5bGVzKSB7XHJcbiAgICAgIHN0eWxlcy5pbm5lckhUTUwgPSB0aGlzLnN0eWxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbmplY3RTdHlsZSgpIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1RZTEUnKSBhcyBIVE1MU3R5bGVFbGVtZW50O1xyXG4gICAgc3R5bGVzLmlkID0gJ3BkZi1keW5hbWljLWNzcyc7XHJcbiAgICBzdHlsZXMuaW5uZXJIVE1MID0gdGhpcy5zdHlsZTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5oZWFkLCBzdHlsZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmLWR5bmFtaWMtY3NzJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoc3R5bGVzICYmIHN0eWxlcy5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIChzdHlsZXMucGFyZW50RWxlbWVudCBhcyBhbnkpLnJlbW92ZUNoaWxkKHN0eWxlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
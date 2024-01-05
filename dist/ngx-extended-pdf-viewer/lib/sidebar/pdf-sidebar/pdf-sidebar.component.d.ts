import { TemplateRef, ElementRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { PdfThumbnailDrawnEvent } from '../../events/pdf-thumbnail-drawn-event';
import * as i0 from "@angular/core";
export declare class PdfSidebarComponent {
    private elementRef;
    private ref;
    sidebarPositionTop: number;
    sidebarVisible: boolean;
    showSidebarButton: boolean;
    customSidebar: TemplateRef<any>;
    customThumbnail: TemplateRef<any>;
    thumbnailDrawn: EventEmitter<PdfThumbnailDrawnEvent>;
    hideSidebarToolbar: boolean;
    constructor(elementRef: ElementRef, ref: ChangeDetectorRef);
    showToolbarWhenNecessary(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PdfSidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PdfSidebarComponent, "pdf-sidebar", never, { "sidebarPositionTop": "sidebarPositionTop"; "sidebarVisible": "sidebarVisible"; "showSidebarButton": "showSidebarButton"; "customSidebar": "customSidebar"; "customThumbnail": "customThumbnail"; }, { "thumbnailDrawn": "thumbnailDrawn"; }, never, ["*"]>;
}

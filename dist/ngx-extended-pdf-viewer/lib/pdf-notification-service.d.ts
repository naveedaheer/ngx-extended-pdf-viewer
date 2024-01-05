import { Subject, ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PDFNotificationService {
    onPDFJSInit: Subject<void>;
    pdfjsVersion: ReplaySubject<string>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PDFNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PDFNotificationService>;
}

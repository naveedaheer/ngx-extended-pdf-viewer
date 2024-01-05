import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export class PDFNotificationService {
    constructor() {
        // this event is fired when the pdf.js library has been loaded and objects like PDFApplication are available
        this.onPDFJSInit = new Subject();
        this.pdfjsVersion = new ReplaySubject(1);
        if (typeof window !== 'undefined') {
            if (window.pdfjsLib && window.pdfjsLib.version) {
                this.pdfjsVersion.next(window.pdfjsLib.version);
            }
            else {
                this.onPDFJSInit.subscribe(() => {
                    this.pdfjsVersion.next(window.pdfjsLib.version);
                });
            }
        }
    }
}
/** @nocollapse */ PDFNotificationService.ɵfac = function PDFNotificationService_Factory(t) { return new (t || PDFNotificationService)(); };
/** @nocollapse */ PDFNotificationService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: PDFNotificationService, factory: PDFNotificationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PDFNotificationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLOUMsTUFBTSxPQUFPLHNCQUFzQjtJQU1qQztRQUxBLDRHQUE0RztRQUNyRyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFbEMsaUJBQVksR0FBRyxJQUFJLGFBQWEsQ0FBUyxDQUFDLENBQUMsQ0FBQztRQUdqRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNqQyxJQUFLLE1BQWMsQ0FBQyxRQUFRLElBQUssTUFBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFFLE1BQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDMUQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO29CQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxNQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzRCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDOzsrR0FoQlUsc0JBQXNCOzJHQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCLG1CQUZyQixNQUFNO3VGQUVQLHNCQUFzQjtjQUhsQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIHtcclxuICAvLyB0aGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHBkZi5qcyBsaWJyYXJ5IGhhcyBiZWVuIGxvYWRlZCBhbmQgb2JqZWN0cyBsaWtlIFBERkFwcGxpY2F0aW9uIGFyZSBhdmFpbGFibGVcclxuICBwdWJsaWMgb25QREZKU0luaXQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBwdWJsaWMgcGRmanNWZXJzaW9uID0gbmV3IFJlcGxheVN1YmplY3Q8c3RyaW5nPigxKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS5wZGZqc0xpYiAmJiAod2luZG93IGFzIGFueSkucGRmanNMaWIudmVyc2lvbikge1xyXG4gICAgICAgIHRoaXMucGRmanNWZXJzaW9uLm5leHQoKHdpbmRvdyBhcyBhbnkpLnBkZmpzTGliLnZlcnNpb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25QREZKU0luaXQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGRmanNWZXJzaW9uLm5leHQoKHdpbmRvdyBhcyBhbnkpLnBkZmpzTGliLnZlcnNpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
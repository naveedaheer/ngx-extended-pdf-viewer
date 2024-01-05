import { __awaiter } from "tslib";
export class PdfDocumentPropertiesExtractor {
    constructor() {
        this.pdfDateStringRegex = new RegExp('^D:' + // Prefix (required)
            '(\\d{4})' + // Year (required)
            '(\\d{2})?' + // Month (optional)
            '(\\d{2})?' + // Day (optional)
            '(\\d{2})?' + // Hour (optional)
            '(\\d{2})?' + // Minute (optional)
            '(\\d{2})?' + // Second (optional)
            '([Z|+|-])?' + // Universal time relation (optional)
            '(\\d{2})?' + // Offset hour (optional)
            // tslint:disable-next-line: quotemark
            "'?" + // Splitting apostrophe (optional)
            '(\\d{2})?' + // Offset minute (optional)
            // tslint:disable-next-line: quotemark
            "'?" // Trailing apostrophe (optional)
        );
    }
    getDocumentProperties() {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window
                .PDFViewerApplication;
            const pdfDocument = PDFViewerApplication.pdfDocument;
            const result = {};
            return pdfDocument
                .getMetadata()
                .then(({ info, metadata, contentDispositionFilename }) => {
                result.author = info.Author;
                result.creationDate = this.toDateObject(info.CreationDate);
                result.creator = info.Creator;
                result.keywords = info.Keywords;
                result.linearized = info.IsLinearized;
                result.modificationDate = this.toDateObject(info.ModDate);
                result.pdfFormatVersion = info.PDFFormatVersion;
                result.producer = info.Producer;
                result.subject = info.Subject;
                result.title = info.Title;
                if (contentDispositionFilename) {
                    result.fileName = contentDispositionFilename;
                }
                return pdfDocument.getDownloadInfo();
            })
                .then(({ length }) => {
                result.maybeFileSize = length;
                return result;
            });
        });
    }
    /** shamelessly copied from pdf.js */
    toDateObject(input) {
        // if (!input ||  typeof input !== "string")) {
        //  return null;
        //  }
        // Optional fields that don't satisfy the requirements from the regular
        // expression (such as incorrect digit counts or numbers that are out of
        // range) will fall back the defaults from the specification.
        const matches = this.pdfDateStringRegex.exec(input);
        if (!matches) {
            return null;
        }
        // JavaScript's `Date` object expects the month to be between 0 and 11
        // instead of 1 and 12, so we have to correct for that.
        const year = parseInt(matches[1], 10);
        let month = parseInt(matches[2], 10);
        month = month >= 1 && month <= 12 ? month - 1 : 0;
        let day = parseInt(matches[3], 10);
        day = day >= 1 && day <= 31 ? day : 1;
        let hour = parseInt(matches[4], 10);
        hour = hour >= 0 && hour <= 23 ? hour : 0;
        let minute = parseInt(matches[5], 10);
        minute = minute >= 0 && minute <= 59 ? minute : 0;
        let second = parseInt(matches[6], 10);
        second = second >= 0 && second <= 59 ? second : 0;
        const universalTimeRelation = matches[7] || 'Z';
        let offsetHour = parseInt(matches[8], 10);
        offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
        let offsetMinute = parseInt(matches[9], 10) || 0;
        offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
        // Universal time relation 'Z' means that the local time is equal to the
        // universal time, whereas the relations '+'/'-' indicate that the local
        // time is later respectively earlier than the universal time. Every date
        // is normalized to universal time.
        if (universalTimeRelation === '-') {
            hour += offsetHour;
            minute += offsetMinute;
        }
        else if (universalTimeRelation === '+') {
            hour -= offsetHour;
            minute -= offsetMinute;
        }
        return new Date(Date.UTC(year, month, day, hour, minute, second));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWRvY3VtZW50LXByb3BlcnRpZXMtZXh0cmFjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1leHRyYWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWlCQSxNQUFNLE9BQU8sOEJBQThCO0lBQTNDO1FBQ1UsdUJBQWtCLEdBQUcsSUFBSSxNQUFNLENBQ3JDLEtBQUssR0FBRyxvQkFBb0I7WUFDMUIsVUFBVSxHQUFHLGtCQUFrQjtZQUMvQixXQUFXLEdBQUcsbUJBQW1CO1lBQ2pDLFdBQVcsR0FBRyxpQkFBaUI7WUFDL0IsV0FBVyxHQUFHLGtCQUFrQjtZQUNoQyxXQUFXLEdBQUcsb0JBQW9CO1lBQ2xDLFdBQVcsR0FBRyxvQkFBb0I7WUFDbEMsWUFBWSxHQUFHLHFDQUFxQztZQUNwRCxXQUFXLEdBQUcseUJBQXlCO1lBQ3ZDLHNDQUFzQztZQUN0QyxJQUFJLEdBQUcsa0NBQWtDO1lBQ3pDLFdBQVcsR0FBRywyQkFBMkI7WUFDekMsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxpQ0FBaUM7U0FDekMsQ0FBQztJQW1GSixDQUFDO0lBakZjLHFCQUFxQjs7WUFDaEMsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYztpQkFDaEUsb0JBQW9CLENBQUM7WUFDeEIsTUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDO1lBRXJELE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztZQUN2QixPQUFPLFdBQVc7aUJBQ2YsV0FBVyxFQUFFO2lCQUNiLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxFQUFFLEVBQUU7Z0JBQ3ZELE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDNUIsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUNyQyxJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO2dCQUNGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDOUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNoQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3RDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUN6QyxJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDaEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNsQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDMUIsSUFBSSwwQkFBMEIsRUFBRTtvQkFDOUIsTUFBTSxDQUFDLFFBQVEsR0FBRywwQkFBMEIsQ0FBQztpQkFDOUM7Z0JBQ0QsT0FBTyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkMsQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtnQkFDbkIsTUFBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBQzlCLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRUQscUNBQXFDO0lBQzdCLFlBQVksQ0FBQyxLQUFtQjtRQUN0QywrQ0FBK0M7UUFDL0MsZ0JBQWdCO1FBQ2hCLEtBQUs7UUFFTCx1RUFBdUU7UUFDdkUsd0VBQXdFO1FBQ3hFLDZEQUE2RDtRQUM3RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsc0VBQXNFO1FBQ3RFLHVEQUF1RDtRQUN2RCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckMsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxxQkFBcUIsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ2hELElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxDQUFDLElBQUksVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsWUFBWSxHQUFHLFlBQVksSUFBSSxDQUFDLElBQUksWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUUsd0VBQXdFO1FBQ3hFLHdFQUF3RTtRQUN4RSx5RUFBeUU7UUFDekUsbUNBQW1DO1FBQ25DLElBQUkscUJBQXFCLEtBQUssR0FBRyxFQUFFO1lBQ2pDLElBQUksSUFBSSxVQUFVLENBQUM7WUFDbkIsTUFBTSxJQUFJLFlBQVksQ0FBQztTQUN4QjthQUFNLElBQUkscUJBQXFCLEtBQUssR0FBRyxFQUFFO1lBQ3hDLElBQUksSUFBSSxVQUFVLENBQUM7WUFDbkIsTUFBTSxJQUFJLFlBQVksQ0FBQztTQUN4QjtRQUVELE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZGZEb2N1bWVudEluZm8ge1xyXG4gIGF1dGhvcj86IHN0cmluZztcclxuICBjcmVhdGlvbkRhdGU/OiBEYXRlO1xyXG4gIGNyZWF0b3I/OiBzdHJpbmc7XHJcblxyXG4gIGtleXdvcmRzPzogc3RyaW5nO1xyXG4gIGxpbmVhcml6ZWQ/OiBib29sZWFuO1xyXG4gIG1heWJlRmlsZVNpemU/OiBzdHJpbmc7XHJcbiAgbW9kaWZpY2F0aW9uRGF0ZT86IERhdGU7XHJcbiAgcGRmRm9ybWF0VmVyc2lvbj86IHN0cmluZztcclxuICBwcm9kdWNlcj86IHN0cmluZztcclxuICBzdWJqZWN0Pzogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzRXh0cmFjdG9yIHtcclxuICBwcml2YXRlIHBkZkRhdGVTdHJpbmdSZWdleCA9IG5ldyBSZWdFeHAoXHJcbiAgICAnXkQ6JyArIC8vIFByZWZpeCAocmVxdWlyZWQpXHJcbiAgICAgICcoXFxcXGR7NH0pJyArIC8vIFllYXIgKHJlcXVpcmVkKVxyXG4gICAgICAnKFxcXFxkezJ9KT8nICsgLy8gTW9udGggKG9wdGlvbmFsKVxyXG4gICAgICAnKFxcXFxkezJ9KT8nICsgLy8gRGF5IChvcHRpb25hbClcclxuICAgICAgJyhcXFxcZHsyfSk/JyArIC8vIEhvdXIgKG9wdGlvbmFsKVxyXG4gICAgICAnKFxcXFxkezJ9KT8nICsgLy8gTWludXRlIChvcHRpb25hbClcclxuICAgICAgJyhcXFxcZHsyfSk/JyArIC8vIFNlY29uZCAob3B0aW9uYWwpXHJcbiAgICAgICcoW1p8K3wtXSk/JyArIC8vIFVuaXZlcnNhbCB0aW1lIHJlbGF0aW9uIChvcHRpb25hbClcclxuICAgICAgJyhcXFxcZHsyfSk/JyArIC8vIE9mZnNldCBob3VyIChvcHRpb25hbClcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBxdW90ZW1hcmtcclxuICAgICAgXCInP1wiICsgLy8gU3BsaXR0aW5nIGFwb3N0cm9waGUgKG9wdGlvbmFsKVxyXG4gICAgICAnKFxcXFxkezJ9KT8nICsgLy8gT2Zmc2V0IG1pbnV0ZSAob3B0aW9uYWwpXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcXVvdGVtYXJrXHJcbiAgICAgIFwiJz9cIiAvLyBUcmFpbGluZyBhcG9zdHJvcGhlIChvcHRpb25hbClcclxuICApO1xyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0RG9jdW1lbnRQcm9wZXJ0aWVzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpXHJcbiAgICAgIC5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IHBkZkRvY3VtZW50ID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQ7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0OiBhbnkgPSB7fTtcclxuICAgIHJldHVybiBwZGZEb2N1bWVudFxyXG4gICAgICAuZ2V0TWV0YWRhdGEoKVxyXG4gICAgICAudGhlbigoeyBpbmZvLCBtZXRhZGF0YSwgY29udGVudERpc3Bvc2l0aW9uRmlsZW5hbWUgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdC5hdXRob3IgPSBpbmZvLkF1dGhvcjtcclxuICAgICAgICByZXN1bHQuY3JlYXRpb25EYXRlID0gdGhpcy50b0RhdGVPYmplY3QoXHJcbiAgICAgICAgICBpbmZvLkNyZWF0aW9uRGF0ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzdWx0LmNyZWF0b3IgPSBpbmZvLkNyZWF0b3I7XHJcbiAgICAgICAgcmVzdWx0LmtleXdvcmRzID0gaW5mby5LZXl3b3JkcztcclxuICAgICAgICByZXN1bHQubGluZWFyaXplZCA9IGluZm8uSXNMaW5lYXJpemVkO1xyXG4gICAgICAgIHJlc3VsdC5tb2RpZmljYXRpb25EYXRlID0gdGhpcy50b0RhdGVPYmplY3QoXHJcbiAgICAgICAgICBpbmZvLk1vZERhdGVcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlc3VsdC5wZGZGb3JtYXRWZXJzaW9uID0gaW5mby5QREZGb3JtYXRWZXJzaW9uO1xyXG4gICAgICAgIHJlc3VsdC5wcm9kdWNlciA9IGluZm8uUHJvZHVjZXI7XHJcbiAgICAgIHJlc3VsdC5zdWJqZWN0ID0gaW5mby5TdWJqZWN0O1xyXG4gICAgICAgIHJlc3VsdC50aXRsZSA9IGluZm8uVGl0bGU7XHJcbiAgICAgICAgaWYgKGNvbnRlbnREaXNwb3NpdGlvbkZpbGVuYW1lKSB7XHJcbiAgICAgICAgICByZXN1bHQuZmlsZU5hbWUgPSBjb250ZW50RGlzcG9zaXRpb25GaWxlbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBkZkRvY3VtZW50LmdldERvd25sb2FkSW5mbygpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoeyBsZW5ndGggfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdC5tYXliZUZpbGVTaXplID0gbGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIHNoYW1lbGVzc2x5IGNvcGllZCBmcm9tIHBkZi5qcyAqL1xyXG4gIHByaXZhdGUgdG9EYXRlT2JqZWN0KGlucHV0OiBzdHJpbmcgfCBhbnkpOiBEYXRlIHwgbnVsbCB7XHJcbiAgICAvLyBpZiAoIWlucHV0IHx8ICB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpKSB7XHJcbiAgICAvLyAgcmV0dXJuIG51bGw7XHJcbiAgICAvLyAgfVxyXG5cclxuICAgIC8vIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGRvbid0IHNhdGlzZnkgdGhlIHJlcXVpcmVtZW50cyBmcm9tIHRoZSByZWd1bGFyXHJcbiAgICAvLyBleHByZXNzaW9uIChzdWNoIGFzIGluY29ycmVjdCBkaWdpdCBjb3VudHMgb3IgbnVtYmVycyB0aGF0IGFyZSBvdXQgb2ZcclxuICAgIC8vIHJhbmdlKSB3aWxsIGZhbGwgYmFjayB0aGUgZGVmYXVsdHMgZnJvbSB0aGUgc3BlY2lmaWNhdGlvbi5cclxuICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLnBkZkRhdGVTdHJpbmdSZWdleC5leGVjKGlucHV0KTtcclxuICAgIGlmICghbWF0Y2hlcykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBKYXZhU2NyaXB0J3MgYERhdGVgIG9iamVjdCBleHBlY3RzIHRoZSBtb250aCB0byBiZSBiZXR3ZWVuIDAgYW5kIDExXHJcbiAgICAvLyBpbnN0ZWFkIG9mIDEgYW5kIDEyLCBzbyB3ZSBoYXZlIHRvIGNvcnJlY3QgZm9yIHRoYXQuXHJcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQobWF0Y2hlc1sxXSwgMTApO1xyXG4gICAgbGV0IG1vbnRoID0gcGFyc2VJbnQobWF0Y2hlc1syXSwgMTApO1xyXG4gICAgbW9udGggPSBtb250aCA+PSAxICYmIG1vbnRoIDw9IDEyID8gbW9udGggLSAxIDogMDtcclxuICAgIGxldCBkYXkgPSBwYXJzZUludChtYXRjaGVzWzNdLCAxMCk7XHJcbiAgICBkYXkgPSBkYXkgPj0gMSAmJiBkYXkgPD0gMzEgPyBkYXkgOiAxO1xyXG4gICAgbGV0IGhvdXIgPSBwYXJzZUludChtYXRjaGVzWzRdLCAxMCk7XHJcbiAgICBob3VyID0gaG91ciA+PSAwICYmIGhvdXIgPD0gMjMgPyBob3VyIDogMDtcclxuICAgIGxldCBtaW51dGUgPSBwYXJzZUludChtYXRjaGVzWzVdLCAxMCk7XHJcbiAgICBtaW51dGUgPSBtaW51dGUgPj0gMCAmJiBtaW51dGUgPD0gNTkgPyBtaW51dGUgOiAwO1xyXG4gICAgbGV0IHNlY29uZCA9IHBhcnNlSW50KG1hdGNoZXNbNl0sIDEwKTtcclxuICAgIHNlY29uZCA9IHNlY29uZCA+PSAwICYmIHNlY29uZCA8PSA1OSA/IHNlY29uZCA6IDA7XHJcbiAgICBjb25zdCB1bml2ZXJzYWxUaW1lUmVsYXRpb24gPSBtYXRjaGVzWzddIHx8ICdaJztcclxuICAgIGxldCBvZmZzZXRIb3VyID0gcGFyc2VJbnQobWF0Y2hlc1s4XSwgMTApO1xyXG4gICAgb2Zmc2V0SG91ciA9IG9mZnNldEhvdXIgPj0gMCAmJiBvZmZzZXRIb3VyIDw9IDIzID8gb2Zmc2V0SG91ciA6IDA7XHJcbiAgICBsZXQgb2Zmc2V0TWludXRlID0gcGFyc2VJbnQobWF0Y2hlc1s5XSwgMTApIHx8IDA7XHJcbiAgICBvZmZzZXRNaW51dGUgPSBvZmZzZXRNaW51dGUgPj0gMCAmJiBvZmZzZXRNaW51dGUgPD0gNTkgPyBvZmZzZXRNaW51dGUgOiAwO1xyXG5cclxuICAgIC8vIFVuaXZlcnNhbCB0aW1lIHJlbGF0aW9uICdaJyBtZWFucyB0aGF0IHRoZSBsb2NhbCB0aW1lIGlzIGVxdWFsIHRvIHRoZVxyXG4gICAgLy8gdW5pdmVyc2FsIHRpbWUsIHdoZXJlYXMgdGhlIHJlbGF0aW9ucyAnKycvJy0nIGluZGljYXRlIHRoYXQgdGhlIGxvY2FsXHJcbiAgICAvLyB0aW1lIGlzIGxhdGVyIHJlc3BlY3RpdmVseSBlYXJsaWVyIHRoYW4gdGhlIHVuaXZlcnNhbCB0aW1lLiBFdmVyeSBkYXRlXHJcbiAgICAvLyBpcyBub3JtYWxpemVkIHRvIHVuaXZlcnNhbCB0aW1lLlxyXG4gICAgaWYgKHVuaXZlcnNhbFRpbWVSZWxhdGlvbiA9PT0gJy0nKSB7XHJcbiAgICAgIGhvdXIgKz0gb2Zmc2V0SG91cjtcclxuICAgICAgbWludXRlICs9IG9mZnNldE1pbnV0ZTtcclxuICAgIH0gZWxzZSBpZiAodW5pdmVyc2FsVGltZVJlbGF0aW9uID09PSAnKycpIHtcclxuICAgICAgaG91ciAtPSBvZmZzZXRIb3VyO1xyXG4gICAgICBtaW51dGUgLT0gb2Zmc2V0TWludXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkpO1xyXG4gIH1cclxufVxyXG4iXX0=
import { __awaiter } from "tslib";
import { NgxExtendedPdfViewerComponent } from './ngx-extended-pdf-viewer.component';
export class NgxExtendedPdfViewerService {
    constructor() { }
    findMultiple(text, options = {}) {
        options = Object.assign(Object.assign({}, options), { findMultipleSearchTexts: true });
        const searchString = text.join('\n') + '\n';
        return this.find(searchString, options);
    }
    find(text, options = {}) {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call find() later.");
            return false;
        }
        else {
            const highlightAllCheckbox = document.getElementById('findHighlightAll');
            if (highlightAllCheckbox) {
                highlightAllCheckbox.checked = options.highlightAll || false;
            }
            const matchCaseCheckbox = document.getElementById('findMatchCase');
            if (matchCaseCheckbox) {
                matchCaseCheckbox.checked = options.matchCase || false;
            }
            const entireWordCheckbox = document.getElementById('findEntireWord');
            if (entireWordCheckbox) {
                entireWordCheckbox.checked = options.wholeWords || false;
            }
            const findIgnoreAccentsCheckbox = document.getElementById('findIgnoreAccents');
            if (findIgnoreAccentsCheckbox) {
                findIgnoreAccentsCheckbox.checked = options.ignoreAccents || false;
            }
            const multipleSearchTerms = options.findMultipleSearchTexts || text.includes('\n') || false;
            const findMultipleSearchTextsCheckbox = document.getElementById('findMultipleSearchTexts');
            if (findMultipleSearchTextsCheckbox) {
                findMultipleSearchTextsCheckbox.checked = multipleSearchTerms;
            }
            const individualWordsModeCheckbox = document.getElementById('individualWordsMode');
            if (individualWordsModeCheckbox) {
                individualWordsModeCheckbox.checked = false;
            }
            const fuzzySearchCheckbox = document.getElementById('findFuzzy');
            if (fuzzySearchCheckbox) {
                fuzzySearchCheckbox.checked = options.fuzzySearch || false;
            }
            const inputField = multipleSearchTerms ? document.getElementById('findInputMultiline') : document.getElementById('findInput');
            if (inputField) {
                if (inputField instanceof HTMLTextAreaElement) {
                    inputField.value = text;
                    // todo dirty hack!
                    inputField.classList.remove('hidden');
                    document.getElementById('findInput').classList.add('hidden');
                    document.getElementById('individualWordsModeLabel').classList.remove('hidden');
                    document.getElementById('individualWordsMode').classList.remove('hidden');
                    // end of the dirty hack
                }
                else if (inputField instanceof HTMLInputElement) {
                    inputField.value = text;
                    // todo dirty hack!
                    inputField.classList.remove('hidden');
                    document.getElementById('findInputMultiline').classList.add('hidden');
                    document.getElementById('individualWordsModeLabel').classList.add('hidden');
                    document.getElementById('individualWordsMode').classList.add('hidden');
                    // end of the dirty hack
                }
                inputField.dispatchEvent(new Event('input'));
                return true;
            }
            else {
                // tslint:disable-next-line:quotemark
                console.error("Unexpected error: the input field used to search isn't part of the DOM.");
                return false;
            }
        }
    }
    findNext() {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call findNext() later.");
            return false;
        }
        else {
            const button = document.getElementById('findNext');
            if (button) {
                button.click();
                return true;
            }
            return false;
        }
    }
    findPrevious() {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call findPrevious() later.");
            return false;
        }
        else {
            const button = document.getElementById('findPrevious');
            if (button) {
                button.click();
                return true;
            }
            return false;
        }
    }
    print(printRange) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const alreadyThere = !!window['isInPDFPrintRange'] && !printRange;
        if (!alreadyThere) {
            if (!printRange) {
                printRange = {};
            }
            this.setPrintRange(printRange);
        }
        window.printPDF();
        if (!alreadyThere) {
            PDFViewerApplication.eventBus.on('afterprint', () => {
                this.removePrintRange();
            });
        }
    }
    removePrintRange() {
        window['isInPDFPrintRange'] = undefined;
        window['filteredPageCount'] = undefined;
    }
    setPrintRange(printRange) {
        const PDFViewerApplication = window.PDFViewerApplication;
        window['isInPDFPrintRange'] = (page) => this.isInPDFPrintRange(page, printRange);
        window['filteredPageCount'] = this.filteredPageCount(PDFViewerApplication.pagesCount, printRange);
    }
    filteredPageCount(pageCount, range) {
        let result = 0;
        for (let page = 1; page <= pageCount; page++) {
            if (this.isInPDFPrintRange(page, range)) {
                result++;
            }
        }
        return result;
    }
    isInPDFPrintRange(pageIndex, printRange) {
        const page = pageIndex + 1;
        if (printRange.from) {
            if (page < printRange.from) {
                return false;
            }
        }
        if (printRange.to) {
            if (page > printRange.to) {
                return false;
            }
        }
        if (printRange.excluded) {
            let e = printRange.excluded;
            if (e.some((p) => p === page)) {
                return false;
            }
        }
        if (printRange.included) {
            if (!printRange.included.some((p) => p === page)) {
                return false;
            }
        }
        return true;
    }
    getPageAsText(pageNumber) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const pdfDocument = PDFViewerApplication.pdfDocument;
        const pagePromise = pdfDocument.getPage(pageNumber);
        const extractTextSnippets = (pdfPage) => new Promise((resolve, reject) => {
            const textSnippets = pdfPage.getTextContent();
            resolve(textSnippets);
        });
        const combineTextSnippets = (textSnippets) => new Promise((resolve, reject) => {
            const text = this.convertTextInfoToText(textSnippets);
            resolve(text);
        });
        return pagePromise.then(extractTextSnippets).then(combineTextSnippets);
    }
    convertTextInfoToText(textInfo) {
        if (!textInfo) {
            return '';
        }
        return textInfo.items.map((info) => info.str).join('');
    }
    getPageAsImage(pageNumber, scale) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const pdfDocument = PDFViewerApplication.pdfDocument;
        const pagePromise = pdfDocument.getPage(pageNumber);
        const imagePromise = (pdfPage) => new Promise((resolve, reject) => {
            resolve(this.draw(pdfPage, scale));
        });
        return pagePromise.then(imagePromise);
    }
    draw(pdfPage, scale) {
        let zoomFactor = 1;
        if (scale.scale) {
            zoomFactor = scale.scale;
        }
        else if (scale.width) {
            zoomFactor = scale.width / pdfPage.getViewport({ scale: 1 }).width;
        }
        else if (scale.height) {
            zoomFactor = scale.height / pdfPage.getViewport({ scale: 1 }).height;
        }
        const viewport = pdfPage.getViewport({
            scale: zoomFactor,
        });
        const { ctx, canvas } = this.getPageDrawContext(viewport.width, viewport.height);
        const drawViewport = viewport.clone();
        const renderContext = {
            canvasContext: ctx,
            viewport: drawViewport,
        };
        const renderTask = pdfPage.render(renderContext);
        const dataUrlPromise = () => new Promise((resolve, reject) => {
            resolve(canvas.toDataURL());
        });
        return renderTask.promise.then(dataUrlPromise);
    }
    getPageDrawContext(width, height) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) {
            // tslint:disable-next-line: quotemark
            throw new Error("Couldn't create the 2d context");
        }
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        return { ctx, canvas };
    }
    getCurrentDocumentAsBlob() {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window.PDFViewerApplication;
            const data = yield PDFViewerApplication.pdfDocument.saveDocument(PDFViewerApplication.pdfDocument.annotationStorage);
            return new Blob([data], { type: 'application/pdf' });
        });
    }
    getFormData() {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window.PDFViewerApplication;
            const pdf /*: PDFDocumentProxy */ = PDFViewerApplication.pdfDocument;
            // screen DPI / PDF DPI
            const dpiRatio = 96 / 72;
            const result = [];
            for (let i = 1; i <= pdf.numPages; i++) {
                // track the current page
                const currentPage /* : PDFPageProxy */ = yield pdf.getPage(i);
                const annotations = yield currentPage.getAnnotations();
                annotations
                    .filter((a) => a.subtype === 'Widget') // get the form field annotations only
                    .forEach((a) => {
                    // get the rectangle that represent the single field
                    // and resize it according to the current DPI
                    const fieldRect = currentPage.getViewport({ scale: dpiRatio }).convertToViewportRectangle(a.rect);
                    // add the corresponding input
                    result.push({ fieldAnnotation: a, fieldRect });
                });
            }
            return result;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUF3QnBGLE1BQU0sT0FBTywyQkFBMkI7SUFDdEMsZ0JBQWUsQ0FBQztJQUVULFlBQVksQ0FBQyxJQUFtQixFQUFFLFVBQXVCLEVBQUU7UUFDaEUsT0FBTyxtQ0FDRixPQUFPLEtBQ1YsdUJBQXVCLEVBQUUsSUFBSSxHQUM5QixDQUFDO1FBQ0YsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sSUFBSSxDQUFDLElBQVksRUFBRSxVQUF1QixFQUFFO1FBQ2pELElBQUksQ0FBQyw2QkFBNkIsQ0FBQywrQkFBK0IsRUFBRTtZQUNsRSxxQ0FBcUM7WUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO1lBQ3hGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE1BQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBcUIsQ0FBQztZQUM3RixJQUFJLG9CQUFvQixFQUFFO2dCQUN4QixvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUM7YUFDOUQ7WUFDRCxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFxQixDQUFDO1lBQ3ZGLElBQUksaUJBQWlCLEVBQUU7Z0JBQ3JCLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQzthQUN4RDtZQUNELE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBcUIsQ0FBQztZQUN6RixJQUFJLGtCQUFrQixFQUFFO2dCQUN0QixrQkFBa0IsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUM7YUFDMUQ7WUFDRCxNQUFNLHlCQUF5QixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQXFCLENBQUM7WUFDbkcsSUFBSSx5QkFBeUIsRUFBRTtnQkFDN0IseUJBQXlCLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDO2FBQ3BFO1lBQ0QsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsdUJBQXVCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUM7WUFDNUYsTUFBTSwrQkFBK0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUFxQixDQUFDO1lBQy9HLElBQUksK0JBQStCLEVBQUU7Z0JBQ25DLCtCQUErQixDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQzthQUMvRDtZQUNELE1BQU0sMkJBQTJCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBcUIsQ0FBQztZQUN2RyxJQUFJLDJCQUEyQixFQUFFO2dCQUMvQiwyQkFBMkIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQzdDO1lBQ0QsTUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBcUIsQ0FBQztZQUNyRixJQUFJLG1CQUFtQixFQUFFO2dCQUN2QixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUM7YUFDNUQ7WUFDRCxNQUFNLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlILElBQUksVUFBVSxFQUFFO2dCQUNkLElBQUksVUFBVSxZQUFZLG1CQUFtQixFQUFFO29CQUM3QyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFFeEIsbUJBQW1CO29CQUNuQixVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDckMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXNCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbEYsUUFBUSxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBc0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwRyxRQUFRLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFzQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hHLHdCQUF3QjtpQkFDekI7cUJBQU0sSUFBSSxVQUFVLFlBQVksZ0JBQWdCLEVBQUU7b0JBQ2pELFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUN4QixtQkFBbUI7b0JBQ25CLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNyQyxRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFzQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzNGLFFBQVEsQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQXNCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBc0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM3Rix3QkFBd0I7aUJBQ3pCO2dCQUNELFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxxQ0FBcUM7Z0JBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMseUVBQXlFLENBQUMsQ0FBQztnQkFDekYsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO0lBQ0gsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsNkJBQTZCLENBQUMsK0JBQStCLEVBQUU7WUFDbEUscUNBQXFDO1lBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEVBQTRFLENBQUMsQ0FBQztZQUM1RixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25ELElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQywrQkFBK0IsRUFBRTtZQUNsRSxxQ0FBcUM7WUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO1lBQ2hHLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNmLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxVQUEwQjtRQUNyQyxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixVQUFVLEdBQUcsRUFBbUIsQ0FBQzthQUNsQztZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEM7UUFDQSxNQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN4QyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUVNLGFBQWEsQ0FBQyxVQUF5QjtRQUM1QyxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsVUFBMkIsQ0FBQyxDQUFDO1FBQzFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVNLGlCQUFpQixDQUFDLFNBQWlCLEVBQUUsS0FBb0I7UUFDOUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZDLE1BQU0sRUFBRSxDQUFDO2FBQ1Y7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxTQUFpQixFQUFFLFVBQXlCO1FBQ25FLE1BQU0sSUFBSSxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ25CLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELElBQUksVUFBVSxDQUFDLEVBQUUsRUFBRTtZQUNqQixJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFO2dCQUN4QixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLFFBQXlCLENBQUM7WUFDN0MsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDaEQsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sYUFBYSxDQUFDLFVBQWtCO1FBQ3JDLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixNQUFNLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7UUFFckQsTUFBTSxXQUFXLEdBQWlCLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbEUsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQ3RDLElBQUksT0FBTyxDQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM5QyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxNQUFNLG1CQUFtQixHQUFHLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FDM0MsSUFBSSxPQUFPLENBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTyxxQkFBcUIsQ0FBQyxRQUFhO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sY0FBYyxDQUFDLFVBQWtCLEVBQUUsS0FBMkI7UUFDbkUsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLE1BQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztRQUNyRCxNQUFNLFdBQVcsR0FBaUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxNQUFNLFlBQVksR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQy9CLElBQUksT0FBTyxDQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUwsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxJQUFJLENBQUMsT0FBWSxFQUFFLEtBQTJCO1FBQ3BELElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDZixVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUMxQjthQUFNLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUN0QixVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3BFO2FBQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDdEU7UUFDRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ25DLEtBQUssRUFBRSxVQUFVO1NBQ2xCLENBQUMsQ0FBQztRQUNILE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV0QyxNQUFNLGFBQWEsR0FBRztZQUNwQixhQUFhLEVBQUUsR0FBRztZQUNsQixRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDO1FBQ0YsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVqRCxNQUFNLGNBQWMsR0FBRyxHQUFHLEVBQUUsQ0FDMUIsSUFBSSxPQUFPLENBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBRUwsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU8sa0JBQWtCLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFDdEQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQXNCLENBQUM7UUFDckUsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1Isc0NBQXNDO1lBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUNuRDtRQUVELE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVwQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFWSx3QkFBd0I7O1lBQ25DLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztZQUN6RixNQUFNLElBQUksR0FBRyxNQUFNLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDckgsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7SUFFWSxXQUFXOztZQUN0QixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7WUFDekYsTUFBTSxHQUFHLENBQUMsdUJBQXVCLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDO1lBQ3JFLHVCQUF1QjtZQUN2QixNQUFNLFFBQVEsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLE1BQU0sTUFBTSxHQUFrQixFQUFFLENBQUM7WUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RDLHlCQUF5QjtnQkFDekIsTUFBTSxXQUFXLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxNQUFNLFdBQVcsR0FBRyxNQUFNLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFdkQsV0FBVztxQkFDUixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsc0NBQXNDO3FCQUM1RSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDYixvREFBb0Q7b0JBQ3BELDZDQUE2QztvQkFDN0MsTUFBTSxTQUFTLEdBQWtCLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRWpILDhCQUE4QjtvQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBERlByaW50UmFuZ2UgfSBmcm9tICcuL29wdGlvbnMvcGRmLXByaW50LXJhbmdlJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaW5kT3B0aW9ucyB7XHJcbiAgaGlnaGxpZ2h0QWxsPzogYm9vbGVhbjtcclxuICBtYXRjaENhc2U/OiBib29sZWFuO1xyXG4gIHdob2xlV29yZHM/OiBib29sZWFuO1xyXG4gIGlnbm9yZUFjY2VudHM/OiBib29sZWFuO1xyXG4gIGZpbmRNdWx0aXBsZVNlYXJjaFRleHRzPzogYm9vbGVhbjtcclxuICBmdXp6eVNlYXJjaD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBEcmF3Q29udGV4dCB7XHJcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQREZFeHBvcnRTY2FsZUZhY3RvciB7XHJcbiAgd2lkdGg/OiBudW1iZXI7XHJcbiAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gIHNjYWxlPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBmaW5kTXVsdGlwbGUodGV4dDogQXJyYXk8c3RyaW5nPiwgb3B0aW9uczogRmluZE9wdGlvbnMgPSB7fSk6IGJvb2xlYW4ge1xyXG4gICAgb3B0aW9ucyA9IHtcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgZmluZE11bHRpcGxlU2VhcmNoVGV4dHM6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2VhcmNoU3RyaW5nID0gdGV4dC5qb2luKCdcXG4nKSArICdcXG4nO1xyXG4gICAgcmV0dXJuIHRoaXMuZmluZChzZWFyY2hTdHJpbmcsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbmQodGV4dDogc3RyaW5nLCBvcHRpb25zOiBGaW5kT3B0aW9ucyA9IHt9KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIU5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhlIFBERiB2aWV3ZXIgaGFzbid0IGZpbmlzaGVkIGluaXRpYWxpemluZy4gUGxlYXNlIGNhbGwgZmluZCgpIGxhdGVyLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaGlnaGxpZ2h0QWxsQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZEhpZ2hsaWdodEFsbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmIChoaWdobGlnaHRBbGxDaGVja2JveCkge1xyXG4gICAgICAgIGhpZ2hsaWdodEFsbENoZWNrYm94LmNoZWNrZWQgPSBvcHRpb25zLmhpZ2hsaWdodEFsbCB8fCBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtYXRjaENhc2VDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kTWF0Y2hDYXNlJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaWYgKG1hdGNoQ2FzZUNoZWNrYm94KSB7XHJcbiAgICAgICAgbWF0Y2hDYXNlQ2hlY2tib3guY2hlY2tlZCA9IG9wdGlvbnMubWF0Y2hDYXNlIHx8IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGVudGlyZVdvcmRDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kRW50aXJlV29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmIChlbnRpcmVXb3JkQ2hlY2tib3gpIHtcclxuICAgICAgICBlbnRpcmVXb3JkQ2hlY2tib3guY2hlY2tlZCA9IG9wdGlvbnMud2hvbGVXb3JkcyB8fCBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmaW5kSWdub3JlQWNjZW50c0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRJZ25vcmVBY2NlbnRzJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaWYgKGZpbmRJZ25vcmVBY2NlbnRzQ2hlY2tib3gpIHtcclxuICAgICAgICBmaW5kSWdub3JlQWNjZW50c0NoZWNrYm94LmNoZWNrZWQgPSBvcHRpb25zLmlnbm9yZUFjY2VudHMgfHwgZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbXVsdGlwbGVTZWFyY2hUZXJtcyA9IG9wdGlvbnMuZmluZE11bHRpcGxlU2VhcmNoVGV4dHMgfHwgdGV4dC5pbmNsdWRlcygnXFxuJykgfHwgZmFsc2U7XHJcbiAgICAgIGNvbnN0IGZpbmRNdWx0aXBsZVNlYXJjaFRleHRzQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZE11bHRpcGxlU2VhcmNoVGV4dHMnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBpZiAoZmluZE11bHRpcGxlU2VhcmNoVGV4dHNDaGVja2JveCkge1xyXG4gICAgICAgIGZpbmRNdWx0aXBsZVNlYXJjaFRleHRzQ2hlY2tib3guY2hlY2tlZCA9IG11bHRpcGxlU2VhcmNoVGVybXM7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaW5kaXZpZHVhbFdvcmRzTW9kZUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGl2aWR1YWxXb3Jkc01vZGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBpZiAoaW5kaXZpZHVhbFdvcmRzTW9kZUNoZWNrYm94KSB7XHJcbiAgICAgICAgaW5kaXZpZHVhbFdvcmRzTW9kZUNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmdXp6eVNlYXJjaENoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRGdXp6eScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmIChmdXp6eVNlYXJjaENoZWNrYm94KSB7XHJcbiAgICAgICAgZnV6enlTZWFyY2hDaGVja2JveC5jaGVja2VkID0gb3B0aW9ucy5mdXp6eVNlYXJjaCB8fCBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpbnB1dEZpZWxkID0gbXVsdGlwbGVTZWFyY2hUZXJtcyA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kSW5wdXRNdWx0aWxpbmUnKSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kSW5wdXQnKTtcclxuICAgICAgaWYgKGlucHV0RmllbGQpIHtcclxuICAgICAgICBpZiAoaW5wdXRGaWVsZCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcclxuICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSB0ZXh0O1xyXG5cclxuICAgICAgICAgIC8vIHRvZG8gZGlydHkgaGFjayFcclxuICAgICAgICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmRpdmlkdWFsV29yZHNNb2RlTGFiZWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kaXZpZHVhbFdvcmRzTW9kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgLy8gZW5kIG9mIHRoZSBkaXJ0eSBoYWNrXHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dEZpZWxkIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgICAvLyB0b2RvIGRpcnR5IGhhY2shXHJcbiAgICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kSW5wdXRNdWx0aWxpbmUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kaXZpZHVhbFdvcmRzTW9kZUxhYmVsJykgYXMgSFRNTElucHV0RWxlbWVudCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGl2aWR1YWxXb3Jkc01vZGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgIC8vIGVuZCBvZiB0aGUgZGlydHkgaGFja1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dEZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuZXhwZWN0ZWQgZXJyb3I6IHRoZSBpbnB1dCBmaWVsZCB1c2VkIHRvIHNlYXJjaCBpc24ndCBwYXJ0IG9mIHRoZSBET00uXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbmROZXh0KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBQREYgdmlld2VyIGhhc24ndCBmaW5pc2hlZCBpbml0aWFsaXppbmcuIFBsZWFzZSBjYWxsIGZpbmROZXh0KCkgbGF0ZXIuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZE5leHQnKTtcclxuICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5jbGljaygpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kUHJldmlvdXMoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIU5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhlIFBERiB2aWV3ZXIgaGFzbid0IGZpbmlzaGVkIGluaXRpYWxpemluZy4gUGxlYXNlIGNhbGwgZmluZFByZXZpb3VzKCkgbGF0ZXIuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZFByZXZpb3VzJyk7XHJcbiAgICAgIGlmIChidXR0b24pIHtcclxuICAgICAgICBidXR0b24uY2xpY2soKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJpbnQocHJpbnRSYW5nZT86IFBERlByaW50UmFuZ2UpIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCBhbHJlYWR5VGhlcmUgPSAhIXdpbmRvd1snaXNJblBERlByaW50UmFuZ2UnXSAmJiAhcHJpbnRSYW5nZTtcclxuICAgIGlmICghYWxyZWFkeVRoZXJlKSB7XHJcbiAgICAgIGlmICghcHJpbnRSYW5nZSkge1xyXG4gICAgICAgIHByaW50UmFuZ2UgPSB7fSBhcyBQREZQcmludFJhbmdlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0UHJpbnRSYW5nZShwcmludFJhbmdlKTtcclxuICAgIH1cclxuICAgICh3aW5kb3cgYXMgYW55KS5wcmludFBERigpO1xyXG4gICAgaWYgKCFhbHJlYWR5VGhlcmUpIHtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2FmdGVycHJpbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVQcmludFJhbmdlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVByaW50UmFuZ2UoKSB7XHJcbiAgICB3aW5kb3dbJ2lzSW5QREZQcmludFJhbmdlJ10gPSB1bmRlZmluZWQ7XHJcbiAgICB3aW5kb3dbJ2ZpbHRlcmVkUGFnZUNvdW50J10gPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UHJpbnRSYW5nZShwcmludFJhbmdlOiBQREZQcmludFJhbmdlKSB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgd2luZG93Wydpc0luUERGUHJpbnRSYW5nZSddID0gKHBhZ2U6IG51bWJlcikgPT4gdGhpcy5pc0luUERGUHJpbnRSYW5nZShwYWdlLCBwcmludFJhbmdlIGFzIFBERlByaW50UmFuZ2UpO1xyXG4gICAgd2luZG93WydmaWx0ZXJlZFBhZ2VDb3VudCddID0gdGhpcy5maWx0ZXJlZFBhZ2VDb3VudChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlc0NvdW50LCBwcmludFJhbmdlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaWx0ZXJlZFBhZ2VDb3VudChwYWdlQ291bnQ6IG51bWJlciwgcmFuZ2U6IFBERlByaW50UmFuZ2UpOiBudW1iZXIge1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBmb3IgKGxldCBwYWdlID0gMTsgcGFnZSA8PSBwYWdlQ291bnQ7IHBhZ2UrKykge1xyXG4gICAgICBpZiAodGhpcy5pc0luUERGUHJpbnRSYW5nZShwYWdlLCByYW5nZSkpIHtcclxuICAgICAgICByZXN1bHQrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0luUERGUHJpbnRSYW5nZShwYWdlSW5kZXg6IG51bWJlciwgcHJpbnRSYW5nZTogUERGUHJpbnRSYW5nZSkge1xyXG4gICAgY29uc3QgcGFnZSA9IHBhZ2VJbmRleCArIDE7XHJcbiAgICBpZiAocHJpbnRSYW5nZS5mcm9tKSB7XHJcbiAgICAgIGlmIChwYWdlIDwgcHJpbnRSYW5nZS5mcm9tKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocHJpbnRSYW5nZS50bykge1xyXG4gICAgICBpZiAocGFnZSA+IHByaW50UmFuZ2UudG8pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwcmludFJhbmdlLmV4Y2x1ZGVkKSB7XHJcbiAgICAgIGxldCBlID0gcHJpbnRSYW5nZS5leGNsdWRlZCBhcyBBcnJheTxudW1iZXI+O1xyXG4gICAgICBpZiAoZS5zb21lKChwKSA9PiBwID09PSBwYWdlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHByaW50UmFuZ2UuaW5jbHVkZWQpIHtcclxuICAgICAgaWYgKCFwcmludFJhbmdlLmluY2x1ZGVkLnNvbWUoKHApID0+IHAgPT09IHBhZ2UpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQYWdlQXNUZXh0KHBhZ2VOdW1iZXI6IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgcGRmRG9jdW1lbnQgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudDtcclxuXHJcbiAgICBjb25zdCBwYWdlUHJvbWlzZTogUHJvbWlzZTxhbnk+ID0gcGRmRG9jdW1lbnQuZ2V0UGFnZShwYWdlTnVtYmVyKTtcclxuXHJcbiAgICBjb25zdCBleHRyYWN0VGV4dFNuaXBwZXRzID0gKHBkZlBhZ2UpID0+XHJcbiAgICAgIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRleHRTbmlwcGV0cyA9IHBkZlBhZ2UuZ2V0VGV4dENvbnRlbnQoKTtcclxuICAgICAgICByZXNvbHZlKHRleHRTbmlwcGV0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgY29uc3QgY29tYmluZVRleHRTbmlwcGV0cyA9ICh0ZXh0U25pcHBldHMpID0+XHJcbiAgICAgIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmNvbnZlcnRUZXh0SW5mb1RvVGV4dCh0ZXh0U25pcHBldHMpO1xyXG4gICAgICAgIHJlc29sdmUodGV4dCk7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHBhZ2VQcm9taXNlLnRoZW4oZXh0cmFjdFRleHRTbmlwcGV0cykudGhlbihjb21iaW5lVGV4dFNuaXBwZXRzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFRleHRJbmZvVG9UZXh0KHRleHRJbmZvOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0ZXh0SW5mbykge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dEluZm8uaXRlbXMubWFwKChpbmZvKSA9PiBpbmZvLnN0cikuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UGFnZUFzSW1hZ2UocGFnZU51bWJlcjogbnVtYmVyLCBzY2FsZTogUERGRXhwb3J0U2NhbGVGYWN0b3IpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IHBkZkRvY3VtZW50ID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQ7XHJcbiAgICBjb25zdCBwYWdlUHJvbWlzZTogUHJvbWlzZTxhbnk+ID0gcGRmRG9jdW1lbnQuZ2V0UGFnZShwYWdlTnVtYmVyKTtcclxuICAgIGNvbnN0IGltYWdlUHJvbWlzZSA9IChwZGZQYWdlKSA9PlxyXG4gICAgICBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuZHJhdyhwZGZQYWdlLCBzY2FsZSkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGFnZVByb21pc2UudGhlbihpbWFnZVByb21pc2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3KHBkZlBhZ2U6IGFueSwgc2NhbGU6IFBERkV4cG9ydFNjYWxlRmFjdG9yKTogUHJvbWlzZTxIVE1MQ2FudmFzRWxlbWVudD4ge1xyXG4gICAgbGV0IHpvb21GYWN0b3IgPSAxO1xyXG4gICAgaWYgKHNjYWxlLnNjYWxlKSB7XHJcbiAgICAgIHpvb21GYWN0b3IgPSBzY2FsZS5zY2FsZTtcclxuICAgIH0gZWxzZSBpZiAoc2NhbGUud2lkdGgpIHtcclxuICAgICAgem9vbUZhY3RvciA9IHNjYWxlLndpZHRoIC8gcGRmUGFnZS5nZXRWaWV3cG9ydCh7IHNjYWxlOiAxIH0pLndpZHRoO1xyXG4gICAgfSBlbHNlIGlmIChzY2FsZS5oZWlnaHQpIHtcclxuICAgICAgem9vbUZhY3RvciA9IHNjYWxlLmhlaWdodCAvIHBkZlBhZ2UuZ2V0Vmlld3BvcnQoeyBzY2FsZTogMSB9KS5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2aWV3cG9ydCA9IHBkZlBhZ2UuZ2V0Vmlld3BvcnQoe1xyXG4gICAgICBzY2FsZTogem9vbUZhY3RvcixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBjdHgsIGNhbnZhcyB9ID0gdGhpcy5nZXRQYWdlRHJhd0NvbnRleHQodmlld3BvcnQud2lkdGgsIHZpZXdwb3J0LmhlaWdodCk7XHJcbiAgICBjb25zdCBkcmF3Vmlld3BvcnQgPSB2aWV3cG9ydC5jbG9uZSgpO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlckNvbnRleHQgPSB7XHJcbiAgICAgIGNhbnZhc0NvbnRleHQ6IGN0eCxcclxuICAgICAgdmlld3BvcnQ6IGRyYXdWaWV3cG9ydCxcclxuICAgIH07XHJcbiAgICBjb25zdCByZW5kZXJUYXNrID0gcGRmUGFnZS5yZW5kZXIocmVuZGVyQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgZGF0YVVybFByb21pc2UgPSAoKSA9PlxyXG4gICAgICBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICByZXNvbHZlKGNhbnZhcy50b0RhdGFVUkwoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZW5kZXJUYXNrLnByb21pc2UudGhlbihkYXRhVXJsUHJvbWlzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhZ2VEcmF3Q29udGV4dCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IERyYXdDb250ZXh0IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywgeyBhbHBoYTogZmFsc2UgfSk7XHJcbiAgICBpZiAoIWN0eCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHF1b3RlbWFya1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBjcmVhdGUgdGhlIDJkIGNvbnRleHRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcblxyXG4gICAgcmV0dXJuIHsgY3R4LCBjYW52YXMgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRDdXJyZW50RG9jdW1lbnRBc0Jsb2IoKTogUHJvbWlzZTxCbG9iPiB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50LnNhdmVEb2N1bWVudChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5hbm5vdGF0aW9uU3RvcmFnZSk7XHJcbiAgICByZXR1cm4gbmV3IEJsb2IoW2RhdGFdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9wZGYnIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldEZvcm1EYXRhKCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IHBkZiAvKjogUERGRG9jdW1lbnRQcm94eSAqLyA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50O1xyXG4gICAgLy8gc2NyZWVuIERQSSAvIFBERiBEUElcclxuICAgIGNvbnN0IGRwaVJhdGlvID0gOTYgLyA3MjtcclxuICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGRmLm51bVBhZ2VzOyBpKyspIHtcclxuICAgICAgLy8gdHJhY2sgdGhlIGN1cnJlbnQgcGFnZVxyXG4gICAgICBjb25zdCBjdXJyZW50UGFnZSAvKiA6IFBERlBhZ2VQcm94eSAqLyA9IGF3YWl0IHBkZi5nZXRQYWdlKGkpO1xyXG4gICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IGF3YWl0IGN1cnJlbnRQYWdlLmdldEFubm90YXRpb25zKCk7XHJcblxyXG4gICAgICBhbm5vdGF0aW9uc1xyXG4gICAgICAgIC5maWx0ZXIoKGEpID0+IGEuc3VidHlwZSA9PT0gJ1dpZGdldCcpIC8vIGdldCB0aGUgZm9ybSBmaWVsZCBhbm5vdGF0aW9ucyBvbmx5XHJcbiAgICAgICAgLmZvckVhY2goKGEpID0+IHtcclxuICAgICAgICAgIC8vIGdldCB0aGUgcmVjdGFuZ2xlIHRoYXQgcmVwcmVzZW50IHRoZSBzaW5nbGUgZmllbGRcclxuICAgICAgICAgIC8vIGFuZCByZXNpemUgaXQgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IERQSVxyXG4gICAgICAgICAgY29uc3QgZmllbGRSZWN0OiBBcnJheTxudW1iZXI+ID0gY3VycmVudFBhZ2UuZ2V0Vmlld3BvcnQoeyBzY2FsZTogZHBpUmF0aW8gfSkuY29udmVydFRvVmlld3BvcnRSZWN0YW5nbGUoYS5yZWN0KTtcclxuXHJcbiAgICAgICAgICAvLyBhZGQgdGhlIGNvcnJlc3BvbmRpbmcgaW5wdXRcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKHsgZmllbGRBbm5vdGF0aW9uOiBhLCBmaWVsZFJlY3QgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=
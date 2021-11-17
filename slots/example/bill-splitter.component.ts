import { Component } from '@angular/core';

@Component({
    selector: 'bill-splitter', // eslint-disable-line
    templateUrl: './bill-splitter.component.html',
})
export class BillSplitterComponent {
    names: Array<string> = [];
}

import { Component } from '@angular/core';

import { SlottedComponent } from '../../slotted.component';

@Component({
    selector: 'receipt', // eslint-disable-line
    templateUrl: './receipt.component.html',
    styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent extends SlottedComponent {
    total: number;
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlotsModule } from '../slots.module';

import { BillSplitterComponent } from './bill-splitter.component';
import { ReceiptComponent } from './components/receipt.component';

const COMPONENTS = [BillSplitterComponent, ReceiptComponent];

@NgModule({
    imports: [CommonModule, SlotsModule],
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class BillSplitterModule {}

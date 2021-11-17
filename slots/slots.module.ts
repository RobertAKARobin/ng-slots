import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Slot } from './slot.directive';
import { SlotOutput } from './slot-output.directive';
// import { SlottedComponent } from './slotted.component';

const COMPONENTS = [Slot, SlotOutput];

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class SlotsModule {}

import { Component, ContentChildren, QueryList } from '@angular/core';

import { Slot } from './slot.directive';

/**
 * Extend this class when you want to use slots.
 */
@Component({
    template: '',
})
export abstract class SlottedComponent {
    @ContentChildren(Slot)
    private allSlots: QueryList<Slot>;

    /**
     * Returns the first slot with the matching index or name. If nothing is specified, returns the first slot.
     * @param key
     */
    slot(key?: string | number): Slot {
        if (!key) {
            return this.allSlots.get(0);
        } else if (typeof key === 'number') {
            return this.allSlots.get(key);
        } else {
            return this.allSlots.find((slot) => slot.name === key);
        }
    }

    /**
     * Returns all slots with the matching name. If no name is specified, returns all slots that do not have a name.
     * @param key
     * @returns
     */
    slots(name?: string): Array<Slot> {
        if (!name) {
            return this.allSlots.filter((slot) => !slot.name);
        } else if (name === '*') {
            return this.allSlots.toArray();
        } else {
            return this.allSlots.filter((slot) => slot.name === name);
        }
    }
}

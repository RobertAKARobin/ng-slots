import {
    Directive,
    EmbeddedViewRef,
    Input,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { Slot } from './slot.directive';

type PutTemplate = Slot | TemplateRef<unknown>;
type PutContext = NgTemplateOutlet['ngTemplateOutletContext'];

const SELECTOR = 'put';

@Directive({
    selector: `[${SELECTOR}]`, // eslint-disable-line
})
export class SlotOutput { // eslint-disable-line
    contents: EmbeddedViewRef<unknown>;
    template: PutTemplate;

    @Input(SELECTOR)
    set slot(input: PutTemplate | [PutTemplate, PutContext]) {
        let template: PutTemplate, context: PutContext;

        if (Array.isArray(input)) {
            [template, context] = input;
        } else {
            template = input;
        }

        if (template !== this.template) {
            this.template = template;
            this.viewContainer.clear();
            this.contents = this.viewContainer.createEmbeddedView(
                template instanceof Slot ? template.template : template
            );
            // this.viewContainer.createEmbeddedView(this.templateRef);
        }

        this.contents.context = { $implicit: context };
    }

    constructor(
        private templateRef: TemplateRef<unknown>,
        private viewContainer: ViewContainerRef
    ) {}
}

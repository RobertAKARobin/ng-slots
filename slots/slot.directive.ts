import {
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

const SELECTOR = 'slot';

@Directive({
    selector: `[${SELECTOR}]`, // eslint-disable-line
})
export class Slot<Context = any> implements OnInit { // eslint-disable-line
    name: string;
    data: Context;

    @Input(SELECTOR)
    set stuff(input: string | Context | [string, Context]) {
        if (Array.isArray(input)) {
            this.name = input[0];
            this.data = input[1];
        } else if (typeof input === 'string') {
            this.name = input;
        } else {
            this.data = input;
        }
    }

    constructor(
        public template: TemplateRef<unknown>,
        private viewContainer: ViewContainerRef
    ) {}

    ngOnInit(): void {
        this.viewContainer.createEmbeddedView(this.template);
    }
}

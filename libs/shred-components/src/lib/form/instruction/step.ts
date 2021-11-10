import { FormControl } from '@angular/forms';

export class StepInstruction {
    numberStep : string;
    numberStepStrong : string;
    hasStepStrong : boolean;
    validation : any;
    isRegex : boolean;
    style : string;
    get _style() : string {
        return this.style;
    }
}
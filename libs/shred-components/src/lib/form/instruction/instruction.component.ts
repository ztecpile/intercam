import { Component, OnInit, Input } from '@angular/core';
import { StepInstruction } from './step';
import { FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'idb-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
  title : string;
  steps : StepInstruction[];
  heigth : string;
  width : string;
  marginLeft : string;
 
  @Input() formControl : FormControl;
  @Input() set instructions(values : string []) {
    this.setValues(values);
  };  
  
  constructor(private validationService : ValidationService) { }

  ngOnInit(): void {
  }

  setValues(values : string []) {
    let name = values["Name"];
    let numberSteps = parseInt(values["NumberSteps"]);
    let steps = new Array(numberSteps);
    
    this.heigth = values["Height"];
    this.width = values["Width"];
    this.marginLeft = values["MarginLeft"];
    this.title = name + "." + values["Title"];
   // step : StepInstruction;
    for(let i = 0; i < numberSteps ; i++) {
      var tmp = new StepInstruction();
      var nameStep = name + "." + "Step" + ( i + 1) ;
      tmp.numberStep = nameStep;
      tmp.hasStepStrong = values["Steps"]["Step" + (i+1)]["Strong"] == 0 ? false : true;
      tmp.numberStepStrong = name + "." + "Step" + ( i + 1) + "_strong";
      tmp.validation = values["Steps"]["Step" + (i+1)]["Validation"];
      tmp.isRegex = values["Steps"]["Step" + (i+1)]["isRegex"]
      tmp.style = this.getStyle(tmp);
      steps[i] = tmp; 
    }
    this.steps = steps;
  }

  getStyle(tmp : StepInstruction) : string {
    let _style = "";
    if(tmp.isRegex) {
      if(tmp.validation != undefined) {
        let exp = new RegExp(tmp.validation);
        if(exp.test(this.formControl.value)) {
            _style = "ico_paloma";
        } 
      }
    } else {
      let methodName = tmp.validation;
      if(this.validationService[methodName]) {
        _style = this.validationService[methodName](this.formControl.value) ? "ico_paloma" : ""; // call it
    }
    }
    return _style;
  }

}

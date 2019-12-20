import {
  Component,
  OnInit,
  Input,
  ContentChild,
  AfterContentInit,
  ElementRef,
  HostBinding
} from "@angular/core";

import { InputRefDirective } from "../common/input-ref.directive";

@Component({
  selector: "au-fa-input",
  templateUrl: "./au-fa-input.component.html",
  styleUrls: ["./au-fa-input.component.css"]
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  @Input()
  iconClass: string;

  // @ContentChild("emailInput", { read: HTMLInputElement, static: false })
  // input: HTMLInputElement;

  @ContentChild(InputRefDirective, { static: false })
  input: InputRefDirective;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    if (!this.input) {
      console.log("Please Project an Input inside au-fa-input selector");
    }
  }

  @HostBinding("class.input-focus")
  get inpuFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {
      fa: true
    };
    if (this.iconClass) {
      cssClasses["fa-" + this.iconClass] = true;
    }
    return cssClasses;
  }
}

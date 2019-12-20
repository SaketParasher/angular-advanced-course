import { Directive, HostListener } from "@angular/core";

// we will use this directive to read the projected input. so it's selector is au-fa-input input i.e. an input which is inside
// au-fa-input tag.

@Directive({
  selector: "au-fa-input input"
})
export class InputRefDirective {
  focus = false;

  constructor() {}

  @HostListener("focus")
  onFocus() {
    this.focus = true;
  }

  @HostListener("blur")
  onBlur() {
    this.focus = false;
  }
}

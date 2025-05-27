import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightHover]'
})
export class HighlightHoverDirective {

  constructor() { }

  isHighlighted = false;

  @HostBinding('style.boxShadow')
  get cssStyle() {
    if(this.isHighlighted)
    {
      return "0 1rem 3rem rgba(233, 19, 165, 0.54)";
    }
    return "";
  }

  @HostListener('mouseover') 
  mouseOver()
  {
    this.isHighlighted = true;
  }
  
  @HostListener('mouseleave')
  mouseLeave()
  {
    this.isHighlighted = false;
  }
}

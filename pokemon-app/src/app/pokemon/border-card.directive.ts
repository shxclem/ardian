import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor : string = '#f5f5f5';
  private defaultColor : string = "#ee6e73";
  private defaultHeight : number = 220;


  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorderCol(this.initialColor);
  }

  @Input('pkmnBorderCard') borderColor: string | undefined;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderCol(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderCol(this.initialColor);
  }

  setHeight(height : number) {
    this.el.nativeElement.style.height = height + 'px';
  }

  setBorderCol(color : string) {
    this.el.nativeElement.style.border = 'solid 4px ' + color;
  }

}
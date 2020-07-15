import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighlight')
  highlightColor: string;

  constructor(private readonly el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    // this.highlight('yellow');
    this.highlight(this.highlightColor);
    console.log('highlightColor: ', this.highlightColor);
    return;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight(null);
    return;
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
    return;
  }
}

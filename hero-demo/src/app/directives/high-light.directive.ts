import { Directive ,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color="yellow"
   }

   @HostListener('mouseenter') onmouseenter(){
     this.highlight('red');
   }

  //  @HostListener('mouseleave') onMouseLeave() {
  //     this.highlight('yellow');
  //   }


   private highlight(color:string):void{
      this.el.nativeElement.style.color="red"
   }

}

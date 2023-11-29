import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {

    constructor(private renderer: Renderer2,
        private elRef: ElementRef) {
    }

    //Works, but does not close the ddl from click outside the ddl
    // @HostListener('click') toggleOpen(eventData: Event) {
    //     this.isOpen = !this.isOpen;       
    // }

    //Closes the ddl from click outside the ddl
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    //Simpler way to do it: bind to the array of classes of the element: add and remove it dynamically
    @HostBinding('class.open') isOpen = false;
}
import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[expandMenu]'
})
export class ExpandMenu{
    @HostBinding('class.active') isOpen = false;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}
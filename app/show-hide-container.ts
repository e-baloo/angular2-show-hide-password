import {Component, ContentChild} from '@angular/core';

@Component({ selector: 'show-hide-container',
            template: `<ng-content></ng-content>
                       <a (click)="toggleShow($event)">show/hide</a>`
})
export class ShowHideContainer 
{
    show = false;
    
    @ContentChild('showhideinput') input;
    
    constructor(){}
   
    toggleShow()
    {
        this.show = !this.show;
        console.log(this.input);
        if (this.show){
            this.input.nativeElement.type='text';
        }
        else {
            this.input.nativeElement.type='password';
        }
    }
}
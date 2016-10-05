import {Component, Output, EventEmitter} from '@angular/core';

@Component({ selector: 'show-hide-container',
            template: `<ng-content></ng-content>
                       <a (click)="toggleInput()">show/hide</a>`
})
export class ShowHideContainer 
{
    @Output() changeInputType: EventEmitter<string> = new EventEmitter();
    type: string = "password";
    
    constructor(){}
   
    toggleInput():void
    {
        if (this.type==="password")
        {
            this.type = "text";
        }
        else
        {
            this.type = "password";
        }
        this.changeInputType.emit(this.type);
    }
}
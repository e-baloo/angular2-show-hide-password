import {Component, ContentChild  } from 'angular2/core'
import {ShowHideInput} from './show-hide-input'

@Component({ selector: 'show-hide-container',
            template: `<ng-content></ng-content>
                       <a (click)="toggleShow($event)">show/hide</a>`,
            styles: ['.show-hide {padding-right: 16px;}'],
            directives: [ShowHideInput]
})
export class ShowHideContainer 
{
    show = false;
    
    @ContentChild(ShowHideInput) input: ShowHideInput;
    
    constructor(){}
   
    toggleShow()
    {
        this.show = !this.show;
        if (this.show){
            this.input.changeType("text");
        }
        else {
            this.input.changeType("password");
        }
    }
}
import {Directive, HostBinding} from '@angular/core';

@Directive({ selector: '[show-hide-input]'
})
export class ShowHideInput
{
    
    @HostBinding('type') inputType;
   
    constructor(){
        this.inputType='password';
    }
    
    changeType(type:string): void {
        this.inputType = type;
    }
}
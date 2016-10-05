import {Component} from '@angular/core';
import {ShowHideContainer} from './show-hide-container'

@Component({
    selector: 'show-hide-app',
    template: `
    <h1>Show/Hide Password</h1>
    <label>Password:</label>
    <show-hide-container (changeInputType)="inputTypeChanged($event)">
       <input type="{{type}}" [ngModel]="password" />
    </show-hide-container>`
})
export class AppComponent {
    password = "secret";
    type: string = "password";

    inputTypeChanged(type:string){
         console.log('test:' + type);
       
        this.type = type;
    }
}

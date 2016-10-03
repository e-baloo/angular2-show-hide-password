import {Component, NgModule} from '@angular/core';
import {ShowHideContainer} from './show-hide-container'
import {ShowHideInput} from './show-hide-input'

@Component({
    selector: 'show-hide-app',
    template: `
    <h1>Show/Hide Password</h1>
    <label>Password:</label>
    <show-hide-container>
       <input type="password" show-hide-input [ngModel]="password" />
    </show-hide-container>
  `,
  viewProviders: [ShowHideContainer, ShowHideInput]
})
export class AppComponent {
    password = "secret";
}

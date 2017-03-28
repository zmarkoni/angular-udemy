import {Component} from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    templateUrl: './warning-alert.component.html',
    styles: [`
        p { 
            padding: 20px;
            border: 1px solid red;
            background: mistyrose;
        }
    `]
})
export class WarningAlertComponent {
    warning: string = 'This is the last warning, you are in Danger';
}
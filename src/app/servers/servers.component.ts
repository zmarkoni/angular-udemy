import { Component } from '@angular/core';

@Component({
    selector: 'app-servers',
    // selector: '[app-servers]',
    // selector: '.app-servers',
    templateUrl: './servers.component.html',
})
export class ServersComponent {
    allowNewServer: boolean = false;

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }
}
import { Component } from '@angular/core';

@Component({
    selector: 'app-servers',
    // selector: '[app-servers]',
    // selector: '.app-servers',
    templateUrl: './servers.component.html',
})
export class ServersComponent {
    allowNewServer: boolean = false;
    serverCreationStatus: string = 'No server was created!';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server is created!';
    }
}
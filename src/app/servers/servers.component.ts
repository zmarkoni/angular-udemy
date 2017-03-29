import { Component } from '@angular/core';

@Component({
    selector: 'app-servers',
    // selector: '[app-servers]',
    // selector: '.app-servers',
    templateUrl: './servers.component.html',
})
export class ServersComponent {
    disableServer: boolean = true;
    serverCreationStatus: string = 'No server was created!';
    serverName: any = '';

    constructor() {
        setTimeout(() => {
            this.disableServer = false;
        }, 2000)
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server is created!';
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value //need like this because of typeScript, regulary it will be event.target.value
    }
}
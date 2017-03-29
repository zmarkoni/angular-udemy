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
    serverName: any = 'add server name here please!';

    constructor() {
        setTimeout(() => {
            this.disableServer = false;
        }, 2000)
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server name is: ' + this.serverName;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value //need like this because of typeScript, regulary it will be event.target.value
    }

    /*
    Important: For Two-Way-Binding to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

    You then also need to add the import from @angular/forms  in the app.module.ts file:

    import { FormsModule } from '@angular/forms';
     */
}
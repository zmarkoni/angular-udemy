import { Component } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent {
    username: any = '';

    // My solution down
    myUsername: any = '';
    isEmpty: boolean = true;

    onUpdateUserName(event: Event) {
        if((<HTMLInputElement>event.target).value.length !== 0 ) {
            this.isEmpty = false;
        }
    }
    resetUsername() {
        this.myUsername = '';
        this.isEmpty = true;
    }
}
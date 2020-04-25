import { Component } from '@angular/core';

@Component({
  selector: 'server-app',
  // selector: '[server-app]',
  // selector: '.server-app',
  templateUrl: './server.component.html',
  styles: [
    `
      * {
        background-color: yellow;
      }
    `,
  ],
})
export class ServerComponent {
  serverId = 5;
  Status = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'not yet';
  inputChanger: string;
  binding: string;
  serverCreated = false;
  serverStatus() {
    return this.Status;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'server has been created and the name of the server is ' + this.binding;
  }

  inputReader(event: Event) {
    this.inputChanger = (event.target as HTMLInputElement).value;
  }
}

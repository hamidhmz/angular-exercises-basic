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
      .ngStyle {
        background-color: blue;
        border: solid 1px black;
      }
      .ngExample {
        color: yellow;
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
  serverArr = ['first', 'second'];

  serverStatus() {
    return this.Status;
  }

  constructor() {
    setInterval(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverArr.push(this.binding)
    this.serverCreationStatus =
      'server has been created and the name of the server is ' + this.binding;
  }

  inputReader(event: Event) {
    this.inputChanger = (event.target as HTMLInputElement).value;
  }

  randomColor() {
    return Math.random() < 0.5 ? 'green' : 'red';
  }
}

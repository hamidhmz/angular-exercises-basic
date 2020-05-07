import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { from } from 'rxjs';
import { RegularFormComponent } from './regular-form/regular-form.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { BasicDirective } from './basic-directive/basicDirective.directive';
import { EgRendererDirective } from './basic-directive-by-renderer/eg-renderer.directive';
import { HostListenerComponent } from './host-listener/host-listener.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    RegularFormComponent,
    NgForComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    BasicDirective,
    EgRendererDirective,
    HostListenerComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

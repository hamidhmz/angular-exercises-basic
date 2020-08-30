import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { RegularFormComponent } from './regular-form/regular-form.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { BasicDirective } from './basic-directive/basicDirective.directive';
import { EgRendererDirective } from './basic-directive-by-renderer/eg-renderer.directive';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { HostBindingComponent } from './host-binding/host-binding.component';
import { StructuralDirectiveDirective } from './structural-directive/structural-directive.directive';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BasicDirectiveComponent } from './basic-directive/basic-directive.component';
import { EgRendererDirectiveComponent } from './eg-renderer-directive/eg-renderer-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { SwitchCaseDirectiveComponent } from './switch-case-directive/switch-case-directive.component';
import { EgServiceComponent } from './eg-service/eg-service.component';
import { RouteWorkComponent } from './route-work/route-work.component';
import { ChildRouteComponent } from './child-route/child-route.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRouteModule } from './app-route.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { CanDeactivateGuard } from './can-deactivate/can-deactivate-guard.service';
import { StaticDataPassingComponent } from './static-data-passing/static-data-passing.component';
import { DynamicDataPassingComponent } from './dynamic-data-passing/dynamic-data-passing.component';
import { ServersService } from './service/servers.service';
import { ServerResolver } from './dynamic-data-passing/server-resolver.service';
import { ObservableIntervalExampleComponent } from './observable-interval-example/observable-interval-example.component';
import { CostumeIntervalObservableComponent } from './costume-interval-observable/costume-interval-observable.component';
import { FormEgReactiveComponent } from './form-eg-reactive/form-eg-reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { UnderscorePipe } from './pipe/underscore.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { HttpRequestComponent } from './http-request/http-request.component';
import { HttpInterceptorService } from './interceptor/http-interceptor.service';
import { LogInterceptorService } from './interceptor/log-interceptor.service';
import { AuthComponent } from './auth/auth.component';
import { LoadinSpinnerComponent } from './loadin-spinner/loadin-spinner.component';
import { AlertDynamicComponentComponent } from './alert-dynamic-component/alert-dynamic-component.component';
import { PlaceholderDirective } from './alert-dynamic-component/placeholder/placeholder.directive';
import { FormTDModule } from './form-eg-td/form-td.module';

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
        HostBindingComponent,
        StructuralDirectiveDirective,
        HeaderComponent,
        BasicDirectiveComponent,
        EgRendererDirectiveComponent,
        StructuralDirectiveComponent,
        SwitchCaseDirectiveComponent,
        EgServiceComponent,
        RouteWorkComponent,
        ChildRouteComponent,
        NotFoundComponent,
        CanDeactivateComponent,
        StaticDataPassingComponent,
        DynamicDataPassingComponent,
        ObservableIntervalExampleComponent,
        CostumeIntervalObservableComponent,
        FormEgReactiveComponent,
        PipesComponent,
        UnderscorePipe,
        FilterPipe,
        HttpRequestComponent,
        AuthComponent,
        LoadinSpinnerComponent,
        AlertDynamicComponentComponent,
        PlaceholderDirective,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRouteModule,
        HttpClientModule,
        FormTDModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LogInterceptorService,
            multi: true,
        },
        AuthGuard,
        AuthService,
        CanDeactivateGuard,
        ServersService,
        ServerResolver,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

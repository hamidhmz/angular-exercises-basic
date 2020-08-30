import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { BasicDirectiveComponent } from './basic-directive/basic-directive.component';
import { EgRendererDirectiveComponent } from './eg-renderer-directive/eg-renderer-directive.component';
import { HostBindingComponent } from './host-binding/host-binding.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { SwitchCaseDirectiveComponent } from './switch-case-directive/switch-case-directive.component';
import { EgServiceComponent } from './eg-service/eg-service.component';
import { RouteWorkComponent } from './route-work/route-work.component';
import { ChildRouteComponent } from './child-route/child-route.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { CanDeactivateGuard } from './can-deactivate/can-deactivate-guard.service';
import { StaticDataPassingComponent } from './static-data-passing/static-data-passing.component';
import { DynamicDataPassingComponent } from './dynamic-data-passing/dynamic-data-passing.component';
import { ServerResolver } from './dynamic-data-passing/server-resolver.service';
import { ObservableIntervalExampleComponent } from './observable-interval-example/observable-interval-example.component';
import { CostumeIntervalObservableComponent } from './costume-interval-observable/costume-interval-observable.component';
import { FormEgReactiveComponent } from './form-eg-reactive/form-eg-reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    {
        path: 'app-dynamic-data/:id',
        canActivate: [AuthGuard],
        component: DynamicDataPassingComponent,
        resolve: { server: ServerResolver },
    },
    {
        path: 'app-static-data',
        canActivate: [AuthGuard],
        component: StaticDataPassingComponent,
        data: { message: 'hello hamid' },
    },
    {
        path: 'app-can-deactivate',
        canActivate: [AuthGuard],
        component: CanDeactivateComponent,
        canDeactivate: [CanDeactivateGuard],
    },
    {
        path: 'app-servers',
        canActivate: [AuthGuard],
        component: ServersComponent,
    },
    {
        path: 'app-ng-class',
        canActivate: [AuthGuard],
        component: NgClassComponent,
    },
    { path: 'app-ng-if', canActivate: [AuthGuard], component: NgIfComponent },
    { path: 'app-ng-for', canActivate: [AuthGuard], component: NgForComponent },
    {
        path: 'app-ng-style',
        canActivate: [AuthGuard],
        component: NgStyleComponent,
    },
    {
        path: 'app-basic-directive',
        canActivate: [AuthGuard],
        component: BasicDirectiveComponent,
    },
    {
        path: 'app-eg-renderer-directive',
        canActivate: [AuthGuard],
        component: EgRendererDirectiveComponent,
    },
    {
        path: 'app-host-binding',
        canActivate: [AuthGuard],
        component: HostBindingComponent,
    },
    {
        path: 'app-host-listener',
        canActivate: [AuthGuard],
        component: HostListenerComponent,
    },
    {
        path: 'app-structural-directive',
        canActivate: [AuthGuard],
        component: StructuralDirectiveComponent,
    },
    {
        path: 'app-switch-case-directive',
        canActivate: [AuthGuard],
        component: SwitchCaseDirectiveComponent,
    },
    {
        path: 'app-eg-service',
        canActivate: [AuthGuard],
        component: EgServiceComponent,
    },
    {
        path: 'app-observable-interval-example',
        canActivate: [AuthGuard],
        component: ObservableIntervalExampleComponent,
    },
    {
        path: 'app-costume-interval-observable',
        canActivate: [AuthGuard],
        component: CostumeIntervalObservableComponent,
    },
    {
        path: 'app-form-TD-example',
        canActivate: [AuthGuard],
        loadChildren: () => import('./form-eg-td/form-td.module').then((module)=> module.FormTDModule)
    },
    {
        path: 'app-form-reactive-example',
        canActivate: [AuthGuard],
        component: FormEgReactiveComponent,
    },
    {
        path: 'app-pipes-example',
        canActivate: [AuthGuard],
        component: PipesComponent,
    },
    {
        path: 'app-http-request',
        canActivate: [AuthGuard],
        component: HttpRequestComponent,
    },
    {
        path: 'app-auth',
        component: AuthComponent,
    },
    {
        path: 'app-route-work',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: RouteWorkComponent,
        children: [
            {
                path: ':id',
                // canActivate: [AuthGuard],
                component: ChildRouteComponent,
            },
            {
                path: ':id/:name',
                // canActivate: [AuthGuard],
                component: ChildRouteComponent,
            },
        ],
    },
    // { path: 'app-route-work/:id', component: RouteWorkComponent },
    // { path: 'app-route-work/:id/:name', component: RouteWorkComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
            // useHash:true //useful for old browser
        }),
    ],
    exports: [RouterModule],
})
export class AppRouteModule {}

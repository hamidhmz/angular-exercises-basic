import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
    {
        path: 'app-dynamic-data/:id',
        component: DynamicDataPassingComponent,
        resolve: { server: ServerResolver },
    },
    {
        path: 'app-static-data',
        component: StaticDataPassingComponent,
        data: { message: 'hello hamid' },
    },
    {
        path: 'app-can-deactivate',
        component: CanDeactivateComponent,
        canDeactivate: [CanDeactivateGuard],
    },
    { path: 'app-servers', component: ServersComponent },
    { path: 'app-ng-class', component: NgClassComponent },
    { path: 'app-ng-if', component: NgIfComponent },
    { path: 'app-ng-for', component: NgForComponent },
    { path: 'app-ng-style', component: NgStyleComponent },
    { path: 'app-basic-directive', component: BasicDirectiveComponent },
    {
        path: 'app-eg-renderer-directive',
        component: EgRendererDirectiveComponent,
    },
    { path: 'app-host-binding', component: HostBindingComponent },
    { path: 'app-host-listener', component: HostListenerComponent },
    {
        path: 'app-structural-directive',
        component: StructuralDirectiveComponent,
    },
    {
        path: 'app-switch-case-directive',
        component: SwitchCaseDirectiveComponent,
    },
    { path: 'app-eg-service', component: EgServiceComponent },
    {
        path: 'app-route-work',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRouteModule {}

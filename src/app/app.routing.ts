import { NgModule } from "../../node_modules/@angular/core";
import { AppComponent } from './app.component';
import { RformComponent } from './rform/rform.component';
import { ParentComponent } from './parent/parent.component';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [/*{path : '', component : AppComponent,pathMatch : 'full'},*/
    { path: 'rform', component: RformComponent, canActivate: [AuthGuard] },
    { path: 'pform', component: ParentComponent },
    { path: '**', component: AppComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
import { NgModule } from "../../node_modules/@angular/core";
import {AppComponent} from './app.component';
import {RformComponent} from './rform/rform.component';
import {ParentComponent}from './parent/parent.component';

import { RouterModule, Routes } from '@angular/router';

const routes :Routes = [/*{path : '', component : AppComponent,pathMatch : 'full'},*/
     {path : 'rform', component : RformComponent},
     
     {path:'**',component:AppComponent},
     {path : 'pform', component : ParentComponent}
    ];

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [RouterModule]
})
export class AppRoutingModule{}
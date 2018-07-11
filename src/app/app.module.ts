import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';
import { AdminModule } from './admin/admin.module';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { RformComponent } from './rform/rform.component';
import { CapPipePipe } from './cap-pipe.pipe';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DirectiveComponent,
    ParentComponent,
    ChildComponent,
    TemplateFormComponent,
    RformComponent,
    CapPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AdminModule
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

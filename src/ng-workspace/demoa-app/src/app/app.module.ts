 import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent} from './app.headercomponent';
import { BoxsComponent } from './boxs/boxs.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CounterComponent } from './counter/counter.component';
import { HitComponent } from './hit/hit.component';
import { DisplayComponent } from './display/display.component';
import { RtPcrComponent } from './rt-pcr/rt-pcr.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    BoxsComponent,
    CustomerFormComponent,
    CounterComponent,
    HitComponent,
    DisplayComponent,
    RtPcrComponent,
    EmployeeFormComponent,
    BookListComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

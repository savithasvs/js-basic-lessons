import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent} from './app.headercomponent';
import { BoxsComponent } from './boxs/boxs.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CounterComponent } from './counter/counter.component';
import { HitComponent } from './hit/hit.component';
import { DisplayComponent } from './display/display.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    BoxsComponent,
    CustomerFormComponent,
    CounterComponent,
    HitComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent,AppHeaderComponent,AppComponent,BoxsComponent]
})
export class AppModule { }

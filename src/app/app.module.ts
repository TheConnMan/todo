import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';

import { SortingItemsPipe } from './directives/sorting-items.pipe';
import { ToDoService } from './shared/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    SortingItemsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MomentModule
  ],
  providers: [
    ToDoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

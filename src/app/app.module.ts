import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter';
import { CounterComponent } from './components/counter.component';
import { CounterContainerComponent } from './containers/counter-container.component';
import { CounterService } from './providers/counter.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({counter: counterReducer}),
  ],
  declarations: [
    AppComponent,
    CounterContainerComponent,
    CounterComponent,
  ],
  providers: [
    CounterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

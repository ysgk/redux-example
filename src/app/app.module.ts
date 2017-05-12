import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './containers/app.component';
import { StoreModule } from '@ngrx/store';
import { CounterContainerComponent } from './containers/counter-container.component';
import { CounterService } from './providers/counter.service';
import { reducers } from './reducers';
import { ComponentsModule } from './components/index';
import { LayoutComponent } from './containers/layout.component';
import { AsyncCounterComponent } from './components/async-counter.component';
import { AsyncCounterContainerComponent } from './containers/async-counter-container.component';
import { AsyncCounterService } from './providers/async-counter.service';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    StoreModule.provideStore(reducers),
  ],
  declarations: [
    AppComponent,
    AsyncCounterContainerComponent,
    LayoutComponent,
    CounterContainerComponent,
  ],
  providers: [
    AsyncCounterService,
    CounterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

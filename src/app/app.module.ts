import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterContainerComponent } from './counter/counter-container.component';
import { CounterService } from './counter/counter.service';
import { reducers } from './reducers';
import { ComponentsModule } from './components';
import { LayoutComponent } from './layout.component';
import { AsyncCounterContainerComponent } from './async-conter/async-counter-container.component';
import { AsyncCounterService } from './async-conter/async-counter.service';
import { EffectsModule } from '@ngrx/effects';
import { AsyncCounterEffects } from './async-conter/async-counter.effects';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    StoreModule.provideStore(reducers),
    EffectsModule.run(AsyncCounterEffects),
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

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
import { ConfirmCounterService } from './confirm-counter/confirm-counter.service';
import { ConfirmCounterContainerComponent } from './confirm-counter/confirm-counter-container.component';
import { ConfirmCounterEffects } from './confirm-counter/confirm-counter.effects';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    StoreModule.provideStore(reducers),
    EffectsModule.run(AsyncCounterEffects),
    EffectsModule.run(ConfirmCounterEffects),
  ],
  declarations: [
    AppComponent,
    AsyncCounterContainerComponent,
    LayoutComponent,
    ConfirmCounterContainerComponent,
    CounterContainerComponent,
  ],
  providers: [
    AsyncCounterService,
    ConfirmCounterService,
    CounterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

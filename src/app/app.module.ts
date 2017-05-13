import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './containers/app.component';
import { StoreModule } from '@ngrx/store';
import { CounterContainerComponent } from './containers/counter-container.component';
import { CounterService } from './providers/counter.service';
import { reducers } from './reducers/index';
import { ComponentsModule } from './components/index';
import { LayoutComponent } from './containers/layout.component';
import { AsyncCounterContainerComponent } from './containers/async-counter-container.component';
import { AsyncCounterService } from './providers/async-counter.service';
import { EffectsModule } from '@ngrx/effects';
import { AsyncCounterEffects } from './effects/async-counter.effects';
import { ConfirmCounterService } from './providers/confirm-counter.service';
import { ConfirmCounterContainerComponent } from './containers/confirm-counter-container.component';
import { ConfirmCounterEffects } from './effects/confirm-counter.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    StoreModule.provideStore(reducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
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

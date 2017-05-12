import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './containers/app.component';
import { StoreModule } from '@ngrx/store';
import { CounterContainerComponent } from './containers/counter-container.component';
import { CounterService } from './providers/counter.service';
import { reducers } from './reducers';
import { ComponentsModule } from './components/index';
import { LayoutComponent } from './containers/layout.component';
import { AsyncCounterContainerComponent } from './containers/async-counter-container.component';
import { AsyncCounterService } from './providers/async-counter.service';
import { EffectsModule } from '@ngrx/effects';
import { AsyncCounterEffects } from './effects/async-counter';

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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './containers/app.component';
import { StoreModule } from '@ngrx/store';
import { CounterContainerComponent } from './containers/counter-container.component';
import { reducers } from './reducers/index';
import { ComponentsModule } from './components/index';
import { LayoutComponent } from './containers/layout.component';
import { AsyncCounterContainerComponent } from './containers/async-counter-container.component';
import { EffectsModule } from '@ngrx/effects';
import { AsyncCounterEffects } from './effects/async-counter.effects';
import { ConfirmCounterContainerComponent } from './containers/confirm-counter-container.component';
import { ConfirmCounterEffects } from './effects/confirm-counter.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BookContainerComponent } from './containers/book-container.component';
import { BookEffects } from './effects/book.effects';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    StoreModule.provideStore(reducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AsyncCounterEffects),
    EffectsModule.run(ConfirmCounterEffects),
    EffectsModule.run(BookEffects),
  ],
  declarations: [
    AppComponent,
    BookContainerComponent,
    AsyncCounterContainerComponent,
    LayoutComponent,
    ConfirmCounterContainerComponent,
    CounterContainerComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

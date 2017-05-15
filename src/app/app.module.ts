import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MdSidenavModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './containers/app.component';
import { CounterContainerComponent } from './containers/counter-container.component';
import { reducers } from './reducers/index';
import { ComponentsModule } from './components/index';
import { LayoutComponent } from './containers/layout.component';
import { AsyncCounterContainerComponent } from './containers/async-counter-container.component';
import { AsyncCounterEffects } from './effects/async-counter.effects';
import { ConfirmCounterContainerComponent } from './containers/confirm-counter-container.component';
import { ConfirmCounterEffects } from './effects/confirm-counter.effects';
import { BookContainerComponent } from './containers/book-container.component';
import { BookEffects } from './effects/book.effects';
import { routes } from './app.routes';
import { HomePageComponent } from './containers/home-page.component';
import { CounterPageComponent } from './containers/counter-page.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    StoreModule.provideStore(reducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AsyncCounterEffects),
    EffectsModule.run(ConfirmCounterEffects),
    EffectsModule.run(BookEffects),
    MdSidenavModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  declarations: [
    AppComponent,
    AsyncCounterContainerComponent,
    BookContainerComponent,
    CounterPageComponent,
    ConfirmCounterContainerComponent,
    CounterContainerComponent,
    HomePageComponent,
    LayoutComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

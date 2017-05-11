import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './containers/app.component';
import { StoreModule } from '@ngrx/store';
import { CounterContainerComponent } from './containers/counter-container.component';
import { CounterService } from './providers/counter.service';
import { reducers } from './reducers';
import { ComponentsModule } from './components/index';
import { LayoutComponent } from './containers/layout.component';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    StoreModule.provideStore(reducers),
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    CounterContainerComponent,
  ],
  providers: [
    CounterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

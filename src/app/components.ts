import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { AsyncCounterComponent } from './async-conter/async-counter.component';
import { ConfirmCounterComponent } from './confirm-counter/confirm-counter.component';

export const COMPONENTS = [
  AsyncCounterComponent,
  ConfirmCounterComponent,
  CounterComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule { }
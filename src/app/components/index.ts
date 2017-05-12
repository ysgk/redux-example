import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';
import { CommonModule } from '@angular/common';
import { AsyncCounterComponent } from './async-counter.component';

export const COMPONENTS = [
  AsyncCounterComponent,
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

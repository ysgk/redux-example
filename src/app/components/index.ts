import { NgModule } from '@angular/core';
import { MdSidenavModule, MdListModule, MdToolbarModule, MdButtonModule, MdIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CounterComponent } from './counter.component';
import { AsyncCounterComponent } from './async-counter.component';
import { ConfirmCounterComponent } from './confirm-counter.component';
import { BookComponent } from './book.component';
import { SidenavComponent } from './sidenav.component';
import { NavItemComponent } from './nav-item.component';
import { ToolbarComponent } from './toolbar.component';

export const COMPONENTS = [
  AsyncCounterComponent,
  BookComponent,
  ConfirmCounterComponent,
  CounterComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    RouterModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule { }

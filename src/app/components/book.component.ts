import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  template: `
  <div class="book">
    <h2>{{ title }}</h2>
    <h3>{{ author }}</h3>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {

  @Input() title: string;
  @Input() author: string;

}

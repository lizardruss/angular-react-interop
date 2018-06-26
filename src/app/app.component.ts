import { Component } from '@angular/core';
import Button from '@pluralsight/ps-design-system-button/react';
import Icon from '@pluralsight/ps-design-system-icon/react';
import { createButtonWithIcon } from '@pluralsight/ps-design-system-button/web';
import '@pluralsight/ps-design-system-icon/web';

createButtonWithIcon('ps-button-icon-code', Icon.ids.code);
createButtonWithIcon('ps-button-icon-user', Icon.ids.user);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appearance = Button.appearances.stroke;
  Icon = Icon;

  onClick() {
    this.appearance = (this.appearance === Button.appearances.stroke)
      ? Button.appearances.primary
      : Button.appearances.stroke;
  }
}

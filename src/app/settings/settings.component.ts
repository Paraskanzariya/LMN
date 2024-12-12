import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  toggleStatus: boolean[] = [false, false, false, false, false];

  toggleChange(event: any, index: number) {
    this.toggleStatus[index] = event.checked;
  }
}

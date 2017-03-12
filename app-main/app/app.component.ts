import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import '../assets/styles.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private electron: ElectronService) {}

  openAppMinor() {
  	this.electron.ipcRenderer.send('openAppMinor');
  }
}

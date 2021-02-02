import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-sidenav-material';
  sidenavtitle = 'Main Navigation';
  userId = 'Ramesh Mavuluri';

  signOut() {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = '/';
  }
}

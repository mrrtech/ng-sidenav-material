import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  userId!: string;
  @Input() isNavBarOpened: boolean = false;
  @Output() sidenavEvent = new EventEmitter<string>();
  @Output() signOutEvent = new EventEmitter<string>();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  go(pageName: string) {
    pageName ? this.router.navigate([pageName]) : this.router.navigate(['']);
  }
  signOut() {
    this.signOutEvent.emit();
  }
  sidenavToggle() {
    this.sidenavEvent.emit();
  }
}

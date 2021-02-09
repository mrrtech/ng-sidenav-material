import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { menu } from './menu.config';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  menu = menu;
  @Input() sidenavtitle!: string;
  @Output() sidenavEvent = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {}

  sidenavToggle() {
    this.sidenavEvent.emit();
  }
}

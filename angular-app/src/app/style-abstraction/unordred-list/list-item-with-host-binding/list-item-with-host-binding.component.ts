import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'list-item-with-host-binding',
  template: `<ng-content></ng-content>`,
  host: {'class': 'list-group-item'}
})
export class ListItemWithHostBindingComponent implements OnInit {

  // @HostBinding('class.list-group-item') hostClass = true;

  constructor() { }

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnordredListComponent } from './style-abstraction/unordred-list/unordred-list.component';
import { ListItemComponent } from './style-abstraction/unordred-list/list-item/list-item.component';
import { ListItemWithHostBindingComponent } from './style-abstraction/unordred-list/list-item-with-host-binding/list-item-with-host-binding.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressBarComponent } from './component-wrapping/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UnordredListComponent,
    ListItemComponent,
    ListItemWithHostBindingComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TablapsComponent } from './components/tablaps/tablaps.component';
import { NgbdSortableHeader}  from 'src/app/directives/sortable.directive';


@NgModule({
  declarations: [
    AppComponent,
    TablapsComponent,
    NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

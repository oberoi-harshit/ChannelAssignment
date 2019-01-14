import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule,MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule],
})
export class MaterialModule { }
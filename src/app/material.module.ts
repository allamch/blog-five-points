import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule
  ],
  exports: [MatButtonModule,
  MatExpansionModule,
  MatInputModule]
})
export class MaterialModule { }

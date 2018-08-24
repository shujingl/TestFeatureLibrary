import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAComponent } from './feature-a/feature-a.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureAComponent],
  exports: [FeatureAComponent]
})
export class FeatureModule { }

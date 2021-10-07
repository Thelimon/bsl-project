import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COPtransformPipe } from './pipes/coptransform.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [COPtransformPipe],
  exports: [CommonModule, COPtransformPipe],
})
export class SharedModule {}

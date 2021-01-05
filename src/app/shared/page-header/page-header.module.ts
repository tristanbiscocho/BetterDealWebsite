import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [PageHeaderComponent],
  exports: [PageHeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class PageHeaderModule {}

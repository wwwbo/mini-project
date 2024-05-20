import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}

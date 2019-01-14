import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { ProdutSearchComponent } from './produt-search/produt-search.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'products/:id/edit', component: ProductEditComponent},
      {path: 'prouducts/search', component: ProdutSearchComponent},
      {path: 'products/:name/:code', component: ProductListComponent}
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProdutSearchComponent
  ]
})
export class ProductModule { }

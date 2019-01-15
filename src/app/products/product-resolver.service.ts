import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ProductResolved } from './product';
import { ProductService } from './product.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResolved> {

    constructor(private productService: ProductService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<ProductResolved> {
        const id = route.paramMap.get('id');
        if (isNaN(+id)) {
            const msg = `Product id was not a number : ${id}`;
            console.log(msg);
            return of({ product: null, error: msg });  // return false, return null or navigate to error page
        }
        return this.productService.getProduct(+id)
            .pipe(
                map(product => ({ product: product })),
                catchError(error => {
                    const msg  = `Retrival error : ${error}`;
                    console.error(msg);
                    return of({product: null, error: msg});
                })
            );
    }
}

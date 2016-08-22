
import {Component,OnInit} from 'angular2/core'

import {IProduct} from './product'
import {ProductFilterPipe} from './product-filter.pipe'
import {StarComponent} from '../shared/star.component'
import {ProductService} from 'app/products/product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    // below properties are arrays so that will take multiple input types as needed
    styleUrls: ['app/products/product-list.component.css'] ,
    pipes : [ProductFilterPipe],
    directives: [StarComponent]
})
export class ProductListComponent implements OnInit {
    //properties are down below
    pageTitle: string = 'Product List';
    imageWidth : number = 45;
    imageMargin : number = 2;
    showImage: boolean =false;
    listFilter: string ;
    products: IProduct[] ;
    errorMessage: string;

    private _productService;
    //Constructor goes here
    constructor( private productService: ProductService){
        this._productService = productService;
    }

    // Methods are down below
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        this._productService.getProducts()
                            .subscribe(
                                products => this.products = products,
                                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void{

        this.pageTitle = 'Product List: '+ message;
    }
}
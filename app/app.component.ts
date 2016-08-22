import {Component} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http'
import 'rxjs/Rx'; // Load all features


import {ProductListComponent} from 'app/products/product-list.component';
import {ProductService} from 'app/products/product.service';



@Component({
    selector : 'pm-app',
    //pm : product management
    template:`
    <div>
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `,
    directives: [ProductListComponent],
    providers: [ProductService,
                HTTP_PROVIDERS]
})
export class AppComponent{
    pageTitle: string = 'Acme Product Management';

}
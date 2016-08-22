import {Component} from 'angular2/core'

import {ProductListComponent} from 'app/products/product-list.component';

@Component({
    selector : 'pm-app',
    //pm : product management
    template:`
    <div>
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `,
    directives: [ProductListComponent]
})
export class AppComponent{
    pageTitle: string = 'Acme Product Management';

}
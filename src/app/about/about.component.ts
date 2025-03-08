import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/models/product-representation";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private activetedRoute: ActivatedRoute,
    private service: ProductService
  ) {
  }
  param: any;
  queryParams: any;

  ngOnInit(): void {
        console.log(this.activetedRoute);
        this.param = this.activetedRoute.snapshot.params['username']
        this.queryParams = this.activetedRoute.snapshot.queryParams['course'];

        this.service.getAllProductsWithLimit()
          .subscribe({
            next: (data) => {
              console.log(data);
            }
          })

        const product: ProductRepresentation = {
          title: "a",
          description: "a",
          price: 0,
          category: "aaa",
          image: "http://placekitten.com/200",
        }
        this.service.createProduct(product)
          .subscribe({
            next: (data) => {
              console.log(data);
            },
            error: (error: HttpErrorResponse) => {
              if (error instanceof ErrorEvent) {
                // @ts-ignore
                console.error(error.error.message);
              } else {
                // server side error
                console.error(`Server returned status code ${error.status}, error message: ${error.message}`);
              }
            }
          })
    }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private activetedRoute: ActivatedRoute,
  ) {
  }
  param: any;
  queryParams: any;

  ngOnInit(): void {
        console.log(this.activetedRoute);
        this.param = this.activetedRoute.snapshot.params['username']
        this.queryParams = this.activetedRoute.snapshot.queryParams['course'];
    }

}

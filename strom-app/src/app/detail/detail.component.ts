import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.item = this.af.database.object('/ablesungen/-Kh3usi49XLf5HCLgY7I');
     
    this.route.params
      //.switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .switchMap((params: Params) => this.item = this.af.database.object('/ablesungen/'+params['id']))
      //.subscribe(item => this.item = item)
      ;
  }

}

import { Component } from '@angular/core';

import { products } from '../products';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = products;
  selectedPosition = "";
  selectedLocation = "";

  constructor(private dataService: DataService) { }

  share() {
    window.alert('The product has been shared!');
  }

  onPositionSelected(newPostion) {
    this.selectedPosition = newPostion;
    // alert(this.selectedPosition);
  }

  onLocationSelected(newLocation) {
    this.selectedLocation = newLocation;
    // alert(this.selectedLocation);
  }

  getSuggestions() {
    this.dataService.getSuggestions(this.selectedPosition, this.selectedLocation)
      .subscribe(val => {
        console.log(val);
      });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() itinerary: any;
  price: any;
  priceImage: string = '';
  inclusive: string = '';
  exclusive: string = '';
  constructor() { }

  ngOnInit() {

    

    if(this.itinerary.cover[1] != undefined) {
      this.priceImage = this.itinerary.cover[1].url;
    }

    for(const extraFieldValue of this.itinerary.extraFieldValues) {
      for(const field of extraFieldValue.fields) {
        if (field.name == 'inclusief') {
          this.inclusive = field.value;
        }
        if (field.name == 'exclusief') {
          this.exclusive = field.value;
        }
        if (field.name == 'reissom') {
          this.price = field.value;
        }
      }
    }
  }
}

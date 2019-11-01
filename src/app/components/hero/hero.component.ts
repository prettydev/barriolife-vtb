import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() itinerary: any;
  names: string = '';
  title: string;
  subTitle: string;
  bannerImage: string = '';
  logoImage: string = '';

  constructor() { }

  ngOnInit() {
    
    if(this.itinerary.cover[0] != undefined) {
      this.bannerImage = this.itinerary.cover[0].url;
    }

    if(this.itinerary.extraFieldValues[0]['fields'][0].value == 'logo1') {
      this.logoImage = 'https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/square/md/logo1.png';
    } else if (this.itinerary.extraFieldValues[0]['fields'][0].value == 'logo2') {
      this.logoImage = 'https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/original/original/logo2.jpg';
    }
    
    this.title = this.itinerary.title;
    this.subTitle = this.itinerary.subTitle;
    this.title = this.title.trim();

  }
}

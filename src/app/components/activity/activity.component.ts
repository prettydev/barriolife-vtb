import { Component, OnInit, Input } from "@angular/core";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from "ngx-gallery";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.css"]
})
export class ActivityComponent implements OnInit {
  @Input() itinerary: any;
  program: any = new Array();
  activated: any;
  content: string;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = new Array();
  galleryPresent: any = false;
  dateDisplay: any;
  months: any[];

  constructor() {}

  ngOnInit() {

    this.months = ['jan', 'feb', 'mrt', 'apr', 'mei', 'juni', 'juli', 'aug', 'sep', 'okt', 'nov', 'dec'];

    for(const extraFieldValue of this.itinerary.extraFieldValues) {
      for(const field of extraFieldValue.fields) {
        if(field.name == 'dont_show_startdate') {
          this.dateDisplay = field.value;
        }
      }
    }
    
    for(const segment of this.itinerary.segments) {
      for(const element of segment.elements) {
        if(element.unitId == "3") {
          this.content = '';
          if(element.additionalText) {
            this.content += element.additionalText;
          }
          if(element.subAdditionalText) {
            this.content += element.subAdditionalText;
          }

          if (!this.dateDisplay) {
            var d = new Date(element.date);
            var endDate = new Date(element.date);
            endDate.setDate(d.getDate() + element.nights);
            element.day = d.getDate() + ' ' + this.months[d.getMonth()];
            if(element.nights > 0) {
              element.day += ' - ' +  endDate.getDate() + ' ' + this.months[endDate.getMonth()];
            }
          } else {
            let days = 'Dag ' + element.day;
            if(element.nights > 0) {
              days += ' - ' + (parseInt(element.day) + parseInt(element.nights));
            }
            element.day = days;
          }

          let data = {day: element.day, title: element.title, content: this.content, optional: element.optional}
          if(segment.media[0] != undefined) {
            for(const image of element.media) {
              let images = {small: image.url, medium: image.url, big: image.url};
              this.galleryImages.push(images);
              this.galleryPresent = true;
            }
          }
          //console.log('Hello123');
          this.program.push(data);
        }
      }
    }

    this.activated = -999;

    // slider gallery
    this.galleryOptions = [
      {
        width: "100%",
        height: "400px",
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "400px",
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 10,
        thumbnailMargin: 1
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
        height: "300px"
      }
    ];
    /*
    this.galleryImages = [
      {
        small: "https://via.placeholder.com/350x350",
        medium: "https://via.placeholder.com/351x351",
        big: "https://via.placeholder.com/352x352"
      },
      {
        small: "https://via.placeholder.com/400x400",
        medium: "https://via.placeholder.com/401x401",
        big: "https://via.placeholder.com/402x402"
      },
      {
        small: "https://via.placeholder.com/500x500",
        medium: "https://via.placeholder.com/501x501",
        big: "https://via.placeholder.com/502x502"
      },
      {
        small: "https://via.placeholder.com/600x600",
        medium: "https://via.placeholder.com/601x601",
        big: "https://via.placeholder.com/602x602"
      }
    ];
    */
  }

  display(index) {
    console.log(index);
    this.activated = index;
  }

  hide() {
    console.log(this.activated);
    this.activated = -999;
  }
}

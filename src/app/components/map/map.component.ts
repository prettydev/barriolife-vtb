import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  @Input() itinerary: any;
  markers: any[];
  constructor() {}

  ngOnInit() {
    this.markers = [];
    let i = 1;
    for (const seg of this.itinerary.segments) {
      for (const element of seg.elements) {
        if (element.maps) {
          
          if (element.maps.latitude) {
            Object.assign(element.maps, {title:element.title, id: i.toString()});
            this.markers.push(element.maps);
            i++;
          }
        }
      }
      
    }
    console.log("this.markers123", this.markers);
  }
}

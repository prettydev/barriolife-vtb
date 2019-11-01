import { Component, OnInit, Input } from "@angular/core";
import { MappingService } from "../../services/mapping.service";

@Component({
  selector: "app-flight",
  templateUrl: "./flight.component.html",
  styleUrls: ["./flight.component.css"]
})
export class FlightComponent implements OnInit {
  @Input() itinerary: any;
  flights: any[];

  constructor(private mappingService: MappingService) {}

  ngOnInit() {
    this.flights = [];
    for (const seg of this.itinerary.segments) {
      for (const flight of seg.flightInfo) {
        this.flights.push(flight);
      }
    }
    console.log(this.flights);
  }
}

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-document",
  templateUrl: "./document.component.html",
  styleUrls: ["./document.component.css"]
})
export class DocumentComponent implements OnInit {
  @Input() itinerary: any;
  program: any[];
  activated: any;

  constructor() {}

  ngOnInit() {
    this.activated = -999;
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

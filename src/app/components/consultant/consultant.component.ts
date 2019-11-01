import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-consultant",
  templateUrl: "./consultant.component.html",
  styleUrls: ["./consultant.component.css"]
})
export class ConsultantComponent implements OnInit {
  @Input() itinerary: any;
  consultants: any[] = new Array();
  consultData: any[];
  constructor() {}

  ngOnInit() {
    this.consultData = [
      {
        name: "Wendy Jacobs",
        email: "",
        phone: "",
        title: "Marokko",
        picture: "https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/square/md/IMG_20180503_175719313.png"
      },
      {
        name: "Rikkert Barendse",
        email: "reisvoorstel@barrio-life.nl",
        phone: "(+31)-20 2214178",
        title: "Andalusië & Portugal",
        picture: "https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/original/original/IMG_20180503_175500598.png"
      }
    ];

    for (const extraFieldValue of this.itinerary.extraFieldValues) {
      for (const field of extraFieldValue.fields) {
        //console.log("adat" + this.consultData);
        if (field.name == "reisspecialist") {
          for (const j of this.consultData) {
            if (j.name.indexOf(field.value) !== -1) {
              this.consultants.push(j);
              // console.log('Hello World' + j.name + " <=> " + fielddata.value);
            }
          }
        }
      }
    }
  }
}

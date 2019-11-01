import { Component, OnInit,Input } from '@angular/core';
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'striphtml'
// })

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  @Input() itinerary: any;
  program: any[] = new Array();
  activated:any;
  image: string = '';
  dateDisplay: any;
  months: any[];

  constructor() { }

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
      this.image = null;
      if(segment.media[0] != undefined) {
        this.image = segment.media[0].url;
      }

      if (!this.dateDisplay) {
        var d = new Date(segment.date);
        var endDate = new Date(segment.date);
        endDate.setDate(d.getDate() + segment.nights);
        segment.day = d.getDate() + ' ' + this.months[d.getMonth()];
        if(segment.nights > 0) {
          segment.day += ' - ' +  endDate.getDate() + ' ' + this.months[endDate.getMonth()];
        }
      } else {
        let days = 'Dag ' + segment.day;
        if(segment.nights > 0) {
          days += ' - ' + (parseInt(segment.day) + parseInt(segment.nights));
        }
        segment.day = days;
      }
      
      
      //console.log('segment.media[0].url', segment.media[0]);
      let data = {day: segment.day, content: segment.content, title: segment.title, image: this.image};
      this.program.push(data);
      
    }
    console.log('this.program', this.program);
    this.activated = -999;
  }

  display(index) {
    console.log(index);
    this.activated = index;
  }

  hide(){
    console.log(this.activated);
    this.activated = -999;
  }

}

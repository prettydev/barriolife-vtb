import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  @Input() coverData: any;
  coverStyle:any;


  constructor() { }

  ngOnInit() {
    this.coverStyle = {
      'background': `url(${this.coverData.image})`,
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
    };
  }

}

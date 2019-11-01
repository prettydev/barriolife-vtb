import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './minisite.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinisiteComponent implements OnInit {
  itinerary: any;
  showMobileMenu: boolean;
  coverData:any[];

  constructor(private _activatedRoute: ActivatedRoute) {
    const data = this._activatedRoute.snapshot.data;
    this.itinerary = data.itinerary;
  }

  ngOnInit() {
    this.coverData = [{
      image: 'https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/square/md/cover1.jpg',
      title: 'Vlucht & Vervoer',
      content: 'Nadat het vliegtuig is geland, is er de mogelijkheid om met een hippie busje op pad te gaan, er kan natuurlijk ook een huurauto worden gebruikt of het openbaar vervoer.',
    },
    {
      image: 'https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/square/md/cover2.jpg',
      title: 'Barrio Life - Reizen naar het lokale leven',
      content: 'Wij zijn een Nederlandse reisorganisatie, gespecialiseerd in de bestemmingen Andalusië, Portugal, Marokko en de Sahara.',
    },
    {
      image: 'https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/square/md/cover3.jpg',
      title: 'Overnachting & Accommodaties',
      content: 'Slapen in gezellige en sfeervolle accommodaties.',
    },
    {
      image: 'https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/square/md/cover4.jpg',
      title: 'Finibus Bonorum et Malorum',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },{
      image: 'https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/square/md/cover5.jpg',
      title: 'Non Quam Lacus',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    },
    {
      image: 'https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/square/md/cover6.jpg',
      title: 'Non Quam Lacus',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    },
  ];
  }

}

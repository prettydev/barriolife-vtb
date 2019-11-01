import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialLinks: any;
  constructor() { }

  ngOnInit() {

    this.socialLinks = {
      facebook : 'https://www.facebook.com/culturele.reizen',
      youtube: 'https://www.youtube.com/user/BarrioLifeFilm',
      instagram: 'https://www.instagram.com/barriolifenl/',
      whatsapp: '',
      email: 'mailto:info@barrio-life.nl',
    }
  }

}

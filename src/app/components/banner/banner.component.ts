import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  name: string = 'Mi Banner';
  urlImg: string = '../../../assets/img/banner1.jpg';
  photo: string = 'url(' + this.urlImg + ')';
}

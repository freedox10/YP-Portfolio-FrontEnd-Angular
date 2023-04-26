import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  name: string = 'Mi Banner';
  urlImg: string = '../../../assets/img/Capibara2.webp';
  photo: string = `url('${this.urlImg}')`;
}

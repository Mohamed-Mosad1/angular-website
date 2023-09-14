import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  imageUrl:string[] = ["./assets/imgs/poert1.png","./assets/imgs/port2.png","./assets/imgs/port3.png"]

  isImageClickHidden: boolean = true;
  selectedImage: string = '';

  showImage(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.isImageClickHidden = false;
  }

  hideImageClick() {
    this.isImageClickHidden = true;
  }





}

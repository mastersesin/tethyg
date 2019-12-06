import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
    {active: true, img: "../../assets/01.jpg"},
    {active: false, img: "../../assets/02.jpg"},
    {active: false, img: "../../assets/03.jpg"},
    {active: false, img: "../../assets/04.jpg"},
    {active: false, img: "../../assets/05.jpg"},
    {active: false, img: "../../assets/06.jpg"},
  ];
  slideConfig = {
    "autoplay": true,
    "slidesToShow": 1,
     "slidesToScroll": 1,
    };

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    for (const key in this.slides) {
      if (this.slides[key].active === true) {
        this.slides[key].active = false;
      }
    }
    this.slides[e.currentSlide].active = true;
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}

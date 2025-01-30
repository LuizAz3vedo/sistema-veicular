import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  carouselImages = [
    { src: 'assets/images/ferrari.png', alt: 'Ferrari' },
    
    { src: 'assets/images/impala.png', alt: 'Impala' },
    { src: 'assets/images/mustang.png', alt: 'Mustang' },
  ];

}

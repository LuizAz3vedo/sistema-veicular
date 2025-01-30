import { Component } from '@angular/core';
import { FontSizeService } from '../../services/font-size.service';

@Component({
  selector: 'app-font-size-control',
  standalone: true,
  imports: [],
  templateUrl: './font-size-control.component.html',
  styleUrl: './font-size-control.component.css'
})
export class FontSizeControlComponent {

  constructor(private fontSizeService: FontSizeService) { }

  increaseFontSize(): void {
    this.fontSizeService.increaseFontSize();
  }

  decreaseFontSize(): void {
    this.fontSizeService.decreaseFontSize();
    
  }

}

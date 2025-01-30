import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {

  private fontSize: number = 16;

  constructor() { }

  getFontSize(): number {
    return this.fontSize;
  }

  increaseFontSize(): void {
    this.fontSize += 2;
    this.applyFontSize();
  }

  decreaseFontSize(): void {
    this.fontSize -= 2;
    this.applyFontSize();
  }

  private applyFontSize(): void {
    document.documentElement.style.fontSize = `${this.fontSize}px`;
  }
}

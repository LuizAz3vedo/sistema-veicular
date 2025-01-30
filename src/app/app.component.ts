import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontSizeControlComponent } from "./components/font-size-control/font-size-control.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontSizeControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema-veicular';
}

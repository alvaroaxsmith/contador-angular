import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Soul-Code-ng-ex3';
  number = 0;
  aumentar(): void {
    this.number += 1;
  }

  diminuir(): void {
    this.number -= 1;
  }
}

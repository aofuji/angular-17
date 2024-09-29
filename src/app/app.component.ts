import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormTestComponent } from './form-test/form-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-17';

  public teste = signal(0)

  public teste2:number = 4


  setCount() {
    this.teste.update(value => value + 1)
    console.log(this.teste())
  }


}

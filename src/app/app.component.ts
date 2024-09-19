import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TEST_TOKEN } from './core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lazy-modules';

  constructor(@Inject(TEST_TOKEN) private interceptors: HttpInterceptor) {
    console.log('interceptors', this.interceptors)
  }
}

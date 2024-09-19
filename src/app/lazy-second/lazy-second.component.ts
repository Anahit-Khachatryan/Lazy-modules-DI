import { Component, inject } from '@angular/core';
import { HelpsService } from '../helps.service';

@Component({
  selector: 'app-lazy-second',
  standalone: true,
  imports: [],
  // providers: [HelpsService],
  templateUrl: './lazy-second.component.html',
  styleUrl: './lazy-second.component.css'
})
export class LazySecondComponent {
  helpsService = inject(HelpsService)

}

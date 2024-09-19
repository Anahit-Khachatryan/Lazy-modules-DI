import { Component, inject } from '@angular/core';
import { HelpsService } from '../helps.service';

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [],
  // providers: [HelpsService], // ete ayspes grenk tarber instacne-er klinen
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.css'
})
export class LazyComponent {
  helpsService = inject(HelpsService)
}

import { Component, inject, Self, SkipSelf } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-child',
  standalone: true,
  imports: [],
  // providers: [HomeService],
  templateUrl: './home-child.component.html',
  styleUrl: './home-child.component.css'
})
export class HomeChildComponent {
  //  homeService = inject(HomeService)
   
  // constructor(@Self() private homeService: HomeService) {}
  constructor(@SkipSelf() private homeService: HomeService) {}

   ngOnInit() {
    console.log(22, this.homeService?.data)
   }
}

//Self - menak ira mot e nayelu, cheghav error e talu
//SkipSelf - iran baca toghnum


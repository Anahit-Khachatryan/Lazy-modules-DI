import { Component, inject, Optional } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeService } from './home.service';
import { HomeChildComponent } from './home-child/home-child.component';
import { HomeParentComponent } from "./home-parent/home-parent.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HomeChildComponent, HomeParentComponent],
  providers: [HomeService], // sa hasaneli e home-in ev home-ic nerkev . steghtsum e elementInjector, vory resolve kani home-i providerineri
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // homeService = inject(HomeService);

  constructor(@Optional() private homeService: HomeService) {}
  ngOnInit() {
    console.log(this.homeService?.data)
  }

}

//Resolution modifiers `
// - optional - ete voch mi pullum chgtav hasnum e null-in, tesnum e Optionalum decoracvats e veradardznum e null, isk ete chlini nullInjector error kta
// - self - menak ira mot e nayelu, cheghav error e talu, եթե ուզում ենք տարբեր Instance-եր 
// - skipSelf  - irany chi nayum, bardzranum e verevnerina nayum
// - host - Hosti mijocov asum enk host elementi providerneric ogtvi, voch te ko - directiveneri depkum, orinak ete directiverum el ka homeService
//hostov ete inject anenk vori vra vor drel enk dra Service knayi. Nayev ng-contnenti depkum el gnum e entegh vortegh ng-contnerty dratsa dra servicen e ogtagortsum
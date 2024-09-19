import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-parent',
  standalone: true,
  imports: [],
  providers: [HomeService],   //viewProvider-ov provide eghatsy hasaneli chi ng-contentov ekatsnerin
  templateUrl: './home-parent.component.html',
  styleUrl: './home-parent.component.css'
})
export class HomeParentComponent {

}

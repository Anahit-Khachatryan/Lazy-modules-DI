import { Injectable, Optional } from '@angular/core';
import { HelpsService } from './helps.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherHelpsService {
  data = 5
  // constructor(@Optional()private testService?: HelpsService) { }
}

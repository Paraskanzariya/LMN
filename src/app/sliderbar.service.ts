import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderbarService {
  private isSliderBar = new BehaviorSubject<boolean>(false);

  isSlider = this.isSliderBar.asObservable();

  constructor() { }

  toggleSliderBar() {
    this.isSliderBar.next(!this.isSliderBar.value);
    console.log("Value >>>>",!this.isSliderBar.value);
    
  }
}

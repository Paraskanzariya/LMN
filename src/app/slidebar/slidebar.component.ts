import { Component, Input, input } from '@angular/core';
import { SliderbarService } from '../sliderbar.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrl: './slidebar.component.css'
})
export class SlidebarComponent {
  isShow: boolean = true;

  constructor(private sliderBar: SliderbarService) {
    this.sliderBar.isSlider.subscribe(isShow => this.isShow = !isShow);
    console.log("isShow >>>>>>",this.isShow);
    
  }

  // Add a method to toggle the slider bar
  toggleSliderBar() {
    this.isShow = !this.sliderBar;
  }
}

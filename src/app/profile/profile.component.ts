import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity: 0
      })),
      transition('in => out', [
        animate('600ms ease-out')
      ]),
      transition('out => in', [
        animate('600ms ease-in')
      ])
    ])
  ]
})
export class ProfileComponent {

  @Input() profile: any;
  @Input() showProfilePopup: boolean = true;
  animationState = 'in';

  constructor(private router: Router) {}

  toggleProfilePopup(): void {
    this.showProfilePopup = !this.showProfilePopup;
    this.animationState = this.showProfilePopup ? 'in' : 'out';
  }

  closeProfilePopup(): void {
    this.showProfilePopup = false;
    this.animationState = 'out';
    this.router.navigate(['/']); // Assuming you want to navigate to the home page
  }
}

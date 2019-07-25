import { Component, OnInit } from '@angular/core';
import {AnimationService} from '../animation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  title = 'Star Wars Explorer';
  constructor(private animation: AnimationService) {}

  ngOnInit() {
    setTimeout(() => {
      this.animation.animated = true;
    }, 13000);
  }

  skipAnimation() {
    this.animation.animated = !this.animation.animated;
  }
}

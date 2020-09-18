import { Component, ElementRef, OnInit } from '@angular/core';
import {faTrophy, faMedal, faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  faTrophy = faTrophy;
  faMedal = faMedal;
  faCaretRight = faCaretRight;
  faCaretLeft = faCaretLeft;

  constructor() { }

  ngOnInit(): void {
  }

  animateArrow(id: HTMLElement) {
  //  if (!id.classList.contains('animate')) {
  //  }

  }

}

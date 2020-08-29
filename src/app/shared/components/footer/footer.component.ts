import { Component, OnInit } from '@angular/core';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import {faBookOpen, faBriefcase, faBuilding, faHome, faLaptopCode} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  home = faHome;
  education = faBookOpen;
  experience = faBriefcase;
  projects = faLaptopCode;
  contact = faAddressCard;
  constructor() {}

  ngOnInit(): void {
  }

  navigate(elementId) {
    const element = document.getElementById(elementId);
    console.log(element);
    element.scrollIntoView({behavior: 'smooth'});
  }

}

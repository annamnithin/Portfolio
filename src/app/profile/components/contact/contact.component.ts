import { Component, OnInit } from '@angular/core';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faLinkedIn = faLinkedin;
  envelope = faEnvelopeOpenText;
  mobile = faMobileAlt;

  showDiv = '';

  constructor() { }

  ngOnInit(): void {
  }

  activate(id) {
    this.showDiv = id;
  }

}

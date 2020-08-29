import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  data = [ 'Hi There!!.', 'I\'m Creative.', 'I Love Design.', 'I Love to Develop.' ];
  constructor(private changeDetector: ChangeDetectorRef) {  }
  ngOnInit(): void {
    const writer = new Typewriter('.about-header', {
      strings: [ 'Hi There!!.', 'I\'m Creative.', 'I Love Design.', 'I Love to Develop.' ],
      autoStart: true,
      loop: true,
      typeColor: 'white'
    });
    const projectsWriter = new Typewriter('#projects-header', {
    });
    const educationWriter = new Typewriter('#education-header', {
    });
    const contactMeWriter = new Typewriter('#contact-me-header', {
    });

    projectsWriter.typeString('Projects').start();
    educationWriter.typeString('Education').start();
    contactMeWriter.typeString('Contact Me').start();
  }
}

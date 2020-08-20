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
    const writer = new Typewriter('.about', {
      strings: [ 'Hi There!!.', 'I\'m Creative.', 'I Love Design.', 'I Love to Develop.' ],
      autoStart: true,
      loop: true,
      typeColor: 'white'
    });
    const projectsWriter = new Typewriter('#projects', {
    });
    const educationWriter = new Typewriter('#education', {
    });
    const contactMeWriter = new Typewriter('#contact-me', {
    });

    projectsWriter.typeString('Projects').start();
    educationWriter.typeString('Education').start();
    contactMeWriter.typeString('Contact Me').start();
  }
}

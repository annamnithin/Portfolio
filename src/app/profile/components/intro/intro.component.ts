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
      strings: [ 'Hi There!!', 'I\'m Nithin.',
      'I\'m a Full stack developer based in India',
      'I like to design unique websites',
      'I like to automate boring stuff',
      'Cartoons and animes attract me more than movies',
      'Want to know more about me?',
      'Please take a tour through my website'],
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

  navigate(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({behavior: 'smooth'});
  }

}

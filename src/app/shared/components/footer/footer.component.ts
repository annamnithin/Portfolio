import { Component, OnInit, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  private aboutData = 'ABOUT';
  private projectsData = 'PROJECTS';
  private contactData = 'CONTACT';
  menu = {
    about: '',
    projects: '',
    contact: '',
  };

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.typingCallback(this.aboutData, 'about');
    this.typingCallback(this.contactData, 'contact');
    this.typingCallback(this.projectsData, 'projects');
  }

  typingCallback(dataToPrint, key) {
    const totalLength = dataToPrint.length;
    const currentLength = this.menu[key].length;
    if (currentLength < totalLength) {
      this.menu[key] = this.menu[key] + dataToPrint[currentLength];
      this.changeDetector.detectChanges();
      setTimeout(() => {
        this.typingCallback(dataToPrint, key);
      }, 200);
    }
  }


}

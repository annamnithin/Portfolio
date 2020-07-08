import { Component, OnInit, ChangeDetectorRef, AfterContentInit } from '@angular/core';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit, AfterContentInit {

  toRotate: any;
  el: any;
  loopNum: number;
  period: number;
  txt: string;
  isDeleting: boolean;
  introduction: string;
  dataPeriod = '2000' ;
  data = [ 'Hi There!!.', 'I\'m Creative.', 'I Love Design.', 'I Love to Develop.' ];
  constructor(private changeDetector: ChangeDetectorRef) {}
  ngOnInit(): void {}
  TextType(el) {
    this.toRotate = this.data;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(this.dataPeriod, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;

  }
  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.introduction = this.txt;
    this.changeDetector.detectChanges();
    const that = this;
    let delta = 200 - Math.random() * 100;
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

    setTimeout(() => {that.tick(); } , delta);
  }

  ngAfterContentInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    const elements = document.getElementsByClassName('typewrite');
    this.TextType(elements[0]);
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #ce3635}';
    document.body.appendChild(css);
    // this.introduction = 'day';
  }

}

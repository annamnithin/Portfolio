import {Component, OnInit} from '@angular/core';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '@shared/contact.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  faLinkedIn = faLinkedin;
  envelope = faEnvelopeOpenText;
  mobile = faMobileAlt;

  showDiv = '';

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      FullName: new FormControl('', [Validators.required]),
      AgentEmail: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Description: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required])
    });
  }

  activate(id) {
    this.showDiv = id;
  }

  onSubmit(FormData) {
    console.log(FormData);
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.warn(error.responseText);
        console.log({error});
        }
      );
  }
}

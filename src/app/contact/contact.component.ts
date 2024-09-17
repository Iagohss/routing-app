import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}

import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule], 
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  text = '';  
  childText = '';
  childFruit = '';

  receiveTextChild(text: string) {
    this.childText = text;
  }
}

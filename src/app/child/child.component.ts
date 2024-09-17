import { Component, Input, EventEmitter, Output } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  constructor(private sharedService: SharedService) { }

  @Input()
  parentText = "";

  @Output()
  sendTextEmitter = new EventEmitter();

  fruit = "Banana";

  sendTextToParent(e: any) {
    this.sendTextEmitter.emit(e.target.value);
  }

  sendFruitToAbout() {
    this.sharedService.sharedText = this.fruit;
  }
}

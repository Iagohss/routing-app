import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  childText = '';
  
  ngOnInit(): void {
    this.childText = this.sharedService.sharedText;
  }
}

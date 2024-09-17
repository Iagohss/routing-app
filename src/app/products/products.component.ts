import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productName = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productName = this.route.snapshot.params['id'];
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

@Input() id: number = 0;
@Input() title: string = '';
@Input() imageUrl: string = '';
@Input() description: string = '';

}

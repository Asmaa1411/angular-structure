import { Component } from '@angular/core';
import { HighlightHoverDirective } from '../../directives/highlight-hover/highlight-hover.directive';
@Component({
  selector: 'card',
  imports: [HighlightHoverDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}

import { Component, OnInit, Input } from '@angular/core';
import { Bank } from '../../model/bank.model';
/**
 * This is the Component decorator.
 * Component selector, scss and html files are declared here
 */
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  /** 
   * this card data value is used to show the card details
   * and its value is got from card list component using input decorator
   */
  @Input() public cardData: Bank[];
}

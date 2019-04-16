import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /** 
   * this summary data value is used to show the summary details
   * and its value is got from card list component using input decorator
   */
  @Input() public summaryData: any;
  constructor() { }

  public ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Bank } from '../model/bank.model';
import { BankService } from '../services/bank.service';
/**
 * This is the Component decorator.
 * Component selector, scss and html files are declared here
 */
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  /**
   * all the records will be stored in this variable.
   * this variable will be used to display the list of records.
   */
  public bankDetails: Bank[];
  /**
   * all the records of the summary will be stored in this variable.
   */
  public summaryDetails: string[]=[];
  constructor(private bankService: BankService) { }

  public ngOnInit(): void {
    this.getAllBankDetails();
  }
  
  /**
   * Gets all bank details
   */
  public getAllBankDetails(): void {
    this.bankService.getAllBankDetails().subscribe((response: Bank[]) => {
      this.bankDetails = response;
      this.convertCurrency(this.bankDetails);
      this.getBank(this.bankDetails);
     });
  }

  /**
   * Converts currency and calculates the total based on the amount
   * @param bankDetails: all the bank values
   */
  public convertCurrency(bankDetails : Bank[]): void {
    bankDetails.forEach(bankRecords => {
      const currncyFormat: string = bankRecords.baseCurrency+'_'+bankRecords.targetCurrency;
      this.bankService.convertCurrency(bankRecords.baseCurrency,bankRecords.targetCurrency).subscribe((response: number)=>{
        bankRecords.rate = response[currncyFormat];
        bankRecords.total = bankRecords.rate * bankRecords.amount;
      })
    })
  }
  /** band name for summary  */
  public getBank(bankDetails : Bank[]): void{
    bankDetails.filter(bankRecords =>{
      if (this.summaryDetails.indexOf(bankRecords.name) === -1) {
        this.summaryDetails.push(bankRecords.name);
    }
     // this.summaryDetails.push(bankRecords.name);
      console.log('nameee',this.summaryDetails);
    })
  }
  // public getAllBankDetails(): void {
  //   this.bankService.getAllBankDetails().pipe(
  //     map((url) => {
  //       console.log(url.length);
  //       for (let index = 0; index < url.length; index++) {
  //         const element = url[index];
  //         return this.bankService.convertCurrency(element.baseCurrency,element.targetCurrency); 
  //       }
  //       // return this.bankService.convertCurrency(url[0].baseCurrency,url[0].targetCurrency); 
  //       // return this.bankService.convertCurrency(url['baseCurrency'],url['targetCurrency']); 
        
  //     }),mergeAll()
  //     ).subscribe(val => {
  //       // this.bankDetails = val;

  //     })
  // }
  
  


  
}
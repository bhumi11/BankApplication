import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../services/bank.service';
import { Bank } from '../model/bank.model';

/**
 * This is the Component decorator.
 * Component selector, scss and html files are declared here
 */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  /** Bank FormGroup of form component */
  public bankForm: FormGroup;
  /** string array for the dropdown values */
  public bCurrency: string[] = [
    'EUR','USD','JPY','BGN','CZK','DKK','GBP','HUF','PLN','RON','SEK','CHF',
    'NOK','HRK','RUB','TRY','AUD','BRL','CAD','CNY','HKD','IDR','INR','KRW','MXN','MYR','NZD','PHP','SGD',
    'THB','ZAR','ILS'];
  /** string array for the dropdown values */
  public tCurrency: string[] = [
      'EUR','USD','JPY','BGN','CZK','DKK','GBP','HUF','PLN','RON','SEK','CHF',
      'NOK','HRK','RUB','TRY','AUD','BRL','CAD','CNY','HKD','IDR','INR','KRW','MXN','MYR','NZD','PHP','SGD',
      'THB','ZAR','ILS'];
  constructor(private fb: FormBuilder, private bankService: BankService) { }
  /**
   * on init, formcontrols are initialised 
   */
  public ngOnInit(): void {
    this.bankForm = this.fb.group({
      name: [''],
      baseCurrency: [''],
      amount: [''],
      targetCurrency: ['']
    });
  }
  
  /**
   * Clears all the form values
   */
  public clearAll(): void{
    this.bankForm.reset();
  } 

  /**
   * this method performs inserting the records
   */
  public onSubmit(): void{
    this.bankService.insertBankDetails(this.bankForm.value).subscribe((response: Bank) => {
     this.clearAll();
    });
  }

}

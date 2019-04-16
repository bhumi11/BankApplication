import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bank } from '../model/bank.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BankService {

  /** base url of the bank */
  public baseUrl: string = 'http://localhost:3000/Bank';
  /** start point of the api url */
  public apiStartPoint: string = 'https://free.currencyconverterapi.com/api/v6/convert?q=';
  /** end point of the api url */
  public apiEndPoint: string = '&compact=ultra&apiKey=1f7b14ae33063043b7d4';
  constructor(private http: HttpClient) { }
  
  /**
   * Inserts bank details
   * @param bank inserted records
   * @returns an observable
   */
  public insertBankDetails(bank: Bank): Observable<Bank> {
    return this.http.post<Bank>(this.baseUrl, bank);
  }
  
  /**
   * Gets all bank details
   * @returns an observable of all bank details 
   */
  public getAllBankDetails(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.baseUrl);
  }
  
  /**
   * Converts currency
   * @param baseCurrency base curreny of the bank
   * @param targetCurrency target currency of the bank
   * @returns converted currency as observable
   */
  public convertCurrency(baseCurrency: string, targetCurrency: string): Observable<number>{
    return this.http.get<number>(this.apiStartPoint+baseCurrency
    +'_'+targetCurrency+this.apiEndPoint)
  }
}

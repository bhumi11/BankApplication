/** bank model */
export class Bank {
    /** id of the model */
    public id: number;
    /** bank name of the model */
    public name: string;
    /** base currency of the model */
    public baseCurrency: string;
    /** amount of the model */
    public amount: number;
    /** target currency of the model */
    public targetCurrency: string
    /** converted rate of the model */
    public rate: number;
    /** total converted amount of the model */
    public total: number;
}

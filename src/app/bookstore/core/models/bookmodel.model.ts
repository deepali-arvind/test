/**
 * 
 * Date: 31/08/2018	
 */
export class BookModel
{
	
	private _date: string;
	
	constructor() { 
	}
	
	set date(value: string) {
		this._date = value;
	}
	get date() : string {
		return this._date;
	}
	
}

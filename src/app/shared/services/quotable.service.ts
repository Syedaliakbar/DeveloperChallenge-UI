import {HttpClient} from '@angular/common/http'
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { QuotableList } from '../models/quotable-list.model';
import { Quotable } from '../models/random.model';
import { ResponseModel } from '../models/response.model';
import { AppSettings } from './api-settings';
@Injectable()
export class QuotableService{
    private http: HttpClient;
    constructor(@Inject(HttpClient) http: HttpClient)
    {
        this.http = http;
    }
    getRandomQuote() :Observable<Quotable>{
        let rendomQutoe : Quotable;
        let url= AppSettings.API_ENDPOINT+ "/Quotable/Random";
        return this.http.get<Quotable>(url).pipe(
            map((data : ResponseModel) => {
                return Quotable.fromJS(data.data);
            }),
            catchError((err=>{
                throw err;
            }))
        )
    }
    getQuoteByAutherName(name:string) :Observable<Quotable[]>{
        let quoteList : Quotable[] =[];
        let url= AppSettings.API_ENDPOINT+ "/Quotable/Quotes/"+name;
        return this.http.get<ResponseModel>(url).pipe(
            map((data : ResponseModel) => {
                data.data?.results.forEach(function(value:Quotable) {
                    var quote = Quotable.fromJS(value);
                    quote =getGroupName(quote);
                    quoteList.push(quote);
                });
                return quoteList;
            }),
            catchError((err=>{
                throw err;
            }))
        )
    }
   
}

function getGroupName(quote:Quotable) : Quotable 
{
    if(quote.length! < 10)
    {
        quote.groupName ="Short"
    }
    else if(quote.length! >= 11 && quote.length!<=20)
    {
        quote.groupName ="Medium"
    }
    else if(quote.length!>20)
    {
        quote.groupName ="Long"
    }
    return quote;
}
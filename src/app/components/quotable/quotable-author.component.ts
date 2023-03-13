import { Component } from '@angular/core';
import { QuotableList } from 'src/app/shared/models/quotable-list.model';
import { Quotable } from 'src/app/shared/models/random.model';
import { QuotableService } from 'src/app/shared/services/quotable.service';

@Component({
  selector: 'author-quotable',
  templateUrl: './quotable-author.component.html',
  styleUrls: ['./quotable-author.component.scss']
})
export class AuthorQuotableComponent {
  quotes : Quotable[] =[];
  autherName= "albert-einstein";
  constructor(
    private quotableService: QuotableService )
  {
  }
  ngOnInit(): void
  {
    this.getQuotesByAutherName(this.autherName);
  }
  getQuotesByAutherName(authorName:string)
  {
    this.quotes =[];
    this.quotableService.getQuoteByAutherName(authorName).subscribe(res => {
      if(res && res != null)
      { 
        this.quotes = res;
      }
    })
   }
}
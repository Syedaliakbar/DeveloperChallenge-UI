import { Component, Injector } from '@angular/core';
import { Quotable } from 'src/app/shared/models/random.model';
import { QuotableService } from 'src/app/shared/services/quotable.service';

@Component({
  selector: 'random-quotable',
  templateUrl: './quotable-random.component.html',
  styleUrls: ['./quotable-random.component.scss']
})
export class RandomQuotableComponent {
  randomQuote = new Quotable();
  constructor(
    private quotableService: QuotableService )
  {
  }
  ngOnInit(): void
  {
    this.getRandomQuote();
  }
  refresh()
  {
    this.getRandomQuote();
  }
  getRandomQuote()
  {
    this.randomQuote = new Quotable();
    this.quotableService.getRandomQuote().subscribe(res => {
      if(res && res != null)
      { 
        this.randomQuote = res;
      }
    })
   }
}
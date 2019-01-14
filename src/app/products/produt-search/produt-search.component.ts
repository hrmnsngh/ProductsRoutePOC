import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-produt-search',
  templateUrl: './produt-search.component.html',
  styleUrls: ['./produt-search.component.css']
})
export class ProdutSearchComponent implements OnInit {

  pageTitle = 'Product Search';
  prdName: string;
  prdCd: string;
  constructor() { }

  ngOnInit() {
  }

  search() {
    // Search Logic
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-produt-search',
  templateUrl: './produt-search.component.html',
  styleUrls: ['./produt-search.component.css']
})
export class ProdutSearchComponent implements OnInit {

  pageTitle = 'Product Search';
  prdName: string;
  prdCd: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    // Search Logic
    this.router.navigate(['/products', { name: this.prdName, code: this.prdCd}]);
  }
}

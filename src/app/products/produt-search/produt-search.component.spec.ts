import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutSearchComponent } from './produt-search.component';

describe('ProdutSearchComponent', () => {
  let component: ProdutSearchComponent;
  let fixture: ComponentFixture<ProdutSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

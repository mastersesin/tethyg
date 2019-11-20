import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailPictureComponent } from './product-detail-picture.component';

describe('ProductDetailPictureComponent', () => {
  let component: ProductDetailPictureComponent;
  let fixture: ComponentFixture<ProductDetailPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

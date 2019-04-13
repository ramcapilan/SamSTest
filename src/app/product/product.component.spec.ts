import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductComponent } from './product.component';
import {  of } from 'rxjs';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Populateprodcuts', () => {
  let component: ProductComponent;
  let mockRestService;
  let productsList;

  beforeEach(async(() => {
    productsList = [
      { Id : 13, ModelCode : "SM-S8ABCD13", ProductName : "Galaxy S3", SerialNumber : "SN00000001" },
      { Id : 25, ModelCode : "SM-S8ABCD17", ProductName : "Galaxy S7", SerialNumber : "SN00000002" }
    ]
    mockRestService = jasmine.createSpyObj(['getProducts']);
    component = new ProductComponent(mockRestService);
    mockRestService.getProducts.and.returnValue(of(productsList));
  }));

  it('should populate pruducts from rest service response', () => {    
    component.getProducts();
    expect(component.products.length).toBe(2);
  });

  it('should call the rest service getProducts method', () => {    
    component.getProducts();
    expect(mockRestService.getProducts).toHaveBeenCalled();
  });
});

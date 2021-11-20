import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenCodeComponent } from './token-code.component';

describe('TokenCodeComponent', () => {
  let component: TokenCodeComponent;
  let fixture: ComponentFixture<TokenCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

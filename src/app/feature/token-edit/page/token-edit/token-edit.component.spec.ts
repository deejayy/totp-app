import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenEditComponent } from './token-edit.component';

describe('TokenEditComponent', () => {
  let component: TokenEditComponent;
  let fixture: ComponentFixture<TokenEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

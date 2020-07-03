import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcardComponent } from './dcard.component';

describe('DcardComponent', () => {
  let component: DcardComponent;
  let fixture: ComponentFixture<DcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

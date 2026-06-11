import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobform4Component } from './jobform4.component';

describe('Jobform4Component', () => {
  let component: Jobform4Component;
  let fixture: ComponentFixture<Jobform4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jobform4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jobform4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

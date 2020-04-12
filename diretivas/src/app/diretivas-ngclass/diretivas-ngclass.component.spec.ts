import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgclassComponent } from './diretivas-ngclass.component';

describe('DiretivasNgclassComponent', () => {
  let component: DiretivasNgclassComponent;
  let fixture: ComponentFixture<DiretivasNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

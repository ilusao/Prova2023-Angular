import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaangularComponent } from './provaangular.component';

describe('ProvaangularComponent', () => {
  let component: ProvaangularComponent;
  let fixture: ComponentFixture<ProvaangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaangularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

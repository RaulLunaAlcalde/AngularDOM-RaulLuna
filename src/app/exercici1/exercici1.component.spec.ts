import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercici1Component } from './exercici1.component';

describe('Exercici1Component', () => {
  let component: Exercici1Component;
  let fixture: ComponentFixture<Exercici1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercici1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercici1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

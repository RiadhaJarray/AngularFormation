import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemmoComponent } from './demmo.component';

describe('DemmoComponent', () => {
  let component: DemmoComponent;
  let fixture: ComponentFixture<DemmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemmoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

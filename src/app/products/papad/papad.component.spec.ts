import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapadComponent } from './papad.component';

describe('PapadComponent', () => {
  let component: PapadComponent;
  let fixture: ComponentFixture<PapadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PapadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PapadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

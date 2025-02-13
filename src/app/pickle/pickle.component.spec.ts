import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickleComponent } from './pickle.component';

describe('PickleComponent', () => {
  let component: PickleComponent;
  let fixture: ComponentFixture<PickleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

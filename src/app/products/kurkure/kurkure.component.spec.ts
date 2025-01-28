import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurkureComponent } from './kurkure.component';

describe('KurkureComponent', () => {
  let component: KurkureComponent;
  let fixture: ComponentFixture<KurkureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KurkureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KurkureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

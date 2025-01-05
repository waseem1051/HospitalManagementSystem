import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcotorsComponent } from './dcotors.component';

describe('DcotorsComponent', () => {
  let component: DcotorsComponent;
  let fixture: ComponentFixture<DcotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcotorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

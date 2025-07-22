import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePipe } from './componente-pipe';

describe('ComponentePipe', () => {
  let component: ComponentePipe;
  let fixture: ComponentFixture<ComponentePipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentePipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

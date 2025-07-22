import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFooter } from './componente-footer';

describe('ComponenteFooter', () => {
  let component: ComponenteFooter;
  let fixture: ComponentFixture<ComponenteFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

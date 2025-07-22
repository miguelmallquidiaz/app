import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHeader } from './componente-header';

describe('ComponenteHeader', () => {
  let component: ComponenteHeader;
  let fixture: ComponentFixture<ComponenteHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

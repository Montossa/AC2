import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoService } from './emprestimo-service';

describe('EmprestimoService', () => {
  let component: EmprestimoService;
  let fixture: ComponentFixture<EmprestimoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmprestimoService],
    }).compileComponents();

    fixture = TestBed.createComponent(EmprestimoService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

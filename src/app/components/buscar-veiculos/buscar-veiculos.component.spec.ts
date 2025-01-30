import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarVeiculosComponent } from './buscar-veiculos.component';

describe('BuscarVeiculosComponent', () => {
  let component: BuscarVeiculosComponent;
  let fixture: ComponentFixture<BuscarVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarVeiculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

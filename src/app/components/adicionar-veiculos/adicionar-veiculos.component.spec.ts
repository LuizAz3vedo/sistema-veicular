import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarVeiculosComponent } from './adicionar-veiculos.component';

describe('AdicionarVeiculosComponent', () => {
  let component: AdicionarVeiculosComponent;
  let fixture: ComponentFixture<AdicionarVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarVeiculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

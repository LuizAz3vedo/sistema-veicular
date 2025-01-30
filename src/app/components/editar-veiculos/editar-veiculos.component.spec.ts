import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVeiculosComponent } from './editar-veiculos.component';

describe('EditarVeiculosComponent', () => {
  let component: EditarVeiculosComponent;
  let fixture: ComponentFixture<EditarVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarVeiculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

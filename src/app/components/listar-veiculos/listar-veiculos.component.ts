import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Veiculo } from '../../../Veiculo';
import { VeiculoService } from '../../services/veiculo.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-listar-veiculos',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './listar-veiculos.component.html',
  styleUrl: './listar-veiculos.component.css',
  providers: [VeiculoService]
})
export class ListarVeiculosComponent implements OnInit {
  
  veiculos: Veiculo[] = [];
  loading = true;
  errorMessage = '';
  

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.carregarVeiculos();

  }

  carregarVeiculos(): void {
    this.veiculoService.getAll().subscribe({
      next: (dados) => {
        this.veiculos = dados;
        this.loading = false;
      },

      error: (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    })
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Veiculo } from '../../../Veiculo';
import { VeiculoService } from '../../services/veiculo.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-buscar-veiculos',
  standalone: true,
  imports: [CommonModule, FormsModule, CarouselModule],
  templateUrl: './buscar-veiculos.component.html',
  styleUrl: './buscar-veiculos.component.css',
  providers: [VeiculoService]
})
export class BuscarVeiculosComponent {

  veiculoId: number | null = null;
  marca: string = '';
  veiculos: Veiculo[] = [];
  errorMessage: string = '';

  constructor(private veiculoService: VeiculoService) { }

  buscarPorId(): void {
    if (this.veiculoId !== null) {
      this.veiculoService.getById(this.veiculoId).subscribe({
        next: (dados) => {
          this.veiculos = [dados];
          this.errorMessage = '';
        },
        error: () => {
          this.veiculos = [];
          this.errorMessage = 'Veículo não encontrado';
        }
    });   
    } else {
      this.veiculos = [];
      this.errorMessage = "Campo de busca vazio";
    }
  }

  buscarPorMarca(): void {
    if (this.marca.trim() !== "") {
      this.veiculoService.getByMarca(this.marca).subscribe({
        next: (dados) => {
          this.veiculos = dados;
          this.errorMessage = dados.length === 0 ? 'Nenhum veículo encontrado' : '';
        },
        error: () => {
          this.veiculos = [];
          this.errorMessage = "Erro ao buscar veículos";
        }
      });
    } else {
      this.veiculos = [];
      this.errorMessage = "Campo de busca vazio";
    }
  }
  /*  
    Alterar a fonte na pagina +++ ---   (ok, services, components)
    carrossel de carros OK (Home, angular.json)
    imagem de carro em cada item (ok)
    idioma translate (não deu)
    menu suspenso  */

}

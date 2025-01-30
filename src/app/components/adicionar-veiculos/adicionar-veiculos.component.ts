import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Veiculo } from '../../../Veiculo';
import { VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-adicionar-veiculos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adicionar-veiculos.component.html',
  styleUrl: './adicionar-veiculos.component.css',
  providers: [VeiculoService]
})
export class AdicionarVeiculosComponent {

  veiculo: Veiculo = {
    id: "",
    marca: "",
    modelo: "",
    ano: 0,
    descricao: "",
    imagensUrl: []
  };

  mensagemSucesso: string = "";
  mensagemErro: string = "";
  mensagemErroCampo: any = {};

  constructor(private veiculoService: VeiculoService) { }

  adicionarVeiculo(): void{
    if (this.veiculo.imagensUrl.some(url => !url.startsWith("http"))) {
      this.mensagemErro = "URL inválida";
      return;
    }

    this.mensagemErroCampo = {};

    if(!this.veiculo.marca.trim()){
      this.mensagemErroCampo.marca = 'O campo "Marca" obrigatório';
      document.getElementById('marca')?.focus();
      return;
    }

    if(!this.veiculo.modelo.trim()){
      this.mensagemErroCampo.modelo = 'O campo "Modelo" obrigatório';
      document.getElementById('modelo')?.focus();
      return;
    }

    if(!this.veiculo.ano || this.veiculo.ano <= 1900 || this.veiculo.ano > 2099){ 
      this.mensagemErroCampo.ano = 'O campo "Ano" deve estar entre 1900 e 2099';
      document.getElementById('ano')?.focus();
      return;
    }

    if (!this.veiculo.descricao.trim()) {
      this.mensagemErroCampo.descricao = 'O campo "Descrição" é obrigatório';
      document.getElementById('descricao')?.focus();
      return;
    }
    
    this.veiculoService.getAll().subscribe({
      next: (veiculos) => {
        const maxId = veiculos.reduce((max, v) => Math.max(max, Number(v.id)), 0);
        this.veiculo.id = (maxId + 1).toString();

        this.veiculoService.create(this.veiculo).subscribe({
          next: () => {
            this.mensagemSucesso = "Veículo adicionado com sucesso!";
            this.mensagemErro = "";
            this.limparFormulario();
          },

          error: () => {
            this.mensagemErro = "Erro ao adicionar veículo";
            this.mensagemSucesso = "";
          }
      });

      
      },

    error: () => {
      this.mensagemErro = "Erro ao buscar veículos existentes";
    }
  
    });

  }

  removerImagem(index: number): void{
    this.veiculo.imagensUrl.splice(index, 1);
  }

  adicionarImagem(): void{
    this.veiculo.imagensUrl.push('');
  }

  limparFormulario(): void{
    this.veiculo = {
      id: "",
      marca: "",
      modelo: "",
      ano: 0,
      descricao: "",
      imagensUrl: []
    };
  }
}

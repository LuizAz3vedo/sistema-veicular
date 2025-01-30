import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo } from '../../../Veiculo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-veiculos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-veiculos.component.html',
  styleUrl: './editar-veiculos.component.css',
  providers: [VeiculoService]
})

export class EditarVeiculosComponent implements OnInit {
  veiculo: Veiculo = {
    id: '',
    marca: '',
    modelo: '',
    ano: 0,
    descricao: '',
    imagensUrl: []
  };

  mensagemSucesso: string = '';
  mensagemErro: string = '';
  mensagemErroCampo: any = {};
  veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService, 
    private route: ActivatedRoute, 
    private router: Router) {}

  ngOnInit(): void {
      this.mensagemErro = '';
      this.mensagemSucesso = '';

      this.veiculoService.getAll().subscribe({
        next: (veiculos) => {
          this.veiculos = veiculos;
          if (this.veiculos.length === 0) {
            this.mensagemErro = 'Nenhum veículo encontrado';
          }
        },
        error: (error) => {
          this.mensagemErro = 'Erro ao carregar veículos';
        }
      })
      const id = this.route.snapshot.paramMap.get('id');
  
      if (id && id !== ":id") {
        this.veiculoService.getById(id).subscribe({
          next: (veiculo) => {
            this.veiculo = veiculo;
          },
          error: () => {
            this.mensagemErro = 'Erro ao carregar veículo, verifique o id';
          }
        })
      } else {
        console.log('id não informado');
      }

        
  }
  selecionarVeiculo(veiculo: Veiculo): void{
    this.veiculo = {...veiculo};
  }

  editarVeiculos(): void{
    const idString = String(this.veiculo.id);

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

    if(!this.veiculo.ano || this.veiculo.ano < 1900 || this.veiculo.ano > 2099){ 
      this.mensagemErroCampo.ano = 'O campo "Ano" deve estar entre 1900 e 2099';
      document.getElementById('ano')?.focus();
      return;
    }

    if (!this.veiculo.descricao.trim()) {
      this.mensagemErroCampo.descricao = 'O campo "Descrição" é obrigatório';
      document.getElementById('descricao')?.focus();
      return;
    }

    this.veiculoService.update(idString, this.veiculo).subscribe({
      next: () => {
        this.mensagemSucesso = 'Veículo atualizado com sucesso';
        this.mensagemErro = '';

        const index = this.veiculos.findIndex((v) => v.id === idString);
        if (index !== -1) {
          this.veiculos[index] = {...this.veiculo};
        }
        
        this.veiculo.id = "";
        
      },
      error: () => {
        this.mensagemErro = 'Erro ao atualizar veículo';
        this.mensagemSucesso = '';
      }
    });
  }

  excluirVeiculo(id: string | number | undefined, event:Event): void{
    event.stopPropagation();
    if (id === undefined) {
      this.mensagemErro = 'Erro ao excluir veículo, id não informado';
      return;
    }
    const idString = String(id);

    if ( confirm('Deseja realmente excluir o veículo?') ) {
      this.veiculoService.delete(idString).subscribe({
        next: () => {
          this.mensagemSucesso = 'Veículo excluído com sucesso';
          this.mensagemErro = '';
          this.veiculos = this.veiculos.filter((v) => v.id !== idString);
          this.reordenarIds();
        },
        error: () => {
          this.mensagemErro = 'Erro ao excluir veículo';
          this.mensagemSucesso = '';
        }
      });
    }
  }

  reordenarIds(): void {
    const veiculosAtualizados = this.veiculos.map((veiculo, index) => {
      veiculo = {...veiculo, id: String(index + 1)};
      return veiculo;
    });

    const exclusoes = this.veiculos.map((veiculo) => 
      this.veiculoService.delete(String(veiculo.id)).toPromise()
    );

    Promise.all(exclusoes).then(() => {
      const criacoes = veiculosAtualizados.map((veiculo) =>
        this.veiculoService.create(veiculo).toPromise()
      );
      return Promise.all(criacoes);
    }).then(() => {
      this.veiculos = veiculosAtualizados;
      this.mensagemSucesso = 'Veículos reordenados com sucesso';
    })
    .catch((error) => {
      this.mensagemErro = 'Erro ao reordenar veículos';
    });

  }

  adicionarImagem(): void {
    this.veiculo.imagensUrl.push('');
  }

  removerImagem(index: number): void {
    this.veiculo.imagensUrl.splice(index, 1);
  }
}






import { Component, OnInit } from '@angular/core';
import { Ong } from 'src/app/Ong';
import { OngService } from 'src/app/services/ong.service';

@Component({
  selector: 'app-nova-ong',
  templateUrl: './nova-ong.component.html',
  styleUrls: ['./nova-ong.component.css']
})
export class NovaOngComponent implements OnInit {
  btnText="Cadastrar";

  constructor(private ongService: OngService) { }

  ngOnInit(): void {}
  async createHandler(ong:Ong){
    const formData = new FormData();
    formData.append("nome",ong.nome);
    formData.append("cep",ong.nome);
    formData.append("endereco",ong.nome);
    formData.append("telefone",ong.nome);
    formData.append("responsavel",ong.nome);
    formData.append("email",ong.nome);
    formData.append("imagem",ong.nome);
   
    if(ong.imagem){
      formData.append('imagem',ong.imagem);
    }
    await this.ongService.createOng(formData).subscribe();
    

  }

}

import { Component, OnInit } from '@angular/core';
import { Ong } from 'src/app/Ong';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { OngService } from 'src/app/services/ong.service';
@Component({
  selector: 'app-edit-ong',
  templateUrl: './edit-ong.component.html',
  styleUrls: ['./edit-ong.component.css']
})
export class EditOngComponent implements OnInit {
  ong!:Ong;
  btnText:string="Editar";

  constructor(private ongService:OngService,
              private route:ActivatedRoute,
              private messagesService:MessagesService,
              private router:Router
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.ongService.getOng(id).subscribe(item=>{
      this.ong = item.data;
    })
  }
  async editHandler(ongData: Ong){
    const id= this.ong.id;
    const formData = new FormData();
    formData.append('nome', ongData.nome);
    formData.append('cep', ongData.nome);
    formData.append('endereco', ongData.nome);
    formData.append('telefone', ongData.nome);
    formData.append('responsavel', ongData.nome);
    formData.append('email', ongData.nome);
    if(ongData.imagem){
      formData.append('imagem', ongData.imagem);
    }
    await this.ongService.updateOng(id, formData).subscribe();
    this.messagesService.add(`Ong ${id} atualizada com sucesso!`);
    this.router.navigate(['/']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { ComboService } from 'src/app/services/combo.service';
import { Combo } from 'src/app/Combo';

@Component({
  selector: 'app-edit-combo',
  templateUrl: './edit-combo.component.html',
  styleUrls: ['./edit-combo.component.css']
})
export class EditComboComponent implements OnInit {
  combo!:Combo;
  btnText:string="Editar";


  constructor(
              private comboService:ComboService,
              private route:ActivatedRoute,
              private messagesService:MessagesService,
              private router:Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.comboService.getCombo(id).subscribe(item=>{
      this.combo = item.data;
    })
  }
  async editHandler(comboData: Combo){
    const id= this.combo.id;
    const formData = new FormData();
    formData.append('produto1', comboData.produto1);
    formData.append('produto2', comboData.produto2);
    formData.append('produto3', comboData.produto3);
    formData.append('produto4', comboData.produto4);    
    formData.append('valor', comboData.valor);
   
    await this.comboService.updateCombo(id, formData).subscribe();
    this.messagesService.add(`Combo ${id} atualizado com sucesso!`);
    this.router.navigate(['/']);
  }

}

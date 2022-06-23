import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ComboService } from 'src/app/services/combo.service';
import { Combo } from 'src/app/Combo';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {
  combo?:Combo;
  baseApiUrl = environment.baseApiUrl;

  constructor(private comboService: ComboService, 
    private route:ActivatedRoute,
    private messagesService:MessagesService,
    private router:Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.comboService
    .getCombo(id)
    .subscribe((item) => (this.combo = item.data));
  }
  async removeHandler(id:number){
    await this.comboService.removeCombo(id).subscribe();

    this.messagesService.add("Combo excluída com sucesso!");

    this.router.navigate(['/']);
  }

}

import { Component, OnInit } from '@angular/core';
import { OngService } from 'src/app/services/ong.service';
import { Ong } from 'src/app/Ong';
import { MessagesService } from 'src/app/services/messages.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css']
})
export class OngComponent implements OnInit {
  ong?:Ong;
  baseApiUrl = environment.baseApiUrl;

  constructor(private ongService: OngService, 
              private route:ActivatedRoute,
              private messagesService:MessagesService,
              private router:Router
              ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.ongService
    .getOng(id)
    .subscribe((item) => (this.ong = item.data));
  }
  async removeHandler(id:number){
    await this.ongService.removeOng(id).subscribe();

    this.messagesService.add("Ong excluída com sucesso!");

    this.router.navigate(['/']);

  }

}

import { Component, OnInit } from '@angular/core';
import { OngService } from 'src/app/services/ong.service';
import { Ong } from 'src/app/Ong';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-ongs',
  templateUrl: './ongs.component.html',
  styleUrls: ['./ongs.component.css']
})
export class OngsComponent implements OnInit {

  allOngs:Ong[] = []
  ongs:Ong[] = []
  baseApiUrl = environment.baseApiUrl
  
  searchTerm:string='';


  constructor(private ongService: OngService) { }

  ngOnInit(): void {
    this.ongService.getOngs().subscribe((items)=>{
      const data = items.data;
      data.map((item)=>{
        item.created_at=new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allOngs = data;
      this.ongs = data;
    });

  }
  search(e:Event):void{
    const target = e.target as HTMLInputElement
    const value = target.value

    this.ongs = this.allOngs.filter(ong =>{
     return ong.nome.toLowerCase().includes(value);
    });


  }


}

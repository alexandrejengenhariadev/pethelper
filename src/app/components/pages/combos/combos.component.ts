import { Component, OnInit } from '@angular/core';
import { Combo } from 'src/app/Combo';
import { environment } from 'src/environments/environment';
import { ComboService } from 'src/app/services/combo.service';


@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css']
})
export class CombosComponent implements OnInit {
  allCombos:Combo[] = []
  combos:Combo[] = []
  baseApiUrl = environment.baseApiUrl
  


  constructor(private comboService: ComboService) { }

  ngOnInit(): void {
    this.comboService.getCombos().subscribe((items)=>{
      const data = items.data;
      data.map((item)=>{
        item.created_at=new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allCombos = data;
      this.combos = data;
    });
  }

}

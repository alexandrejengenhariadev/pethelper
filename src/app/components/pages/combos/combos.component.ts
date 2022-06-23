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
  
  searchTerm:string='';


  constructor(private comboService: ComboService) { }

  ngOnInit(): void {
    this.comboService.getCombos().subscribe((items)=>{
      const data = items.data;
      
      this.allCombos = data;
      this.combos = data;
    });
  }
  search(e:Event):void{
    const target = e.target as HTMLInputElement
    const value = target.value

    this.combos = this.allCombos.filter(ong =>{
     return ong.id;
    });

}
}

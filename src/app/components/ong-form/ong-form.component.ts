import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ong } from 'src/app/Ong';


@Component({
  selector: 'app-ong-form',
  templateUrl: './ong-form.component.html',
  styleUrls: ['./ong-form.component.css']
})
export class OngFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Ong>();
  @Input() btnText!: string;

  ongForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.ongForm = new FormGroup({
      id:new FormControl(''),
      nome:new FormControl('',[Validators.required]),
      cep:new FormControl('',[Validators.required]),
      endereco:new FormControl('',[Validators.required]),
      telefone:new FormControl('',[Validators.required]),
      responsavel:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      imagem :new FormControl('')
    });
  }
  get nome(){
    return this.ongForm.get('nome')!;
  }
  get cep(){
    return this.ongForm.get('cep')!;
  }
  get endereco(){
    return this.ongForm.get('endereco')!;
  }
  get telefone(){
    return this.ongForm.get('telefone')!;
  }
  get responsavel(){
    return this.ongForm.get('responsavel')!;
  }
  get email(){
    return this.ongForm.get('email')!;
  }
  onFileSelected(event:any){
    const file: File = event.target.files[0]
    this.ongForm.patchValue({imagem:file})

  }
  submit(){
    if(this.ongForm.invalid){
      return;
    }
    console.log(this.ongForm.value);
    this.onSubmit.emit(this.ongForm.value);
  }

}

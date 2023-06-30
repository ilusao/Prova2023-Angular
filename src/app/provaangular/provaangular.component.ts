import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpresaService } from '../empresa.service';
import { Empresa } from './empresa';



@Component({
  selector: 'app-provaangular',
  templateUrl: './provaangular.component.html',
  styleUrls: ['./provaangular.component.css']
})
export class ProvaangularComponent implements OnInit {
  empresa : Empresa [] = [];

  formgrupempresa : FormGroup;
  isEditing: boolean = false;

   constructor (private empresaService : EmpresaService,
               private formBuilder : FormBuilder
   ){
       this.formgrupempresa = formBuilder.group({
         id : [''],
         name : [''],
         email: [''],
         address : [''],
         function : ['']

       });
   }

  ngOnInit(): void {
   this.loadEmpresas();
 }

 loadEmpresas(){
     this.empresaService.getempresas().subscribe({

      next: data => this.empresa= data,
     error: msg => console.log ("erro ao chamar o endpoint" + msg)
    })
  }

    save(){
      this.empresaService.save(this.formgrupempresa.value).subscribe(
        {
                next : data => {
                    this.empresa.push(data);
                    this.formgrupempresa.reset();
                }
        }

    )

   }

    delete(empresa : Empresa): void{
      this.empresaService.delete(empresa).subscribe({
        next: () => this.loadEmpresas()
      })

    }
}

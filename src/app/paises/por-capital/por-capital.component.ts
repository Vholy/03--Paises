import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../paises/interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino:string= '';
  hayError:boolean=false;
  placeholder: string= 'Buscar capital...'
  paises : Country[] = [];

  buscar(termino:string){
    this.hayError= false
    this.termino =termino
    this.PaisService.buscarCapital(this.termino)
    .subscribe((paises)=>{
      console.log(paises);
      this.paises=paises;
      
    }, (err)=>{
        console.log('Error');
        this.hayError=true;

        
      }
    )
    
  }
  sugerencias(termino: string){
    this.hayError=false;
    
  }

  
  constructor(private PaisService: PaisService) { }

  

}

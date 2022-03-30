import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../paises/interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor:pointer
      }

    `
  ]
})
export class PorPaisComponent  {

  termino:string= '';
  hayError:boolean=false;
  paises : Country[] = [];
  paisesSugeridos : Country[] = [];

  buscar(termino:string){
    this.hayError= false
    this.termino =termino
    this.PaisService.buscarPais(this.termino)
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
    this.PaisService.buscarPais (termino)
    .subscribe( paises => this.paisesSugeridos = paises.splice(0,3)
    ,(err)=> this.paisesSugeridos= [] )
  }

  
  constructor(private PaisService: PaisService) { }

  

}

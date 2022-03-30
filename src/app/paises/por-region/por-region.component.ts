import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../paises/interfaces/pais.interface';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: []
})
export class PorRegionComponent  {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string =""; 
  paises : Country[] = [];
  



  activarRegion(region:string){
    this.regionActiva=region
    console.log(region);    
  }

  getClaseCSS(region:string):string{
    return ((region===this.regionActiva) ? 'btn-primary': 'btn-outline-primary')
  }

  buscar(regionActiva:string){
    this.regionActiva =regionActiva
    this.PaisService.buscarRegion(this.regionActiva)
    .subscribe((paises)=>{
      console.log(paises);
      this.paises=paises;
      
    })   
  }















  constructor(private PaisService:PaisService) { }
}

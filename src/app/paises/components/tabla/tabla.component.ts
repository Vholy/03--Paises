import { Component, Input } from '@angular/core';
import { PaisService } from '../../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: []
})
export class TablaComponent  {

   @Input() paises: Country[]= []

  constructor(PaisService: PaisService) { }

  

}

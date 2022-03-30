import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais! :Country;

  constructor(
    private activatedRouted: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRouted.params
        .pipe(
          switchMap( ( ({id}) => this.paisService.codePais( id ) ) ),
          tap(console.log)
        
        )
        .subscribe( pais=>  this.pais = pais  );

  }
/*     this.activatedRouted.params
      .subscribe( ({id}) => {console.log(id) ;

        this.paisService.codePais(id)
          .subscribe( pais=> { console.log(pais);})
      })
    } */


}

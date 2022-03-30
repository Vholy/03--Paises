import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { TextinputComponent } from './components/textinput/textinput.component';



@NgModule({
  declarations: [
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent,
    TablaComponent,
    TextinputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent
  ]
})
export class PaisesModule { }

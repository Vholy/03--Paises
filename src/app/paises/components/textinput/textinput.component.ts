import { Component, Output, EventEmitter,OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: []
})
export class TextinputComponent implements OnInit {

    @Output() onEnter:EventEmitter<string> = new EventEmitter();
    @Output() onDebounce: EventEmitter<string>= new EventEmitter();
    @Input() placeholder :string = '';
    termino: string= '';
    debouncer: Subject<string>= new Subject();

  ngOnInit(): void {
    this.debouncer
    .pipe( debounceTime(300) )
    .subscribe(valor=> {console.log('debouncer',valor), this.onDebounce.emit( valor ) } )
  }

    buscar(){
      this.onEnter.emit(this.termino);
      this.debouncer.next(this.termino);


    }

    teclaPresionada(event: any){
      this.debouncer.next(this.termino);
      
    }
  
}



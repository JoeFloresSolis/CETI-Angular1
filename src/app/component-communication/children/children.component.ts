import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {

  public messageAlert:string ='';
  
  @Input() parentNumber:number=0;

  @Output() childrenNumberEvent:EventEmitter<number> = new EventEmitter();
  
  public childrenNumber = 0;
  constructor() {
    console.log('CONSTRUCTOR DEL HIJO');
  }
  
  ngOnInit(): void {
    this.childrenNumber=0;
    console.log('ONINIT DEL HIJO');
  }

  ngOnChanges( changes:any):void{
    console.log('ON CHANGES DEL HIJO');
    console.log(changes); //! Imprime el @input
    if(changes.parentNumber.firstChange == true){
      this.messageAlert='Primera vez';
    }
    else{
      this.messageAlert=`N anterior: ${changes.parentNumber.previousValue}`;
    }
  }
  sendToParent(){
    this.childrenNumber=Math.round(Math.random()*10);
    this.childrenNumberEvent.emit(this.childrenNumber);
  }

}

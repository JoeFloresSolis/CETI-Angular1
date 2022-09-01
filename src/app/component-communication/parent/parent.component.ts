import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit,OnDestroy {

  

  public parentNumber:number =5;

  public childrenNumber:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  sentToChildren(){
    this.parentNumber = Math.round(Math.random()*10);
  }
  recieveFromChildren(e:any){
    //console.log(e);
    this.childrenNumber = e;
  }

  ngOnDestroy(): void {
    console.log('se fue de la página Communication');
  }
}

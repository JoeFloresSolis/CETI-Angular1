import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy,AfterViewInit {

  public apiName:string = 'Pokemones';
  //public subscribe$:Subscription = new Subscription;
  public subscribe$:Subscription = new Subscription;
  public characters:any[] =[];
  @ViewChild("title",{read: ElementRef}) tref!: ElementRef;
  
  constructor( private apiService:ApiService) {
  }
  
  ngOnInit(): void {
    console.log('Oninit')
    //this.apiService.getpersonajes().subscribe( info=>{
    //console.log(this.tref.nativeElement.textContent);
    this.subscribe$=this.apiService.getpersonajes().subscribe( (info:any)=>{
      this.characters=info;
      console.log(this.characters)
      //console.log(info)
    })
  }
  
  ngAfterViewInit(): void {
    console.log('View Implemetation Finish')
    console.log(this.tref.nativeElement.textContent);
  }
  
  ngOnDestroy(): void {
    this.subscribe$.unsubscribe();
  }
}

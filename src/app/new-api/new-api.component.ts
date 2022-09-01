import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-api',
  templateUrl: './new-api.component.html',
  styleUrls: ['./new-api.component.scss']
})
export class NewApiComponent implements OnInit {

  public subscribe$:Subscription = new Subscription;
  public characters$:any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.characters$=this.apiService.getpersonajes();
  }

}

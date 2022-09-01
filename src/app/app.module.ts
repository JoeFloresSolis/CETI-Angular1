import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CharactersComponent } from './characters/characters.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SorteAgePipe } from './pipes/sorte-age.pipe';
import { FriendsComponent } from './friends/friends.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { ChildrenComponent } from './component-communication/children/children.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewApiComponent } from './new-api/new-api.component';



@NgModule({
  declarations: [ //! COMPONENTES
    AppComponent,
    MainComponent,
    CharactersComponent,
    HeaderComponent,
    SorteAgePipe,
    FriendsComponent,
    ParentComponent,
    ChildrenComponent,
    NewApiComponent
  ],
  imports: [ //! LIBRERIAS
  BrowserModule,
  AppRoutingModule,
  HttpClientModule
  ],
  providers: [], //! SERVICIOS
  bootstrap: [AppComponent]
})
export class AppModule { }

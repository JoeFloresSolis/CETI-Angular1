import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { FriendsComponent } from './friends/friends.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NewApiComponent } from './new-api/new-api.component';

const routes: Routes = [
/*   {
    path:'',
    component: HeaderComponent
  }, */
  {
    path:'',
    component: MainComponent
  },
  {
    path:'characters',
    component: CharactersComponent
  },
  {
    path:'new-api',
    component: NewApiComponent
  },
  {
    path:'friends',
    component: FriendsComponent
  },
  {
    path:'communication',
    component: ParentComponent
  },
  {
    path:'**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

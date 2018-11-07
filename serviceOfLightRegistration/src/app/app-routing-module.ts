
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';


const appRoutes: Routes = [
  {path: 'home', component: AppComponent },
  {path: 'register', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

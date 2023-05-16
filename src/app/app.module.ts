import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {FormsModule} from'@angular/forms';
import {RouterModule} from '@angular/router';


import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from'./home.component';
import {ContactComponent } from './contact.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuardService,AuthService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

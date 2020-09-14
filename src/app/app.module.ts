import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/auth/welcome/welcome.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { environment } from 'src/environments/environment';
import { AuthState } from './state/auth.state';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GraphQLModule,
    NgxsModule.forRoot(
      [AuthState],
      { developmentMode: !environment.production }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

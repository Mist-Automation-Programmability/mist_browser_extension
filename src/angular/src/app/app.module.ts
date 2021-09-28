import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './pages/api/api.component';
import { ApiManageComponent } from './pages/api/manage/manage.component';
import { AccountComponent } from './pages/account/account.component';
import { AccountManageComponent } from './pages/account/manage/manage.component';
import { AccountCreateComponent } from './pages/account/create/create.component'
import { AccountManageOrgComponent } from './pages/account/manage_org/manage_org.component';
import { AccountCreateOrgComponent } from './pages/account/create_org/create_org.component'
import { AboutComponent } from './pages/about/about.component'

@NgModule({
  declarations: [AppComponent, ApiComponent, AccountComponent, AccountManageComponent, AccountCreateComponent, AccountManageOrgComponent, AccountCreateOrgComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

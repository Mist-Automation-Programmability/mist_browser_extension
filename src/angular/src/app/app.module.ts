import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './pages/api/api.component';
import { AccountComponent } from './pages/account/account.component';
import { AccountManageComponent } from './pages/account/manage/manage.component';
import { AccountCreateComponent } from './pages/account/create/create.component'
import { DocComponent } from './pages/doc/doc.component'

@NgModule({
  declarations: [AppComponent, ApiComponent, AccountComponent, AccountManageComponent, AccountCreateComponent, DocComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

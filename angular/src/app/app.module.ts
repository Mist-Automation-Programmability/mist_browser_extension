import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './pages/api/api.component';
import { ApiJuniperManageComponent } from './pages/api/juniper-manage/juniper-manage.component';
import { ApiManageComponent } from './pages/api/manage/manage.component';
import { ZtpPasswordComponent } from './pages/api/manage/ztp_password/ztp_password.component';
import { ApiDjangoComponent } from './pages/api/django/django.component';
import { AccountComponent } from './pages/account/account.component';
import { AccountManageComponent } from './pages/account/manage/manage.component';
import { AccountCreateComponent } from './pages/account/create/create.component'
import { AccountManageOrgComponent } from './pages/account/manage_org/manage_org.component';
import { AccountCreateOrgComponent } from './pages/account/create_org/create_org.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({ declarations: [
        AppComponent,
        ApiJuniperManageComponent,
        ApiComponent, ApiManageComponent, ApiDjangoComponent, ZtpPasswordComponent,
        AccountComponent, AccountManageComponent, AccountCreateComponent, AccountManageOrgComponent, AccountCreateOrgComponent,
        AboutComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule, AppRoutingModule, FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { SignupComponent } from './page/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './page/home/home.component';
import { AdminComponent } from './page/admin/admin.component';
import { LoginComponent } from './page/login/login.component';
import { CategoriesAddComponent } from './page/admin/categories-add/categories-add.component';
import { CategoriesUpdateComponent } from './page/admin/categories-update/categories-update.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductAddComponent } from './page/admin/product-add/product-add.component';
import { ProductUpdateComponent } from './page/admin/product-update/product-update.component';
import { ProductsComponent } from './page/admin/products/products.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './page/detail/detail.component';
import { CategoriesComponent } from './page/admin/categories/categories.component';
import { BannerComponent } from './component/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    CategoriesComponent,
    CategoriesAddComponent,
    CategoriesUpdateComponent,
    DashboardComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ProductsComponent,
    DetailComponent,
    BannerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

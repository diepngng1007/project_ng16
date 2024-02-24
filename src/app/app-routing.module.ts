import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductsComponent } from './page/admin/products/products.component';
import { ProductUpdateComponent } from './page/admin/product-update/product-update.component';
import { ProductAddComponent } from './page/admin/product-add/product-add.component';
import { CategoriesAddComponent } from './page/admin/categories-add/categories-add.component';
import { CategoriesUpdateComponent } from './page/admin/categories-update/categories-update.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { DetailComponent } from './page/detail/detail.component';
import { CategoriesComponent } from './page/admin/categories/categories.component';
import { adminGuardGuard } from './guard/admin-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    canActivate: [adminGuardGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product/update/:id', component: ProductUpdateComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/add', component: CategoriesAddComponent },
      { path: 'categories/update/:id', component: CategoriesUpdateComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

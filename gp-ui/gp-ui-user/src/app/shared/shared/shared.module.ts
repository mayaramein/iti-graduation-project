import { NgModule } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { SelectComponent } from '../components/select/select.component';
import { CategoriesMenuComponent } from '../components/categories-menu/categories-menu.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { SharedLayoutComponent } from '../components/shared-layout/shared-layout.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
    CategoriesMenuComponent,
    NotFoundComponent,
    SharedLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
    CategoriesMenuComponent,
    NotFoundComponent,
    SharedLayoutComponent,
    MaterialModule,
    ToastrModule,
  ]
})
export class SharedModule { }

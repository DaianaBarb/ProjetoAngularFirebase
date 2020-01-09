import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{FormsModule} from '@angular/forms';
//firebase
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
//componenntes
import { ProdutoComponent } from './components/produtos/produto/produto.component';
import { ProdutosListComponent } from './components/produtos/produtos-list/produtos-list.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
//service
import { ProdutoService } from './services/produto.service';
import { from } from 'rxjs';
//animacao
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutosListComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

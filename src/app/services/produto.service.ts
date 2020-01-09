import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import {Produto} from '../models/produto';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  selectProduto: Produto=new Produto();
produtoLista: AngularFireList<any>;

  constructor( private firebase: AngularFireDatabase) { 
  
  }
 getAll(){
   return this.firebase.list('produtos')
   .snapshotChanges()
   .pipe(
     map(changes => {
       return changes.map(c => ({ key: c.payload.key,...c.payload.val() }));
     })
   );
 }


  getProduto(){
    return this.produtoLista = this.firebase.list('produtos');
  }
  inserirProduto(p: Produto){
this.produtoLista.push({
  nome:p.nome,
  categoria: p.categoria,
  localizacao: p.localizacao,
  preco: p.preco
});
  }
  excluirProduto($key:string){
    this.produtoLista.remove($key);

  }
  alterarProduto(p: Produto){
 this.produtoLista.update(p.$key,
  {
nome: p.nome,
categoria: p.categoria,
localizacao: p.localizacao,
preco: p.preco
 });
  }
}

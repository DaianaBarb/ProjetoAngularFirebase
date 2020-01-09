import { Component, OnInit } from '@angular/core';
//service
import {ProdutoService} from '../../../services/produto.service';
import {Produto} from '../../../models/produto';
import {ToastrService} from 'ngx-toastr';
import { element } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {
 produtoLista: Produto[];
  constructor(private produtoService: ProdutoService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.produtoService
    .getProduto()
    .snapshotChanges()
    .subscribe(item =>{
this.produtoLista=[];
item.forEach( element =>{
let x=element.payload.toJSON();
x["$key"]=element.key;
this.produtoLista.push(x as Produto);
})
     } )
  }
  onDelete($key:string){
    if(confirm('Tem certeza que deseja elimitar este produto?')){
this.produtoService.excluirProduto($key);
this.toastr.success('Produto excluido com Sucesso!','produto excluido');
  }
else
this.toastr.success('Nenhum produto foi excluido','0 excluido');
}
  onEdit(produto:Produto){
// aqui ele edita ao mesmo tempo this.produtoService.selectProduto=produto;
this.produtoService.selectProduto=Object.assign({},produto);
  }

}

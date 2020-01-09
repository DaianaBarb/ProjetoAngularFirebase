import { Component, OnInit } from '@angular/core';
import {ProdutoService} from '../../../services/produto.service';
import { NgForm } from '@angular/forms';
import {Produto} from '../../../models/produto';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  constructor( private produtoService: ProdutoService,
    private toastr: ToastrService) {
    
   }
 
  ngOnInit() {
    this.produtoService.getProduto();
    this.resetForm();
  }

  onSubmit(produtoForm: NgForm){
    if(produtoForm.value.$key == null){
    this.produtoService.inserirProduto(produtoForm.value);
    this.toastr.success('Produto salvo com sucesso!');
    }
    else{
    this.produtoService.alterarProduto(produtoForm.value);
    this.toastr.success('Produto alterado com Sucesso');
    }
    this.resetForm(produtoForm);
  }
resetForm(produtoForm?: NgForm){
if(produtoForm != null)
  produtoForm.reset();
this.produtoService.selectProduto=new Produto();

}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable()
export class ProdutoService{
    
    protected urlServiceV1: string = "http://localhost:3000/";
    
    constructor(private http: HttpClient){}

    // Fazendo consulta Http através de um mockServer (JsonServer)
    obterProdutos() : Observable<Produto[]> {
        return this.http.get<Produto[]>(this.urlServiceV1 + "produtos");
    }

}
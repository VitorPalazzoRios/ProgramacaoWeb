import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) {}



    obterUsuarios(){
    return this.http.get(`${environment.url}Usuario`);
    }
    obterUsuariosporId(id : any){
      return this.http.get(`${environment.url}Usuario/${id}`);
    }
    inserirUsuario(usuario : any){
      return this.http.post(`${environment.url}Usuario`,usuario);
    }
    alterarUsuario(usuario: any){
      return this.http.put(`${environment.url}Usuario/${usuario.id}`,usuario);
    }
    excluirUsuario(id: any){
      return this.http.delete(`${environment.url}Usuario/${id}`);
}



}

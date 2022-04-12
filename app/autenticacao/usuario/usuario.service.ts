import { Usuario } from './usuario'
import { TokenService } from './../token.service'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import jwtDecode from 'jwt-decode'

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({})

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT()
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken()
    const usuario = jwtDecode(token) as Usuario
    this.usuarioSubject.next(usuario)
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable()
  }

  salvaToken(token: string) {
    this.tokenService.salveToken(token)
    this.decodificaJWT()
  }

  logout() {
    this.tokenService.excluirToken()
    this.usuarioSubject.next({})
  }

  estaLogado() {
    return this.tokenService.possuiToken()
  }
}

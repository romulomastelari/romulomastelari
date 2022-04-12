import { Injectable } from '@angular/core'

const KEY = 'token'

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  retornaToken() {
    return localStorage.getItem(KEY) ?? '' // pega o token se não tiver retorna string em branco
  }

  salveToken(token: string) {
    return localStorage.setItem(KEY, token)
  }

  excluirToken() {
    return localStorage.removeItem(KEY)
  }

  possuiToken() {
    return !!this.retornaToken() // saber se vai retornar um token !! -> boolean
  }
}

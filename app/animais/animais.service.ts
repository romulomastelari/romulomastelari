import { TokenService } from './../autenticacao/token.service'
import { Observable, of, throwError } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Animais, Animal } from './animais'
import { environment } from 'src/environments/environment'
import { catchError, mapTo } from 'rxjs/operators'

const API = environment.apiURL
const NOT_MODIFIED = '304' // erro retornado caso não já tenha sido curtida a imagem

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) {}

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`)
  }
  buscarId(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${API}/photos/${id}`)
  }

  excluirAnimal(id: number): Observable<Animal> {
    return this.httpClient.delete<Animal>(`${API}/photos/${id}`)
  }

  curtirFotos(id: number): Observable<boolean> {
    return this.httpClient
      .post(`${API}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIED ? of(false) : throwError(error)
        }),
      )
  }

  upload(descricao: string, permiteComentario: boolean, arquivo: File) {
    const formData = new FormData()
    formData.append('description', descricao)
    formData.append('allowComments', permiteComentario ? 'true' : 'false')
    formData.append('imageFile', arquivo)
    return this.httpClient.post(
      `${API}/photos/upload`,
      formData,

      { observe: 'events', reportProgress: true },
    )
  }
}

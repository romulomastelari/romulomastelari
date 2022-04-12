import { TokenService } from './token.service'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'

@Injectable()
export class AutenticaoInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (this.tokenService.possuiToken()) {
      const token = this.tokenService.retornaToken()
      const headers = new HttpHeaders().append('x-access-token', token)
      request = request.clone({ headers })
    }
    return next.handle(request)
  }
}

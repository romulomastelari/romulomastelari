import { Router } from '@angular/router'
import { UsuarioService } from './../../autenticacao/usuario/usuario.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  public user$ = this.usuarioService.retornaUsuario()

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {}

  goToHome() {
    this.router.navigate([''])
  }

  usuarioLogado() {
    if (!this.usuarioService.estaLogado()) {
      this.router.navigate([''])
      return false
    }
    return true
  }

  logout() {
    this.usuarioService.logout()
    this.router.navigate([''])
  }

  showRoutes() {
    return !(
      this.router.url === '/home' || this.router.url === '/home/novousuario'
    )
  }
}

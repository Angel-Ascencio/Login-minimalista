import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  usuario = '';
  password = '';
  mensaje = '';
  rol = '';

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin' && this.password === 'admin') {
      this.rol = 'Administrador';
      this.mensaje = '¡Login exitoso como Administrador!';
      this.router.navigate(['/admin']);
      this.limpiarCampos();
    } else if (this.usuario === 'user' && this.password === 'user') {
      this.rol = 'Usuario';
      this.mensaje = '¡Login exitoso como Usuario!';
      this.router.navigate(['/user']);
      this.limpiarCampos();
    } else {
      this.rol = '';
      this.mensaje = 'Usuario o contraseña incorrectos';
    }
  }

  cancelar() {
    this.limpiarCampos();
  }

  private limpiarCampos() {
    this.usuario = '';
    this.password = '';
    this.mensaje = '';
    this.rol = '';
  }
}

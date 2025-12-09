import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login';

describe('Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set error message for wrong credentials', () => {
    component.login();
    expect(component.mensaje).toBe('Usuario o contraseña incorrectos');
  });

  it('should set admin role and message for admin credentials', () => {
    component.usuario = 'admin';
    component.password = 'admin';
    component.login();
    expect(component.rol).toBe('Administrador');
    expect(component.mensaje).toBe('¡Login exitoso como Administrador!');
  });
});

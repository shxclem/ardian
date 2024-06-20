import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
  <div class='row'>
    <div class="col s12 m4 offset-m4" style="padding-top: 30px">
      <div class="card hoverable">
        <div class="card-content center">
          <span class="card-title" style="font-weight: 500 ; text-decoration: underline #26a69a">Page de connexion :</span>
          <p><em>{{ message }}</em></p>
        </div>
        <form #loginForm="ngForm">
          <div>
            <label for="name" style="padding-left: 3px">Name</label>
            <input type="text" id="name" [(ngModel)]="name" name="name" required>
          </div>
          <div>
            <label for="password" style="padding-left: 3px">Password</label>
            <input type="password" id="password" [(ngModel)]="password" name="password" required>
          </div>
        </form>
        <div class="card-action center">
          <a (click)="login()" class="waves-effect waves-light btn"  *ngIf="!authService.isLoggedIn">Se connecter</a>
          <a (click)="logout()" *ngIf="authService.isLoggedIn">Se déconnecter</a>
        </div>
      </div>
    </div>
  </div>
  `
})
export class LoginComponent implements OnInit {
  message: string = "Vous êtes déconnecté. (admin/admin)";
  name!: string;
  password!: string;
  auth!: AuthService;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté.';
    }
    else {
      this.message = 'Identifiant ou mot de passe incorrect.';
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.auth.login(this.name, this.password)
    .subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if(isLoggedIn) {
        this.router.navigate(['/pokemons']);
      }
      else {
        this.password = '';
        this.router.navigate(['/Login']);
      }
      
    })
  }

  logout() {
    this.auth.logout();
    this.message = "Vous êtes déconnecté."
  }
}

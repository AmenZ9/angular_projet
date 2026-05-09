import { Component } from '@angular/core';
import {faEnvelope,faLock, faRightToBracket,faKey,faUserPlus,faEyeSlash,faEye,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // font-awesome icons
  faEnvelope = faEnvelope;
  faLock = faLock;
  faLogin = faRightToBracket;
  faKey = faKey;
  faUserPlus = faUserPlus;
  faEyeSlash  = faEyeSlash;
  faEye = faEye;
  faRightToBracket = faRightToBracket;
  faRightFromBracket = faRightFromBracket;


  showPassword = false;
   msgErreur: string = '';

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  email = '';
  password = '';

  constructor(
    private router: Router,
    private utilisateurService: UtilisateurService
  ) {}

   verifier(f: NgForm): void {

    const e = f.value['email'];
    const p = f.value['password'];

    // get all users (simple approach)
    this.utilisateurService.getTousUtilisateurs().subscribe(users => {

      const foundUser = users.find(
        u => u.email === e && u.password === p
      );

      if (foundUser) {
        alert("Connexion avec succès");
        this.msgErreur = "";

        localStorage.setItem('user', JSON.stringify(foundUser));

        this.router.navigate(['/produits']);
      } else {
        alert("Login et/ou mot de passe incorrect");
      }

    });

  }

}

import { Component } from '@angular/core';
import { faUserPlus, faEnvelope, faLock, faKey, faEye, faEyeSlash, faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // icons
  faUserPlus = faUserPlus;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faKey = faKey;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faUser = faUser;
  faRightToBracket = faRightToBracket;


  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  utilisateur = {
    username: '',
    email: '',
    password: '',
    dateCreation: new Date(),
    role: 'USER'
  };

  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router
  ) { }

  register(form: any) {
    if (form.invalid) return;

    const payload = {
    username: form.value.username,
    email: form.value.email,
    password: form.value.password
  };

    console.log("PAYLOAD SENT:", payload);

    this.utilisateurService.ajouterUtilisateur(payload).subscribe({
      next: () => {

        alert("Compte créé avec succès. Redirection vers la page de connexion...");

        form.resetForm();

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      },

      error: (err: any) => {
  console.error('Erreur inscription:', err);
  console.error('Details:', JSON.stringify(err.error)); 
}
    });
  }
}
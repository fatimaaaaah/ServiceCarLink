import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.css']
})
export class SinscrireComponent {

  constructor(private router: Router) { }

  continuer() {
    // Redirection vers la page souhaitée
    this.router.navigate(['/sinscrire2']);
  }

}

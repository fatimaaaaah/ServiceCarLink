import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.css']
})
export class SeConnecterComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  redirigerVersPage(): void {
    // Rediriger vers la page souhaitée (par exemple 'ma-page')
    this.router.navigate(['/sinscrire']);
  }
  redirigerVersPage1(): void {
    // Rediriger vers la page souhaitée (par exemple 'ma-page')
    this.router.navigate(['/acceuil']);
  }


}


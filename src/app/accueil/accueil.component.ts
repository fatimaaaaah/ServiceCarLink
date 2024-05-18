import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  redirigerVersServices(): void {
    // Rediriger vers la page souhaitée (par exemple 'ma-page')
    this.router.navigate(['/services']);
  }
}

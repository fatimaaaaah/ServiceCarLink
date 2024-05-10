import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinscrire2',
  templateUrl: './sinscrire2.component.html',
  styleUrls: ['./sinscrire2.component.css']
})
export class Sinscrire2Component implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  redirigerVersAcceuil(): void {
    // Rediriger vers la page souhaitée (par exemple 'ma-page')
    this.router.navigate(['/acceuil']);
  }

}

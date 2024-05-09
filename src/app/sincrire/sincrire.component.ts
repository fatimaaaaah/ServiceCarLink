import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinscrire',
  templateUrl: './sincrire.component.html',
  styleUrls: ['./sincrire.component.css']
})
export class SinscrireComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  redirigerVersPage(): void {
    // Rediriger vers la page souhaitée (par exemple 'ma-page')
    this.router.navigate(['/sinscrire2']);
  }

}

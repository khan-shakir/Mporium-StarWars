import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  activeRoute: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  changeRoute(path: string) {
    this.activeRoute = path;
    this.router.navigate(['/'+ path]);
  }

}

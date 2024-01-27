import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  btn = document.querySelector('.navbar-toggler');
  ngOnInit(): void {
    console.log(this.btn);
  }
}

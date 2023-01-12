import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{
  ImageIcon: string;

  constructor(){
    this.ImageIcon = '/assets/iconDarkMod.png';
  }

  ngOnInit(): void {}


public toggle() {
  document.body.classList.toggle('dark-theme')
}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
cantidad : number[] = [1,2,3,4,5,6,7,8,9];
  constructor() { }

  ngOnInit(): void {
  }

}

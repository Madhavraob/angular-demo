import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  useList: Array<any>= [{ name: 'madhav', city: 'hyd', role: 'admin' },
  { name: 'jagadish', city: 'us', role: 'usr' },
  { name: 'manoj', city: 'us', role: 'usr'}]


  constructor() { }

  ngOnInit() {
  }

}

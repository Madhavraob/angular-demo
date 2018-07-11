import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  useList: Array<any>;
  /* = [{ name: 'madhav', city: 'hyd', role: 'admin' },
  { name: 'jagadish', city: 'us', role: 'usr' },
  { name: 'manoj', city: 'us', role: 'usr' }];
*/

  constructor(private _userService : UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users)=>{
      this.useList = users;
    }, (err)=>{
      console.log(err);
    });
  }
  parentlistner(newuser) {

    console.log('parent print', newuser)
  }
}

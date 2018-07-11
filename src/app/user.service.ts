import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers(): Observable<any> {

    return of([{ name: 'madhav', city: 'hyd', role: 'admin' },
    { name: 'jagadish', city: 'us', role: 'usr' },
    { name: 'manoj', city: 'us', role: 'usr' }]);
  }
}

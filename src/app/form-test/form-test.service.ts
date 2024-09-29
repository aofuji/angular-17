import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FormTestService {

  url = 'https://jsonplaceholder.typicode.com/todos/1'

  private http =  inject(HttpClient)

  getAll():Observable<any> {
   return this.http.get(this.url)
  }

}

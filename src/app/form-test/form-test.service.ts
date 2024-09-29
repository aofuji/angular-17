import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type Data = {
  name:string;
  age:number
  id?:string;
}

@Injectable()
export class FormTestService {
  urlBase = 'https://jsonplaceholder.typicode.com';

  private http = inject(HttpClient);

  create(data: Data, url:string = this.urlBase): Observable<Data> {
    return this.http.post<Data>(`${url}/posts`, data);
  }
}

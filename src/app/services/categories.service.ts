import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

import { ICategory } from "../domain/icategory";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private _categoryUrl: string = "http://localhost:51798/api/categories";

  constructor(private _http: HttpClient) {

  }

  getList(): Observable<ICategory[]> {
    return this._http.get<ICategory[]>(this._categoryUrl);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

import { ISupplier } from "../domain/isupplier";

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  private _listUrl: string = "http://localhost:51798/api/suppliers";

  constructor(private _http: HttpClient) {

  }

  getList(): Observable<ISupplier[]> {
    return this._http.get<ISupplier[]>(this._listUrl);
  }

}

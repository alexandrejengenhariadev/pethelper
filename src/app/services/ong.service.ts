import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OngService {
  private baseApiUrl=environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/ongs`

  constructor(private http: HttpClient) { }
  createOng(formData:FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl,formData);
  }
}

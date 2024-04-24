import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import * as md5 from 'md5';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  httpClient = inject(HttpClient);

  private privateKey = environment.marvel_private_key;
  private publicKey = "96468dbbdb15d79e71b59d7a8fde9039"

  private baseUrl = "http://gateway.marvel.com/v1/public/";

  constructor() { }

  getComics(): Observable<any> {
    const timestamp = new Date().getTime();
    const hash = this.generateHash(timestamp);
    const url = `${this.baseUrl}comics?ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;
    return this.httpClient.get<any>(url);
  
  }

  private generateHash(timestamp: number): string {
    return md5(timestamp + this.privateKey + this.publicKey);
  }

}

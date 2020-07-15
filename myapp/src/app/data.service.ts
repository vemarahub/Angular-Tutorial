import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private FAKE_SERVICE_URL ="http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  public getVideos(){
    return this.httpClient.get(this.FAKE_SERVICE_URL+"/videos");
  }

}

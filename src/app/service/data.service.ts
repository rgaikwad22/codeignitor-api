// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dataservice {
  private apiUrl = 'http://localhost/crud-api/api/users';

  // API Key and Basic Auth credentials
  private apiKey = 'CODEX@123';
  private username = 'admin';
  private password = '1234';

  constructor(private http: HttpClient) {}

  // Method to make a GET request with headers
  getData(): Observable<any> {
    const headers = this.createHeaders({
      'X-API-KEY': 'CODEX@123',
    });
    console.log(this.http.get(`${this.apiUrl}`, { headers }))
    return this.http.get(`${this.apiUrl}`, { headers });
  }

  // Method to make a POST request with headers and data
  postData(data: any): Observable<any> {
    const headers = this.createHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': 'CODEX@123',
    });

    return this.http.post(`${this.apiUrl}/endpoint`, data, { headers });
  }

  // Method to create headers with Basic Authentication and additional headers
  private createHeaders(additionalHeaders: { [key: string]: string }): HttpHeaders {
    // Basic Authentication
    const credentials = `${this.username}:${this.password}`;
    const base64Credentials = btoa(credentials);

    // Default headers including API key
    let headers = new HttpHeaders({
      'X-API-KEY': this.apiKey,
      Authorization: `Basic ${base64Credentials}`,
    });

    // Add additional headers
    Object.keys(additionalHeaders).forEach((key) => {
      headers = headers.append(key, additionalHeaders[key]);
    });

    return headers;
  }
}
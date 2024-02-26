import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api/get/articles';
  private searchApi = 'http://localhost:8080/api/get/searched/articles';

  constructor() {}

  getArticles(): Observable<any[]> {
    return new Observable((observer) => {
      fetch(this.apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  getSearchedArticles(searchTerm: any): Observable<any[]> {
    return new Observable((observer) => {
      fetch(this.searchApi + `/${searchTerm}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        observer.next(data);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
      });
    })
  }
}

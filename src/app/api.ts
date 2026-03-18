import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(){}

  async getItems(): Promise<any[]> {
    const response = await fetch(this.apiUrl);
    console.log(response)
    const data = await response.json();
    console.log(data)
    return data;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable, map } from 'rxjs';
import { PLANT_URL } from '../shared/urls';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private http: HttpClient) {}

  /**
   * La méthode getPlants retourne
   * une requête http de type GET (on veut récupérer de données)
   * dont les données seront de type Plant[] (tableau d'objets de type Plant)
   * à partir de l'URL "http://localhost:3000/plants"
   *
   */
  getPlants(): Observable<Plant[]> {
    return this.http.get<{data:Plant[]}>(PLANT_URL).pipe(map(response => response.data));
  }
}

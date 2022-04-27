import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlGenerationService {
  constructor() {}

  getApiEndpointUrl(endpoint: string) {
    return environment.apiUrl + endpoint;
  }
}

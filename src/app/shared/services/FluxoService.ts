import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FluxoService {
  private fluxoId: string = '';

  setFluxoId(id: string) {
    this.fluxoId = id;
  }

  getFluxoId(): string {
    return this.fluxoId;
  }
}

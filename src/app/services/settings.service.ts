import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  isActive: boolean = false;

  constructor() { }

  toggleIsActive = () => {
    this.isActive = !this.isActive;
  }

  close = () => {
    this.isActive = false;
  }
}

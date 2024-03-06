import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoadingActive:boolean = false;

  constructor() { }

  toggleIsLoadingActive = () => {
    this.isLoadingActive = !this.isLoadingActive;
  }
}

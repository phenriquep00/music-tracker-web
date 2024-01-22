// toast.service.ts

import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<{ message: string, type: 'success' | 'warning' } | null>(null);
  toast$ = this.toastSubject.asObservable();

  constructor(private ngZone: NgZone) {}

  showToast(message: string, type: 'success' | 'warning' = 'success') {
    this.toastSubject.next({ message, type });
  }

  clearToast() {
    this.toastSubject.next(null);
    this.ngZone.run(() => {});
  }
}

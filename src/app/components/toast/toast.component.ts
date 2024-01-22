// toast.component.ts

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  imports: [
    CommonModule,
  ]
})

export class ToastComponent implements OnInit, OnDestroy {
  message: string = '';
  type!: 'success' | 'warning';
  showToast: boolean = true;
  private subscription!: Subscription;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.subscription = this.toastService.toast$.subscribe((toast) => {
      if (toast) {
        this.message = toast.message || '';
        this.type = toast.type || 'success';
        this.showToast = true; // Reset showToast to true when a new toast is received
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getToastBackgroundColor(): string {
    return this.type === 'success' ? '#4CAF50' : '#FF9800';
  }

  closeToast() {
    this.showToast = false;
  }
}

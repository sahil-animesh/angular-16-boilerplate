import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor() { }

  toastMixin = Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'General Title',
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  confirmAlert(message: string) {
    return Swal.fire({
      title: 'Are you sure?',
      text: message,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#198754',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      cancelButtonColor: '#ff0000',
    });
  }

  successAlert(message: string) {
    return Swal.fire({
      title: 'Success',
      text: message,
      icon: 'success',
    });
  }

  errorAlert(message: string) {
    return Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
    });
  }

  successToastr(message: string) {
    this.toastMixin.fire({
      title: message
    });
  }

  errorToastr(message: string) {
    this.toastMixin.fire({
      title: message,
      icon: 'error'
    });
  }

  infoToastr(message: string) {
    this.toastMixin.fire({
      title: message,
      icon: 'info'
    });
  }
}

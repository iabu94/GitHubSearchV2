import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  snackBarConfig: MatSnackBarConfig = {
    duration: 2000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: 'error-snack'
  };

  constructor(private snackBar: MatSnackBar) { }

  error(message: string) {
    this.snackBar.open(message, undefined, this.snackBarConfig);
  }
}

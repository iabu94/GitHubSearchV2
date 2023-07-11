import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarCustomComponent } from '../snackbar-custom/snackbar-custom.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  snackBarConfig: MatSnackBarConfig = {
    duration: 2000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: 'custom-snackbar',
    data: { message: '', failiure: false }
  };

  constructor(private snackBar: MatSnackBar) { }

  error(message: string) {
    this.snackBarConfig.data = { message, failiure: true };
    this.snackBar.openFromComponent(SnackbarCustomComponent, this.snackBarConfig);
  }

  success(message: string) {
    this.snackBarConfig.data = { message, failiure: false };
    this.snackBar.openFromComponent(SnackbarCustomComponent, this.snackBarConfig);
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-custom',
  templateUrl: './snackbar-custom.component.html',
  styleUrls: ['./snackbar-custom.component.scss'],
})
export class SnackbarCustomComponent {
  data: any;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public snackBarData: any) {
    this.data = snackBarData;
  }
}

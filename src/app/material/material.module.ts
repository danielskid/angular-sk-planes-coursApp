import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';

const MATERIAL_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  width: '700px',
  maxHeight: '600px',
  disableClose: true,
  hasBackdrop: true
};

const MAT_SNACK_BAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 3500,
  horizontalPosition: 'center',
  verticalPosition: 'bottom'
};

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatSliderModule
];

@NgModule({
  exports: [
    ...MATERIAL_MODULES
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: MATERIAL_DIALOG_GLOBAL_CONFIG
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: MAT_SNACK_BAR_GLOBAL_CONFIG
    }
  ]
})
export class MaterialModule { }

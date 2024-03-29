import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  stack: MatDialogRef<any>[] = [];

  constructor(private dialog: MatDialog) {}

  /**
   * Open a new dialog window with the specified configuration.
   */
  open(content: any, config: MatDialogConfig = {}): MatDialogRef<any> {
    const dialog = this.dialog.open(content, config);

    this.stack.push(dialog);

    return dialog;
  }
  /**
   * Clear all active dialogs from the stack.
   */
  clear() {
    this.stack.forEach(dialogRef => dialogRef.close());
    this.stack = [];
  }
}

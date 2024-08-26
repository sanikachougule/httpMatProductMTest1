import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
title !: string
  constructor(
    private _dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data : string
  ) {
    this.title = data
   }

  ngOnInit(): void {
  }
  getConfirmed(flag: boolean){
    this._dialogRef.close(flag);
  }

}

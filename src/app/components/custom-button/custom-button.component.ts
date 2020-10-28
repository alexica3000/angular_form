import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder} from '@angular/forms';
import {Subject} from 'rxjs';
import {Mate} from '../../models/mate.model';
import {AddMateComponent} from '../add-mate/add-mate.component';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.sass']
})
export class CustomButtonComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();

  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const model = new Mate();
    const dialogRef = this.dialog.open(AddMateComponent, {
      width: '700px',
      disableClose: true,
      data: {
        mate: model
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MateService} from '../../services/mate.service';

@Component({
  selector: 'app-add-mate',
  templateUrl: './add-mate.component.html',
  styleUrls: ['./add-mate.component.sass']
})

export class AddMateComponent implements OnInit {
  name: string;
  age: number;
  gender: boolean;
  mateForm: FormGroup;
  submited: false;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private mateService: MateService) {}

  ngOnInit(): void {
    this.mateForm = this.fb.group({
      name: [this.name, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      age: [this.age],
      email: [null, [Validators.required, Validators.email]],
      gender: [null, [Validators.required]]
    });
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();

    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  onSubmit(): void {
    if (this.mateForm.invalid) {
      this.markAsDirty(this.mateForm);
      return;
    }

    this.mateService.saveMate(this.mateForm.value);
    this.dialog.closeAll();
  }
}

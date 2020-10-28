import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Mate} from './mate.model';
import {Subject} from 'rxjs';

export class MateFormMapper {
  public form: FormGroup;

  constructor(private fb: FormBuilder, mate: Mate, private ngUnsubscribe: Subject<void> = null) {
    mate = mate || {} as Mate;

    this.form = this.fb.group({
      name: [mate.name, Validators.required],
      age: [mate.age],
      email: [mate.email, [Validators.required, Validators.email]],
      gender: [mate.gender, [Validators.required]]
    });
  }

  public toModel(): Mate {
    const result = this.form.value;
    return result as Mate;
  }
}

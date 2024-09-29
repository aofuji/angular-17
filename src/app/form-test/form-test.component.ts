import { Component, inject } from '@angular/core';
import { FormTestService } from './form-test.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-form-test',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [FormTestService],
  templateUrl: './form-test.component.html',
  styleUrl: './form-test.component.scss',
})
export class FormTestComponent {
  private service = inject(FormTestService);

  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    name: null,
    age: null,
  });

  onSubmit() {
    this.service
      .create(this.form.value)
      .pipe(take(1))
      .subscribe({
        next: (res) => console.log(res),
        error: (e: HttpErrorResponse) => console.log(e),
      });
  }
}

import {
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { FormTestService } from './form-test.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-test',
  standalone: true,
  imports: [],
  providers: [FormTestService],
  templateUrl: './form-test.component.html',
  styleUrl: './form-test.component.scss',
})
export class FormTestComponent implements OnInit {
  private service = inject(FormTestService);

  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.service
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (v) => console.log(v),
        error: (e:HttpErrorResponse) => console.log(e)
      });
  }
}

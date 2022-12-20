import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output()
  formChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  public someData: string;

  public someStringControl: FormControl = new FormControl('');
  public someBooleanControl: FormControl = new FormControl(false);
  public form: FormGroup = new FormGroup({
    someStringControl: this.someStringControl,
    someBooleanControl: this.someBooleanControl
  });

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        delay(500)
      )
      .subscribe(() => {
        this.formChange.emit(this.form.value);
      });
  }
}

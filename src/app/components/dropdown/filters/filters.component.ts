import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FiltersComponent,
      multi: true,
    },
  ],
})
export class FiltersComponent
  implements OnInit, ControlValueAccessor, OnDestroy
{
  form: FormGroup;
  onTouched: any = () => {};

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      tester: [],
      generos: new FormArray([]),
    });
  }

  get checksFromArray() {
    return this.form.controls['generos'] as FormArray;
  }

  private _addCheckboxes(checkboxArray: string[]) {
    checkboxArray.forEach(() => {
      let checksFromArray = this.form.controls['generos'] as FormArray;

      checksFromArray.push(new FormControl(false));
    });
  }

  writeValue(obj: any): void {
    obj && this.form.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe((data) => {
      fn(data);
      this.onTouched();
    });
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.filterControls.forEach((_) => {
      this.checksFromArray.push(new FormControl(false));
    });
  }
  ngOnDestroy(): void {}

  @Input()
  filterList: any = [];

  @Input()
  filterControls: string[] = [];

  @Input()
  nameFormArray = '';
}

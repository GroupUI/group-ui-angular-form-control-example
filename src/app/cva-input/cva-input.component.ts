import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {GroupuiInput} from "@sdc-wob-type-3/group-ui-angular";

@Component({
  selector: 'app-cva-input',
  templateUrl: './cva-input.component.html',
  styleUrls: ['./cva-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CvaInputComponent,
      multi: true
    }
  ]
})
export class CvaInputComponent implements OnInit, ControlValueAccessor {

  @ViewChild('input', {static: true}) input!: GroupuiInput;

  @Input() label: string = '';
  @Input() description: string = '';

  constructor() {
  }

  ngOnInit(): void {}

  onInput = (e: CustomEvent) => {
    const data = (e.target as unknown as GroupuiInput).value;
    this.writeValue(data);
  }

  onChange = (text: string) => {};

  registerOnChange(fn: (text: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.input.disabled = isDisabled;
  }

  writeValue(text: string): void {
    this.input.value = text;
    this.onChange(text);
  }

}

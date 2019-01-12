import { Component, OnInit } from '@angular/core';
// import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  // bsValue = new Date();
  // bsRangeValue: Date[];
  // maxDate = new Date();
  form: FormGroup;

  dateConfig = {
    // dateInputFormat: 'DD-MM-YYYY',
    containerClass: 'theme-blue'
  };

  constructor(private _fb: FormBuilder) {
    // this.localeService.use('pl');
    // this.maxDate.setDate(this.maxDate.getDate() + 7);
    // this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit() {
    this.form = this._fb.group({
      fname: [''],
      date: [new Date(Date.now())]
    });

    this.form.controls.fname.valueChanges.subscribe(r => console.log(r));
  }

}

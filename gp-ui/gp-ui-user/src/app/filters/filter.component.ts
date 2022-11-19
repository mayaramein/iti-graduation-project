import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {


  isSubmitted = false;
  Type: any = ['Apartment', 'Duplex', 'Villa'];
  City: any = ['Cairo', 'Alex', 'Mansoura'];
  RoomsNumber: any = ['1', '2', '3'];

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  registrationForm = this.fb.group({
    typeName: ['', [Validators.required]],
    cityName: ['', [Validators.required]],
    roomsNumber: ['', [Validators.required]],
  });
  changeType(e: any) {
    this.typeName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeCity(e: any) {
    this.cityName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeRoomsNumber(e: any) {
    this.roomsNumber?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  // Access formcontrols getter
  get typeName() {
    return this.registrationForm.get('typeName');
  }
  get cityName() {
    return this.registrationForm.get('cityName');
  }

  get roomsNumber() {
    return this.registrationForm.get('roomsNumber');
  }


  

  onSubmit(): void {
    console.log(this.registrationForm);
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.registrationForm.value));
    }

  }
}

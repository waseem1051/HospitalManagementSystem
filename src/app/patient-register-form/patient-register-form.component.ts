import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IPatient } from '../patient.service';


@Component({
  selector: 'app-patient-register-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './patient-register-form.component.html',
  styleUrl: './patient-register-form.component.css'
})
export class PatientRegisterFormComponent {
  

  Patient:IPatient={
    Pid: 0,
    Pname: '',
    gender: '',
    contact: '',
    DOB: new Date(),
    reason: '',
    medication: '',
    doctorId: 0,
    height: 0,
    weight: 0,
    Diagnosis: '',
    temp: '',
    sugarBp: '',
    advice: '',
    CreatedOn: 0,
    CreatedBy: new Date(),
    UpdatedBy: 0,
    UpdatedOn: new Date(),
  };
formData:any={};
onSubmit(form:NgForm)
{

  this.formData=form.value;
  console.log('form submitted',this.formData)

}
 
}

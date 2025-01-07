import { Component, OnInit } from '@angular/core';
import { PatientRegisterFormComponent } from "../patient-register-form/patient-register-form.component";
import { PatientService } from '../patient.service';
import { UpperCasePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patients',
  standalone: true,
  providers:[PatientService],
  imports: [PatientRegisterFormComponent,UpperCasePipe,RouterLink,RouterOutlet],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class PatientsComponent implements OnInit{


  // constructor(public service:PatientService){}

  ngOnInit(): void {
  
  }
}

import { Component } from '@angular/core';
import { PatientRegisterFormComponent } from "../patient-register-form/patient-register-form.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [PatientRegisterFormComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterpageComponent } from "./masterpage/masterpage.component";
import { PatientRegisterFormComponent } from "./patient-register-form/patient-register-form.component";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MasterpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HospitalManagementSystem';
}

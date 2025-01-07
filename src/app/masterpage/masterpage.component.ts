import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { PatientRegisterFormComponent } from "../patient-register-form/patient-register-form.component";

@Component({
  selector: 'app-masterpage',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, PatientRegisterFormComponent],
  templateUrl: './masterpage.component.html',
  styleUrl: './masterpage.component.css'
})
export class MasterpageComponent {

}

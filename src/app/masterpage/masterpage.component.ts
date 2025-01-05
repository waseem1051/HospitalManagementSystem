import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-masterpage',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './masterpage.component.html',
  styleUrl: './masterpage.component.css'
})
export class MasterpageComponent {

}

import { Injectable, OnInit } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class PatientService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }

  AllPatients:IPatient[]=[];
  SinglePatient:IPatient={
    Pid: 0,
    Pname: '',
    gender: '',
    DOB:new Date(),
    contact: '',
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


  url = "http://localhost:50491/";


  getPatients()
  {
    this.http.get(this.url+"api/PatientApi").subscribe(data=>{this.AllPatients=data as IPatient[];})
  }
  getPatient(id:any)
  {
    this.http.get(this.url+"api/PatientApi/"+id).subscribe(data=>{this.SinglePatient=data as IPatient});
  }


}

export interface IPatient {
  Pid: number;
  Pname: string;
  gender: string;
  contact: string;
  DOB:Date;
  reason: string;
  medication: string;
  doctorId: number;
  height: number;
  weight: number;
  Diagnosis: string;
  temp: string;
  sugarBp: string;
  advice: string;
  CreatedOn: number;
  CreatedBy: Date;
  UpdatedBy: number;
  UpdatedOn: Date;
}


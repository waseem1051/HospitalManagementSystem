import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DcotorsComponent } from './dcotors/dcotors.component';
import { PatientsComponent } from './patients/patients.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

    {path:'/admin',component:AdminComponent},
    {path:'/doctors',component:DcotorsComponent},
    {path:'/patients',component:PatientsComponent},
    {path:'/accounts',component:AccountsComponent},
    {path:'/aboutUs',component:AboutUsComponent},
    {path:'/contact',component:ContactComponent},
    
    
    
    
    
];

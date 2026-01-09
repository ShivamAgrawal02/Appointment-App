import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';


@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.css']
})
export class AppointmentlistComponent {
 appointmentDescription:string="";
 appointmentDate:Date = new Date();
 appointments:Appointment []=[];
  AddAppointment()
  {
    let newappointment:Appointment={
      id:Date.now(),
      description: this.appointmentDescription,
      date:this.appointmentDate
    }
    this.appointments.push(newappointment);
    localStorage.setItem("appointments",JSON.stringify(this.appointments));
    this.appointmentDate= new Date();
    this.appointmentDescription="";

  
  }

  DeleteAppointment(index:number)
  {
    this.appointments.splice(index,1);
    localStorage.setItem("appointments",JSON.stringify(this.appointments));
  }


}

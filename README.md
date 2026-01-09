📅 AppointmentApp (Angular)

AppointmentApp is a simple Angular application built to understand and practice core Angular concepts such as component architecture, data binding, lifecycle hooks, and browser storage.

This project focuses on learning Angular fundamentals through hands-on implementation rather than complex UI or backend integration.

🚀 Features

Add appointments with description and date

Display list of appointments dynamically

Delete appointments

Persist appointments using Browser Local Storage

Data remains available after page refresh

🧠 What I Learned from This Project
1️⃣ Angular Architecture

Angular project structure

Role of:

Modules (AppModule)

Components

Templates (HTML)

Models (Interfaces)

How Angular connects HTML, TypeScript, and Modules

2️⃣ Data Binding in Angular
🔹 One-Way Data Binding

Interpolation:

{{ appointment.description }}


Property binding:

[ngModel]="appointmentDate"

🔹 Two-Way Data Binding

Used [(ngModel)] to synchronize UI and component state:

[(ngModel)]="appointmentDescription"

3️⃣ Angular Directives

Structural directive:

*ngFor for rendering lists

Event binding:

(click)="addAppointment()"

4️⃣ Forms Handling

Used Template-Driven Forms

Imported and worked with FormsModule

Learned how <input type="date"> behaves in Angular

Understood differences between string and Date in form binding

5️⃣ Component Lifecycle (ngOnInit)

Learned Angular lifecycle hooks

Used ngOnInit() to:

Load appointments from Local Storage

Initialize component state on load

6️⃣ Local Storage (Persistence)

Stored data using:

localStorage.setItem('appointments', JSON.stringify(this.appointments));


Retrieved data using:

localStorage.getItem('appointments');


Learned that Local Storage stores stringified data only

Understood how Date objects are serialized and restored

7️⃣ TypeScript & Models

Created and used interfaces for strong typing

Learned how mismatched models cause template errors

Fixed Angular compile-time template errors

export interface Appointment {
  id: number;
  description: string;
  date: Date;
}

8️⃣ Debugging & Error Resolution

Fixed Angular errors like:

TS2339 (Property does not exist)

NG0303 (ngFor syntax issues)

Used browser DevTools and console.log() effectively

Learned importance of strict typing in Angular templates

🛠️ Tech Stack

Angular 16

TypeScript

HTML / CSS

Browser Local Storage

▶️ Running the Application
npm install
ng serve


Open in browser:

http://localhost:4200


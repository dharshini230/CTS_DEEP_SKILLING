import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    CourseListComponent,
    StudentProfileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
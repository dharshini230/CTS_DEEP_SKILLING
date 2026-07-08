import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseCardComponent } from '../course-card/course-card.component';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  courses: any[] = [];
  searchTerm = '';
  loading = true;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe(data => {

      this.courses = data.map((item: any) => ({
        name: item.title,
        code: 'CS' + item.id,
        credits: 3,
        grade: 'A'
      }));

      this.loading = false;

    });

  }

  get filteredCourses() {

    return this.courses.filter(course =>
      course.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

  }

}
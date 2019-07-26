import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', //css selector (.class) (#id)
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
            {{ course }}
            </li>
        </ul>
        
        <button class="btn btn-outline-primary" [class.active]="isActive">Click</button>`
})
export class CoursesComponent {
    title = "List of courses:";
    courses;
    isActive = true;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}
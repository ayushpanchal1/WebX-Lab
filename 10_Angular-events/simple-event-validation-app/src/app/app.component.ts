import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  name: string = '';
  email: string = '';
  submittedForms: { name: string, email: string }[] = [];

  onSubmit(form: any) {
    if (form.valid) {
      this.submittedForms.push({ name: this.name, email: this.email });
      this.name = '';
      this.email = '';
    }
  }
}
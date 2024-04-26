// // app.component.ts
// import { Component } from '@angular/core';

// interface Feedback {
//   name: string;
//   rollNumber: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   Feedbacks: Feedback[] = [
//     { name: 'John Doe', rollNumber: '101' },
//     { name: 'Jane Smith', rollNumber: '102' },
//     { name: 'Bob Johnson', rollNumber: '103' },
//   ];
//   newFeedback: Feedback = { name: '', rollNumber: '' };
//   selectedFeedback: Feedback = { name: '', rollNumber: '' };
//   showAddFormFlag: boolean = false;
//   showEditFormFlag: boolean = false;

//   showAddForm() {
//     this.showAddFormFlag = true;
//     this.showEditFormFlag = false;
//   }

//   addFeedback() {
//     this.Feedbacks.push(this.newFeedback);
//     this.newFeedback = { name: '', rollNumber: '' };
//     this.showAddFormFlag = false;
//   }

//   editFeedback(Feedback: Feedback) {
//     this.selectedFeedback = { ...Feedback };
//     this.showEditFormFlag = true;
//     this.showAddFormFlag = false;
//   }

//   updateFeedback() {
//     const index = this.Feedbacks.findIndex(
//       (s) => s.rollNumber === this.selectedFeedback.rollNumber
//     );
//     if (index !== -1) {
//       this.Feedbacks[index] = { ...this.selectedFeedback };
//       this.selectedFeedback = { name: '', rollNumber: '' };
//       this.showEditFormFlag = false;
//     }
//   }

//   deleteFeedback(Feedback: Feedback) {
//     const index = this.Feedbacks.indexOf(Feedback);
//     if (index !== -1) {
//       this.Feedbacks.splice(index, 1);
//     }
//   }
// }

// app.component.ts
// import { Component, OnInit } from '@angular/core';

// interface Feedback {
//   name: string;
//   rollNumber: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements OnInit {
//   Feedbacks: Feedback[] = [];
//   newFeedback: Feedback = { name: '', rollNumber: '' };
//   selectedFeedback: Feedback = { name: '', rollNumber: '' };
//   showAddFormFlag: boolean = false;
//   showEditFormFlag: boolean = false;

//   ngOnInit() {
//     // Retrieve Feedback data from local storage when the component initializes
//     const storedFeedbacks = localStorage.getItem('Feedbacks');
//     if (storedFeedbacks) {
//       this.Feedbacks = JSON.parse(storedFeedbacks);
//     }
//   }

//   showAddForm() {
//     this.showAddFormFlag = true;
//     this.showEditFormFlag = false;
//   }

//   addFeedback() {
//     this.Feedbacks.push(this.newFeedback);
//     this.saveFeedbacksToLocalStorage();
//     this.newFeedback = { name: '', rollNumber: '' };
//     this.showAddFormFlag = false;
//   }

//   editFeedback(Feedback: Feedback) {
//     this.selectedFeedback = { ...Feedback };
//     this.showEditFormFlag = true;
//     this.showAddFormFlag = false;
//   }

//   updateFeedback() {
//     const index = this.Feedbacks.findIndex(
//       (s) => s.rollNumber === this.selectedFeedback.rollNumber
//     );
//     if (index !== -1) {
//       this.Feedbacks[index] = { ...this.selectedFeedback };
//       this.saveFeedbacksToLocalStorage();
//       this.selectedFeedback = { name: '', rollNumber: '' };
//       this.showEditFormFlag = false;
//     }
//   }

//   deleteFeedback(Feedback: Feedback) {
//     const index = this.Feedbacks.indexOf(Feedback);
//     if (index !== -1) {
//       this.Feedbacks.splice(index, 1);
//       this.saveFeedbacksToLocalStorage();
//     }
//   }

//   private saveFeedbacksToLocalStorage() {
//     localStorage.setItem('Feedbacks', JSON.stringify(this.Feedbacks));
//   }
// }

// app.component.ts
import { Component, OnInit } from '@angular/core';

interface Feedback {
  name: string;
  rollNumber: string;
  email: string;
  TeacherName: string;
  Rating: string;
  Comments: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  Feedbacks: Feedback[] = [];
  newFeedback: Feedback = {
    name: '',
    rollNumber: '',
    email: '',
    TeacherName: '',
    Rating: '',
    Comments: '',
  };
  selectedFeedback: Feedback = {
    name: '',
    rollNumber: '',
    email: '',
    TeacherName: '',
    Rating: '',
    Comments: '',
  };
  showAddFormFlag: boolean = false;
  showEditFormFlag: boolean = false;

  ngOnInit() {
    // Retrieve Feedback data from local storage when the component initializes
    const storedFeedbacks = localStorage.getItem('Feedbacks');
    if (storedFeedbacks) {
      this.Feedbacks = JSON.parse(storedFeedbacks);
    }
  }

  showAddForm() {
    this.showAddFormFlag = true;
    this.showEditFormFlag = false;
  }

  addFeedback() {
    this.Feedbacks.push(this.newFeedback);
    this.saveFeedbacksToLocalStorage();
    this.newFeedback = {
      name: '',
      rollNumber: '',
      email: '',
      TeacherName: '',
      Rating: '',
      Comments: '',
    };
    this.showAddFormFlag = false;
  }

  editFeedback(Feedback: Feedback) {
    this.selectedFeedback = { ...Feedback };
    this.showEditFormFlag = true;
    this.showAddFormFlag = false;
  }

  updateFeedback() {
    const index = this.Feedbacks.findIndex(
      (s) => s.rollNumber === this.selectedFeedback.rollNumber
    );
    if (index !== -1) {
      this.Feedbacks[index] = { ...this.selectedFeedback };
      this.saveFeedbacksToLocalStorage();
      this.selectedFeedback = {
        name: '',
        rollNumber: '',
        email: '',
        TeacherName: '',
        Rating: '',
        Comments: '',
      };
      this.showEditFormFlag = false;
    }
  }

  deleteFeedback(Feedback: Feedback) {
    const index = this.Feedbacks.indexOf(Feedback);
    if (index !== -1) {
      this.Feedbacks.splice(index, 1);
      this.saveFeedbacksToLocalStorage();
    }
  }

  private saveFeedbacksToLocalStorage() {
    localStorage.setItem('Feedbacks', JSON.stringify(this.Feedbacks));
  }
}

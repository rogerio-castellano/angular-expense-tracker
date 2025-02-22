import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFilterComponent } from './expense-filter/expense-filter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExpenseListComponent, ExpenseFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-expense-tracker';
}

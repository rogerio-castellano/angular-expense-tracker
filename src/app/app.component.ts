import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFilterComponent } from './expense-filter/expense-filter.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ExpenseListComponent,
    ExpenseFilterComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-expense-tracker';
}

import { Component } from '@angular/core';
import categories from '../data/categories';

@Component({
  selector: 'app-expense-form',
  imports: [],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  categories = categories;
}

import { Component } from '@angular/core';
import categories from '../data/categories';

@Component({
  selector: 'app-expense-filter',
  imports: [],
  templateUrl: './expense-filter.component.html',
  styleUrl: './expense-filter.component.css',
})
export class ExpenseFilterComponent {
  categories = categories;
}

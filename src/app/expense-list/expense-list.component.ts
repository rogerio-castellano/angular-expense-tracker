import { Component, Input } from '@angular/core';
import Expense from '../models/Expense.model';

@Component({
  selector: 'app-expense-list',
  imports: [],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css',
})
export class ExpenseListComponent {
  @Input({ required: true }) expenses: Expense[] = [];
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
//declare the title
title: string = 'Simple Calculator';
// Declare the input variables
x: number = 0;
y: number = 0;
// Declare the output variable
result: number = 0;
// Declare the select options(an array of strings)
operations: string[] = ['+', '-', '*', '/'];
// Declare the selected operation
operation: string = '+';

// Define a method to calculate the result
calculate(): void {
  switch (this.operation) {
    case '+':
      this.result = this.x + this.y;
      break;
    case '-':
      this.result = this.x - this.y;
      break;
    case '*':
      this.result = this.x * this.y;
      break;
    case '/':
      this.result = this.x / this.y;
      break;
    default:
      this.result = 0;
  }
}

}

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
// Declare the input variables
a: number = 0;
b: number = 0;
// Declare the output variable
result: number = 0;
// Declare the select options
operations: string[] = ['+', '-', '*', '/'];
// Declare the selected operation
operation: string = '+';

// Define a method to calculate the result
calculate() {
  switch (this.operation) {
    case '+':
      this.result = this.a + this.b;
      break;
    case '-':
      this.result = this.a - this.b;
      break;
    case '*':
      this.result = this.a * this.b;
      break;
    case '/':
      this.result = this.a / this.b;
      break;
    default:
      this.result = 0;
  }
}

}

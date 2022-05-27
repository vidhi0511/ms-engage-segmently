import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  radioValue = "A";
  optionList = [
    { label: 'Car A', value: 'Car A' },
    { label: 'SUV -A', value: 'SUV -A' }
  ];
  selectedValue = { label: 'Car A', value: 'Car A' };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compareFn = (o1: any, o2: any): boolean => (o1 && o2 ? o1.value === o2.value : o1 === o2);
  title: any;

  log(value: { label: string; value: string;}): void {
    console.log(value);
  }
}

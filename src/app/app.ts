import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
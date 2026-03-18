import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api';   // ✅ correct path
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,   // ✅ IMPORTANT for Angular 17
  imports: [CommonModule],
  templateUrl: './items.html',   // ✅ correct file name
  styleUrls: ['./items.css']     // ✅ correct file name
})
export class ItemsComponent implements OnInit {

  items: any[] = [];

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    const allItems = await this.apiService.getItems();
    this.items = allItems.slice(0, 10);
    this.cdr.detectChanges();
  }
}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrl: './page-loader.component.css'
})
export class PageLoaderComponent {
  @Input() isLoading: boolean = false; // Controls loader visibility
  @Input() loadingMessage: string = 'Loading, please wait...'; 
}

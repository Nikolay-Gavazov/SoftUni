import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';


@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {

  themesList: Theme[] = [];
  isLoading: boolean = true;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next:(themes) => {
        this.isLoading = false;
        this.themesList = themes;
      },
      error:(error) =>{
        this.isLoading = false;
        console.log(error);
      }
  });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  theme: Theme | undefined ;

  isLoading: boolean = true;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    const id = this.activatedRoute.snapshot.params['id'] || '';
    
    this.apiService.getTheme(id).subscribe((theme) => {
        this.isLoading = false;
        this.theme = theme;;
  });
  }
}

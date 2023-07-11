import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit , AfterViewInit{

@ViewChild('themeForm') themeForm!: NgForm

constructor(private apiService: ApiService, private router: Router){}
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
  }

  onSubmit(): void{
    console.log(this.themeForm.value);
    const name = this.themeForm.value.themeName;
    const text = this.themeForm.value.postText;
    this.apiService.createTheme(name, text).subscribe((response) => {
      console.log(response);
      
    });
    ;
    
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

	constructor(private http: HttpClient) {
	}

    ngOnInit(): void {
		this.http.get(`${environment.apiEndpoint}/users`,{
		}).subscribe((response:any)=>{
			console.log(response); 
		});
    }
  
}

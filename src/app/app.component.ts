import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpringbootService } from './springboot.service';
import { UserModel } from './models/UserModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'springboot-frontend';
  data: UserModel | undefined;

  constructor(private sb: SpringbootService) {}

  ngOnInit(): void {

    this.sb.getData().subscribe((response: UserModel) => {
      this.data = response;
    });
  }


}

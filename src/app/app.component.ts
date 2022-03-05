import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'degerlendirme-projesi';

  constructor(private authService:AuthService){

  }
  isAuthenticated(){
  if(this.authService.isAuthenticated)
    return true;
  return false;
  }
}

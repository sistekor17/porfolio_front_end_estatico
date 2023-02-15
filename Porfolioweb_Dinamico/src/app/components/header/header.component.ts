import { Component} from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private datosPorfolio: PorfolioService ){}

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos();
  }

}

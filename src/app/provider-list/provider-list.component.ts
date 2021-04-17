import { Component, OnInit } from '@angular/core';
import { Avatar } from '../entities';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  constructor(private service: ProvidersService) { }

  mesproviders: string[];
  users: Avatar[];
  ngOnInit(): void {
    this.mesproviders = this.service.getProviders();
    this.service.getUser().subscribe(
      response =>{
        console.log(response["data"]);
        this.users = (<Avatar[]>response["data"]);
      }
    );
  }

}

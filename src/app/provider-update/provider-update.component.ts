import { Component, OnInit } from '@angular/core';
import { ProvidersService } from './../services/providers.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-provider-update',
  templateUrl: './provider-update.component.html',
  styleUrls: ['./provider-update.component.css']
})
export class ProviderUpdateComponent implements OnInit {
  public id;
  private providerToUpdate;
  public name;
  public email;
  public adress;
  constructor(private service: ProvidersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );

    this.providerToUpdate = this.service.getProvider(this.id).subscribe(
      response => {
        //console.log(response);
        this.name = response["name"];
        this.email = response["email"];
        this.adress = response["address"];
      }
    );
  }


  updateProvider() {
    this.providerToUpdate = {
      'name': this.name,
      'email': this.email,
      'address': this.adress,
      'id': this.id
    }
    this.service.updateProvider(this.providerToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listProvider']);
      }
    );

  }

}

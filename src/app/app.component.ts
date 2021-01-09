import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionService } from './gestion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiniProjet';
  types:any=[]
  titre!:string ;
  titres:any=[];
  count:any
  c:any
  id:any

  constructor(private ser:GestionService,private route:Router,private ac:ActivatedRoute) {}

    ngOnInit(): void {

      this.ac.paramMap.subscribe((params:ParamMap)=> {
        this.id= params.get('t.id');
        
       
      })
  
      this.ser.getAlltypes().subscribe(
        (data)=>{this.types=data},
  
      erreur=>{}
      )
  
      this.ser.getCount().subscribe(
        data=>{this.count=data},
        err=>{}
      )
      
  }
  recherche()
  {
    this.route.navigate(['recherche/' + this.titre]);
  }
  
  }


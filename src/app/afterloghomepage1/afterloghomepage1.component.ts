import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afterloghomepage1',
  templateUrl: './afterloghomepage1.component.html',
  styleUrls: ['./afterloghomepage1.component.css']
})
export class Afterloghomepage1Component implements OnInit {
   
   id;

   time(){
      let y =new Date().toString().match(/[A-Z]/gm)

      let z=y.slice(Math.max(y.length - 3, 1)).join('');
 
     let time = new Date().toString().match(/\d{2}:\d{2}/).toString();
     return (time +' '+ z)
     
    }
     
    notiday:number=0;
    notimonth:string='';
    notiday2:string='';

    date(){
      let y1=new Date()
      let day1s = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let months =      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      let day:any = y1.getDate();
      let month:any = y1.getMonth() + 1;
      let year = y1.getFullYear();
      let day1 = day1s[y1.getDay()];
      

     if(day <10){
       day = '0'+day
         }

    if(month < 10){
        month = '0'+month
       }
         
       this.notiday=day;
       this.notiday2=day1;
       this.notimonth=months[y1.getMonth()];


          return(day+'-'+month+'-'+year +' | '+ day1 )
    }
    
    

  
      
    ngOnInit(){
      this.id = setInterval(() => {
        this.time(); 
      }, 3000);
    }
    };

    





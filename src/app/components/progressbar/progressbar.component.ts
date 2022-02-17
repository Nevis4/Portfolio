import { Attribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

    @Input()
    value: string = '10'
    @Input()
    status: string = '';
    @Input()
    lvlBegginer: string = 'Begginer'
    lvlMedium: string = 'Medium'
    lvlPro: string = 'Profesional'
  constructor(@Attribute('label') public label: string, @Attribute('striped') public striped:boolean) { 
    
  }
  parseFloat(el: any){
     return Number(el)
  }
  checklvl(){
    
   const valueN = Number(this.value)
    if(valueN>0 && valueN<35){
      return "Begginer"
    }
    else if(valueN>35 && valueN<70){
      return "Medium"
    }
    else return "Pro"
  }
  ngOnInit(): void {
  }

}

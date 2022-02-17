import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recentProjects = [
  {
    id:123,
    name: 'Project ABC',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3a%2FCat03.jpg%2F1200px-Cat03.jpg&imgrefurl=https%3A%2F%2Fen.wiktionary.org%2Fwiki%2Fcat&tbnid=hMjxy8pUhhc4QM&vet=12ahUKEwiFt6-mwtv0AhVMiIsKHSjqC_EQMygEegUIARC2AQ..i&docid=3aBlXpmFZqFG2M&w=1200&h=1199&q=cat%20&client=safari&ved=2ahUKEwiFt6-mwtv0AhVMiIsKHSjqC_EQMygEegUIARC2AQ',
  },

  {
    id:234,
    name: 'Project XYZ',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3a%2FCat03.jpg%2F1200px-Cat03.jpg&imgrefurl=https%3A%2F%2Fen.wiktionary.org%2Fwiki%2Fcat&tbnid=hMjxy8pUhhc4QM&vet=12ahUKEwiFt6-mwtv0AhVMiIsKHSjqC_EQMygEegUIARC2AQ..i&docid=3aBlXpmFZqFG2M&w=1200&h=1199&q=cat%20&client=safari&ved=2ahUKEwiFt6-mwtv0AhVMiIsKHSjqC_EQMygEegUIARC2AQ',
  },

  {
    id:345,
    name: 'Project QWERTY',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3a%2FCat03.jpg%2F1200px-Cat03.jpg&imgrefurl=https%3A%2F%2Fen.wiktionary.org%2Fwiki%2Fcat&tbnid=hMjxy8pUhhc4QM&vet=12ahUKEwiFt6-mwtv0AhVMiIsKHSjqC_EQMygEegUIARC2AQ..i&docid=3aBlXpmFZqFG2M&w=1200&h=1199&q=cat%20&client=safari&ved=2ahUKEwiFt6-mwtv0AhVMiIsKHSjqC_EQMygEegUIARC2AQ',
  },

]
readMore = false;

currentTab = ''
value=''
change(el:string){
  this.value = el

}


  constructor() { }
//  change(el:string){
//   let value = Number(el)
//   return value
//  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title = 'Financial Books';
  currentTab = 1;
  books: Array<any> = [
    {
      name: 'The Three Zeros',
      price: 270,
      author: 'Muhammed Yunus',
      canBuy: true,
      images: [
        {thumb: 'images/WorldofThreeZeros.png',full: ''}
      ]
    },
    {
      name: 'Zero to One',
      price: 320,
      author: 'Peter Thiel',
      canBuy: false,
      images: [
        {thumb: 'images/ZeroToOne.png', full: ''}
      ]
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
   onbuy(book:any) {
     console.log('Book added to the Cart...'+ book.name+'  ' + book.price);
   }
   isTabselected(tabIndex: number) {
     return this.currentTab === tabIndex;
   }
   onTabChange(event: any, tabIndex: number){
     event.preventDefault();//To stop flicker
     this.currentTab = tabIndex;
     console.log('Tab selected: '+ this.currentTab);
   }
}

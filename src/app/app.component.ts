import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // step 2 add to main component
import { LNodeType } from '@angular/core/src/render3/interfaces/node';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mainTitle = 'Tola Olaoke';
  // variables
  albumId: number;
  id: number;
  title: string = '';
  url: string = '';
  thumbnailUrl: string = '';
  found: boolean;
  photos: any[];
  allPhotos: any[];
  limit: number;
  constructor(private httpClient: HttpClient) { }// Create a class


  onNameKeyUp(event: any) {
    this.id = event.target.value;
    console.log(event.target.value);
    this.found = true; // data will be false whilst typing
  }

  // Http Get Method
  getPhotos() {
    // this is where it is going to do the Http GET
    this.httpClient.get(`https://jsonplaceholder.typicode.com/photos/?id=${this.id}`) // queries the URL by ID, the base address for api

      .subscribe( // it subscribes to the URL, keeps watching it until it gets it and executes it
        (data: any[]) => { // retrieves the object we call data from inside the URL
          console.log(data);
          if (data.length) { // if it returns some data
            this.photos = data;
          }
        }
      );
  }

  getAllPhotos() {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/photos`) // queries the URL by ID, the base address for api
      .subscribe( // it subscribes to the URL, keeps watching it until it gets it and executes it
        (data: any[]) => { // retrieves the object we call data from inside the URL
          if (data.length) { // if it returns some data
            this.allPhotos = data;
            this.photos = this.allPhotos.filter((x, i) => i < 50);
          }
        }
      );
  }

  changeLimit(limit) {
    this.photos = this.allPhotos;
    this.limit = limit;
  }

  ngOnInit() {
    this.getAllPhotos();
  }

}

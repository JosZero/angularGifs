import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'Ih6jGpejBA7AcROXfXgdYjIfBNItt0bQ';
  private _historial:string[] = [];

  //cambiar por su tipo correspondiente
  public resultados: any[] = [];
  constructor(private http: HttpClient){

  }
  get historial(){
    
    return [...this._historial];
  }

  buscarGifs(query:string){
    query = query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
    }
    this._historial = this._historial.slice(0,10);
    console.log(this._historial);
    
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=Ih6jGpejBA7AcROXfXgdYjIfBNItt0bQ&q=${query}&limit=20`)
      .subscribe( (resp:any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
  }


}

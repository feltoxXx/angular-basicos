import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Loki'];
  heroesBorrados: string[] = [];

  borrarHeroe (){
    
    let numero: number = this.heroes.length;
    
    if (numero > 0) {
      let borrado = this.heroes.pop();
      console.log(`${borrado} ha sido eliminado de la lista`);
      this.heroesBorrados.push(`${borrado}`);
    } else {
      console.log('ya no quedan Héroes...')
    }
  

    
    
    // if (index > -1) {
    //   array.splice(index, 1);
    // }
    // console.log(array); 




  }

}

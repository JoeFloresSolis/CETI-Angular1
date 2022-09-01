import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ //! DECORATOR
  name: 'sorteAge'
})
export class SorteAgePipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    console.log(value);
    //console.log(args);
    // return value.filter((item:any)=> item.age>25); //! filtra + 25
    //return value.sort((a:any,b:any)=> a.age-b.age); //! Ordena de menor a mayor
    return value.sort((a:any,b:any)=>{ //! Ordena por nombre
      if(a.name>b.name){
        return 1;
      }
      if(a.name<b.name){
        return -1;
      }
      return 0;
    });
  }

}

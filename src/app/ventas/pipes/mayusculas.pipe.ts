import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'mayusc'  
})
export class MayusculasPipe implements PipeTransform{
    
    transform( value: string, mayus: boolean = true): string {
        // if( mayus ) { 
        //     return value.toLocaleUpperCase();
        // }else{ 
        //     return value.toLocaleLowerCase()
        // }

        return ( mayus ) ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
    };


}
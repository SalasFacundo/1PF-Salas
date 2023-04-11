import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlErrorMessages'
})
export class ControlErrorMessagesPipe implements PipeTransform {

  transform(error: any, ...args: unknown[]): unknown {

    console.log("typeof error")
    console.log(typeof error)
    const opciones: Record<string, string> = {
      required: 'Este campo es requerido',
      minlength: `Este campo debe tener ${error.value.requiredLength} caracteres`,
      maxlength: `Este campo debe tener ${error.value.requiredLength} caracteres`,
      dniDuplicated: 'El dni ya se encuentra',
    }
        
    return opciones[error.key];
  }

}

export class persona{
    id? : number;
    nombre : string;
    apellido : string; 
    descripcion : string;  
    img : string;   

    constructor(nombre: string, apellido: string, descripcion: string, img: string){
        /*El nombre que pasa por parametros hace referencia al nombre de la variable declarada arriba*/
        this.nombre = nombre;
        this.apellido = apellido;  
        this.descripcion = descripcion; 
        this.img = img;


    }
}
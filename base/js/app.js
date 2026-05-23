class Producto {
  #precio
  #stock
  constructor(nombre, marca, precio, stock, imagen) {
    this.nombre = nombre;
    this.marca  = marca;
    this.precio = precio;
    this.stock  = stock;
    this.imagen = imagen;
  }
 // un get y u set para precio y stok
 get precio() {
  return this.producto ()  }
 //
  descripcion() {
    return `${this.nombre} — ${this.marca}`;
  }
 
  get estaDisponible() {
    return this.#stock > 0;
  }

  get precioFormateado() {
    return `$${this.#precio.toLocaleString('es-AR')}`;
  }

  get precio(){
    /////
  }

  get stock(){
    /////
  }

   set precio(){
    if (valor < 0) 
      { console.log( 'precio invalido :${valor}');
  }this.#precio= valor};

  set stock(){
    if (valor <= 0) 
      { console.log( 'No hay Stock: ${valor}');
         }this.#stock= valor};
 
  resumen() {
    const disponible = this.estaDisponible ? `${this.stock} en stock` : 'Sin stock';
    return `${this.descripcion()} | ${this.precioFormateado} | ${disponible}`;
  }
}  
 

class Notebook extends Producto {
  constructor(nombre, marca, precio, stock ,imagen, preocesador, ramBG, almacenamientoGB, pantalla){
  super(nombre,marcaprecio,stock,imagen);
  this.preocesador= preocesador;
  this.ramBG = ramBG
  this. almacenamientoGB= almacenamientoGB
  this.pantalla= pantalla
  }
  fichaTecnica(){
  return `${this.nombre} - ${this.almacenamientoGB}`;
  }
} 

class celular extends Producto {
  constructor(nombre, marca, precio, stock ,imagen, almacenamientoGB, pantalla, bateria, camara){
  super(nombre,marca,precio,stock,imagen);
  this. almacenamientoGB= almacenamientoGB
  this.pantalla= pantalla
  this.bateria= bateria
  this.camara= camara
  }
  fichaTecnica(){
  return `${this.nombre} - ${this.almacenamientoGB}`;
  }
} 

class Auricular extends Producto {
  constructor(nombre, marca, precio, stock ,imagen, tipo, wireless, cancelacionRuido){
  super(nombre,marca,precio,stock,imagen);
  this.tipo= tipo
  this.wireless=wireless
  this.cancelacionRuido=cancelacionRuido
  }
  fichaTecnica(){
  return `${this.nombre} - ${this.tipo}`;
  }
} 

//falta monitor y pc escritorio











// ── Catálogo de productos ────────────────────────────────────
// Array global — definido fuera de cualquier función o clase
const catalogo = [
  new Producto(
    'MacBook Air M2', 'Apple', 2100000, 4,
    'https://images.unsplash.com/photo-1611186871525-5a0c4f200c34?w=400'
  ),
  new Producto(
    'iPhone 15', 'Apple', 1650000, 12,
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400'
  ),
  new Producto(
    'Sony WH-1000XM5', 'Sony', 420000, 0,
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400'
  ),
  new Producto(
    'LG UltraGear 27GP850', 'LG', 480000, 6,
    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400'
  ),
  new Producto(
    'PC Gamer Entry Level', 'Armada', 1200000, 5,
    'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400'
  ),
  
];
 // agregar la ficha tecnica,
  return"${ this. marca}
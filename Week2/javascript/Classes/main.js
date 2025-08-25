class Rectangle {
   constructor(width, height, color) {
	    this.width = width;
	    this.height = height;
	    this.color = color; 
   }
   
   area() {
	   const area = this.width * this.height;
		 return area;
   }
   
   paint() {
			console.log(`Painting with color ${this.color}`);
			return 1;
   }
   
}
// react is an object created using Rectangle class. 
// It is created from the Rectangle class and holds specific data (2, 4, 'red') and behavior (area, paint).
const rect = new Rectangle(2, 4, 'red');
const area = rect.area();


console.log(area);
rect.paint();
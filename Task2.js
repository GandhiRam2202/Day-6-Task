class Circle{
    constructor(radius = 1.0, color = "Red")
    {
        this.radius = radius,
        this.color = color 
    }
    get radius()
    {
        return this.radius1
    }
    set radius(radius)
    {
        this.radius1 = radius;
    }
    get color()
    {
        return this.color1;
    }
    set color(color)
    {
        this.color1 = color;
    }
circle()
    {
        
    }
circle1()
{
   console.log("Radius :",(this.radius1).toFixed(1));
}
circle2()
{
   console.log("Radius :",(this.radius1).toFixed(1),"Color :",`${this.color}`);
}
toString()
{
    return `[Radius = ${this.radius},Color = ${this.color}]`
}
getArea()
{
    return `Area = ${Math.PI * Math.pow(this.radius, 2)}`
}
getCircumference()
{
    return `Circumference = ${2 * Math.PI * this.radius}`
}

}

let cir = new Circle();
console.log(cir)
cir.circle();
cir.circle1();
cir.circle2();
console.log("Before Set Radius :",cir.radius);
cir.radius = 2;
console.log("After Set Radius :",cir.radius);
console.log("Before Set Color :",cir.color);
cir.color = "Green";
console.log("After Set Color :",cir.color);
console.log(cir.toString());
console.log(cir.getArea())
console.log(cir.getCircumference())


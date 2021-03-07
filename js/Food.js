class Food { 
    //foodStock = 5;
    constructor() {
        this.foodStock = 5;
        var options = {
            
        }
        this.image = loadImage("Images/Milk.png");
        //this.body = Bodies.rectangle(x,y,width,height);
        // this.x = x;
        // this.y = y
        // this.width = width;
        // this.height = height;
        // World.add(world, this.body);
    }
    display() {
        var x = 80, y = 100;
        //var pos = this.body.position;
        imageMode(CENTER);
        console.log("display: " + this.foodStock)

        
        
        if(this.foodStock!=0) {
            for(var i=0;i<this.foodStock;i++) {
                if(i%10==0) {
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50)
                x=x+30;
            }
        }
    }
    getFoodStock() {
        console.log("getFoodStock" + foodStock)
        console.log("GetfoodStock:" + this.foodStock)
        return this.foodStock;
    }

    updateFoodStock(foodStockValue) {
        console.log("update food stock:" + this.FoodStock)
        this.foodStock = foodStockValue;
    }

    deductFood() {

    }
}
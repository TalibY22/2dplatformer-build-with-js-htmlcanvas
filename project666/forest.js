



//SELECTS CANVAS
const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

console.log("hyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")


//SETS CANVAS
canvas.width = 1024
canvas.height = 576



const gravity = 0.5





//CLASS FOR THE PLAYER
class player{
    constructor(){
        this.position = {
         x:100,
         y:320

        }

        this.width=120
        this.height = 150
        this.velocity = {
            x:0,
            y:0,
        }
        this.image = idle
        this.frames = 0
        this.sprites = {
            run:{
                run,
            },
            jump:jump,
            fall:fall,
            die:die,
            left:left,
            idleleft:idleleft
        }
        this.activesprite = this.image
        this.currentcropwidth = 900
    }
    
   //DRAWS THE PLAYER
    draw(){
        c.drawImage(this.activesprite,
            this.currentcropwidth * this.frames,
            0,
            900,
            900,
            this.position.x,
            this.position.y,
            this.width,
            this.height)       

    }
    
    
    
    
    //SIMULATES GRAVITY
    update(){
        this.frames ++
        if (this.frames > 17 && this.activesprite === this.image){
            this.frames = 0
        }
        else if(this.frames > 11 && this.activesprite === this.sprites.run.run){
            this.frames = 0

        }
        else if(this.frames > 5 && this.activesprite === this.sprites.jump){
            this.frames = 0
        }
        else if(this.frames > 5 && this.activesprite == this.sprites.fall){
            this.frames = 0
        }
        else if(this.frames > 14 && this.activesprite == this.sprites.die){
            this.frames = 0
        }
        else if(this.frames > 11 && this.activesprite == this.sprites.left){
            this.frames = 0
        }
        else if(this.frames > 17 && this.activesprite == this.sprites.idleleft){
            this.frames = 0
        }
        
        
        
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    

        if (this.position.y + this.height + this.velocity.y <= canvas.height )        
            this.velocity.y += gravity
         
        else{
            this.velocity.y = 0
            this.activesprite = this.sprites.die
            window.removeEventListener('keydown',movement)
            loser()

        }
        
        if(scrollofset > 6850){
            c.drawImage(win,0,0,1024,576)
        }

    
        

    
    

}
}

//CLASS FOR THE PLATFORMS
class platform{
    constructor({x,y,width,height,image}){
          this.position = {
            x:x,
            y:y
          }
          this.image = image
          this.width = width
          this.height = height

          
    }

    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)

    }
}

//CLASS FOR DECORATIONS
class decoration{
    constructor({x,y,image}){
          this.position = {
            x:x,
            y:y
          }
          this.image = image

          
    }

    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)

    }
}

//CLASS FOR OBJECTS
class objects{
    constructor({x,y,image}){
          this.position = {
            x:x,
            y:y
          }
          this.image = image

          
    }

    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)

    }
}


class Trevor{
    constructor({x,y}){
        this.position={
            x:x,
            y:y
        },
        this.width =120,
        this.height =150,
        this.frames = 0
    }

    draw(){
        
         c.drawImage(trevor,
            900 * this.frames,
            0,
            900,
            900,
                this.position.x,
                this.position.y,
                this.width,
                this.height)       
    
        
    }

    update(){
        this.frames ++
        if(this.frames > 17){
            this.frames = 0
        }
        this.draw()
    }
}











//GROUND IMAGE
const image = new Image()
image.src = './platform.png'
//PLATFORM IMAGE
const pi = new Image()
pi.src = './15.png'
//BACKGROUND IMAGE
const backgroud = new Image()
backgroud.src = './background.png'
//FLOWER
const flower = new Image()
flower.src ='./13.png'
//SIGN
const sign = new Image()
sign.src = './Sign_2.png'
//IDLE PNG
const idle = new Image()
idle.src = "./idle.png"
//RUNNING SPRITE
const run = new Image()
run.src = "./running.png"
//JUMPING SPRITE
const jump = new Image()
jump.src = './j2.png'
//FALLING SPRITE
const fall = new Image()
fall.src = './fall.png'
//DIE SPRITE
const die = new Image()
die.src = './dying.png'
//RUNNINGLEFT
const left = new Image()
left.src = './runnigleft.png'
//IDLELEFT
const idleleft = new Image()
idleleft.src = './leftidle.png'
//BOX
const mushroom = new Image()
mushroom.src = './Mushroom_1.png'
//TREE
const tree = new Image()
tree.src = './Tree_2.png'
//TREVOR
const trevor = new Image()
trevor.src = './TREVOR.png'
//WIN
const win = new Image()
win.src = './win.png'







//PASSING CLASS
const Player = new player()
const TREVOR = [new Trevor({x:580*2+6100,y:345})]

//DECORATIONS
const decos = [new decoration({x:0,y:-0,image:backgroud}),
    new decoration({x:1900,y:0,image:backgroud}),
    new decoration({x:3800,y:0,image:backgroud})]

//OBJECTS   
const objs = [new objects({x:880,y:405,image:sign}),
    new objects({x:1565,y:265,image:mushroom}),
    new objects({x:580*2+6000,y:169,image:tree})]

//LOADS THE PLATFORMS
let plats = [new platform({x:-1,y:470,width:580,height:125,image:image}),
    new platform({x:580 -3,y:470,width:580,height:125,image:image}),
    
    new platform({x:1500,y:300,width:80,height:93,image:pi}),
    new platform({x:1380,y:300,width:80,height:93,image:pi}),
    

    new platform({x:580*2 + 700,y:470,width:580,height:125,image:image}),
    new platform({x:580*2+1280,y:470,width:580,height:125,image:image}),
    
    new platform({x:580*2+2100,y:300,width:80,height:93,image:pi}),
    new platform({x:580*2+2600,y:300,width:80,height:93,image:pi}),
    new platform({x:580*2+3000,y:300,width:80,height:93,image:pi}),
    new platform({x:580*2+3300,y:370,width:80,height:93,image:pi}),
    new platform({x:580*2+3700,y:370,width:80,height:93,image:pi}),
    new platform({x:580*2+4200,y:300,width:80,height:93,image:pi}),

    new platform({x:580*2 + 4500,y:470,width:580,height:125,image:image}),
    new platform({x:580*2 +5080,y:470,width:580,height:125,image:image}),
    new platform({x:580*2 + 5660,y:470,width:580,height:125,image:image}),


]









    let scrollofset = 0

//KEYS FOR MOVEMENT
const keys ={
    ArrowRight:{
        pressed:false
    },
    ArrowLeft:{
        pressed:false
    },
    ArrowUp:{
        pressed:false
    }

}

//FUNCTION FOR MOVEMENT
function fun(){
    if (keys.ArrowRight.pressed && Player.position.x < 400){
        Player.velocity.x = 5
        console.log("hyyyyy")
    }
    else if(keys.ArrowLeft.pressed && Player.position.x > 100){
        Player.velocity.x = -5
    }
    else{
        Player.velocity.x = 0

        if (keys.ArrowRight.pressed){
            scrollofset += 5
            plats.forEach(platform =>{
                platform.position.x -=5
            })
            decos.forEach(decoration=>{
                decoration.position.x -=3
            })
            objs.forEach(objects=>{
                objects.position.x -=5
            })
            TREVOR.forEach(Trevor=>{
                Trevor.position.x -=5
            })

        }
        else if(keys.ArrowLeft.pressed){
            scrollofset -= 5
            plats.forEach(platform =>{
                platform.position.x +=5
            })

            decos.forEach(decoration=>{
                decoration.position.x +=3
            })
            objs.forEach(objects=>{
                objects.position.x +=5
            })
            TREVOR.forEach(Trevor=>{
                Trevor.position.x +=5
            })

        
    }
    if (scrollofset > 2000){


    }

    }
    //platform collision
    plats.forEach(platform =>{
        
    
    if (Player.position.y  + Player.height <=
         platform.position.y+25  && Player.position.y  + 
         Player.height + Player.velocity.y >= platform.position.y+25 
         && Player.position.x  + Player.width >=platform.position.x-18 && Player.position.x <=
          platform.position.x -18 + platform.width){
    
        Player.velocity.y = 0
    }
})
}










//animation
//ONE OF THE MAIN FUNCTION
function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width,canvas.height)

    decos.forEach(decoration =>{
        decoration.draw()
    })
    
  
    plats.forEach(platform =>{
        platform.draw()
    })
    objs.forEach(objects =>{
        objects.draw()
    })
    TREVOR.forEach(Trevor=>{
        Trevor.update()
    })
    

    Player.update()

    fun()
       
    
}


animate()


//control for when the key is pressed down
function movement(e){
    switch(e.key){
        case 'ArrowUp':
             Player.velocity.y -= 15
             Player.activesprite = Player.sprites.jump
             //Player.activesprite = Player.sprites.fall
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            Player.activesprite = Player.sprites.run.run
            break
        case 'ArrowLeft':  
            keys.ArrowLeft.pressed = true
            Player.activesprite = Player.sprites.left
            break        
    }
}



//CONTROL WHEN THE KEY IS UP
function movement2(e){
    switch(e.key){
    case 'ArrowUp':
         Player.velocity.y += 5
         Player.activesprite = Player.sprites.fall
         
        break    
    case 'ArrowRight':
        keys.ArrowRight.pressed = false
        Player.activesprite = Player.image
        break
    case 'ArrowLeft':
        keys.ArrowLeft.pressed = false
        Player.activesprite = Player.sprites.idleleft
        break    
        
    }
}




//EVENT LISTENER
window.addEventListener('keydown',movement)
window.addEventListener('keyup',movement2)

//UP1

function up(){
    //Player.velocity.y -= 20
    keys.ArrowLeft.pressed = true
}

















function loser(){
    const lose = new Image()
    lose.src = './game-over-banner-for-games-with-glitch-effect-neon-light-on-text-illustration-design-free-vector.jpg'
        c.drawImage(lose,0,0,1024,576)

    
}






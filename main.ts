controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.vy = -80
    movingUp = true
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    player1.vy = 0
    movingDown = false
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.vx = -80
    movingLeft = true
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    player1.vx = 0
    movingRight = false
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    player1.vx = 0
    movingLeft = false
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.vx = 80
    movingRight = true
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    player1.vy = 0
    movingUp = false
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.vy = 80
    movingDown = true
})
let movingRight = false
let movingLeft = false
let movingDown = false
let movingUp = false
let player1: Sprite = null
player1 = sprites.create(img`
    . . . f f f f f f f f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . f f . . f f f f . . f f . . . 
    . f f f f f f f f f f f f . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
player1.setPosition(80, 60)
let goal = sprites.create(img`
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
goal.setPosition(150, 60)
let phase = 1
info.setLife(3)
info.startCountdown(60)
game.onUpdate(function () {
    if (player1.x <= 0 || player1.x >= 160 || (player1.y <= 0 || player1.y >= 160)) {
        info.changeLifeBy(-1)
        player1.setPosition(80, 60)
        pause(100)
    }
})
game.onUpdateInterval(1000, function () {
    if (("phase" as any) == ("0" as any)) {
        phase = 0
        scene.setBackgroundColor(2)
    } else {
        phase = 1
        scene.setBackgroundColor(7)
    }
})
forever(function () {
    if (player1.overlapsWith(goal)) {
        game.gameOver(true)
    }
})

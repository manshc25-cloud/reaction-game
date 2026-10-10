let score = 0
let life = 0
let delay = 0
let detected = 0
let required = 0
input.onButtonPressed(Button.A, function () {
    score = 0
    life = 3
    delay = 1000
    detected = -1
    for (let index = 0; index < 100000000000000; index++) {
        basic.clearScreen()
        required = randint(0, 3) * 2
        basic.showArrow(required)
        basic.pause(delay)
        if (required == detected) {
            score += 1
            basic.showIcon(IconNames.Yes)
        } else {
            life += -1
            basic.showIcon(IconNames.No)
        }
        basic.pause(delay)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    detected = 4
})
input.onGesture(Gesture.TiltLeft, function () {
    detected = 6
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    detected = 2
})
input.onGesture(Gesture.LogoDown, function () {
    detected = 0
})

input.onButtonPressed(Button.A, function () {
    servoGrip += 10
})
input.onButtonPressed(Button.B, function () {
    servoGrip += -10
})
radio.onReceivedValue(function (name, value) {
	
})
radio.setGroup(252)
basic.showLeds(`
    . # # # .
    # . . . #
    # # # # #
    # # . # #
    # . . . #
    `)
let servoLeft = 0
let servoRight = 0
let servoGrip = 0
let servoBase = 0
basic.forever(function () {
    mearm.moveToAngle(MearmServo.Base, servoBase)
    mearm.moveToAngle(MearmServo.Right, servoRight)
    mearm.moveToAngle(MearmServo.Left, servoLeft)
    mearm.moveToAngle(MearmServo.Grip, servoGrip)
    basic.pause(100)
})

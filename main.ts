input.onButtonPressed(Button.A, function () {
    mearm.moveByAngle(MearmServo.Base, 10)
})
input.onButtonPressed(Button.B, function () {
    mearm.moveByAngle(MearmServo.Base, -10)
})
basic.showLeds(`
    . # # # .
    # . . . #
    # # # # #
    # # . # #
    # . . . #
    `)
basic.forever(function () {
	
})

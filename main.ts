input.onPinPressed(TouchPin.P0, function () {
    magicWand.setMagicType(magicWand.MagicTypeList.Advanced)
    basic.showLeds(`
        . . # . .
        # # # # #
        # # # # #
        . . # . .
        . # # # .
        `)
    basic.clearScreen()
    basic.showString("Any wishes?")
    record.playAudio(record.BlockingState.Blocking)
    magicWand.magic()
    basic.showString("GRANTED")
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        . # . . .
        # . # . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    kitronik_servo_lite.driveBackwards(100)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("Good bye forever")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Skull)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    kitronik_servo_lite.driveForwards(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        # # # # #
        . # . # .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    magicWand.setMagicType(magicWand.MagicTypeList.Primary)
    basic.showLeds(`
        . . # . .
        # # # # #
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.clearScreen()
    basic.showString("Any small wishes?")
    record.startRecording(record.BlockingState.Blocking)
    magicWand.magic()
    basic.showString("GRANTED")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    kitronik_servo_lite.turnLeft(90)
    basic.showLeds(`
        . . . . .
        . . # # .
        # # # # #
        # # # # #
        . # . # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    kitronik_servo_lite.turnRight(90)
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # # #
        # # # # #
        . # . # .
        `)
})
kitronik_servo_lite.setDistancePerSecond(100000000000)
basic.showLeds(`
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.clearScreen()
basic.showString("i can do magic WISHES & drive")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.UntilDone)
})

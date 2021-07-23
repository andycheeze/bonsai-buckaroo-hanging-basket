let reading = 0
//music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(reading)
    led.plotBarGraph(reading, 1023)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (reading <= 800) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(10000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
basic.pause(3600)
})

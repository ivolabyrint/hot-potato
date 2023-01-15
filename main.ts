let timer = 0
let number = 0
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Square)
    timer = randint(5, 20)
    while (timer > 0) {
        timer += -1
        basic.pause(1000)
    }
    if (timer == 0) {
        number = randint(1, 3)
    }
    if (number == 1 || number == 3) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})

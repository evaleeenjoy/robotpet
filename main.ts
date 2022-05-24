function 出發 () {
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    for (let index = 0; index < 8; index++) {
        暫存 = list.shift()
        if (暫存 == 1) {
            任意前進或後退(150, 500)
        } else if (暫存 == 2) {
            左轉()
        } else {
            右轉()
        }
        basic.pause(1000)
    }
    music.playMelody("D G C5 - C5 B A A ", 1000)
    功能編號 = 4
    basic.showNumber(功能編號)
}
function 左轉 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    200,
    robotbit.Motors.M1B,
    -200
    )
    basic.pause(350)
    robotbit.MotorStopAll()
}
function 右轉 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -200,
    robotbit.Motors.M1B,
    200
    )
    basic.pause(350)
    robotbit.MotorStopAll()
}
input.onButtonPressed(Button.A, function () {
    if (功能編號 == 1) {
        功能編號 = 6
        basic.showNumber(功能編號)
    } else if (功能編號 == 99) {
        list.push(3)
        basic.showArrow(ArrowNames.West)
        if (list.length == 8) {
            出發()
        }
    } else {
        功能編號 += -1
        basic.showNumber(功能編號)
    }
})
function 開機打招呼 () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . . . #
            . # . # .
            # . . . #
            . . . . .
            . # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # . # .
            . . # . .
            `)
        basic.pause(100)
    }
    robotbit.GeekServo(robotbit.Servos.S1, 90)
    basic.pause(500)
    robotbit.GeekServo(robotbit.Servos.S1, 0)
    music.playMelody("D G C5 - C5 B A A ", 1000)
}
function 等長虛線 () {
    for (let index = 0; index < 4; index++) {
        servos.P0.run(50)
        命令移動模式()
    }
}
input.onButtonPressed(Button.AB, function () {
    if (功能編號 == 1) {
        命令移動模式()
    } else if (功能編號 == 2) {
        等長虛線()
    } else if (功能編號 == 3) {
        直線()
    } else if (功能編號 == 4) {
        摩斯密碼()
    } else if (功能編號 == 99) {
        list.push(1)
        basic.showArrow(ArrowNames.North)
        if (list.length == 8) {
            出發()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (功能編號 == 4) {
        功能編號 = 1
        basic.showNumber(功能編號)
    } else if (功能編號 == 99) {
        list.push(2)
        basic.showArrow(ArrowNames.East)
        if (list.length == 8) {
            出發()
        }
    } else {
        功能編號 += 1
        basic.showNumber(功能編號)
    }
})
function 直線 () {
    servos.P0.setAngle(90)
    命令移動模式()
}
function 任意前進或後退 (速度: number, 時間: number) {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    速度,
    robotbit.Motors.M1B,
    速度
    )
    basic.pause(時間)
    robotbit.MotorStopAll()
}
function 摩斯密碼 () {
    for (let index = 0; index < 4; index++) {
        servos.P0.setRange(0, 90)
        命令移動模式()
        servos.P0.stop()
        servos.P0.run(50)
        命令移動模式()
    }
}
function 命令移動模式 () {
    功能編號 = 99
    list = []
    basic.showIcon(IconNames.Happy)
    music.playMelody("C D F A E F A C5 ", 800)
}
let list: number[] = []
let 暫存 = 0
let 功能編號 = 0
開機打招呼()
功能編號 = 1
basic.showNumber(功能編號)
loops.everyInterval(randint(0, 100), function () {
	
})

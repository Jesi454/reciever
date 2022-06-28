/**
 * add together a movement command then execute at end of cycle?
 */
radio.onReceivedNumber(function (receivedNumber) {
    moveSpeed = receivedNumber
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "f") {
        robobit.go(RBDirection.Reverse, moveSpeed)
    } else if (receivedString == "g") {
        robobit.go(RBDirection.Forward, moveSpeed)
    } else if (receivedString == "h") {
        robobit.rotate(RBRobotDirection.Right, 40)
    } else if (receivedString == "j") {
        robobit.rotate(RBRobotDirection.Left, 40)
    } else if (receivedString == "k") {
        robobit.ledRainbow()
    }
})
let moveSpeed = 0
basic.showIcon(IconNames.Heart)
radio.setGroup(2)

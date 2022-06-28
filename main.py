def on_forever():
    pass
basic.forever(on_forever)

def on_received_string(receivedString):
    if receivedString == "f":
        robobit.go(RBDirection.FORWARD, 60)
    elif receivedString == "g":
        robobit.go(RBDirection.REVERSE, 60)
    elif receivedString == "h":
        robobit.rotate(RBRobotDirection.LEFT, 60)
    elif receivedString == "j":
        robobit.rotate(RBRobotDirection.RIGHT, 60)
radio.on_received_string(on_received_string)
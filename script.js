const { DiscordAPIError } = require("discord.js");

const workspace = Blockly.inject('blocklyDiv', { toolbox: document.getElementById('toolbox') });
const client = new Discord.Client()

// Client Login ==================================================

Blockly.Blocks['discord_login'] = {
    init: function() {
        this.jsonInit({
            "type": "discord_login",
            "message0": "Login with %1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "TOKEN",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "Make your bot login with a token",
            "helpUrl": ""
        })
    }
}

Blockly.JavaScript['discord_login'] = block => {
    const token = Blockly.JavaScript.valueToCode(block, 'TOKEN', Blockly.JavaScript.ORDER_ADDITION) || ''
    return [`client.login('${token}')\n`, Blockly.JavaScript.ORDER_ADDITION]
}

// Send Message ==================================================

Blockly.Blocks['discord_sendmessage'] = {
    init: function() {
        this.jsonInit({
            "type": "discord_sendmessage",
            "message0": "Send message %1 content %2 channel id %3",
            "args0": [
                {
                    "type": "input_dummy"
                },  
                {   
                    "type": "input_value",
                    "name": "CONTENT",
                    "check": "String"
                },  
                {   
                    "type": "input_value",
                    "name": "CHANNELID",
                    "check": "Number"
                }   
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "Send a message with contents to a specific channel",
            "helpUrl": ""
        })
    }
}

Blockly.JavaScript['discord_sendmessage'] = block => {
    const channelId = Blockly.JavaScript.valueToCode(block, 'CHANNELID', Blockly.JavaScript.ORDER_ADDITION) || ''
    const content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_ADDITION) || ''
    return [`client.channels.cache.get('${channelId}').send('${content}')\n`, Blockly.JavaScript.ORDER_ADDITION]
}

// onReady Event ==================================================

Blockly.Blocks['discord_onready'] = {
    init: function() {
        this.jsonInit({
            "type": "discord_onready",
            "message0": "On Ready %1 do %2",
            "args0": [
                {
                    "type": "input_dummy"
                },  
                {   
                    "type": "input_statement",
                    "name": "CALLBACK"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        })
    }
}

Blockly.JavaScript['discord_onready'] = block => {
    const callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK')
    return [`client.on('ready', () => { ${callback} })`, Blockly.JavaScript.ORDER_ADDITION]
}
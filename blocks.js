Blockly.defineBlocksWithJsonArray([
    // Events
    {
        "type": "event_ready",
        "message0": "On ready %1 do %2",
        "args0": [
            {
                "type": "input_dummy"
            },  
            {   
                "type": "input_statement",
                "name": "CALLBACK"
            }
        ],
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "event_message",
        "message0": "On message receive %1 do %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "CALLBACK"
            }
        ],
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    // Event Parameters
    {
        "type": "event_param_message",
        "message0": "message",
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    // Properties
    {
        "type": "property_content",
        "message0": "content of %1",
        "args0": [
            {
                "type": "input_value",
                "name": "MESSAGE",
                "check": "event_param_message"
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "property_author",
        "message0": "author of %1",
        "args0": [
            {
                "type": "input_value",
                "name": "MESSAGE",
                "check": "event_param_message"
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "property_channel",
        "message0": "channel of %1",
        "args0": [
            {
                "type": "input_value",
                "name": "MESSAGE",
                "check": "event_param_message"
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "property_guild",
        "message0": "guild of %1",
        "args0": [
            {
                "type": "input_value",
                "name": "MESSAGE",
                "check": "event_param_message"
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "property_id",
        "message0": "id of %1",
        "args0": [
            {
                "type": "input_value",
                "name": "PARAM",
                "check": [
                    "event_param_message",
                    "property_author",
                    "property_channel",
                    "property_guild"
                ]
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    // Condition
    {
        "type": "condition_isuserbot",
        "message0": "is %1 a bot?",
        "args0": [
            {
                "type": "input_value",
                "name": "USER",
                "check": "property_author"
            }
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    // Behavior
    {
        "type": "behavior_sendmessage",
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
                "check": "String"
            }   
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Send a message with contents to a specific channel",
        "helpUrl": ""
    },
])

Blockly.JavaScript['event_ready'] = block => {
    const callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK')
    return `client.on('ready', () => {\n${callback}})\n`
}

Blockly.JavaScript['event_message'] = block => {
    const callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK')
    return `client.on('message', msg => {\n${callback}})\n`
}

Blockly.JavaScript['event_param_message'] = block => {
    return [`msg`, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['property_content'] = block => {
    const msg = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC)
    return [`${msg}.content`, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['property_author'] = block => {
    const msg = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC)
    return [`${msg}.author`, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['property_channel'] = block => {
    const msg = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC)
    return [`${msg}.channel`, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['property_guild'] = block => {
    const msg = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC)
    return [`${msg}.guild`, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['property_id'] = block => {
    const param = Blockly.JavaScript.valueToCode(block, 'PARAM', Blockly.JavaScript.ORDER_ATOMIC)
    return [`${param}.id`, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['condition_isuserbot'] = block => {
    const user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_ATOMIC)
    return [`${user}.bot`, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript['behavior_sendmessage'] = block => {
    const channelId = Blockly.JavaScript.valueToCode(block, 'CHANNELID', Blockly.JavaScript.ORDER_ATOMIC) || ''
    const content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_ATOMIC) || ''
    return `client.channels.get(${channelId}).send(${content})\n`
}

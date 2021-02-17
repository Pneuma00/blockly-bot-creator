const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
    },
    zoom: {
        controls: true,
        wheel: true,
        scaleSpeed: 1.1,
        pinch: true
    },
})
let client = new Discord.Client()

const token = prompt('봇의 토큰을 입력해주세요.')

workspace.addChangeListener(() => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('code').value = code
})

document.getElementById('run').addEventListener('click', () => {
    console.log('Starting the bot...')

    try {
        client = new Discord.Client()
        client.on('ready', () => console.log('Bot is Ready!'))

        eval(document.getElementById('code').value)
        client.login(token)
    } catch (e) {
        alert(e)
    }
})

document.getElementById('stop').addEventListener('click', () => {
    client.destroy()
    console.log('Stopped the bot.')
})
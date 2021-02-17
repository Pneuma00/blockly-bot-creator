const workspace = Blockly.inject('blocklyDiv', { toolbox: document.getElementById('toolbox') });
const client = new Discord.Client()

workspace.addChangeListener(() => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('code').value = code
})

document.getElementById('run').addEventListener('click', () => {
    const code = document.getElementById('code').value

    try {
        eval(code);
    } catch (e) {
        alert(e);
    }
})
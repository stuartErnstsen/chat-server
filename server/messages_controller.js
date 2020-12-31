let messages = [];
id = 0;

module.exports = {
    addNewMsg: (req, res) => {
        const { text, time } = req.body
        messages.push({ id, text, time })
        id++
        res.status(200).send(messages)
    },
    getMsgs: (req, res) => {
        if (!messages) return res.status(500, 'There are no messages');
        res.status(200).send(messages)
    },
    editMsg: (req, res) => {
        const { id, text } = req.params;
        const msgIndex = messages.indexOf(msg => msg.id = +id)
        messages[msgIndex].text = text;
        res.status(200)
    },
    deleteMsg: (req, res) => {
        const { id } = req.params;
        const msgIndex = messages.indexOf(msg => msg.id = +id)
        messages.splice(msgIndex, 1)
        res.status(200)
    }
}
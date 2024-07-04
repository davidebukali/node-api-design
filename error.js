setTimeout(() => {
    throw new Error('Ooops')
}, 300);

process.on('uncaughtException', (req, res) => {
    console.log("process.on('uncaughtException')");
});
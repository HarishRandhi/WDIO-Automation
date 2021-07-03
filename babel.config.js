module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current' //to make the test to consider the current node version while running
            }
        }]
    ]
}
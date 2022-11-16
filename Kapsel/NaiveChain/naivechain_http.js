var initHttpServer = () =>{
    var app = express();
    app.use(bodyParser.Json());

    app.get('/blocks', (req, res) => res.send(JSON.stringify(blockchain)));
    app.post('/mineBlock', (req,res) =>{
        var newBlock = generateNextBlock(req.body.data);
        addBlock(newBlock);
        BroadcastChannel(responseLatestMsg());
        console.log('block added: '+JSON.stringify(newBlock));
        res.send();
    })
    app.get('/peers', (req, res) =>{
        res.send(sockets.map(s => s._socket.remoteAddress + ':' + s._socket.remotePort));
    });
    app.post('/addPeer', (req,res) =>{
        connectToPeers([req.bodt.peer]);
        res.send();
    });
    app.listen(http_port, () => console.log('Listening http on port: '+ http_port));
};
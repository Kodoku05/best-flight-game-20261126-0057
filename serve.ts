import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const port=Number(process.argv[process.argv.indexOf('--port')+1])||8080;
createServer(async(req,res)=>{try{let name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(name.endsWith('/'))name+='index.html';const f=resolve('game','.'+name);if(!f.startsWith(resolve('game')+'/'))throw Error();res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript'})[extname(f)]||'application/octet-stream');res.end(await readFile(f));}catch{res.statusCode=404;res.end('Not found');}}).listen(port,'127.0.0.1',()=>console.log('SKYLANE on '+port));

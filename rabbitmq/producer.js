const amqp = require('amqplib')

const rabbitSettings = {
    protocol: 'amqp',
    hostname: '3.229.239.44',
    port: 5672,
    username: 'TiendaRopa',
    password: 'tiendaropa',
    vhost: '/'
}

async function connect(){
    const queue = "buying"
    try {
        const conn = await amqp.connect(rabbitSettings);
        console.log('Conexión exitosa');
        const channel = await conn.createChannel(queue);
        console.log('Canal creado exitosamente');

        //await channel.assertQueue(queue);
        //console.log('Cola creada exitosamente');

        setInterval(async () =>{
            //await channel.sendToQueue(queue, Buffer.from('Mensaje'));
            await channel.publish('tr.buying', '', Buffer.from('Mensaje'))
            console.log('Mensaje enviado');
        }, 2000)


    }catch (error){
        console.error('Error ->', error)
    }
}


connect();
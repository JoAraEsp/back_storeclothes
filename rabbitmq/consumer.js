const amqp = require('amqplib')

const rabbitSettings = {
    protocol: 'amqp',
    hostname: '3.229.239.44',
    port: 5672,
    username: 'TiendaRopa',
    password: 'tiendaropa'
}


async function connect(){
    const queue = "buying"
    try {
        const conn = await amqp.connect(rabbitSettings);
        console.log('Conexión exitosa');
        const channel = await conn.createChannel(queue);
        console.log('Canal creado exitosamente');

        channel.consume(queue, (msn)=> {
            console.log(msn.content.toString())
            channel.ack(msn);
        });

    }catch (error){
        console.error('Error ->', error)
    }
}


connect();
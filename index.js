const Discord = require('discord.js'); //Ce que le bot à besoin /

const client = new Discord.Client(); //Que votre Bot est un nouvel utilisateur
console.log("new");


client.login("NTYyNjY0MzY0ODcyODI2ODkw.XKOE-g.ID-DHsdmSWr6xsJeEqbu-ALHBH8"); //Token (Série de chiffre) propre a chaque Bot

    client.on('message', (message) => {
        const guildMember = message.member;
       
        if (message.content=='/lille')
       { guildMember.addRole('568376422889160704').catch(console.error);
        message.delete();}
       else {
        guildMember.removeRole('568376422889160704').catch(console.error);
       }
      

      
    });

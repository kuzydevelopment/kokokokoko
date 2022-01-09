const { readdirSync } = require("fs"); 
const ascii = require("ascii-table");

let table = new ascii("Commands");
table.setHeading("Command", "Installation Status");

module.exports = (client) => {
        const commands = readdirSync(`./commands/`).filter(file => file.endsWith(".js")); 
        for (let file of commands) { 
            let pull = require(`../commands/${file}`); 
            if (pull.isim) { 
                client.commands.set(pull.isim, pull); 
                table.addRow(file, 'Ready'); 
            } else {
                table.addRow(file, `Error -> The name is not written in the command folder.`); 
                continue; 
            }
            if (pull.alternatifler && Array.isArray(pull.alternatifler)) pull.alternatifler.forEach(alias => client.alternatifler.set(alias, pull.isim)); 
        }
    console.log(table.toString()); 

}
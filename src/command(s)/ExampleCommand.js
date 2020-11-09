const WizCommand = require('./WizCommand.js')

module.exports = class ExampleCommand extends WizCommand {
     constructor(client) {
          super(client, {
               triggers: [""],
               usage: "",
               minargs: Number,
               missingargs: "You are missing some arguements, mate",
               description: "Example Command Not to be used.",
               clientPermissions: ["SEND_MESSAGES"],
               userPermissions: ["SEND_MESSAGES"],
               examples: ["Example command", "Example Command"],
               owneronly: false,
               devonly: false,
               disabled: true,

          })
     }
     async run() {
          console.log('This Works!')
     }
}
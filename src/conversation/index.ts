/**
 * Conversation class
 */
export class Conversation {
    constructor(private token: string) {
        
    }
/**
 * Ask a prompt question to openai with retained history
 * 
 * @param {string} prompt prompt message
 * @author Karan Raina <karanraina1996@gmail.com>
 * @created 13-APR-2023
 * 
 * @example
 * 
 * // import Conversation class
 * const { Conversation } = require('chat-gpt');
 * // OR
 * import { Conversation } from 'chat-gpt';
 * 
 * // Instantiate a Conversation instance
 * 
 * const agent = new Conversation('OPENAI_TOKEN');
 * 
 * agent.ask('Your prompt here').then((reply) => {
 *  console.log(reply)
 * });
 * 
 * @returns Returns reply to the prompt
 */

    async ask(prompt: string): Promise<string> {
        return 'You asked ' + prompt + ' Your token was ' + this.token;
    }
}
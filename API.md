<a name="Conversation"></a>

## Conversation
<p>Conversation class</p>

**Kind**: global class  
<a name="Conversation+ask"></a>

### conversation.ask(prompt) ⇒
<p>Ask a prompt question to openai with retained history</p>

**Kind**: instance method of [<code>Conversation</code>](#Conversation)  
**Returns**: <p>Returns reply to the prompt</p>  
**Created**: 13-APR-2023  
**Author**: Karan Raina <karanraina1996@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| prompt | <code>string</code> | <p>prompt message</p> |

**Example**  
```js
// import Conversation classconst { Conversation } = require('chat-gpt');// ORimport { Conversation } from 'chat-gpt';// Instantiate a Conversation instanceconst agent = new Conversation('OPENAI_TOKEN');agent.ask('Your prompt here').then((reply) => { console.log(reply)});
```

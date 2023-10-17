import { IGrammar } from './interfaces';

export class GrammarMethods {

    static grammar: IGrammar;

    static subscribers: any = {};

    // identifier should be equal to the identifier used in the subscribe function
    // the callback function is executed after the promise is answered
    static applyGrammar(url_string: string | undefined, grammar: Object, identifier: string, callback_function: Function): Promise<any> {

        let url = "http://localhost:5001";

        if(url_string != undefined){
            url = url_string;
        }

        let fetch_promise = fetch(url+"/updateGrammar", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"grammar": grammar})
        })

        fetch_promise.then((response) => {
            for(const [key, value] of Object.entries(GrammarMethods.subscribers)){
                if(key != identifier){ // the source of the grammar knows that a new grammar was applied
                    (<Function>value)(grammar);
                }
            }

            callback_function(response);
        })

        return fetch_promise;
    }

    // the subscribe identifier should be equal to the applyGrammar identifier
    static subscribe(identifier: string, subscription_callback: Function){
        GrammarMethods.subscribers[identifier] = subscription_callback;
    }

    static updateGrammar(data: IGrammar): void {
        GrammarMethods.grammar = data;
    }

}

import { useEffect } from 'react';
import {Environment, DataLoader, GrammarInterpreterFactory} from 'utk';
import $ from 'jquery';
import { IGrammar } from 'utk';

function Map() {
  
  // Run only once
  useEffect(() => {
    const createAndRunMap = async () => {
      $('#spatial-div').empty();
      
      // Serves data files to the map
      Environment.setEnvironment({backend: Environment.backend});
      
      const url = `${Environment.backend}/getGrammar`;
      const grammar = await DataLoader.getJsonData(url) as IGrammar;
      
      const mainDiv = document.querySelector('#spatial-div') as HTMLElement;

      const grammarInterpreter = GrammarInterpreterFactory.getInstance();
      grammarInterpreter.resetGrammarInterpreter(grammar, mainDiv);
    }
    createAndRunMap();
  }, []);

  // return <div id='spatial-div' style={{height: "100vh", width: "100%"}}></div>
  return <div id='spatial-div' style={{ height: "90vh",width: "100%"}}></div>
}

export { Map }
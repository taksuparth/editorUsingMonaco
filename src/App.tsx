import React, { useCallback } from 'react';
import MonacoEditor from './components/MonacoEditor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import {InterpreterTokensProvider} from './helpers/interpreterTokensProvider';
import {validate} from './helpers/parserFacade';
import './App.css';

const editorOptions = {
  minimap: {
    enabled: false
  },
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: "line",
  automaticLayout: false,
  comments: true,
  language: 'advanceQuery',
  theme: 'advanceQueryTheme',
}

const initialValue = `((lenovo OR #lenovo OR @lenovo) AND (computers OR computer OR laptop OR PCs OR desktop OR service OR product) AND keywordList:”competitor brands” NOT (jobs OR job OR #job OR (#jobs OR career) OR careers OR opportunity))`;

function App() {

  const editorWillMount = useCallback(() => {
    monaco.languages.register({ id: 'advanceQuery' });

		monaco.languages.setTokensProvider('advanceQuery', new InterpreterTokensProvider());

		monaco.editor.defineTheme('advanceQueryTheme', {
			base: 'vs-dark',
			inherit: true,
			rules: [
        { token: 'or.interpreter', foreground: '#03ac76'},
        { token: 'and.interpreter', foreground: '#ffd200'},
        { token: 'term_normal.interpreter', foreground: '#ffffff'},
        { token: 'not.interpreter', foreground: '#ff6060'},
        { token: 'keyword_list.interpreter', foreground: '#1c8bce'}
      ],
      colors: {},
		});
  }, []);

  const editorDidUpdate = useCallback((editor: monaco.editor.IStandaloneCodeEditor, event) => {
    const code = editor.getValue();
			const syntaxErrors = validate(code);
			const monacoErrors = [];
			for (let e of syntaxErrors) {
				monacoErrors.push({
					startLineNumber: e.startLine,
					startColumn: e.startCol,
					endLineNumber: e.endLine,
					endColumn: e.endCol,
					message: e.message,
					severity: monaco.MarkerSeverity.Error
				});
			};
      const model = editor.getModel();
      //@ts-ignore
      window.syntaxErrors = syntaxErrors;
      if(model) {
			  monaco.editor.setModelMarkers(model, "owner", monacoErrors);
      }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <MonacoEditor
          height={500}
          width={700}
          initialValue={initialValue}
          editorOptions={editorOptions}
          editorWillMount={editorWillMount}
          editorDidUpdate={editorDidUpdate}
        />
      </header>
    </div>
  );
}

export default App;

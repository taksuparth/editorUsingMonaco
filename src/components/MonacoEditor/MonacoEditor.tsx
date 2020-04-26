import React, {useRef, useMemo, useEffect, useCallback} from 'react';
import _partial from 'lodash/partial';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

type MonacoEditorPropTypes = {
  height: number;
  width: number;
  editorOptions?: {
    [x: string]: any;
  };
  initialValue?: string;
  editorWillMount?: () => void;
  editorDidMount?: (editor: monaco.editor.IStandaloneCodeEditor) => void;
  editorDidUpdate?: (editor: monaco.editor.IStandaloneCodeEditor, event: monaco.editor.IModelContentChangedEvent) => void;
}

const MonacoEditor = (props: MonacoEditorPropTypes) => {
  const {
    height,
    width,
    editorOptions,
    initialValue,
    editorWillMount,
    editorDidMount,
    editorDidUpdate,
  } = props;
  
  const monacoEditorContainerRef = useRef<HTMLDivElement>(null);

  const containerStyle = useMemo(() => ({
    height: `${height}px`,
    width: `${width}px`,
  }), [height, width]);

  const onMonacoEditorLoad = useCallback((editor: monaco.editor.IStandaloneCodeEditor) => {
    if(editorDidMount) {
      editorDidMount(editor);
    }
  }, [editorDidMount]);

  const onMonacoEditorChange = useCallback((editor: monaco.editor.IStandaloneCodeEditor,event: monaco.editor.IModelContentChangedEvent) => {
    //todo: change something here
    if (editorDidUpdate) {
      editorDidUpdate(editor, event);
    }
  }, [editorDidUpdate]);

  useEffect(() => {
    //initialise Monaco Editor with custom params
    let monacoEditor: monaco.editor.IStandaloneCodeEditor;
    let _subscription;
    if (monacoEditorContainerRef.current) {
      if(editorWillMount) {
        editorWillMount();
      }
      monacoEditor = monaco.editor.create(monacoEditorContainerRef.current, {
        value: initialValue,
        language: 'javascript',
        theme: 'vs-dark',
        ...editorOptions,
      });
      onMonacoEditorLoad(monacoEditor);
      _subscription = monacoEditor.onDidChangeModelContent(_partial(onMonacoEditorChange, monacoEditor));
    }

    return () => {
      //editor cleanUp on unmount
      const editorModel = monacoEditor.getModel();
      if (editorModel) {
        editorModel.dispose();
      }
      monacoEditor.dispose();
      //remove all the subscription too
    }
  }, [initialValue, editorOptions, onMonacoEditorLoad, onMonacoEditorChange, editorWillMount]);
  
  return (<div style={containerStyle} ref={monacoEditorContainerRef}/>)
}

export default MonacoEditor;
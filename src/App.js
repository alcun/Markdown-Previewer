import './App.scss';
import React, {useState} from "react";
import ReactMarkdown from "react-markdown";

function App() {

const placeholder = `---  
# This is a main heading h1
---
## And this is a sub heading h2
---
### You can guess this one! (hint: it's a h3)
---
\`\`\`
This is code between two ticks
console.log('Hello World!')
\`\`\`
---
> "This is a block quote"
---
Text attributes *italic*, **bold**, \`monospace\`.

---
Shopping list: 
  * apples 
  * oranges 
  * pears 
&nbsp;

---
Numbered list: 
  1. coconuts 
  2. bananas 
  3. mangos

---
### This project was made with SASS/SCSS and React JS framework:
![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

*Check out this project and more: 
[my portfolio](https://github.io/Alcun-Personal-Portfolio)*`
  


  const [input, setInput] = useState(placeholder);


  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
        <br />
          <div id="title-header">
          <h1 id="title-h1">REACT MARKDOWN APP</h1>
          <br />
          <h2>input markdown --> output rendered html</h2>
          <br />

          </div>

          <div class="row">

            <div id="left-col" class="col">
              <div id="input">
              <br />
                <div class="box-header">
                <h1>Input</h1>
                </div>
                <br />
                <textarea 
                className="textarea"
                id="editor"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)} />
              </div>
            </div>
            
            <div id ="right col" class="col">
             <div id="preview-content">
             <br />
               <div class="box-header">
                <h1>Markdown</h1>
               </div>
               <br />
                <div id="preview">
                 <ReactMarkdown class="markdown">{input}</ReactMarkdown>
                </div>
             </div>
            </div>
          
          </div>
        </div>
        <br />        <br />
        <footer><a href="https://alcun.github.io/Alcun-Personal-Portfolio/">© alcun</a>-2022</footer>
      </header>
    </div>
  );
}

export default App;



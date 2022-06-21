import React from 'react';
import './App.css';


class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      backgroundColor: '#c0d8d8',
      border: '1px solid black',
      width: '600px',
      height: '300px',
      margin: 'auto',
      boxShadow: '10px 20px 60px'
    }
    const template_literals= `# Welcome to my React Markdown Previewer! \n\n## This is a sub-heading...\n### And here's some other cool stuff:
    \nHeres some code, \`<div></div>\`, between 2 backticks.\n\n\`\`\`
    \n// this is multi-line code:
    \n\nfunction anotherExample(firstLine, lastLine) {
      \n  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {\n\treturn multiLineCode;\n   }
}
\`\`\`
\nYou can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
\nThere's also [links](https://www.freecodecamp.org), and
> Block Quotes!
\nAnd if you want to get really crazy, even tables:
\nWild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
\n- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
       - That look like this.
\n\n1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-
fcc/images/fcc_secondary.svg)\n`

    return (<div style={style}>
        <nav id="toolbar" style={{display: 'flex', justifyContent: 'space-between', 
        backgroundColor: '#4aa3a3', boxShadow: '10px 20px 60px', border: '1px solid black'}}>
          <div id="title"><h3>Editor</h3></div>
          <div><i class="fa fa-arrows-alt" aria-hidden="true"></i></div>
        </nav>
        <textarea id="editor"  style={{ backgroundColor:'#c0d8d8', width:'590px', height:'230px'}}>
        
          {template_literals}
        </textarea>
    </div>);
  }
}

class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render()  {

    const style = {backgroundColor: '#c0d8d8',
    border: '1px solid black',
    width: '800px',
    height: 'auto',
    margin: 'auto',
    boxShadow: '10px 20px 60px'}
    const template_literals = `<div></div>`
    const template_multi_line_code = `  \n// this is multi-line code:
    \n\nfunction anotherExample(firstLine, lastLine) {
      \n  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {\n\treturn multiLineCode;\n   }
}`

    return (<div style={style}>
      <nav id="toolbar" style={{display: 'flex', justifyContent: 'space-between', 
    backgroundColor: '#4aa3a3', boxShadow: '10px 20px 60px', border: '1px solid black'}}>
      <div id="title"><h3>Previewer</h3></div>
      <div><i class="fa fa-arrows-alt" aria-hidden="true"></i></div>
    </nav>
    <p>
      <h1>Welcome to my React Markdown Previewer!</h1>
      <hr></hr>
      <h2>This is a sub-heading...</h2>
      <hr></hr>
      <h3>And here's some other cool stuff:</h3>
      Heres some code, {template_literals}, between 2 backticks.<br/>
      <textarea disabled style={{width: '750px', marginLeft: '20px', height: '170px'}}>
        {template_multi_line_code}
      </textarea>
      You can also make text bold... whoa!<br />
      Or italic.<br />
      Or... wait for it... both!<br />
      And feel free to go crazy <s>crossing stuff out</s>.<br /><br />
      There's also <a href=''>links</a>, and
      <div style={{height: '15px' ,borderLeft: '3px solid black', padding: '5px', marginLeft: '20px'}}>  Block Quotes!</div>
      <br />And if you want to get really crazy, even tables:
      <table style={{border: '2px solid black', margin: '10px'}}>
        <tr>
          <th style={{border: '2px solid black'}}>Wild Header</th>
          <th style={{border: '2px solid black'}}>Crazy Header</th>
          <th style={{border: '2px solid black'}}>Another Header?</th>
        </tr>
        <tr>
          <td style={{border: '2px solid black'}}>Your content can</td>
          <td style={{border: '2px solid black'}}>be here, and it</td>
          <td style={{border: '2px solid black'}}>can be here....</td>
        </tr>
        <tr >
          <td  style={{border: '2px solid black'}}>And here.</td>
          <td style={{border: '2px solid black'}}>Okay.</td>
          <td style={{border: '2px solid black'}}>I think we get it.</td>
        </tr>
      </table>
      <ul>
        <li>And of course there are lists.</li>
        <ul><li>Some are bulleted.</li>
        <ul><li>With different indentation levels.</li>
        <ul><li>That look like this</li></ul></ul>
        </ul>
      </ul>
      <ol>
        <li>And there are numbered lists too.</li>
        <li>Use just 1s if you want!</li>
        <li>And last but not least, let's not forget embedded images:</li>
      </ol>
      <img  src='image.png'/>
    </p>
    </div>);
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div style={{backgroundColor: '#87b5b5', padding: '20px'}}>
      <Editor />
      <Previewer />
    </div>);
  }
}

export default App;

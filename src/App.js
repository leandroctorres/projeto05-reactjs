import NameForm from './Forms/NameForm';
import SorveteForm from './Forms/SorveteForm';
import FileInput from './Forms/FileInput';

const divStyle = {
	color: 'black',
	border: '3px solid #000',
	margin: '5px',
	padding: '10px',
	width: '50%'
};



function App() {
  return (
		<div>
		  <h1>Introdução em Formularios no ReactJS</h1>

			<h2>Componente Controlado</h2>

			<h3>Componente: NameForm</h3>
			O que tem de diferente de um Form Html comum? <br/>
			Em um componente controlado, temos: o value atrelado a um estado, <br/>
			e uma função onde toda alteração feita no DOM é pega por uma função de update, chamada handleChange.<br/>
			<div style={divStyle}>
				<NameForm />
			</div>


			<h3>Componente: SorveteForm</h3>
			<div style={divStyle}>
				<SorveteForm />
			</div>

			<h2>Componente não Controlado</h2>
			A tag input é read-only.

			<h3>Componente: FileInput</h3>
			<div style={divStyle}>
				<FileInput />
			</div>















		</div>
  );
}

export default App;

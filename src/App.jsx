
import './App.css'
import Navbar from './component/navbar/Navbar'
import Logo from './component/Logo'
import Paragraph from './component/Paragraph'
import Graph from './component/Graph'
function App() {
  return (
    <div className="App">
      <div className='flex'>
            <div className='w-[10%]' >
            <Navbar />
            </div>
            <div className='w-[90%]'>
                  <div className='mx-auto my-0 w-[88%]'>
                        <Logo/>
                        <Paragraph/>
                        <Graph/>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default App

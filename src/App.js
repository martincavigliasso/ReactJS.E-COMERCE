
import Footer from './componentes/Footer/footer';
import Navbar from './componentes/Header/Navbar';
import ItemListContainer from './componentes/Main/itemListContainer';


function App() {
    return (
        <>
            <Navbar />
            <main>
                <ItemListContainer />
            </main>
            <Footer />
        </>
    );
}

export default App;

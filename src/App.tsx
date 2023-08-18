import Header from "./components/3-PurpleSchool/Header";
import Footerr from "./components/3-PurpleSchool/Footerr";
import SectionBottom from "./components/3-PurpleSchool/SectionBottom";
import SectionTop from "./components/3-PurpleSchool/SectionTop";
import SectionCentral from "./components/3-PurpleSchool/SectionCentral";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SectionTop />
        <SectionCentral />
        <SectionBottom />
      </main>
      <Footerr />
    </div>
  );
}

export default App;

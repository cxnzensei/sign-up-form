import Contact from "./components/Contact";
import Image from "./components/Image";

const App = () =>  {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/3">
        <Image />
      </div>
      <div className="lg:w-2/3">
        <Contact />
      </div>
    </div>
  );
}

export default App;

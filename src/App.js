import "./App.css";
import { useState } from 'react'
import { useTranslation } from "react-i18next"

function App() {
  const [t, i18n] = useTranslation("global")
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav class=" mb-44 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap justify-around items-center mx-auto">
          <div className="w-96 flex flex-row justify-around">
            <p  className="text-white">HOME</p>
            <p onClick={() => { i18n.changeLanguage("en") }}className="text-white cursor-pointer">TRADUCIR EN INGLES</p>
            <p  onClick={() => { i18n.changeLanguage("es") }} className="text-white cursor-pointer">TRADUCIR EN ESPAÑOL</p>
          </div>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li className="text-white">LINKEDIN</li>
              <li className="text-white">TWITTER</li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex flex-row justify-between px-52">
        <div className="w-96 ">
          <p className="text-white text-4xl">BRYAN ALEXIS CALZADA RODRIGUEZ</p>
          <p className="text-white">{t("data.descripcion")}</p>
          <button className="mt-10 bg-green-600 text-white rounded-lg border border-gray-200 p-4 w-48" onClick={() => {setCount(count +1)}}>Contador de Visitas</button>
          <p className="text-white">{t("data.contador")}{" "}{count}</p>
          <p className="text-white">{t("data.tecnologias")}</p>
        </div>
        <div>
          <img src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/129910068_103664344940224_4793935795174978880_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEg0inmbJRPmVGwVFk6i6a4iDPS2vwYdzOIM9La_Bh3M9GxuRoM5-9fB7Qtdu2D-CFc2I8MRc0Nj-TJx41KKfCh&_nc_ohc=a8_NDHgtATMAX9HSX2I&_nc_ht=scontent.fntr4-1.fna&oh=00_AT8BG0Taqb_A0U-IHM7V-ne_UO2I6qnIWxmD1Se2Q_kWUA&oe=62FCB997" className="rounded-full w-63 h-63" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;

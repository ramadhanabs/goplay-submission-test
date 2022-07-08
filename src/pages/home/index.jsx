import CardHome from '../../components/cards/home';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { MENU_LIST } from '../../constants/menu';

function Home() {
  return (
    <main>
      <div className="container">
        <Header />
        <div className="row">
          {MENU_LIST.map(({ title, description, imgUrl, route }) => (
            <div className="col p-2" key={route}>
              <CardHome
                title={title}
                description={description}
                imgUrl={imgUrl}
                route={route}
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Home;

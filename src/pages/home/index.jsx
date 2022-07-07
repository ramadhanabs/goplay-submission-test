import CardHome from '../../components/cards/home';

const menus = [
  {
    title: 'Simple Color Picker',
    description:
      'This is a simple color picker. You can choose whatever color to gain those hex color code.',
    imgUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
    route: '/simple-color-picker',
  },
  {
    title: 'Images Container',
    description:
      'This is a images container. Fetched from public api and got separated into several pages.',
    imgUrl:
      'https://images.unsplash.com/photo-1562619371-b67725b6fde2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    route: '/images-container',
  },
  {
    title: 'Number to Text Converter',
    description:
      'You can just simply input number and voila! You got your converted number into text.',
    imgUrl:
      'https://images.unsplash.com/photo-1552688468-d87e6f7a58f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    route: '/number-to-text-converter',
  },
];

function Home() {
  return (
    <div className="container">
      <h1>Goplay Frontend Engineer Test</h1>
      <p>Features: Simple Color Picker, Images Container, Number to Text</p>
      <hr />

      <div className="row">
        {menus.map(({ title, description, imgUrl }) => (
          <div className="col p-2">
            <CardHome title={title} description={description} imgUrl={imgUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

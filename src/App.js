import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: 'https://plus.unsplash.com/premium_photo-1667430127787-76194ffa6dc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
    },
    {
      id: 2,
      title: "Sneakers",
      imageUrl: "https://images.unsplash.com/photo-1678303801276-66e244cdd70e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80"
    },
    {
      id: 3,
      title: "Jackets",
      imageUrl: "https://images.unsplash.com/photo-1678305991208-7878543b6b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 4,
      title: "Women",
      imageUrl: "https://images.unsplash.com/photo-1678355964547-d23bde056f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 5,
      title: "Men",
      imageUrl: "https://images.unsplash.com/photo-1678347761208-b181d59781b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    }
  ];

  return <Directory categories={categories}/>;
};

export default App;

import './App.css';

function App() {

  let imageIds = []

  for (let id = 1; id <= 8; id++){
    imageIds.push(id)
  }

  return (
    <div className="App">
      <div className="grid">
        {imageIds.map((id) => {
          let url = `https://stevedsimkins.mypinata.cloud/ipfs/QmTwDNr6LyRzW8H3XorFDArfKEH3GRV1SkF6bAEBF3P4GJ/${id}.jpg?img-width=1080&img-height=1080`
          let name = `nft ${id}`

          return (
            <div className="image-container">
              <img src={url} alt={name}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;

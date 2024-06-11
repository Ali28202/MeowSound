import Card from "./card.jsx"
export default function Albums(){
    const albums = [
        {src:'https://via.placeholder.com/800x400/ff5733/fff',
        artist:1},
        {src:'https://via.placeholder.com/800x400/33ff57/fff',
        artist:2},
        {src:'https://via.placeholder.com/800x400/5733ff/fff',
        artist:3},

      ];
      const renderCard = (albums) => (
        <Card
          src={albums.src}
          title={albums.artist}
        //   key={project.id}
        />
      );
      
    const cardElements = albums.map(renderCard);
    return (
        <div className="datas" id="projects-section">
        <h1 className="title">Albums</h1>
        {cardElements}
        </div>
    );
}
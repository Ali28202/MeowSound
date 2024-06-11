export default function Artists(){
    const artists = [
        {src:'https://via.placeholder.com/800x400/ff5733/fff',
        name:1},
        {src:'https://via.placeholder.com/800x400/33ff57/fff',
        name:2},
        {src:'https://via.placeholder.com/800x400/5733ff/fff',
        name:3},
        
      ];
      const renderCard = (albums) => (
        <Card
          src={artists.src}
          title={artists.name}
        //   key={project.id}
        />
      );
      
      const Artists = () => {
        const cardElements = artists.map(renderCard);
        return (
          <div id="projects-section">
            <h1 className="title">Artists</h1>
            {cardElements}
          </div>
        );
      };
}
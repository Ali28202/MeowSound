export default function Podcasts(){
    const podcasts = [
        {src:'https://via.placeholder.com/800x400/ff5733/fff',
        artist:1},
        {src:'https://via.placeholder.com/800x400/33ff57/fff',
        artist:2},
        {src:'https://via.placeholder.com/800x400/5733ff/fff',
        artist:3},
        
      ];
      const renderCard = (podcasts) => (
        <Card
          src={podcasts.src}
          title={podcasts.artist}
        //   key={project.id}
        />
      );
      
      const Podcasts = () => {
        const cardElements = podcasts.map(renderCard);
        return (
          <div id="projects-section">
            <h1 className="title">Podcasts</h1>
            {cardElements}
          </div>
        );
      };
}
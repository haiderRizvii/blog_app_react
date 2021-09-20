const Bannar = () => {

  const imgStyle = {
    height: "620px"
  }

  return (
    <div class="container">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item">
          <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" style={imgStyle} class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h3>Technology & Tools</h3>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item active">
          <img src="https://images.unsplash.com/photo-1499591934245-40b55745b905?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80" style={imgStyle} class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h3 class="text-dark">Traveling Blogs</h3>
            <p class="text-dark">Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" style={imgStyle} className="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h3>Wild Life</h3>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    </div>
  );
}

export default Bannar;

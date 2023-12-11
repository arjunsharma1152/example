import React, { useEffect } from 'react'
import './Home.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='main-content'>
    <div className='homepage'>
      <div data-aos="fade-left" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit illo, enim esse voluptatem maxime quia molestias quam repellat fugiat, quo incidunt provident nam est, eos ad totam doloribus harum.
        Adipisci quia beatae repellendus temporibus fugit consectetur laborum eos commodi! In maiores cum corrupti adipisci nisi, dicta debitis rerum facere fuga nulla deleniti, explicabo ab at natus nostrum, voluptate reiciendis?
        Labore blanditiis inventore expedita quis mollitia, nam eius ratione cupiditate nobis ut animi illum enim sapiente quo ducimus optio, facilis molestias quae magni sequi aliquam recusandae. Cupiditate suscipit repellendus adipisci.
        Laborum facere saepe nisi. Aliquam ipsum officiis, voluptate molestias eaque reiciendis, tempora, quis fuga sapiente temporibus sequi ab? Fugit explicabo optio vero, laborum adipisci accusamus ut quos aliquid omnis reprehenderit?
        Blanditiis necessitatibus, hic consectetur incidunt ullam voluptate consequatur dolor culpa animi labore et quibusdam nemo eveniet debitis est autem magnam recusandae odit modi atque? Sequi nemo nobis eum quis id!</div>
      <div data-aos="fade-right" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit illo, enim esse voluptatem maxime quia molestias quam repellat fugiat, quo incidunt provident nam est, eos ad totam doloribus harum.
        Adipisci quia beatae repellendus temporibus fugit consectetur laborum eos commodi! In maiores cum corrupti adipisci nisi, dicta debitis rerum facere fuga nulla deleniti, explicabo ab at natus nostrum, voluptate reiciendis?
        Labore blanditiis inventore expedita quis mollitia, nam eius ratione cupiditate nobis ut animi illum enim sapiente quo ducimus optio, facilis molestias quae magni sequi aliquam recusandae. Cupiditate suscipit repellendus adipisci.
        Laborum facere saepe nisi. Aliquam ipsum officiis, voluptate molestias eaque reiciendis, tempora, quis fuga sapiente temporibus sequi ab? Fugit explicabo optio vero, laborum adipisci accusamus ut quos aliquid omnis reprehenderit?
        Blanditiis necessitatibus, hic consectetur incidunt ullam voluptate consequatur dolor culpa animi labore et quibusdam nemo eveniet debitis est autem magnam recusandae odit modi atque? Sequi nemo nobis eum quis id!</div>
      <div data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit illo, enim esse voluptatem maxime quia molestias quam repellat fugiat, quo incidunt provident nam est, eos ad totam doloribus harum.
        Adipisci quia beatae repellendus temporibus fugit consectetur laborum eos commodi! In maiores cum corrupti adipisci nisi, dicta debitis rerum facere fuga nulla deleniti, explicabo ab at natus nostrum, voluptate reiciendis?
        Labore blanditiis inventore expedita quis mollitia, nam eius ratione cupiditate nobis ut animi illum enim sapiente quo ducimus optio, facilis molestias quae magni sequi aliquam recusandae. Cupiditate suscipit repellendus adipisci.
        Laborum facere saepe nisi. Aliquam ipsum officiis, voluptate molestias eaque reiciendis, tempora, quis fuga sapiente temporibus sequi ab? Fugit explicabo optio vero, laborum adipisci accusamus ut quos aliquid omnis reprehenderit?
        Blanditiis necessitatibus, hic consectetur incidunt ullam voluptate consequatur dolor culpa animi labore et quibusdam nemo eveniet debitis est autem magnam recusandae odit modi atque? Sequi nemo nobis eum quis id!</div>
      <div data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit illo, enim esse voluptatem maxime quia molestias quam repellat fugiat, quo incidunt provident nam est, eos ad totam doloribus harum.
        Adipisci quia beatae repellendus temporibus fugit consectetur laborum eos commodi! In maiores cum corrupti adipisci nisi, dicta debitis rerum facere fuga nulla deleniti, explicabo ab at natus nostrum, voluptate reiciendis?
        Labore blanditiis inventore expedita quis mollitia, nam eius ratione cupiditate nobis ut animi illum enim sapiente quo ducimus optio, facilis molestias quae magni sequi aliquam recusandae. Cupiditate suscipit repellendus adipisci.
        Laborum facere saepe nisi. Aliquam ipsum officiis, voluptate molestias eaque reiciendis, tempora, quis fuga sapiente temporibus sequi ab? Fugit explicabo optio vero, laborum adipisci accusamus ut quos aliquid omnis reprehenderit?
        Blanditiis necessitatibus, hic consectetur incidunt ullam voluptate consequatur dolor culpa animi labore et quibusdam nemo eveniet debitis est autem magnam recusandae odit modi atque? Sequi nemo nobis eum quis id!</div>
    </div>
    </div>
  )
}

export default Home;
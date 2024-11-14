import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import PopularRestaurants from '../components/PopularRestaurants'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();

  const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{
        fetchRestaurants();
      }, [])

    const fetchRestaurants = async() =>{
        await axios.get('http://localhost:6001/fetch-restaurants').then(
          (response)=>{
            setRestaurants(response.data);
          }
        )
      }

  return (
    <div className="HomePage">

      <div className="home-categories-container">

        <div className="home-category-card" onClick={()=>navigate('/category/Breakfast')}>
          <img src="https://www.lacademie.com/wp-content/uploads/2022/03/indian-breakfast-recipes-500x500.jpg" alt="" />
          <h5>Breakfast</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Biriyani')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-VXaTJIkc6rk02DU8r7r9zR-KaeWvH1oKA&usqp=CAU" alt="" />
          <h5>Biriyani</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Pizza')}>
          <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" />
          <h5>Pizza</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Noodles')}>
          <img src="https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_2176816723.jpg" alt="" />
          <h5>Noodles</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Burger')}>
          <img src="data:image/jpeg;base64,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" alt="Burger" />
          <h5>Burger</h5>
        </div>

      </div>


      <PopularRestaurants />

      


      <div className="restaurants-container">
        <div className="restaurants-body">
            <h3>All restaurants</h3>
            <div className="restaurants">

                {restaurants.map((restaurant) =>(

                  <div className='restaurant-item' key={restaurant._id}>
                      <div className="restaurant" onClick={()=> navigate(`/restaurant/${restaurant._id}`)}>
                          <img src={restaurant.mainImg} alt="" />
                          <div className="restaurant-data">
                              <h6>{restaurant.title}</h6>
                              <p>{restaurant.address}</p>
                          </div>
                      </div>
                  </div>
                ))}

 
            </div>
        </div>
    </div>





      <Footer />
    </div>
  )
}

export default Home
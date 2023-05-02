import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
      const [chefs, setChefs] = useState([])
      useEffect(() => {
            fetch("http://localhost:5000/chefs/")
                  .then(res => res.json())
                  .then(data => setChefs(data))
      }, [])
      console.log(chefs);
      return (
            <div>
                  <h2 className='text-center'>Here is world Famous Chefs for you</h2>
                  {
chefs.map(chef=> <div className='text-center'>
<h3>{chef.chefName}</h3>
      <Button><Link to={`${chef.chef_id}`}>See Details</Link></Button>
<img className='w-25' src={chef.chefPic} alt="" />

</div>)
                  }
            </div>
      );
};

export default Home;
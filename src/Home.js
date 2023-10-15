// src/Sidebar.js
import React from 'react';
import './Home.css'
import BarGraph from './BarGraph';
import PieChartComopent from './PieChartComponent'
import DataTable from './DataTable';

 
  const Home = () => {
    const data = [
        { column1: 'A', column2: '60', column3: '56', column4: '90' },
        { column1: 'E', column2: '66', column3: '90', column4: '56' },
        // Add more data objects as needed
      ];
    return (
        <div className='home'>
            <div className='hello'>
                <h2>
                    Hello Shahrukh
                </h2>
            </div>


            <div className='box'>

                <div className='innerbox'>
                    <div className='img'>        <img    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4u9BtHVVs10VJL4N9_IHFLqvguFQZjZUdm163sphZ7tK6EJ9lWCASGvvcIlnxYu9wx0&usqp=CAU" alt="BigCo Inc. logo" />
                    <div>
                    <h4  className='h4'>Earning</h4>
                    <h3>$198k</h3> 
                    <h5>37.0% this Month</h5> 
                    </div>
                    </div>   
                </div>


                <div className='innerbox'>
                    <div className='img'>        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4u9BtHVVs10VJL4N9_IHFLqvguFQZjZUdm163sphZ7tK6EJ9lWCASGvvcIlnxYu9wx0&usqp=CAU" alt="BigCo Inc. logo" />
                    <div>
                    <h4  className='h4'>Order</h4>
                    <h3>$2.4k</h3>
                    <h5>37.0% this Month</h5> 
                    
                    </div>
                    </div>   
                </div>

                <div className='innerbox'>
                    <div className='img'>        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4u9BtHVVs10VJL4N9_IHFLqvguFQZjZUdm163sphZ7tK6EJ9lWCASGvvcIlnxYu9wx0&usqp=CAU" alt="BigCo Inc. logo" />
                    <div>
                    <h4  className='h4'>Balance</h4>
                    <h3>$2.4k</h3> 
                    <h5>37.0% this Month</h5> 
                     
                    </div>
                    </div>   
                </div>
                <div className='innerbox'>
                    <div className='img' >        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4u9BtHVVs10VJL4N9_IHFLqvguFQZjZUdm163sphZ7tK6EJ9lWCASGvvcIlnxYu9wx0&usqp=CAU" alt="BigCo Inc. logo" />
                    <div>
                    <h4 className='h4'>Total Sales</h4>
                    <h3>$89k</h3>
                    <h5>37.0% this Month</h5> 
                     
                    </div>
                    </div>   
                </div>

            </div>
 
            
 <div className='pie'>
    <BarGraph/>
    <PieChartComopent/>
 </div>
 <DataTable data={data} />
   
        </div>
    );
};

export default Home;

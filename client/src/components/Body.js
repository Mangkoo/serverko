import React from 'react';
import './Body.css';


function Body() {
  return (
    <div className='body'>
          
      <div className='communityCardContainer'>
        <div className='communityCardHeader'>Community</div>   

          <div className='communityCard'>
            
            <ul className='bodyList'>  
         
              
              <li className='bodyListItem'>
                <body class='bodyText'>Check out what the Social Servers Community has to say!</body>
              </li>

              <li className='bodyListItem'>
                <div className='demoFeed'>
                  <i>Whoops! Looks like we're having trouble contacting the Social Servers API 😟 </i>
                </div>
              </li>

            </ul>

          </div>

        </div>

        <div className='recentCardContainer'>
        <div className='recentCardHeader'>Recent Posts</div>    
          <div className='recentCard'>
            
            <ul>  
                        
              
              <li className='bodyListItem'>
                <body class='bodyText'>Most Recent:</body>
              </li>

              <li className='bodyListItem'>
              <div className='demoFeed'>
                  <ul>
                    <li className='bodyListItem'>
                     <body class='bodyText'><i class="fas fa-comment-alt"></i> demo_post_1</body>
                    </li>
                  </ul>
                </div>
              </li>


             

              <li className='bodyListItem'>
                <body class='bodyText'><i class="fas fa-comment-alt"></i> demo_post_2</body>
              </li>

              <li className='bodyListItem'>
                <body class='bodyText'><i class="fas fa-comment-alt"></i> demo_post_3</body>
              </li>
              
              <li className='bodyListItem'>
                <body class='bodyText'><i class="fas fa-comment-alt"></i> demo_post_4</body>
              </li>





            </ul>

          </div>
        </div>
      </div>
  );
}

export default Body;

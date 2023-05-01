import React from "react";
import age_business from './SampleAverageDuration.png';
import success_types from './Successful_business_types.png';
import unsuccess_types from './unsuccessful_types.png';

function InitialFindings(){
    return(
        <div class="container-fluid border">
        <div class="row gx-1 gy-5" >
            <div class="col">
                <div class="card">
                <img src={age_business} alt="business age"></img>
                </div>
            </div>
            <div class="col">
            <h3>Initial Findings</h3>
            <p>Initially I wanted to find the best Place to establish Business as I
            explored and analyzed the data I realized that first I needed to define
            success for a business. I did this by looking at the age of all the business 
            in NYC.I realize that median age of a business is 5 years so I decided any business over 5 years old
            would be considered successful, because I did not have access to profits of the business and this 
            was the only realiable method to determine success.
            </p>
            <p>I used histogram to show the number of business of and their respective ages.</p>
            </div>
        </div>
        
        <h3>Types of Business</h3>
        <div class="row gx-1 gy-5">
            <div class="col">
                <p>I also found out many types of business. There were more than types of business so I decided to focus on 
                small business that interested me. Which are visualized below. Stoop Line Stand are groceries, and I also
                found out that many Tobacco Retail Dealer also sell and advertise themselves as Groceries so that they can 
                get greater share of the market. It could also be because of this reason they are more successful. Not only 
                do they sell groceries, they also are involved in selling alcohol and cigerettes and attracting customers who 
                in contrast to shops that only sell alcohol or Electronic cigerettes.
            </p>
            </div>
            <div class="col">
                <div class="card-body">
                    <img src={success_types} alt="success_types"></img>
                </div>
            </div>
        </div>
        <div class="container-fluid border">
            <div class="row gx-1 gy-5">
            <p>Unsuccessful business types</p>
                <div class="col"> 
                    <div class="card">
                        <img src={unsuccess_types} alt="unsuccess_types"></img>
                    </div>
                </div>
                <div class="col">
                <p>We can see that Laundry has the highest number of unsuccessful types. There are also large number
                of oif Electronic Cigerrette Deealer which are Unsuccessful.</p>
                </div>
            </div>
        
        </div>
        <div class="container">
            <button type="button" class="btn btn-outline-dark">Press Here</button>
        </div>
        
    </div>);
}
export default InitialFindings;
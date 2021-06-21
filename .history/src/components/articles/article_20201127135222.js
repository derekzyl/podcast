import React from 'react'
import './article.css'
import article1 from '../../images/article1.jpg';

function Article() {
    return (
        <div class='article'>
            <h3>The latest news</h3>
            <div className="grid-container">
                <div class="grid-item">
                    <h4>The US Presidential Election</h4>
                    <img src={article1} alt="" />
                    <p>The 2020 United States presidential election was the 59th quadrennial presidential election, held nominally on Tuesday, November 3, 2020</p>
                    <button>Read More</button>
                </div>

                <div class="grid-item">
                    <h4>The US Presidential Election</h4>
                    <img src="" alt="" />
                    <p>The historic US election of 2020 has just been concluded</p>
                    <button>Read More</button>
                </div>

                <div class="grid-item">
                    <h4>The US Presidential Election</h4>
                    <img src="" alt="" />
                    <p>The historic US election of 2020 has just been concluded</p>
                    <button>Read More</button>
                </div>

                <div class="grid-item">
                    <h4>The US Presidential Election</h4>
                    <img src="" alt="" />
                    <p>The historic US election of 2020 has just been concluded</p>
                    <button>Read More</button>
                </div>

                <div class="grid-item">
                    <h4>The US Presidential Election</h4>
                    <img src="" alt="" />
                    <p>The historic US election of 2020 has just been concluded</p>
                    <button>Read More</button>
                </div>

                <div class="grid-item">
                    <h4>The US Presidential Election</h4>
                    <img src="" alt="" />
                    <p>The historic US election of 2020 has just been concluded</p>
                    <button>Read More</button>
                </div>

            </div>
        </div >

    )
}

export default Article

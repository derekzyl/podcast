import React from 'react'
import './article.css'
import article1 from '../../images/article1.jpg';
import article2 from '../../images/article2.jpg';

function Article() {
    return (
        <div class='article'>
            <div className="grid-container">
                <div class="grid-item">
                    <img src={article1} alt="" />
                    <h5>US Election</h5>
                    <p>The Supreme Court decision</p>

                </div>

                <div class="grid-item">
                    <img src={article2} alt="" />
                    <p>COVID 19 scare is still on</p>

                </div>

                <div class="grid-item">
                    <img src="" alt="" />
                    <p>The historic US election of 2020 has just been concluded</p>

                </div>

                <div class="grid-item">

                    <img src="" alt="" />
                    <p>The historic US election of 2020 has just been concluded</p>

                </div>

                <div class="grid-item">

                    <img src="" alt="" />
                    <p>The historic US election of 2020 has just been concluded</p>

                </div>

                <div class="grid-item">

                    <img src="" alt="" />
                    <p>The historic US election of 2020 has just been concluded</p>

                </div>

            </div>
        </div >

    )
}

export default Article

import React from 'react'

function SidebarRow({ title, imgUrl, content }) {
    return (
        <div class="sidebarRow">
            <div className="sidebarRow-component">
                <h4>{title}</h4>
                <img src={imgUrl} alt="" />
                <p>{content}</p>
            </div>
        </div>
    )
}

export default SidebarRow

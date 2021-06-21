import React from 'react'

function SidebarRow({ title, imgUrl, content }) {
    return (
        <div class="sidebar-row">
            <div className="sidebar-component">
                <h4>{title}</h4>
                <img src={imgUrl} alt="" />
            </div>
        </div>
    )
}

export default SidebarRow

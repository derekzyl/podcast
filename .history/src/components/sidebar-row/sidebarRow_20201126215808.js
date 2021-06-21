import React from 'react'

function SidebarRow({ title, img, content }) {
    return (
        <div class="sidebar-row">
            <div className="sidebar-component">
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default SidebarRow

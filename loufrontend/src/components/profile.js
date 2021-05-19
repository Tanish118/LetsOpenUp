import React from 'react'

export default function Profile(props){
    return (
        <div>
            <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px",
            borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1621306558135-3500aef6c517?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt='stick'/>
                </div>
                <div>
                    <h4>allah ka banda</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6>50 posts</h6>
                        <h6>45 followers</h6>
                        <h6>40 following</h6>
                    </div>

                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1621324124020-fb7e2571a600?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='thick' />
            </div>
        </div>

    )
}


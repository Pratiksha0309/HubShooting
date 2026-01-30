import React from 'react'
import image1 from '../../assets/image 80.png'

const VideoSection = () => {
    return (
        <div className='container mt-5 videoSectionMainDivs'>
            <p className='videoText'>VIDEO GALLERY</p>
            <div className='row mt-4 gap-md-0 gap-3'>
                <div className="col-md-4 col-12">
                    <div className="ratio ratio-16x9">
                        <iframe
                            src="https://www.youtube.com/embed/<VIDEO_ID>"
                            title="Embedded youtube"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >                         
                        </iframe>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="ratio ratio-16x9">
                        <iframe
                            src="https://www.youtube.com/embed/<VIDEO_ID>"
                            title="Embedded youtube"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                            
                        </iframe>
                    </div>
                </div>
            <div className="col-md-4 col-12">
                <div className="ratio ratio-16x9">
                    <iframe
                        src="https://www.youtube.com/embed/<VIDEO_ID>"
                        title="Embedded youtube"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
        </div>
    )
}

export default VideoSection
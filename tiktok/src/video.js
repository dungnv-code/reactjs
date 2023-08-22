import { forwardRef, useRef } from 'react';
import { useImperativeHandle } from 'react';
import videos from './video/video-1.mp4'

function Video(prop, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, () =>( {
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))

    return <video
        ref={videoRef}
        width={280}
        src={videos} />
}

export default forwardRef(Video);
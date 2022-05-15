import Empty from "../../../assets/images/collections/empty.png";


export default function ImagePreview({images}){
    if(images && images.length){
        return (
            
            <div className="relative w-full h-full">
                {images.map((url, index) => {
                    const style = {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: index + 1 
                    }
                    return <img style={style} src={url} alt="random image"/>
                })}
            </div>
        )
    }

    return (
        <div className="w-full h-full">
           <img src={Empty} class="w-full h-full" alt=""/>
         </div>
    )
}
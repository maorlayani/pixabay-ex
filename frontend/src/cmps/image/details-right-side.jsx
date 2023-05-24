import { AiOutlineEye, AiOutlineLike } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { BiCollection } from "react-icons/bi"
import { FiDownload } from "react-icons/fi"

export const DetailsRightSide = ({ image }) => {
    const getImageData = () => {
        return [
            {
                icon: <AiOutlineEye />,
                content: image.views
            },
            {
                icon: <AiOutlineLike />,
                content: image.likes
            },
            {
                icon: <FaRegComment />,
                content: image.comments
            },
            {
                icon: <BiCollection />,
                content: image.collections
            },
            {
                icon: <FiDownload />,
                content: image.downloads
            },
        ]
    }
    return (
        <div className="details-right-side flex column">
            {getImageData().map(data => {
                return <div key={data.content} className="data-container flex align-center">
                    <span className="data-icon">{data.icon}</span>
                    <span className="data">{data.content}</span>
                </div>
            })}
        </div>
    )
}
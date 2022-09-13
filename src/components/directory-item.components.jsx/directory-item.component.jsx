import { DirectoryItemContainer } from "./directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${category.imageUrl})`,
                }}
            />

            <div className="body">
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </div>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;

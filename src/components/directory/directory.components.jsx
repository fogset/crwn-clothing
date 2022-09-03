import CategoryItem from "../category-item.components.jsx/category-item.component";
import "./directory.styles.scss";

const Directroy = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Directroy;

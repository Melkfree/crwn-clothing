import { useNavigate } from 'react-router-dom';
import { BackgroundImage, Body, CategoriesListItemContainer} from './categories-list-item.styles';

const CategoriesListItem = ({ category }) => {
    const {imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return(
        <CategoriesListItemContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl} />
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </CategoriesListItemContainer>
    );
}


export default CategoriesListItem;
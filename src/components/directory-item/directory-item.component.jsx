import { Link } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, linkUrl } = category;

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Link className="directory-item-body" to={linkUrl}>
        <h2>{title}</h2>
        <span>Compre agora</span>
      </Link>
    </div>
  );
};

export default DirectoryItem;

import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: 'Bonés',
    imageUrl: 'https://i.ibb.co/7RND5Wn/pexels-aman-jakhar-1124465.jpg',
    linkUrl: 'shop/bones',
  },
  {
    id: 2,
    title: 'Tênis',
    imageUrl: 'https://i.ibb.co/qFdXDg3/pexels-shyam-mishra-16100364.jpg',
    linkUrl: 'shop/tenis',
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;

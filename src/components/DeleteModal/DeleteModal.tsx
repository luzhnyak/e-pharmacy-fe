import { FC } from 'react';
import css from './DeleteModal.module.css';
import { Products } from '../Products/AllProductsTable/AllProductsTable';

interface DeleteModalProps {
  data: Products;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: FC<DeleteModalProps> = ({ data, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <>
      <p className={css.text}>Are you sure you want to delete {data.name}?</p>
      <div className={css.buttonWrap}>
        <button
          type="submit"
          className={css.buttonDelete}
          onClick={handleDelete}
        >
          Delete
        </button>

        <button type="button" className={css.buttonCancel} onClick={onClose}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default DeleteModal;

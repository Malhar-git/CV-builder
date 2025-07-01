export function Buttons({ isEditable, onSave, onEdit }) {
  return (
    <div>
      <button
        type="button"
        onClick={onSave}
        disabled={!isEditable}
      >
        Save
      </button>
      <button
        type="button"
        onClick={onEdit}
        disabled={isEditable}
      >
        Edit
      </button>
    </div>
  );
}

export function Buttons({ onSave, onEdit }) {
  return (
    <div>
      <button type="button" onClick={onSave}>Save</button>
      <button type="button" onClick={onEdit}>Edit</button>
    </div>
  );
}

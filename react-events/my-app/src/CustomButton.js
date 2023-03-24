export default function CustomButton ({text, color, customClick}) {

  return (
    <button
      style={{backgroundColor: color}}
      onClick={customClick}>
        {text}
    </button>
  );
}

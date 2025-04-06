export default function CheckBox({ name, label, handleOnChange }) {
  return (
    <div className="flex gap-2.5 items-center ">
      <input
        className="border-[1px] size-4 rounded-sm bg-none border-text"
        type="checkbox"
        name={name}
        id={name}
        onChange={handleOnChange}
      />
      <label className="text-text leading-[130%] " htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

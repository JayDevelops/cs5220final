function CustomInput(props) {
  const { label, type = "text", value, onChange, min } = props;

  return (
    <label class="block">
      <span className="text-sm font-medium text-white/80">{label}</span>
      <input
        type={type}
        value={value}
        onInput={(e) =>
          onChange(type === "number" ? e.target.value : e.target.value)
        }
        min={min}
        class="mt-1 block w-full bg-gray-800 border-gray-600 text-white rounded-lg p-2"
      />
    </label>
  );
}

export default CustomInput;

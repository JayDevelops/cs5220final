import CustomInput from "./CustomInput";

function PlayerProfileEditor(props) {
  const { profile, setProfile } = props;

  const updateField = (field, value) => {
    setProfile({
      ...profile,
      [field]: value,
    });
  };

  const updateEquipment = (field, value) => {
    setProfile({
      ...profile,
      equipment: {
        ...profile.equipment,
        [field]: value,
      },
    });
  };

  return (
    <div class="bg-gray-700 p-2 rounded-lg shadow-md p-4">
      <h2 class="text-2xl font-semibold mb-4">Edit Player Profile</h2>
      <div className="space-y-4">
        <CustomInput
          label="Name"
          value={profile.name}
          onChange={(value) => updateField("name", value)}
        />
        <label class="block">
          <span class="text-sm font-medium text-white/80">Class:</span>
          <select
            value={profile.class}
            onInput={(e) => updateField("class", e.target.value)}
            class="mt-1 block w-full bg-gray-800 border-gray-600 text-white rounded-lg p-2"
          >
            <option>Knight</option>
            <option>Professor</option>
            <option>Mage</option>
          </select>
        </label>
        <CustomInput
          label="Level"
          type="number"
          value={profile.level}
          onChange={(value) => updateField("level", value)}
          min={1}
        />

        <h3 class="text-xl font-semibold">Equipment</h3>
        <div className="space-y-4">
          <CustomInput
            label="Weapon"
            value={profile.equipment.weapon}
            onChange={(value) => updateEquipment("weapon", value)}
          />
          <CustomInput
            label="Armor"
            value={profile.equipment.armor}
            onChange={(value) => updateEquipment("armor", value)}
          />
          <CustomInput
            label="Accessory"
            value={profile.equipment.accessory}
            onChange={(value) => updateEquipment("accessory", value)}
          />
        </div>
      </div>
    </div>
  );
}

export default PlayerProfileEditor;

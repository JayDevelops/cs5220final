function PlayerProfileSummary(props) {
  const { profile } = props;

  return (
    <div class="bg-gray-700 p-4 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Player Summary</h2>
      <p class="text-sm text-white/80">
        <span class="font-bold">Name: </span>
        {profile.name}
      </p>
      <p class="text-sm text-white/80">
        <span class="font-bold">Class: </span>
        {profile.class}
      </p>
      <p class="text-sm text-white/80">
        <span class="font-bold">Level: </span>
        {profile.level}
      </p>

      <h3 class="text-xl font-semibold my-4">Equipment</h3>

      <ul className="space-y-4">
        <li class="text-sm text-white/80">
          <span class="font-bold">Weapon: </span>
          {profile.equipment.weapon}
        </li>
        <li class="text-sm text-white/80">
          <span class="font-bold">Armor: </span>
          {profile.equipment.armor}
        </li>
        <li class="text-sm text-white/80">
          <span class="font-bold">Accessory: </span>
          {profile.equipment.accessory}
        </li>
      </ul>
    </div>
  );
}

function PlayerAttribute(props) {
  const { label, attribute } = props;
  return (
    <p class="text-sm text-white/80">
      <span class="font-bold">{label}</span>
      {attribute}
    </p>
  );
}
export default PlayerProfileSummary;

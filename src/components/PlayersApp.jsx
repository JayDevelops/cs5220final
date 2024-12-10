import { createStore } from "solid-js/store";
import PlayerProfileEditor from "./PlayerProfileEditor";
import PlayerProfileSummary from "./PlayerProfileSummary";
import { createSignal } from "solid-js";

function PlayersApp() {
  const [profiles, setProfiles] = createStore([]);
  const [profileId, setProfileId] = createSignal(0);
  const [selectedProfileId, setSelectedProfileId] = createSignal(null);
  let input;

  //  add profile
  const addProfile = (name) => {
    const newId = profileId();
    setProfileId(newId + 1);
    setProfiles([
      ...profiles,
      {
        id: newId,
        class: "Professor",
        name,
        level: 10,
        equipment: {
          weapon: "Failnaught",
          armor: "Aegis Shield",
          accessory: "Cloak",
        },
      },
    ]);
  };

  //  update profile by id
  const updateProfile = (id, updatedProfile) => {
    //  simply call setProfiles and pass in the desired id and pass in the updated profile
    setProfiles(
      (profile) => profile.id === id,
      (profile) => ({ ...profile, ...updatedProfile })
    );
  };

  const selectedProfile = () =>
    profiles.find((profile) => profile.id === selectedProfileId());

  return (
    <div class="min-h-screen bg-gradient from-gray-800 to-gray-900 text-white px-8">
      <h1 class="text-4xl font-bold text-center mb-4">Player Profile</h1>

      {/* Display the editor and profile summary, else display the each profile in a grid */}
      {selectedProfileId() !== null ? (
        <div class="space-y-8">
          <button
            class="bg-gray-300 text-black p-4 rounded-lg"
            onClick={() => setSelectedProfileId(null)}
          >
            Back to Profiles
          </button>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
            <PlayerProfileEditor
              profile={selectedProfile()}
              setProfile={(updatedProfile) =>
                updateProfile(selectedProfileId(), updatedProfile)
              }
            />
            <PlayerProfileSummary profile={selectedProfile()} />
          </div>
        </div>
      ) : (
        <div>
          {/* Input to add new profile to the list */}
          <div class="mb-6 text-center space-x-6">
            <input
              ref={input}
              placeholder="Enter player name..."
              class="text-black px-4 py-2 rounded-lg focus:border-cyan-500"
            />
            <button
              class="bg-yellow-700 text-white p-4 rounded-lg focus:border-cyan-500"
              onClick={() => {
                if (input.value.trim()) {
                  addProfile(input.value.trim());
                  input.value = "";
                }
              }}
            >
              Add Profile
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <For each={profiles}>
              {(profile) => (
                <button
                  class="bg-gray-700 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-600 hover:scale-105 transition-all text-center"
                  onClick={() => setSelectedProfileId(profile.id)}
                >
                  <h2 class="text-xl font-semibold">{profile.name}</h2>
                  <p class="text-sm text-white/80">Class: {profile.class}</p>
                  <p class="text-sm text-white/80">Level: {profile.level}</p>
                </button>
              )}
            </For>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayersApp;

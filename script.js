// erstelle eine Funktion 'applyUpdate', die updates auf ein Objekt anwendet
function applyUpdate(obj, update) {
  // durchlaufe jedes Update im "update"-Objekt.
  for (const key in update) {
    if (update.hasOwnProperty(key)) {
      // aktuallisiere jedes Objekt
      applyUpdateOperation(obj, key, update[key]);
    }
  }
  // gebe das object zurück
  return obj;
}

// create Funktion namens "applyUpdateOperation", um die spezifischen Updates druchzuführen
function applyUpdateOperation(obj, key, value) {
  // teile den Schlüssel auf, um den Pfad zu bestimmen
  const keys = key.split(".");
  let current = obj;

  // durchlaufe den Pfad bis zum letzten Teil
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    if (!(k in current)) {
      // wenn der Schlüssel nicht existiert, erstelle ich das entsprechende objekt oder array
      current[k] = isNaN(keys[i + 1]) ? {} : [];
    }
    current = current[k];
  }

  // bestimme den letzten Schlüssel im Pfad
  const lastKey = keys[keys.length - 1];
  if (Array.isArray(current)) {
    // wenn das aktuelle Element ein Array ist führe ich das Update durch
    applyArrayUpdate(current, lastKey, value);
  } else {
    // wenn das aktuelle Element ein Objekt ist führe ich das Update durch
    applyObjectUpdate(current, lastKey, value);
  }
}

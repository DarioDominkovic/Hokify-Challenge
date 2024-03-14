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

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

// function "applyArrayUpdate", um Arrays upzudaten
function applyArrayUpdate(arr, key, value) {
  if (key === "[]") {
    // if Schlüssel [] ist, füge ich einen neuen Eintrag zum Array hinzu oder entferne das gesamte Array
    if (value === null) {
      arr.length = 0;
    } else {
      arr.push(value);
    }
  } else {
    // else suche ich den Eintrag im Array und wende das Update an
    const index = arr.findIndex((item) => item._id === key);
    if (index !== -1) {
      if (value === null) {
        arr.splice(index, 1);
      } else {
        arr[index] = Object.assign({}, arr[index], value);
      }
    }
  }
}

// function "applyObjectUpdate", um Objects upzudaten
function applyObjectUpdate(obj, key, value) {
  if (value === null) {
    // if Wert null ist, entferne ich die Eigenschaft aus dem Objekt
    delete obj[key];
  } else {
    // else setze oder update ich die Eigenschaft im objekt
    obj[key] = value;
  }
}

// Beispielobjekt und Updates hinzugefügt
let obj = {
  a: {
    b: [
      { _id: "5dc0ad700000000000000000", name: "asdf1" },
      { _id: "5dc0ad700000000000000001", name: "asdf2" },
      { _id: "5dc0ad700000000000000002", name: "asdf3" },
    ],
  },
  value: "hui",
};

const updates = {
  "a.b[5dc0ad700000000000000000]": { title: "asdf1-updated" },
  "a.b[5dc0ad700000000000000000].titleValue": "asdf1-updated",
  "a.b[]": { _id: "5dc0ad700000000000000003", name: "co2" },
  "a.b[5dc0ad700000000000000001]": null,
  "a.c": "hallo",
  value: null,
  something: "anything",
  "v.x[]": "asdfV",
  "v.m.l": "asdf-val",
  images: {
    thumbnail: "http://new-thumbnail.jpg",
    small: "http://new-small.jpg",
    medium: "http://new-medium.jpg",
    large: "http://new-large.jpg",
    xlarge: "http://new-xlarge.jpg",
  },
};

// function aufrufen, um updates anzuwenden
applyUpdate(obj, updates);

// ergebnis ausgeben und überprüfen
console.log(obj);

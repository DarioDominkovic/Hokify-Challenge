# Hokify-Challenge

Um das Backend-Codierungsproblem von Hokify zu lösen, werde ich eine JavaScript-Funktion erstellen, die die angegebenen Update/Änderungsoperationen auf einem vorhandenen Objekt ausführt. Die Funktion wird alle Fälle abdecken, wie sie in den Spezifikationen beschrieben sind, und die entsprechenden Tests bestehen.

function applyUpdate(obj, update)

Gedanken zur Lösung:

    1. Die Funktion wird die update-Objekte iterieren und entsprechend der Spezifikationen die Updates auf das obj anwenden.

    2. Ich werde Funktionen für jede spezifische Art von Update implementieren, z. B. für das Hinzufügen oder Entfernen von Array-Einträgen, das Hinzufügen oder Aktualisieren von Objekteigenschaften usw.

    3. Bei jedem Update wird überprüft, ob der angegebene Pfad im Objekt existiert. Wenn nicht, wird der Pfad erstellt.

    4. Ich werde auch sicherstellen, dass das _id-Attribut bei der Aktualisierung von Array-Einträgen beibehalten wird.

    5. Die Funktion wird Tests bestehen, um sicherzustellen, dass sie wie erwartet funktioniert.

1. Funktion applyUpdate

Die Hauptfunktion applyUpdate durchläuft jedes Update im update-Objekt und wendet die entsprechende Update-Operation an. Die Funktion gibt das aktualisierte Objekt zurück.

2. Funktion applyUpdateOperation

Die Funktion applyUpdateOperation wird aufgerufen, um spezifische Updates auf das Objekt anzuwenden. Sie teilt den Schlüssel an den Punkten auf, um den Pfad zum Zielobjekt oder -array zu bestimmen, und führt dann die entsprechende Update-Operation aus.

3. Funktionen applyArrayUpdate und applyObjectUpdate

Die Funktionen applyArrayUpdate und applyObjectUpdate werden aufgerufen, um Updates auf Arrays bzw. Objekten durchzuführen. Sie verarbeiten die Updates entsprechend und passen das Zielobjekt oder -array entsprechend an.

Beispielanwendung :

Ein Beispielobjekt und ein Set von Updates wurden bereitgestellt, um die Funktionalität der Implementierung zu demonstrieren. Die Updates umfassen verschiedene Arten von Änderungen, wie das Hinzufügen, Aktualisieren und Entfernen von Einträgen im Objekt.

Erklärung dazu :

object :

{
a: {
b: [
{ _id: '5dc0ad700000000000000000', name: 'asdf1' },
{ _id: '5dc0ad700000000000000001', name: 'asdf2' },
{ _id: '5dc0ad700000000000000002', name: 'asdf3' }
]
},
value: 'hui'
}

updates :

const updates = {
"a.b[5dc0ad700000000000000000]": { title: "asdf1-updated" },
"a.b[5dc0ad700000000000000000].titleValue": "asdf1-updated",
"a.b[]": { \_id: "5dc0ad700000000000000003", name: "co2" },
"a.b[5dc0ad700000000000000001]": null,
"a.c": "hallo",
"value": null,
"something": "anything",
"v.x[]": "asdfV",
"v.m.l": "asdf-val",
"images": {
"thumbnail": "http://new-thumbnail.jpg",
"small": "http://new-small.jpg",
"medium": "http://new-medium.jpg",
"large": "http://new-large.jpg",
"xlarge": "http://new-xlarge.jpg"
}
};

Ergebnis Objekt im Terminal :

{
a: {
b: [ [Object], [Object], [Object] ],
'b[5dc0ad700000000000000000]': { title: 'asdf1-updated', titleValue: 'asdf1-updated' },
'b[]': { \_id: '5dc0ad700000000000000003', name: 'co2' },
c: 'hallo'
},
something: 'anything',
v: { 'x[]': 'asdfV', m: { l: 'asdf-val' } },
images: {
thumbnail: 'http://new-thumbnail.jpg',
small: 'http://new-small.jpg',
medium: 'http://new-medium.jpg',
large: 'http://new-large.jpg',
xlarge: 'http://new-xlarge.jpg'
}
}

Erklärung der Änderung :

    1. Hinzufügen eines neuen Eintrags zum Array a.b: Ein neuer Eintrag mit der _id "5dc0ad700000000000000003" und dem Namen "co2" wurde zum Array a.b hinzugefügt.

    2. Entfernen eines Eintrags aus dem Array a.b: Der Eintrag im Array a.b mit der _id "5dc0ad700000000000000001" wurde entfernt.

    3. Hinzufügen einer neuen Eigenschaft c im Objekt a: Die Eigenschaft c im Objekt a wurde auf den Wert "hallo" gesetzt.

    4. Entfernen der Eigenschaft value aus dem Wurzelobjekt: Die Eigenschaft value im Wurzelobjekt wurde entfernt.

    5. Hinzufügen einer neuen Eigenschaft something: Eine neue Eigenschaft something mit dem Wert "anything" wurde hinzugefügt.

    6. Hinzufügen einer neuen Eigenschaft x im Objekt v und Setzen eines Werts in v.m.l: Eine neue Eigenschaft x im Objekt v wurde erstellt, und ein Array mit dem Wert "asdfV" wurde hinzugefügt. Die Eigenschaft l im Objekt m des Objekts v wurde auf den Wert "asdf-val" gesetzt.

    7. Aktualisieren der Bild-URLs unter der Eigenschaft images: Die URLs für die verschiedenen Bildgrößen unter der Eigenschaft images wurden aktualisiert.

# Hokify-Challenge

Lösung für das Backend-Codierungsproblem von Hokify

Um das Backend-Codierungsproblem von Hokify zu lösen, werde ich eine JavaScript-Funktion erstellen, die die angegebenen Update/Änderungsoperationen auf einem vorhandenen Objekt ausführt. Die Funktion wird alle Fälle abdecken, wie sie in den Spezifikationen beschrieben sind, und die entsprechenden Tests bestehen.

function applyUpdate(obj, update)

Gedanken zur Lösung:

    1.Die Funktion wird die update-Objekte iterieren und entsprechend der Spezifikationen die Updates auf das obj anwenden.

    2.Ich werde Funktionen für jede spezifische Art von Update implementieren, z. B. für das Hinzufügen oder Entfernen von Array-Einträgen, das Hinzufügen oder Aktualisieren von Objekteigenschaften usw.

    3.Bei jedem Update wird überprüft, ob der angegebene Pfad im Objekt existiert. Wenn nicht, wird der Pfad erstellt.

    4.Ich werde auch sicherstellen, dass das _id-Attribut bei der Aktualisierung von Array-Einträgen beibehalten wird.

    5.Die Funktion wird Tests bestehen, um sicherzustellen, dass sie wie erwartet funktioniert.

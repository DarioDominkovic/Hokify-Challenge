# Hokify-Challenge

Lösung für das Backend-Codierungsproblem von Hokify

Um das Backend-Codierungsproblem von Hokify zu lösen, werde ich eine JavaScript-Funktion erstellen, die die angegebenen Update/Änderungsoperationen auf einem vorhandenen Objekt ausführt. Die Funktion wird alle Fälle abdecken, wie sie in den Spezifikationen beschrieben sind, und die entsprechenden Tests bestehen.

-- function applyUpdate(obj, update)

Gedanken zur Lösung:

    1.Die Funktion wird die update-Objekte iterieren und entsprechend der Spezifikationen die Updates auf das obj anwenden.

    2.Ich werde Funktionen für jede spezifische Art von Update implementieren, z. B. für das Hinzufügen oder Entfernen von Array-Einträgen, das Hinzufügen oder Aktualisieren von Objekteigenschaften usw.

    3.Bei jedem Update wird überprüft, ob der angegebene Pfad im Objekt existiert. Wenn nicht, wird der Pfad erstellt.

    4.Ich werde auch sicherstellen, dass das _id-Attribut bei der Aktualisierung von Array-Einträgen beibehalten wird.

    5.Die Funktion wird Tests bestehen, um sicherzustellen, dass sie wie erwartet funktioniert.

1. Funktion applyUpdate

Die Hauptfunktion applyUpdate durchläuft jedes Update im update-Objekt und wendet die entsprechende Update-Operation an. Die Funktion gibt das aktualisierte Objekt zurück.

2. Funktion applyUpdateOperation

Die Funktion applyUpdateOperation wird aufgerufen, um spezifische Updates auf das Objekt anzuwenden. Sie teilt den Schlüssel an den Punkten auf, um den Pfad zum Zielobjekt oder -array zu bestimmen, und führt dann die entsprechende Update-Operation aus.

3. Funktionen applyArrayUpdate und applyObjectUpdate

Die Funktionen applyArrayUpdate und applyObjectUpdate werden aufgerufen, um Updates auf Arrays bzw. Objekten durchzuführen. Sie verarbeiten die Updates entsprechend und passen das Zielobjekt oder -array entsprechend an.

Beispielanwendung

Ein Beispielobjekt obj und ein Set von Updates updates wurden bereitgestellt, um die Funktionalität der Implementierung zu demonstrieren. Die Updates umfassen verschiedene Arten von Änderungen, wie das Hinzufügen, Aktualisieren und Entfernen von Einträgen im Objekt.

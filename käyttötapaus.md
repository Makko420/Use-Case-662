# #663 Käyttötapauskuvaukset
 **Käyttötapaus 1: Äänestys**
 * **käyttäjä:** Äänestäjä.
 * **Laukaisija:** Äänestäjän halu äänestää.
 * **Esiehto:** Äänestäjä ei ole äänestänyt kyseisessä äänestyksessä.
 * **Jälkiehto:** Äänestys on saanut yhden äänen lisää.
 * **Käyttötapauksen kulku:**
    1. Äänestäjä valitsee haluamansa äänestyksen.
    2. Järjestelmä näyttää kyseisen äänestyksen tilanteen.
    3. Äänestäjä äänestää.
    4. Järjestelmä tarkistaa onko Äänestäjä äänestänyt jo kyseistä äänestystä
    5. Järjestelmä lisaa yhden äänen äänestäjän valitsemaansa vaihtoehtoon.
 * **Poikkeuksellinen toiminta:**
    1. 4a. Äänestäjä on jo äänestänyt kyseisessä äänestyksessä jonka takia ei voi äänestää

 **Käyttötapaus 2: Luoda äänestys**
 * **käyttäjä:** admin.
 * **Laukaisija:** adminin tarve luoda äänestys.
 * **Esiehto:** admin on kirjautunut sisään.
 * **Jälkiehto:** admin on luonut uuden äänestyksen.
 * **Käyttötapauksen kulku:**
    1. admin alkaa luomaan uutta äänestystä.
    2. Järjestelmä kysyy äänestykseen liittyvät tiedot.
    3. admin lisää tiedot.
    4. Järjestelmä luo uuden äänestyksen annetuilla tiedoilla.
 * **Poikkeuksellinen toiminta:**
    1. 1a. admin ei ole kirjautunut sisään

 **Käyttötapaus 3: Poistaa äänestys**
 * **käyttäjä:** admin.
 * **Laukaisija:** adminin tarve poistaa äänestys.
 * **Esiehto:** admin on kirjautunut sisään.
 * **Jälkiehto:** admin on poistanut haluamansa äänestyksen.
 * **Käyttötapauksen kulku:**
    1. järjestelmä katsoo onko käyttäjä admin
    2. admin valitsee äänestyksen minkä haluaa poistaa.
    3. Järjestelmä varmistaa onko poistettava äänestys oikea.
    4. admin varmistaa että on oikea äänestys.
    5. Järjestelmä poistaa äänestyksen.
 * **Poikkeuksellinen toiminta:**
    1. 1a. admin ei ole kirjautunut sisään
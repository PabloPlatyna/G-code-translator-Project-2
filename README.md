G-code - to język programowania maszyn sterowanych numerycznie.
Maszyny posiadają różne sterowania oraz różny styl zapisu G-codu.

G-code-translator- to tłumacz G-codu pomiędzy sterowaniami.

W programie są uwzględnione tylko podstawowe zalerzności (nie prawdziwe)!!!
g1 g0 g2 g3 

Tłumacz można przerobić na tłumacz języków.

Streowania:
-Sinumerik
-Hass
-HH

[Demo](https://pabloplatyna.github.io/G-code-translator-Project-2/)


let sinumerik = {
    1: "g00",
    2: "g01",
    3: "g02",
    4: "g03",

};
let hass = {
    1: "g0",
    2: "g1",
    3: "g2",
    4: "g3",

};
let hh = {
    1: "g0000",
    2: "g0001",
    3: "g0002",
    4: "g0003",

};

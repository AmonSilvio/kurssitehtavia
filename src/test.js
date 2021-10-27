SCREEN 9
AIKA7 = 0
rasti = 128
rasti2 = 128
GOTO intro
peli:
aika5 = 50000
aika6 = 100000
etu$ = "nothing"
life = 4
piste = 0
a1 = 800
5
CLS
PAINT (0, 0), 6, 6
LINE (15, 45)-(605, 305), 0, B
LINE (20, 50)-(600, 250), 1, BF
LINE (20, 250)-(600, 300), 11, BF
LINE (15, 305)-(20, 300), 0
LINE (605, 45)-(600, 50), 0
LINE (20, 50)-(600, 300), 0, B
PAINT (17, 47), 8, 0
PAINT (603, 303), 7, 0
LINE (15, 45)-(20, 50), 0
LINE (605, 305)-(600, 300), 0
PAINT (0, 0), 0, 0
TIME = 0
hyppy = 0
colo1 = 0
colo2 = 0
colo3 = 0
laatikko1 = 0
laatikko2 = 0
laatikko3 = 0
pallo1 = 0
pallo2 = 0
r1 = 800
r2 = 800
P1 = 800
p2 = 800
p3 = 800
p4 = 800
d1 = 0
d2 = 0
d3 = 0
d4 = 0
f1 = 0
f2 = 0
k1 = 150
k2 = 178
k3 = 180
k4 = 249
askel = 0
hand = 2
GOTO vari
10
TIME3 = TIME3 + 1
IF TIME3 = 10000 THEN GOTO vari

'kossi
LINE (k1, k4 - 14)-(k1 + 30, k4 - 14), 0
IF askel = 3 THEN

'bootsit
LINE (k1 + 17, k4)-(k1 + 27, k4 - 4), 0, BF
LINE (k1 + 17, k4 - 4)-(k1 + 22, k4 - 14), 0, BF
LINE (k1 + 7, k4)-(k1 + 17, k4 - 4), 0, BF
LINE (k1 + 7, k4 - 4)-(k1 + 12, k4 - 14), 0, BF
END IF
IF askel = 1 THEN
'bootsit
LINE (k1 + 15, k4)-(k1 + 25, k4 - 4), 0, BF
LINE (k1 + 15, k4 - 4)-(k1 + 20, k4 - 14), 0, BF
LINE (k1 + 10, k4)-(k1 + 20, k4 - 4), 0, BF
LINE (k1 + 10, k4 - 4)-(k1 + 15, k4 - 14), 0, BF
'PLAY "T255 <<<< l65 c"
END IF
IF askel = 2 THEN
'bootsit
LINE (k1, k4)-(k1 + 10, k4 - 4), 0, BF
LINE (k1, k4 - 4)-(k1 + 5, k4 - 14), 0
LINE (k1 + 5, k4 - 4)-(k1 + 10, k4 - 14), 0
LINE (k3 - 5, k4)-(k3 + 5, k4 - 4), 0, BF
LINE (k3 - 5, k4 - 4)-(k3 - 10, k4 - 14), 0
LINE (k3, k4 - 4)-(k3 - 5, k4 - 14), 0
LINE (k1, k4 - 14)-(k3 - 10, k4 - 14), 0
PAINT (k1 + 3, k4 - 6), 0, 0
PAINT (k3 - 5, k4 - 6), 0, 0
END IF
IF hyppy = 1 OR hyppy = 2 THEN
IF hyppy = 1 THEN
LINE (k1 - 10, k2)-(k3 + 10, k4 - 14), 1, BF
END IF
k4 = k4 + 10
k2 = k2 + 10
hyppy = 2
END IF
'takki
LINE (k1, k4 - 14)-(k1 + 30, k4 - 14), 0
LINE (k1, k4 - 14)-(k1 + 5, k2 + 22), 0
LINE (k3, k4 - 14)-(k3 - 5, k2 + 22), 0
LINE (k1 + 5, k2 + 22)-(k3 - 5, k2 + 22), 0
PAINT (k1 + 20, k2 + 32), 0, 0
'tukka
LINE (k1 + 7, k2 + 22)-(k1 + 10, k2 + 2), 0
LINE (k1 + 10, k2 + 2)-(k3 - 10, k2), 0
LINE (k3 - 10, k2)-(k1 + 18, k2 + 22), 0
PAINT (k1 + 10, k2 + 12), 0, 0
'naama
LINE (k3 - 9, k2 + 21)-(k3 - 9, k2 + 17), 0
LINE (k3 - 8, k2 + 17)-(k3 - 5, k2 + 17), 0
LINE (k3 - 5, k2 + 17)-(k3 - 9, k2 + 2), 0
PAINT (k3 - 8, k2 + 12), 18, 0
LINE (k3 - 9, k2 + 7)-(k3 - 7, k2 + 9), 0, BF
LINE (k3 - 5, k2 + 14)-(k3 - 8, k2 + 15), 0
IF hand = 1 THEN
LINE (k1 + 10, k4 - 20)-(k1 + 15, k4 - 22), 0, BF
LINE (k1 + 20, k4 - 20)-(k1 + 25, k4 - 22), 18, BF
END IF
IF hand = 2 THEN
LINE (k1 + 20, k4 - 20)-(k1 + 25, k4 - 22), 0, BF
LINE (k1 + 10, k4 - 20)-(k1 + 15, k4 - 22), 18, BF
END IF
IF hyppy = 2 THEN
'LINE (k1 - 10, k2)-(k3 + 10, k4 - 14), 1, BF
k4 = k4 - 10
k2 = k2 - 10
END IF

pallo1:
IF pallo1 = 0 THEN
RANDOMIZE TIMER
f1 = INT(RND * 1500)
n1 = INT(RND * 7) + 1
R3 = INT(RND * 50) + 100
END IF
IF f1 = 1 THEN
r1 = 580
colo10 = 0
pallo1 = 1
f1 = 0
END IF
IF colo10 = 0 THEN
c10 = INT(RND * 4)
IF c10 = 0 THEN c10 = 4
IF c10 = 1 THEN c10 = 6
IF c10 = 2 THEN c10 = 9
IF c10 = 3 THEN c10 = 12
IF etu$ = "fuckthemall" THEN c10 = vari
colo10 = 1
END IF
IF pallo1 = 1 THEN
LINE (r1 - 10, R3 - 10)-(r1 + 10, R3 + 10), 1, BF
r1 = r1 - n1
END IF
IF pallo1 = 1 AND r1 < 60 THEN
LINE (r1 - 10, R3 - 10)-(r1 + 10, R3 + 10), 1, BF
pallo1 = 0
r1 = 800
colo10 = 0
END IF
CIRCLE (r1, R3), 10, 0
PAINT (r1, R3), c10, 0

pallo2:
IF pallo2 = 0 THEN
RANDOMIZE TIMER
n2 = INT(RND * 7) + 1
f2 = INT(RND * 1500)
R4 = INT(RND * 50) + 100
END IF
IF f2 = 1 THEN
r2 = 580
colo12 = 0
pallo2 = 1
f2 = 0
END IF
IF colo12 = 0 THEN
c12 = INT(RND * 4)
IF c12 = 0 THEN c12 = 4
IF c12 = 1 THEN c12 = 6
IF c12 = 2 THEN c12 = 9
IF c12 = 3 THEN c12 = 12
IF etu$ = "fuckthemall" THEN c12 = vari
colo12 = 2
END IF
IF pallo2 = 1 THEN
LINE (r2 - 10, R4 - 10)-(r2 + 10, R4 + 10), 1, BF
r2 = r2 - n2
END IF
IF pallo2 = 1 AND r2 < 60 THEN
LINE (r2 - 10, R4 - 10)-(r2 + 10, R4 + 10), 1, BF
pallo2 = 0
r2 = 800
colo12 = 0
END IF
CIRCLE (r2, R4), 10, 0
PAINT (r2, R4), c12, 0


IF r1 - 10 < k3 AND r1 + 10 > k1 AND R3 + 10 > k2 AND vari <> c10 THEN GOTO kuolema
IF r2 - 10 < k3 AND r2 + 10 > k1 AND R4 + 10 > k2 AND vari <> c12 THEN GOTO kuolema

IF r1 - 10 < k3 AND r1 + 10 > k1 AND R3 + 10 > k2 AND vari = c10 THEN
LINE (r1 - 10, R3 - 10)-(r1 + 10, R3 + 10), 1, BF
pallo1 = 0
r1 = 800
colo10 = 0
piste = piste + 5
GOTO vari
END IF

IF r2 - 10 < k3 AND r2 + 10 > k1 AND R4 + 10 > k2 AND vari = c12 THEN
LINE (r2 - 10, R4 - 10)-(r2 + 10, R4 + 10), 1, BF
pallo2 = 0
r2 = 800
colo12 = 0
piste = piste + 5
GOTO vari
END IF

IF pallo1 = 1 AND hyppy > 2 AND hyppytapa$ = "9" AND nopeus1 = 0 THEN
n1 = n1 + 2
nopeus1 = 1
END IF
IF pallo2 = 1 AND hyppy > 2 AND hyppytapa$ = "9" AND nopeus2 = 0 THEN
n2 = n2 + 2
nopeus2 = 1
END IF
laatikko2:
IF laatikko2 = 0 THEN
RANDOMIZE TIMER
d2 = INT(RND * 500)
END IF
IF d2 = 1 THEN
p2 = 599
laatikko2 = 1
colo2 = 0
d2 = 0
END IF
IF colo2 = 0 THEN
c2 = INT(RND * 4)
IF c2 = 0 THEN c2 = 4
IF c2 = 1 THEN c2 = 6
IF c2 = 2 THEN c2 = 9
IF c2 = 3 THEN c2 = 12
IF etu$ = "fuckthemall" THEN c2 = vari
colo2 = 2
END IF
IF laatikko2 = 1 AND hyppy > 2 AND hyppytapa$ = "9" THEN
LINE (p2, 249)-(p2 - 50, 229), 1, BF
p2 = p2 - 3
END IF
IF laatikko2 = 1 AND hyppy > 2 AND hyppytapa$ = "8" THEN
LINE (p2, 249)-(p2 - 50, 229), 1, BF
p2 = p2 - 1
END IF
IF laatikko2 = 1 AND hyppy <> 2 OR hyppy <> 1 AND laatikko2 = 1 THEN
LINE (p2, 249)-(p2 - 50, 229), 1, BF
p2 = p2 - 1
END IF
IF laatikko2 = 1 AND p2 < 80 THEN
LINE (p2, 249)-(p2 - 50, 229), 1, BF
laatikko2 = 0
p2 = 800
colo2 = 0
END IF
LINE (p2, 249)-(p2 - 50, 229), c2, BF
LINE (p2, 249)-(p2 - 50, 229), 0, B


laatikko1:
IF laatikko1 = 0 THEN
RANDOMIZE TIMER
d1 = INT(RND * 500)
END IF
IF d1 = 1 THEN
P1 = 599
colo1 = 0
laatikko1 = 1
d1 = 0
END IF
IF colo1 = 0 THEN
c1 = INT(RND * 4)
IF c1 = 0 THEN c1 = 4
IF c1 = 1 THEN c1 = 6
IF c1 = 2 THEN c1 = 9
IF c1 = 3 THEN c1 = 12
IF etu$ = "fuckthemall" THEN c1 = vari
colo1 = 1
END IF
IF laatikko1 = 1 AND hyppy > 2 AND hyppytapa$ = "9" THEN
LINE (P1, 249)-(P1 - 50, 229), 1, BF
P1 = P1 - 3
END IF
IF laatikko1 = 1 AND hyppy > 2 AND hyppytapa$ = "8" THEN
LINE (P1, 249)-(P1 - 50, 229), 1, BF
P1 = P1 - 1
END IF

IF laatikko1 = 1 AND hyppy <> 2 OR hyppy <> 1 AND laatikko1 = 1 THEN
LINE (P1, 249)-(P1 - 50, 229), 1, BF
P1 = P1 - 1
END IF
IF laatikko1 = 1 AND P1 < 80 THEN
LINE (P1, 249)-(P1 - 50, 229), 1, BF
laatikko1 = 0
P1 = 800
colo1 = 0
END IF
LINE (P1, 249)-(P1 - 50, 229), c1, BF
LINE (P1, 249)-(P1 - 50, 229), 0, B

laatikko3:
IF laatikko3 = 0 THEN
RANDOMIZE TIMER
d3 = INT(RND * 500)
END IF
IF d3 = 1 THEN
p3 = 599
laatikko3 = 1
colo3 = 0
d3 = 0
END IF
IF colo3 = 0 THEN
c3 = INT(RND * 4)
IF c3 = 0 THEN c3 = 4
IF c3 = 1 THEN c3 = 6
IF c3 = 2 THEN c3 = 9
IF c3 = 3 THEN c3 = 12
IF etu$ = "fuckthemall" THEN c3 = vari
colo3 = 1
END IF
IF laatikko3 = 1 AND hyppy > 2 AND hyppytapa$ = "9" THEN
LINE (p3, 249)-(p3 - 50, 229), 1, BF
p3 = p3 - 3
END IF
IF laatikko3 = 1 AND hyppy > 2 AND hyppytapa$ = "8" THEN
LINE (p3, 249)-(p3 - 50, 229), 1, BF
p3 = p3 - 1
END IF
IF laatikko3 = 1 AND hyppy <> 2 OR hyppy <> 1 AND laatikko3 = 1 THEN
LINE (p3, 249)-(p3 - 50, 229), 1, BF
p3 = p3 - 1
END IF
IF laatikko3 = 1 AND p3 < 80 THEN
LINE (p3, 249)-(p3 - 50, 229), 1, BF
laatikko3 = 0
p3 = 800
colo3 = 0
END IF
LINE (p3, 249)-(p3 - 50, 229), c3, BF
LINE (p3, 249)-(p3 - 50, 229), 0, B
20

IF P1 - 50 < k3 AND P1 > k1 AND k4 > 229 AND c1 = vari THEN
LINE (P1, 249)-(P1 - 50, 229), 1, BF
laatikko1 = 0
P1 = 800
colo1 = 0
piste = piste + 1
GOTO vari
END IF
IF p2 - 50 < k3 AND p2 > k1 AND k4 > 229 AND c2 = vari THEN
LINE (p2, 249)-(p2 - 50, 229), 1, BF
laatikko2 = 0
p2 = 800
colo2 = 0
piste = piste + 1
GOTO vari
END IF
IF p3 - 50 < k3 AND p3 > k1 AND k4 > 229 AND c3 = vari THEN
LINE (p3, 249)-(p3 - 50, 229), 1, BF
laatikko3 = 0
p3 = 800
colo3 = 0
piste = piste + 1
GOTO vari
END IF

IF P1 - 50 < k3 AND P1 > k1 AND k4 > 229 AND c1 <> vari THEN
GOTO kuolema
END IF
IF p2 - 50 < k3 AND p2 > k1 AND k4 > 229 AND c2 <> vari THEN
GOTO kuolema
END IF
IF p3 - 50 < k3 AND p3 > k1 AND k4 > 229 AND c3 <> vari THEN
GOTO kuolema
END IF

'IF p1 - 50 < p2 AND p1 - 50 > p2 - 50 THEN p1 = p2 - 50
'IF p1 > p2 - 50 AND p1 < p2 THEN p1 = p2 - 50
'IF p2 - 50 < p3 AND p2 - 50 > p3 - 50 THEN p2 = p3 - 50
'IF p2 > p3 - 50 AND p2 < p3 THEN p2 = p3 - 50
'IF p1 - 50 < p3 AND p1 - 50 > p3 - 50 THEN p1 = p3 - 50
'IF p1 > p3 - 50 AND p1 < p3 THEN p1 = p3 - 50
                                      

aarre:
IF aarre = 0 THEN
RANDOMIZE TIMER
arve = INT(RND * 100000)
END IF
IF arve = 1 THEN
a1 = 599
aarre = 1
arve = 0
END IF
IF aarre = 1 AND hyppy > 2 AND hyppytapa$ = "9" THEN
LINE (a1, 249)-(a1 - 50, 229), 1, BF
a1 = a1 - 3
END IF
IF aarre = 1 AND hyppy > 2 AND hyppytapa$ = "8" THEN
LINE (a1, 249)-(a1 - 50, 229), 1, BF
a1 = a1 - 1
END IF
IF aarre = 1 AND hyppy <> 2 OR hyppy <> 1 AND aarre = 1 THEN
LINE (a1, 249)-(a1 - 50, 229), 1, BF
a1 = a1 - 1
END IF
IF aarre = 1 AND a1 < 80 THEN
LINE (a1, 249)-(a1 - 50, 229), 1, BF
aarre = 0
a1 = 800
END IF
LINE (a1, 249)-(a1 - 50, 229), 14, BF
LINE (a1, 248)-(a1 - 50, 229), 0
LINE (a1, 229)-(a1 - 50, 248), 0
LINE (a1, 249)-(a1 - 50, 229), 0, B
IF a1 - 50 < k3 AND a1 > k1 AND k4 > 229 THEN
LOCATE 23, 3
PRINT "                         "
LINE (a1, 249)-(a1 - 50, 229), 1, BF
aarre = 0
a1 = 800
etu = INT(RND * 10) + 1
IF etu < 5 THEN etu$ = "bonus"
IF etu > 4 AND etu < 8 THEN etu$ = "morelife"
IF etu > 7 AND etu < 10 THEN etu$ = "immortality"
IF etu = 10 THEN etu$ = "fuckthemall"
IF etu$ = "bonus" THEN
bonus = INT(RND * 100) + 1
piste = piste + bonus
etu$ = "nothing"
etu = 0
GOTO tulostaulu
END IF
IF etu$ = "morelife" THEN
morelife = INT(RND * 6) + 1
life = life + morelife
etu$ = "nothing"
etu = 0
GOTO tulostaulu
END IF
IF etu$ = "immortality" OR etu$ = "fuckthemall" THEN
etu = 0
LINE (400, 320)-(450, 340), 14, BF
LINE (402, 322)-(448, 338), 0, B
GOTO tulostaulu
END IF

aarre = 0
a1 = 800
END IF
IF etu$ = "immortality" OR etu$ = "fuckthemall" THEN
aika5 = aika5 - 1
aika6 = aika6 - 1
END IF
IF etu$ = "fuckthemall" AND aika5 = 0 THEN
etu$ = "nothing"
LINE (400, 320)-(450, 340), 0, BF
LOCATE 23, 3
PRINT "                         "
aika5 = 0
END IF
IF etu$ = "immortality" AND aika6 = 0 THEN
etu$ = "nothing"
LINE (400, 320)-(450, 340), 0, BF
LOCATE 23, 3
PRINT "                         "
aika6 = 0
END IF

a$ = INKEY$
IF a$ = CHR$(27) THEN
LOCATE 5, 10
PRINT "Oletko varma ett„ haluat poistua Norjan j„„tik”ilt„? (K/E)"
varma:
B$ = INKEY$
IF B$ = "k" OR B$ = "K" THEN GOTO VALIKKO
IF B$ = "E" OR B$ = "e" THEN
LINE (25, 55)-(550, 70), 1, BF
GOTO 10
END IF
GOTO varma
END IF
IF a$ = "8" AND hyppy = 0 OR a$ = "9" AND hyppy = 0 THEN
hyppytapa$ = a$
hyppy = 1
IF hyppytapa$ = "8" THEN hyppy = 3
askel = 1
TIME = 0
LINE (k1, k4)-(k3 + 5, k4 - 14), 1, BF
END IF
TIME = TIME + 1

IF hyppy = 0 AND TIME > 49 THEN
askel = askel + 1
TIME = 0
LINE (k1, k4)-(k3 + 5, k4 - 14), 1, BF
time2 = time2 + 1
END IF
IF time2 = 2 THEN
hand = hand + 1
time2 = 0
END IF
IF hyppy = 2 AND TIME > 49 THEN hyppy = 3
IF hyppy = 3 THEN
LINE (k1 - 10, k2)-(k3 + 10, 249), 1, BF
k2 = k2 - 4
k4 = k4 - 4
END IF
IF k2 < 70 THEN hyppy = 4
IF hyppy = 4 THEN
LINE (k1 - 10, k2)-(k3 + 10, k4), 1, BF
k2 = k2 + 2
k4 = k4 + 2
END IF
IF k4 = 249 AND hyppy = 4 THEN
hyppy = 0
LINE (k1 - 10, k2)-(k3 + 10, k4), 1, BF
END IF
IF hand > 2 THEN hand = 1
IF hyppy = 0 AND askel > 2 THEN askel = 1
IF TIME = 50 THEN TIME = 0
IF a$ = " " THEN GOTO PAUSE
GOTO 10

PAUSE:
LOCATE 2, 1
PRINT "PAUSE: Painappa Avaruutta Jatkaaksesi..."
800
LINE (k1, k4)-(k3 + 5, k2), 1, BF
'bootsit
LINE (k1 + 17, k4)-(k1 + 27, k4 - 4), 0, BF
LINE (k1 + 17, k4 - 4)-(k1 + 22, k4 - 14), 0, BF
LINE (k1 + 7, k4)-(k1 + 17, k4 - 4), 0, BF
LINE (k1 + 7, k4 - 4)-(k1 + 12, k4 - 14), 0, BF
'takki
LINE (k1, k4 - 14)-(k1 + 30, k4 - 14), 0
LINE (k1, k4 - 14)-(k1 + 5, k2 + 22), 0
LINE (k3, k4 - 14)-(k3 - 5, k2 + 22), 0
LINE (k1 + 5, k2 + 22)-(k3 - 5, k2 + 22), 0
PAINT (k1 + 20, k2 + 32), 0, 0
LINE (k1 + 2, k2 + 22)-(k3 - 2, k2 + 40), 0, BF
'k„det
LINE (k1 + 3, k4 - 20)-(k1 + 8, k4 - 22), 16, BF
LINE (k3 - 3, k4 - 20)-(k3 - 8, k4 - 22), 16, BF
'tukka
LINE (k1 + 7, k2 + 22)-(k1 + 10, k2 + 2), 0
LINE (k1 + 10, k2 + 2)-(k3 - 10, k2 + 2), 0
LINE (k3 - 7, k2 + 22)-(k3 - 10, k2 + 2), 0
PAINT (k1 + 10, k2 + 12), 0, 0
'naama
LINE (k1 + 10, k2 + 10)-(k1 + 15, k2 + 5), 16
LINE (k3 - 10, k2 + 10)-(k3 - 15, k2 + 5), 16
LINE (k1 + 10, k2 + 10)-(k1 + 13, k2 + 20), 16
LINE (k3 - 10, k2 + 10)-(k3 - 13, k2 + 20), 16
LINE (k3 - 13, k2 + 20)-(k1 + 13, k2 + 20), 16
PAINT (k1 + 15, k2 + 13), 16, 16
'silm„t
LINE (k1 + 10, k2 + 10)-(k3 - 15, k2 + 12), 0
LINE (k3 - 10, k2 + 10)-(k1 + 15, k2 + 12), 0
LINE (k1 + 10, k2 + 14)-(k1 + 15, k2 + 12), 0
LINE (k3 - 10, k2 + 14)-(k3 - 15, k2 + 12), 0
PAINT (k1 + 12, k2 + 12), 0, 0
PAINT (k3 - 12, k2 + 12), 0, 0
'suu
LINE (k1 + 14, k2 + 19)-(k3 - 14, k2 + 19), 0

70
IF tap = 4 AND aika = 50000 THEN
LINE (k1 + 2, k2 + 22)-(k1 + 10, k2 + 20), 0, BF
LINE (k1 + 3, k4 - 20)-(k1 + 8, k4 - 22), 0, BF
CIRCLE (k1, k4 - 22), 5, 0
PAINT (k1 - 2, k4 - 22), 0, 0
LINE (k1 - 5, k4 - 22)-(k1 + 3, k4 - 50), 0
PAINT (k1, k4 - 30), 0, 0
END IF
IF tap = 4 AND aika = 70002 THEN
'takki
LINE (k1 + 2, k2 + 22)-(k3 - 2, k2 + 40), 1, BF
LINE (k1, k4 - 14)-(k1 + 30, k4 - 14), 0
LINE (k1, k4 - 14)-(k1 + 5, k2 + 22), 0
LINE (k3, k4 - 14)-(k3 - 5, k2 + 22), 0
LINE (k1 + 5, k2 + 22)-(k3 - 5, k2 + 22), 0
PAINT (k1 + 20, k2 + 32), 0, 0
LINE (k1 + 5, k2 + 22)-(k3 - 2, k2 + 40), 0, BF

LINE (k1 + 5, k2 + 22)-(k1 - 15, k2 + 27), 0
LINE (k1 - 15, k2 + 27)-(k1 + 5, k2 + 30), 0
PAINT (k1, k2 + 25), 0, 0
LINE (k1 + 3, k4 - 20)-(k1 + 8, k4 - 22), 0, BF
LINE (k1 + 12, k2 + 22)-(k1 + 15, k2 + 26), 16, BF
LINE (k1 + 14, k2 + 22)-(k1 + 15, k2 + 19), 7, BF
END IF
IF tap = 4 AND aika = 75000 THEN
'takki
LINE (k1 - 15, k2 + 22)-(k3 - 2, k2 + 40), 1, BF
LINE (k1, k4 - 14)-(k1 + 30, k4 - 14), 0
LINE (k1, k4 - 14)-(k1 + 5, k2 + 22), 0
LINE (k3, k4 - 14)-(k3 - 5, k2 + 22), 0
LINE (k1 + 5, k2 + 22)-(k3 - 5, k2 + 22), 0
PAINT (k1 + 20, k2 + 32), 0, 0
LINE (k1 + 5, k2 + 22)-(k3 - 2, k2 + 40), 0, BF

LINE (k1 + 5, k2 + 22)-(k1 - 15, k2 + 30), 0
LINE (k1 - 15, k2 + 30)-(k1 + 5, k2 + 32), 0
PAINT (k1, k2 + 25), 0, 0
LINE (k1 + 12, k2 + 24)-(k1 + 15, k2 + 28), 16, BF
LINE (k1 + 14, k2 + 22)-(k1 + 15, k2 + 19), 7, BF
END IF
IF tap = 4 AND aika = 77000 THEN
CIRCLE (k1 + 14, k2 + 22), 1, 4
PAINT (k1 + 14, k2 + 22), 14, 4
END IF
IF tap = 4 AND aika = 78000 THEN
PAINT (k1 + 14, k2 + 22), 12, 4
END IF
IF tap = 4 AND aika = 79000 THEN
PAINT (k1 + 14, k2 + 22), 14, 4
END IF
IF tap = 4 AND aika = 80000 THEN
PAINT (k1 + 14, k2 + 22), 4, 4
tap = 5
aika = 0
CIRCLE (k1 + 14, k2 + 22), 1, 0
PAINT (k1 + 14, k2 + 22), 0, 0
END IF
IF tap = 5 AND aika = 1000 THEN
LINE (k1 - 15, k2 + 22)-(k3 - 2, k2 + 40), 1, BF
LINE (k1, k4 - 14)-(k1 + 30, k4 - 14), 0
LINE (k1, k4 - 14)-(k1 + 5, k2 + 22), 0
LINE (k3, k4 - 14)-(k3 - 5, k2 + 22), 0
LINE (k1 + 5, k2 + 22)-(k3 - 5, k2 + 22), 0
PAINT (k1 + 20, k2 + 32), 0, 0
LINE (k1 + 5, k2 + 22)-(k3 - 2, k2 + 40), 0, BF

LINE (k1 + 5, k2 + 22)-(k1 - 15, k2 + 27), 0
LINE (k1 - 15, k2 + 27)-(k1 + 5, k2 + 30), 0
PAINT (k1, k2 + 25), 0, 0
LINE (k1 + 3, k4 - 20)-(k1 + 8, k4 - 22), 0, BF
LINE (k1 + 12, k2 + 22)-(k1 + 15, k2 + 26), 16, BF
LINE (k1 + 14, k2 + 22)-(k1 + 15, k2 + 19), 7, BF
CIRCLE (k1 + 14, k2 + 22), 0, 12
END IF
IF tap = 5 AND aika > 1000 THEN
CIRCLE (k1 + 14, k2 + 22), 1, 4
aika2 = aika2 + 1
CIRCLE (k1 + 14, k2 + 22), 1, 12
END IF
IF aika2 > 5000 THEN
tap = 6
aika = 0
aika2 = 0
LINE (k1 - 15, k2)-(k3, k4), 1, BF
GOTO 800
END IF
IF tap = 6 AND aika = 0 THEN
savut = savut + 1
LINE (k1 + 7, k4 - 21)-(k1 + 8, k4 - 18), 7, BF
LINE (k1 + 7, k4 - 17)-(k1 + 8, k4 - 17), 4, BF
LINE (k1 + 14, k2 + 19)-(k1 + 15, k2 + 17), 0
LINE (k3 - 14, k2 + 19)-(k3 - 15, k2 + 17), 0
s1 = k3 - 2
s2 = k2 + 13
s3 = 3
s4 = k3 - 2
s5 = k2 + 13
s6 = 3
s7 = k3 - 2
s8 = k2 + 13
s9 = 3
END IF
IF tap = 6 AND aika > 500 THEN aika2 = aika2 + 1
IF s5 < k2 AND tap = 6 AND aika2 = 100 THEN
CIRCLE (s7, s8), s9, 1
IF s8 < 100 THEN
tap = 5
aika = 0
aika2 = 0
LINE (k1 - 15, k2)-(k3 + 15, k4), 1, BF
IF savut = 6 THEN
tap = 0
savut = 0
END IF
GOTO 800
END IF

s7 = s7 + 1
s8 = s8 - 2
s9 = s9 + 1
IF s9 > 7 THEN s9 = 7
CIRCLE (s7, s8), s9, 8
END IF
IF s2 < k2 AND tap = 6 AND aika2 = 100 THEN
CIRCLE (s4, s5), s6, 1
IF s5 < 100 THEN s4 = 800
s4 = s4 + 1
s5 = s5 - 2
s6 = s6 + 1
IF s6 > 7 THEN s6 = 7
CIRCLE (s4, s5), s6, 8
END IF
IF tap = 6 AND aika2 = 100 THEN
CIRCLE (s1, s2), s3, 1
IF s2 < 100 THEN s1 = 800
s1 = s1 + 1
s2 = s2 - 2
s3 = s3 + 1
IF s3 > 7 THEN s3 = 7
CIRCLE (s1, s2), s3, 8
aika2 = 0
END IF

aika = aika + 2
IF tap = 4 AND aika = 70000 THEN

LINE (k1 - 15, k2)-(k3, k4), 1, BF
GOTO 800
END IF
a$ = INKEY$
IF a$ = "l" OR a$ = "L" THEN END
IF tap = 2 AND aika = 100000 THEN
'takki
LINE (k1 + 2, k2 + 22)-(k3 - 2, k2 + 40), 1, BF
LINE (k1, k4 - 14)-(k1 + 30, k4 - 14), 0
LINE (k1, k4 - 14)-(k1 + 5, k2 + 22), 0
LINE (k3, k4 - 14)-(k3 - 5, k2 + 22), 0
LINE (k1 + 5, k2 + 22)-(k3 - 5, k2 + 22), 0
PAINT (k1 + 20, k2 + 32), 0, 0
LINE (k1 + 5, k2 + 22)-(k3 - 2, k2 + 40), 0, BF

LINE (k1 + 5, k2 + 22)-(k1 - 15, k2 + 30), 0
LINE (k1 - 15, k2 + 30)-(k1 + 5, k2 + 32), 0
PAINT (k1, k2 + 25), 0, 0
LINE (k1 + 3, k4 - 20)-(k1 + 8, k4 - 22), 0, BF
LINE (k1 + 10, k2 + 28)-(k1 + 15, k2 + 29), 16, BF
LINE (k1 + 13, k2 + 28)-(k1 + 15, k2 + 31), 16, BF
LINE (k1 + 11, k2 + 28)-(k1 + 12, k2 + 29), 13, BF
LINE (k1 + 10, k2 + 28)-(k1 + 13, k2 + 27), 8, BF
END IF
IF tap = 2 AND aika = 150000 THEN
tap = 3
aika = 0
LINE (k1 - 15, k2 + 22)-(k3 - 2, k2 + 40), 1, BF
GOTO 800
END IF
IF tap = 1 AND aika = 100000 OR tap = 3 AND aika = 100000 THEN
'bootsit
LINE (k1 + 17, k4)-(k1 + 27, k4 - 4), 1, BF
LINE (k1 + 17, k4 - 4)-(k1 + 27, k4 - 8), 0, BF
END IF
IF tap = 1 AND aika = 101000 OR tap = 3 AND aika = 101000 THEN
'bootsit
LINE (k1 + 17, k4 - 4)-(k1 + 27, k4 - 8), 1, BF
LINE (k1 + 17, k4)-(k1 + 27, k4 - 4), 0, BF
LINE (k1 + 17, k4 - 4)-(k1 + 22, k4 - 14), 0, BF
END IF
IF tap = 1 AND aika = 102000 OR tap = 3 AND aika = 102000 THEN
'bootsit
LINE (k1 + 17, k4)-(k1 + 27, k4 - 4), 1, BF
LINE (k1 + 17, k4 - 4)-(k1 + 27, k4 - 8), 0, BF
END IF
IF tap = 1 AND aika = 103000 OR tap = 3 AND aika = 103000 THEN
'bootsit
LINE (k1 + 17, k4 - 4)-(k1 + 27, k4 - 8), 1, BF
LINE (k1 + 17, k4)-(k1 + 27, k4 - 4), 0, BF
LINE (k1 + 17, k4 - 4)-(k1 + 22, k4 - 14), 0, BF
END IF
IF tap = 1 AND aika = 104000 OR tap = 3 AND aika = 104000 THEN
'bootsit
LINE (k1 + 17, k4)-(k1 + 27, k4 - 4), 1, BF
LINE (k1 + 17, k4 - 4)-(k1 + 27, k4 - 8), 0, BF
END IF
IF tap = 1 AND aika = 105000 OR tap = 3 AND aika = 105000 THEN
'bootsit
LINE (k1 + 17, k4 - 4)-(k1 + 27, k4 - 8), 1, BF
LINE (k1 + 17, k4)-(k1 + 27, k4 - 4), 0, BF
LINE (k1 + 17, k4 - 4)-(k1 + 22, k4 - 14), 0, BF
IF tap = 3 THEN tap = 4
IF tap = 1 THEN tap = 2
aika = 0
END IF
IF tap = 0 AND aika = 100000 THEN
LINE (k1 + 2, k2 + 20)-(k3 - 2, k2 + 40), 0, BF
LINE (k1 + 3, k4 - 20)-(k3 - 3, k4 - 22), 0, BF
LINE (k1 + 3, k4 - 22)-(k1 + 8, k4 - 24), 16, BF
LINE (k3 - 3, k4 - 22)-(k3 - 8, k4 - 24), 16, BF
LINE (k1 + 2, k2 + 19)-(k3 - 2, k2), 1, BF
'tukka
LINE (k1 + 7, k2 + 22)-(k1 + 10, k2 + 2), 0
LINE (k1 + 10, k2 + 2)-(k3 - 10, k2 + 2), 0
LINE (k3 - 7, k2 + 22)-(k3 - 10, k2 + 2), 0
PAINT (k1 + 10, k2 + 12), 0, 0
'naama
LINE (k1 + 10, k2 + 10)-(k1 + 15, k2 + 5), 16
LINE (k3 - 10, k2 + 10)-(k3 - 15, k2 + 5), 16
LINE (k1 + 10, k2 + 10)-(k1 + 13, k2 + 20), 16
LINE (k3 - 10, k2 + 10)-(k3 - 13, k2 + 20), 16
LINE (k3 - 13, k2 + 20)-(k1 + 13, k2 + 20), 16
PAINT (k1 + 15, k2 + 13), 16, 16
'silm„t
LINE (k1 + 10, k2 + 10)-(k3 - 15, k2 + 12), 0
LINE (k3 - 10, k2 + 10)-(k1 + 15, k2 + 12), 0
LINE (k1 + 10, k2 + 14)-(k1 + 15, k2 + 12), 0
LINE (k3 - 10, k2 + 14)-(k3 - 15, k2 + 12), 0
PAINT (k1 + 12, k2 + 12), 0, 0
PAINT (k3 - 12, k2 + 12), 0, 0
'suu
LINE (k1 + 14, k2 + 19)-(k1 + 15, k2 + 17), 0
LINE (k3 - 14, k2 + 19)-(k3 - 15, k2 + 17), 0
END IF
IF tap = 0 AND aika = 105000 THEN
tap = 1
aika = 0
GOTO 800
END IF
IF a$ = " " THEN
LOCATE 2, 1
PRINT "                                           "
LINE (k1 - 15, k2)-(k3 + 15, k4), 1, BF
GOTO 10
END IF
GOTO 70

vari:
LOCATE 2, 5
COLOR 14, 0
PRINT "Pisteet:"; piste
LOCATE 2, 30
COLOR 15, 0
PRINT "Tyyppej„:"; life
vari = INT(RND * 4)
IF vari = 0 THEN vari = 4
IF vari = 1 THEN vari = 6
IF vari = 2 THEN vari = 9
IF vari = 3 THEN vari = 12
LINE (280, 320)-(340, 340), vari, BF
LINE (282, 322)-(338, 338), 0, B
TIME3 = TIME3 = 0
GOTO 10
kuolema:
IF etu$ = "immortality" THEN GOTO 10
life = life - 1
IF life = 0 THEN
50
CLS
PAINT (0, 0), 6, 6
LINE (15, 45)-(605, 305), 0, B
LINE (50, 70)-(570, 250), 1, BF
LINE (50, 200)-(570, 280), 11, BF
LINE (50, 70)-(570, 280), 0, B
LINE (15, 305)-(20, 300), 0
LINE (605, 45)-(600, 50), 0
LINE (20, 50)-(600, 300), 0, B
PAINT (17, 47), 8, 0
PAINT (603, 303), 7, 0
LINE (15, 45)-(20, 50), 0
LINE (605, 305)-(600, 300), 0
PAINT (30, 60), 0, 0
PAINT (0, 0), 0, 0
COLOR 4, 0
LOCATE 5, 7
KOMMENTTI = INT(RND * 5) + 1
IF KOMMENTTI = 1 THEN PRINT "JOKA LAATIKOLLE KUOPPAA KAIVAA, JOUTUU ITSE LAATIKKOON..."
IF KOMMENTTI = 2 THEN PRINT "JOKA PALLOA KURKOTTAA, SE PALLOSTA PŽŽHŽN SAA..."
IF KOMMENTTI = 3 THEN PRINT "PAREMPI PALLO TASKUSSA, KUIN LAATIKKO VARPAASSA..."
IF KOMMENTTI = 4 THEN PRINT "KAIKKI LOPPUU AIKANAAN, SANOI LAATIKKO"
IF KOMMENTTI = 5 THEN PRINT "KYLLŽ PALLO PŽŽSSŽ ULVOO, ULVOISIPA PISTEETKIN..."
COLOR 14, 0
LOCATE 21, 7
PRINT "Pointseja tuli omaisille:"; piste
COLOR 2, 0
LOCATE 21, 40
PRINT "Haluatko mokata uudestaan? (K/E)"
hauta:
LINE (280, 240)-(300, 140), 0
LINE (300, 140)-(250, 135), 0
LINE (250, 135)-(255, 115), 0
LINE (255, 115)-(303, 120), 0
LINE (303, 120)-(310, 85), 0
LINE (310, 85)-(335, 87), 0
LINE (335, 87)-(328, 122), 0
LINE (328, 122)-(386, 127), 0
LINE (386, 127)-(378, 147), 0
LINE (378, 147)-(325, 142), 0
LINE (325, 142)-(300, 245), 0
LINE (300, 245)-(280, 240), 0
PAINT (313, 100), 8, 0
LINE (250, 135)-(378, 147), 0
LINE (303, 120)-(386, 127), 0
CIRCLE (313, 130), 1, 0
60
a$ = INKEY$
IF a$ = "k" OR a$ = "K" THEN GOTO peli
IF a$ = "e" OR a$ = "E" THEN GOTO VALIKKO
GOTO 60
END
END IF
GOTO 5
tulostaulu:
LOCATE 2, 5
COLOR 14, 0
PRINT "Pisteet:"; piste
LOCATE 2, 30
COLOR 15, 0
PRINT "Tyyppej„:"; life
IF etu$ = "immortality" THEN
LOCATE 23, 3
COLOR 4, 0
PRINT "EpŽkUoLlEiSuUs           "
END IF
IF etu$ = "fuckthemall" THEN
LOCATE 23, 3
COLOR 14, 0
PRINT "*K*E*R*Ž*Ž* *K*A*I*K*K*I*"
END IF
GOTO 10


VALIKKO:
CLS
PAINT (0, 0), 4, 4
LINE (15, 45)-(605, 305), 0, B
LINE (20, 50)-(600, 300), 0, BF
LINE (15, 305)-(20, 300), 0
LINE (605, 45)-(600, 50), 0
LINE (20, 50)-(600, 300), 0, B
PAINT (17, 47), 8, 0
PAINT (603, 303), 7, 0
LINE (15, 45)-(20, 50), 0
LINE (605, 305)-(600, 300), 0
tekstit:
COLOR 10, 0
LOCATE 6, 32
PRINT "KALMA-PELI "
LOCATE 10, 32
PRINT "*Astu Peliin*"
LOCATE 12, 32
PRINT "Tarina"
LOCATE 14, 32
PRINT "K„ytt”ohjeet"
LOCATE 16, 32
PRINT "Musta Lista"
LOCATE 18, 32
PRINT "Irti Kalma-pelist„"
200
LINE (220, rasti)-(230, rasti + 10), 2, BF
B$ = INKEY$
IF B$ = "l" THEN END
IF B$ = "2" THEN
LINE (220, rasti)-(230, rasti + 10), 0, BF
rasti = rasti + 28
END IF
IF B$ = "8" THEN
LINE (220, rasti)-(230, rasti + 10), 0, BF
rasti = rasti - 28
END IF
IF rasti > 240 THEN rasti = 128
IF rasti < 128 THEN rasti = 240
IF B$ = " " AND rasti = 128 THEN GOTO peli
IF B$ = " " AND rasti = 156 THEN GOTO story
IF B$ = " " AND rasti = 184 THEN GOTO ohjeet
IF B$ = " " AND rasti = 212 THEN GOTO highscore
IF B$ = " " AND rasti = 240 THEN GOTO lopputekstit
GOTO 200
story:
LINE (20, 50)-(600, 300), 0, BF
LOCATE 5, 25
PRINT "LEGENDARY TALES OF KALMA-PELI"
LOCATE 7, 5
PRINT "     Olipa kerran todella Tuima Blackmetal-tyyppi. Er„„n„ p„iv„n„ h„n"
LOCATE 8, 5
PRINT "tajusi, ettei voinut olla kovin tuima ellei omistanut 666 blackmetal-"
LOCATE 9, 5
PRINT "levy„. H„n oli kuullut ett„ Norjan j„„tik”ill„ olisi monta laatikol-"
LOCATE 10, 5
PRINT "lista blackmetal-levyj„ jotka vain odottivat ottajaansa. Niinp„ h„n myi"
LOCATE 11, 5
PRINT "niittirannekkeensa, luotivy”ns„ ja nahkahousunsa, ja matkusti rahoilla"
LOCATE 12, 5
PRINT "pahamaineisille Norjan j„„tik”ille..."
LOCATE 13, 5
PRINT "     Mutta Perill„ h„nt„ odotti yll„tys. Joku oli tehnyt ilke„n jekun"
LOCATE 14, 5
PRINT "ja piilottanut useisiin laatikoihin techno-, dance- ja europop-levyj„!"
LOCATE 15, 5
PRINT "Sellaisen kuunteleminen saattaisi olla vaaraksi niinkin tuimalle"
LOCATE 16, 5
PRINT "blackmetallistille. Nyt oli vain l”ydett„v„ oikeat laatikot ja"
LOCATE 17, 5
PRINT "sekaantumasta milt„„n osin konejumputuksiin..."
LOCATE 19, 31
PRINT "<Paina Avaruutta>"
210
B$ = INKEY$
IF B$ = " " THEN
LINE (20, 50)-(600, 300), 0, BF
GOTO tekstit
END IF
GOTO 210
ohjeet:
LOCATE 6, 32
LINE (20, 50)-(600, 300), 0, BF
PRINT "KŽYTT™OHJEET:"
LOCATE 10, 32
PRINT "Pelin Tarkoitus"
LOCATE 12, 32
PRINT "Pelin Elementit"
LOCATE 14, 32
PRINT "N„pp„imet"
LOCATE 16, 32
PRINT "Paluu P„„valikkoon"
520
LINE (220, rasti2)-(230, rasti2 + 10), 2, BF
B$ = INKEY$
IF B$ = "l" THEN END
IF B$ = "2" THEN
LINE (220, rasti2)-(230, rasti2 + 10), 0, BF
rasti2 = rasti2 + 28
END IF
IF B$ = "8" THEN
LINE (220, rasti2)-(230, rasti2 + 10), 0, BF
rasti2 = rasti2 - 28
END IF
IF rasti2 > 212 THEN rasti2 = 128
IF rasti2 < 128 THEN rasti2 = 212
IF B$ = " " AND rasti2 = 128 THEN GOTO tarkoitus
IF B$ = " " AND rasti2 = 156 THEN GOTO elementit
IF B$ = " " AND rasti2 = 184 THEN GOTO keys
IF B$ = " " AND rasti2 = 212 THEN
LINE (20, 50)-(600, 300), 0, BF
GOTO tekstit
END IF

GOTO 520
tarkoitus:
LINE (20, 50)-(600, 300), 0, BF
LOCATE 5, 25
PRINT "PELIN TARKOITUS"
LOCATE 7, 5
PRINT "   On ker„t„ mahdollisimman paljon pisteit„. Vastaan tulevat laatikot"
LOCATE 8, 5
PRINT "ja pallot ovat eriv„risi„. Alapuolella olevasta palkista n„kee p„iv„n"
LOCATE 9, 5
PRINT "v„rin ja samanv„riset pallot ja laatikot ovat poimittavissa,"
LOCATE 10, 5
PRINT "eriv„risist„ tulee penaulttia takaap„in, eli yksi nirri poistuu."
LOCATE 11, 5
PRINT "Vastaan saattaa my”s keltaisia laatikoita joista saa hy”dyllisi„"
LOCATE 12, 5
PRINT "lis„etuja kuten nirri„ lis„„, pisteit„ lis„„, kuolemattomuus tai"
LOCATE 13, 5
PRINT "ker„„ kaikki-moodi, jolloin kaikki eteenilmestyv„t laatikot ovat"
LOCATE 14, 5
PRINT "automaattisesti samanv„risi„ kuin palkkisi."
LOCATE 15, 5
PRINT "     Kun olet saanut 666 pistett„, on loppupahiksen vuoro. Pit„„h„n"
LOCATE 16, 5
PRINT "sit„ nyt Norjan j„„tik”ilt„ yksi monsukin l”yty„. Loppupahiksesta"
LOCATE 17, 5
PRINT "selvi„„ ainoastaan kirjoittamalla kirjaimet A:sta ™:h”n aakkos-"
LOCATE 18, 5
PRINT "joten aapinen on hyv„ olla mukana pelatessasi..."
LOCATE 20, 31
PRINT "<Paina Avaruutta>"

220
B$ = INKEY$
IF B$ = " " THEN
LINE (20, 50)-(600, 300), 0, BF
GOTO ohjeet
END IF
GOTO 220

elementit:
LINE (20, 50)-(600, 300), 0, BF
LOCATE 7, 5
PRINT "Odotitko tosissasi ett„ t„„lt„ l”ytyisi jotain fiksuakin? Kj„h!"
LOCATE 20, 31
PRINT "<Paina Avaruutta>"
230
B$ = INKEY$
IF B$ = " " THEN
LINE (20, 50)-(600, 300), 0, BF
GOTO ohjeet
END IF
GOTO 230

keys:

LINE (20, 50)-(600, 300), 0, BF
LOCATE 5, 31
PRINT "NŽPPŽIMET:"
LOCATE 7, 31
PRINT "PieniHyppy: [8]"
LOCATE 8, 31
PRINT "IsoHyppy: [9]"
LOCATE 9, 31
PRINT "Pause: [Avaruusn„pp„in]"
LOCATE 10, 31
PRINT "Pelin lopetus: [Esc]"
LOCATE 20, 31
PRINT "<Paina Avaruutta>"
240
B$ = INKEY$
IF B$ = " " THEN
LINE (20, 50)-(600, 300), 0, BF
GOTO ohjeet
END IF
GOTO 240
highscore:
intro:
CLS
COLOR 1, 0
LOCATE 11, 29
SLEEP 1
PRINT "KALMAN VARJOT PRESENTS"
250
LINE (0, 144)-(600, 144), 0
LINE (0, 146)-(600, 146), 0
LINE (0, 148)-(600, 148), 0
LINE (0, 150)-(600, 150), 0
AIKA7 = AIKA7 + 1
IF AIKA7 = 15000 THEN
COLOR 11, 0
LOCATE 11, 29
PRINT "K"
LOCATE 11, 50
PRINT "S"
END IF
IF AIKA7 = 15500 THEN
COLOR 1, 0
LOCATE 11, 29
PRINT "K"
LOCATE 11, 50
PRINT "S"
COLOR 11, 0
LOCATE 11, 30
PRINT "A"
LOCATE 11, 49
PRINT "T"
END IF
IF AIKA7 = 16000 THEN
COLOR 1, 0
LOCATE 11, 30
PRINT "A"
LOCATE 11, 49
PRINT "T"
COLOR 11, 0
LOCATE 11, 31
PRINT "L"
LOCATE 11, 48
PRINT "N"
END IF
IF AIKA7 = 16500 THEN
COLOR 1, 0
LOCATE 11, 31
PRINT "L"
LOCATE 11, 48
PRINT "N"
COLOR 11, 0
LOCATE 11, 32
PRINT "M"
LOCATE 11, 47
PRINT "E"
END IF
IF AIKA7 = 17000 THEN
COLOR 1, 0
LOCATE 11, 32
PRINT "M"
LOCATE 11, 47
PRINT "E"
COLOR 11, 0
LOCATE 11, 33
PRINT "A"
LOCATE 11, 46
PRINT "S"
END IF
IF AIKA7 = 17500 THEN
COLOR 1, 0
LOCATE 11, 33
PRINT "A"
LOCATE 11, 46
PRINT "S"
COLOR 11, 0
LOCATE 11, 34
PRINT "N"
LOCATE 11, 45
PRINT "E"
END IF
IF AIKA7 = 18000 THEN
COLOR 1, 0
LOCATE 11, 34
PRINT "N"
LOCATE 11, 45
PRINT "E"
COLOR 11, 0
LOCATE 11, 36
PRINT "V"
LOCATE 11, 44
PRINT "R"
END IF
IF AIKA7 = 18500 THEN
COLOR 1, 0
LOCATE 11, 36
PRINT "V"
LOCATE 11, 44
PRINT "R"
COLOR 11, 0
LOCATE 11, 37
PRINT "A"
LOCATE 11, 43
PRINT "P"
END IF
IF AIKA7 = 19000 THEN
COLOR 1, 0
LOCATE 11, 37
PRINT "A"
LOCATE 11, 43
PRINT "P"
COLOR 11, 0
LOCATE 11, 38
PRINT "R"
LOCATE 11, 41
PRINT "T"
END IF
IF AIKA7 = 19500 THEN
COLOR 1, 0
LOCATE 11, 38
PRINT "R"
LOCATE 11, 41
PRINT "T"
COLOR 11, 0
LOCATE 11, 39
PRINT "J"
LOCATE 11, 40
PRINT "O"
END IF
IF AIKA7 > 19575 THEN
LINE (305, 0)-(320, 350), 11, BF
LINE (307, 0)-(307, 350), 0
LINE (309, 0)-(309, 350), 0
LINE (311, 0)-(311, 350), 0
LINE (313, 0)-(313, 350), 0
LINE (315, 0)-(315, 350), 0
LINE (317, 0)-(317, 350), 0
LINE (319, 0)-(319, 350), 0
SHINE = SHINE + 1
END IF
IF SHINE = 10 THEN GOTO jatkuu
GOTO 250
jatkuu:
CLS
'k
LINE (50, 10)-(60, 70), 1, B
LINE (40, 10)-(70, 10), 1
LINE (40, 70)-(70, 70), 1
LINE (50, 35)-(90, 10), 1
LINE (50, 45)-(105, 10), 1
LINE (80, 10)-(110, 10), 1
LINE (50, 40)-(90, 70), 1
LINE (50, 30)-(105, 70), 1
LINE (80, 70)-(110, 70), 1
'a
LINE (140, 65)-(210, 70), 1, B
LINE (140, 66)-(210, 69), 0, BF
LINE (100, 35)-(150, 40), 1, B
LINE (100, 36)-(150, 39), 0, BF
LINE (90, 70)-(120, 10), 1
LINE (100, 70)-(130, 10), 1
LINE (120, 10)-(150, 70), 1
LINE (130, 10)-(160, 70), 1

'l
LINE (160, 10)-(170, 70), 1, B
LINE (150, 10)-(180, 10), 1
'm
LINE (180, 70)-(210, 10), 1
LINE (190, 70)-(220, 10), 1
LINE (210, 10)-(225, 50), 1
LINE (220, 10)-(235, 50), 1
LINE (225, 50)-(240, 10), 1
LINE (235, 50)-(250, 10), 1
LINE (240, 10)-(270, 70), 1
LINE (250, 10)-(280, 70), 1
'a
LINE (280, 35)-(360, 40), 1, B
LINE (280, 36)-(360, 39), 0, BF
LINE (330, 40)-(340, 35), 0, BF
LINE (275, 65)-(300, 10), 1
LINE (285, 65)-(310, 10), 1
LINE (300, 10)-(330, 70), 1
LINE (310, 10)-(340, 70), 1
'p
LINE (370, 10)-(380, 70), 1, B
LINE (371, 10)-(379, 70), 0, BF
LINE (410, 35)-(460, 40), 1, B
LINE (410, 36)-(460, 39), 0, BF
LINE (370, 10)-(410, 35), 1
LINE (380, 10)-(420, 35), 1
LINE (410, 35)-(370, 45), 1
LINE (420, 35)-(370, 50), 1
'e
LINE (400, 10)-(460, 15), 1, B
LINE (400, 11)-(460, 14), 0, BF
LINE (400, 65)-(530, 70), 1, B
LINE (400, 66)-(530, 69), 0, BF
LINE (410, 10)-(420, 70), 1, B
'l
LINE (470, 10)-(480, 70), 1, B
LINE (460, 10)-(490, 10), 1
'i
LINE (540, 70)-(550, 30), 1, B
LINE (541, 70)-(549, 30), 0, BF
LINE (540, 10)-(550, 20), 1, B
LINE (530, 70)-(560, 70), 1
LOCATE 20, 27
COLOR 11, 0
PRINT "EPISODE1: NORJAN JŽŽTIK™T"
CIRCLE (315, 148), 100, 1
PAINT (315, 148), 11, 1
CIRCLE (315, 148), 120, 1
PAINT (200, 148), 1, 1
LINE (243, 199)-(275, 107), 0
LINE (389, 197)-(355, 107), 0
CIRCLE (315, 110), 40, 0
PAINT (315, 110), 0, 0
CIRCLE (315, 148), 100, 0
PAINT (315, 160), 0, 0

LINE (253, 170)-(230, 185), 0
PAINT (240, 180), 0, 0
LINE (377, 170)-(400, 185), 0
PAINT (390, 180), 0, 0

LINE (315, 100)-(285, 120), 16
LINE (285, 120)-(280, 140), 16
LINE (280, 140)-(305, 170), 16
LINE (315, 100)-(345, 120), 16
LINE (345, 120)-(350, 140), 16
LINE (350, 140)-(325, 170), 16
LINE (325, 170)-(305, 170), 16
PAINT (315, 140), 16, 16
CIRCLE (315, 170), 20, 16
PAINT (315, 175), 16, 16



LINE (285, 120)-(310, 125), 0
LINE (345, 120)-(320, 125), 0
LINE (310, 125)-(320, 125), 0
LINE (280, 125)-(297, 135), 0
LINE (297, 135)-(310, 130), 0
LINE (350, 125)-(333, 135), 0
LINE (333, 135)-(320, 130), 0
LINE (320, 130)-(310, 130), 0
PAINT (315, 127), 0, 0
CIRCLE (302, 127), 1, 1
PAINT (302, 127), 16, 1
CIRCLE (337, 127), 1, 1
PAINT (337, 127), 16, 1
CIRCLE (303, 128), 1, 1
PAINT (303, 128), 16, 1
CIRCLE (338, 128), 1, 1
PAINT (338, 128), 16, 1
LINE (320, 130)-(323, 145), 8
LINE (310, 130)-(307, 145), 8
LINE (312, 149)-(318, 149), 8
LINE (312, 149)-(311, 148), 8
LINE (318, 149)-(319, 148), 8
CIRCLE (315, 160), 7, 0
LINE (305, 160)-(322, 170), 16, BF
LINE (313, 165)-(317, 165), 8
LINE (280, 140)-(305, 170), 0
LINE (350, 140)-(325, 170), 0
LINE (325, 170)-(305, 170), 0
260
c$ = INKEY$
IF c$ = " " THEN GOTO VALIKKO
GOTO 260
lopputekstit:
CLS
COLOR 1, 0
LOCATE 5, 28
PRINT "SUUNNITTELU/IDEOINTI:"
LOCATE 6, 31
PRINT "Asko Kivineva"
LOCATE 7, 31
PRINT "Jussi Mikkonen"
LOCATE 8, 31
PRINT "Marko Heikkil„"
LOCATE 10, 24
PRINT "OHJELMOINTI/TEKNINEN TOTEUTUS:"
LOCATE 11, 31
PRINT "Asko Kivineva"
LOCATE 13, 33
PRINT "TUOTTAJA:"
LOCATE 14, 31
PRINT "Kalman Varjot"
LOCATE 20, 20
PRINT "http:\\personal.inet.fi\kalman.varjot"
LOCATE 21, 27
PRINT "kalman.varjot@pp.inet.fi"
v = 355
v2 = 0
270
LINE (0, v)-(600, v), 0
LINE (0, v2)-(600, v2), 0
aika8 = aika8 + 1
c$ = INKEY$
IF c$ = " " THEN END
IF aika8 > 50000 AND varjo = 0 THEN
varjo = 1
aika8 = 0
END IF
IF v < 50 AND varjo = 1 THEN END
IF varjo <> 0 AND aika8 = 300 THEN
v = v - 2
v2 = v2 + 2
aika8 = 0
END IF
GOTO 270


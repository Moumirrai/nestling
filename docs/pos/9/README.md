---
pageClass: default-page
---

# 9. KONSTRUKCE A NÁVRH SCHODIŠTĚ

## Názvosloví

### Schodišťové rameno

- ze schodišťových stupňů
- spojuje dvě různé výškové úrovně
- zahrnuje i nosnou konstrukci
- může být **NÁSTUPNÍ** nebo **VÝSTUPNÍ**

### Podesta

- ukončuje schodišťové rameno
- může být **HLAVNÍ** (v úrovni patra) nebo **VEDLEJŠÍ**

### Mezipodesta

- spojuje ramena

### Schodišťová zeď

- omezuje prostor schodiště
- často slouží jako nosná konstrukce

### Schodišťové stupně

- prvky schodišťového ramene
- skládají se z:
  - **STUPNICE** - horní plocha
  - **PODSTUPNICE** - přední svislá plocha
  - **ČELO STUPNĚ** - boční svislá plocha
- **JALOVÝ STUPEŇ** - zabudovaný do podesty
- **UKONČOVACÍ STUPEŇ** - poslední výstupní stupeň

### Schodnice

- šikmý nosník podporující schodišť. rameno nebo stupně

### Zrcadlo

- prostor vzniklý mezi schodišťovými rameny

### Výstupní čára

- čára spojující přední hrany stupňů v ose výstupu

<img class="centered_image" src="/images/pos/9/nazvoslovi.jpg" />

## Rozdělení

### Podle konstrukce

#### S plně podporovanými stupni

- **PAŽENÁ**

  - na terénu
  - venkovní

- **PODEZDĚNÁ**

  - většinou venkovní s malým počtem stupňů
  - jsou plně podezděny

- **DESKOVÁ**

  - železobetonová montovaná a monolitická schodiště
  - nosnou konstrukci tvoří deska
  - jsou buďto vetknutá do podesty, nebo spojitě zalomená a podestu podepírají

#### S oboustranně podporovanými stupni

- **SCHODNICOVÁ**

  - nejčastěji u dřevěných a kovových schodišť

  - nosnou část tvoří schodnice - jedna nebo více

- **VŘETENOVÁ**

  - jsou v místě zrcadla podepřena stěnou (vřetenovou zdí)

- **VISUTÁ**

  - stupně jsou jednostranně vetknuté do stěn nebo schodnic

  - jsou velmi pracná, a během výstavby nepraktická

- **ZAVĚŠENÁ**

  - stupně jsou zavěšeny na ocelových táhlech

  - musí se překrývat o 8 až 10 cm

  - bývají bez podstupnic

- **KONZOLOVITĚ VETKNUTÁ**

<img class="centered_image" src="/images/pos/9/rozdeleni_konstrukce.jpg" />

### Podle materiálu

- **KAMENNÉ**

- **CIHELNÉ**

- **SKLENĚNÉ**

- **DŘEVĚNÉ**

- **BETONOVÉ**

- **OCELOVÉ**

- **KOMBINOVANÉ**

- **JINÉ MATERIÁLY**

## Návrh a výpočet

::: tip POSTUP VÝPOČTU SCHODIŠTĚ

1. Zjistíme výšku k překonání
2. Navrhneme výšku stupně <Badge type="warning" text="150 - 180mm" vertical="middle" />
3. Výšku schodiště vydělíme výškou stupně a zaokrouhlíme na celé číslo (u dvouramenného schodiště by měl počet být sudý)
4. Výšku vydělíme zvoleným číslem a dostaneme tak výšku stupně $v$
5. S pomocí [Lehmanova vzorce](../9/#navrh-rozmeru-schodistoveho-stupne) vypočítáme šířku stupně $š$
6. Vypočítáme sklon $tan\alpha = \frac{v}{š}$
7. Vypočteme délku schodišťového ramene $L = (n-1) * b$ kde $n$ je počet schodišťových stupňů
8. Spočítáme a zkontrolujeme jestli vyhovuje [podchodná](../9/#podchodna-vyska) a [průchodná](../9/#pruchodna-vyska) výška

:::

- šířka ramene je dána typem budovy a požárními předpisy

- šířka podest se musí rovnat **minimálně šířce ramen**
- u dvouramenného schodiště je šířka zrcadla minimálně **100 mm**

### Návrh rozměrů schodišťového stupně

::: tip LEHMANŮV VZOREC
$2*v+š = 630mm$

$v$ - výška stupně

$š$ - šířka stupně

630 mm - průměrná délka kroku
:::

<img class="centered_image" src="/images/pos/9/navrh_stupne.jpg" />

### Podchodná výška

::: tip VZOREC
$h_p = 1500 + \frac{750}{cos\alpha }$

$h_p$ = podchodná výška svisle od přední hrany stupně v mm

$\alpha$ = sklon schodišťového ramene
:::

- **minimální podchodná výška je** <Badge type="warning" text="2100 mm" vertical="middle" />

<img class="centered_image" src="/images/pos/9/podchodna_vyska.jpg" />

### Průchodná výška

::: tip VZOREC
$h_{pr} = 750 + 1500 × cos\alpha$

$h_{pr}$ - průchodná výška

$\alpha$ - sklon schodišťového ramene
:::

- **minimální průchodná výška je** <Badge type="warning" text="1900 mm" vertical="middle" />

<img class="centered_image" src="/images/pos/9/pruchodna_vyska.jpg" />

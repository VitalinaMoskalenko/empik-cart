# Wymagania

Node wersja 12.x lub wyższa

# Uruchomienie

Instalacja zależności:

``` yarn ```


Uruchomienie projektu:

``` yarn start ```

# API

W ramach projektu dostępne jest rest API:

## **GET** /api/cart

Zwraca zawartość koszyka.

### Odpowiedź

JSON z listą obiektów z polami:

* **pid** - identyfikator produktu
* **name** - nazwa produktu
* **price** - cena produktu
* **max** - maksymalna liczba sztuk produktu jaka może być dodana do koszyka
* **min** - minimalna liczba sztuk produktu jaka może być dodana do koszyka
* **isBlocked** - określa, czy można zmienić liczbę sztuk produktu dodanych do koszyka


Przykład zwracanych danych:
```
[
    {
        "pid": "8e5e1248-c799-4937-9acc-2b3ab0e034ff",
        "name": "Patelnia",
        "price": "89.99",
        "max": 10,
        "min": 1,
        
    }
]
```

## **POST** /api/product/check

Sprawdza, czy wprowadzona liczba sztuk produktu jest poprawna

### Zapytanie

Obiekt JSON z polami:

* **pid** - identyfikator sprawdzanego produktu
* **quantity** - wprowadzona liczba sztuk produktu

Przykład:

```
{
    "pid": "51630312-2166-4cae-9590-ad77fd9f4a55",
    "quantity": 1
}
```

### Odpowiedź

Obiekt JSON z polami:

* **isError** - określa czy wystąpił błąd
* **success** - określa czy wprowadzone dane są poprawne
* **message** - wiadomość (w przypadku wystąpienia błędu)
* **errorType** - typ błędu (INCORRECT_BODY, INCORRECT_TYPE, MISSING_PROPERTY, NOT_FOUND, INCORRECT_QUANTITY)

Przykład:

```
{
    "isError": true,
    "success": false,
    "message": "Product not found",
    "errorType": "NOT_FOUND"
}
```

### Obsługa błędów
Komponent MinMaxToggle ma zmieniony count by obsługiwał nieobsługiwane wartości w celu przedstawienia działania obsługi błędów. W rzeczywistej aplikacji naleażło by wyeliminować dodawanie/odejmowanie liczby 1 i komponent bazował by na wartościach min/max. Obsługa błędów stanowiła by dodatkowe zabezpieczenie przed niepożądanym atakiem.


# Beauty studio landing page

🔗 [See demo version.](https://ya-galyuk.github.io/beauty-studio-golynska/)

## Translate

### With Node.js

1. Add a new `lang.json` file to root folder.

   Like this:
   ```json
   {
      "object-property": {
        "child-object-property": {
            "ua": "UA value",
            "ru": "RU value",
            "en": "EN value"
          }
      } 
   }
   ```

2. Generate monolingual files
   ```shell
   node splitMultiLangJson.js
   ```

2. Install mustache
   ```shell
   npm install mustache --save
   ```

3. Create `html` file from `mustache` template

   `index.html`
   ```shell
   mustache lang/ua.json index.mustache > ua/index.html
   mustache lang/ru.json index.mustache > index.html
   mustache lang/en.json index.mustache > en/index.html
   ```

   `products.html`
   ```shell
   mustache lang/ua.json products.mustache > ua/products.html
   mustache lang/ru.json products.mustache > products.html
   mustache lang/en.json products.mustache > en/products.html
   ```

### Without Node.js

1. Add a new `YOUR_LANGUAGE_CODE.json` file to `./lang` folder.

   Like this:
   ```json
   {
     "object-property": {
       "child-object-property": "value"
     }
   }
   ```

2. Run
   ```shell
   mustache lang/YOUR_LANGUAGE_CODE.json TEMPLATE_NAME.mustache > OUTPUT_FILE_NAME.html
   ```

## Popup

Popup block: `<div id="unique-name-popup" class="popup"></div>`

Button: `<a href="#unique-name-popup" class="popup-link"></a>`

## Filter

Add `dermaquest`, `holyland` or `bio_matrix` class for filter card.

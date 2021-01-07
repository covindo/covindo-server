**Covindo**
----

### Get all hospitals

* **URL**
  `/hospitals`

* **Method:**
  `GET`
  
* **Data Params**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      [
        {
          "name": "string",
          "address": "string",
          "region": "string",
          "phone": "string",
          "province": "string"
        },
      ]
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
      ```json
      { 
        "message": "Internal server error", 
      }
      ```

* **Sample Call:**

  `localhost:3000/hospitals`

### Get all news

* **URL**
  `/news`

* **Method:**
  `GET`
  
* **Data Params**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      [
        {
          "status": "string",
          "totalResults": "integer",
          "articles": [
            {
              "source": {
                "id": "integer",
                "name": "string"
              },
              "author": "string",
              "title": "string",
              "description": "string",
              "url": "string",
              "urlToImage": "string",
              "publishedAt": "string",
              "content": "string"
            },
            ...
          ],
        },
      ]
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
      ```json
      { 
        "message": "Internal server error", 
      }
      ```

* **Sample Call:**

  `localhost:3000/news`

### Get all stats

* **URL**
  `/stats`

* **Method:**
  `GET`
  
* **Data Params**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "name": "string",
        "positif": "string",
        "sembuh": "string",
        "meninggal": "string",
        "dirawat": "string"
      }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
      ```json
      { 
        "message": "Internal server error", 
      }
      ```

* **Sample Call:**

  `localhost:3000/stats`

### Get all stats by province

* **URL**
  `/stats/provinces`

* **Method:**
  `GET`
  
* **Data Params**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      [
        {
            "attributes":{
            "FID": "integer",
            "Kode_Provi": "integer",
            "Provinsi": "string",
            "Kasus_Posi": "integer",
            "Kasus_Semb": "integer",
            "Kasus_Meni": "integer",
          }
        },
        ...
      ]
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
      ```json
      { 
        "message": "Internal server error", 
      }
      ```

* **Sample Call:**

  `localhost:3000/stats/provinces`
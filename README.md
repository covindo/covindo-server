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

### Get all provinces data

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

### Get all stats by province

* **URL**
  `/stats/provinces/:province_name`

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
        }
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
  OR

  * **Code:** 404 DATA NOT FOUND <br />
    **Content:** 
      ```json
      { 
        "message": "Data not found", 
      }
      ```
* **Sample Call:**

  `localhost:3000/stats/provinces/Jawa%20Barat`

### Post login

* **URL**
  `/login`

* **Method:**
  `POST`
  
* **Data Params**
  ```json
  {
    "email": "string",
    "password": "string"
  }  
  ```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "access_token": "string",
        "userData": {
          "email": "string"
        }
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
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
      ```json
      { 
        "message": "Unauthorized. Please try again with valid credentials", 
      }
      ```
* **Sample Call:**

  `localhost:3000/login`

### Post register

* **URL**
  `/register`

* **Method:**
  `POST`
  
* **Data Params**
  ```json
  {
    "email": "string",
    "password": "string"
  }  
  ```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "id": "integer",
        "email": "string"
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
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
      ```json
      { 
        "message": "Unauthorized. Please try again with valid credentials", 
      }
      ```
* **Sample Call:**

  `localhost:3000/register`
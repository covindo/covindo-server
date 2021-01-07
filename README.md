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
# Sunbasedata Assignment

This assignment involves integrating several APIs to create a basic web application with three main screens: Login, Customer List, and Customer Details.
- View demo video [here](https://firebasestorage.googleapis.com/v0/b/github-895c7.appspot.com/o/assignment%2Fsunbasedata%2FLogin%20Page%20-%20Google%20Chrome%202023-10-21%2018-35-57.zip?alt=media&token=48d340f5-7d67-46d6-941f-2e048c44bf6b&_gl=1*oz5bek*_ga*MjA3OTcyNTA1Ni4xNjkzNzQxMzYy*_ga_CW55HF8NVT*MTY5Nzg5NjA0MC4zNS4xLjE2OTc4OTYyMzkuMTguMC4w)
- Note that Demo video is in zip format

## Authentication

- **Endpoint**: [Authentication API](https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp)
- **Method**: POST
- **Response**: 200 (Success), 401 (Failure: Invalid Authorization)

## Create a New Customer

- **Endpoint**: [Create Customer API](https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp)
- **Method**: POST
- **Response**: 201 (Success), 400 (Failure: Missing Name)

## Get Customer List

- **Endpoint**: [Get Customer List API](https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp)
- **Method**: GET
- **Response**: 200 (Success)

## Delete a Customer

- **Endpoint**: [Delete Customer API](https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp)
- **Method**: POST
- **Response**: 200 (Success), 500 (Failure: Not deleted), 400 (Failure: UUID not found)

## Update a Customer

- **Endpoint**: [Update Customer API](https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp)
- **Method**: POST
- **Response**: 200 (Success), 500 (Failure: UUID not found), 400 (Failure: Empty Body)


## Basic Web Application

**Created a basic web application with the following screens:**

1. **Login Screen**: Authenticate the user to receive a bearer token for further API calls.

2. **Customer List Screen**: Display a list of customers using the token obtained during authentication.

3. **Customer Details Screen**: Add, update, or delete customers using the respective APIs.


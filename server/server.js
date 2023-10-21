const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    try {
        const apiURL = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp"; // External API URL

        const response = await axios.post(apiURL, req.body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/customer-list', async (req, res) => {
    try {
        const customerListURL = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list";
        const response = await axios.get(customerListURL, {
            headers: {
                'Authorization': req.headers.authorization, // Forward the bearer token
            },
        });

        const data = response.data;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/create-customer', async (req, res) => {
    try {
        const customerCreateURL = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create"; // URL for creating a new customer
        const requestData = req.body;

        // Check if 'first_name' and 'last_name' are provided in the request body
        if (!requestData.first_name || !requestData.last_name) {
            res.status(400).json({ error: 'First Name or Last Name is missing' });
            return;
        }

        const response = await axios.post(customerCreateURL, requestData, {
            headers: {
                'Authorization': req.headers.authorization, // Forward the bearer token
                'Content-Type': 'application/json',
            },
        });

        res.status(201).json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/delete-customer/:uuid', async (req, res) => {
    try {
        console.log(req.params.uuid)
        const customerDeleteURL = `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=${req.params.uuid}`;

        const response = await axios.post(customerDeleteURL, null, {
            headers: {
                'Authorization': req.headers.authorization, // Forward the bearer token
            },
        });

        if (response.status === 200) {
            res.status(200).json({ message: 'Successfully deleted' });
        } else if (response.status === 500) {
            res.status(500).json({ error: 'Error: Customer not deleted' });
        } else if (response.status === 400) {
            res.status(400).json({ error: 'Error: UUID not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/update-customer/:uuid', async (req, res) => {
    try {
        const customerUpdateURL = `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid=${req.params.uuid}`;

        if (Object.keys(req.body).length == 0) {
            res.status(400).json({ error: 'Error: Body is empty' });
            return;
        }

        const response = await axios.post(customerUpdateURL, req.body, {
            headers: {
                'Authorization': req.headers.authorization, // Forward the bearer token
                'Content-Type': 'application/json',
            },
        });


        if (response.status === 200) {
            res.status(200).json({ message: 'Successfully updated' });
        } else if (response.status === 500) {
            res.status(500).json({ error: 'Error: UUID not found' });
        } else if (response.status === 400) {
            res.status(400).json({ error: 'Error: Body is empty' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});

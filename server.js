const http = require('http');
const axios = require('axios');

const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-anon-key';

const getData = async () => {
  try {
    const response = await axios.get(`${supabaseUrl}/rest/v1/your-table-name`);
    console.log('Data fetched:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


const postData = async () => {
  try {
    const response = await axios.post(`${supabaseUrl}/rest/v1/your-table-name`, {
      column1: 'value1',
      column2: 'value2',
      column3: 'value3',
    }, {
      headers: {
        'apikey': supabaseKey,
        'Content-Type': 'application/json',
      },
    });
    console.log('Data inserted:', response.data);
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};


const putData = async () => {
  try {
    const response = await axios.put(`${supabaseUrl}/rest/v1/your-table-name/your-item-id`, {
      column1: 'new-value1',
      column2: 'new-value2',
      column3: 'new-value3',
    }, {
      headers: {
        'apikey': supabaseKey,
        'Content-Type': 'application/json',
      },
    });
    console.log('Data updated:', response.data);
  } catch (error) {
    console.error('Error updating data:', error);
  }
};


const deleteData = async () => {
  try {
    const response = await axios.delete(`${supabaseUrl}/rest/v1/your-table-name/your-item-id`);
    console.log('Data deleted:', response.data);
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

export {getData, postData, putData, deleteData};
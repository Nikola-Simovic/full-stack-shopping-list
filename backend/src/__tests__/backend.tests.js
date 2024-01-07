const request = require('supertest');
const app = require('../app');

describe('The shopping lists base GET endpoint test',()=>{
    it('should return a shopping list in JSON format', async ()=>{
        const response = await request(app).get('/api/v1/items');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([
            {
                id:1,
                name:"Chocolate",
                quantity:1,
            },
            {
                id:2,
                name:"Cevapi",
                quantity:1,
            },
            {
                id:3,
                name:"Red bull (not sponsored)",
                quantity:1,
            },
        ]);

    });
});

describe('The shopping lists GET by ID endpoint test',()=>{
    it('should return a single shopping list item if the id is present', async ()=>{
        const response = await request(app).get('/api/v1/items/3');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            id:3,
            name:"Red bull (not sponsored)",
            quantity:1,
        },);

    });
});

describe('The shopping lists wrong-address-TEST',()=>{
    it('should return 404 when the wrong address is put', async ()=>{
        const response = await request(app).get('/api/v1/absolutelynotitems');

        expect(response.statusCode).toBe(404);

    });
});


describe('Shopping list basic POST functionality test', () =>{  
    it('It should create a new shopping list item', async () =>{
        const newItem = {
            name : "A golden retriever????" ,
            quantity:1
        };
        const response = await request(app)
            .post('/api/v1/items')
            .set('Content','application/json')
            .send(newItem);
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body.id).toBeTruthy();
        expect(response.body.name).toEqual(newItem.name);
    })
});


describe('Shopping list POST validation test', () =>{  
    it('It should not allow a new item without a name', async () =>{
        const newItem = {
            quantity:1
        };
        const response = await request(app)
            .post('/api/v1/items')
            .set('Content','application/json')
            .send(newItem);
        expect(response.statusCode).toBe(400);
        expect(response.body.id).toBeFalsy();
        expect(response.text).toEqual('"name" is required');
    })
});



describe('The shopping lists DELETE and PUT endpoint tests', () => {
    it('should add and then delete an item and return 204 if it was deleted successfully', async () => {
      const itemToDelete = {
        id: 1,
        name: 'Not a golden retriever (deletable)',
        quantity:1,
      };

      await request(app)
        .put(`/api/v1/items/1`)
        .set('Content-Type', 'application/json')
        .send(itemToDelete);
  
  
      const response = await request(app)
        .delete(`/api/v1/items/1`)
        .set('Content-Type', 'application/json');
  
      expect(response.status).toBe(204);

      });

      it('should say not found if there is no item with that index', async () => {
    
        const response = await request(app)
          .delete(`/api/v1/items/againWithTheRetrievers..`)
          .set('Content-Type', 'application/json');
    
        expect(response.status).toBe(404);
        expect(response.text).toEqual('Not found');
  
        });
  });
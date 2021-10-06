import app from "../index";
import chai from "chai";
import chaiHttp from "chai-http";
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Hello API Request', () => {
  it('should return response on call', () => {
    return chai.request(app).get('/api/menu/items')
      .then(res => {
          //console.log(res);
        chai.expect(res.text).to.eql("Testing");
      })
      
  })
})
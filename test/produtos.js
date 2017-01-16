var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProdutosController',function(){
    it('#listagem json',function(done){
        request.get('/produtos')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200,done);
    });

    it('cadastrar novo produto com dados invalidos', function(done){
    	request.post('/produtos')
    	.send({titulo:"", descricao:"novo livro"})
    	.expect(400,done);
    });

    it('cadastrar novo produto com dados validos', function(done){
    	request.post('/produtos')
    	.send({titulo:"claudemir",preco:22, descricao:"novo livro"})
    	.expect(302,done);
    });
});
const routes = require("next-routes")();

routes
    .add("/candidates/new","/candidates/new")
    .add("/candidates/:id","/candidates/show");
module.exports=routes  
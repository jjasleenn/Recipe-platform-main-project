import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Recipe Platform API (v1)",
      version: "1.0.0",
      description: "API documentation for Recipe Platform ",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local development server",
      },
    ],
  },
    apis: ["./src/api/v1/routes/*.ts"]
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;

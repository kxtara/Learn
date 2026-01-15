import swaggerJsdoc, { type Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
      description: "API documentation for frontend developers",
    },
    servers: [{ url: "http://localhost:3000" }],
    components: {
      schemas: {
        // Match your TypeScript User interface
        User: {
          type: "object",
          properties: {
            user_id: { type: "integer", example: 1 },
            username: { type: "string", example: "Kiara" },
            email: { type: "string", example: "kiara@example.com" },
            created_at: { type: "string", format: "date-time", example: "2026-01-15T12:00:00Z" },
          },
        },
        UserInput: {
          type: "object",
          required: ["username", "email"],
          properties: {
            username: { type: "string", example: "Kiara" },
            email: { type: "string", example: "kiara@example.com" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"], // Make sure this points to your routes folder
};

export const swaggerSpec = swaggerJsdoc(options);
export { swaggerUi };

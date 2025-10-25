// swagger.js
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce API",
      version: "1.0.0",
      description: `
## 🛍️ Ecommerce REST API Documentation

### 🔐 Authentication Workflow
1. Register a user — **POST** \`/api/users/register\`
2. Login with credentials — **POST** \`/api/users/login\`
3. Copy the **token** from the login response.
4. Click the **Authorize 🔒** button at the top right of Swagger.
5. Paste the token as:
   \`\`\`
   Bearer <your-token-here>
   \`\`\`
6. Now you can call all protected routes (like create order, create product, etc.)

---

### 🧠 Notes
- JWT tokens expire in **7 days**.
- Admin-only routes (like creating products) require a user with \`isAdmin: true\`.
- All protected routes require:
  \`\`\`
  Authorization: Bearer <token>
  \`\`\`

Enjoy testing your API interactively 🚀
      `,
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local Development Server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Enter your JWT token as: Bearer <token>",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    swaggerOptions: {
      persistAuthorization: true, // ✅ Keeps your token even after refresh
    },
  }));
  console.log(`📘 Swagger Docs available at: http://localhost:5000/api-docs`);
};

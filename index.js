import "dotenv/config";
import express from "express";
import cors from "cors";

import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const keyVaultName = "my-keyvault-saket";
const url = `https://${keyVaultName}.vault.azure.net`;

const credential = new DefaultAzureCredential();
const client = new SecretClient(url, credential);

async function getSecret() {
  try {
    const secret = await client.getSecret("DB-PASSWORD");
    console.log("Secret from Key Vault:", secret.value);
  } catch (err) {
    console.error("Key Vault auth error:", err);
  }
}

getSecret();

const app = express();

app.use(
  cors({
    origin:
      "https://my-react-app-cdbte4emf8hfeaaw.centralindia-01.azurewebsites.net/",
  }),
);
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Saket" },
    { id: 2, name: "EY ready dev 👻👻" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

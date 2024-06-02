import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ruta para manejar la actualización del contador de visitas
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "counter.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    let counter = JSON.parse(data);
    counter.visits += 1;

    fs.writeFile(filePath, JSON.stringify(counter), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing file" });
      }

      res.json({ visits: counter.visits });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Inicializar el archivo counter.json si no existe
const initializeCounter = () => {
  const filePath = path.join(__dirname, "counter.json");
  if (!fs.existsSync(filePath)) {
    const initialData = { visits: 0 };
    fs.writeFileSync(filePath, JSON.stringify(initialData));
  }
};

initializeCounter();

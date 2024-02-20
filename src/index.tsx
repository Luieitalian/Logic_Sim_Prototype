import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react'
import Window from "./components/Window"
import "@/src/style.css"

const container = document.getElementById('window');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <StrictMode>
        <Window />
    </StrictMode>
);

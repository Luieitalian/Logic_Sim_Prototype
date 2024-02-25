import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react'
import Window from "@/src/components/Window"
import "@/src/style.css"

const window = document.getElementById('window');
const root = createRoot(window!);
root.render(
    <StrictMode>
        <Window />
    </StrictMode>
);

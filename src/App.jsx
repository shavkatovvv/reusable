import React, { useState } from "react";
import { Modal } from "./components/modal";
import { Btn } from "./components/btn/btn";
import useToggleTheme from "./components/mode/mode";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [state, setState] = useToggleTheme(false);

    const handleOpen = () => setIsModalOpen(true);
    const handleClose = () => setIsModalOpen(false);

    return (
        <div className="container bg-bodyColor">
            <button onClick={handleOpen}>Open Modal</button>
            <Modal show={isModalOpen} onClose={handleClose}>
                <div className="text-textColor">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima delectus assumenda optio placeat labore architecto
                    eius cupiditate inventore doloribus autem.
                </div>
            </Modal>

            <Btn variant="primary">btn1</Btn>
            <Btn variant="secondary">btn2</Btn>

            <div>
                <button onClick={() => setState(state)}>mode</button>
            </div>
        </div>
    );
}

export default App;

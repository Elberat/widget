import { useEffect, useState } from 'react';
import './App.css';
import WidgetIcon from './components/widget-icon/WidgetIcon';
import WidgetWindow from './components/widget-window/WidgetWindow';
import { useDispatch } from 'react-redux';
import { fetchChat } from './store/actions/chat-actions';

function App() {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (
                (event.metaKey && event.key === 'k') ||
                (event.ctrlKey && event.key === 'k')
            ) {
                switcher();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        dispatch(fetchChat());
    }, []);

    const switcher = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className='App'>
            {open && <WidgetWindow />}

            <WidgetIcon switcher={switcher} />
        </div>
    );
}

export default App;

import {useEffect} from 'react';

const useLink = url => {
    useEffect(() => {
        const link = document.createElement('link');

        link.href = url;
        link.rel = "stylesheet";
        link.async = true;

        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        }
    }, [url]);
};

export default useLink;

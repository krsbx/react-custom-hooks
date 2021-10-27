import useAsync from './useAsync';

const useScript = (url, element) => {
  return useAsync(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;

    if (element) {
      switch (element) {
        case 'head':
          document.head.appendChild(script);
          break;

        default:
          document.body.appendChild(script);
          break;
      }
    }

    return new Promise((resolve, reject) => {
      script.addEventListener('load', resolve);
      script.addEventListener('error', reject);
    });
  });
};

export default useScript;

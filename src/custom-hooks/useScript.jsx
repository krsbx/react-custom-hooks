import useAsync from './useAsync';

const useScript = (url, element = document.body) => {
  return useAsync(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;

    element.appendChild(script);

    return new Promise((resolve, reject) => {
      script.addEventListener('load', resolve);
      script.addEventListener('error', reject);
    });
  });
};

export default useScript;

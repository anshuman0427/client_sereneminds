import { useState, useEffect } from 'react';

// Cached script statuses
const cachedScriptStatuses = {};

function getScriptNode(src) {
  const node = document.querySelector(`script[src="${src}"]`);
  const status = node ? node.getAttribute('data-status') : undefined;

  return { node, status };
}

export default function useScript(src) {
  const [status, setStatus] = useState(() => {
    if (typeof window === 'undefined') {
      return 'loading'; // SSR Handling
    }
    return cachedScriptStatuses[src] || 'loading';
  });

  useEffect(() => {
    const cachedScriptStatus = cachedScriptStatuses[src];
    if (cachedScriptStatus === 'ready' || cachedScriptStatus === 'error') {
      setStatus(cachedScriptStatus);
      return;
    }

    const script = getScriptNode(src);
    let scriptNode = script.node;

    if (!scriptNode) {
      scriptNode = document.createElement('script');
      scriptNode.src = src;
      scriptNode.async = true;
      scriptNode.setAttribute('data-status', 'loading');
      document.body.appendChild(scriptNode);

      const setAttributeFromEvent = (event) => {
        const scriptStatus = event.type === 'load' ? 'ready' : 'error';
        scriptNode.setAttribute('data-status', scriptStatus);
      };

      scriptNode.addEventListener('load', setAttributeFromEvent);
      scriptNode.addEventListener('error', setAttributeFromEvent);
    } else {
      setStatus(script.status || cachedScriptStatus || 'loading');
    }

    const setStateFromEvent = (event) => {
      const newStatus = event.type === 'load' ? 'ready' : 'error';
      setStatus(newStatus);
      cachedScriptStatuses[src] = newStatus;
    };

    scriptNode.addEventListener('load', setStateFromEvent);
    scriptNode.addEventListener('error', setStateFromEvent);

    return () => {
      if (scriptNode) {
        scriptNode.removeEventListener('load', setStateFromEvent);
        scriptNode.removeEventListener('error', setStateFromEvent);
        try {
          scriptNode.remove();
        } catch (error) {
          // Ignore errors
        }
      }
    };
  }, [src]);

  return status;
}

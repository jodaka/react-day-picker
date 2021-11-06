import * as React from 'react';

import OriginalCodeBlock from '@theme-original/CodeBlock';

// Default implementation, that you can customize
/**
 * Very basic CodeBlock to run an app and show its source.
 *
 * ```include
 * filename
 * ```
 */
export default function CodeBlock(props) {
  const iframe = React.useRef<HTMLIFrameElement>();
  const { children, className } = props;

  if (className !== 'language-include') {
    return (
      <OriginalCodeBlock className="language-jsx" {...props}>
        {children}
      </OriginalCodeBlock>
    );
  }

  const fileName = children.replace(/\n*/gi, '');
  try {
    require(`../../../examples/${fileName}`).Example;
  } catch (e) {
    console.error('Error requiring %s', `../../../examples/${fileName}`, e);
    return <OriginalCodeBlock {...props}>{e.message}</OriginalCodeBlock>;
  }
  const src = require(`!!raw-loader!../../../examples/${fileName}`).default;
  const iframeSrc = `/render?component=${fileName}`;

  function resizeIframe() {
    const height = iframe.current.contentWindow.document.body.scrollHeight;
    iframe.current.height = height.toString();
  }
  return (
    <div className="CodeBlock">
      <OriginalCodeBlock {...props} className="language-tsx">
        {src.replace(`import React from 'react';\n`, '')}
      </OriginalCodeBlock>
      <details open>
        <summary>
          Output{' '}
          <small className="CodeBlockTools">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                resizeIframe();
              }}
              target="_blank"
            >
              Resize ↓
            </a>{' '}
            |{' '}
            <a href={iframeSrc} target="_blank">
              New Window ↗
            </a>
          </small>
        </summary>
        <iframe
          height="380"
          ref={iframe}
          className="CodeBlockIframe"
          src={iframeSrc}
        />
      </details>
    </div>
  );
}
